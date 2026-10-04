import type { MetadataRoute } from "next";
import { sanityClient, projectSlugsQuery } from "@/lib/sanity";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mcgrathbd.com";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/projects`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/projects/ongoing`, changeFrequency: "daily", priority: 0.7 },
    { url: `${siteUrl}/projects/upcoming`, changeFrequency: "daily", priority: 0.6 },
    { url: `${siteUrl}/projects/completed`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/gallery`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/career`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ];

  try {
    const slugs: string[] = await sanityClient.fetch(projectSlugsQuery);
    const projectRoutes: MetadataRoute.Sitemap = slugs
      .filter((slug) => typeof slug === "string" && slug.length > 0)
      .map((slug) => ({
        url: `${siteUrl}/projects/${slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
    return [...staticRoutes, ...projectRoutes];
  } catch (error) {
    console.error("sitemap: failed to fetch projects:", error);
    return staticRoutes;
  }
}

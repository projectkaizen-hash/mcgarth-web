import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/global/header";
import ContactModal from "@/components/global/contact-modal";
import Footer from "@/components/global/footer";
import {
  sanityClient,
  projectBySlugQuery,
  projectSeoQuery,
  projectSlugsQuery,
  projectsSummaryQuery,
} from "@/lib/sanity";
import { Project } from "@/lib/types";
import SingleProjectContent from "@/components/projects/singleProject";
import { notFound } from "next/navigation";

/** Refresh content from Sanity at most every 5 minutes (ISR). */
export const revalidate = 300;

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project: projectSlug } = await params;

  const [project, allProjects] = await Promise.all([
    sanityClient.fetch<Project>(projectBySlugQuery, { slug: projectSlug }),
    sanityClient.fetch<Project[]>(projectsSummaryQuery),
  ]);

  if (!project) notFound();

  const projectIndex = allProjects.findIndex(
    (p) => p.href === `/projects/${projectSlug}`,
  );

  return (
    <>
      <Header />
      <ContactModal />
      <SingleProjectContent
        project={project}
        index={projectIndex}
        allProjects={allProjects}
      />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "/projects",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.title,
                item: `/projects/${projectSlug}`,
              },
            ],
          }),
        }}
      />
          <Script type="module" src="/_astro/Hero.astro_astro_type_script_index_0_lang.omEH7RPR.js" />
</>
  );
}

export async function generateStaticParams() {
  const slugs: string[] = await sanityClient.fetch(projectSlugsQuery);
  return slugs
    .filter((slug) => typeof slug === "string" && slug.length > 0)
    .map((project) => ({ project }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project: projectSlug } = await params;
  const project = await sanityClient.fetch<{
    title: string;
    description?: string;
    year?: string;
    type?: string;
    location?: string;
    image?: string;
  }>(projectSeoQuery, { slug: projectSlug });

  if (!project) return {};

  const title = project.title;
  const description =
    project.description ??
    `${project.title} — a residential construction project by McGrath BD${
      project.location ? ` in ${project.location}` : ""
    }.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${projectSlug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

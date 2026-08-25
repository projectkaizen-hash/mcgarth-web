import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { sanityServerClient } from "@/lib/sanity-server";

const userProjectsQuery = `
  *[_type == "project" && _id in $ids] | order(order asc) {
    _id,
    title,
    "href": "/projects/" + slug.current,
    "image": mainImage.asset->url,
    description,
    year,
    type,
    aspectRatio,
    "width": mainImage.asset->metadata.dimensions.width,
    "height": mainImage.asset->metadata.dimensions.height,
    location,
    startDate,
    deadline,
    order,
    "brochure": brochure.asset->url,
    "inspectionReport": inspectionReport.asset->url,
    "progressBlocks": coalesce(blocks[_type == "progressBlock"] {
      "progress25": coalesce(count(progress25), 0),
      "progress50": coalesce(count(progress50), 0),
      "progress75": coalesce(count(progress75), 0),
      "progress100": coalesce(count(progress100), 0)
    }, [])
  }
`;

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ids: string[] = (
    (token.projects as { _id: string }[]) ?? []
  ).map((p) => p._id);

  if (!ids.length) {
    return NextResponse.json([]);
  }

  const projects = await sanityServerClient.fetch(userProjectsQuery, { ids });
  return NextResponse.json(projects);
}
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { sanityServerClient } from "@/lib/sanity-server";
import { userProjectsQuery } from "@/lib/sanity";
import { serverEnv } from "@/lib/env";

export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: serverEnv.nextAuthSecret,
  });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ids: string[] = (token.projects ?? []).map((p) => p._id);

  if (!ids.length) {
    return NextResponse.json([]);
  }

  try {
    const projects = await sanityServerClient.fetch(userProjectsQuery, { ids });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching user projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

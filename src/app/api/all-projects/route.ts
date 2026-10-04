import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { sanityServerClient } from "@/lib/sanity-server";
import { portalProjectsQuery } from "@/lib/sanity";
import { serverEnv } from "@/lib/env";

export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: serverEnv.nextAuthSecret,
  });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Only employees can access all projects
  if (token.role !== "employee") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const projects = await sanityServerClient.fetch(portalProjectsQuery);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

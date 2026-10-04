import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { requireEnv } from "@/lib/env";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: requireEnv("NEXTAUTH_SECRET"),
    secureCookie: process.env.NODE_ENV === "production",
  });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard", "/analytics"],
};

import { createClient, type SanityClient } from "@sanity/client";
import { serverEnv } from "@/lib/env";

/**
 * Server-side Sanity client for authenticated reads (login lookups, portal
 * data). Uses a read-only viewer token when `SANITY_READ_TOKEN` is set so
 * the write-capable token never backs a read path.
 */
export const sanityServerClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "x37u2l54",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: serverEnv.sanityReadToken,
});

let writeClient: SanityClient | undefined;

/**
 * Write-capable client, only for mutations (e.g. job applications).
 * Never use this for reads. Created lazily on first mutation so importing
 * this module (build, tests, read paths) never requires SANITY_API_TOKEN.
 */
export function getSanityWriteClient(): SanityClient {
  if (!writeClient) {
    writeClient = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "x37u2l54",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: false,
      token: serverEnv.sanityWriteToken,
    });
  }
  return writeClient;
}

export const authUserQuery = `
  *[_type == "user" && email == $email][0] {
    _id,
    name,
    email,
    passwordHash,
    "projectIds": projects[]._ref
  }
`;

export const authEmployeeQuery = `
  *[_type == "employee" && email == $email][0] {
    _id,
    name,
    email,
    passwordHash,
    jobTitle,
    "profilePhoto": profilePhoto.asset->url
  }
`;

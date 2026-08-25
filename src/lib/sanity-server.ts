import { createClient } from "@sanity/client";
 
export const sanityServerClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
 
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
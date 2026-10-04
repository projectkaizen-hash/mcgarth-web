import "next-auth";

declare module "next-auth" {
  interface User {
    role: "client" | "employee";
    projects?: { _id: string }[];
    jobTitle?: string;
    profilePhoto?: string;
  }
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: "client" | "employee";
      projects?: { _id: string }[];
      jobTitle?: string;
      profilePhoto?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "client" | "employee";
    projects?: { _id: string }[];
    jobTitle?: string;
    profilePhoto?: string;
  }
}
import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { sanityServerClient, authUserQuery, authEmployeeQuery } from "@/lib/sanity-server";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // First check if it's a user
        const user = await sanityServerClient.fetch(authUserQuery, {
          email: credentials.email,
        });

        if (user?.passwordHash) {
          const isValid = await bcrypt.compare(
            credentials.password,
            user.passwordHash
          );

          if (isValid) {
            return {
              id: user._id,
              name: user.name,
              email: user.email,
              role: "client" as const,
              projects: (user.projectIds ?? []).map((id: string) => ({ _id: id })),
            };
          }
        }

        // If not a user, check if it's an employee
        const employee = await sanityServerClient.fetch(authEmployeeQuery, {
          email: credentials.email,
        });

        if (employee?.passwordHash) {
          const isValid = await bcrypt.compare(
            credentials.password,
            employee.passwordHash
          );

          if (isValid) {
            return {
              id: employee._id,
              name: employee.name,
              email: employee.email,
              role: "employee" as const,
              jobTitle: employee.jobTitle,
              profilePhoto: employee.profilePhoto,
            };
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        if (user.projects) token.projects = user.projects;
        if (user.jobTitle) token.jobTitle = user.jobTitle;
        if (user.profilePhoto) token.profilePhoto = user.profilePhoto;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id as string;
      session.user.role = token.role;
      if (token.projects) session.user.projects = token.projects;
      if (token.jobTitle) session.user.jobTitle = token.jobTitle;
      if (token.profilePhoto) session.user.profilePhoto = token.profilePhoto;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" as const },
};

const handler = NextAuth(authOptions);
export { handler };

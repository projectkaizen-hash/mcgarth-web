import NextAuth, { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import {
  sanityServerClient,
  authUserQuery,
  authEmployeeQuery,
} from "@/lib/sanity-server";
import { requireEnv } from "@/lib/env";
import { rateLimit, resetRateLimit } from "@/lib/rate-limit";

/**
 * bcrypt hash of an opaque throwaway string. Compared against when an
 * attempt fails so that every failed login performs exactly two bcrypt
 * comparisons regardless of whether the email exists — this defeats
 * account-enumeration timing probes and slows brute force to the bcrypt
 * rate.
 */
const TIMING_EQUALIZER_HASH =
  "$2b$10$KKLx2bqjO.vEUCu27fhKbunUyIx7dHCv0OHmfTIdEeqMMsf7ogakC";

const RATE_WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS_PER_EMAIL = 10;
const MAX_ATTEMPTS_PER_IP = 30;
/** Number of bcrypt comparisons every *failed* login attempt performs. */
const COMPARES_PER_FAILURE = 2;

type RequestHeaders = Record<string, string | string[] | undefined>;

function requestIp(headers: RequestHeaders | undefined): string {
  const forwarded = headers?.["x-forwarded-for"];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  if (value) {
    const first = value.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = headers?.["x-real-ip"];
  if (Array.isArray(real)) return real[0] ?? "unknown";
  return real ?? "unknown";
}

export const authOptions: AuthOptions = {
  // Fail fast at boot when the signing secret is missing.
  secret: requireEnv("NEXTAUTH_SECRET"),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;

        const ip = requestIp(req.headers);
        const emailKey = `login:email:${email.toLowerCase()}`;
        const ipKey = `login:ip:${ip}`;

        const allowed =
          rateLimit(emailKey, MAX_ATTEMPTS_PER_EMAIL, RATE_WINDOW_MS) &&
          rateLimit(ipKey, MAX_ATTEMPTS_PER_IP, RATE_WINDOW_MS);

        if (!allowed) {
          console.warn(`Login attempt rate-limited (ip=${ip})`);
          return null;
        }

        // bcrypt comparisons performed so far; used to equalize failure cost.
        let compares = 0;
        const compare = (hash: string) => {
          compares += 1;
          return bcrypt.compare(password, hash);
        };

        // First check if it's a user
        const user = await sanityServerClient.fetch(authUserQuery, {
          email,
        });

        if (user?.passwordHash && (await compare(user.passwordHash))) {
          resetRateLimit(emailKey);
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            role: "client" as const,
            projects: (user.projectIds ?? []).map((id: string) => ({
              _id: id,
            })),
          };
        }

        // If not a user, check if it's an employee
        const employee = await sanityServerClient.fetch(authEmployeeQuery, {
          email,
        });

        if (employee?.passwordHash && (await compare(employee.passwordHash))) {
          resetRateLimit(emailKey);
          return {
            id: employee._id,
            name: employee.name,
            email: employee.email,
            role: "employee" as const,
            jobTitle: employee.jobTitle,
            profilePhoto: employee.profilePhoto,
          };
        }

        // Equalize: every failed attempt costs exactly COMPARES_PER_FAILURE
        // bcrypt comparisons, whether or not the email exists.
        for (let i = compares; i < COMPARES_PER_FAILURE; i++) {
          await compare(TIMING_EQUALIZER_HASH);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        if (user.projects) token.projects = user.projects;
        if (user.jobTitle) token.jobTitle = user.jobTitle;
        if (user.profilePhoto) token.profilePhoto = user.profilePhoto;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
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

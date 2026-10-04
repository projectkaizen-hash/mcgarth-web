/**
 * Server-side environment validation.
 *
 * Secrets are validated at the point of use instead of with `!` non-null
 * assertions at module scope, so a missing variable fails with a clear
 * message on first use rather than crashing module import or silently
 * passing `undefined` into a client.
 */

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const serverEnv = {
  get nextAuthSecret(): string {
    return requireEnv("NEXTAUTH_SECRET");
  },
  /**
   * Token used for all server-side reads. A dedicated read-only viewer token
   * (`SANITY_READ_TOKEN`) is preferred so the write-capable token is never
   * exposed to read paths; falls back to `SANITY_API_TOKEN` for backwards
   * compatibility.
   */
  get sanityReadToken(): string | undefined {
    return process.env.SANITY_READ_TOKEN ?? process.env.SANITY_API_TOKEN;
  },
  get sanityWriteToken(): string {
    return requireEnv("SANITY_API_TOKEN");
  },
};

export interface GoogleServiceAccountCredentials {
  client_email: string;
  private_key: string;
}

/**
 * Parsed, validated GA4 configuration. Throws with a precise message when
 * the environment is incomplete or malformed.
 */
export function getGaAnalyticsConfig(): {
  credentials: GoogleServiceAccountCredentials;
  property: string;
} {
  const propertyId = requireEnv("GA4_PROPERTY_ID");
  const raw = requireEnv("GOOGLE_SERVICE_ACCOUNT_KEY");

  let credentials: GoogleServiceAccountCredentials;
  try {
    credentials = JSON.parse(raw);
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY is not valid JSON");
  }

  if (!credentials?.client_email || !credentials?.private_key) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_KEY must contain client_email and private_key",
    );
  }

  return { credentials, property: `properties/${propertyId}` };
}

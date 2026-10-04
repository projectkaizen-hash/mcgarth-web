import { afterEach, describe, expect, it, vi } from "vitest";
import { getGaAnalyticsConfig, requireEnv } from "./env";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("requireEnv", () => {
  it("throws naming the missing variable", () => {
    vi.stubEnv("SOME_MISSING_VAR", "");
    expect(() => requireEnv("SOME_MISSING_VAR")).toThrow(
      "Missing required environment variable: SOME_MISSING_VAR",
    );
  });

  it("returns the value when set", () => {
    vi.stubEnv("SOME_SET_VAR", "value");
    expect(requireEnv("SOME_SET_VAR")).toBe("value");
  });
});

describe("getGaAnalyticsConfig", () => {
  it("throws when GA4_PROPERTY_ID is missing", () => {
    vi.stubEnv("GA4_PROPERTY_ID", "");
    vi.stubEnv("GOOGLE_SERVICE_ACCOUNT_KEY", "{}");
    expect(() => getGaAnalyticsConfig()).toThrow("GA4_PROPERTY_ID");
  });

  it("throws a precise error for non-JSON credentials", () => {
    vi.stubEnv("GA4_PROPERTY_ID", "properties/123");
    vi.stubEnv("GOOGLE_SERVICE_ACCOUNT_KEY", "not-json");
    expect(() => getGaAnalyticsConfig()).toThrow(
      "GOOGLE_SERVICE_ACCOUNT_KEY is not valid JSON",
    );
  });

  it("throws when credentials lack key fields", () => {
    vi.stubEnv("GA4_PROPERTY_ID", "properties/123");
    vi.stubEnv("GOOGLE_SERVICE_ACCOUNT_KEY", JSON.stringify({ foo: "bar" }));
    expect(() => getGaAnalyticsConfig()).toThrow(
      "client_email and private_key",
    );
  });

  it("returns parsed credentials and prefixed property", () => {
    // GA4_PROPERTY_ID is the bare id; getGaAnalyticsConfig adds the prefix.
    vi.stubEnv("GA4_PROPERTY_ID", "123");
    vi.stubEnv(
      "GOOGLE_SERVICE_ACCOUNT_KEY",
      JSON.stringify({ client_email: "a@b.c", private_key: "k" }),
    );
    const config = getGaAnalyticsConfig();
    expect(config.property).toBe("properties/123");
    expect(config.credentials.client_email).toBe("a@b.c");
  });
});

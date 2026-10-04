import { afterEach, describe, expect, it, vi } from "vitest";
import { clientIp, rateLimit, resetRateLimit } from "./rate-limit";

afterEach(() => {
  vi.useRealTimers();
  // Drain known keys so tests cannot leak into each other.
  for (const key of ["a", "b", "ip-1", "ip-2"]) resetRateLimit(key);
});

describe("rateLimit", () => {
  it("allows attempts up to the limit and blocks the next one", () => {
    expect(rateLimit("a", 3, 60_000)).toBe(true);
    expect(rateLimit("a", 3, 60_000)).toBe(true);
    expect(rateLimit("a", 3, 60_000)).toBe(true);
    expect(rateLimit("a", 3, 60_000)).toBe(false);
  });

  it("tracks keys independently", () => {
    expect(rateLimit("ip-1", 1, 60_000)).toBe(true);
    expect(rateLimit("ip-1", 1, 60_000)).toBe(false);
    expect(rateLimit("ip-2", 1, 60_000)).toBe(true);
  });

  it("opens again after the window passes", () => {
    vi.useFakeTimers();
    vi.setSystemTime(0);
    expect(rateLimit("b", 1, 1_000)).toBe(true);
    expect(rateLimit("b", 1, 1_000)).toBe(false);
    vi.setSystemTime(1_001);
    expect(rateLimit("b", 1, 1_000)).toBe(true);
  });

  it("resetRateLimit clears a blocked key", () => {
    expect(rateLimit("b", 1, 60_000)).toBe(true);
    expect(rateLimit("b", 1, 60_000)).toBe(false);
    resetRateLimit("b");
    expect(rateLimit("b", 1, 60_000)).toBe(true);
  });
});

describe("clientIp", () => {
  it("uses the first x-forwarded-for hop", () => {
    const headers = new Headers({ "x-forwarded-for": "1.2.3.4, 5.6.7.8" });
    expect(clientIp(headers)).toBe("1.2.3.4");
  });

  it("falls back to x-real-ip", () => {
    const headers = new Headers({ "x-real-ip": "9.9.9.9" });
    expect(clientIp(headers)).toBe("9.9.9.9");
  });

  it("returns unknown when no headers are present", () => {
    expect(clientIp(new Headers())).toBe("unknown");
  });
});

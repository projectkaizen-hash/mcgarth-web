import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("next-auth/jwt", () => ({ getToken: vi.fn() }));
vi.mock("@/lib/sanity-server", () => ({
  sanityServerClient: { fetch: vi.fn().mockResolvedValue([]) },
  getSanityWriteClient: vi.fn(() => ({
    fetch: vi.fn(),
    create: vi.fn(),
    assets: { upload: vi.fn() },
  })),
  authUserQuery: "",
  authEmployeeQuery: "",
}));

import { getToken } from "next-auth/jwt";
import { GET as getAllProjects } from "@/app/api/all-projects/route";
import { GET as getUserProjects } from "@/app/api/user-projects/route";
import { GET as getAnalytics } from "@/app/api/analytics/route";
import { POST as postApplication } from "@/app/api/applications/route";

const mockedGetToken = vi.mocked(getToken);

function req(path: string, headers?: Record<string, string>) {
  return new NextRequest(`http://localhost${path}`, { headers });
}

beforeEach(() => {
  vi.stubEnv("NEXTAUTH_SECRET", "test-secret");
  // GA credentials intentionally absent: analytics must fail generically.
  vi.stubEnv("GOOGLE_SERVICE_ACCOUNT_KEY", "");
  vi.stubEnv("GA4_PROPERTY_ID", "");
  mockedGetToken.mockReset();
});

describe("GET /api/all-projects", () => {
  it("401s without a session", async () => {
    mockedGetToken.mockResolvedValue(null);
    const res = await getAllProjects(req("/api/all-projects"));
    expect(res.status).toBe(401);
  });

  it("403s for non-employees", async () => {
    mockedGetToken.mockResolvedValue({ role: "client" } as never);
    const res = await getAllProjects(req("/api/all-projects"));
    expect(res.status).toBe(403);
  });

  it("200s for employees", async () => {
    mockedGetToken.mockResolvedValue({ role: "employee" } as never);
    const res = await getAllProjects(req("/api/all-projects"));
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual([]);
  });
});

describe("GET /api/user-projects", () => {
  it("401s without a session", async () => {
    mockedGetToken.mockResolvedValue(null);
    const res = await getUserProjects(req("/api/user-projects"));
    expect(res.status).toBe(401);
  });

  it("200s with an empty list when the client has no projects", async () => {
    mockedGetToken.mockResolvedValue({ role: "client" } as never);
    const res = await getUserProjects(req("/api/user-projects"));
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual([]);
  });
});

describe("GET /api/analytics", () => {
  it("401s without a session (was fully public before the fix)", async () => {
    mockedGetToken.mockResolvedValue(null);
    const res = await getAnalytics(req("/api/analytics"));
    expect(res.status).toBe(401);
    await expect(res.json()).resolves.toEqual({ error: "Unauthorized" });
  });

  it("403s for clients", async () => {
    mockedGetToken.mockResolvedValue({ role: "client" } as never);
    const res = await getAnalytics(req("/api/analytics"));
    expect(res.status).toBe(403);
  });

  it("never leaks internal error details when GA env is missing", async () => {
    mockedGetToken.mockResolvedValue({ role: "employee" } as never);
    const res = await getAnalytics(req("/api/analytics"));
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body).toEqual({ error: "Failed to load analytics" });
    expect(JSON.stringify(body)).not.toContain("GOOGLE_SERVICE_ACCOUNT_KEY");
  });
});

describe("POST /api/applications", () => {
  it("400s when required fields are missing", async () => {
    const form = new FormData();
    form.set("name", "Test Person");
    const res = await postApplication(
      new NextRequest("http://localhost/api/applications", {
        method: "POST",
        headers: { "x-forwarded-for": "10.0.0.1" },
        body: form,
      }),
    );
    expect(res.status).toBe(400);
  });

  it("400s for a resume with an disallowed mime type", async () => {
    const form = new FormData();
    form.set("name", "Test Person");
    form.set("email", "test@example.com");
    form.set("phone", "0190000000");
    form.set("position", "some-slug");
    form.set("resume", new File(["x"], "resume.exe", { type: "application/x-msdownload" }));
    const res = await postApplication(
      new NextRequest("http://localhost/api/applications", {
        method: "POST",
        headers: { "x-forwarded-for": "10.0.0.2" },
        body: form,
      }),
    );
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("PDF, DOC or DOCX");
  });

  it("rate limits repeat submissions from one IP", async () => {
    const attempt = (ip: string) => {
      const form = new FormData();
      form.set("name", "Test Person");
      return postApplication(
        new NextRequest("http://localhost/api/applications", {
          method: "POST",
          headers: { "x-forwarded-for": ip },
          body: form,
        }),
      );
    };
    // MAX_PER_IP = 5 per 10 minutes; the first five fail validation (400),
    // the sixth is rejected before any work happens (429).
    for (let i = 0; i < 5; i++) {
      const res = await attempt("10.0.0.99");
      expect(res.status).toBe(400);
    }
    const blocked = await attempt("10.0.0.99");
    expect(blocked.status).toBe(429);
  });
});

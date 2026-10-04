import { describe, expect, it } from "vitest";
import {
  portalProjectsQuery,
  projectBySlugQuery,
  projectsQuery,
  projectsSummaryQuery,
  userProjectsQuery,
} from "./sanity";

/**
 * Regression tests for the GROQ drift bug: the portal queries used to select
 * `inspectionReport.asset->url`, a field that does not exist in the Studio
 * schema (the real field is the `inspectionReports` array).
 */
describe("project query integrity", () => {
  it("portal queries read the real inspectionReports array", () => {
    expect(portalProjectsQuery).toContain(
      "inspectionReports[0].file.asset->url",
    );
    expect(userProjectsQuery).toContain("inspectionReports[0].file.asset->url");
    expect(portalProjectsQuery).toContain('"inspectionReports"');
  });

  it("portal queries never select the phantom singular field", () => {
    // Phantom = alias whose source is the non-existent singular
    // `inspectionReport`. The real field is `inspectionReports`, so the
    // word boundary matters: `inspectionReport\b` must not match it.
    const phantom = /"inspectionReport":\s*inspectionReport\b/;
    expect(portalProjectsQuery).not.toMatch(phantom);
    expect(userProjectsQuery).not.toMatch(phantom);
    // Sanity: the alias still exists, pointing at the real array.
    expect(portalProjectsQuery).toMatch(
      /"inspectionReport":\s*inspectionReports\[0\]/,
    );
  });

  it("no public content query selects passwordHash", () => {
    for (const q of [
      projectsQuery,
      projectsSummaryQuery,
      portalProjectsQuery,
      userProjectsQuery,
      projectBySlugQuery,
    ]) {
      expect(q).not.toContain("passwordHash");
    }
  });

  it("summary query stays light (no blocks or galleries payload)", () => {
    expect(projectsSummaryQuery).not.toContain("blocks[");
    expect(projectsSummaryQuery).not.toContain("progressBlock");
    expect(projectsQuery).toContain("blocks");
  });

  it("detail query filters by slug", () => {
    expect(projectBySlugQuery).toContain("slug.current == $slug");
  });

  it("list and detail queries share one projection", () => {
    // Both derive from PROJECT_FULL_PROJECTION, so field drift between the
    // list and detail views is structurally impossible.
    expect(projectsQuery).toContain('"href": "/projects/" + slug.current');
    expect(projectBySlugQuery).toContain('"href": "/projects/" + slug.current');
  });
});

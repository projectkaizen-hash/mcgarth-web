import { describe, expect, it } from "vitest";
import { getProjectSection } from "./utils";

describe("getProjectSection", () => {
  const all = [
    { id: "a", status: "active" },
    { id: "b", status: "pending" },
    { id: "c", status: "active" },
    { id: "d", status: "completed" },
  ];

  it("keeps only projects sharing the project's status", () => {
    expect(getProjectSection(all[0], all).map((p) => p.id)).toEqual([
      "a",
      "c",
    ]);
    expect(getProjectSection(all[1], all).map((p) => p.id)).toEqual(["b"]);
    expect(getProjectSection(all[3], all).map((p) => p.id)).toEqual(["d"]);
  });

  it("preserves the input list order (display order asc)", () => {
    expect(getProjectSection(all[0], all)).toEqual([all[0], all[2]]);
  });

  it("falls back to the full list when the project has no status", () => {
    const orphan = { id: "x" } as { id: string; status?: string };
    expect(getProjectSection(orphan, all)).toBe(all);
  });
});

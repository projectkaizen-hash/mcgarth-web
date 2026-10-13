import { describe, expect, it } from "vitest";
import {
  formatCountdownTimer,
  formatHandoverCountdown,
  formatProjectArea,
  getProjectSection,
  getProjectTimeline,
} from "./utils";

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

describe("formatProjectArea", () => {
  it("filters numeric house/plot/road numbers and city, returning area name only", () => {
    expect(formatProjectArea("House 12, Road 4, Sector 3, Uttara, Dhaka")).toBe("Uttara");
    expect(formatProjectArea("Plot 5, Block B, Bashundhara R/A, Dhaka")).toBe("Bashundhara R/A");
    expect(formatProjectArea("12, Gulshan, Dhaka")).toBe("Gulshan");
    expect(formatProjectArea("Dhanmondi, Dhaka")).toBe("Dhanmondi");
    expect(formatProjectArea("Banani")).toBe("Banani");
  });

  it("handles null/undefined gracefully", () => {
    expect(formatProjectArea(null)).toBe("");
    expect(formatProjectArea(undefined)).toBe("");
    expect(formatProjectArea("")).toBe("");
  });
});

describe("formatCountdownTimer", () => {
  it("formats countdown as Y:M:D", () => {
    const fixedNow = new Date("2026-10-13T00:00:00Z");
    const target = "2028-07-31T00:00:00Z";
    expect(formatCountdownTimer(target, fixedNow)).toBe("1Y:9M:18D");
  });

  it("handles null/undefined gracefully", () => {
    expect(formatCountdownTimer(null)).toBe("");
    expect(formatCountdownTimer(undefined)).toBe("");
  });
});

describe("getProjectTimeline", () => {
  it("returns Completed and year for completed projects", () => {
    const timeline = getProjectTimeline({
      status: "completed",
      year: 2024,
    });
    expect(timeline).toEqual({
      label: "Completed",
      value: "2024",
    });
  });

  it("returns Starting and countdown for upcoming projects", () => {
    const fixedNow = new Date("2026-10-13T00:00:00Z");
    const timeline = getProjectTimeline({
      status: "pending",
      startDate: "2028-07-31T00:00:00Z",
    });
    expect(timeline.label).toBe("Starting");
    expect(timeline.value).toMatch(/\d+Y:\d+M:\d+D/);
  });

  it("returns Handover and countdown for ongoing projects", () => {
    const timeline = getProjectTimeline({
      status: "active",
      handOverDate: "2028-07-31T00:00:00Z",
    });
    expect(timeline.label).toBe("Handover");
    expect(timeline.value).toMatch(/\d+Y:\d+M:\d+D/);
  });
});

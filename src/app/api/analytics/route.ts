import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getGaAnalyticsConfig, serverEnv } from "@/lib/env";
import type { GoogleServiceAccountCredentials } from "@/lib/env";

const MetricAggregation = { TOTAL: 1 } as const;

/**
 * Employee-only: mirrors the authorization pattern used by
 * `/api/all-projects` (401 without a session, 403 for non-employees).
 */
async function requireEmployee(req: NextRequest) {
  const token = await getToken({
    req,
    secret: serverEnv.nextAuthSecret,
  });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (token.role !== "employee") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}

/** Lazily initialised so a missing env fails the request, not the import. */
let analyticsClient: BetaAnalyticsDataClient | null = null;
function getAnalyticsClient(
  credentials: GoogleServiceAccountCredentials,
): BetaAnalyticsDataClient {
  if (!analyticsClient) {
    analyticsClient = new BetaAnalyticsDataClient({ credentials });
  }
  return analyticsClient;
}

export async function GET(req: NextRequest) {
  const denied = await requireEmployee(req);
  if (denied) return denied;

  try {
    const { credentials, property } = getGaAnalyticsConfig();
    const client = getAnalyticsClient(credentials);

    const [
      realtimeReport,
      summaryReport,
      countryReport,
      pagesReport,
      eventsReport,
    ] = await Promise.all([
      client.runRealtimeReport({
        property,
        metrics: [{ name: "activeUsers" }],
        minuteRanges: [{ startMinutesAgo: 4, endMinutesAgo: 0 }],
      }),

      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        metrics: [
          { name: "activeUsers" },
          { name: "newUsers" },
          { name: "averageSessionDuration" },
        ],
        metricAggregations: [MetricAggregation.TOTAL],
      }),

      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "country" }, { name: "countryId" }],
        metrics: [{ name: "activeUsers" }],
        orderBys: [{ desc: true, metric: { metricName: "activeUsers" } }],
        metricAggregations: [MetricAggregation.TOTAL],
        limit: 10,
      }),

      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "pageTitle" }],
        metrics: [{ name: "screenPageViews" }],
        orderBys: [{ desc: true, metric: { metricName: "screenPageViews" } }],
        limit: 10,
      }),

      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "eventName" }],
        metrics: [{ name: "eventCount" }],
        orderBys: [{ desc: true, metric: { metricName: "eventCount" } }],
        limit: 10,
      }),
    ]);

    const summaryRow = summaryReport[0].rows?.[0]?.metricValues;
    const totalsRow = summaryReport[0].totals?.[0]?.metricValues;

    const activeUsers = parseInt(
      summaryRow?.[0]?.value ?? totalsRow?.[0]?.value ?? "0",
    );
    const newUsers = parseInt(
      summaryRow?.[1]?.value ?? totalsRow?.[1]?.value ?? "0",
    );
    const avgSessionDuration = parseFloat(
      summaryRow?.[2]?.value ?? totalsRow?.[2]?.value ?? "0",
    );

    const realtimeActiveUsers =
      realtimeReport[0].rows?.reduce(
        (sum, r) => sum + parseInt(r.metricValues?.[0]?.value ?? "0"),
        0,
      ) ??
      parseInt(
        realtimeReport[0].totals?.[0]?.metricValues?.[0]?.value ?? "0",
      );

    const result = {
      realtimeActiveUsers,
      activeUsers,
      newUsers,
      avgSessionDuration,
      byCountry:
        countryReport[0].rows?.map((r) => ({
          country: r.dimensionValues?.[0]?.value ?? "Unknown",
          countryCode: r.dimensionValues?.[1]?.value ?? "",
          users: parseInt(r.metricValues?.[0]?.value ?? "0"),
        })) ?? [],
      byPage:
        pagesReport[0].rows?.map((r) => ({
          title: r.dimensionValues?.[0]?.value ?? "(no title)",
          views: parseInt(r.metricValues?.[0]?.value ?? "0"),
        })) ?? [],
      byEvent:
        eventsReport[0].rows?.map((r) => ({
          event: r.dimensionValues?.[0]?.value ?? "(unknown)",
          count: parseInt(r.metricValues?.[0]?.value ?? "0"),
        })) ?? [],
    };

    return NextResponse.json(result);
  } catch (err) {
    // Log details server-side only; never leak them to the client.
    console.error("GA4 report failed:", err);
    return NextResponse.json(
      { error: "Failed to load analytics" },
      { status: 500 },
    );
  }
}

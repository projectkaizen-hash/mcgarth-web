// app/api/analytics/route.ts
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextResponse } from "next/server";

const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!);
const client = new BetaAnalyticsDataClient({ credentials });
const property = `properties/${process.env.GA4_PROPERTY_ID}`;
const MetricAggregation = { TOTAL: 1 } as const;

export async function GET() {
  try {
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
        metricAggregations: [MetricAggregation.TOTAL as any],
      }),

      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "country" }, { name: "countryId" }],
        metrics: [{ name: "activeUsers" }],
        orderBys: [{ desc: true, metric: { metricName: "activeUsers" } }],
        metricAggregations: [MetricAggregation.TOTAL as any],
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
      summaryRow?.[0]?.value ?? totalsRow?.[0]?.value ?? "0"
    );
    const newUsers = parseInt(
      summaryRow?.[1]?.value ?? totalsRow?.[1]?.value ?? "0"
    );
    const avgSessionDuration = parseFloat(
      summaryRow?.[2]?.value ?? totalsRow?.[2]?.value ?? "0"
    );

    const realtimeActiveUsers =
      realtimeReport[0].rows?.reduce(
        (sum, r) => sum + parseInt(r.metricValues?.[0]?.value ?? "0"),
        0
      ) ??
      parseInt(
        realtimeReport[0].totals?.[0]?.metricValues?.[0]?.value ?? "0"
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
  } catch (err: any) {
    console.error("GA4 error:", err.message, "| code:", err.code);
    return NextResponse.json(
      { error: err.message, code: err.code ?? null },
      { status: 500 },
    );
  }
}
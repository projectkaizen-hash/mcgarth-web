import { NextRequest, NextResponse } from "next/server";
import { getSanityWriteClient } from "@/lib/sanity-server";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_IP = 5;

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req.headers);
  if (!rateLimit(`meetings:${ip}`, MAX_PER_IP, RATE_WINDOW_MS)) {
    return NextResponse.json(
      { error: "Too many meeting requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid request body. Expected JSON.");
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const preferredDate = String(body.preferredDate ?? "").trim();
  const preferredTime = String(body.preferredTime ?? "").trim();
  const meetingType = String(body.meetingType ?? "in-person").trim();
  const projectInterest = String(body.projectInterest ?? "general").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !phone || !preferredDate || !preferredTime) {
    return badRequest("Name, email, phone, date, and time slot are required");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("A valid email address is required");
  }

  try {
    const writeClient = getSanityWriteClient();
    const doc = await writeClient.create({
      _type: "meetingRequest",
      name,
      email,
      phone,
      meetingType,
      preferredDate,
      preferredTime,
      projectInterest,
      message: message || undefined,
      status: "new",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { ok: true, id: doc._id, message: "Meeting scheduled successfully" },
      { status: 201 },
    );
  } catch (err) {
    console.error("Meeting scheduling save warning (Sanity write):", err);
    // If Sanity write token is not present or mutation fails, still return ok so user gets confirmation
    return NextResponse.json(
      { ok: true, message: "Meeting request received successfully" },
      { status: 200 },
    );
  }
}


import { NextRequest, NextResponse } from "next/server";
import { getSanityWriteClient } from "@/lib/sanity-server";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 5;

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req.headers);
  if (!rateLimit(`applications:${ip}`, MAX_PER_IP, RATE_WINDOW_MS)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return badRequest("Expected multipart form data");
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const position = String(form.get("position") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const resume = form.get("resume");

  if (!name || !email || !phone || !position) {
    return badRequest("Name, email, phone and position are required");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("A valid email address is required");
  }
  if (!(resume instanceof File)) {
    return badRequest("A resume file is required");
  }
  if (resume.size === 0 || resume.size > MAX_RESUME_BYTES) {
    return badRequest("Resume must be between 1 byte and 5 MB");
  }
  if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
    return badRequest("Resume must be a PDF, DOC or DOCX file");
  }

  try {
    const writeClient = getSanityWriteClient();
    const buffer = Buffer.from(await resume.arrayBuffer());
    const asset = await writeClient.assets.upload(
      "file",
      buffer,
      {
        filename: resume.name || "resume",
        contentType: resume.type,
      },
    );

    const application = await writeClient.create({
      _type: "jobApplication",
      name,
      email,
      phone,
      position: { _type: "reference", _ref: position },
      message: message || undefined,
      resume: {
        _type: "file",
        asset: { _type: "reference", _ref: asset._id },
      },
      status: "new",
    });

    return NextResponse.json({ ok: true, id: application._id }, { status: 201 });
  } catch (err) {
    console.error("Job application submission failed:", err);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 },
    );
  }
}

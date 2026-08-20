import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { isRateLimited } from "@/lib/security/rate-limit";
import { getEmailProvider } from "@/lib/email/provider";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many attempts. Please wait a minute and try again." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please check the form fields.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  if (process.env.TURNSTILE_SECRET_KEY && !parsed.data.turnstileToken) {
    return NextResponse.json({ message: "Spam protection could not be verified." }, { status: 400 });
  }

  const result = await getEmailProvider().sendProjectEnquiry(parsed.data);
  if (!result.ok) {
    return NextResponse.json({ message: "The enquiry could not be sent. Please email hello@orilto.com." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thanks. Your enquiry has been received.", id: result.id });
}

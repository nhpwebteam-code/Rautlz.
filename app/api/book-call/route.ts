import { NextResponse } from "next/server";
import { sendBookCallEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contactInfo, preferredTime, note, botField } = body;

    // Zero-cost Honeypot check: If bot filled the hidden field, silently return success without sending
    if (botField) {
      return NextResponse.json(
        { success: true, message: "Call request received" },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Your name is required." },
        { status: 400 }
      );
    }

    if (!contactInfo || typeof contactInfo !== "string" || contactInfo.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email, phone number, or WhatsApp contact.",
        },
        { status: 400 }
      );
    }

    // Send formatted email via Resend
    const result = await sendBookCallEmail({
      name: name.trim(),
      contactInfo: contactInfo.trim(),
      preferredTime: preferredTime ? String(preferredTime).trim() : undefined,
      note: note ? String(note).trim() : undefined,
    });

    if (result && "error" in result && result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { success: false, error: "Failed to dispatch email. Please try WhatsApp directly." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your call booking request has been received. We will be in touch shortly!",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("POST /api/book-call error:", err);
    return NextResponse.json(
      { success: false, error: "Unable to process booking request. Please check your inputs." },
      { status: 500 }
    );
  }
}

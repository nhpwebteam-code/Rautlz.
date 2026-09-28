import { NextResponse } from "next/server";
import { sendStartProjectEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: any = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      data = {
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
        phone: formData.get("phone")?.toString(),
        company: formData.get("company")?.toString(),
        servicePackage: formData.get("servicePackage")?.toString(),
        budget: formData.get("budget")?.toString(),
        description: formData.get("description")?.toString(),
        referenceWebsites: formData.get("referenceWebsites")?.toString(),
        fileUrl: formData.get("fileUrl")?.toString(),
        fileName: formData.get("fileName")?.toString(),
        botField: formData.get("botField")?.toString(),
      };
    } else {
      data = await request.json();
    }

    const {
      name,
      email,
      phone,
      company,
      servicePackage,
      budget,
      description,
      referenceWebsites,
      fileUrl,
      fileName,
      botField,
    } = data;

    // Zero-cost Honeypot check: If bot filled the hidden field, silently return success
    if (botField) {
      return NextResponse.json(
        { success: true, message: "Project brief received" },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Contact name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!servicePackage || typeof servicePackage !== "string" || servicePackage.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please select a service or pricing tier." },
        { status: 400 }
      );
    }

    if (!budget || typeof budget !== "string" || budget.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please choose a budget range." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide a brief project description." },
        { status: 400 }
      );
    }

    // Send formatted email via Resend
    const result = await sendStartProjectEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company ? String(company).trim() : undefined,
      servicePackage: servicePackage.trim(),
      budget: budget.trim(),
      description: description.trim(),
      referenceWebsites: referenceWebsites ? String(referenceWebsites).trim() : undefined,
      fileUrl: fileUrl ? String(fileUrl).trim() : undefined,
      fileName: fileName ? String(fileName).trim() : undefined,
    });

    if (result && "error" in result && result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { success: false, error: "Failed to dispatch project brief. Please reach out via WhatsApp." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project intake brief received successfully! We will review and contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("POST /api/start-project error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to process project brief submission." },
      { status: 500 }
    );
  }
}

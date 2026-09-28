import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const STUDIO_INBOX = process.env.STUDIO_INBOX_EMAIL || "raultz.webteam@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Raultz Leads <onboarding@resend.dev>";

export interface BookCallPayload {
  name: string;
  contactInfo: string;
  preferredTime?: string;
  note?: string;
}

export interface StartProjectPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  servicePackage: string;
  budget: string;
  description: string;
  referenceWebsites?: string;
  fileUrl?: string;
  fileName?: string;
}

export async function sendBookCallEmail(data: BookCallPayload) {
  const subject = `[NEW CALL REQUEST] ${data.name} — Raultz Studio`;
  
  const textContent = `
NEW BOOK-A-CALL INQUIRY
========================
Name: ${data.name}
Contact Info (Email/Phone/WhatsApp): ${data.contactInfo}
Preferred Time / Schedule Note: ${data.preferredTime || "None specified"}
Additional Notes: ${data.note || "None provided"}
Timestamp: ${new Date().toISOString()}
  `.trim();

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F6F0E4; padding: 32px; color: #1F1B16;">
      <div style="max-width: 580px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; border: 1px solid #E5DEC9; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="margin-bottom: 24px; border-bottom: 2px solid #C1673B; padding-bottom: 12px;">
          <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #C1673B; text-transform: uppercase;">[ RAULTZ STUDIO // LEAD SYSTEM ]</span>
          <h1 style="font-size: 24px; font-weight: bold; margin: 8px 0 0 0; color: #1F1B16;">New Call Booking Request</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #8A6F52; width: 140px; font-weight: 600;">Prospect Name:</td>
            <td style="padding: 8px 0; color: #1F1B16; font-weight: bold;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8A6F52; font-weight: 600;">Contact Method:</td>
            <td style="padding: 8px 0; color: #1F1B16;">${data.contactInfo}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8A6F52; font-weight: 600;">Preferred Time:</td>
            <td style="padding: 8px 0; color: #1F1B16;">${data.preferredTime || "Flexible / Not specified"}</td>
          </tr>
        </table>

        ${
          data.note
            ? `
          <div style="background-color: #F6F0E4; border-radius: 8px; padding: 16px; margin-bottom: 24px; border-left: 4px solid #6B7A4E;">
            <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #6B7A4E; display: block; margin-bottom: 4px;">NOTES / GOALS:</span>
            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #1F1B16;">${data.note.replace(/\n/g, "<br/>")}</p>
          </div>
        `
            : ""
        }

        <div style="font-size: 11px; color: #8A6F52; font-family: monospace; border-top: 1px solid #E5DEC9; padding-top: 16px;">
          Submitted via Raultz Website Contact Form &bull; ${new Date().toUTCString()}
        </div>
      </div>
    </div>
  `;

  if (resend) {
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: STUDIO_INBOX,
      subject,
      text: textContent,
      html: htmlContent,
    });
  } else {
    console.log("[MOCK EMAIL SENT - RESEND KEY NOT CONFIGURED]");
    console.log(textContent);
    return { data: { id: "mock_lead_" + Date.now() }, error: null };
  }
}

export async function sendStartProjectEmail(data: StartProjectPayload) {
  const subject = `[NEW PROJECT INTAKE] ${data.company ? data.company + " (" + data.name + ")" : data.name} — ${data.servicePackage}`;

  const textContent = `
NEW PROJECT INTAKE FORM SUBMISSION
===================================
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "Not provided"}
Selected Service/Package: ${data.servicePackage}
Budget Range: ${data.budget}

Project Description:
${data.description}

Reference Websites:
${data.referenceWebsites || "None provided"}

Attached Brief/Assets URL:
${data.fileUrl ? data.fileUrl + (data.fileName ? " (" + data.fileName + ")" : "") : "No file attached"}

Submitted: ${new Date().toISOString()}
  `.trim();

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F6F0E4; padding: 32px; color: #1F1B16;">
      <div style="max-width: 620px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; border: 1px solid #E5DEC9; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="margin-bottom: 24px; border-bottom: 2px solid #C1673B; padding-bottom: 12px;">
          <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #C1673B; text-transform: uppercase;">[ RAULTZ STUDIO // INTAKE SYSTEM ]</span>
          <h1 style="font-size: 24px; font-weight: bold; margin: 8px 0 0 0; color: #1F1B16;">New Client Project Brief</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 6px 0; color: #8A6F52; width: 140px; font-weight: 600;">Contact Name:</td>
            <td style="padding: 6px 0; color: #1F1B16; font-weight: bold;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #8A6F52; font-weight: 600;">Email:</td>
            <td style="padding: 6px 0; color: #1F1B16;"><a href="mailto:${data.email}" style="color: #C1673B;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #8A6F52; font-weight: 600;">Phone:</td>
            <td style="padding: 6px 0; color: #1F1B16;"><a href="tel:${data.phone}" style="color: #1F1B16;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #8A6F52; font-weight: 600;">Company / Brand:</td>
            <td style="padding: 6px 0; color: #1F1B16; font-weight: bold;">${data.company || "Direct Client"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #8A6F52; font-weight: 600;">Tier / Package:</td>
            <td style="padding: 6px 0; color: #C1673B; font-weight: bold;">${data.servicePackage}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #8A6F52; font-weight: 600;">Budget Range:</td>
            <td style="padding: 6px 0; color: #6B7A4E; font-weight: bold;">${data.budget}</td>
          </tr>
        </table>

        <div style="background-color: #F6F0E4; border-radius: 8px; padding: 16px; margin-bottom: 20px; border-left: 4px solid #C1673B;">
          <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #C1673B; display: block; margin-bottom: 4px;">PROJECT DESCRIPTION:</span>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1F1B16;">${data.description.replace(/\n/g, "<br/>")}</p>
        </div>

        ${
          data.referenceWebsites
            ? `
          <div style="background-color: #F6F0E4; border-radius: 8px; padding: 16px; margin-bottom: 20px; border-left: 4px solid #6B7A4E;">
            <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #6B7A4E; display: block; margin-bottom: 4px;">REFERENCE WEBSITES:</span>
            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #1F1B16;">${data.referenceWebsites.replace(/\n/g, "<br/>")}</p>
          </div>
        `
            : ""
        }

        ${
          data.fileUrl
            ? `
          <div style="background-color: #F6F0E4; border-radius: 8px; padding: 16px; margin-bottom: 24px; border-left: 4px solid #8A6F52;">
            <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #8A6F52; display: block; margin-bottom: 4px;">ATTACHED ASSET / BRIEF:</span>
            <a href="${data.fileUrl}" target="_blank" style="color: #C1673B; font-weight: bold; font-size: 14px; word-break: break-all;">
              🔗 ${data.fileName || "View Uploaded File"} &rarr;
            </a>
          </div>
        `
            : ""
        }

        <div style="font-size: 11px; color: #8A6F52; font-family: monospace; border-top: 1px solid #E5DEC9; padding-top: 16px;">
          Submitted via Raultz Start a Project Intake Form &bull; ${new Date().toUTCString()}
        </div>
      </div>
    </div>
  `;

  if (resend) {
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: STUDIO_INBOX,
      subject,
      text: textContent,
      html: htmlContent,
    });
  } else {
    console.log("[MOCK EMAIL SENT - RESEND KEY NOT CONFIGURED]");
    console.log(textContent);
    return { data: { id: "mock_project_" + Date.now() }, error: null };
  }
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | Raultz Hyderabad",
  },
  description:
    "Review the Terms of Service for Raultz. Standard terms governing digital engineering contracts, web and mobile app development sprints, deliverables, and payments.",
  alternates: {
    canonical: "https://raultz.vercel.app/terms",
  },
  openGraph: {
    title: "Terms of Service | Raultz Hyderabad",
    description:
      "Review the Terms of Service for Raultz. Standard terms governing digital engineering contracts, web and mobile app development sprints, deliverables, and payments.",
    url: "https://raultz.vercel.app/terms",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#161616] -mt-24 sm:-mt-28 pt-32 sm:pt-40 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D2E] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <header className="space-y-4 border-b border-[#E8DFC8] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D2E]/10 text-[#FF4D2E] text-xs font-mono font-semibold uppercase">
            <FileText className="w-3.5 h-3.5" /> Client Engagement Terms
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#161616]">
            Terms of Service
          </h1>
          <p className="font-sans text-sm text-[#706E6B]">
            Effective Date: September 2026 &bull; Raultz Digital Engineering Studio, Hyderabad, India
          </p>
        </header>

        <div className="space-y-8 font-sans text-base leading-relaxed text-[#4A4844]">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              1. Engagement Scope & Sprint Deliverables
            </h2>
            <p>
              Raultz operates under fixed-scope, high-velocity engineering sprints or tailored monthly retainer agreements. Every engagement begins with a mutual Statement of Work (SOW) outlining key deliverables, sprint milestones, tech stacks, and timeline targets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              2. Intellectual Property & Code Ownership
            </h2>
            <p>
              Upon receipt of full payment for agreed milestones, 100% of the custom source code, graphic assets, design components, and documentation developed specifically for your project transfer directly to you. Open-source libraries and frameworks remain subject to their respective licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              3. Payment Terms & Invoicing
            </h2>
            <p>
              Project engagements typically follow a structured milestone schedule (e.g., 50% mobilization advance, 50% upon deployment and handover, or sprint-based allocations). All invoices are issued in INR or USD and are payable via bank wire, UPI, or international merchant processors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              4. Revisions & Acceptance Testing
            </h2>
            <p>
              Each sprint milestone includes a dedicated review and acceptance window (standard 7 business days). Revisions requested within the agreed scope are incorporated promptly. Out-of-scope feature additions are estimated separately under change requests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              5. Questions & Consultation
            </h2>
            <p>
              To discuss project terms or review an active Statement of Work, reach out to our team at{" "}
              <Link href="/contact" className="font-semibold text-[#FF4D2E] hover:underline">
                raultz.com/contact
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

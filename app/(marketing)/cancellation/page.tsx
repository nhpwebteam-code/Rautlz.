import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Cancellation & Refund Policy | Raultz Hyderabad",
  },
  description:
    "Review the Cancellation and Refund Policy for Raultz engineering sprints, design deliverables, and milestone commitments in Hyderabad, India.",
  alternates: {
    canonical: "https://raultz.vercel.app/cancellation",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Raultz Hyderabad",
    description:
      "Review the Cancellation and Refund Policy for Raultz engineering sprints, design deliverables, and milestone commitments in Hyderabad, India.",
    url: "https://raultz.vercel.app/cancellation",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
  },
};

export default function CancellationPage() {
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
            <RefreshCw className="w-3.5 h-3.5" /> Sprint Commitments & Clarity
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#161616]">
            Cancellation & Refund Policy
          </h1>
          <p className="font-sans text-sm text-[#706E6B]">
            Effective Date: September 2026 &bull; Raultz Digital Engineering Studio, Hyderabad, India
          </p>
        </header>

        <div className="space-y-8 font-sans text-base leading-relaxed text-[#4A4844]">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              1. Project Initiation & Mobilization Deposit
            </h2>
            <p>
              Due to the dedicated nature of our engineering team allocations, once an agreement is executed and project architecture discovery has initiated, the initial mobilization deposit covers immediate design drafting and infrastructure provisioning.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              2. Sprint Cancellation Process
            </h2>
            <p>
              Clients may terminate or pause an active sprint with 14 business days written notice. In the event of early termination, work completed up to the date of notice will be itemized, billed pro-rata, and delivered in full to the client along with all repositories and assets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              3. Milestone Refunds
            </h2>
            <p>
              Unused retainer hours or payments for future, un-commenced sprint milestones are eligible for full refund within 30 days of mutual written cancellation confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              4. Contacting the Studio
            </h2>
            <p>
              For cancellation or billing inquiries, please reach our founding team at{" "}
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

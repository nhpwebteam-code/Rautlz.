import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Raultz Hyderabad",
  },
  description:
    "Read the Privacy Policy for Raultz, outlining how we handle client data, communications, project briefs, and confidential technical specifications in India.",
  alternates: {
    canonical: "https://raultz.vercel.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Raultz Hyderabad",
    description:
      "Read the Privacy Policy for Raultz, outlining how we handle client data, communications, project briefs, and confidential technical specifications in India.",
    url: "https://raultz.vercel.app/privacy",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" /> Data Protection & Confidentiality
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#161616]">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-[#706E6B]">
            Effective Date: September 2026 &bull; Raultz Digital Engineering Studio, Hyderabad, India
          </p>
        </header>

        <div className="space-y-8 font-sans text-base leading-relaxed text-[#4A4844]">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              1. Information We Collect
            </h2>
            <p>
              When you submit a project inquiry, schedule a consultation, or request an architectural
              proposal through Raultz, we collect information including your name, corporate email,
              phone number, business name, project requirements, budget bracket, and timeline constraints.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              2. How We Use Client Information
            </h2>
            <p>
              We use the submitted information solely to review technical feasibility, formulate bespoke
              project quotes, execute engineering agreements, and coordinate design milestones. We do not
              sell, rent, or trade your contact details or project documentation to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              3. Non-Disclosure & Intellectual Property
            </h2>
            <p>
              All proprietary source code, wireframes, technical architectures, and business logic
              shared during confidential discovery phases are protected under mutual confidentiality.
              Upon final milestone settlement, all deliverables and intellectual property transfer fully
              to the client as specified in our engagement contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              4. Security Measures & Encryption
            </h2>
            <p>
              All communication channels and file uploads are secured using SSL/TLS 256-bit encryption.
              Internal access to your design assets and codebase repositories is strictly restricted to
              assigned project engineers and directors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#161616]">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions regarding your confidential information or wish to request data
              deletion, contact our founding triad directly at{" "}
              <Link href="/contact" className="font-semibold text-[#FF4D2E] hover:underline">
                raultz.com/contact
              </Link>{" "}
              or email us at contact@raultz.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

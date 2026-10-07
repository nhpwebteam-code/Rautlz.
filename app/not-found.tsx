import Link from "next/link";
import { ArrowLeft, Home, PhoneCall, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Raultz",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-8 text-center bg-[#FAF7F2] text-[#1F1B16] -mt-24 sm:-mt-28 pt-36 sm:pt-44 pb-20">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE6D8] border border-[#E2D6C3] text-xs font-mono font-bold tracking-wider text-[#FF4D2E]">
          <span className="w-2 h-2 rounded-full bg-[#FF4D2E] animate-pulse" />
          <span>HTTP 404 ERROR</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-6xl font-black tracking-tight text-[#1F1B16]">
          Page Not Found
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#6E655A] leading-relaxed">
          The link you followed may have expired, or the page may have been moved during our technical platform updates.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1F1B16] hover:bg-[#332C24] text-white font-sans text-sm font-bold transition-all shadow-sm active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#1F1B16] border border-[#E2D6C3] font-sans text-sm font-bold transition-all shadow-xs active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4 text-[#FF4D2E]" />
            <span>Contact Studio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

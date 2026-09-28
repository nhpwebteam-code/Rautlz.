import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, Clock, ShieldCheck, Zap } from "lucide-react";

export default function ClosingCTASection() {
  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-background border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF4EB] to-[#F5EAE0] rounded-3xl border border-[#E5D7C3] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_24px_60px_rgba(31,27,22,0.07)]">
          {/* Luminous Warm Ambient Accents */}
          <div className="absolute top-0 right-0 w-[440px] h-[440px] bg-[#F0755C]/12 rounded-full blur-[100px] pointer-events-none -mr-24 -mt-24" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#6B7A4E]/10 rounded-full blur-[100px] pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Headline & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F0755C] shadow-sm" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#6E655A]">
                  LET&apos;S BUILD SOMETHING EXTRAORDINARY
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1B16] leading-[1.1]">
                Ready to elevate your{" "}
                <span className="italic font-serif font-normal text-[#F0755C]">
                  digital presence
                </span>
                ?
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#6E655A] leading-relaxed max-w-xl">
                Whether you have an established product ready for spatial evolution or an ambitious new brand launch, let’s explore what we can build together.
              </p>

              {/* Technical Guarantees with Clean Tag Styling */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E5D7C3]/80 font-mono text-xs text-[#5C5449]">
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/70 border border-[#E5D7C3] shadow-xs">
                  <Clock className="w-4 h-4 text-[#F0755C] shrink-0" />
                  <span className="font-semibold tracking-wide">&lt; 24H RESPONSE</span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/70 border border-[#E5D7C3] shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#6B7A4E] shrink-0" />
                  <span className="font-semibold tracking-wide">DIRECT FOUNDERS</span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/70 border border-[#E5D7C3] shadow-xs">
                  <Zap className="w-4 h-4 text-[#C1673B] shrink-0" />
                  <span className="font-semibold tracking-wide">ZERO FRICTION</span>
                </div>
              </div>
            </div>

            {/* Right Dual CTA Actions Card */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-white/95 backdrop-blur-sm p-7 sm:p-9 rounded-2xl border border-[#E5D7C3] shadow-[0_16px_40px_rgba(31,27,22,0.08)]">
              <span className="font-mono text-xs text-[#6E655A] font-bold uppercase tracking-widest block mb-1">
                [ ENGAGE WITH RAULTZ ]
              </span>

              {/* Primary CTA: Book a Call */}
              <Link href="/contact" className="w-full">
                <button
                  type="button"
                  className="w-full bg-[#F0755C] hover:bg-[#E0644B] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl shadow-[0_10px_24px_rgba(240,117,92,0.32)] transition-all transform hover:scale-[1.02] active:scale-[0.99] cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="w-4 h-4" />
                    <span>Book a Call</span>
                  </div>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              {/* Secondary CTA: Start a Project */}
              <Link href="/start-a-project" className="w-full">
                <button
                  type="button"
                  className="w-full bg-[#1F1B16] hover:bg-[#332C24] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl shadow-[0_8px_20px_rgba(31,27,22,0.12)] transition-all transform hover:scale-[1.02] active:scale-[0.99] cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#F0755C]" />
                    <span>Start a Project</span>
                  </div>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <div className="pt-4 border-t border-[#EAE1D3] text-center font-mono text-[11px] text-[#7A7064]">
                <span>Direct email: </span>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@raultz.com"}`}
                  className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#F0755C] transition-colors"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@raultz.com"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

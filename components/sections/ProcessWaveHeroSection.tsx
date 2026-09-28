"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface MilestoneStep {
  step: string;
  number: string;
  title: string;
  description: string;
  pinLeft: string;
  pinTop: string;
}

const MILESTONES: MilestoneStep[] = [
  {
    step: "01",
    number: "1",
    title: "Project Discovery Call",
    description:
      "Direct alignment on brand positioning, architectural requirements, and design tokens with the founders.",
    pinLeft: "18%",
    pinTop: "66%",
  },
  {
    step: "02",
    number: "2",
    title: "Spatial Design & Motion",
    description:
      "Kinetic typography, editorial layouts, and 3D spatial scenes orchestrated together in live deploy previews.",
    pinLeft: "50%",
    pinTop: "48%",
  },
  {
    step: "03",
    number: "3",
    title: "Next.js & WebGL Launch",
    description:
      "Sub-second production deployment, 100/100 Core Web Vitals tuning, and seamless domain infrastructure setup.",
    pinLeft: "82%",
    pinTop: "22%",
  },
];

export default function ProcessWaveHeroSection() {
  return (
    <section className="relative w-full bg-white rounded-3xl sm:rounded-[36px] border border-[#E8DFC8] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_12px_40px_rgba(31,27,22,0.04)]">
      
      {/* 1. Soft Circular Ambient Radial Glow on the Right */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full bg-gradient-to-br from-[#EBF0FC] to-[#FCE3D4]/40 pointer-events-none opacity-80 blur-[20px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Headline, Pitch Copy, and Action Button */}
        <div className="lg:col-span-4 space-y-6 max-w-sm">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
            We build what <br />
            <span className="italic font-normal text-foreground/85">hasn’t been built yet</span>.
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
            We combine bespoke visual systems, tactile spatial interactions, and Next.js engineering into one seamless medium. Direct founder execution with zero agency buffers.
          </p>

          <div className="pt-2">
            <Link href="/start-a-project">
              <button
                type="button"
                className="bg-[#C1673B] hover:bg-[#A85329] text-[#F6F0E4] font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_8px_20px_rgba(193,103,59,0.28)] transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Floating Coral Wave Roadmap with Milestone Nodes & Ghost Numbers */}
        <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[420px] flex flex-col justify-center">
          
          {/* Desktop/Tablet Continuous Curved SVG Wave Line */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 420"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Glowing Drop Shadow for the Coral Line */}
                <filter id="coral-wave-shadow" x="-10%" y="-30%" width="120%" height="180%">
                  <feDropShadow
                    dx="0"
                    dy="14"
                    stdDeviation="12"
                    floodColor="#C1673B"
                    floodOpacity="0.32"
                  />
                </filter>
              </defs>

              {/* The Smooth Continuous Coral Wave Path connecting (180, 280) -> (500, 205) -> (820, 95) */}
              <path
                d="M 30 220 C 100 270, 130 285, 180 280 C 260 270, 380 205, 500 205 C 620 205, 710 95, 820 95 L 960 95"
                stroke="#C1673B"
                strokeWidth="3.6"
                strokeLinecap="round"
                filter="url(#coral-wave-shadow)"
              />
            </svg>

            {/* Desktop Pin 1 (Top: 66.5%, Left: 18%) with Concentric Pulse Ring */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-[3.5px] border-[#C1673B] shadow-[0_4px_14px_rgba(0,0,0,0.18)] flex items-center justify-center z-30"
              style={{ left: "18%", top: "66.5%" }}
            >
              <div className="w-2 h-2 rounded-full bg-[#6E655A]" />
              <div className="absolute -inset-1.5 rounded-full border border-[#C1673B]/30 animate-ping opacity-40 pointer-events-none" />
            </div>

            {/* Desktop Pin 2 (Top: 48.8%, Left: 50%) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-[3.5px] border-[#C1673B] shadow-[0_4px_14px_rgba(0,0,0,0.18)] flex items-center justify-center z-30"
              style={{ left: "50%", top: "48.8%" }}
            >
              <div className="w-2 h-2 rounded-full bg-[#6E655A]" />
              <div className="absolute -inset-1.5 rounded-full border border-[#C1673B]/30 animate-ping opacity-40 pointer-events-none" />
            </div>

            {/* Desktop Pin 3 (Top: 22.6%, Left: 82%) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-[3.5px] border-[#C1673B] shadow-[0_4px_14px_rgba(0,0,0,0.18)] flex items-center justify-center z-30"
              style={{ left: "82%", top: "22.6%" }}
            >
              <div className="w-2 h-2 rounded-full bg-[#6E655A]" />
              <div className="absolute -inset-1.5 rounded-full border border-[#C1673B]/30 animate-ping opacity-40 pointer-events-none" />
            </div>
          </div>

          {/* 3 Step Milestones (Desktop Columns positioned beneath each pin) */}
          <div className="hidden md:grid grid-cols-3 gap-6 relative z-10 w-full h-full pt-10">
            
            {/* Step 1: Bottom Dip */}
            <div className="relative flex flex-col justify-end pt-52 pl-2 group">
              <div className="flex items-start justify-between gap-1 w-full">
                <div className="space-y-1.5 max-w-[150px] lg:max-w-[175px]">
                  <h3 className="font-display text-sm lg:text-base font-bold text-foreground leading-snug group-hover:text-[#C1673B] transition-colors">
                    {MILESTONES[0].title}
                  </h3>
                  <p className="font-sans text-[11px] lg:text-xs text-muted leading-relaxed">
                    {MILESTONES[0].description}
                  </p>
                </div>

                {/* Ghost Number 1 */}
                <span className="font-display text-7xl lg:text-8xl font-bold text-[#E5E0D8]/80 select-none pointer-events-none -mt-4 shrink-0 transition-transform group-hover:scale-105">
                  1
                </span>
              </div>
            </div>

            {/* Step 2: Middle Slope */}
            <div className="relative flex flex-col justify-end pt-32 pl-2 group">
              <div className="flex items-start justify-between gap-1 w-full">
                <div className="space-y-1.5 max-w-[150px] lg:max-w-[175px]">
                  <h3 className="font-display text-sm lg:text-base font-bold text-foreground leading-snug group-hover:text-[#C1673B] transition-colors">
                    {MILESTONES[1].title}
                  </h3>
                  <p className="font-sans text-[11px] lg:text-xs text-muted leading-relaxed">
                    {MILESTONES[1].description}
                  </p>
                </div>

                {/* Ghost Number 2 */}
                <span className="font-display text-7xl lg:text-8xl font-bold text-[#E5E0D8]/80 select-none pointer-events-none -mt-4 shrink-0 transition-transform group-hover:scale-105">
                  2
                </span>
              </div>
            </div>

            {/* Step 3: Top Crest */}
            <div className="relative flex flex-col justify-end pt-4 pl-2 group">
              <div className="flex items-start justify-between gap-1 w-full">
                <div className="space-y-1.5 max-w-[150px] lg:max-w-[175px]">
                  <h3 className="font-display text-sm lg:text-base font-bold text-foreground leading-snug group-hover:text-[#C1673B] transition-colors">
                    {MILESTONES[2].title}
                  </h3>
                  <p className="font-sans text-[11px] lg:text-xs text-muted leading-relaxed">
                    {MILESTONES[2].description}
                  </p>
                </div>

                {/* Ghost Number 3 */}
                <span className="font-display text-7xl lg:text-8xl font-bold text-[#E5E0D8]/80 select-none pointer-events-none -mt-4 shrink-0 transition-transform group-hover:scale-105">
                  3
                </span>
              </div>
            </div>

          </div>

          {/* Mobile Stacking Layout with Direct Connecting Line */}
          <div className="md:hidden space-y-8 relative pl-6 border-l-2 border-[#C1673B] ml-2 pt-2 w-full">
            {MILESTONES.map((milestone) => (
              <div key={milestone.number} className="relative flex items-start justify-between gap-4">
                {/* Mobile Pin on vertical line */}
                <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-white border-[3px] border-[#C1673B] shadow-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6E655A]" />
                </div>

                <div className="space-y-1 z-10">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Ghost Number */}
                <span className="font-display text-5xl font-bold text-[#E5E0D8]/80 select-none pointer-events-none shrink-0 -mt-2">
                  {milestone.number}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

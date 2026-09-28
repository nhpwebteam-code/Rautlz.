"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroCardFan from "@/components/ui/HeroCardFan";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="w-full bg-[#FAF7F2] select-none -mt-24 sm:-mt-28 pt-32 sm:pt-40 pb-16 sm:pb-24 relative overflow-hidden flex flex-col items-center justify-between"
    >
      {/* 1. Centered Hero Headline & Narrative Copy */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Main Headline with Hand-Drawn Doodle */}
        <div className="relative max-w-4xl mx-auto">
          {/* Top Right Doodle: "Elevate your brand" in vibrant creative red - properly aligned across mobile & desktop */}
          <div className="absolute -top-7 sm:-top-8 md:-top-10 right-0 sm:right-2 md:-right-6 lg:-right-12 flex flex-col items-center pointer-events-none select-none z-20">
            <span className="font-handwriting text-lg sm:text-2xl md:text-3xl text-[#E6392F] -rotate-6 tracking-wide font-medium whitespace-nowrap">
              Elevate your brand
            </span>
            {/* Playful hand-drawn red ink arrow curving down-left toward the headline */}
            <svg
              className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 text-[#E6392F] mt-0.5 shrink-0"
              viewBox="0 0 80 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 58 8 C 65 30, 48 50, 20 58" />
              <path d="M 30 48 L 20 58 L 29 66" />
            </svg>
          </div>

          {/* Left Small Doodle Accent */}
          <div className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none select-none text-[#1F1B16]">
            <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 10 30 L 25 15" />
              <path d="M 20 35 L 35 20" />
            </svg>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F1B16] tracking-tight leading-[1.08]"
          >
            Build what <br className="hidden sm:inline" />
            <span className="italic font-normal">hasn’t been built yet</span>.
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 text-sm sm:text-base lg:text-lg text-[#6E655A] max-w-xl leading-relaxed"
        >
          We craft bespoke web platforms, immersive 3D spatial interfaces, and high-conversion digital architectures with editorial finesse and uncompromising performance.
        </motion.p>
      </div>

      {/* 2. Edge-to-Edge Rotating Fanned Cards Across Full Width */}
      <div className="w-full overflow-hidden flex justify-center items-center relative z-20 py-4 sm:py-6">
        <HeroCardFan />
      </div>

      {/* 3. Centered Coral CTA Button with "It's direct" Doodle */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center relative z-10 pt-3 sm:pt-5 pb-2">
        <div className="relative inline-flex items-center justify-center">
          {/* Hand-Drawn Doodle pointing directly to the CTA button with ample breathing room */}
          <div className="absolute right-full mr-4 sm:mr-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2.5 pointer-events-none select-none whitespace-nowrap">
            <span className="font-handwriting text-xl sm:text-2xl text-[#1F1B16]/85 -rotate-6 tracking-wide font-medium">
              It&apos;s direct
            </span>
            {/* Elegant curved arrow pointing smoothly toward the button */}
            <svg
              className="w-9 h-7 text-[#1F1B16]/75 shrink-0"
              viewBox="0 0 46 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 4 19 C 16 23, 28 17, 40 9" />
              <path d="M 32 7 L 40 9 L 37 17" />
            </svg>
          </div>

          {/* Main Coral / Salmon CTA Pill Button */}
          <Link href="/contact">
            <button
              type="button"
              className="bg-[#F0755C] hover:bg-[#E0644B] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_10px_28px_rgba(240,117,92,0.35)] transition-all transform hover:scale-105 active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

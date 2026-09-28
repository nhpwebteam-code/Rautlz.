"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

interface VideoCardItem {
  id: string;
  title: string;
  creator: string;
  category: string;
  bgGradient: string;
  accentColor: string;
  imageAlt: string;
}

const GALLERY_CARDS: VideoCardItem[] = [
  {
    id: "card-1",
    title: "Morning Routine",
    creator: "Maya L.",
    category: "Lifestyle",
    bgGradient: "from-amber-600/90 to-orange-800",
    accentColor: "#F4B860",
    imageAlt: "Morning juice pouring",
  },
  {
    id: "card-2",
    title: "Street Dance Session",
    creator: "K-Crew",
    category: "Performance",
    bgGradient: "from-neutral-800 to-zinc-900",
    accentColor: "#F0755C",
    imageAlt: "Dancers in urban setting",
  },
  {
    id: "card-3",
    title: "Coastal Explorer",
    creator: "Liam S.",
    category: "Travel",
    bgGradient: "from-amber-700 to-stone-900",
    accentColor: "#A8E6A0",
    imageAlt: "Person sitting by rocky coast",
  },
  {
    id: "card-4",
    title: "Skincare Rituals",
    creator: "Chloe V.",
    category: "Beauty",
    bgGradient: "from-rose-400 to-amber-600",
    accentColor: "#F5D9A8",
    imageAlt: "Face cream application",
  },
  {
    id: "card-5",
    title: "Citrus Recipe",
    creator: "Chef Leo",
    category: "Food",
    bgGradient: "from-orange-500 to-amber-700",
    accentColor: "#F4B860",
    imageAlt: "Grapefruits and lemons sliced",
  },
  {
    id: "card-6",
    title: "Matcha Bowl Prep",
    creator: "Aoi T.",
    category: "Wellness",
    bgGradient: "from-emerald-700 to-stone-900",
    accentColor: "#A8E6A0",
    imageAlt: "Creator holding healthy bowl",
  },
  {
    id: "card-7",
    title: "Highway Night Ride",
    creator: "RacerX",
    category: "Automotive",
    bgGradient: "from-sky-800 to-slate-900",
    accentColor: "#F0755C",
    imageAlt: "Motorcycle on open bridge",
  },
];

export default function GradientFrameHero() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...GALLERY_CARDS, ...GALLERY_CARDS, ...GALLERY_CARDS];

  return (
    <div className="min-h-screen w-full p-3 sm:p-5 lg:p-6 bg-gradient-to-br from-[#F4B860] via-[#F5E6A8] to-[#A8E6A0] flex items-center justify-center font-sans antialiased">
      {/* Inset Warm Cream Content Card */}
      <div className="w-full max-w-7xl bg-[#F7F3EA] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] shadow-[0_24px_70px_rgba(0,0,0,0.09)] border border-white/60 p-5 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
        {/* 1. Navbar */}
        <header className="flex items-center justify-between pb-6 sm:pb-8 border-b border-black/5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-sans font-bold text-xl sm:text-2xl text-[#14161A] tracking-tight">
            <svg
              className="w-6 h-6 text-[#14161A]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>BrandLyft</span>
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider text-[#14161A]/80">
            <a href="#brands" className="hover:text-[#14161A] transition-colors">Brands</a>
            <a href="#creators" className="hover:text-[#14161A] transition-colors">Creators</a>
            <a href="#pricing" className="hover:text-[#14161A] transition-colors">Pricing</a>
            <a href="#use-cases" className="hover:text-[#14161A] transition-colors">Use Cases</a>
            <a href="#contact" className="hover:text-[#14161A] transition-colors">Contact</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-xs sm:text-sm font-semibold text-[#14161A] px-3 py-1.5 hover:text-black transition-colors"
            >
              Log in
            </button>
            <button
              type="button"
              className="bg-[#14161A] text-white hover:bg-black text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </header>

        {/* 2. Hero Centered Content with Doodles */}
        <main className="py-8 sm:py-12 lg:py-14 flex flex-col items-center text-center relative z-10">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center px-4 py-1.5 rounded-full bg-[#F5D9A8] text-[#14161A] text-xs font-bold tracking-tight shadow-sm"
          >
            Join over 100,000 happy creators
          </motion.div>

          {/* Main Headline with Hand-Drawn Doodle */}
          <div className="relative max-w-4xl mx-auto">
            {/* Top Right Doodle: "Elevate your brand" */}
            <div className="absolute -top-6 -right-8 sm:-right-16 lg:-right-24 hidden sm:flex flex-col items-center pointer-events-none select-none">
              <span className="font-handwriting text-xl sm:text-2xl text-[#14161A] -rotate-6 tracking-wide">
                Elevate your brand
              </span>
              {/* Squiggly curved arrow pointing to headline */}
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-[#14161A] -rotate-12 mt-1"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 20 20 C 60 10, 80 50, 70 80" />
                <path d="M 60 70 L 70 80 L 80 70" />
              </svg>
            </div>

            {/* Left Small Doodle Accent */}
            <div className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none select-none text-[#14161A]">
              <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 10 30 L 25 15" />
                <path d="M 20 35 L 35 20" />
              </svg>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#14161A] tracking-tight leading-[1.06]"
            >
              Engage Audiences <br />
              <span>with Stunning Videos</span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-[#6B6B6B] max-w-[490px] leading-relaxed"
          >
            Boost Your Brand with High-Impact Short Videos from our expert content creators. Our team is ready to propel your business forward
          </motion.p>
        </main>

        {/* 3. Auto-Scrolling Marquee Gallery (with Curved Arc Fanning) */}
        <div
          className="relative w-full py-4 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            className="flex items-center gap-4 sm:gap-5 w-max py-4"
            animate={
              isPaused
                ? {}
                : {
                    x: ["0%", "-33.333%"],
                  }
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 26,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="group relative w-[140px] sm:w-[165px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/10 transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0"
              >
                {/* Visual Thumbnail Card Background */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${card.bgGradient} flex flex-col justify-between p-3.5 text-white relative`}
                >
                  {/* Subtle inner highlight */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                      {card.category}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="relative z-10 space-y-0.5">
                    <p className="text-xs font-bold truncate leading-tight">
                      {card.title}
                    </p>
                    <p className="text-[10px] text-white/80 truncate">
                      by {card.creator}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4. Centered CTA Button with "It's free" Doodle */}
        <div className="py-6 sm:py-8 flex flex-col items-center relative z-10">
          <div className="relative flex items-center justify-center">
            {/* Doodle Arrow pointing to CTA */}
            <div className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none select-none">
              <span className="font-handwriting text-lg sm:text-xl text-[#14161A] -rotate-12">
                It&apos;s free
              </span>
              {/* Curved arrow */}
              <svg
                className="w-8 h-8 text-[#14161A] rotate-45"
                viewBox="0 0 60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 10 30 C 25 15, 45 15, 50 35" />
                <path d="M 40 35 L 50 35 L 50 25" />
              </svg>
            </div>

            {/* Main Coral / Salmon CTA Pill Button */}
            <button
              type="button"
              className="bg-[#F0755C] hover:bg-[#E0644B] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_8px_24px_rgba(240,117,92,0.35)] transition-all transform hover:scale-105 active:scale-98 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

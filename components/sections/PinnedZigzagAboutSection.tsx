"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle, Calendar } from "lucide-react";

// 3D Pushpin Component with realistic specular highlight, gloss, and contact shadow
function Pushpin({
  color = "orange",
  className = "",
  isHovered = false,
}: {
  color?: "orange" | "blue" | "purple";
  className?: string;
  isHovered?: boolean;
}) {
  const pinGradients = {
    orange: {
      headStart: "#FF7E40",
      headMid: "#E8591C",
      headEnd: "#A83404",
      highlight: "#FFE0D0",
      glow: "rgba(232, 89, 28, 0.4)",
    },
    blue: {
      headStart: "#5888FF",
      headMid: "#3366E8",
      headEnd: "#1A3BA8",
      highlight: "#DCE6FF",
      glow: "rgba(51, 102, 232, 0.4)",
    },
    purple: {
      headStart: "#AA66FF",
      headMid: "#8238E8",
      headEnd: "#4E1A9E",
      highlight: "#F0E0FF",
      glow: "rgba(130, 56, 232, 0.4)",
    },
  };

  const current = pinGradients[color] || pinGradients.orange;

  return (
    <motion.div
      animate={{
        scale: isHovered ? 1.18 : 1,
        y: isHovered ? -4 : 0,
        rotate: isHovered ? -6 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className={`relative flex items-center justify-center cursor-pointer ${className}`}
    >
      {/* Contact Drop Shadow on Note Surface */}
      <div
        className="absolute top-3 w-8 h-3.5 rounded-full blur-[3px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)",
        }}
      />

      {/* 3D Rendered Glossy Pushpin SVG */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.22)]"
      >
        <defs>
          {/* Main Sphere Gradient */}
          <radialGradient
            id={`pin-sphere-${color}`}
            cx="35%"
            cy="32%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor={current.highlight} />
            <stop offset="25%" stopColor={current.headStart} />
            <stop offset="70%" stopColor={current.headMid} />
            <stop offset="100%" stopColor={current.headEnd} />
          </radialGradient>

          {/* Pin Base Shadow / Rim */}
          <linearGradient
            id={`pin-rim-${color}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={current.headEnd} stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Pin Base Flange */}
        <ellipse
          cx="17"
          cy="21"
          rx="7.5"
          ry="3.2"
          fill={`url(#pin-rim-${color})`}
        />

        {/* Pin Round Head Sphere */}
        <circle
          cx="17"
          cy="15"
          r="9.5"
          fill={`url(#pin-sphere-${color})`}
        />

        {/* Specular Highlight Gloss Dot */}
        <ellipse
          cx="14"
          cy="11.5"
          rx="3"
          ry="1.8"
          fill="#FFFFFF"
          fillOpacity="0.9"
          transform="rotate(-25 14 11.5)"
        />

        {/* Secondary Rim Reflection */}
        <ellipse
          cx="20.5"
          cy="19"
          rx="1.5"
          ry="0.8"
          fill="#FFFFFF"
          fillOpacity="0.4"
        />
      </svg>
    </motion.div>
  );
}

// 5 Pinned Zigzag Cards Data
const ZIGZAG_CARDS = [
  {
    number: "01",
    title: "Editorial Craft & Character",
    description:
      "We reject sterile agency templates in favor of tactile typography, bespoke color palettes, and cinematic lighting tailored uniquely to your brand ethos.",
    panelBg: "bg-[#FCE3D4]", // Pastel Peach
    numberColor: "text-[#C1673B]",
    pinColor: "orange" as const,
    glowColor: "rgba(193, 103, 59, 0.22)",
    tilt: "-rotate-1 sm:-rotate-2",
    alignment: "left" as const,
  },
  {
    number: "02",
    title: "The Three-Minds Model",
    description:
      "Nihal (Development), Pranav (Strategy), and Hemanth (Design) collaborate with you directly from Day 1. No account managers, no junior buffers, zero handoff loss.",
    panelBg: "bg-[#DDE3F7]", // Pastel Periwinkle Blue
    numberColor: "text-[#3B66E8]",
    pinColor: "blue" as const,
    glowColor: "rgba(59, 102, 232, 0.22)",
    tilt: "rotate-1 sm:rotate-2",
    alignment: "right" as const,
  },
  {
    number: "03",
    title: "Direct Founder Channels",
    description:
      "Communicate directly with the engineers and designers building your website via dedicated WhatsApp and email channels with guaranteed sub-2-hour responses.",
    panelBg: "bg-[#E8DFF7]", // Pastel Lavender Purple
    numberColor: "text-[#8B4DE8]",
    pinColor: "purple" as const,
    glowColor: "rgba(139, 77, 232, 0.22)",
    tilt: "-rotate-1 sm:-rotate-1.5",
    alignment: "left" as const,
  },
  {
    number: "04",
    title: "Scoped Case Studies & Pricing",
    description:
      "Explore 8 defined, fixed-scope tiers from single-page validation sprints to full-custom 3D WebGL platforms with transparent deliverables and zero hidden costs.",
    panelBg: "bg-[#FCE3D4]", // Pastel Peach
    numberColor: "text-[#C1673B]",
    pinColor: "orange" as const,
    glowColor: "rgba(193, 103, 59, 0.22)",
    tilt: "rotate-1 sm:rotate-1.5",
    alignment: "right" as const,
  },
  {
    number: "05",
    title: "Zero-Bloat Performance Standard",
    description:
      "High visual elegance paired with sub-second page loads, 100/100 Core Web Vitals, and clean Next.js App Router code that is effortless to maintain and scale.",
    panelBg: "bg-[#DDE3F7]", // Pastel Periwinkle Blue
    numberColor: "text-[#3B66E8]",
    pinColor: "blue" as const,
    glowColor: "rgba(59, 102, 232, 0.22)",
    tilt: "-rotate-1 sm:-rotate-1",
    alignment: "left" as const,
  },
];

// Individual Interactive 3D Pinned Card with Spring Physics & Spotlight Glare
function InteractivePinnedCard({
  card,
  index,
}: {
  card: (typeof ZIGZAG_CARDS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate values for 3D tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 300,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const isLeft = card.alignment === "left";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex w-full ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.03 : 1,
          y: isHovered ? -8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
        className={`relative w-full sm:w-[50%] md:w-[48%] bg-white rounded-[22px] sm:rounded-[26px] p-3 sm:p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] border border-[#00000008] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] ${card.tilt}`}
      >
        {/* Specular Spotlight on Hover */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 opacity-80 transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at 50% 50%, ${card.glowColor}, transparent 70%)`,
            }}
          />
        )}

        {/* Pushpin Straddling the Top Boundary */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
          <Pushpin color={card.pinColor} isHovered={isHovered} />
        </div>

        {/* Inner Pastel Colored Panel */}
        <div
          className={`w-full ${card.panelBg} rounded-[16px] sm:rounded-[18px] p-6 sm:p-7 space-y-2.5 pt-7 sm:pt-8 transition-colors`}
        >
          {/* Two-digit number label */}
          <span
            className={`font-handwriting font-bold text-2xl sm:text-3xl ${card.numberColor} block leading-none select-none`}
          >
            {card.number}
          </span>

          {/* Bold Dark Headline */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2B2B2B] tracking-tight leading-snug">
            {card.title}
          </h3>

          {/* Paragraph */}
          <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
            {card.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PinnedZigzagAboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="w-full text-[#2B2B2B] py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden select-none"
    >
      {/* 1. Lined Notebook Paper Background (Horizontal ruled lines) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 29px, rgba(31, 27, 22, 0.04) 30px)",
          backgroundSize: "100% 30px",
        }}
      />

      <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        
        {/* 2. Header: Logo Lockup + Bold 2-Line Headline */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          {/* Logo Lockup */}
          <div className="inline-flex items-center gap-2.5 justify-center">
            <span className="font-display text-xl font-bold tracking-tight text-[#2B2B2B]">
              rault<span className="text-[#FF4D2E]">z.</span> studio
            </span>
          </div>

          {/* Large Bold 2-Line Headline */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2B2B] leading-[1.12]">
            How We Build Trust &amp; <br />
            <span className="italic font-normal text-[#5A5A58]">Authority on Your Website</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
            Five core principles that guide our direct founder sprints, editorial design reviews, and high-performance engineering.
          </p>
        </div>

        {/* 3. Zigzag Sticky-Note Cards Container with Dynamic Animated Connecting Path */}
        <div className="relative w-full space-y-12 sm:space-y-16">
          
          {/* Dynamic Responsive Connector SVG (Desktop Zigzag Curve with Alive Energy Flow) */}
          <div className="hidden sm:block absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 1200"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Traveling Glow Pulse for the Dashed Line */}
                <linearGradient id="connector-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C1673B" stopOpacity="0.85" />
                  <stop offset="35%" stopColor="#3B66E8" stopOpacity="0.85" />
                  <stop offset="70%" stopColor="#8B4DE8" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#C1673B" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Curve 1: Card 1 (left) -> Card 2 (right) */}
              <path
                d="M 280 120 C 420 160, 480 240, 560 300"
                stroke="#A8A8A4"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.4"
              />
              <motion.path
                d="M 280 120 C 420 160, 480 240, 560 300"
                stroke="url(#connector-glow)"
                strokeWidth="2.4"
                strokeDasharray="8 8"
                animate={{
                  strokeDashoffset: [0, -48],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Curve 2: Card 2 (right) -> Card 3 (left) */}
              <path
                d="M 520 380 C 400 450, 360 520, 260 580"
                stroke="#A8A8A4"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.4"
              />
              <motion.path
                d="M 520 380 C 400 450, 360 520, 260 580"
                stroke="url(#connector-glow)"
                strokeWidth="2.4"
                strokeDasharray="8 8"
                animate={{
                  strokeDashoffset: [0, -48],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Curve 3: Card 3 (left) -> Card 4 (right) */}
              <path
                d="M 280 660 C 420 720, 480 800, 560 860"
                stroke="#A8A8A4"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.4"
              />
              <motion.path
                d="M 280 660 C 420 720, 480 800, 560 860"
                stroke="url(#connector-glow)"
                strokeWidth="2.4"
                strokeDasharray="8 8"
                animate={{
                  strokeDashoffset: [0, -48],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Curve 4: Card 4 (right) -> Card 5 (left) */}
              <path
                d="M 520 940 C 400 1000, 360 1070, 260 1130"
                stroke="#A8A8A4"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.4"
              />
              <motion.path
                d="M 520 940 C 400 1000, 360 1070, 260 1130"
                stroke="url(#connector-glow)"
                strokeWidth="2.4"
                strokeDasharray="8 8"
                animate={{
                  strokeDashoffset: [0, -48],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
          </div>

          {/* Cards List with Interactive 3D Tilt & Connection */}
          {ZIGZAG_CARDS.map((card, index) => (
            <InteractivePinnedCard key={card.number} card={card} index={index} />
          ))}
        </div>

        {/* 4. Closing Studio Signature Element (Refined Aesthetic with Dual Actions) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-12 sm:pt-16 flex flex-col items-center justify-center gap-7 text-center relative"
        >
          {/* Subtle Ambient Radial Halo behind Signature */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[160px] rounded-full bg-gradient-to-r from-[#FCE3D4]/40 via-[#DDE3F7]/30 to-[#E8DFF7]/40 blur-[40px] pointer-events-none" />

          {/* High-Craft Studio Founder Badge with Tooltip Chips */}
          <div className="relative inline-flex items-center gap-4 px-6 py-3.5 rounded-full bg-white/95 backdrop-blur-xl border border-[#E8DFC8] shadow-[0_12px_36px_rgba(31,27,22,0.06),0_2px_8px_rgba(31,27,22,0.03)] hover:shadow-[0_16px_48px_rgba(193,103,59,0.15)] hover:border-[#C1673B]/40 transition-all duration-300 group">
            
            {/* 3-Founder Avatar Ring Cluster */}
            <div className="flex items-center -space-x-2.5 shrink-0">
              <div
                title="Nihal — Development & WebGL"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C1673B] to-[#E8591C] flex items-center justify-center text-white font-mono text-xs font-bold ring-2 ring-white shadow-xs cursor-pointer hover:scale-110 hover:z-20 transition-transform"
              >
                N
              </div>
              <div
                title="Pranav — Product & Strategy"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3366E8] to-[#5888FF] flex items-center justify-center text-white font-mono text-xs font-bold ring-2 ring-white shadow-xs cursor-pointer hover:scale-110 hover:z-20 transition-transform"
              >
                P
              </div>
              <div
                title="Hemanth — Spatial UI/UX & Design"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8238E8] to-[#AA66FF] flex items-center justify-center text-white font-mono text-xs font-bold ring-2 ring-white shadow-xs cursor-pointer hover:scale-110 hover:z-20 transition-transform"
              >
                H
              </div>
            </div>

            {/* Signature Typography */}
            <div className="flex flex-col text-left pr-1">
              <span className="font-sans text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                Your all-in-one{" "}
                <span className="text-[#C1673B] font-bold">
                  design &amp; engineering partner
                </span>
                .
              </span>
              <span className="font-mono text-[11px] text-muted flex items-center gap-1.5 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B7A4E] animate-pulse" />
                Direct founder sprints • Zero account managers
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-1">
            <Link href="/start-a-project">
              <button
                type="button"
                className="bg-[#1F1B16] hover:bg-[#C1673B] text-[#F6F0E4] font-semibold text-sm px-8 py-3.5 rounded-full shadow-[0_10px_28px_rgba(31,27,22,0.14)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Start a Project with Raultz</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact">
              <button
                type="button"
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-foreground font-semibold text-sm border border-[#E8DFC8] shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer inline-flex items-center gap-2 text-muted hover:text-foreground"
              >
                <Calendar className="w-4 h-4 text-[#C1673B]" />
                <span>Book a Discovery Call</span>
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

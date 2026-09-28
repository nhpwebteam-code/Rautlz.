"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Users, Sparkles, Cpu, Target, Eye } from "lucide-react";
import PinnedZigzagAboutSection from "@/components/sections/PinnedZigzagAboutSection";
import { InteractiveTiltCard } from "@/components/ui/interactive-tilt-card";

const EXPANDED_WHY_RAULTZ = [
  {
    index: "01",
    category: "Bespoke Sculpture",
    title: "Craft & Detail Obsession",
    description:
      "We obsess over the invisible margins — bespoke typographic kerning, tactile spring physics, and custom WebGL lighting. Every digital artifact we deploy is unique to the brand it represents, refusing generic agency shortcuts.",
    icon: Compass,
    bgGradient: "bg-gradient-to-br from-[#FFF9F5] via-[#FCF3EB] to-[#F8ECE0]",
    borderColor: "border-[#EAD5C5]",
    iconColor: "text-[#C1673B]",
    accentColor: "text-[#C1673B]",
    dotBg: "bg-[#C1673B]",
    iconBg: "bg-white border-[#EAD5C5]",
    glowColor: "rgba(193, 103, 59, 0.25)",
    shadow: "hover:shadow-[0_20px_40px_rgba(193,103,59,0.18)]",
  },
  {
    index: "02",
    category: "Founder Triad",
    title: "The Three-Minds Model",
    description:
      "Frontend engineering, spatial 3D design, and product strategy collaborate from Day 1. No layered agency bureaucracy, no account manager games, no handoff translation loss — just pure direct execution.",
    icon: Users,
    bgGradient: "bg-gradient-to-br from-[#F5F8FF] via-[#ECF2FD] to-[#E0EBFA]",
    borderColor: "border-[#CEDBFA]",
    iconColor: "text-[#3B66E8]",
    accentColor: "text-[#3B66E8]",
    dotBg: "bg-[#3B66E8]",
    iconBg: "bg-white border-[#CEDBFA]",
    glowColor: "rgba(59, 102, 232, 0.25)",
    shadow: "hover:shadow-[0_20px_40px_rgba(59,102,232,0.18)]",
  },
  {
    index: "03",
    category: "Spatial Medium",
    title: "Design + Technology Combined",
    description:
      "We do not treat code as an afterthought to Figma files. By pushing Next.js App Router, Three.js shaders, and GSAP scroll choreography together, we build experiences competitors cannot easily replicate.",
    icon: Sparkles,
    bgGradient: "bg-gradient-to-br from-[#FAF5FF] via-[#F4EBFD] to-[#EBE0F9]",
    borderColor: "border-[#DFCEF8]",
    iconColor: "text-[#8B4DE8]",
    accentColor: "text-[#8B4DE8]",
    dotBg: "bg-[#8B4DE8]",
    iconBg: "bg-white border-[#DFCEF8]",
    glowColor: "rgba(139, 77, 232, 0.25)",
    shadow: "hover:shadow-[0_20px_40px_rgba(139,77,232,0.18)]",
  },
  {
    index: "04",
    category: "Performance Core",
    title: "Zero-Bloat Performance",
    description:
      "Visual extravagance should never compromise user experience. We rigorously isolate client bundles, cap device pixel ratios, and deliver lightweight production builds that rank high and convert fast.",
    icon: Cpu,
    bgGradient: "bg-gradient-to-br from-[#F5FAF2] via-[#ECF5E8] to-[#E0EEDA]",
    borderColor: "border-[#CFE4C7]",
    iconColor: "text-[#4E7A52]",
    accentColor: "text-[#4E7A52]",
    dotBg: "bg-[#4E7A52]",
    iconBg: "bg-white border-[#CFE4C7]",
    glowColor: "rgba(78, 122, 82, 0.25)",
    shadow: "hover:shadow-[0_20px_40px_rgba(78,122,82,0.18)]",
  },
];

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] -mt-24 sm:-mt-28 pt-28 sm:pt-36">
      
      {/* 1. Dynamic Floating Ambient Background Glows with Micro-Motions */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#FCE3D4]/50 to-[#F5ECE0]/30 blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#DDE3F7]/45 to-[#E8DFF7]/35 blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[-5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#E3EED8]/50 to-[#FAF3E8]/40 blur-[150px] pointer-events-none"
      />

      {/* 2. Tactile Architectural Dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#1F1B16 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-16 sm:pb-24 space-y-24">
        
        {/* 1. Page Hero: How We Build Trust & Authority (Pinned Sticky-Note Zigzag) */}
        <PinnedZigzagAboutSection />

        {/* 2. Full Brand Story Narrative: Elevated Studio Card with 3D Cursor Tilt & Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InteractiveTiltCard
            tiltDegree={4}
            glowColor="rgba(193, 103, 59, 0.18)"
            className="w-full rounded-3xl sm:rounded-[36px]"
          >
            <section className="bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[36px] border border-[#E8DFC8] p-8 sm:p-12 lg:p-14 shadow-[0_12px_36px_rgba(31,27,22,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative overflow-hidden group">
              <div className="lg:col-span-5 relative z-10">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12] group-hover:text-[#C1673B] transition-colors duration-300">
                  Bridging the gap between fine craft and heavy engineering.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-5 font-sans text-base sm:text-lg text-muted leading-relaxed border-l-2 border-[#C1673B]/30 pl-6 sm:pl-10 relative z-10">
                <p>
                  Traditional agencies force founders into a false dichotomy: choose between a slow design agency that treats code as an afterthought, or a technical shop that produces sterile, indistinguishable web software.
                </p>
                <p>
                  At Raultz, design and code exist as a single continuous medium. We assemble spatial 3D environments, kinetic typography, and bulletproof Next.js architectures in unison. Every interaction has weight; every layout breathes with editorial elegance.
                </p>
                <p className="font-semibold text-foreground">
                  We partner directly with founders and forward-thinking teams to build flagships that command instant authority in their category.
                </p>
              </div>
            </section>
          </InteractiveTiltCard>
        </motion.div>

        {/* 3. Mission & Vision: High-Contrast 3D Tilt Pop Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card (Warm Terracotta Sunrise Glow) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InteractiveTiltCard
              tiltDegree={6}
              glowColor="rgba(193, 103, 59, 0.22)"
              className="h-full rounded-3xl"
            >
              <div className="bg-gradient-to-br from-[#FFF9F5] via-[#FCF4EC] to-[#F7ECE0] rounded-3xl p-8 sm:p-10 border border-[#EAD5C5] space-y-5 shadow-[0_8px_30px_rgba(193,103,59,0.06)] h-full flex flex-col justify-between group">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C1673B] flex items-center justify-center text-white shadow-[0_6px_16px_rgba(193,103,59,0.35)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#C1673B] px-3 py-1 rounded-full bg-white/90 border border-[#EAD5C5] uppercase shadow-xs">
                      Our Mission
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                    To engineer digital flagships that command respect.
                  </h3>
                  <p className="font-sans text-muted leading-relaxed text-sm sm:text-base">
                    We exist to elevate brands through tailored digital architecture, eliminating generic templates and delivering sub-second performance with cinematic visual polish.
                  </p>
                </div>
              </div>
            </InteractiveTiltCard>
          </motion.div>

          {/* Vision Card (Serene Sage & Olive Mist) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InteractiveTiltCard
              tiltDegree={6}
              glowColor="rgba(107, 122, 78, 0.22)"
              className="h-full rounded-3xl"
            >
              <div className="bg-gradient-to-br from-[#F6FAF1] via-[#EFF6E7] to-[#E3EED8] rounded-3xl p-8 sm:p-10 border border-[#D2E2C4] space-y-5 shadow-[0_8px_30px_rgba(107,122,78,0.06)] h-full flex flex-col justify-between group">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#6B7A4E] flex items-center justify-center text-white shadow-[0_6px_16px_rgba(107,122,78,0.35)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#6B7A4E] px-3 py-1 rounded-full bg-white/90 border border-[#D2E2C4] uppercase shadow-xs">
                      Our Vision
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                    The web as an immersive, tactile, and spatial canvas.
                  </h3>
                  <p className="font-sans text-muted leading-relaxed text-sm sm:text-base">
                    We envision a digital landscape where websites are not static brochures, but living spatial experiences where typography, 3D interaction, and speed coalesce effortlessly.
                  </p>
                </div>
              </div>
            </InteractiveTiltCard>
          </motion.div>
        </section>

        {/* 4. Architectural Pillars: Studio Editorial Header Lockup */}
        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 max-w-2xl"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Why Founders <span className="italic font-normal">Trust Raultz</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
              The core tenets that guide our development sprints, design reviews, and client collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {EXPANDED_WHY_RAULTZ.map((pillar, i) => {
              const Icon = pillar.icon;
              const colSpan = i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5";

              return (
                <motion.div
                  key={pillar.index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${colSpan}`}
                >
                  <InteractiveTiltCard
                    tiltDegree={5}
                    glowColor={pillar.glowColor}
                    className="h-full rounded-3xl"
                  >
                    <div
                      className={`h-full ${pillar.bgGradient} rounded-3xl p-8 sm:p-9 border ${pillar.borderColor} shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 ${pillar.shadow} group`}
                    >
                      <div>
                        {/* Creative Studio Top Lockup: Index + Category + Floating Icon */}
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/[0.04]">
                          <div className="flex items-center gap-2.5">
                            <span className={`font-mono text-xs font-bold tracking-widest ${pillar.accentColor}`}>
                              {pillar.index}
                            </span>
                            <span className={`w-1 h-1 rounded-full ${pillar.dotBg} opacity-80`} />
                            <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-foreground/75">
                              {pillar.category}
                            </span>
                          </div>

                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${pillar.iconBg} ${pillar.iconColor}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3 leading-snug">
                          {pillar.title}
                        </h3>

                        <p className="font-sans text-muted leading-relaxed text-sm sm:text-base">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </InteractiveTiltCard>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

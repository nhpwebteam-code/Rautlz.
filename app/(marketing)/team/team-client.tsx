"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Compass,
  Palette,
  Sparkles,
  CheckCircle2,
  Calendar,
  X,
  MessageCircle,
  Share2,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { TEAM_MEMBERS, TeamMember } from "@/lib/content/team";
import { CONTACT_INFO } from "@/lib/contact";

const ROLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Development: Code2,
  Strategy: Compass,
  Design: Palette,
};

const GRADIENT_PALETTES = [
  "from-[#FF4D2E] via-[#FF7A59] to-[#F5A623]", // Terracotta Sunrise for Nihal
  "from-[#8B4DE8] via-[#A76DF0] to-[#E8B4F8]", // Creative Purple for Hemanth
  "from-[#6B7A4E] via-[#8CA066] to-[#C9DF9E]", // Sage & Olive for Pranav
];

export default function TeamPage() {
  const [selectedFounder, setSelectedFounder] = useState<TeamMember | null>(null);
  const [activeStackIndex, setActiveStackIndex] = useState<number>(0);

  const activeFounder = TEAM_MEMBERS[activeStackIndex] || TEAM_MEMBERS[0];
  const ActiveIcon = ROLE_ICONS[activeFounder.role] || Sparkles;

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] -mt-24 sm:-mt-28 pt-28 sm:pt-36 pb-20 sm:pb-28">
      
      {/* Dynamic Floating Ambient Background Glows */}
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

      {/* Tactile Architectural Dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#1F1B16 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* 1. FOUNDERS CARDS SECTION (Exact Match with Reference Design Photo) */}
        {/* ========================================================================= */}
        <section className="space-y-12 sm:space-y-14">
          
          {/* Main Title Header matching Reference Image ("Board Of Directors" style) */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#161616] leading-tight">
              Board Of Directors
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-[#FF4D2E] uppercase tracking-widest">
              ● THE FOUNDING TRIAD &bull; DIRECT EXECUTION ●
            </p>
          </div>

          {/* 3 Founders Grid matching Reference Design Photo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => {
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  onClick={() => {
                    setActiveStackIndex(idx);
                    setSelectedFounder(member);
                  }}
                  className="group relative cursor-pointer select-none"
                >
                  {/* Outer Card Container */}
                  <div className="relative w-full aspect-[1/1.52] min-h-[440px] sm:min-h-[480px] rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(230,57,70,0.22)] hover:shadow-[0_24px_60px_rgba(230,57,70,0.36)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-end p-6 sm:p-7 bg-white">
                    
                    {/* Pre-composed Subject & Arch Photo */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} Lead at Raultz, Hyderabad`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                        priority
                      />

                      {/* Smooth Bottom Gradient Fade for High-Contrast Clean Typography */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#D92534] via-[#D92534]/60 to-transparent z-10" />
                    </div>

                    {/* Tap to View Tooltip Indicator on Hover */}
                    <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Bottom Name and Designation (Matching Reference Photo) */}
                    <div className="relative z-20 space-y-0.5 text-left">
                      <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-xs">
                        {member.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-white/95 font-medium tracking-wide drop-shadow-xs">
                        {member.designation}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Centered Descriptive Summary Paragraph (Matching Reference Photo) */}
          <div className="max-w-3xl mx-auto text-center pt-2">
            <p className="font-sans text-sm sm:text-base text-[#4A4238] leading-relaxed">
              At Raultz, you work directly with the three founding partners who design, code, and strategize your project from first concept to production deployment. Zero account managers, zero junior handoffs, and 100% direct accountability.
            </p>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. FOUNDER LEADERSHIP & EXECUTION PROFILES (Harmonized 3-Pillar Matrix) */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase block">
              ● DOMAIN MASTERY &bull; THE THREE MINDS ●
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#161616] tracking-tight">
              Founder Leadership &amp; Execution Profiles
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
              Direct founder accountability from first concept to global edge deployment. Explore the technical domains, deliverables, and philosophies of each partner.
            </p>
          </div>

          {/* 3-Pillar Dossier Grid matching Section 1 and Section 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {TEAM_MEMBERS.map((member, idx) => {
              const Icon = ROLE_ICONS[member.role] || Sparkles;

              const roleTag =
                member.id === "nihal"
                  ? "[ 01 // ARCHITECTURE & 3D ]"
                  : member.id === "hemanth"
                  ? "[ 02 // SPATIAL UI & MOTION ]"
                  : "[ 03 // TECHNICAL STRATEGY ]";

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative rounded-2xl bg-white border border-[#E5E0D8] p-7 sm:p-8 shadow-sm hover:shadow-md hover:border-[#FF0000]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group overflow-hidden"
                >
                  <div className="space-y-6 relative z-10">
                    
                    {/* Top Role Tag */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.06]">
                      <span className="font-sans text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#FF0000]">
                        {roleTag}
                      </span>
                    </div>

                    {/* Header: Photo Thumbnail + Identity Lockup + Brand-Red Icon Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#E5E0D8] group-hover:border-[#FF0000] transition-colors shrink-0 shadow-xs">
                          <Image
                            src={member.image}
                            alt={`${member.name} - ${member.role} Lead at Raultz`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div>
                          <h3 className="font-sans text-2xl sm:text-[28px] font-black text-[#161616] leading-tight tracking-tight">
                            {member.name}
                          </h3>
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF0000] block mt-0.5">
                            {member.role} Lead
                          </span>
                        </div>
                      </div>

                      {/* Filled Brand-Red Rounded Square Icon Badge */}
                      <div className="w-11 h-11 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-xs shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Executive Philosophy Quote Box with Decorative Red Quotation Mark */}
                    <div className="relative p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E0D8] overflow-hidden">
                      <span className="absolute top-1 left-2 font-serif text-5xl font-black text-[#FF0000]/20 select-none pointer-events-none leading-none">
                        “
                      </span>
                      <div className="relative z-10 space-y-1.5 pl-4 border-l-2 border-[#FF0000]">
                        <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#FF0000] block">
                          Founder Mandate
                        </span>
                        <p className="font-sans italic text-xs sm:text-[13px] text-[#161616] font-medium leading-relaxed">
                          &ldquo;{member.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Leadership Biography Narrative */}
                    <p className="font-sans text-xs sm:text-sm text-[#4A4238] leading-relaxed">
                      {member.bio}
                    </p>

                    {/* 3 Key Operational Benchmarks Matrix (Clean Stacked HUD Grid - No Overflow) */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-3 border-t border-black/[0.06]">
                      {member.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="px-2 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#E5E0D8] text-center flex flex-col justify-center items-center space-y-0.5 shadow-2xs overflow-hidden"
                        >
                          <span className="font-sans text-[9px] sm:text-[10px] text-[#7A7165] uppercase font-bold tracking-wider block leading-tight truncate max-w-full">
                            {metric.label}
                          </span>
                          <span className="font-sans text-[11px] sm:text-xs font-black text-[#161616] block leading-tight text-center truncate max-w-full">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Core Technical Domains (Clean Left-Border Accent List Style) */}
                    <div className="space-y-2.5 pt-3 border-t border-black/[0.06]">
                      <span className="font-sans text-[11px] sm:text-xs font-bold text-[#161616] uppercase tracking-wider block">
                        Core Technical Domains:
                      </span>
                      <ul className="space-y-2">
                        {member.focusAreas.slice(0, 4).map((skill) => (
                          <li
                            key={skill}
                            className="border-l-2 border-[#FF0000] pl-3 py-0.5 text-xs sm:text-sm font-sans text-[#222222] font-medium leading-snug"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Included Sprint Deliverables (Clean List Style) */}
                    <div className="space-y-2.5 pt-3 border-t border-black/[0.06]">
                      <span className="font-sans text-[11px] sm:text-xs font-bold text-[#6B7A4E] uppercase tracking-wider block">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2">
                        {member.deliverables.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="border-l-2 border-[#6B7A4E] pl-3 py-0.5 text-xs sm:text-sm font-sans text-[#555555] font-normal leading-snug"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Card Actions Footer Strip */}
                  <div className="pt-4 border-t border-black/[0.06] flex items-center gap-2.5 relative z-10">
                    <Link href="/contact" className="flex-1">
                      <button
                        type="button"
                        className="w-full py-3 px-3 rounded-xl bg-[#161616] hover:bg-[#FF0000] text-white font-sans text-xs font-bold transition-all shadow-sm hover:scale-[1.01] active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Call</span>
                      </button>
                    </Link>

                    <a
                      href={CONTACT_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <button
                        type="button"
                        className="p-3 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#161616] hover:text-[#6B7A4E] border border-[#E5E0D8] hover:border-[#6B7A4E]/50 transition-all shadow-2xs cursor-pointer inline-flex items-center justify-center"
                        title="Direct WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-[#6B7A4E]" />
                      </button>
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. THE THREE-MINDS COLLABORATION MODEL */}
        {/* ========================================================================= */}
        <section className="bg-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-14 border border-[#E8DFC8] shadow-[0_12px_40px_rgba(31,27,22,0.06)] space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161616] tracking-tight leading-tight">
              Why the Three-Minds model <span className="text-[#FF4D2E]">outperforms standard agencies</span>.
            </h2>

            <p className="font-sans text-muted text-sm sm:text-base leading-relaxed">
              In standard agencies, your requirements are filtered through account executives, junior designers, and outsourced developers. At Raultz, the triad is in the room with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E8DFC8]/80 font-sans">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-3 shadow-2xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D2E]/10 border border-[#FF4D2E]/20 text-[#FF4D2E] font-mono text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                <span>01 &bull; DIRECT ACCESS</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#161616]">Zero Middlemen</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                Communicate directly with the engineers and designers building your site via shared private Slack/WhatsApp channels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-3 shadow-2xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B7A4E]/10 border border-[#6B7A4E]/20 text-[#6B7A4E] font-mono text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B7A4E]" />
                <span>02 &bull; RAPID ITERATION</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#161616]">Immediate Feedback Loops</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                Design and code evolve together in live Vercel deploy previews rather than static mockups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-3 shadow-2xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6F52]/10 border border-[#8A6F52]/20 text-[#8A6F52] font-mono text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A6F52]" />
                <span>03 &bull; FULL OWNERSHIP</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-[#161616]">Uncompromising Quality</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                Because our founders execute the work, every line of code and visual detail reflects our highest standard.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CLOSING CTA: DIRECT FOUNDER INTRO */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#FF4D2E] via-[#FF5733] to-[#E03D1E] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-14 text-white shadow-[0_20px_50px_rgba(255,77,46,0.35)] border border-white/25 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/90 block">
              ● DIRECT FOUNDER INTRO ●
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to collaborate directly with Nihal, Pranav &amp; Hemanth?
            </h2>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
              Let&apos;s discuss your roadmap, timeline, and deliverables on a direct 20-minute discovery call with the founding partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto bg-white hover:bg-[#FAF7F2] text-[#161616] hover:text-[#FF4D2E] font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 font-mono"
              >
                <Calendar className="w-4 h-4 text-[#FF4D2E]" />
                <span>BOOK A CALL</span>
              </button>
            </Link>

            <Link href="/start-a-project" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto bg-[#141414] hover:bg-black text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 font-mono"
              >
                <Sparkles className="w-4 h-4 text-[#FF4D2E]" />
                <span>START A PROJECT</span>
              </button>
            </Link>
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE FOUNDER PROFILE MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedFounder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFounder(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-2xl bg-[#141414] text-white rounded-3xl sm:rounded-[36px] border border-[#2B2B2B] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedFounder(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Founder Header */}
              <div className="flex items-center gap-5 pr-10">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#FF4D2E] shrink-0 shadow-md">
                  <Image
                    src={selectedFounder.image}
                    alt={`${selectedFounder.name} - ${selectedFounder.role} Lead profile photo`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF4D2E]/20 text-[#FF4D2E] font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                    {selectedFounder.role} Lead
                  </div>
                  <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {selectedFounder.name}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-white/75">
                    {selectedFounder.title}
                  </p>
                </div>
              </div>

              {/* Founder Biography */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF4D2E]">
                  Leadership Narrative
                </h4>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                  {selectedFounder.bio}
                </p>
              </div>

              {/* Core Domains */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  Core Engineering &amp; Execution Domains
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedFounder.focusAreas.map((item: string) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-sans text-white/90 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF4D2E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B7A4E]">
                  Included Sprint Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedFounder.deliverables.map((item: string) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-sans text-white/80 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B7A4E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Founder Contact Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/contact"
                  onClick={() => setSelectedFounder(null)}
                  className="w-full sm:w-1/2"
                >
                  <button
                    type="button"
                    className="w-full bg-[#FF4D2E] hover:bg-[#E03D1E] text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Discovery Call</span>
                  </button>
                </Link>

                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2"
                >
                  <button
                    type="button"
                    className="w-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-3.5 px-4 rounded-xl border border-white/15 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#6B7A4E]" />
                    <span>WhatsApp Triad Chat</span>
                  </button>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  LayoutGrid,
  CheckCircle2,
  TrendingUp,
  Award,
  Layers,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { PROJECTS, PORTFOLIO_CATEGORIES, type ProjectCategory } from "@/data/projects";
import { BrandMark } from "@/components/ui/BrandLogo";

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [viewMode, setViewMode] = useState<"grid" | "cinematic">("grid");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-14 lg:py-16 space-y-16 sm:space-y-24">
      
      {/* ========================================================================= */}
      {/* 1. NIXTIO-INSPIRED AGENCY SHOWCASE HERO SECTION */}
      {/* ========================================================================= */}
      <section className="space-y-10">
        
        {/* Top Split: Agency Statement + Featured Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Agency Statement & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Agency Monogram & Live Status Row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1F1B16] flex items-center justify-center p-2 shadow-sm border border-[#E2D6C3]">
                <BrandMark size="sm" theme="light" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-extrabold text-lg text-[#1F1B16] tracking-tight">
                    Raultz
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1F1B16] text-[#FAF7F2] font-mono text-[10px] font-bold tracking-widest uppercase">
                    STUDIO SELECT
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#6E655A]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium text-[#1F1B16]">Available for Q2 2026 sprints</span>
                  <span>•</span>
                  <span>Hyderabad &amp; Global</span>
                </div>
              </div>
            </div>

            {/* Headline with High-End Editorial Sans & Tight Tracking */}
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-[68px] font-black tracking-[-0.035em] text-[#1F1B16] leading-[1.05]">
              We build world-class digital platforms &amp; <br className="hidden sm:inline" />
              <span className="italic font-light text-[#6E655A]">engineered to convert</span>.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg text-[#6E655A] leading-relaxed max-w-xl">
              From bespoke single-page luxury ateliers to full-stack web and mobile applications, explore production prototypes deployed in rapid 3 to 7-day sprints.
            </p>

            {/* Micro Stats Bar (Inspired by Nixtio's Dribbble stats) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 font-mono text-xs text-[#1F1B16] border-y border-[#E2D6C3]/80 py-3.5">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-[#1F1B16]">24+</span>
                <span className="text-[#6E655A] text-[11px] uppercase">Shipped Sprints</span>
              </div>
              <span className="text-[#E2D6C3]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-[#1F1B16]">99.4%</span>
                <span className="text-[#6E655A] text-[11px] uppercase">Client CSAT</span>
              </div>
              <span className="text-[#E2D6C3] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-[#FF4D2E]">3–7 Days</span>
                <span className="text-[#6E655A] text-[11px] uppercase">Sprint Turnaround</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/start-a-project">
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-full bg-[#FF4D2E] hover:bg-[#E53517] text-white font-sans text-sm font-bold shadow-[0_6px_20px_rgba(255,77,46,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-98 cursor-pointer flex items-center gap-2"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link href="/contact">
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-full bg-[#1F1B16] hover:bg-black text-[#FAF7F2] font-sans text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#FF4D2E]" />
                  <span>Book Sprint Call</span>
                </button>
              </Link>

              <div className="flex items-center gap-2 pl-1 font-mono text-xs text-[#6E655A]">
                <Mail className="w-3.5 h-3.5 text-[#C1673B]" />
                <span className="hover:text-[#1F1B16] transition-colors cursor-pointer select-all">
                  contact@raultz.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Showcase Card (Nixtio style dark card) (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] bg-[#1F1B16] text-[#FAF7F2] p-6 sm:p-8 border border-black/10 overflow-hidden shadow-2xl">
              
              {/* Warm Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4D2E]/20 blur-[90px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C1673B]/15 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[10px] font-bold tracking-widest uppercase border border-white/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#FF4D2E]" />
                    <span>RAULTZ SPECIALIZATION</span>
                  </span>
                  
                  {/* Verified Seal */}
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-[9px] text-[#FAF7F2]/80">
                    2026
                  </div>
                </div>

                {/* Core Capabilities List */}
                <div className="space-y-3">
                  <h3 className="font-sans text-xl font-bold tracking-tight text-white">
                    Production Capabilities
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                      <span>Next.js 16 Web Apps</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                      <span>React &amp; Mobile Apps</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                      <span>Luxury E-Commerce</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
                      <span>3D Spatial WebGL</span>
                    </div>
                  </div>
                </div>

                {/* Client Verticals / Trust Tiers */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/60 block">
                    TRUSTED ACROSS VERTICALS
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-white/85">
                    <span className="px-2.5 py-1 rounded-md bg-white/10">Bespoke Ateliers</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10">Real Estate</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10">Culinary Brands</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10">Design Monoliths</span>
                  </div>
                </div>

                {/* Performance SLA Guarantee */}
                <div className="p-3 rounded-2xl bg-white/[0.07] border border-white/15 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Core Web Vitals SLA</span>
                  </div>
                  <span className="text-[#FF4D2E] font-bold">Sub-0.4s FCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. RECENT SHOTS & ARCHITECTURAL ARCHIVES FILTER BAR */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        
        {/* Filter Bar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2D6C3]">
          
          {/* Left: Section Title & Shot Count */}
          <div className="flex items-center gap-3">
            <h2 className="font-sans text-2xl sm:text-3xl font-black tracking-[-0.02em] text-[#1F1B16]">
              Recent Deliverables
            </h2>
            <span className="px-3 py-1 rounded-full bg-[#EFE6D8] border border-[#E2D6C3] font-mono text-xs font-bold text-[#1F1B16]">
              {filteredProjects.length} OF {PROJECTS.length} SHOTS
            </span>
          </div>

          {/* Right: Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5 border ${
                    isActive
                      ? "bg-[#1F1B16] text-[#FAF7F2] border-[#1F1B16] shadow-xs"
                      : "bg-[#FFFFFF] text-[#6E655A] hover:text-[#1F1B16] hover:bg-[#FAF7F2] border-[#E2D6C3]"
                  }`}
                >
                  <span>{cat.toUpperCase()}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#E8DECE] text-[#1F1B16]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. DRIBBLE-STYLE PROJECT GRID */}
        {/* ========================================================================= */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={idx}
                viewMode={viewMode}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM HIGH-CONVERSION SPRINT BANNER */}
      {/* ========================================================================= */}
      <section className="rounded-[36px] bg-[#1F1B16] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-black/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4D2E]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C1673B]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs font-bold border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
            <span>RAPID SPRINT DELIVERY</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white leading-tight">
            Ready to commission your <br />
            <span className="italic font-light text-white/80">bespoke digital platform?</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed max-w-2xl">
            We deliver production-ready codebases, high-conversion visual design systems, and SEO architecture in rapid 3 to 7-day sprints with zero agency bloat.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link href="/start-a-project">
              <button
                type="button"
                className="px-7 py-3.5 rounded-full bg-[#FF4D2E] hover:bg-[#E53517] text-white font-sans text-sm font-bold shadow-[0_6px_24px_rgba(255,77,46,0.4)] transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link href="/pricing">
              <button
                type="button"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-sans text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                View 3-Day Sprint Packages
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

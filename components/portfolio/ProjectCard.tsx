"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  viewMode?: "grid" | "cinematic";
}

// Key highlight metric per project to showcase high conversion ROI (like Nixtio's Dribbble shots)
const PROJECT_HIGHLIGHTS: Record<string, { metric: string; label: string; icon: string }> = {
  "sartorial-atelier": { metric: "+240%", label: "Fitting Bookings", icon: "trending" },
  "lumiere-bistro": { metric: "4.9 ★", label: "380+ Table Res.", icon: "star" },
  "kaviar-menswear": { metric: "₹18.4L", label: "First 30d GMV", icon: "zap" },
  "elysian-estates": { metric: "₹42 Cr", label: "Inquiry Pipeline", icon: "sparkles" },
  "solaris-studio": { metric: "100%", label: "Booked Season", icon: "check" },
  "atelier-forma": { metric: "2.4x", label: "Client Inquiries", icon: "trending" },
};

export function ProjectCard({ project, index = 0, viewMode = "grid" }: ProjectCardProps) {
  const highlight = PROJECT_HIGHLIGHTS[project.slug] || {
    metric: project.stats[0]?.value || "PROD",
    label: project.stats[0]?.label || "Live Build",
    icon: "zap",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className={`h-full ${viewMode === "cinematic" ? "col-span-full" : ""}`}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative flex flex-col justify-between h-full bg-[#FFFFFF] hover:bg-[#FDFBF7] border border-[#E2D6C3] hover:border-[#1F1B16]/30 rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_24px_50px_-12px_rgba(31,27,22,0.12)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D2E]"
      >
        <div>
          {/* ========================================================================= */}
          {/* 1. ART-DIRECTED DRIBBLE-STYLE SHOWCASE CANVAS */}
          {/* ========================================================================= */}
          <div className="relative w-full aspect-[16/10.5] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-gradient-to-br from-[#EFE6D8] via-[#E8DECE] to-[#DDD2C0] border border-[#E2D6C3]/90 mb-4 sm:mb-5">
            
            {/* Background Device Ambient Glow */}
            <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-black/15 pointer-events-none" />

            {/* Inner Browser Chrome / Viewport Frame Header */}
            <div className="absolute top-2.5 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                <span className="ml-1 text-[9px] font-mono text-white/80 font-medium tracking-tight">
                  raultz.app/{project.slug}
                </span>
              </div>

              {/* Package Badge */}
              <span className="px-2.5 py-0.5 rounded-full bg-[#1F1B16]/85 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-[#FAF7F2] border border-white/10">
                {project.scope.duration.replace(" Rapid Sprint", "")}
              </span>
            </div>

            {/* Project Cover Image with Smooth Zoom */}
            <Image
              src={project.cover}
              alt={`${project.title} - ${project.category} case study engineered by Raultz`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Subtle Gradient Vignette for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/30 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

            {/* Bottom Overlay Info Row */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between pointer-events-none">
              {/* Key Metric Pill (Like Nixtio's Shot Stats) */}
              <div className="flex items-center gap-2 bg-[#1F1B16]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#FF4D2E] animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-white font-mono font-extrabold text-xs leading-none">
                    {highlight.metric}
                  </span>
                  <span className="text-white/70 font-mono text-[9px] uppercase tracking-wider leading-none mt-0.5">
                    {highlight.label}
                  </span>
                </div>
              </div>

              {/* Category Pill Tag */}
              <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#1F1B16] shadow-sm">
                {project.category}
              </span>
            </div>

            {/* Floating "View Case Study" Button that animates up on Hover */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/20 pointer-events-none">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 bg-[#FAF7F2] text-[#1F1B16] px-4 py-2 rounded-full font-mono text-xs font-bold shadow-lg border border-[#E2D6C3]">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4D2E]" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. CARD METADATA & EDITORIAL TYPOGRAPHY */}
          {/* ========================================================================= */}
          <div className="space-y-2 px-1">
            {/* Studio Badge & Client Subline */}
            <div className="flex items-center justify-between font-mono text-[11px] text-[#6E655A]">
              <span className="font-bold tracking-wider uppercase text-[#C1673B]">
                [ {project.scope.client.split(" / ")[0]} ]
              </span>
              <span className="text-[#968B7E] font-medium">
                {project.scope.year}
              </span>
            </div>

            {/* Title with Tight Tracking */}
            <h3 className="font-sans text-xl sm:text-2xl font-black tracking-[-0.03em] text-[#1F1B16] group-hover:text-[#FF4D2E] transition-colors leading-snug">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#6E655A] leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. FOOTER ROW: TECH STACK PILLS & ACTION BUTTON */}
        {/* ========================================================================= */}
        <div className="pt-4 mt-4 border-t border-[#E2D6C3]/80 flex items-center justify-between px-1">
          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5 max-w-[75%]">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E2D6C3] text-[10px] font-mono font-medium text-[#1F1B16]"
              >
                {tech.replace(" App Router", "").replace(" CSS", "")}
              </span>
            ))}
          </div>

          {/* Circular Action Button */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1F1B16] text-[#FAF7F2] group-hover:bg-[#FF4D2E] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;

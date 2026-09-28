"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Box, Code2, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_PROJECTS, CaseStudyProject } from "@/lib/content/portfolio";

const CATEGORIES = ["All", "Web Design", "3D & Interactive", "Branding", "E-Commerce"] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-20">
      
      {/* 1. Page Header */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="sample">SAMPLE CONCEPTS</Badge>
          <Badge variant="terracotta">8 DEMO BRIEFS</Badge>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
          Selected works &amp; <br />
          <span className="italic font-normal">architectural prototypes</span>.
        </h1>

        <p className="font-sans text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
          Explore our concept case studies spanning high-conversion boutique platforms to cinematic 3D WebGL environments.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wide transition-all cursor-pointer select-none ${
                activeCategory === cat
                  ? "bg-[#1F1B16] text-[#F6F0E4] shadow-sm"
                  : "bg-surface text-muted hover:text-foreground hover:bg-surface-hover border border-border"
              }`}
            >
              {cat === "All" ? `ALL ARCHIVES (${PORTFOLIO_PROJECTS.length})` : cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Portfolio Grid with Sample Badges */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, idx) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-3xl"
          >
            <div className="bg-surface rounded-3xl border border-border overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:border-foreground/30 group-hover:shadow-[0_16px_40px_rgba(31,27,22,0.08)] group-hover:-translate-y-1">
              
              {/* Poster Artwork Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-surface-sunken to-border border border-border/60">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.posterImage})`,
                  }}
                />
                
                {/* Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <Badge variant="sample">Sample Project</Badge>
                  <span className="font-mono text-[10px] font-bold text-white px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    {project.tierEquivalent}
                  </span>
                </div>

                {/* Bottom Overlay Client Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <span className="font-mono text-xs text-white/80">
                    {project.client}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card Meta & Typography */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-terracotta font-bold uppercase">
                    [{project.category}]
                  </span>
                  <span className="text-muted text-xs">&bull;</span>
                  <span className="font-mono text-xs text-muted">
                    {project.timeline}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-terracotta transition-colors">
                  {project.title}
                </h2>

                <p className="font-sans text-sm sm:text-base text-muted leading-relaxed line-clamp-2">
                  {project.heroSummary}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-surface-sunken border border-border/70 font-mono text-[10px] text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Callout */}
              <div className="pt-6 mt-6 border-t border-border/70 flex items-center justify-between font-mono text-xs text-muted">
                <span>VIEW CASE STUDY</span>
                <span className="text-terracotta font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </Link>
        ))}
      </section>

      {/* 3. Transparency & Custom Commission Banner */}
      <section className="bg-surface rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-terracotta" />
            <Badge variant="sample">TRANSPARENCY GUARANTEE</Badge>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Have a bespoke project ready to build?
          </h2>
          <p className="font-sans text-muted text-base leading-relaxed">
            All 8 items above represent demo concept briefs demonstrating our full technical and design capabilities. We are currently accepting our first cohort of visionary client commissions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link href="/pricing">
            <Button size="lg" variant="secondary" iconRight={<ArrowRight className="w-4 h-4" />}>
              Explore Pricing Tiers
            </Button>
          </Link>
          <Link href="/start-a-project">
            <Button size="lg" variant="terracotta" iconRight={<Sparkles className="w-4 h-4" />}>
              Start a Project
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

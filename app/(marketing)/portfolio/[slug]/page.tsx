import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Clock,
  Layers,
  CheckCircle2,
  Cpu,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_PROJECTS, CaseStudyProject } from "@/lib/content/portfolio";

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} (Sample Case Study)`,
    description: project.heroSummary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PORTFOLIO_PROJECTS[projectIndex];
  const prevProject =
    PORTFOLIO_PROJECTS[(projectIndex - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length];
  const nextProject =
    PORTFOLIO_PROJECTS[(projectIndex + 1) % PORTFOLIO_PROJECTS.length];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-20">
      
      {/* 1. Back Navigation & Badges */}
      <div className="space-y-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL CASE STUDIES</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <Badge variant="sample">Sample Case Study // Demo Brief</Badge>
          <Badge variant="terracotta">{project.tierEquivalent}</Badge>
          <Badge variant="surface">{project.category}</Badge>
        </div>
      </div>

      {/* 2. Hero Headline & Project Metadata Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-8 space-y-6">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
            {project.title}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            {project.heroSummary}
          </p>
        </div>

        {/* Project Meta Sidebar */}
        <div className="lg:col-span-4 bg-surface rounded-3xl p-6 sm:p-8 border border-border space-y-5 font-mono text-xs shadow-sm">
          <span className="font-bold text-terracotta uppercase tracking-wider block border-b border-border/80 pb-3">
            [ ARCHITECTURAL SCOPE ]
          </span>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted">CLIENT / INDUSTRY</span>
              <span className="font-bold text-foreground text-right">{project.client}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted">CATEGORY</span>
              <span className="font-bold text-foreground">{project.category}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted">SPRINT DURATION</span>
              <span className="font-bold text-foreground">{project.timeline}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted">COMMISSION YEAR</span>
              <span className="font-bold text-foreground">{project.year}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-border/80">
            <span className="text-muted block mb-2">DEPLOYED TECH STACK:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-surface-sunken border border-border font-mono text-[10px] text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hero Visual Poster */}
      <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.posterImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white font-mono text-xs">
          <span>RAULTZ ARCHITECTURE SPEC // {project.slug.toUpperCase()}</span>
          <span className="hidden sm:inline">DEMO VISUALIZATION</span>
        </div>
      </section>

      {/* 4. The Challenge & The Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* The Challenge */}
        <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border space-y-4">
          <span className="font-mono text-xs text-terracotta font-bold uppercase tracking-wider block">
            [ 01 // THE CHALLENGE ]
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            The friction points &amp; requirements.
          </h2>
          <p className="font-sans text-muted leading-relaxed text-base">
            {project.challenge}
          </p>
        </div>

        {/* The Architectural Solution */}
        <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border space-y-4">
          <span className="font-mono text-xs text-olive font-bold uppercase tracking-wider block">
            [ 02 // THE ARCHITECTURE ]
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Bespoke engineering &amp; execution.
          </h2>
          <p className="font-sans text-muted leading-relaxed text-base">
            {project.solution}
          </p>
        </div>
      </section>

      {/* 5. Key Deliverables & Benchmark Metrics */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Deliverables Checklist */}
        <div className="lg:col-span-7 bg-surface rounded-3xl p-8 sm:p-10 border border-border space-y-6">
          <span className="font-mono text-xs text-muted font-bold uppercase tracking-wider block">
            [ KEY DELIVERABLES ]
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            What was engineered for this concept:
          </h2>
          <ul className="space-y-3.5">
            {project.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base font-sans text-foreground">
                <CheckCircle2 className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benchmark Metrics (Simulated Demo Data) */}
        <div className="lg:col-span-5 bg-surface rounded-3xl p-8 sm:p-10 border border-border space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-terracotta font-bold uppercase tracking-wider">
              [ PERFORMANCE BENCHMARKS ]
            </span>
            <Badge variant="sample">Simulated</Badge>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Measurable impact:
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {project.simulatedMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-background border border-border/80 flex items-center justify-between"
              >
                <span className="font-sans text-xs text-muted font-medium">
                  {metric.label}
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          <p className="font-mono text-[10px] text-muted italic">
            * All metrics above represent simulated demo concept targets reflecting our architecture standards.
          </p>
        </div>
      </section>

      {/* 6. Previous & Next Project Navigation */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border/80">
        <Link
          href={`/portfolio/${prevProject.slug}`}
          className="p-6 rounded-2xl bg-surface border border-border hover:border-foreground/30 transition-all group flex flex-col justify-between"
        >
          <span className="font-mono text-xs text-muted group-hover:text-terracotta flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS CONCEPT</span>
          </span>
          <span className="font-display text-xl font-bold text-foreground mt-2">
            {prevProject.title}
          </span>
        </Link>

        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="p-6 rounded-2xl bg-surface border border-border hover:border-foreground/30 transition-all group flex flex-col justify-between text-right"
        >
          <span className="font-mono text-xs text-muted group-hover:text-terracotta flex items-center justify-end gap-1">
            <span>NEXT CONCEPT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="font-display text-xl font-bold text-foreground mt-2">
            {nextProject.title}
          </span>
        </Link>
      </section>

      {/* 7. Closing Project Commission CTA */}
      <section className="bg-surface rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <Badge variant="sample">READY TO COMMISSION</Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Like this architecture for your brand?
          </h2>
          <p className="font-sans text-muted text-base leading-relaxed">
            We can adapt these patterns or build an entirely bespoke digital flagship tailored to your exact industry and roadmap.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link href="/contact">
            <Button size="lg" variant="terracotta" iconRight={<ArrowRight className="w-4 h-4" />}>
              Book a Call
            </Button>
          </Link>
          <Link href="/start-a-project">
            <Button size="lg" variant="secondary" iconRight={<Sparkles className="w-4 h-4" />}>
              Start a Project
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

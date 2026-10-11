import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

// Show the first 3 projects as "featured" on the homepage
const FEATURED = PROJECTS.slice(0, 3);

export function FeaturedWorkSection() {
  return (
    <section
      aria-labelledby="featured-work-heading"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-12"
    >
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-widest">
            Selected Deliverables
          </span>
          <h2
            id="featured-work-heading"
            className="font-sans text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#1F1B16] leading-tight"
          >
            Work that speaks
            <br />
            <span className="italic font-light text-[#6E655A]">for itself.</span>
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1F1B16] hover:text-[#FF4D2E] transition-colors group shrink-0"
        >
          <span>View all case studies</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Featured project cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {FEATURED.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group relative flex flex-col rounded-[28px] overflow-hidden bg-white border border-[#E2D6C3] hover:border-[#1F1B16]/30 shadow-xs hover:shadow-xl transition-all duration-300"
          >
            {/* Cover image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE6D8]">
              <Image
                src={project.cover}
                alt={`${project.title} — ${project.category} case study by Raultz`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={idx === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm font-mono text-[10px] font-bold text-[#1F1B16] shadow-sm">
                  {project.category.toUpperCase()}
                </span>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-[#6E655A] uppercase tracking-wider">
                <span>{project.package}</span>
                <span>•</span>
                <span>{project.scope.duration}</span>
              </div>

              <h3 className="font-sans text-xl font-black tracking-tight text-[#1F1B16] group-hover:text-[#FF4D2E] transition-colors leading-snug">
                {project.title}
              </h3>

              <p className="font-sans text-sm text-[#6E655A] leading-relaxed line-clamp-2 flex-1">
                {project.description}
              </p>

              <div className="pt-2 border-t border-[#E2D6C3] flex items-center justify-between">
                <div className="flex gap-3">
                  {project.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label} className="space-y-0.5">
                      <span className="font-sans text-sm font-black text-[#1F1B16]">
                        {stat.value}
                      </span>
                      <span className="font-mono text-[9px] text-[#6E655A] uppercase block tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="font-mono text-xs font-bold text-[#FF4D2E] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA strip linking to ALL case studies */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-[#FAF7F2] border border-[#E2D6C3]">
        <div className="flex flex-wrap gap-3">
          {PROJECTS.slice(3).map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="font-mono text-xs font-bold text-[#6E655A] hover:text-[#FF4D2E] transition-colors underline underline-offset-4"
            >
              {project.title}
            </Link>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1B16] text-[#FAF7F2] font-sans text-xs font-bold hover:bg-[#FF4D2E] transition-all duration-300 shrink-0"
        >
          <span>All Case Studies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}

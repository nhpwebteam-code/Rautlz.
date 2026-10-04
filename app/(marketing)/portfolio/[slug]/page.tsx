import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import {
  PROJECTS,
  getProjectBySlug,
  getAllProjectSlugs,
  type Project,
} from "@/data/projects";
import {
  ScopeCard,
  FeatureCard,
  GalleryBlock,
  PhoneMockup,
  LaptopMockup,
  Timeline,
  DesignSystemBlock,
} from "@/components/portfolio";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Raultz",
    };
  }

  const title = `${project.title} Case Study | ${project.category} Web Design | Raultz`;
  const description = `${project.description} Custom digital architecture and website engineered by Raultz in Hyderabad, India.`;
  const canonicalUrl = `https://raultz.vercel.app/portfolio/${slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      `${project.title.toLowerCase()} case study`,
      `${project.category.toLowerCase()} web development`,
      "custom nextjs portfolio",
      ...project.techStack.map((t) => `${t.toLowerCase()} website`),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Raultz",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category} case study by Raultz Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.cover],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20 space-y-20 sm:space-y-28">
      
      {/* ========================================================================= */}
      {/* 1. TOP HEADER & METADATA SECTION */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        {/* Back Link & Tag Pills */}
        <div className="space-y-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#6E655A] hover:text-[#1F1B16] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← BACK TO ALL DELIVERABLES</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="px-3.5 py-1 rounded-full bg-[#1F1B16] text-[#FAF7F2] font-mono text-xs font-bold">
              RAULTZ DELIVERABLE // CASE STUDY
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FF4D2E]/15 text-[#FF4D2E] font-mono text-xs font-bold border border-[#FF4D2E]/25">
              {project.package}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FAF7F2] text-[#6E655A] font-mono text-xs font-bold border border-[#E2D6C3]">
              {project.category.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Hero Title & Architectural Scope Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-[#1F1B16] leading-[1.05]">
              {project.title}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#6E655A] leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-4">
            <ScopeCard scope={project.scope} techStack={project.techStack} />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* a) HERO IMAGE: LAPTOP MOCKUP */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-wider">
            [ 01 // ARCHITECTURAL CANVAS ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            DESKTOP WORKSPACE VIEWPORT
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-2 pb-4">
          <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-[-0.025em] text-[#1F1B16]">
            Full-viewport desktop experience &amp; spatial layout.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E655A]">
            Engineered with mathematical grid margins, tactile contrast tokens, and edge-rendered typography.
          </p>
        </div>

        <LaptopMockup
          imageSrc={project.heroImage}
          alt={`${project.title} Desktop Viewport`}
          badgeText={`${project.title.toUpperCase()} // DESKTOP CANVAS`}
        />
      </section>

      {/* ========================================================================= */}
      {/* b) OVERVIEW & 3 STAT CARDS */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider">
            [ 02 // EXECUTIVE OVERVIEW ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            STRATEGIC OBJECTIVES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-[-0.025em] text-[#1F1B16] leading-snug">
              Strategic alignment &amp; digital footprint.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#6E655A] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* 3 Stat Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E2D6C3] rounded-2xl p-5 space-y-2 flex flex-col justify-between hover:bg-[#FDFBF7] transition-all shadow-xs"
              >
                <div className="space-y-1">
                  <span className="font-sans text-3xl sm:text-4xl font-black tracking-[-0.03em] text-[#1F1B16] block">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs font-bold text-[#1F1B16] block">
                    {stat.label}
                  </span>
                </div>
                {stat.helper && (
                  <span className="font-mono text-[10px] text-[#6E655A] pt-2 border-t border-[#E2D6C3]/80 block">
                    {stat.helper}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* c) CHALLENGE AND SOLUTION */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-wider">
            [ 03 // DIAGNOSTIC &amp; ARCHITECTURE ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            PROBLEM // RESOLUTION MATRIX
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Challenge Column */}
          <div className="bg-[#FAF7F2] border border-[#E2D6C3] rounded-[28px] p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-[#C1673B]">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                The Architectural Challenge
              </h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-[#6E655A] leading-relaxed">
              {project.challenge.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C1673B] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="bg-[#FAF7F2] border border-[#E2D6C3] rounded-[28px] p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-600">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Engineered Resolution
              </h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-[#6E655A] leading-relaxed">
              {project.solution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* d) DESIGN SYSTEM: PALETTE + FONTS */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider">
            [ 04 // DESIGN SYSTEM &amp; TOKENS ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            CHROMATIC &amp; TYPOGRAPHIC MATRIX
          </span>
        </div>

        <div className="space-y-2 max-w-2xl">
          <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-[-0.025em] text-[#1F1B16]">
            Harmonious chromatic palette &amp; font hierarchy.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E655A]">
            Engineered specifically for {project.title}&apos;s target clientele. Click any swatch below to copy its HEX code directly.
          </p>
        </div>

        <DesignSystemBlock palette={project.palette} fonts={project.fonts} />
      </section>

      {/* ========================================================================= */}
      {/* e) 3-4 FEATURE CARDS WITH LUCIDE ICONS */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-wider">
            [ 05 // CORE CAPABILITIES ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            BESPOKE ENGINEERING
          </span>
        </div>

        <div className="space-y-2 max-w-2xl">
          <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-[-0.025em] text-[#1F1B16]">
            Architectural features built for velocity &amp; conversions.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E655A]">
            Every module is tailored to eliminate friction, accelerate brand trust, and drive measurable transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              iconName={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* f) SCREEN GALLERY (MIN 4 ALTERNATING BLOCKS) */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider">
            [ 06 // SECTION ARCHITECTURE &amp; SCREEN GALLERY ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            EDITORIAL BREAKDOWN ({project.gallery.length} SCREENS)
          </span>
        </div>

        <div className="space-y-2 max-w-2xl">
          <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-[-0.025em] text-[#1F1B16]">
            Granular view of critical conversion surfaces.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E655A]">
            Deep-dive into each section&apos;s architectural intent, visual hierarchy, and strategic user engagement mechanics.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {project.gallery.map((item, idx) => (
            <GalleryBlock key={item.title} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* g) MOBILE VIEW: 3 PHONE MOCKUPS (NIXTIO-INSPIRED) */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-wider">
            [ 07 // MOBILE-FIRST RESPONSIVE ADAPTATION ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            THUMB-ZONE OPTIMIZATION
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-2 pb-4">
          <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-[-0.025em] text-[#1F1B16]">
            Thumb-zone navigation &amp; fluid smartphone viewports.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E655A]">
            Over 75% of your patrons browse on mobile. We design dedicated mobile layouts with sticky CTAs, instant tap-targets, and zero horizontal overflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4 items-end justify-center">
          {project.mobileShots.map((shot, idx) => (
            <PhoneMockup key={shot.title} shot={shot} index={idx} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* h) SPRINT TIMELINE: DAY 1 - DAY 2 - DAY 3 */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider">
            [ 08 // RAPID SPRINT ROADMAP ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            72-HOUR VELOCITY
          </span>
        </div>

        <div className="space-y-2 max-w-2xl">
          <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-[-0.025em] text-[#1F1B16]">
            Execution velocity: from zero to deployed in 72 hours.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E655A]">
            Our proprietary modular design workflow delivers production-grade web applications in days, not months.
          </p>
        </div>

        <Timeline items={project.timeline} />
      </section>

      {/* ========================================================================= */}
      {/* i) RESULT: SHORT PARAGRAPH + 2-3 METRICS */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-wider">
            [ 09 // MEASURABLE OUTCOMES ]
          </span>
          <span className="font-mono text-[11px] text-[#6E655A]">
            POST-LAUNCH IMPACT
          </span>
        </div>

        <div className="bg-[#FAF7F2] border border-[#E2D6C3] rounded-[32px] p-8 sm:p-12 space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-[#FF4D2E] font-mono text-xs font-bold tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>COMMERCIAL PERFORMANCE REPORT</span>
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-[-0.02em] text-[#1F1B16]">
              Tangible revenue growth &amp; elevated brand equity.
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#6E655A] leading-relaxed">
              {project.result.text}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E2D6C3]">
            {project.result.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-sans text-4xl sm:text-5xl font-black tracking-[-0.03em] text-[#1F1B16] block">
                  {m.value}
                </span>
                <span className="font-sans text-sm font-bold text-[#1F1B16] block">
                  {m.label}
                </span>
                {m.helper && (
                  <span className="font-mono text-xs text-[#6E655A] block">
                    {m.helper}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* j) NEXT PROJECT CARD + "START A PROJECT" CTA */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
          <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider">
            [ NEXT CASE STUDY ]
          </span>
          <Link
            href="/portfolio"
            className="font-mono text-xs font-bold text-[#FF4D2E] hover:underline flex items-center gap-1"
          >
            <span>VIEW ALL DELIVERABLES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Next Project Teaser Card */}
        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="group block bg-[#FFFFFF] hover:bg-[#FDFBF7] border border-[#E2D6C3] hover:border-[#1F1B16]/30 rounded-[32px] p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Image Preview */}
            <div className="md:col-span-5 relative aspect-[16/10.5] rounded-[22px] overflow-hidden bg-gradient-to-br from-[#EFE6D8] via-[#E8DECE] to-[#DDD2C0] border border-[#E2D6C3]">
              <Image
                src={nextProject.cover}
                alt={nextProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md font-mono text-[10px] font-bold text-[#1F1B16] shadow-xs">
                  NEXT DELIVERABLE
                </span>
              </div>
            </div>

            {/* Details Column */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#6E655A]">
                <span>[ {nextProject.category.toUpperCase()} ]</span>
                <span>•</span>
                <span className="text-[#FF4D2E]">{nextProject.package}</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-4xl font-black text-[#1F1B16] tracking-[-0.03em] group-hover:text-[#FF4D2E] transition-colors flex items-center gap-3">
                <span>{nextProject.title}</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#6E655A] leading-relaxed line-clamp-2">
                {nextProject.description}
              </p>

              <div className="pt-2 flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#1F1B16] underline underline-offset-4 flex items-center gap-1">
                  <span>Explore Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D2E]" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Global Commission CTA Banner */}
        <div className="rounded-[36px] bg-[#1F1B16] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-black/10 relative overflow-hidden shadow-2xl mt-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4D2E]/20 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C1673B]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs font-bold border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
              <span>RAPID SPRINT COMMISSION</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-[-0.03em] text-white leading-tight">
              Ready to elevate your business with bespoke digital architecture?
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed max-w-2xl">
              Lock in your dedicated sprint window. We build, test, and deploy high-converting websites in 3 to 7 days with zero agency overhead.
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

              <Link href="/portfolio">
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-sans text-sm font-semibold transition-all duration-200 cursor-pointer"
                >
                  Back to All Deliverables
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

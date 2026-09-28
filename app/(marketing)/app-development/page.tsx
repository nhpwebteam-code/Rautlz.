import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Smartphone, Layers, ShieldCheck, Database, Zap, Cpu } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/content/portfolio";

export const metadata: Metadata = {
  title: {
    absolute: "Mobile & Web App Development Company in Hyderabad | Raultz",
  },
  description:
    "Raultz is a leading app development company in Hyderabad, India. We build high-performance iOS, Android, and SaaS web applications for ambitious startups.",
  keywords: [
    "app development company hyderabad",
    "mobile app development india",
    "ios app developers hyderabad",
    "android app development hyderabad",
    "react native agency india",
    "saas application development",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/app-development",
  },
  openGraph: {
    title: "Mobile & Web App Development Company in Hyderabad | Raultz",
    description:
      "Raultz is a leading app development company in Hyderabad, India. We build high-performance iOS, Android, and SaaS web applications for ambitious startups.",
    url: "https://raultz.vercel.app/app-development",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Raultz Mobile & Web App Development Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Web App Development Company in Hyderabad | Raultz",
    description:
      "Raultz is a leading app development company in Hyderabad, India. We build high-performance iOS, Android, and SaaS web applications for ambitious startups.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

export default function AppDevelopmentPage() {
  const appProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.category === "3D & Interactive" || p.category === "E-Commerce" || p.category === "Web Design"
  ).slice(1, 4);

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#161616] -mt-24 sm:-mt-28 pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Background Glows */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#FF4D2E]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        
        {/* HERO SECTION */}
        <header className="space-y-6 max-w-4xl pt-8 sm:pt-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-mono font-bold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" /> Mobile & Cloud Applications &bull; Hyderabad, India
          </div>
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#161616] leading-[1.08]">
            Mobile & Web App Development Company in Hyderabad
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#524E48] leading-relaxed max-w-3xl">
            We design, architect, and deploy production-grade mobile applications and SaaS platforms. Built with React Native, Next.js, TypeScript, and high-concurrency cloud backends engineered to scale seamlessly from 1,000 to 1,000,000 active users.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF4D2E] text-white font-sans font-bold text-sm tracking-wide shadow-[0_12px_28px_rgba(255,77,46,0.3)] hover:bg-[#E03D1F] hover:-translate-y-0.5 transition-all"
            >
              Start an App Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-[#E5DFD5] text-[#161616] font-sans font-bold text-sm hover:border-[#FF4D2E] transition-all shadow-xs"
            >
              Explore Services
            </Link>
          </div>
        </header>

        {/* APP PILLARS */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-widest">
              ● Full-Cycle Engineering ●
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-[#161616]">
              End-to-End Application Development Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC8] shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#161616]">
                React Native Cross-Platform Apps
              </h3>
              <p className="font-sans text-sm text-[#524E48] leading-relaxed">
                Single unified codebase delivering native 60fps performance on both iOS and Android with hardware access, offline sync, and push notifications.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC8] shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4D2E]/10 flex items-center justify-center text-[#FF4D2E]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#161616]">
                Complex SaaS & Web Applications
              </h3>
              <p className="font-sans text-sm text-[#524E48] leading-relaxed">
                Feature-rich dashboards, enterprise role-based authorization, high-volume workflow automation, and real-time collaboration engines.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC8] shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#161616]">
                Cloud Backends & Microservices
              </h3>
              <p className="font-sans text-sm text-[#524E48] leading-relaxed">
                Resilient PostgreSQL / Redis architectures, automated CI/CD pipelines, and secure payment integrations with Stripe and Razorpay.
              </p>
            </div>
          </div>
        </section>

        {/* WORK BENCHMARKS */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-widest">
                ● Live Production Systems ●
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-[#161616]">
                Featured Application Case Studies
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF4D2E] hover:underline"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {appProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group block rounded-3xl overflow-hidden bg-white border border-[#E8DFC8] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
                  <Image
                    src={project.posterImage}
                    alt={`${project.title} - Application Development by Raultz Hyderabad`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-sans text-xl font-bold text-[#161616] group-hover:text-[#FF4D2E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#706E6B] line-clamp-2">
                    {project.heroSummary}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#FF4D2E]">
                    Inspect Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="rounded-3xl sm:rounded-[36px] bg-[#161616] text-white p-8 sm:p-14 space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF4D2E] uppercase tracking-widest">
              ● Engineering Consultation ●
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Have an app idea or software platform to architect?
            </h2>
            <p className="font-sans text-base text-white/75 leading-relaxed">
              Book a technical scoping session with our lead architects in Hyderabad to discuss database schemas, native modules, and project roadmaps.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/start-a-project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4D2E] text-white font-bold text-sm hover:bg-[#E03D1F] transition-colors"
              >
                Start Scoping Your App <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-colors"
              >
                Schedule Direct Call
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TrendingUp,
  Monitor,
  Layout,
  Image as ImageIcon,
  FileText,
  Smartphone,
  Handshake,
  BarChart3,
  Box,
  Flame,
  ShoppingBag,
  Layers,
  Cpu,
  Zap,
  ShieldCheck,
  Globe,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Clock,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";
import { ServicesHeroBanner } from "@/components/ui/services-hero-banner";

// All 16 Complete Services across Design, Engineering, 3D, and Growth
const ALL_SERVICES = [
  {
    id: "website-development",
    title: "Website Development",
    icon: TrendingUp,
    category: "Full-Stack",
    turnaround: "1–2 Weeks",
    tagline: "Production-grade Next.js architecture engineered for sub-second load times and flawless Core Web Vitals.",
    idealFor: "Startups and brands launching a fast, scalable web presence from scratch",
    deliverables: [
      "Custom Next.js App Router & React 19 architecture",
      "TailwindCSS token-based responsive styling",
      "Sub-second TTFB & 100/100 Core Web Vitals",
      "Turnkey production deployment with CI/CD",
    ],
    impact: "Commands instant category authority and guarantees ultra-fast conversion speeds.",
    tier: "Included in PKG 01–08 & Available Standalone",
    techStack: ["Next.js 19", "React", "TypeScript", "Vercel Edge"],
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    icon: Monitor,
    category: "Brand & Identity",
    turnaround: "3–5 Days",
    tagline: "Bespoke brand marks, vector identity kits, and editorial typography tailored to your vision.",
    idealFor: "Brands needing a cohesive visual identity across all digital platforms",
    deliverables: [
      "Bespoke brand marks & vector identity kits",
      "Editorial digital typography & custom palettes",
      "High-resolution marketing & social graphics",
      "Design guidelines & vector export assets",
    ],
    impact: "Establishes a distinguished, memorable visual presence across every digital channel.",
    tier: "Included in PKG 02–08 & Available Standalone",
    techStack: ["Figma", "Vector SVG", "Typography", "Color Tokens"],
  },
  {
    id: "ui-ux-web-designing",
    title: "UI/UX Web Designing",
    icon: Layout,
    category: "Product & UX",
    turnaround: "1–2 Weeks",
    tagline: "High-fidelity Figma prototypes with tactile micro-interactions and responsive design tokens.",
    idealFor: "Products that need intuitive user flows and polished interaction design",
    deliverables: [
      "User journey mapping & high-fidelity Figma wireframes",
      "Tactile interaction physics & micro-animations",
      "Design token architecture (typography, color, spacing)",
      "Mobile, tablet, and desktop responsive matrices",
    ],
    impact: "Eliminates user friction and creates delight at every interaction touchpoint.",
    tier: "Included in PKG 04–08 & Available Standalone",
    techStack: ["Figma Design", "Prototyping", "Design Tokens", "Wireframing"],
  },
  {
    id: "3d-websites",
    title: "3D Spatial Websites",
    icon: Box,
    category: "3D WebGL & Motion",
    turnaround: "2–3 Weeks",
    tagline: "Immersive Three.js canvases with custom shaders, kinetic scroll, and 60FPS performance.",
    idealFor: "Brands wanting a cinematic, immersive web experience competitors can't replicate",
    deliverables: [
      "Three.js & React Three Fiber canvas integration",
      "Custom GLTF 3D model compression & optimization",
      "Kinetic camera scroll choreography & lighting",
      "Mobile-optimized 60FPS WebGL performance",
    ],
    impact: "Delivers an unforgettable spatial immersion that competitors cannot replicate.",
    tier: "Featured in PKG 07, 08 & Custom Commission",
    techStack: ["Three.js", "React Three Fiber", "GLSL Shaders", "Blender"],
  },
  {
    id: "sketch-designing",
    title: "Sketch Designing",
    icon: ImageIcon,
    category: "Spatial Architecture",
    turnaround: "3–5 Days",
    tagline: "Rapid concept blueprints and modular component prototypes for stakeholder alignment.",
    idealFor: "Teams validating architectural concepts before committing to full engineering sprints",
    deliverables: [
      "Spatial interface wireframing & blueprint drafts",
      "Rapid prototyping for stakeholder review",
      "Component modularity & design atomization",
      "Interactive concept walkthroughs",
    ],
    impact: "Accelerates alignment and validates architectural ideas before engineering sprints.",
    tier: "Featured in PKG 03, 04 & Available Standalone",
    techStack: ["Spatial Blueprints", "Component Atoms", "Figma", "Wireframes"],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    icon: Flame,
    category: "Conversion Sprints",
    turnaround: "3–5 Days",
    tagline: "Persuasive storytelling pages built to maximize paid traffic ROI and capture leads fast.",
    idealFor: "Founders launching campaigns, raising funding, or driving signups at speed",
    deliverables: [
      "Persuasive storytelling hierarchy & conversion flow",
      "Interactive product demos & feature highlights",
      "Integrated lead capture & analytics tracking",
      "Sub-48-hour sprint delivery options",
    ],
    impact: "Maximizes paid traffic ROAS and captures investor/client attention instantly.",
    tier: "Featured in PKG 01, 04, 05 & Available Standalone",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Conversion CRO"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingBag,
    category: "Headless Commerce",
    turnaround: "2–3 Weeks",
    tagline: "Custom headless storefronts with fluid checkout, inventory sync, and branded UX.",
    idealFor: "D2C brands building a premium online shopping experience with full control",
    deliverables: [
      "Custom Shopify / Stripe headless storefront",
      "Interactive 3D product configurators",
      "Fluid slide-over cart & instant checkout",
      "Inventory & order management syncing",
    ],
    impact: "Boosts average order value and slashes cart abandonment with branded checkout.",
    tier: "Featured in PKG 06, 08 & Available Standalone",
    techStack: ["Shopify Storefront", "Stripe API", "Next.js 19", "Webhooks"],
  },
  {
    id: "saas-web-apps",
    title: "SaaS & Web Apps",
    icon: Layers,
    category: "Enterprise Apps",
    turnaround: "2–4 Weeks",
    tagline: "Multi-tenant platforms with auth, real-time data, and robust API integrations.",
    idealFor: "SaaS founders building production-ready dashboards and internal tools",
    deliverables: [
      "Multi-tenant application architecture & auth flows",
      "Interactive data visualizations & table matrices",
      "Real-time WebSocket & server-sent event updates",
      "REST & GraphQL API client integrations",
    ],
    impact: "Empowers complex product mechanics with rapid reactivity and clean code separation.",
    tier: "Included in PKG 06, 07, 08 & Available Standalone",
    techStack: ["React 19", "PostgreSQL", "Supabase", "Server Actions"],
  },
  {
    id: "seo-content-writing",
    title: "SEO & Content Writing",
    icon: FileText,
    category: "Search & Performance",
    turnaround: "3–5 Days",
    tagline: "Technical SEO with schema markup, speed tuning, and editorial copy that ranks.",
    idealFor: "Businesses wanting sustainable organic traffic and top Lighthouse scores",
    deliverables: [
      "Complete semantic HTML5 & JSON-LD schema markup",
      "High-converting editorial copy & pitch writing",
      "Technical Core Web Vitals speed tuning",
      "Automated XML sitemaps & Search Console setup",
    ],
    impact: "Drives sustainable organic search traffic and achieves top Lighthouse benchmark scores.",
    tier: "Included in All Packages & Standalone Audit",
    techStack: ["JSON-LD Schema", "Lighthouse 100", "Semantic HTML5", "Sitemaps"],
  },
  {
    id: "digital-market-planning",
    title: "Digital Market Planning",
    icon: Smartphone,
    category: "Growth Strategy",
    turnaround: "1–2 Weeks",
    tagline: "Go-to-market funnels, audience segmentation, and conversion rate optimization audits.",
    idealFor: "Teams aligning engineering investments with measurable growth and revenue goals",
    deliverables: [
      "Go-to-market positioning & funnel architecture",
      "Conversion rate optimization (CRO) audits",
      "Target audience persona segmentation",
      "Sprint roadmapping & growth KPI tracking",
    ],
    impact: "Aligns engineering investments directly with customer acquisition and revenue goals.",
    tier: "Featured in PKG 05, 06, 08 & Available Standalone",
    techStack: ["GTM Strategy", "Funnel Analytics", "CRO Testing", "KPI Tracking"],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    icon: Cpu,
    category: "AI Agents",
    turnaround: "1–2 Weeks",
    tagline: "LLM agent pipelines, semantic vector search, and intelligent automated workflows.",
    idealFor: "Products adding AI-powered features like chatbots, search, or content generation",
    deliverables: [
      "OpenAI & Anthropic LLM API agent pipelines",
      "Semantic vector search & RAG embeddings",
      "Intelligent conversational assistants & workflows",
      "Automated data extraction & categorization",
    ],
    impact: "Automates repetitive user actions and delivers hyper-personalized product intelligence.",
    tier: "Featured in PKG 07, 08 & Custom Commission",
    techStack: ["OpenAI API", "Anthropic Claude", "Vector Embeddings", "RAG"],
  },
  {
    id: "automation-workflows",
    title: "Automation & Workflows",
    icon: Zap,
    category: "Cloud Pipelines",
    turnaround: "3–7 Days",
    tagline: "Custom webhook integrations, CRM sync, and automated notification pipelines.",
    idealFor: "Operations teams eliminating manual processes with end-to-end automation",
    deliverables: [
      "Custom webhook integrations & event handlers",
      "CRM, Stripe, and database multi-way sync",
      "Automated notification & email sequences",
      "Headless CMS publishing pipelines",
    ],
    impact: "Eliminates hundreds of manual operational hours every month.",
    tier: "Available Standalone & in Custom Tiers",
    techStack: ["Webhooks", "Stripe Events", "Resend", "Zapier/Make"],
  },
  {
    id: "business-management",
    title: "Business Management",
    icon: Handshake,
    category: "Founder Advisory",
    turnaround: "Continuous",
    tagline: "Direct founder advisory, roadmap scoping, and zero-bureaucracy sprint delivery.",
    idealFor: "Founders wanting a strategic partner, not an agency with layers of account managers",
    deliverables: [
      "Direct founder consultation & roadmap planning",
      "Sprint velocity & milestone scoping",
      "Resource allocation & vendor orchestration",
      "Transparent fixed-scope project budgets",
    ],
    impact: "Guarantees zero agency bureaucracy, rapid delivery, and transparent execution.",
    tier: "Direct Founder Triad Access",
    techStack: ["Direct Triad", "Private Slack", "Weekly Reviews", "Milestone Escrow"],
  },
  {
    id: "market-data-analysing",
    title: "Market Data Analysing",
    icon: BarChart3,
    category: "Analytics & Telemetry",
    turnaround: "1–2 Weeks",
    tagline: "Custom dashboards, behavior heatmaps, and conversion funnel drop-off analysis.",
    idealFor: "Product teams making data-driven decisions instead of relying on guesswork",
    deliverables: [
      "Custom analytics dashboards & telemetry",
      "User behavior heatmap & session tracking",
      "Checkout & conversion funnel drop-off analysis",
      "Quarterly performance & optimization reports",
    ],
    impact: "Empowers product decisions with empirical behavioral insights rather than guesswork.",
    tier: "Included in PKG 07, 08 & Standalone Retainer",
    techStack: ["PostHog", "Google Analytics 4", "Heatmaps", "Telemetry"],
  },
  {
    id: "active-maintenance",
    title: "Active Maintenance",
    icon: ShieldCheck,
    category: "Platform SLA",
    turnaround: "24/7 Monitoring",
    tagline: "Round-the-clock uptime monitoring, security patches, and sub-2h emergency fixes.",
    idealFor: "Live platforms needing guaranteed uptime, security, and proactive health checks",
    deliverables: [
      "24/7 uptime monitoring & performance health checks",
      "Monthly Next.js & dependency security patches",
      "Guaranteed sub-2-hour emergency bug resolution",
      "Continuous SEO & Lighthouse score monitoring",
    ],
    impact: "Protects your platform investment with zero downtime and proactive maintenance.",
    tier: "Available as Monthly Retainer",
    techStack: ["24/7 Monitoring", "Security Audits", "Bug SLA", "Health Checks"],
  },
  {
    id: "hosting-cloud-infra",
    title: "Hosting & Cloud Infra",
    icon: Globe,
    category: "Edge Infrastructure",
    turnaround: "Continuous",
    tagline: "Global Edge CDNs, automated SSL, CI/CD pipelines, and 99.99% uptime guarantee.",
    idealFor: "Teams needing reliable, worldwide infrastructure with zero-downtime deploys",
    deliverables: [
      "Global Edge CDN distribution (Vercel / Cloudflare)",
      "Automated SSL certificate renewal & DNS records",
      "Zero-downtime continuous integration (CI/CD)",
      "Automated database backups & disaster recovery",
    ],
    impact: "Delivers sub-50ms TTFB worldwide with 99.99% infrastructure availability.",
    tier: "Included in All Packages",
    techStack: ["Vercel Edge", "Cloudflare CDN", "SSL / DNS", "CI/CD"],
  },
];

// 3-Stage Process Data matching reference photo
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Research Project",
    description: "Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa",
    staggerClass: "md:-translate-y-3",
  },
  {
    number: "02",
    title: "Evaluate Plans",
    description: "Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa",
    staggerClass: "md:translate-y-12",
  },
  {
    number: "03",
    title: "Best Results",
    description: "Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa",
    staggerClass: "md:-translate-y-3",
  },
];

// Comprehensive FAQs for Services Section
const SERVICES_FAQS = [
  {
    q: "Can I commission individual services standalone, or do I have to buy a package?",
    summary: "Every single discipline across our 16 core capabilities can be engaged as a dedicated standalone sprint or bundled into a turnkey launch package.",
    details: [
      "Standalone Sprints: Ideal for focused, high-impact needs such as a high-converting landing page, 3D spatial WebGL canvas, UI/UX design audit, or SEO speed tuning. You receive a dedicated 3–7 day sprint with fixed scope and clear deliverables.",
      "Turnkey Bundles: If you are launching a full-scale web product or brand overhaul, our 8-tier pricing matrix bundles strategy, Figma UI/UX, 3D WebGL, Next.js engineering, and Edge deployment into a seamless end-to-end launch with consolidated milestone pricing.",
    ],
  },
  {
    q: "Who actually executes the work, and how do we communicate during the sprint?",
    summary: "Direct execution by the 3 founding partners with zero junior handoffs or agency account managers.",
    details: [
      "Nihal (Engineering & 3D): Full-stack Next.js App Router architecture, React Three Fiber 3D WebGL, server actions, database integrations, and Edge CI/CD infrastructure.",
      "Pranav (Strategy & Product): Growth strategy, digital market positioning, sprint roadmapping, conversion rate optimization (CRO), and milestone scoping.",
      "Hemanth (Design & Creative): Visual creative direction, tactile Figma UI/UX prototyping, design token architecture, and editorial typography.",
      "Communication Cadence: Direct founder access via dedicated private Slack or WhatsApp channels, asynchronous Loom video walkthroughs, and weekly live sprint reviews for 100% transparency.",
    ],
  },
  {
    q: "What are your typical delivery timelines and revision workflows?",
    summary: "Fast-track delivery ranging from 3–5 days for landing sprints to 2–4 weeks for custom platforms.",
    details: [
      "Rapid MVP & Landing Sprints (3–5 Days): Conversion landing pages, design prototypes, and single-feature integrations ship in under one week.",
      "Full Platforms & 3D Spatial Experiences (2–4 Weeks): Multi-page web architectures, headless e-commerce storefronts, and custom 3D WebGL flagships typically launch within 2 to 4 weeks.",
      "Iterative Revisions: Every sprint includes dedicated feedback and revision rounds. We test interactively in live staging preview environments on Vercel so you can test features and click through real builds at every stage.",
    ],
  },
  {
    q: "Do we own 100% of the source code, 3D assets, and design files?",
    summary: "Yes. Complete 100% intellectual property ownership with zero vendor lock-in upon final milestone sign-off.",
    details: [
      "Design Systems: Complete Figma source files, vector marks, design tokens, component libraries, and visual assets.",
      "Code Repositories: Clean, well-documented Next.js / TypeScript GitHub or GitLab repositories with modular component structures.",
      "Deployment & Cloud Keys: Production Vercel/Cloudflare deployment configurations, database access, environment keys, and DNS mappings.",
    ],
  },
  {
    q: "What modern technologies and frameworks do you build with?",
    summary: "A modern, battle-tested tech stack optimized for sub-second TTFB and 100/100 Core Web Vitals.",
    details: [
      "Frontend & App Architecture: Next.js App Router, React 19, TypeScript, and token-based Vanilla CSS & TailwindCSS.",
      "3D & Kinetic Physics: Three.js, React Three Fiber, GSAP, and custom GLSL shaders optimized for 60FPS across desktop and mobile.",
      "Backend & Integrations: Server Actions, REST/GraphQL APIs, Supabase, PostgreSQL, Headless Shopify, Stripe, and OpenAI/Anthropic LLM agent pipelines.",
      "Hosting & Infrastructure: Global Edge CDNs (Vercel & Cloudflare) delivering sub-50ms TTFB and perfect 100/100 Google Lighthouse benchmarks.",
    ],
  },
  {
    q: "How does your pricing and payment schedule work?",
    summary: "100% transparent fixed-scope pricing with milestone-based escrow payments.",
    details: [
      "Milestone-Based Escrow: Typically structured as 50% deposit upon kickoff, 25% upon design approval & staging deployment, and 25% upon final production launch & IP transfer.",
      "No Hidden Costs: All sprint scopes, revisions, and deliverable specifications are locked in upfront before work begins — zero surprise hourly invoices.",
      "Flexible Currency: Invoices can be settled in INR (₹) or USD ($) via direct bank wire, Stripe, or corporate invoice.",
    ],
  },
  {
    q: "What happens after launch? Do you offer ongoing maintenance and support?",
    summary: "Proactive monthly maintenance retainers with 24/7 uptime monitoring and rapid SLAs.",
    details: [
      "24/7 Monitoring & Emergency SLAs: Real-time uptime telemetry with guaranteed sub-2-hour emergency bug turnaround.",
      "Continuous Optimization: Monthly Next.js dependency security updates, SEO health checks, and Lighthouse performance tuning.",
      "Iterative Feature Sprints: Add new pages, interactive 3D elements, or marketing campaigns as your business expands.",
    ],
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<(typeof ALL_SERVICES)[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || CONTACT_INFO.phone;

  // Keyboard navigation for opened service card modal
  React.useEffect(() => {
    if (!selectedService) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = ALL_SERVICES.findIndex((s) => s.id === selectedService.id);
        const nextIndex = (currentIndex + 1) % ALL_SERVICES.length;
        setSelectedService(ALL_SERVICES[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = ALL_SERVICES.findIndex((s) => s.id === selectedService.id);
        const prevIndex = (currentIndex - 1 + ALL_SERVICES.length) % ALL_SERVICES.length;
        setSelectedService(ALL_SERVICES[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  const handlePrevService = () => {
    if (!selectedService) return;
    const currentIndex = ALL_SERVICES.findIndex((s) => s.id === selectedService.id);
    const prevIndex = (currentIndex - 1 + ALL_SERVICES.length) % ALL_SERVICES.length;
    setSelectedService(ALL_SERVICES[prevIndex]);
  };

  const handleNextService = () => {
    if (!selectedService) return;
    const currentIndex = ALL_SERVICES.findIndex((s) => s.id === selectedService.id);
    const nextIndex = (currentIndex + 1) % ALL_SERVICES.length;
    setSelectedService(ALL_SERVICES[nextIndex]);
  };

  // Interactive mouse horizontal tracking for the "Process We Follow" section
  const processSectionRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const smoothMouseX = useSpring(mouseX, { stiffness: 180, damping: 24 });
  
  // Parallax offsets that move cards left/right along with cursor
  const circleTranslateX = useTransform(smoothMouseX, [0, 1], [30, -30]);

  const handleProcessMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!processSectionRef.current) return;
    const rect = processSectionRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    mouseX.set(relativeX);
  };

  const handleProcessMouseLeave = () => {
    mouseX.set(0.5);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] -mt-24 sm:-mt-28 pt-28 sm:pt-36">
      
      {/* 1. Dynamic Floating Ambient Background Glows */}
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-20 sm:space-y-28 pb-16 sm:pb-24">
        
        <ServicesHeroBanner />

        {/* ========================================================================= */}
        {/* 2. SERVICES GRID: 16 Enhanced Interactive Cards with Inspect Scope */}
        {/* ========================================================================= */}
        <section id="services-grid" className="pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {ALL_SERVICES.map((service, index) => {
              const Icon = service.icon;
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (index % 8) * 0.04 }}
                  onClick={() => setSelectedService(service)}
                  className="relative flex flex-col justify-between rounded-[28px] bg-[#141414] text-white border border-[#262626] p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_50px_rgba(255,77,46,0.22)] hover:border-[#FF4D2E]/70 hover:-translate-y-2 transition-all duration-300 group cursor-pointer select-none min-h-[260px] overflow-hidden"
                >
                  {/* Subtle Top Glowing Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4D2E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Meta Bar inside Card */}
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-xs font-black text-[#555555] group-hover:text-white transition-colors">
                      {formattedIndex}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#FF4D2E]/40 group-hover:bg-[#FF4D2E]/10 font-mono text-[10px] font-bold text-[#9E9E9E] group-hover:text-[#FF4D2E] transition-all">
                      <span>VIEW SCOPE</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Center Content: Icon + Title + Tagline */}
                  <div className="space-y-4 my-auto py-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-[#FF4D2E] group-hover:scale-110 group-hover:bg-[#FF4D2E] group-hover:text-white group-hover:shadow-[0_0_24px_rgba(255,77,46,0.5)] transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7 stroke-[1.9]" />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <h3 className="font-sans text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug group-hover:text-[#FF4D2E] transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs text-[#8E8E8E] line-clamp-2 leading-relaxed font-normal">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Meta Chip: Category & Turnaround */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#777777] w-full">
                    <span className="truncate max-w-[130px] font-bold text-[#A5A5A5] group-hover:text-white transition-colors" title={service.category}>
                      {service.category}
                    </span>
                    <span className="text-[#FF4D2E] font-bold shrink-0">
                      ⚡ {service.turnaround}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FLOATING VIVID RED-ORANGE CTA STRIP (Direct Founder Consultation) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full z-20 pt-4 -mt-8 sm:-mt-12"
        >
          <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#FF4D2E] via-[#FF5733] to-[#E03D1E] rounded-[24px] sm:rounded-[32px] p-7 sm:p-10 text-white shadow-[0_20px_50px_rgba(255,77,46,0.38)] border border-white/25">
            {/* Subtle Inner Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
              
              {/* Zone 1 (Left): Outlined Icon + Clean Aligned Consultation Action */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm shrink-0">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1.5 pb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/90 font-bold whitespace-nowrap">
                      Free Founder Consultation
                    </span>
                  </div>
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="font-sans text-xl sm:text-2xl lg:text-[26px] xl:text-3xl font-extrabold tracking-tight text-white hover:underline leading-none whitespace-nowrap"
                  >
                    {contactPhone}
                  </a>
                </div>
              </div>

              {/* Zone 2 (Middle): Supporting Pitch Text */}
              <div className="lg:col-span-5 font-sans text-xs sm:text-sm text-white/95 leading-relaxed border-l-0 lg:border-l border-white/25 pl-0 lg:pl-6 space-y-1">
                <p className="font-semibold">Direct founder execution — zero agency bureaucracy.</p>
                <p className="text-white/85 text-[11px] sm:text-xs">
                  Discuss your requirements directly with Nihal, Pranav, and Hemanth. Receive a scoped proposal and timeline within 24 hours.
                </p>
              </div>

              {/* Zone 3 (Right): Solid White Pill Button */}
              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <Link href="/start-a-project" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#161616] hover:bg-white hover:text-[#161616] text-white font-sans text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 4. PROCESS WE FOLLOW SECTION */}
        {/* ========================================================================= */}
        <section
          ref={processSectionRef}
          onMouseMove={handleProcessMouseMove}
          onMouseLeave={handleProcessMouseLeave}
          className="space-y-16 pt-8 pb-10 text-center select-none"
        >
          {/* Section Header */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase block">
              ● OUR PROCESS ●
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-[#161616]">
              <span className="text-[#FF4D2E]">Process</span> We Follow
            </h2>
            <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed max-w-xl mx-auto">
              Our 3-stage agile execution architecture designed for rapid iteration, continuous alignment, and zero wasted velocity.
            </p>
          </div>

          {/* Staggered Wave Journey Canvas with Extended Full-Width Curved Dashed Path */}
          <div className="relative w-full max-w-6xl mx-auto min-h-[400px] sm:min-h-[440px] flex items-center justify-center overflow-visible">
            
            {/* Desktop Extended Continuous Dashed Wave Curve (SVG) stretching edge-to-edge */}
            <div className="hidden md:block absolute -left-12 -right-12 inset-y-0 pointer-events-none z-0">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 1200 400"
                fill="none"
                preserveAspectRatio="none"
              >
                {/* Starting Hollow Circle Node on the far left */}
                <circle cx="20" cy="205" r="7" stroke="#FF4D2E" strokeWidth="2.5" fill="white" />

                {/* Long Extended Sweeping Dashed Wave Path */}
                <path
                  d="M 27 205 C 100 205, 140 185, 235 185 C 375 185, 435 285, 600 285 C 765 285, 825 125, 965 125 L 1150 70"
                  stroke="#FF4D2E"
                  strokeWidth="2.4"
                  strokeDasharray="7 7"
                  strokeOpacity="0.55"
                />

                {/* Large Prominent Paper Plane / Arrowhead at the far right upward tip */}
                <g transform="translate(1155, 58) rotate(-22)">
                  <path
                    d="M 0 0 L 26 12 L 0 24 L 5 12 Z"
                    fill="#FF4D2E"
                    stroke="#FF4D2E"
                    strokeWidth="1.5"
                  />
                  <path d="M 5 12 L 26 12" stroke="white" strokeWidth="1.2" />
                </g>
              </svg>
            </div>

            {/* 3 Circular Milestone Disks (Staggered Wave Placement Matching Photo) */}
            <motion.div
              style={{ x: circleTranslateX }}
              className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-center justify-items-center px-4"
            >
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative z-10 transition-transform duration-300 ${step.staggerClass}`}
                >
                  {/* Outer Concentric Halo Ring */}
                  <div className="p-3.5 rounded-full bg-white/70 border border-[#E8DFC8]/60 shadow-[0_18px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(255,77,46,0.22)] hover:scale-105 transition-all duration-300">
                    
                    {/* Inner White Circular Disk */}
                    <div className="relative w-[235px] sm:w-[255px] h-[235px] sm:h-[255px] rounded-full bg-white border border-[#E8DFC8] flex flex-col items-center justify-center p-6 text-center group">
                      
                      {/* Top Red Circle Number Badge with Modern Bold Sans Font Matching Photo */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                        <div className="w-12 h-12 rounded-full bg-[#FF4D2E] text-white font-sans font-black text-sm flex items-center justify-center shadow-md ring-4 ring-white group-hover:scale-110 transition-transform tracking-tight">
                          {step.number}
                        </div>
                      </div>

                      {/* Content Inside Disk */}
                      <div className="space-y-2 max-w-[180px] mx-auto pt-2">
                        <h3 className="font-sans text-lg sm:text-xl font-bold text-[#161616] tracking-tight group-hover:text-[#FF4D2E] transition-colors leading-tight">
                          {step.title}
                        </h3>

                        <p className="font-sans text-[11px] sm:text-xs text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Branded Raultz Agency URL bar */}
          <div className="pt-4 flex items-center justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8DFC8] shadow-2xs hover:shadow-xs hover:border-[#FF4D2E]/50 group transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4D2E] animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-bold text-[#161616] group-hover:text-[#FF4D2E] transition-colors tracking-wider">
                www.raultz.digital
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF4D2E] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. 8-TIER PRICING & BUNDLING MATRIX BRIDGE */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-14 border border-[#E8DFC8] shadow-[0_12px_40px_rgba(31,27,22,0.06)] flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Subtle Ambient Background Flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4D2E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-2xl">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161616] tracking-tight leading-tight">
              Looking to bundle multiple <span className="text-[#FF4D2E]">services together?</span>
            </h2>

            <p className="font-sans text-muted text-sm sm:text-base leading-relaxed max-w-xl">
              From single-page MVP validation sprints to full-custom 3D WebGL flagship platforms — explore our transparent fixed-price tiers or configure a custom multi-discipline commission with zero hidden fees.
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-2 text-xs sm:text-sm font-sans font-semibold text-[#1F1B16]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D2E] shrink-0" />
                <span>Fixed Scope Escrow</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D2E] shrink-0" />
                <span>100% IP &amp; Code Transfer</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D2E] shrink-0" />
                <span>Sub-24h Scoping</span>
              </span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 w-full lg:w-auto">
            <Link href="/pricing" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FAF7F2] hover:bg-white text-[#161616] hover:text-[#FF4D2E] font-bold text-xs sm:text-sm border border-[#E8DFC8] shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 font-mono"
              >
                <span>VIEW 8-TIER PRICING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            
            <Link href="/start-a-project" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto bg-[#FF4D2E] hover:bg-[#E03D1E] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(255,77,46,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 font-mono"
              >
                <Sparkles className="w-4 h-4" />
                <span>START A PROJECT</span>
              </button>
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FREQUENTLY ASKED QUESTIONS (FAQS) */}
        {/* ========================================================================= */}
        <section className="space-y-8 max-w-3xl mx-auto pt-6">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase block">
              ● COMMON QUESTIONS ●
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {SERVICES_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-[#E8DFC8] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left font-sans font-bold text-sm sm:text-base text-[#161616] flex items-center justify-between gap-4 cursor-pointer hover:text-[#FF4D2E] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF4D2E] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#4A4238] leading-relaxed border-t border-black/[0.04] pt-4 space-y-3 bg-[#FAF7F2]/50">
                      {faq.summary && (
                        <p className="font-sans font-semibold text-[#161616] text-xs sm:text-sm leading-snug">
                          {faq.summary}
                        </p>
                      )}

                      {faq.details && faq.details.length > 0 && (
                        <div className="space-y-2 pt-1">
                          {faq.details.map((point, pIdx) => {
                            const parts = point.split(":");
                            const hasLabel = parts.length > 1;
                            const label = hasLabel ? parts[0] : null;
                            const rest = hasLabel ? parts.slice(1).join(":") : point;

                            return (
                              <div key={pIdx} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E] mt-2 shrink-0" />
                                <div className="font-sans text-xs sm:text-sm leading-relaxed">
                                  {label && (
                                    <strong className="text-[#161616] font-bold">
                                      {label}:
                                    </strong>
                                  )}
                                  <span>{rest}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE POP-UP MODAL (When any card is tapped) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-2xl bg-[#161616] text-white rounded-3xl sm:rounded-[36px] border border-[#2B2B2B] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 pr-10">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4D2E]/20 border border-[#FF4D2E]/40 flex items-center justify-center text-[#FF4D2E] shrink-0 shadow-sm">
                  {React.createElement(selectedService.icon, { className: "w-7 h-7" })}
                </div>
                <div className="space-y-2">
                  <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {selectedService.title}
                  </h2>

                  {/* Timeline & Turnaround Badge */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/8 border border-white/12 font-mono text-[11px] font-bold text-white/80">
                      <Clock className="w-3.5 h-3.5 text-[#FF4D2E]" />
                      {selectedService.turnaround}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/8 border border-white/12 font-mono text-[11px] font-bold text-white/80">
                      <Layers className="w-3.5 h-3.5 text-[#FF4D2E]" />
                      {selectedService.category}
                    </span>
                  </div>

                  {/* Best For Context Line */}
                  {(selectedService as any).idealFor && (
                    <p className="font-sans text-xs text-white/50 italic leading-relaxed">
                      Best for: {(selectedService as any).idealFor}
                    </p>
                  )}
                </div>
              </div>

              {/* Deliverables List */}
              {selectedService.deliverables && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    Included Sprint Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.deliverables.map((item: string) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-sans text-white/90 font-medium select-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact / Benefit Box */}
              {selectedService.impact && (
                <div className="p-4 rounded-2xl bg-[#FF4D2E]/10 border border-[#FF4D2E]/30 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#FF4D2E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-sans text-xs font-bold text-[#FF4D2E] block">
                      Strategic Impact:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                      {selectedService.impact}
                    </p>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="w-full px-5 py-3 rounded-full bg-white/8 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 hover:border-[#FF4D2E]/40 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 group/btn"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white/50 group-hover/btn:text-[#FF4D2E] transition-colors" />
                      <span>Book a Call</span>
                    </button>
                  </Link>

                  <Link href="/start-a-project" className="w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="w-full px-6 py-3 rounded-full bg-[#FF4D2E] hover:bg-[#E03D1E] text-white font-semibold text-xs shadow-sm hover:scale-105 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Start This Sprint &rarr;</span>
                    </button>
                  </Link>
                </div>

                {/* CTA Microcopy */}
                <p className="text-center font-sans text-[10px] sm:text-[11px] text-white/35 leading-relaxed">
                  Book a Call — free 15-min scoping chat &nbsp;·&nbsp; Start This Sprint — lock in this package and begin intake
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

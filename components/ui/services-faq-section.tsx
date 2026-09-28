"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
  Filter,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "sprints" | "founders" | "ownership" | "tech" | "pricing" | "maintenance";
  q: string;
  summary: string;
  details: string[];
}

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "sprints", label: "Sprints & Delivery" },
  { id: "founders", label: "Founder Triad" },
  { id: "ownership", label: "100% IP & Code" },
  { id: "tech", label: "Architecture & Stack" },
  { id: "pricing", label: "Pricing & Escrow" },
  { id: "maintenance", label: "24/7 SLAs" },
] as const;

const FAQS_DATA: FAQItem[] = [
  {
    id: "standalone-vs-packages",
    category: "sprints",
    q: "Can I commission individual services standalone, or do I have to buy a package?",
    summary:
      "Every single discipline across our 16 core capabilities can be engaged as an independent precision sprint or bundled into a turnkey launch package.",
    details: [
      "Standalone Sprints: Ideal for targeted, high-impact requirements such as a conversion Landing Page, 3D Spatial Canvas, UI/UX Design System, or SEO speed tuning. You receive a dedicated 3–7 day sprint with fixed scope and clear deliverables.",
      "Turnkey Bundles: If you are launching a full-scale digital flagship or comprehensive rebrand, our 8-tier pricing matrix bundles strategy, Figma UI/UX, 3D WebGL, Next.js engineering, and Edge deployment into a seamless end-to-end launch with milestone pricing.",
    ],
  },
  {
    id: "who-executes",
    category: "founders",
    q: "Who actually executes the work, and how do we communicate during the sprint?",
    summary:
      "Direct execution by the 3 founding partners with zero junior handoffs, zero outsourced interns, and zero agency account managers.",
    details: [
      "Nihal (Engineering & 3D WebGL): Full-stack Next.js App Router architecture, React Three Fiber 3D scenes, server actions, database integrations, and Edge CI/CD pipelines.",
      "Pranav (Strategy & Product): Growth strategy, digital market positioning, sprint roadmapping, conversion rate optimization (CRO), and milestone scoping.",
      "Hemanth (Design & Creative Direction): Visual creative direction, tactile Figma UI/UX prototyping, design token architecture, kerning, and editorial typography.",
      "Communication Cadence: Direct founder access via dedicated private Slack or WhatsApp channels, asynchronous Loom video walkthroughs, and weekly live sprint reviews for 100% transparency.",
    ],
  },
  {
    id: "delivery-timelines",
    category: "sprints",
    q: "What are your typical delivery timelines and revision workflows?",
    summary:
      "Fast-track delivery ranging from 3–5 days for landing sprints to 2–4 weeks for custom platforms.",
    details: [
      "Rapid MVP & Landing Sprints (3–5 Days): Conversion landing pages, design prototypes, and single-feature integrations ship in under one week.",
      "Full Platforms & 3D Spatial Experiences (2–4 Weeks): Multi-page web architectures, headless storefronts, and custom 3D WebGL flagships typically launch within 2 to 4 weeks.",
      "Iterative Revisions: Every sprint includes dedicated feedback and revision rounds. We test interactively in live staging preview environments on Vercel so you can test features and click through real builds at every stage.",
    ],
  },
  {
    id: "ip-ownership",
    category: "ownership",
    q: "Do we own 100% of the source code, 3D assets, and design files?",
    summary:
      "Yes. Complete 100% intellectual property ownership with zero vendor lock-in upon final milestone sign-off.",
    details: [
      "Design Systems: Complete Figma source files, vector marks, design tokens, component libraries, and visual assets.",
      "Code Repositories: Clean, well-documented Next.js / TypeScript GitHub or GitLab repositories with modular component structures.",
      "Deployment & Cloud Keys: Production Vercel/Cloudflare deployment configurations, database access, environment keys, and DNS mappings.",
    ],
  },
  {
    id: "tech-stack",
    category: "tech",
    q: "What modern technologies and frameworks do you build with?",
    summary:
      "A modern, battle-tested tech stack optimized for sub-second TTFB and 100/100 Core Web Vitals.",
    details: [
      "Frontend & App Architecture: Next.js App Router, React 19, TypeScript, and token-based Vanilla CSS & TailwindCSS.",
      "3D & Kinetic Physics: Three.js, React Three Fiber, GSAP, and custom GLSL shaders optimized for 60FPS across desktop and mobile.",
      "Backend & Integrations: Server Actions, REST/GraphQL APIs, Supabase, PostgreSQL, Headless Shopify, Stripe, and OpenAI/Anthropic LLM agent pipelines.",
      "Hosting & Infrastructure: Global Edge CDNs (Vercel & Cloudflare) delivering sub-50ms TTFB and perfect 100/100 Google Lighthouse benchmarks.",
    ],
  },
  {
    id: "pricing-schedule",
    category: "pricing",
    q: "How does your pricing and payment schedule work?",
    summary:
      "100% transparent fixed-scope pricing with milestone-based escrow payments.",
    details: [
      "Milestone-Based Escrow: Typically structured as 50% deposit upon kickoff, 25% upon design approval & staging deployment, and 25% upon final production launch & IP transfer.",
      "No Hidden Costs: All sprint scopes, revisions, and deliverable specifications are locked in upfront before work begins — zero surprise hourly invoices.",
      "Flexible Currency: Invoices can be settled in INR (₹) or USD ($) via direct bank wire, Stripe, or corporate invoice.",
    ],
  },
  {
    id: "post-launch-support",
    category: "maintenance",
    q: "What happens after launch? Do you offer ongoing maintenance and support?",
    summary:
      "Proactive monthly maintenance retainers with 24/7 uptime monitoring and rapid SLAs.",
    details: [
      "24/7 Monitoring & Emergency SLAs: Real-time uptime telemetry with guaranteed sub-2-hour emergency bug turnaround.",
      "Continuous Optimization: Monthly Next.js dependency security updates, SEO health checks, and Lighthouse performance tuning.",
      "Iterative Feature Sprints: Add new pages, interactive 3D elements, or marketing campaigns as your business expands.",
    ],
  },
];

export function ServicesFAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<string | null>("standalone-vs-packages");

  const filteredFaqs =
    activeCategory === "all"
      ? FAQS_DATA
      : FAQS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="relative w-full py-10">
      {/* ========================================================================= */}
      {/* 3D NEURAL FLUID HERO CARD (Matching Reference Image Style) */}
      {/* ========================================================================= */}
      <div className="relative w-full rounded-3xl sm:rounded-[40px] overflow-hidden border border-[#2E2E2E] shadow-[0_24px_70px_rgba(0,0,0,0.5)] bg-[#0C0C0C] text-white">
        
        {/* Background 3D Neural Fluid Chrome Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/faq-neural-bg.jpg"
            alt="3D Neural Fluid Background"
            fill
            priority
            className="object-cover object-center opacity-85 scale-105 transition-transform duration-1000"
          />

          {/* Deep Cinematic Gradients for Crisp Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 z-10" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/90 z-10" />

          {/* Glowing Ambient Ember Accent Flare */}
          <div className="absolute -top-24 right-1/4 w-[500px] h-[350px] bg-[#FF4D2E]/20 rounded-full blur-[120px] z-10" />
        </div>

        {/* Notched Side Tab Cutouts (Architectural Framing from Reference Photo) */}
        <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 flex-col items-center">
          <div className="w-4 h-12 bg-[#FAF7F2] rounded-r-xl border-y border-r border-[#E8DFC8]/60 flex items-center justify-center shadow-sm">
            <span className="text-[10px] text-[#161616] font-bold">&lsaquo;</span>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 flex-col items-center">
          <div className="w-4 h-12 bg-[#FAF7F2] rounded-l-xl border-y border-l border-[#E8DFC8]/60 flex items-center justify-center shadow-sm">
            <span className="text-[10px] text-[#161616] font-bold">&rsaquo;</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 p-6 sm:p-10 lg:p-14 space-y-10">
          
          {/* Header Zone: Eyebrow + Bold Title + Category Filter Pills */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FF4D2E]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/90">
                Transparent Execution &bull; Zero Guesswork
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Frequently Asked <span className="text-[#FF4D2E]">Questions</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/75 max-w-2xl leading-relaxed">
                Everything you need to know about our direct founder triad, sprint timelines, code ownership, modern tech stack, and post-launch SLAs.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {FAQ_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#FF4D2E] text-white shadow-[0_4px_16px_rgba(255,77,46,0.35)]"
                        : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordion FAQ Grid */}
          <div className="space-y-3.5 max-w-4xl">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? "bg-black/80 border-[#FF4D2E]/60 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                      : "bg-[#141414]/70 border-white/10 hover:border-white/25 backdrop-blur-md"
                  }`}
                >
                  {/* Accordion Header Button */}
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group select-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md transition-colors ${
                          isOpen
                            ? "bg-[#FF4D2E] text-white"
                            : "bg-white/10 text-white/60 group-hover:text-white"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span className="font-sans font-bold text-base sm:text-lg text-white group-hover:text-[#FF4D2E] transition-colors leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "bg-[#FF4D2E] text-white rotate-180"
                          : "bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Expanded Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-white/85 space-y-4 border-t border-white/10">
                          {/* Summary Statement */}
                          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 font-sans font-semibold text-white leading-relaxed text-xs sm:text-sm flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FF4D2E] shrink-0 mt-0.5" />
                            <span>{faq.summary}</span>
                          </div>

                          {/* Bullet Points */}
                          <div className="space-y-2.5 pt-1">
                            {faq.details.map((detail, dIdx) => {
                              const parts = detail.split(":");
                              const hasLabel = parts.length > 1;
                              const label = hasLabel ? parts[0] : null;
                              const rest = hasLabel ? parts.slice(1).join(":") : detail;

                              return (
                                <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E] mt-2 shrink-0" />
                                  <div>
                                    {label && (
                                      <strong className="text-white font-bold block sm:inline sm:mr-1">
                                        {label}:
                                      </strong>
                                    )}
                                    <span className="text-white/80">{rest}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Notched Stepped Action Bar (Matching Reference Photo Style) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-xs font-mono text-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>FOUNDER SPRINT SLOTS OPEN &bull; DISCUSS YOUR PROJECT DIRECTLY</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 font-mono"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FF4D2E]" />
                  <span>BOOK DISCOVERY CALL</span>
                </button>
              </Link>

              <Link href="/start-a-project" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FF4D2E] hover:bg-[#E03D1E] text-white font-bold text-xs shadow-[0_6px_20px_rgba(255,77,46,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 font-mono"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

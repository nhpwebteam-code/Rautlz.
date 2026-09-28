"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Calendar,
  MessageCircle,
  ChevronDown,
  Sparkles,
  X,
  Plus,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";
import {
  PRICING_SECTIONS,
  PRICING_PACKAGES,
  COMPARISON_CATEGORIES,
  PricingPackage,
} from "@/lib/content/pricing";
import { CurrencyCode, formatCurrency } from "@/lib/currency";
import { CONTACT_INFO } from "@/lib/contact";

// Exchange rates relative to INR
const CONVERSION_RATES: Record<CurrencyCode, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095,
  CAD: 0.016,
  AUD: 0.018,
};

const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
  CAD: "CA$",
  AUD: "A$",
};

const CATEGORY_THEMES: Record<
  string,
  {
    icon: string;
    headerBg: string;
    borderLeft: string;
    titleColor: string;
    badgeBg: string;
    badgeText: string;
    checkBg: string;
    checkText: string;
    hoverText: string;
  }
> = {
  "Design & Architecture": {
    icon: "🎨",
    headerBg: "bg-gradient-to-r from-[#FF4D2E]/10 via-[#FAF7F2] to-[#FAF7F2]",
    borderLeft: "border-l-[#FF4D2E]",
    titleColor: "text-[#C1673B]",
    badgeBg: "bg-[#FF4D2E]/10 border-[#FF4D2E]/25",
    badgeText: "text-[#C1673B]",
    checkBg: "bg-[#FF4D2E]/15",
    checkText: "text-[#FF4D2E]",
    hoverText: "group-hover:text-[#FF4D2E]",
  },
  "Motion, 3D & Spatial Engineering": {
    icon: "⚡",
    headerBg: "bg-gradient-to-r from-[#3B82F6]/10 via-[#FAF7F2] to-[#FAF7F2]",
    borderLeft: "border-l-[#3B82F6]",
    titleColor: "text-[#2563EB]",
    badgeBg: "bg-[#3B82F6]/10 border-[#3B82F6]/25",
    badgeText: "text-[#2563EB]",
    checkBg: "bg-[#3B82F6]/15",
    checkText: "text-[#3B82F6]",
    hoverText: "group-hover:text-[#3B82F6]",
  },
  "Integrations & Backend Systems": {
    icon: "🛠️",
    headerBg: "bg-gradient-to-r from-[#6B7A4E]/10 via-[#FAF7F2] to-[#FAF7F2]",
    borderLeft: "border-l-[#6B7A4E]",
    titleColor: "text-[#6B7A4E]",
    badgeBg: "bg-[#6B7A4E]/10 border-[#6B7A4E]/25",
    badgeText: "text-[#6B7A4E]",
    checkBg: "bg-[#6B7A4E]/15",
    checkText: "text-[#6B7A4E]",
    hoverText: "group-hover:text-[#6B7A4E]",
  },
  "Delivery, Revisions & Support SLA": {
    icon: "🚀",
    headerBg: "bg-gradient-to-r from-[#D97706]/10 via-[#FAF7F2] to-[#FAF7F2]",
    borderLeft: "border-l-[#D97706]",
    titleColor: "text-[#B45309]",
    badgeBg: "bg-[#D97706]/10 border-[#D97706]/25",
    badgeText: "text-[#B45309]",
    checkBg: "bg-[#D97706]/15",
    checkText: "text-[#D97706]",
    hoverText: "group-hover:text-[#D97706]",
  },
};

export default function PricingPage() {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [activeSectionId, setActiveSectionId] = useState<string>("growth"); // default to popular growth tier
  
  // Custom user-selected plans for comparison (defaulting to the active section's 3 plans)
  const [selectedPlanIds, setSelectedPlanIds] = useState<string[]>(["pkg-04", "pkg-05", "pkg-06"]);

  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "Design & Architecture": true,
    "Motion, 3D & Spatial Engineering": true,
    "Integrations & Backend Systems": true,
    "Delivery, Revisions & Support SLA": true,
  });

  const convertPrice = (priceINR: number) => {
    const rate = CONVERSION_RATES[currency] || 1;
    const raw = Math.round(priceINR * rate);
    return formatCurrency(raw, {
      currency,
      locale: currency === "INR" ? "en-IN" : "en-US",
      maximumFractionDigits: 0,
    });
  };

  const activeSection =
    PRICING_SECTIONS.find((s) => s.id === activeSectionId) || PRICING_SECTIONS[1];

  const activePackages = PRICING_PACKAGES.filter((pkg) =>
    activeSection.packageIds.includes(pkg.id)
  );

  // When switching section tabs, sync the top 3 cards and default the comparison selection to those 3
  const handleSectionChange = (secId: string) => {
    setActiveSectionId(secId);
    const sec = PRICING_SECTIONS.find((s) => s.id === secId);
    if (sec) {
      setSelectedPlanIds(sec.packageIds);
    }
  };

  // Toggle a plan in/out of the user's custom comparison selection
  const togglePlanSelection = (planId: string) => {
    setSelectedPlanIds((prev) => {
      if (prev.includes(planId)) {
        // Keep at least 1 plan selected
        if (prev.length <= 1) return prev;
        return prev.filter((id) => id !== planId);
      } else {
        // Allow up to 4 plans compared side-by-side
        if (prev.length >= 4) {
          return [...prev.slice(1), planId];
        }
        return [...prev, planId];
      }
    });
  };

  // Reset comparison to current section's 3 packages
  const resetToSectionPlans = () => {
    setSelectedPlanIds(activeSection.packageIds);
  };

  // The plans actively displayed in the comparison table
  const comparedPackages = selectedPlanIds
    .map((id) => PRICING_PACKAGES.find((p) => p.id === id))
    .filter(Boolean) as PricingPackage[];

  const toggleCategory = (catName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  const areAllExpanded = Object.values(expandedCategories).every(Boolean);

  const toggleAllCategories = () => {
    const nextState = !areAllExpanded;
    const updated: Record<string, boolean> = {};
    COMPARISON_CATEGORIES.forEach((cat) => {
      updated[cat.categoryName] = nextState;
    });
    setExpandedCategories(updated);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] -mt-24 sm:-mt-28 pt-28 sm:pt-36 pb-24 sm:pb-32 space-y-16 sm:space-y-20">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-[#FCE3D4]/50 via-[#FF4D2E]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Tactile Architectural Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#1F1B16 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER: Centered Symmetric Alignment */}
        {/* ========================================================================= */}
        <section className="text-center space-y-3 max-w-3xl mx-auto">
          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold tracking-tight text-[#161616]">
            Choose <span className="text-[#FF4D2E]">your</span> plan
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#666666] leading-relaxed max-w-xl mx-auto">
            9 defined packages divided into 3 specialized tiers. Transparent, scoped pricing with direct founding partner accountability.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 2. CENTERED SECTION TABS & CURRENCY SWITCHER */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center gap-5 max-w-3xl mx-auto">
          
          {/* 3 Section Selector Tabs (Centered Pill Switcher) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#EFE6D8]/80 border border-[#E8DFC8] shadow-inner select-none max-w-full overflow-x-auto">
            {PRICING_SECTIONS.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleSectionChange(sec.id)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap text-center ${
                    isActive
                      ? "bg-white text-[#161616] shadow-sm font-extrabold"
                      : "text-[#666666] hover:text-[#161616]"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="font-mono text-[10px] font-bold opacity-60 uppercase tracking-wider">
                      {sec.code.replace("SECTION ", "TIER ")}
                    </span>
                    <span className="font-sans font-bold tracking-tight">{sec.title}</span>
                    {sec.id === "growth" && (
                      <span className="px-2 py-0.5 rounded-full bg-[#FF4D2E]/10 text-[#FF4D2E] font-mono text-[10px] font-black">
                        POPULAR
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Currency Switcher Pill Bar (Centered) */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#7A7165] uppercase">
              CURRENCY:
            </span>
            {(["INR", "USD", "EUR", "GBP"] as CurrencyCode[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer select-none ${
                  currency === c
                    ? "bg-[#161616] text-white shadow-sm"
                    : "bg-white/80 text-[#666666] hover:text-[#161616] border border-[#E8DFC8]"
                }`}
              >
                {c} ({CURRENCY_SYMBOLS[c]})
              </button>
            ))}
          </div>

        </div>

        {/* Section Architecture Callout Banner with Upgraded Font Styling */}
        <motion.div
          key={activeSection.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 p-4 px-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E8DFC8] shadow-[0_4px_20px_rgba(31,27,22,0.04)]"
        >
          <div className="flex items-center gap-3">
            {/* Crisp Monospace Architectural Badge */}
            <span className="px-2.5 py-1 rounded-md bg-[#161616] text-white font-mono text-[11px] font-extrabold uppercase tracking-widest shrink-0 shadow-xs">
              {activeSection.code}
            </span>
            {/* Bold Headline Typography */}
            <span className="font-sans text-base sm:text-lg font-black tracking-tight text-[#161616]">
              {activeSection.title}
            </span>
          </div>

          <div className="flex items-center gap-2 font-sans text-xs sm:text-sm text-[#555555] text-center sm:text-right font-medium">
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />
            <span>{activeSection.subtitle}</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. 3-COLUMN TOP PRICING CARDS (With Compare Toggle Checkbox) */}
        {/* ========================================================================= */}
        <section aria-label="Available Pricing Packages">
          <h2 className="sr-only">Available Pricing Packages and Sprints</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {activePackages.map((pkg, idx) => {
            const isMiddlePopular = pkg.isPopular || idx === 1;

            return (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 ${
                  isMiddlePopular
                    ? "bg-[#F3F5FA] border-2 border-[#3B82F6]/60 sm:-translate-y-2 shadow-[0_20px_50px_rgba(59,130,246,0.12)]"
                    : "bg-white border border-[#E8DFC8] shadow-[0_12px_40px_rgba(31,27,22,0.05)] hover:shadow-lg"
                }`}
              >
                {/* Most Popular Top Pill Badge */}
                {isMiddlePopular && (
                  <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-[#3B82F6] text-white font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Card Title & Pricing Header */}
                  <div className="min-h-[140px] flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="font-sans text-2xl font-extrabold text-[#161616]">
                        {pkg.name}
                      </h3>
                      <div className="flex items-baseline gap-1.5 pt-1">
                        <span className="font-sans text-4xl sm:text-5xl font-black text-[#161616] tracking-tight">
                          {convertPrice(pkg.priceINR)}
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#666666]">
                          {currency} / sprint
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-[#777777] leading-relaxed">
                      Fixed scope &bull; {pkg.delivery} turnaround &bull; {pkg.revisions} revision rounds
                    </p>
                  </div>

                  {/* High Visibility CTA Button */}
                  <Link href="/contact" className="block">
                    <button
                      type="button"
                      className={`w-full py-3.5 px-5 rounded-xl font-sans text-sm font-bold transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center gap-2 ${
                        isMiddlePopular
                          ? "bg-[#3B82F6] hover:bg-[#2563EB] text-white hover:scale-[1.01] active:scale-[0.99]"
                          : "bg-[#161616] hover:bg-[#FF4D2E] text-white hover:scale-[1.01] active:scale-[0.99]"
                      }`}
                    >
                      <span>Get started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                  {/* Inset Key Features Checklist */}
                  <div className="space-y-3 pt-4 border-t border-black/[0.08]">
                    <span className="font-mono text-[11px] font-bold text-[#161616] uppercase tracking-wider block">
                      Key features:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.highlightFeatures.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#333333]"
                        >
                          <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer Recommended For */}
                <div className="pt-4 border-t border-black/[0.06] font-sans text-xs text-[#666666]">
                  <span className="font-bold text-[#161616]">Best For: </span>
                  <span>{pkg.recommendedFor}</span>
                </div>

              </motion.div>
            );
          })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. DYNAMIC INTERACTIVE COMPARISON MATRIX (With User-Selected Plans) */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-10 max-w-6xl mx-auto" id="compare-matrix">
          
          {/* Header Controls with Quick Expand/Collapse & Plan Selection Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E8DFC8]">
            <div className="space-y-1">
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#161616] tracking-tight">
                Compare Selected Plans
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#666666]">
                Select any 2 to 4 plans across our 9 tiers to inspect their exact architectural differences side-by-side.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={resetToSectionPlans}
                className="px-3.5 py-2 rounded-xl bg-white border border-[#E8DFC8] hover:border-[#FF4D2E]/50 text-xs font-mono font-bold text-[#666666] hover:text-[#161616] transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
                title="Reset to current tier's 3 plans"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset (Tier 3)</span>
              </button>
            </div>
          </div>

          {/* Interactive Multi-Plan Quick Selector Chips Bar (Choose across all 9 plans) */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-sm space-y-3">
            <div className="flex items-center justify-between font-sans text-xs font-bold text-[#161616]">
              <span className="flex items-center gap-1.5 font-mono uppercase text-[11px] text-[#7A7165]">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF4D2E]" />
                <span>Click any plan chip below to add/remove it from comparison (2–4 plans):</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {PRICING_PACKAGES.map((pkg) => {
                const isSelected = selectedPlanIds.includes(pkg.id);

                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => togglePlanSelection(pkg.id)}
                    className={`px-3 py-1.5 rounded-xl font-sans text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 select-none ${
                      isSelected
                        ? "bg-[#161616] text-white shadow-sm font-bold scale-[1.02]"
                        : "bg-[#FAF7F2] hover:bg-[#EFE6D8] text-[#555555] hover:text-[#161616] border border-[#E8DFC8]"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#FF4D2E]" : "bg-[#B5ACA0]"}`} />
                    <span>{pkg.name}</span>
                    <span className="font-mono text-[10px] opacity-75">
                      ({convertPrice(pkg.priceINR)})
                    </span>
                    {isSelected && <Check className="w-3 h-3 text-[#FF4D2E] ml-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Comparison Table Container */}
          <div className="rounded-3xl bg-white border border-[#E8DFC8] shadow-[0_16px_50px_rgba(31,27,22,0.06)] overflow-hidden">
            
            {/* Table Header: Column 1 (Features) + Columns for Selected Plans */}
            <div className="flex items-center p-5 sm:p-6 bg-[#FAF7F2] border-b border-[#E8DFC8] font-sans text-xs sm:text-sm font-bold text-[#161616]">
              {/* Column 1: Feature Title (38% on desktop) */}
              <div className="w-[36%] sm:w-[38%] font-mono uppercase tracking-wider text-[#7A7165] pr-4">
                Architecture Deliverables
              </div>

              {/* Dynamic Columns for Selected Plans */}
              <div
                className="w-[64%] sm:w-[62%] grid gap-2 text-center items-center"
                style={{
                  gridTemplateColumns: `repeat(${comparedPackages.length}, minmax(0, 1fr))`,
                }}
              >
                {comparedPackages.map((pkg) => {
                  const isPopular = pkg.isPopular;

                  return (
                    <div
                      key={pkg.id}
                      className={`relative p-2.5 rounded-2xl transition-all group ${
                        isPopular ? "bg-[#3B82F6]/[0.06] border border-[#3B82F6]/20" : "bg-[#FAF7F2]/80 border border-[#E8DFC8]/60"
                      }`}
                    >
                      {/* Remove Chip Button */}
                      {selectedPlanIds.length > 1 && (
                        <button
                          type="button"
                          onClick={() => togglePlanSelection(pkg.id)}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border border-[#E8DFC8] hover:bg-rose-50 hover:border-rose-300 text-[#777777] hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                          title={`Remove ${pkg.name} from comparison`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}

                      <span className="font-extrabold block text-xs sm:text-sm text-[#161616] truncate">
                        {pkg.name}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#FF4D2E] block mt-0.5">
                        {convertPrice(pkg.priceINR)}
                      </span>
                      <Link
                        href="/contact"
                        className="inline-block font-sans text-[11px] text-[#3B82F6] hover:underline font-bold mt-1"
                      >
                        Get started &rarr;
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Categorized Comparison Rows with Color Variations */}
            <div className="divide-y divide-[#E8DFC8]/70">
              {COMPARISON_CATEGORIES.map((category) => {
                const isExpanded = expandedCategories[category.categoryName] !== false;
                const theme = CATEGORY_THEMES[category.categoryName] || CATEGORY_THEMES["Design & Architecture"];

                return (
                  <div key={category.categoryName} className="p-0">
                    
                    {/* Category Header Row Toggle with Distinctive Color Theme */}
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.categoryName)}
                      className={`w-full px-5 sm:px-6 py-4.5 ${theme.headerBg} border-l-4 ${theme.borderLeft} flex items-center justify-between text-left font-sans font-extrabold text-sm sm:text-base ${theme.titleColor} transition-all cursor-pointer border-y border-[#E8DFC8]/60 shadow-2xs`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{theme.icon}</span>
                        <span className="tracking-tight">{category.categoryName}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#7A7165] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Features in this Category */}
                    {isExpanded && (
                      <div className="divide-y divide-[#E8DFC8]/40 bg-white">
                        {category.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex items-center px-5 sm:px-6 py-3.5 hover:bg-[#FAF7F2]/60 transition-colors text-xs sm:text-sm font-sans group"
                          >
                            {/* Feature Name & Intuitive Description (38% width) */}
                            <div className="w-[36%] sm:w-[38%] pr-4">
                              <span className={`font-semibold text-[#161616] block ${theme.hoverText} transition-colors`}>
                                {feature.name}
                              </span>
                              {feature.description && (
                                <span className="font-sans text-[11px] text-[#777777] hidden sm:block mt-0.5 leading-snug">
                                  {feature.description}
                                </span>
                              )}
                            </div>

                            {/* Values for Each User-Selected Plan */}
                            <div
                              className="w-[64%] sm:w-[62%] grid gap-2 text-center items-center"
                              style={{
                                gridTemplateColumns: `repeat(${comparedPackages.length}, minmax(0, 1fr))`,
                              }}
                            >
                              {comparedPackages.map((pkg) => {
                                const val = feature.values[pkg.id];
                                const isPopular = pkg.isPopular;

                                return (
                                  <div
                                    key={pkg.id}
                                    className={`flex items-center justify-center py-1 rounded-xl transition-colors ${
                                      isPopular ? "bg-[#3B82F6]/[0.03]" : ""
                                    }`}
                                  >
                                    {typeof val === "boolean" ? (
                                      val ? (
                                        <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${theme.checkBg} ${theme.checkText} shadow-2xs`} title="Included">
                                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                        </div>
                                      ) : (
                                        <span className="text-[#B5ACA0] font-bold text-sm select-none" title="Not Included">—</span>
                                      )
                                    ) : (
                                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${theme.badgeBg} ${theme.badgeText} truncate max-w-full shadow-2xs`}>
                                        {val}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 5. CLOSING CTA BANNER: DIRECT FOUNDER CONSULT */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#FF4D2E] via-[#FF5733] to-[#E03D1E] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-14 text-white shadow-[0_20px_50px_rgba(255,77,46,0.35)] border border-white/25 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/90 block">
              ● CUSTOM SCOPE &bull; ENTERPRISE INQUIRIES ●
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Need a custom multi-phase scope or enterprise roadmap?
            </h2>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
              Book a direct 20-minute discovery call with founding partners Nihal, Pranav &amp; Hemanth. We&apos;ll formulate a fixed-fee sprint plan within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white text-[#161616] hover:bg-[#FAF7F2] font-mono text-xs font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#FF4D2E]" />
                <span>Book 20-Min Call</span>
              </button>
            </Link>

            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button
                type="button"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-black/20 hover:bg-black/30 text-white font-mono text-xs font-bold border border-white/20 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#6B7A4E]" />
                <span>WhatsApp Direct</span>
              </button>
            </a>
          </div>
        </section>

      </div>

    </div>
  );
}

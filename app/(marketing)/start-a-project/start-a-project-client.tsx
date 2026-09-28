"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Layers,
  Phone,
  Mail,
  Building2,
  User,
  Calendar,
  Send,
  MessageSquare,
  Clock,
  Zap,
  Tag,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PRICING_PACKAGES } from "@/lib/content/pricing";
import { CONTACT_INFO } from "@/lib/contact";
import { BrandLogo } from "@/components/ui/BrandLogo";

const STEPS = [
  { id: 1, title: "Personal Details" },
  { id: 2, title: "Entity & Billing" },
  { id: 3, title: "Architecture Tier" },
  { id: 4, title: "Timeline & Budget" },
  { id: 5, title: "Brief Summary" },
];

const BUDGET_OPTIONS = [
  "Under ₹10,000 (Starter / Basic Sprints)",
  "₹10,000 – ₹20,000 (Standard / Premium)",
  "₹20,000 – ₹40,000 (Premium+ / Elite 3D / Signature)",
  "₹40,000+ (Custom Enterprise / Spatial 3D Platform)",
  "Flexible / Need Scoping Advice",
];

const LAUNCH_WINDOWS = [
  {
    id: "Urgent Sprint (1 Week)",
    title: "Urgent Sprint",
    duration: "1 Week",
    badge: "Fast-Track ⚡",
    icon: Zap,
    desc: "Priority fast-track delivery for imminent launches & investor demos",
  },
  {
    id: "2–3 Weeks (Standard)",
    title: "Standard Sprint",
    duration: "2–3 Weeks",
    badge: "Recommended",
    icon: Clock,
    desc: "Ideal timeline for high design fidelity, animations, and responsive QA",
  },
  {
    id: "1 Month",
    title: "Comprehensive Build",
    duration: "1 Month",
    badge: "Full Platform",
    icon: Calendar,
    desc: "In-depth architecture, custom CMS, or WebGL spatial shader tuning",
  },
  {
    id: "Flexible / Multi-Month",
    title: "Iterative / Multi-Month",
    duration: "Flexible",
    badge: "Enterprise",
    icon: Layers,
    desc: "Phased release milestones or ongoing dedicated sprint partnership",
  },
];

const COMMUNICATION_METHODS = [
  {
    id: "WhatsApp",
    title: "WhatsApp",
    badge: "Fastest ⚡",
    icon: MessageSquare,
    desc: "Direct group chat with Nihal & Pranav • Instant daily updates",
  },
  {
    id: "Email",
    title: "Email Dispatch",
    badge: "Formal",
    icon: Mail,
    desc: "Structured milestone briefs, Figma prototypes & formal invoices",
  },
  {
    id: "Direct Phone Call",
    title: "Direct Phone Call",
    badge: "Voice",
    icon: Phone,
    desc: "Scheduled 15-minute alignment call with founding partners",
  },
];

const CALL_TIME_SLOTS = [
  "🌅 Morning (10:00 AM – 1:00 PM IST)",
  "☀️ Afternoon (2:00 PM – 6:00 PM IST)",
  "🌙 Evening (7:00 PM – 10:00 PM IST)",
];

const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA / Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
];

function StartProjectWizard() {
  const searchParams = useSearchParams();
  const initialPackage = searchParams.get("package") || "";
  const initialService = searchParams.get("service") || "";
  const initialRef = searchParams.get("ref") || searchParams.get("referral") || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [countryCode, setCountryCode] = useState("+91");
  const [selectedTierTab, setSelectedTierTab] = useState<"core" | "growth" | "spatial">("core");

  const [formData, setFormData] = useState({
    // Step 1: Personal
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Step 2: Company & Address
    hasCompany: true,
    companyName: "",
    companyWebsite: "",
    streetAddress: "",
    streetAddressOptional: "",
    postCode: "",
    city: "",
    country: "India",

    // Step 3: Project Scope
    servicePackage: "PKG 02 — Basic (₹7,000)",
    projectType: "Full Website Architecture",
    description: "",
    referenceWebsites: "",

    // Step 4: Budget, Timeline & Channel Specifics
    budget: "₹10,000 – ₹20,000 (Standard / Premium)",
    timeline: "2–3 Weeks (Standard)",
    preferredContactMethod: "WhatsApp",
    channelCustomDetail: "",
    callTimeSlot: "☀️ Afternoon (2:00 PM – 6:00 PM IST)",
    referralCode: initialRef ? initialRef.toUpperCase() : "",
    botField: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [receiptNumber, setReceiptNumber] = useState("");

  // Pre-fill package or service if provided via query param
  useEffect(() => {
    if (initialRef) {
      setFormData((prev) => ({ ...prev, referralCode: initialRef.toUpperCase() }));
    }

    if (initialPackage) {
      const match = PRICING_PACKAGES.find(
        (p) =>
          p.id.toLowerCase() === initialPackage.toLowerCase() ||
          p.code.toLowerCase().replace(/\s+/g, "") === initialPackage.toLowerCase().replace(/\s+/g, "")
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          servicePackage: `${match.code} — ${match.name} (₹${match.priceINR.toLocaleString("en-IN")})`,
        }));
        if (match.category === "core" || match.category === "growth" || match.category === "spatial") {
          setSelectedTierTab(match.category);
        }
      }
    } else if (initialService) {
      const formattedTitle = initialService
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      setFormData((prev) => ({
        ...prev,
        servicePackage: `PKG 02 — Basic (₹7,000)`,
        projectType: formattedTitle,
        description: `I would like to commission a dedicated engineering sprint for ${formattedTitle}.`,
      }));
    }
  }, [initialPackage, initialService, initialRef]);

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim() || !formData.email.includes("@")) {
        newErrors.email = "Valid email is required";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (formData.hasCompany && !formData.companyName.trim()) {
        newErrors.companyName = "Company or brand name is required";
      }
      if (!formData.city.trim()) newErrors.city = "City is required";
    }

    if (step === 3) {
      if (!formData.servicePackage.trim()) {
        newErrors.servicePackage = "Please choose an architecture tier or package";
      }
      if (!formData.description.trim()) {
        newErrors.description = "Please provide brief project specifications";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 5) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 120, behavior: "smooth" });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const getChannelTargetSummary = () => {
    if (formData.preferredContactMethod === "WhatsApp") {
      return formData.channelCustomDetail.trim() || `${countryCode} ${formData.phone}`.trim() || "Primary Phone";
    }
    if (formData.preferredContactMethod === "Email") {
      return formData.channelCustomDetail.trim() || formData.email.trim() || "Primary Email";
    }
    if (formData.preferredContactMethod === "Direct Phone Call") {
      const phoneStr = formData.channelCustomDetail.trim() || `${countryCode} ${formData.phone}`.trim() || "Primary Phone";
      return `${phoneStr} (${formData.callTimeSlot})`;
    }
    return formData.preferredContactMethod;
  };

  const handleSubmitFinal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      setCurrentStep(1);
      return;
    }

    setStatus("loading");
    const generatedTicketId = `RLTZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(generatedTicketId);

    try {
      const channelInfo = getChannelTargetSummary();

      const payload = new FormData();
      payload.append("name", `${formData.firstName} ${formData.lastName}`.trim());
      payload.append("email", formData.email);
      payload.append("phone", `${countryCode} ${formData.phone}`.trim());
      payload.append(
        "company",
        formData.hasCompany
          ? formData.companyName.trim() || "Registered Company"
          : "Independent Solo Client"
      );
      payload.append("servicePackage", formData.servicePackage || "Standard Tier");
      payload.append("budget", formData.budget);
      payload.append(
        "description",
        `[${formData.projectType}] ${formData.description} | Location: ${formData.city}, ${formData.country} | Launch Window: ${formData.timeline} | Channel: ${formData.preferredContactMethod} (${channelInfo})${
          formData.referralCode ? ` | Referral Code: ${formData.referralCode}` : ""
        }`
      );
      payload.append("referenceWebsites", formData.referenceWebsites);
      payload.append("botField", formData.botField);

      const res = await fetch("/api/start-project", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setCurrentStep(5);
      } else {
        setStatus("error");
        setCurrentStep(5);
      }
    } catch {
      setStatus("success");
      setCurrentStep(5);
    }
  };

  // Filter packages strictly based on the 3 active section tiers
  const displayedPackages = PRICING_PACKAGES.filter((p) => p.category === selectedTierTab);

  return (
    <div className="relative w-full min-h-screen bg-[#F0F7F6]/80 -mt-24 sm:-mt-28 pt-28 sm:pt-36 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#0D7D70]/10 via-[#FAF7F2]/20 to-transparent blur-3xl pointer-events-none" />

      {/* Main Elevated Card Container */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-[32px] shadow-[0_20px_60px_rgba(13,125,112,0.08)] border border-[#E8DFC8]/70 overflow-hidden flex flex-col md:flex-row">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: MULTI-STEP TIMELINE SIDEBAR */}
        {/* ========================================================================= */}
        <div className="w-full md:w-[34%] bg-[#FAFDFD] p-7 sm:p-9 border-b md:border-b-0 md:border-r border-[#E2ECEB] flex flex-col justify-between">
          
          <div className="space-y-7">
            
            {/* Top Brand Logo */}
            <BrandLogo
              theme="light"
              size="lg"
              withGlow
            />

            {/* Step Title Header */}
            <div className="space-y-1">
              <h1 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-[#161616]">
                Start a project
              </h1>
              <p className="font-sans text-xs text-[#7A8887]">
                Commission a sprint directly with our founding partners.
              </p>
            </div>

            {/* Vertical Multi-Step Stepper Line */}
            <div className="space-y-5 pt-2">
              {STEPS.map((step, idx) => {
                const isCompleted = currentStep > step.id;
                const isCurrent = currentStep === step.id;

                return (
                  <div key={step.id} className="relative flex items-start gap-3.5 group">
                    
                    {/* Connecting Vertical Bar */}
                    {idx < STEPS.length - 1 && (
                      <div
                        className={`absolute left-4 top-8 w-0.5 h-6 -translate-x-1/2 transition-colors duration-300 ${
                          currentStep > step.id ? "bg-[#0D7D70]" : "bg-[#E2ECEB]"
                        }`}
                      />
                    )}

                    {/* Step Node Circle Indicator */}
                    <button
                      type="button"
                      onClick={() => {
                        if (step.id < currentStep) setCurrentStep(step.id);
                      }}
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                        isCompleted || isCurrent
                          ? "bg-[#0D7D70] text-white shadow-sm ring-4 ring-[#0D7D70]/15"
                          : "bg-[#EBF3F2] text-[#8C9E9D]"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </button>

                    {/* Step Label */}
                    <div className="pt-1">
                      <span
                        className={`font-sans text-xs sm:text-sm transition-colors duration-200 block ${
                          isCurrent
                            ? "font-extrabold text-[#161616]"
                            : isCompleted
                            ? "font-semibold text-[#0D7D70]"
                            : "font-normal text-[#9CB0AF]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Left Footer Partner Guarantee Note */}
          <div className="pt-6 mt-6 border-t border-[#E2ECEB] font-mono text-[11px] text-[#7A8887] space-y-1">
            <div className="flex items-center gap-1.5 text-[#0D7D70] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0D7D70] animate-pulse" />
              <span>DIRECT FOUNDER ACCESS</span>
            </div>
            <p className="text-[10px] text-[#9CB0AF]">
              Scoped &amp; engineered by Nihal, Pranav &amp; Hemanth.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: ACTIVE FORM PANEL */}
        {/* ========================================================================= */}
        <div className="w-full md:w-[66%] p-7 sm:p-10 flex flex-col justify-between space-y-8">
          
          <AnimatePresence mode="wait">
            
            {/* ------------------------------------------------------------- */}
            {/* STEP 1: PERSONAL DETAILS */}
            {/* ------------------------------------------------------------- */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Clean Editorial Step Header with Proper Spacing */}
                <div className="space-y-2 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center font-mono text-[10px] font-bold tracking-widest text-[#0D7D70] uppercase bg-[#0D7D70]/10 px-2.5 py-1 rounded-md border border-[#0D7D70]/20">
                      Phase 01 &bull; Personal Overview
                    </span>
                    <span className="text-[11px] font-mono text-[#0D7D70] font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Founder Confidential
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#161616] tracking-tight leading-snug">
                    Who are we engineering this sprint for?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A8887] leading-relaxed">
                    Primary contact credentials for milestone delivery, agreements, and live previews.
                  </p>
                </div>

                {/* First Name & Last Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#161616] block">
                    Your Full Name *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.firstName ? "border-rose-400 bg-rose-50/30" : "border-[#D5E4E3]"
                        } focus:border-[#0D7D70] focus:ring-2 focus:ring-[#0D7D70]/10 bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all`}
                      />
                      {errors.firstName && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.firstName}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.lastName ? "border-rose-400 bg-rose-50/30" : "border-[#D5E4E3]"
                        } focus:border-[#0D7D70] focus:ring-2 focus:ring-[#0D7D70]/10 bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all`}
                      />
                      {errors.lastName && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.lastName}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Details (Phone with Flag + Email) */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#161616] block">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          aria-label="Select Country Dial Code"
                          className="px-3 py-3 rounded-xl border border-[#D5E4E3] bg-[#FAFDFD] text-sm text-[#161616] font-medium outline-none cursor-pointer"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>

                        <input
                          type="tel"
                          placeholder="Your Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.phone ? "border-rose-400 bg-rose-50/30" : "border-[#D5E4E3]"
                          } focus:border-[#0D7D70] focus:ring-2 focus:ring-[#0D7D70]/10 bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all`}
                        />

                        <div className="p-2 text-[#9CB0AF] hover:text-[#0D7D70] cursor-help shrink-0" title="We use this for sprint WhatsApp updates and discovery coordination">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Email Field with Help Icon */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#161616] block">
                      Email Address *
                    </label>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <input
                          type="email"
                          placeholder="e.g. founder@yourcompany.com *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email ? "border-rose-400 bg-rose-50/30" : "border-[#D5E4E3]"
                          } focus:border-[#0D7D70] focus:ring-2 focus:ring-[#0D7D70]/10 bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all`}
                        />
                        <div className="p-2 text-[#9CB0AF] hover:text-[#0D7D70] cursor-help shrink-0" title="We send the sprint agreement, invoice, and Figma review links here">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.email}</span>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* STEP 2: COMPANY OR INDIVIDUAL CLIENT & ADDRESS */}
            {/* ------------------------------------------------------------- */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Clean Editorial Step Header with Proper Spacing */}
                <div className="space-y-2 pb-2">
                  <div className="flex items-center">
                    <span className="inline-flex items-center font-mono text-[10px] font-bold tracking-widest text-[#0D7D70] uppercase bg-[#0D7D70]/10 px-2.5 py-1 rounded-md border border-[#0D7D70]/20">
                      Phase 02 &bull; Organization &amp; Location
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#161616] tracking-tight leading-snug">
                    Client Entity &amp; Billing Jurisdiction
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A8887] leading-relaxed">
                    Specify whether you are commissioning as a registered enterprise or independent creator.
                  </p>
                </div>

                {/* Professional Entity Type Selection (Company vs Individual) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#161616] block">
                    Inquiry Type / Business Structure
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Option 1: Company */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, hasCompany: true })}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                        formData.hasCompany
                          ? "bg-[#0D7D70]/10 border-[#0D7D70] text-[#0D7D70] ring-2 ring-[#0D7D70]/10 shadow-xs"
                          : "bg-[#FAFDFD] border-[#D5E4E3] text-[#555555] hover:border-[#0D7D70]/40"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          formData.hasCompany
                            ? "bg-[#0D7D70] text-white"
                            : "bg-[#EBF3F2] text-[#8C9E9D]"
                        }`}
                      >
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-extrabold text-xs block text-[#161616]">
                          Registered Company
                        </span>
                        <span className="text-[10px] text-[#7A8887] block">
                          Brand, Agency, Startup or Enterprise
                        </span>
                      </div>
                    </button>

                    {/* Option 2: Individual / Solo Founder */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, hasCompany: false, companyName: "" })}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                        !formData.hasCompany
                          ? "bg-[#0D7D70]/10 border-[#0D7D70] text-[#0D7D70] ring-2 ring-[#0D7D70]/10 shadow-xs"
                          : "bg-[#FAFDFD] border-[#D5E4E3] text-[#555555] hover:border-[#0D7D70]/40"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          !formData.hasCompany
                            ? "bg-[#0D7D70] text-white"
                            : "bg-[#EBF3F2] text-[#8C9E9D]"
                        }`}
                      >
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-extrabold text-xs block text-[#161616]">
                          Solo Founder / Creator
                        </span>
                        <span className="text-[10px] text-[#7A8887] block">
                          Individual Client, Artist or Consultant
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Company Details (Only shown if hasCompany is true) */}
                {formData.hasCompany ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Company or Organization Name *"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.companyName ? "border-rose-400 bg-rose-50/30" : "border-[#D5E4E3]"
                        } focus:border-[#0D7D70] focus:ring-2 focus:ring-[#0D7D70]/10 bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all`}
                      />
                      {errors.companyName && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.companyName}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Company Website / Tax ID (optional)"
                        value={formData.companyWebsite}
                        onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-[#0D7D70]/5 border border-[#0D7D70]/20 flex items-center gap-2.5 text-xs text-[#0D7D70] font-medium">
                    <Check className="w-4 h-4 shrink-0 text-[#0D7D70]" />
                    <span>Inquiring as an Independent Solo Client — no corporate entity required.</span>
                  </div>
                )}

                {/* Address Section */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] font-bold text-[#7A8887] uppercase tracking-wider block">
                    {formData.hasCompany ? "REGISTERED OFFICE / BILLING ADDRESS" : "LOCATION & BILLING ADDRESS"}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      placeholder="Street Address"
                      value={formData.streetAddress}
                      onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, Suite, Unit (optional)"
                      value={formData.streetAddressOptional}
                      onChange={(e) =>
                        setFormData({ ...formData, streetAddressOptional: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Post Code"
                      value={formData.postCode}
                      onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all"
                    />
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="City *"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={`w-full px-3 py-3 rounded-xl border ${
                          errors.city ? "border-rose-400 bg-rose-50/30" : "border-[#D5E4E3]"
                        } focus:border-[#0D7D70] bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all`}
                      />
                      {errors.city && (
                        <span className="text-[11px] text-rose-500 font-medium">{errors.city}</span>
                      )}
                    </div>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      aria-label="Select Country"
                      className="w-full px-3 py-3 rounded-xl border border-[#D5E4E3] bg-[#FAFDFD] text-xs sm:text-sm text-[#161616] font-medium outline-none cursor-pointer"
                    >
                      <option value="India">India 🇮🇳</option>
                      <option value="United States">United States 🇺🇸</option>
                      <option value="United Kingdom">United Kingdom 🇬🇧</option>
                      <option value="United Arab Emirates">UAE 🇦🇪</option>
                      <option value="Germany">Germany 🇩🇪</option>
                      <option value="Australia">Australia 🇦🇺</option>
                      <option value="Singapore">Singapore 🇸🇬</option>
                      <option value="Other">Other Global</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* STEP 3: PROJECT SCOPE & LUXURY PACKAGE SELECTION */}
            {/* ------------------------------------------------------------- */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Clean Editorial Step Header with Proper Spacing */}
                <div className="space-y-2 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center font-mono text-[10px] font-bold tracking-wider text-[#0D7D70] uppercase bg-[#0D7D70]/10 px-2.5 py-1 rounded-md border border-[#0D7D70]/20">
                      Phase 03 &bull; Architecture &amp; Deliverables
                    </span>
                    <span className="font-mono text-[10px] text-[#0D7D70] font-bold bg-[#0D7D70]/10 px-2.5 py-1 rounded-full border border-[#0D7D70]/20 uppercase tracking-wider">
                      3 Curated Sections
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#161616] tracking-tight leading-snug">
                    Select Architecture Tier &amp; Scope
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A8887] leading-relaxed">
                    Choose one of our 3 curated engineering tiers tailored for high performance and conversion.
                  </p>
                </div>

                {/* Tier Selection Area */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#161616]">
                      Choose Architecture Tier / Service Package *
                    </label>
                  </div>

                  <div className="space-y-3">
                    {/* 3 Structured Section Category Switcher Tabs - Harmonious Distinct Color Accents */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-[#F6FAF9] border border-[#E2ECEB] rounded-2xl">
                      <button
                        type="button"
                        onClick={() => setSelectedTierTab("core")}
                        className={`py-2.5 px-3 rounded-xl transition-all cursor-pointer text-center flex flex-col items-center justify-center min-h-[58px] ${
                          selectedTierTab === "core"
                            ? "bg-[#0D7D70] text-white shadow-sm ring-1 ring-[#0D7D70]"
                            : "text-[#3E5553] hover:text-[#0D7D70] hover:bg-white/80"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold uppercase tracking-wider block text-center">
                          SECTION 01: Core Web
                        </span>
                        <span
                          className={`font-mono text-[10px] tracking-wide block mt-0.5 text-center ${
                            selectedTierTab === "core" ? "text-white/85" : "text-[#7A8887]"
                          }`}
                        >
                          (₹4k – ₹10k)
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedTierTab("growth")}
                        className={`py-2.5 px-3 rounded-xl transition-all cursor-pointer text-center flex flex-col items-center justify-center min-h-[58px] ${
                          selectedTierTab === "growth"
                            ? "bg-[#FF4D2E] text-white shadow-sm ring-1 ring-[#FF4D2E]"
                            : "text-[#5C4541] hover:text-[#FF4D2E] hover:bg-white/80"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold uppercase tracking-wider block text-center">
                          SECTION 02: Growth
                        </span>
                        <span
                          className={`font-mono text-[10px] tracking-wide block mt-0.5 text-center ${
                            selectedTierTab === "growth" ? "text-white/85" : "text-[#7A8887]"
                          }`}
                        >
                          (₹14k – ₹25k)
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedTierTab("spatial")}
                        className={`py-2.5 px-3 rounded-xl transition-all cursor-pointer text-center flex flex-col items-center justify-center min-h-[58px] ${
                          selectedTierTab === "spatial"
                            ? "bg-[#B45309] text-white shadow-sm ring-1 ring-[#B45309]"
                            : "text-[#5C4C38] hover:text-[#B45309] hover:bg-white/80"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold uppercase tracking-wider block text-center">
                          SECTION 03: 3D Spatial
                        </span>
                        <span
                          className={`font-mono text-[10px] tracking-wide block mt-0.5 text-center ${
                            selectedTierTab === "spatial" ? "text-white/85" : "text-[#7A8887]"
                          }`}
                        >
                          (₹32k – ₹55k+)
                        </span>
                      </button>
                    </div>

                    {/* Interactive Visual Cards Grid for the 3 packages in this section - Distinct Curated Colors */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 items-stretch">
                      {displayedPackages.map((pkg, idx) => {
                        // 3 Curated Brand Themes synchronized with the website
                        // Index 0: Deep Teal (#0D7D70) - Foundation / Precision
                        // Index 1: Vibrant Terracotta / Red (#FF4D2E) - Energy / Popular / Signature Z
                        // Index 2: Warm Bronze / Luxury Amber (#B45309) - High-End / Spatial / Enterprise
                        const cardThemes = [
                          {
                            cardBg: "bg-[#FAFDFD]",
                            borderDefault: "border-[#CFE2E0]",
                            borderHover: "hover:border-[#0D7D70]/60",
                            selectedClass: "bg-[#0D7D70]/8 border-[#0D7D70] ring-2 ring-[#0D7D70]/25 shadow-xs transform -translate-y-0.5",
                            badgeClass: "bg-[#0D7D70]/12 text-[#0D7D70] border border-[#0D7D70]/25",
                            priceClass: "text-[#0D7D70]",
                            checkActive: "bg-[#0D7D70] text-white border-transparent",
                          },
                          {
                            cardBg: "bg-[#FFFBF9]",
                            borderDefault: "border-[#FCD7D0]",
                            borderHover: "hover:border-[#FF4D2E]/60",
                            selectedClass: "bg-[#FF4D2E]/8 border-[#FF4D2E] ring-2 ring-[#FF4D2E]/25 shadow-xs transform -translate-y-0.5",
                            badgeClass: "bg-[#FF4D2E]/12 text-[#FF4D2E] border border-[#FF4D2E]/25",
                            priceClass: "text-[#FF4D2E]",
                            checkActive: "bg-[#FF4D2E] text-white border-transparent",
                          },
                          {
                            cardBg: "bg-[#FDFBF7]",
                            borderDefault: "border-[#EFE1C4]",
                            borderHover: "hover:border-[#B45309]/60",
                            selectedClass: "bg-[#B45309]/8 border-[#B45309] ring-2 ring-[#B45309]/25 shadow-xs transform -translate-y-0.5",
                            badgeClass: "bg-[#B45309]/12 text-[#B45309] border border-[#B45309]/25",
                            priceClass: "text-[#B45309]",
                            checkActive: "bg-[#B45309] text-white border-transparent",
                          },
                        ];

                        const currentTheme = cardThemes[idx % cardThemes.length];
                        const pkgLabel = `${pkg.code} — ${pkg.name} (₹${pkg.priceINR.toLocaleString("en-IN")})`;
                        const isSelected = formData.servicePackage.startsWith(pkg.code);

                        return (
                          <div
                            key={pkg.id}
                            onClick={() => {
                              setFormData({ ...formData, servicePackage: pkgLabel });
                              if (errors.servicePackage) {
                                setErrors((prev) => ({ ...prev, servicePackage: "" }));
                              }
                            }}
                            className={`relative p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between h-full group ${
                              isSelected
                                ? currentTheme.selectedClass
                                : `${currentTheme.cardBg} ${currentTheme.borderDefault} ${currentTheme.borderHover} hover:bg-white`
                            }`}
                          >
                            <div className="flex flex-col flex-1">
                              {/* Top Badges Row - Optically Centered */}
                              <div className="flex items-center justify-between gap-1.5 mb-2.5 min-h-[22px]">
                                <div className="flex items-center gap-1.5">
                                  <span
                                    className={`font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md uppercase inline-flex items-center leading-none ${currentTheme.badgeClass}`}
                                  >
                                    {pkg.code}
                                  </span>
                                  {pkg.isPopular && (
                                    <span className="font-mono text-[9px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#FF4D2E] text-white border border-[#FF4D2E]/30 inline-flex items-center leading-none shadow-xs">
                                      POPULAR
                                    </span>
                                  )}
                                </div>
                                <div
                                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors shrink-0 ml-auto ${
                                    isSelected
                                      ? currentTheme.checkActive
                                      : `border ${currentTheme.borderDefault} bg-white text-transparent`
                                  }`}
                                >
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                              </div>

                              {/* Card Title */}
                              <h4 className="font-sans font-bold text-sm sm:text-base text-[#161616] leading-snug tracking-tight">
                                {pkg.name}
                              </h4>

                              {/* Price Row - Exact Baseline Alignment & Strong Visual Anchor */}
                              <div className="mt-1 flex items-baseline gap-1.5">
                                <span className={`font-mono text-lg sm:text-xl font-black ${currentTheme.priceClass} tracking-tight`}>
                                  ₹{pkg.priceINR.toLocaleString("en-IN")}
                                </span>
                                <span className="font-mono text-[10px] text-[#7A8887] font-semibold uppercase tracking-wider">
                                  one-time
                                </span>
                              </div>

                              {/* Scope Description - Consistent line-clamp-2 across all cards */}
                              <p className="text-xs text-[#4A5554] line-clamp-2 mt-2 font-sans font-normal leading-relaxed flex-1">
                                {pkg.scope}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Selected Tier Banner - Synchronized with Selected Tier Palette */}
                    {(() => {
                      const isTeal =
                        formData.servicePackage.startsWith("PKG 01") ||
                        formData.servicePackage.startsWith("PKG 04") ||
                        formData.servicePackage.startsWith("PKG 07");
                      const isRed =
                        formData.servicePackage.startsWith("PKG 02") ||
                        formData.servicePackage.startsWith("PKG 05") ||
                        formData.servicePackage.startsWith("PKG 08");

                      const bannerColor = isTeal
                        ? { bg: "bg-[#0D7D70]/6", border: "border-[#0D7D70]/25", text: "text-[#0D7D70]" }
                        : isRed
                        ? { bg: "bg-[#FF4D2E]/6", border: "border-[#FF4D2E]/25", text: "text-[#FF4D2E]" }
                        : { bg: "bg-[#B45309]/6", border: "border-[#B45309]/25", text: "text-[#B45309]" };

                      return (
                        <div
                          className={`p-3 rounded-xl ${bannerColor.bg} border ${bannerColor.border} flex items-center justify-between text-xs transition-colors duration-200`}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${bannerColor.text} shrink-0`} />
                            <span className="text-[#161616] font-medium font-sans">
                              Selected Architecture:{" "}
                              <span className={`${bannerColor.text} font-mono font-bold`}>
                                {formData.servicePackage}
                              </span>
                            </span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {errors.servicePackage && (
                    <span className="text-[11px] text-rose-500 font-medium block">{errors.servicePackage}</span>
                  )}
                </div>

                {/* Vision & Deliverables */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-[#161616] block">
                    Describe Your Vision &amp; Key Requirements *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about what you are building, target audience, core interactive elements, or reference brand benchmarks..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.description ? "border-rose-400 bg-rose-50/30" : "border-[#D5E4E3]"
                    } focus:border-[#0D7D70] bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all resize-none`}
                  />
                  {errors.description && (
                    <span className="text-[11px] text-rose-500 font-medium block">{errors.description}</span>
                  )}
                </div>

                {/* Reference Websites */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-bold text-[#161616] block">
                    Reference Websites / Inspiration URLs (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. apple.com, linear.app, stripe.com (comma separated)"
                    value={formData.referenceWebsites}
                    onChange={(e) =>
                      setFormData({ ...formData, referenceWebsites: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-[#FAFDFD] text-sm text-[#161616] outline-none transition-all"
                  />
                </div>
              </motion.div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* STEP 4: BUDGET & TIMELINE & CHANNELS & REFERRAL CODE */}
            {/* ------------------------------------------------------------- */}
            {currentStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Clean Editorial Step Header with Generous, Balanced Line-Height and Spacing */}
                <div className="space-y-2 pb-2">
                  <div className="flex items-center">
                    <span className="inline-flex items-center font-mono text-[10px] font-bold tracking-widest text-[#0D7D70] uppercase bg-[#0D7D70]/10 px-2.5 py-1 rounded-md border border-[#0D7D70]/20">
                      Phase 04 &bull; Investment &amp; Delivery SLA
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#161616] tracking-tight leading-snug">
                    Budget Range &amp; Target Launch Window
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A8887] leading-relaxed">
                    Align turnaround expectations and preferred communication channels with our founding team.
                  </p>
                </div>

                {/* Budget Selection Pills */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-[#161616] block">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`p-3 rounded-xl text-left text-xs font-sans transition-all cursor-pointer border ${
                          formData.budget === opt
                            ? "bg-[#0D7D70]/10 border-[#0D7D70] text-[#0D7D70] font-bold shadow-2xs"
                            : "bg-[#FAFDFD] border-[#D5E4E3] text-[#333333] hover:border-[#0D7D70]/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Launch Window - Luxury Interactive Visual Cards */}
                <div className="space-y-2.5 pt-2">
                  <label className="text-xs font-bold text-[#161616] flex items-center justify-between">
                    <span>Target Launch Window *</span>
                    <span className="text-[10px] font-mono text-[#0D7D70]">Select turnaround expectation</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {LAUNCH_WINDOWS.map((win) => {
                      const isSelected = formData.timeline === win.id;
                      const Icon = win.icon;
                      return (
                        <button
                          key={win.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: win.id })}
                          className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? "bg-[#0D7D70]/8 border-[#0D7D70] ring-2 ring-[#0D7D70]/20 shadow-xs"
                              : "bg-[#FAFDFD] border-[#D5E4E3] hover:border-[#0D7D70]/40 text-[#444444]"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isSelected ? "bg-[#0D7D70] text-white shadow-xs" : "bg-[#EBF3F2] text-[#0D7D70]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-bold text-xs text-[#161616] block truncate">
                                {win.title}
                              </span>
                              <span
                                className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                                  isSelected
                                    ? "bg-[#0D7D70] text-white"
                                    : "bg-[#E2ECEB] text-[#556665]"
                                }`}
                              >
                                {win.duration}
                              </span>
                            </div>
                            <p className="text-[10px] text-[#7A8887] line-clamp-1 mt-0.5">
                              {win.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Communication Channel - Interactive Cards + Channel Detail Query */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold text-[#161616] flex items-center justify-between">
                    <span>Preferred Communication Channel *</span>
                    <span className="text-[10px] font-mono text-[#0D7D70]">How should we reach out?</span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {COMMUNICATION_METHODS.map((method) => {
                      const isSelected = formData.preferredContactMethod === method.id;
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              preferredContactMethod: method.id,
                              channelCustomDetail: "",
                            });
                          }}
                          className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-2.5 ${
                            isSelected
                              ? "bg-[#0D7D70]/8 border-[#0D7D70] ring-2 ring-[#0D7D70]/20 shadow-xs"
                              : "bg-[#FAFDFD] border-[#D5E4E3] hover:border-[#0D7D70]/40 text-[#444444]"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isSelected ? "bg-[#0D7D70] text-white" : "bg-[#EBF3F2] text-[#0D7D70]"
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span
                              className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                                isSelected
                                  ? "bg-[#0D7D70] text-white"
                                  : "bg-[#E2ECEB] text-[#556665]"
                              }`}
                            >
                              {method.badge}
                            </span>
                          </div>
                          <div>
                            <span className="font-bold text-xs text-[#161616] block">
                              {method.title}
                            </span>
                            <p className="text-[10px] text-[#7A8887] line-clamp-2 mt-0.5">
                              {method.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Channel-Specific Follow-Up Input: Asking which phone number / which email / which call slot */}
                  <div className="p-4 rounded-2xl bg-[#FAFDFD] border border-[#0D7D70]/30 space-y-2.5 transition-all">
                    {formData.preferredContactMethod === "WhatsApp" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-[11px] font-mono font-bold text-[#0D7D70] uppercase flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp Number for Founder Chat</span>
                          </label>
                          <span className="text-[10px] text-[#7A8887]">
                            Default: {countryCode} {formData.phone || "primary number"}
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder={`Using ${countryCode} ${formData.phone || "your number"} (or type different WhatsApp number)`}
                          value={formData.channelCustomDetail}
                          onChange={(e) => setFormData({ ...formData, channelCustomDetail: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-white text-xs text-[#161616] outline-none transition-all placeholder:text-[#9CB0AF]"
                        />
                        <span className="text-[10px] text-[#7A8887] block">
                          Leave blank to use the primary phone number from Step 1.
                        </span>
                      </div>
                    )}

                    {formData.preferredContactMethod === "Email" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-[11px] font-mono font-bold text-[#0D7D70] uppercase flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" />
                            <span>Email Address for Sprint Milestones &amp; Agreements</span>
                          </label>
                          <span className="text-[10px] text-[#7A8887]">
                            Default: {formData.email || "primary email"}
                          </span>
                        </div>
                        <input
                          type="email"
                          placeholder={`Using ${formData.email || "your email"} (or type alternate project/billing email)`}
                          value={formData.channelCustomDetail}
                          onChange={(e) => setFormData({ ...formData, channelCustomDetail: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-white text-xs text-[#161616] outline-none transition-all placeholder:text-[#9CB0AF]"
                        />
                        <span className="text-[10px] text-[#7A8887] block">
                          Leave blank to use the email address from Step 1.
                        </span>
                      </div>
                    )}

                    {formData.preferredContactMethod === "Direct Phone Call" && (
                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <label className="text-[11px] font-mono font-bold text-[#0D7D70] uppercase flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5" />
                              <span>Direct Phone Number for Call</span>
                            </label>
                            <span className="text-[10px] text-[#7A8887]">
                              Default: {countryCode} {formData.phone || "primary number"}
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder={`Using ${countryCode} ${formData.phone || "your number"} (or type direct executive line)`}
                            value={formData.channelCustomDetail}
                            onChange={(e) => setFormData({ ...formData, channelCustomDetail: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] bg-white text-xs text-[#161616] outline-none transition-all placeholder:text-[#9CB0AF]"
                          />
                        </div>

                        {/* Preferred Time Window for Call */}
                        <div className="space-y-1.5 pt-1">
                          <label className="text-[10px] font-mono font-bold uppercase text-[#556665] block">
                            Preferred Call Time Window
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {CALL_TIME_SLOTS.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setFormData({ ...formData, callTimeSlot: slot })}
                                className={`py-2 px-2.5 rounded-xl text-[10px] font-mono transition-all text-center cursor-pointer border ${
                                  formData.callTimeSlot === slot
                                    ? "bg-[#0D7D70] text-white border-[#0D7D70] font-bold shadow-2xs"
                                    : "bg-white border-[#D5E4E3] text-[#555555] hover:border-[#0D7D70]/40"
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Single, Clear Referral / Partner Discount Code Input */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-[#161616] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#0D7D70]" />
                      <span>Referral / Partner Code (Optional)</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#7A8887]">Leave blank if none</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. RAULTZ-VIP, FOUNDER50, REF-2026"
                    value={formData.referralCode}
                    onChange={(e) => setFormData({ ...formData, referralCode: e.target.value.toUpperCase() })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5E4E3] focus:border-[#0D7D70] focus:ring-2 focus:ring-[#0D7D70]/10 bg-[#FAFDFD] text-sm text-[#161616] font-mono outline-none transition-all placeholder:font-sans uppercase"
                  />
                  <span className="text-[10px] text-[#9CB0AF] block">
                    If you received a referral code or partner pass from a client or founder, enter it here.
                  </span>
                </div>

                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="botField"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </motion.div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* STEP 5: RECEIPT & SUMMARY CONFIRMATION */}
            {/* ------------------------------------------------------------- */}
            {currentStep === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2 py-1">
                  <div className="w-12 h-12 rounded-full bg-[#0D7D70]/15 text-[#0D7D70] flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="font-sans text-2xl font-black text-[#161616] tracking-tight">
                    Commission Brief Received
                  </h3>
                  <p className="font-sans text-xs text-[#666666] max-w-md mx-auto">
                    Logged directly into our founder queue. Nihal, Pranav &amp; Hemanth will review the specifications and reach out within 24 hours.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="p-6 rounded-2xl bg-[#FAFDFD] border border-[#D5E4E3] space-y-4 font-sans text-xs">
                  <div className="flex items-center justify-between border-b border-[#E2ECEB] pb-3">
                    <div>
                      <span className="font-mono text-[10px] text-[#7A8887] uppercase font-bold block">
                        COMMISSION INTAKE TICKET
                      </span>
                      <span className="font-mono font-black text-[#0D7D70] text-base">
                        {receiptNumber || "RLTZ-784920"}
                      </span>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-[#0D7D70]/10 text-[#0D7D70] font-mono text-[10px] font-bold border border-[#0D7D70]/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D7D70] animate-pulse" />
                      <span>LOGGED TO FOUNDER QUEUE</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[#333333]">
                    <div>
                      <span className="text-[#888888] text-[11px] block">Client / Entity:</span>
                      <span className="font-bold text-sm text-[#161616]">
                        {formData.firstName} {formData.lastName}
                        {formData.hasCompany && formData.companyName ? ` (${formData.companyName})` : ""}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#888888] text-[11px] block">Selected Architecture Tier:</span>
                      <span className="font-bold text-sm text-[#0D7D70]">
                        {formData.servicePackage || "Standard Tier"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#888888] text-[11px] block">Budget Range:</span>
                      <span className="font-medium">{formData.budget}</span>
                    </div>
                    <div>
                      <span className="text-[#888888] text-[11px] block">Target Launch SLA:</span>
                      <span className="font-medium">{formData.timeline}</span>
                    </div>
                    <div>
                      <span className="text-[#888888] text-[11px] block">Preferred Channel:</span>
                      <span className="font-medium">
                        {formData.preferredContactMethod} &bull; <span className="font-bold text-[#0D7D70]">{getChannelTargetSummary()}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-[#888888] text-[11px] block">Client Location:</span>
                      <span className="font-medium">{formData.city || "Direct"}, {formData.country}</span>
                    </div>
                  </div>

                  {/* Referral Code Row: ONLY SHOWN IF ACTUALLY ENTERED BY USER */}
                  {formData.referralCode && formData.referralCode.trim() !== "" && (
                    <div className="pt-3 border-t border-[#E2ECEB] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#0D7D70]">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-[11px] font-semibold">Referral / Promo Code Applied:</span>
                      </div>
                      <span className="font-mono font-black text-xs text-[#0D7D70] bg-[#0D7D70]/10 px-2.5 py-1 rounded-md border border-[#0D7D70]/20">
                        {formData.referralCode.trim().toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Instant Founder WhatsApp Connect */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Hi Raultz Founders! I just submitted project brief ${receiptNumber} for ${formData.servicePackage}. Target launch: ${formData.timeline}. Preferred channel: ${formData.preferredContactMethod} (${getChannelTargetSummary()}).${
                        formData.referralCode ? ` Referral code: ${formData.referralCode}.` : ""
                      } Looking forward to discussing!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button
                      type="button"
                      className="w-full py-3.5 px-5 rounded-xl bg-[#0D7D70] hover:bg-[#0A645A] text-white font-sans text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Direct WhatsApp with Nihal &amp; Pranav</span>
                    </button>
                  </a>

                  <Link href="/" className="w-full sm:w-auto shrink-0">
                    <button
                      type="button"
                      className="w-full py-3.5 px-5 rounded-xl bg-white border border-[#D5E4E3] hover:bg-[#FAFDFD] text-[#161616] font-sans text-xs font-bold transition-all cursor-pointer text-center"
                    >
                      Back to Home
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* ========================================================================= */}
          {/* BOTTOM STEP NAVIGATION FOOTER (Back & Next Buttons) */}
          {/* ========================================================================= */}
          {currentStep < 5 && (
            <div className="pt-6 border-t border-[#E8DFC8]/70 flex items-center justify-between">
              
              {/* Back Button */}
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-3 rounded-xl border border-[#D5E4E3] bg-white hover:bg-[#FAFDFD] text-xs font-sans font-bold text-[#666666] hover:text-[#161616] transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {/* Next / Submit Button */}
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3 rounded-xl bg-[#0D7D70] hover:bg-[#0A645A] text-white text-xs sm:text-sm font-sans font-bold transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitFinal}
                  disabled={status === "loading"}
                  className="px-7 py-3 rounded-xl bg-[#0D7D70] hover:bg-[#0A645A] text-white text-xs sm:text-sm font-sans font-bold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Submit Commission</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default function StartAProjectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-sm">Loading Project Wizard...</div>}>
      <StartProjectWizard />
    </Suspense>
  );
}

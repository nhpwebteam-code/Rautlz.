"use client";

import React, { useState, useRef, MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";

// --- Staggered Entrance Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Interactive 3D Tilt Card with Cursor Spotlight ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  spotlightColor?: string;
}

function TiltCard({
  children,
  className = "",
  href,
  target,
  rel,
  spotlightColor = "rgba(255, 77, 46, 0.12)",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 260,
    damping: 24,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorPos({ x, y });
    mouseX.set((x / rect.width) - 0.5);
    mouseY.set((y / rect.height) - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const content = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative overflow-hidden rounded-2xl bg-[#F9F5EE] border border-[#E8DFC8]/90 transition-shadow duration-300 shadow-2xs hover:shadow-[0_16px_36px_rgba(31,27,22,0.08)] ${className}`}
    >
      {/* Dynamic Cursor Spotlight Sheen */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none absolute -inset-px z-10 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${cursorPos.x}px ${cursorPos.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Shimmer Border Accent */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/40" />

      {/* Card Content with 3D Depth */}
      <div className="relative z-20" style={{ transform: "translateZ(18px)" }}>
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="block group">
        {content}
      </a>
    );
  }

  return content;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "", // Honeypot spam protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          contactInfo: formData.email,
          preferredTime: formData.subject,
          note: formData.message,
          botField: formData.botField,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMessage(
          data.message || "Thank you! Your message has been sent successfully. Our founding triad will reach out within 2 hours."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botField: "",
        });
      } else {
        setStatus("error");
        setServerMessage(data.error || "Failed to send message. Please message us on WhatsApp directly.");
      }
    } catch {
      setStatus("error");
      setServerMessage("A network error occurred. Please message us on WhatsApp directly.");
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF7F2] -mt-24 sm:-mt-28 pt-28 sm:pt-36 pb-24 sm:pb-32">
      
      {/* 1. Dynamic Animated Ambient Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.55, 0.35],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-[#FCE3D4]/60 via-[#FF4D2E]/12 to-transparent blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [-20, 20, -20],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-40 w-[550px] h-[550px] bg-[#6B7A4E]/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-[#8A6F52]/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Tactile Architectural Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#1F1B16 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 space-y-12 sm:space-y-16"
      >
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER: "Contact Us" (Motion Cascading Reveal) */}
        {/* ========================================================================= */}
        <motion.section
          variants={itemVariants}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <motion.h1
            className="font-sans text-4xl sm:text-6xl font-extrabold tracking-tight text-[#161616]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Contact <span className="text-[#FF4D2E]">Us</span>
          </motion.h1>
          <motion.p
            className="font-sans text-sm sm:text-base text-[#666666] leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Have questions or ready to transform your business with bespoke digital architecture? Direct access to our founding partners.
          </motion.p>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. MAIN 2-COLUMN CONTACT SECTION (3D Magnetic Physics + Specular Glaze) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: 2x2 Interactive Tilt Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Phone */}
              <TiltCard
                href="tel:+919014567787"
                spotlightColor="rgba(255, 77, 46, 0.18)"
                className="p-5 text-center flex flex-col items-center space-y-3 hover:border-[#FF4D2E]/60 hover:bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE6D8] group-hover:bg-[#FF4D2E]/15 border border-[#E8DFC8] flex items-center justify-center text-[#161616] group-hover:text-[#FF4D2E] transition-all duration-300 group-hover:scale-110 shadow-xs">
                  <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-[#161616] flex items-center justify-center gap-1">
                    <span>Phone</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF4D2E]" />
                  </h3>
                  <p className="font-sans text-xs text-[#666666] mt-0.5 group-hover:text-[#161616] transition-colors font-medium">
                    +91 90145 67787
                  </p>
                </div>
              </TiltCard>

              {/* Card 2: Whatsapp */}
              <TiltCard
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                spotlightColor="rgba(107, 122, 78, 0.20)"
                className="p-5 text-center flex flex-col items-center space-y-3 hover:border-[#6B7A4E]/60 hover:bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE6D8] group-hover:bg-[#6B7A4E]/15 border border-[#E8DFC8] flex items-center justify-center text-[#161616] group-hover:text-[#6B7A4E] transition-all duration-300 group-hover:scale-110 shadow-xs">
                  <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-115" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-[#161616] flex items-center justify-center gap-1">
                    <span>Whatsapp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#6B7A4E]" />
                  </h3>
                  <p className="font-sans text-xs text-[#666666] mt-0.5 group-hover:text-[#161616] transition-colors font-medium">
                    +91 70136 29081
                  </p>
                </div>
              </TiltCard>

              {/* Card 3: Email */}
              <TiltCard
                href="mailto:raultz.webteam@gmail.com"
                spotlightColor="rgba(255, 77, 46, 0.18)"
                className="p-5 text-center flex flex-col items-center space-y-3 hover:border-[#FF4D2E]/60 hover:bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE6D8] group-hover:bg-[#FF4D2E]/15 border border-[#E8DFC8] flex items-center justify-center text-[#161616] group-hover:text-[#FF4D2E] transition-all duration-300 group-hover:scale-110 shadow-xs">
                  <Mail className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                </div>
                <div className="w-full">
                  <h3 className="font-sans text-sm font-bold text-[#161616] flex items-center justify-center gap-1">
                    <span>Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF4D2E]" />
                  </h3>
                  <p className="font-sans text-xs text-[#666666] mt-0.5 truncate group-hover:text-[#161616] transition-colors font-medium">
                    raultz.webteam@gmail.com
                  </p>
                </div>
              </TiltCard>

              {/* Card 4: Our Studio */}
              <TiltCard
                spotlightColor="rgba(138, 111, 82, 0.18)"
                className="p-5 text-center flex flex-col items-center space-y-3 hover:border-[#8A6F52]/60 hover:bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE6D8] border border-[#E8DFC8] flex items-center justify-center text-[#161616] transition-transform duration-300 group-hover:scale-110 shadow-xs">
                  <MapPin className="w-5 h-5 text-[#8A6F52]" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-[#161616]">
                    Our Studio
                  </h3>
                  <p className="font-sans text-xs text-[#666666] mt-0.5 font-medium">
                    Hyderabad, India • Edge
                  </p>
                </div>
              </TiltCard>

            </div>

          </motion.div>

          {/* RIGHT COLUMN: "Get In Touch" Form Container (with Specular Card Frame) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <motion.div
              whileHover={{ boxShadow: "0 22px 60px rgba(31,27,22,0.08)" }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl p-7 sm:p-10 border border-[#E8DFC8] shadow-[0_16px_50px_rgba(31,27,22,0.05)] space-y-6 overflow-hidden"
            >
              
              {/* Subtle Ambient Corner Accent */}
              <div className="absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br from-[#FF4D2E]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Form Title & Subtitle */}
              <div className="space-y-1.5 relative z-10">
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#161616]">
                  Get In Touch
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Send a direct inquiry to our triad. We review project goals and respond within 2 hours.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10" noValidate>
                
                {/* Honeypot Spam Protection Field */}
                <input
                  type="text"
                  name="botField"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name Input with Smooth Focus Glow */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block font-sans text-xs font-bold text-[#333333]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border transition-all duration-200 ${
                      errors.name
                        ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                        : "border-[#E8DFC8] hover:border-[#D5C6AC] focus:border-[#FF4D2E] focus:ring-2 focus:ring-[#FF4D2E]/20"
                    } text-[#161616] text-sm font-sans placeholder-[#999999] focus:outline-none`}
                  />
                  {errors.name && (
                    <p className="font-sans text-xs text-rose-500 pl-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Input with Smooth Focus Glow */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block font-sans text-xs font-bold text-[#333333]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border transition-all duration-200 ${
                      errors.email
                        ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                        : "border-[#E8DFC8] hover:border-[#D5C6AC] focus:border-[#FF4D2E] focus:ring-2 focus:ring-[#FF4D2E]/20"
                    } text-[#161616] text-sm font-sans placeholder-[#999999] focus:outline-none`}
                  />
                  {errors.email && (
                    <p className="font-sans text-xs text-rose-500 pl-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject Input with Smooth Focus Glow */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="block font-sans text-xs font-bold text-[#333333]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. New Website Build, 3D WebGL Project, Brand Redesign"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border transition-all duration-200 ${
                      errors.subject
                        ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                        : "border-[#E8DFC8] hover:border-[#D5C6AC] focus:border-[#FF4D2E] focus:ring-2 focus:ring-[#FF4D2E]/20"
                    } text-[#161616] text-sm font-sans placeholder-[#999999] focus:outline-none`}
                  />
                  {errors.subject && (
                    <p className="font-sans text-xs text-rose-500 pl-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Textarea with Smooth Focus Glow */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block font-sans text-xs font-bold text-[#333333]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project goals, milestones, or questions..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border transition-all duration-200 ${
                      errors.message
                        ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                        : "border-[#E8DFC8] hover:border-[#D5C6AC] focus:border-[#FF4D2E] focus:ring-2 focus:ring-[#FF4D2E]/20"
                    } text-[#161616] text-sm font-sans placeholder-[#999999] focus:outline-none resize-none min-h-[120px]`}
                  />
                  {errors.message && (
                    <p className="font-sans text-xs text-rose-500 pl-1">{errors.message}</p>
                  )}
                </div>

                {/* Live Status Feedback Alerts */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="p-4 rounded-xl bg-[#6B7A4E]/10 border border-[#6B7A4E]/30 text-[#6B7A4E] text-xs sm:text-sm font-sans flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{serverMessage}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs sm:text-sm font-sans flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{serverMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Send Now Button with Kinetic Shimmer & Spring Feedback */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative w-full py-4 px-6 rounded-xl bg-[#C1673B] hover:bg-[#A9552C] text-white font-sans font-bold text-sm sm:text-base transition-colors duration-200 shadow-md hover:shadow-[0_12px_32px_rgba(193,103,59,0.38)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-2 group overflow-hidden"
                  >
                    {/* Shimmer Sweep Animation on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send Now</span>
                        <Send className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </motion.button>
                </div>

              </form>
            </motion.div>
          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}

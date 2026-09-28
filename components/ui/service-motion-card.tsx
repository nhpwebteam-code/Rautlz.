"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { LucideIcon, ArrowRight, Sparkles } from "lucide-react";
import { ServiceBackgroundMotion } from "./service-card-motions";

interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  deliverables?: string[];
  impact?: string;
  tier?: string;
}

interface ServiceMotionCardProps {
  service: ServiceItem;
  index: number;
  onClick: () => void;
}

export function ServiceMotionCard({ service, index, onClick }: ServiceMotionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const Icon = service.icon;
  const indexFormatted = String(index + 1).padStart(2, "0");

  // Mouse coordinate motion values (0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for 3D perspective tilt
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 280,
    damping: 24,
  });

  // Spotlight center coordinates (pixels/percentage)
  const spotX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const spotY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: 1100,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer select-none rounded-[26px] p-[1px] transition-all duration-300"
    >
      {/* 1. Animated Glowing Border Beam / Neon Edge Shimmer */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 -m-[1px] rounded-[26px] pointer-events-none z-0 overflow-hidden"
      >
        <div
          className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0 320deg, #FF4D2E 340deg, #FFA07A 360deg)",
          }}
        />
      </motion.div>

      {/* 2. Main 3D Tilted Card Body */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.025 : 1,
          y: isHovered ? -6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 24,
        }}
        className="relative w-full h-full min-h-[220px] rounded-[25px] bg-[#121212] border border-[#262626] p-7 text-center shadow-[0_10px_32px_rgba(0,0,0,0.4)] group-hover:shadow-[0_20px_50px_rgba(255,77,46,0.22)] group-hover:border-[#FF4D2E]/50 overflow-hidden flex flex-col items-center justify-between"
      >
        {/* Bespoke Background Motion Graphics */}
        <ServiceBackgroundMotion serviceId={service.id} isHovered={isHovered} />

        {/* Dynamic Cursor Spotlight Flashlight Layer */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10 rounded-[inherit] transition-opacity duration-300"
            style={{
              background: `radial-gradient(340px circle at ${spotX.get()} ${spotY.get()}, rgba(255, 77, 46, 0.18), transparent 75%)`,
            }}
          />
        )}

        {/* High-Tech Architectural Corner Marks */}
        <div className="absolute top-3 left-3.5 font-mono text-[9px] text-white/30 tracking-widest pointer-events-none group-hover:text-[#FF4D2E]/80 transition-colors">
          +{indexFormatted}
        </div>
        <div className="absolute top-3 right-3.5 font-mono text-[9px] text-white/20 pointer-events-none group-hover:text-[#FF4D2E]/60 transition-colors">
          +
        </div>

        {/* Top Floating Holographic Icon Socket (with 3D depth) */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative mt-2 flex flex-col items-center justify-center z-20"
        >
          {/* Subtle Ambient Icon Halo */}
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.3, 1] : 1,
              opacity: isHovered ? [0.4, 0.8, 0.4] : 0.2,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-16 h-16 rounded-2xl bg-[#FF4D2E] blur-xl pointer-events-none"
          />

          <motion.div
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-16 h-16 rounded-2xl bg-[#1C1C1C]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FF4D2E] group-hover:bg-[#FF4D2E] group-hover:text-white group-hover:border-[#FF4D2E] transition-all duration-300 shadow-md"
          >
            <Icon className="w-8 h-8 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* Middle: Service Title with 3D Depth */}
        <div
          style={{ transform: "translateZ(24px)" }}
          className="relative z-20 my-auto py-3 px-1 w-full"
        >
          <h3 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#FF4D2E] transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Bottom Interactive Reveal Indicator */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative z-20 w-full flex items-center justify-center pt-1"
        >
          <motion.div
            animate={{
              y: isHovered ? 0 : 4,
              opacity: isHovered ? 1 : 0.4,
            }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#FF4D2E] font-bold"
          >
            <Sparkles className="w-3 h-3 text-[#FF4D2E]" />
            <span>VIEW SPRINT</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

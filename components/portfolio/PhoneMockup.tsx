"use client";

import Image from "next/image";
import { Sparkles, Wifi, Battery, Signal } from "lucide-react";
import type { ProjectMobileShot } from "@/data/projects";

interface PhoneMockupProps {
  shot: ProjectMobileShot;
  index: number;
}

export function PhoneMockup({ shot, index }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center space-y-6 group">
      {/* Smartphone Chassis Container with Luxury Bezel */}
      <div className="relative w-full max-w-[285px] sm:max-w-[310px] aspect-[9/19.2] rounded-[48px] p-3 sm:p-3.5 bg-gradient-to-b from-[#2E2823] via-[#1C1815] to-[#120F0D] border-2 border-[#4A4036] shadow-[0_25px_60px_-12px_rgba(31,27,22,0.4),0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:-translate-y-2">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3 pointer-events-none shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-[#2D2D2D]" />
          <span className="w-2 h-2 rounded-full bg-[#0D2434]/80" />
        </div>

        {/* Status Bar Icons */}
        <div className="absolute top-5 left-7 right-7 z-20 flex items-center justify-between text-white/90 text-[10px] font-mono font-medium pointer-events-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 opacity-80">
            <Signal className="w-2.5 h-2.5" />
            <Wifi className="w-2.5 h-2.5" />
            <Battery className="w-3 h-3" />
          </div>
        </div>

        {/* Screen Display Frame */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#0F0D0B] border border-black/80 shadow-inner">
          <Image
            src={shot.image}
            alt={shot.title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Screen Glare & Lighting Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />

          {/* Bottom Screen UI Glass Card Overlay */}
          <div className="absolute bottom-4 left-3 right-3 z-20 bg-black/75 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-white pointer-events-none shadow-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[9px] font-bold text-[#FF4D2E] uppercase tracking-wider">
                MOBILE PROTO // 0{index + 1}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
            </div>
            <p className="font-sans text-xs font-bold text-white truncate">
              {shot.title}
            </p>
          </div>

          {/* iOS Bottom Home Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/70 rounded-full z-30 pointer-events-none shadow-xs" />
        </div>
      </div>

      {/* Screen Title & Subtitle Below Device */}
      <div className="text-center max-w-[280px] space-y-1.5">
        <span className="font-mono text-[11px] font-bold text-[#FF4D2E] tracking-wider uppercase block">
          VIEW 0{index + 1} // RESPONSIVE SCREEN
        </span>
        <h4 className="font-sans text-lg font-bold text-[#1F1B16] tracking-tight leading-tight">
          {shot.title}
        </h4>
        <p className="font-sans text-xs text-[#6E655A] leading-relaxed">
          {shot.subtitle}
        </p>
      </div>
    </div>
  );
}

export default PhoneMockup;

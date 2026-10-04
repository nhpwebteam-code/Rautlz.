"use client";

import Image from "next/image";
import { Sparkles, Globe, ShieldCheck } from "lucide-react";

interface LaptopMockupProps {
  imageSrc: string;
  alt: string;
  badgeText?: string;
}

export function LaptopMockup({
  imageSrc,
  alt,
  badgeText = "DESKTOP VIEWPORT // 1440 × 900",
}: LaptopMockupProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Laptop Top Lid Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Outer Matte Titanium Display Shell */}
        <div className="relative rounded-[24px] sm:rounded-[34px] p-2.5 sm:p-4 bg-[#1C1815] shadow-[0_30px_70px_-15px_rgba(31,27,22,0.3),0_0_0_1px_rgba(255,255,255,0.08)] border border-[#3E362E]">
          
          {/* Top Notch / Camera Housing */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-3 sm:h-4 bg-[#141210] rounded-b-lg flex items-center justify-center gap-1.5 z-20 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A2420] inline-block" />
            <span className="w-1 h-1 rounded-full bg-[#0E3547] inline-block" />
          </div>

          {/* Screen Glass Frame */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.6] rounded-[16px] sm:rounded-[22px] overflow-hidden bg-[#0D0B0A] border border-black/50 shadow-inner">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top"
            />
            {/* Screen Glare Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07] pointer-events-none" />

            {/* Bottom Status Spec Overlay */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white font-mono text-[10px] sm:text-xs pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-[#FF4D2E]" />
                <span>{badgeText}</span>
              </span>
              <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 hidden sm:inline-flex items-center gap-1.5 text-[#FAF7F2]">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>VERIFIED PRODUCTION CODEBASE</span>
              </span>
            </div>
          </div>
        </div>

        {/* Laptop Bottom Chassis / Keyboard Base */}
        <div className="relative mx-auto w-[104%] -left-[2%] h-4 sm:h-6 bg-gradient-to-b from-[#2C2621] via-[#211D19] to-[#151210] rounded-b-[18px] sm:rounded-b-[26px] shadow-[0_16px_30px_rgba(0,0,0,0.35)] border-t border-[#463D34]">
          {/* Thumb Opening Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1.5 sm:h-2 bg-[#171412] rounded-b-md" />
        </div>
      </div>

      {/* Ambient Surface Glow in Raultz Terracotta Palette */}
      <div className="w-[85%] h-10 bg-[#FF4D2E]/15 blur-3xl rounded-full -mt-2 pointer-events-none" />
    </div>
  );
}

export default LaptopMockup;

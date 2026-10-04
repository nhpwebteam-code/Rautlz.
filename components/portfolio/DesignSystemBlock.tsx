"use client";

import { useState } from "react";
import { Check, Copy, Sparkles, ArrowRight } from "lucide-react";
import type { ProjectColor, ProjectFonts } from "@/data/projects";

interface DesignSystemBlockProps {
  palette: ProjectColor[];
  fonts: ProjectFonts;
}

export function DesignSystemBlock({ palette, fonts }: DesignSystemBlockProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="space-y-8">
      {/* 1. Color Palette Swatches */}
      <div className="space-y-4">
        <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider block">
          [ 01 // CHROMATIC TOKENS ]
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {palette.map((color) => (
            <div
              key={color.hex}
              onClick={() => handleCopy(color.hex)}
              className="group bg-[#FAF7F2] rounded-2xl p-4 border border-[#E2D6C3] hover:border-[#1F1B16]/30 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-sm"
              title="Click to copy HEX code"
            >
              {/* Color Tile */}
              <div
                className="w-full aspect-[4/3] rounded-xl border border-black/10 mb-3 shadow-inner relative flex items-center justify-center"
                style={{ backgroundColor: color.hex }}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 pointer-events-none">
                  {copiedHex === color.hex ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </div>
              </div>

              {/* Swatch Details */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-[#1F1B16]">
                    {color.name}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#FF4D2E]">
                    {color.hex}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#6E655A] block truncate">
                  {color.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Typographic Scale & UI Grammar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Typography Specs (7 cols) */}
        <div className="lg:col-span-7 bg-[#EFE6D8]/60 border border-[#E2D6C3] rounded-2xl p-6 sm:p-7 space-y-5">
          <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider block">
            [ 02 // TYPOGRAPHIC HIERARCHY ]
          </span>

          {/* Heading Font Sample */}
          <div className="space-y-1.5 pb-4 border-b border-[#E2D6C3]">
            <span className="font-mono text-[10px] font-semibold text-[#FF4D2E] uppercase">
              DISPLAY HEADING SPEC
            </span>
            <div className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B16]">
              Architectural Precision.
            </div>
            <p className="font-mono text-[11px] text-[#6E655A]">
              {fonts.heading}
            </p>
          </div>

          {/* Body Font Sample */}
          <div className="space-y-1.5 pb-4 border-b border-[#E2D6C3]">
            <span className="font-mono text-[10px] font-semibold text-[#6E655A] uppercase">
              EDITORIAL BODY COPY
            </span>
            <p className="font-sans text-sm text-[#1F1B16] leading-relaxed">
              Every interface is built on a mathematical typographic scale to guarantee optimal reading rhythm across retina displays and mobile viewports.
            </p>
            <p className="font-mono text-[11px] text-[#6E655A]">
              {fonts.body}
            </p>
          </div>

          {/* Monospace Tech Tag Sample */}
          {fonts.mono && (
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-semibold text-[#6E655A] uppercase">
                MONOSPACE DATA TOKEN
              </span>
              <p className="font-mono text-xs text-[#1F1B16] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#E2D6C3] inline-block">
                {fonts.mono}
              </p>
            </div>
          )}
        </div>

        {/* UI Elements & Micro-Grammar (5 cols) */}
        <div className="lg:col-span-5 bg-[#EFE6D8]/60 border border-[#E2D6C3] rounded-2xl p-6 sm:p-7 space-y-5">
          <span className="font-mono text-xs font-bold text-[#6E655A] uppercase tracking-wider block">
            [ 03 // INTERFACE UI TOKENS ]
          </span>

          <div className="space-y-4">
            {/* Primary CTA Sample */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] text-[#6E655A] uppercase block">
                Primary Conversion CTA
              </span>
              <button
                type="button"
                className="w-full px-5 py-2.5 rounded-full bg-[#FF4D2E] text-white font-sans text-xs font-bold shadow-[0_4px_14px_rgba(255,77,46,0.25)] flex items-center justify-center gap-2 cursor-default select-none pointer-events-none"
              >
                <span>Book Bespoke Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Secondary Action Pill */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] text-[#6E655A] uppercase block">
                Secondary Editorial Pill
              </span>
              <button
                type="button"
                className="w-full px-5 py-2.5 rounded-full bg-[#1F1B16] text-[#F6F0E4] font-sans text-xs font-bold flex items-center justify-center gap-2 cursor-default select-none pointer-events-none"
              >
                <span>View Full Lookbook</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
              </button>
            </div>

            {/* Micro Tags & Filter Chips */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] text-[#6E655A] uppercase block">
                Tonal Filter Chips &amp; Badges
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E2D6C3] font-mono text-[10px] font-bold text-[#1F1B16]">
                  ACTIVE FILTER
                </span>
                <span className="px-3 py-1 rounded-full bg-[#C1673B]/15 text-[#C1673B] font-mono text-[10px] font-bold">
                  PKG SPEC
                </span>
                <span className="px-3 py-1 rounded-full bg-[#6B7A4E]/15 text-[#6B7A4E] font-mono text-[10px] font-bold">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignSystemBlock;

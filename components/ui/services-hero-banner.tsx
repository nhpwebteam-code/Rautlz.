"use client";

import React from "react";
import Image from "next/image";

export function ServicesHeroBanner() {
  return (
    <section className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#2B2B2B] shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#0C0C0C] text-white min-h-[340px] sm:min-h-[420px] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 sm:py-20 select-none">
      {/* 1. Crystal-Clear 3D Neural Fluid Chrome & Amber Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/faq-neural-bg.jpg"
          alt="3D Neural Fluid Background"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-right md:object-center"
        />

        {/* Minimal soft vignette on the left half for text legibility without reducing image clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      {/* 2. Clean, Crisp Text Content */}
      <div className="relative z-10 max-w-xl text-left space-y-3">
        <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
          Services
        </h1>

        <p className="font-sans text-sm sm:text-base text-white/95 max-w-lg leading-relaxed drop-shadow-sm">
          Tap any service card below to open detailed sprint specifications, included deliverables, and strategic impact.
        </p>
      </div>
    </section>
  );
}

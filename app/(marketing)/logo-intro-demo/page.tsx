"use client";

import React, { useState } from "react";
import LogoIntro from "@/components/ui/LogoIntro";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoIntroDemoPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [completedCount, setCompletedCount] = useState(0);

  const handleReplay = () => {
    setShowIntro(false);
    setTimeout(() => {
      setShowIntro(true);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#F6F0E4] flex flex-col items-center justify-center p-6 text-center">
      <AnimatePresence mode="wait">
        {showIntro && (
          <LogoIntro
            key={`intro-${completedCount}`}
            onAnimationComplete={() => {
              setShowIntro(false);
              setCompletedCount((prev) => prev + 1);
            }}
          />
        )}
      </AnimatePresence>

      <div className="max-w-xl bg-white p-8 rounded-3xl border border-[#E2D6C3] shadow-sm space-y-6">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FF0000]/10 text-[#FF0000] text-xs font-mono font-bold uppercase tracking-wider">
            Logo Intro Animation Demo
          </span>
          <h1 className="text-3xl font-black text-[#111111] tracking-tight">
            Raultz Logo Intro State Machine
          </h1>
          <p className="text-sm text-[#6E655A] leading-relaxed">
            Completed <span className="font-bold text-[#111111]">{completedCount}</span> animation cycles.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#111111] text-white text-left font-mono text-xs space-y-1.5 border border-white/10">
          <div className="text-emerald-400 font-bold">State Sequence:</div>
          <div>01: iconSlam (0–400ms) → scale(3.4 / 2.6 mobile) on bg-[#111111]</div>
          <div>02: irisWipe (400–600ms) → GPU circle scale to bg-white</div>
          <div>03: iconSettle (600–1000ms) → settle to left: 48px/24px with overshoot</div>
          <div>04: wordmarkReveal (1000–1700ms) → Archivo_Black "Raultz" clip wipe</div>
          <div>05: hold (1700–2600ms) → static lockup, callback at 2600ms</div>
        </div>

        <button
          onClick={handleReplay}
          className="w-full py-4 px-6 rounded-2xl bg-[#FF0000] text-white font-bold text-sm hover:bg-[#E00000] transition-colors shadow-sm cursor-pointer"
        >
          ↻ Replay Logo Intro Animation
        </button>
      </div>
    </div>
  );
}

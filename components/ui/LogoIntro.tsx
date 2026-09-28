"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "dark" | "logoEnter" | "logoSettle" | "wordmark" | "subtitle" | "hold" | "exit";

interface LogoIntroProps {
  onAnimationComplete?: () => void;
  className?: string;
}

// ─── Easing curves ──────────────────────────────────────────────────────────
const EASE_SLAM: [number, number, number, number]   = [0.16, 1, 0.3, 1];
const EASE_SETTLE: [number, number, number, number] = [0.83, 0, 0.17, 1];
const EASE_REVEAL: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_EXIT: [number, number, number, number]   = [0.65, 0, 0.35, 1];

export default function LogoIntro({ onAnimationComplete, className = "" }: LogoIntroProps) {
  const [phase, setPhase] = useState<Phase>("dark");
  const [isVisible, setIsVisible] = useState(true);

  const handleComplete = useCallback(() => {
    setIsVisible(false);
    if (onAnimationComplete) onAnimationComplete();
  }, [onAnimationComplete]);

  const handleSkip = useCallback(() => {
    handleComplete();
  }, [handleComplete]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSkip();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleSkip]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setPhase("hold");
      const t = setTimeout(handleComplete, 500);
      return () => clearTimeout(t);
    }

    const timers = [
      setTimeout(() => setPhase("logoEnter"),   300),
      setTimeout(() => setPhase("logoSettle"),  900),
      setTimeout(() => setPhase("wordmark"),    1400),
      setTimeout(() => setPhase("subtitle"),    2100),
      setTimeout(() => setPhase("hold"),        2600),
      setTimeout(() => setPhase("exit"),        3200),
      setTimeout(handleComplete,                3900),
    ];

    return () => timers.forEach(clearTimeout);
  }, [handleComplete]);

  const isAfterSettle   = (["logoSettle", "wordmark", "subtitle", "hold", "exit"] as Phase[]).includes(phase);
  const isAfterWordmark = (["wordmark", "subtitle", "hold", "exit"] as Phase[]).includes(phase);


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="logo-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: "blur(12px)",
            transition: { duration: 0.7, ease: EASE_EXIT },
          }}
          className={`fixed inset-0 z-[99999] overflow-hidden bg-white select-none cursor-pointer ${className}`}
          onClick={handleSkip}
          aria-label="Raultz Brand Intro — click or press ESC to skip"
        >
          {/* ── Subtle ambient glow ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isAfterSettle ? 0.15 : 0,
              scale:   isAfterSettle ? 1.3  : 0.5,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,0,0,0.12) 0%, rgba(255,0,0,0.03) 50%, transparent 80%)",
            }}
          />

          {/* ── Center Stage Container ── */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                {/* Real RZ Logo Mark */}
                <motion.div
                  initial={{ scale: 2.8, opacity: 0, rotate: -8 }}
                  animate={
                    phase === "dark"
                      ? { scale: 2.8, opacity: 0, rotate: -8 }
                      : phase === "logoEnter"
                      ? { scale: 1, opacity: 1, rotate: 0 }
                      : { scale: 1, opacity: 1, rotate: 0 }
                  }
                  transition={
                    phase === "logoEnter"
                      ? { duration: 0.6, ease: EASE_SLAM }
                      : { duration: 0.4, ease: EASE_SETTLE }
                  }
                  className="flex-shrink-0 relative"
                  style={{ width: "clamp(55px, 9vw, 90px)", height: "auto" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/raultz-logo-tight-light.png"
                    alt="Raultz Digital Engineering and Design Studio Logo"
                    width={180}
                    height={170}
                    className="w-full h-auto object-contain pointer-events-none"
                    style={{ imageRendering: "-webkit-optimize-contrast" as React.CSSProperties["imageRendering"] }}
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>

                {/* Wordmark: black text, red Z and dot */}
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  animate={
                    isAfterWordmark
                      ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
                      : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
                  }
                  transition={{ duration: 0.65, ease: EASE_REVEAL }}
                  className="ml-3 sm:ml-5 overflow-hidden"
                >
                  <span
                    className="font-extrabold tracking-[-0.04em] leading-none whitespace-nowrap select-none"
                    style={{
                      fontSize: "clamp(1.6rem, 5vw, 3rem)",
                      fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                    }}
                  >
                    <span className="text-[#111111]">Rault</span>
                    <span className="text-[#FF0000]">z</span>
                    <span className="text-[#FF0000] font-black">.</span>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── Skip Hint ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "dark" ? 0 : 0.2 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8"
          >
            <span
              className="text-black/25 uppercase tracking-widest select-none"
              style={{ fontSize: "10px", fontFamily: "var(--font-mono, monospace)" }}
            >
              Click anywhere or [ESC]
            </span>
          </motion.div>

          {/* ── Decorative scan line ── */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={phase === "logoEnter" ? { x: "200%" } : { x: "-100%" }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-[60%] h-[1px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,0,0,0.15), transparent)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { LogoIntro };

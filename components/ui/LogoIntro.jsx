"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LogoIntro — Klickpin-style cinematic brand reveal (smooth motion pass)
 *
 * White background, real RZ logo, black wordmark with red Z and dot.
 * Enhanced with spring physics, staggered reveals, light shimmer, and
 * buttery-smooth easing across every phase.
 */

// ─── Easing curves ──────────────────────────────────────────────────────────
const EASE_SLAM     = [0.22, 1.2, 0.36, 1];    // overshoot spring feel
const EASE_SETTLE   = [0.83, 0, 0.17, 1];      // power4.inOut
const EASE_REVEAL   = [0.76, 0, 0.24, 1];      // expo.inOut — silk wipe
const EASE_SOFT     = [0.25, 0.46, 0.45, 0.94]; // gentle ease-out
const EASE_EXIT     = [0.65, 0, 0.35, 1];       // power2.inOut

export default function LogoIntro({ onAnimationComplete, className = "" }) {
  const [phase, setPhase] = useState("dark");
  const [isVisible, setIsVisible] = useState(true);

  const handleComplete = useCallback(() => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("raultz:intro-complete"));
    }
    if (onAnimationComplete) onAnimationComplete();
  }, [onAnimationComplete]);

  const handleSkip = useCallback(() => {
    handleComplete();
  }, [handleComplete]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleSkip();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleSkip]);

  // ─── Phase State Machine ────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setPhase("hold");
      const t = setTimeout(handleComplete, 500);
      return () => clearTimeout(t);
    }

    const timers = [
      setTimeout(() => setPhase("logoEnter"),   350),
      setTimeout(() => setPhase("logoSettle"), 1050),
      setTimeout(() => setPhase("wordmark"),   1500),
      setTimeout(() => setPhase("subtitle"),   2200),
      setTimeout(() => setPhase("hold"),       2800),
      setTimeout(() => setPhase("exit"),       3500),
      setTimeout(handleComplete,               4200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [handleComplete]);

  const isAfterSettle   = ["logoSettle", "wordmark", "subtitle", "hold", "exit"].includes(phase);
  const isAfterWordmark = ["wordmark", "subtitle", "hold", "exit"].includes(phase);
  const isAfterSubtitle = ["subtitle", "hold", "exit"].includes(phase);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="logo-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.55, ease: EASE_EXIT },
          }}
          id="logo-intro-overlay"
          className={`fixed inset-0 z-[99999] overflow-hidden bg-white select-none cursor-pointer will-change-[transform,opacity] ${className}`}
          onClick={handleSkip}
          onTouchStart={handleSkip}
          aria-label="Raultz Brand Intro — tap or click to skip"
        >
          {/* ── Ambient radial glow ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: isAfterSettle ? 0.18 : 0,
              scale:   isAfterSettle ? 1.4  : 0.3,
            }}
            transition={{ duration: 1.6, ease: EASE_SOFT }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,0,0,0.10) 0%, rgba(255,0,0,0.02) 55%, transparent 80%)",
            }}
          />

          {/* ── Center Stage Container ── */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* ── Logo + Wordmark Row ── */}
              <div className="flex items-center">

                {/* Real RZ Logo Mark — spring slam with overshoot bounce */}
                <motion.div
                  initial={{ scale: 3.2, opacity: 0, rotate: -12, y: 30 }}
                  animate={
                    phase === "dark"
                      ? { scale: 3.2, opacity: 0, rotate: -12, y: 30 }
                      : phase === "logoEnter"
                      ? { scale: 1, opacity: 1, rotate: 0, y: 0 }
                      : { scale: 1, opacity: 1, rotate: 0, y: 0 }
                  }
                  transition={
                    phase === "logoEnter"
                      ? {
                          type: "spring",
                          stiffness: 180,
                          damping: 16,
                          mass: 1,
                          duration: 0.7,
                        }
                      : { duration: 0.4, ease: EASE_SETTLE }
                  }
                  className="flex-shrink-0 relative"
                  style={{ width: "clamp(55px, 9vw, 90px)", height: "auto" }}
                >
                  {/* Subtle drop shadow that fades in with the logo */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isAfterSettle ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: EASE_SOFT }}
                    className="absolute -inset-2 rounded-xl pointer-events-none"
                    style={{
                      boxShadow: "0 8px 40px rgba(255,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/raultz-logo-tight-light.png"
                    alt="Raultz RZ Logo"
                    width={180}
                    height={170}
                    className="w-full h-auto object-contain pointer-events-none relative z-10"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>

                {/* Wordmark: "Raultz." — smooth clip-path wipe with per-letter stagger */}
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  animate={
                    isAfterWordmark
                      ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
                      : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
                  }
                  transition={{ duration: 0.75, ease: EASE_REVEAL }}
                  className="ml-3 sm:ml-5 overflow-hidden"
                >
                  <span
                    className="font-extrabold tracking-[-0.04em] leading-none whitespace-nowrap select-none inline-flex items-baseline"
                    style={{
                      fontSize: "clamp(1.6rem, 5vw, 3rem)",
                      fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                    }}
                  >
                    {/* Each letter gets a tiny staggered upward pop */}
                    {"Rault".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 18, opacity: 0 }}
                        animate={
                          isAfterWordmark
                            ? { y: 0, opacity: 1 }
                            : { y: 18, opacity: 0 }
                        }
                        transition={{
                          duration: 0.45,
                          delay: isAfterWordmark ? i * 0.04 : 0,
                          ease: EASE_SLAM,
                        }}
                        className="text-[#111111] inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                    <motion.span
                      initial={{ y: 18, opacity: 0, scale: 0.6 }}
                      animate={
                        isAfterWordmark
                          ? { y: 0, opacity: 1, scale: 1 }
                          : { y: 18, opacity: 0, scale: 0.6 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: isAfterWordmark ? 0.22 : 0,
                        ease: EASE_SLAM,
                      }}
                      className="text-[#FF0000] inline-block"
                    >
                      z
                    </motion.span>
                    <motion.span
                      initial={{ y: 18, opacity: 0, scale: 0 }}
                      animate={
                        isAfterWordmark
                          ? { y: 0, opacity: 1, scale: 1 }
                          : { y: 18, opacity: 0, scale: 0 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                        delay: isAfterWordmark ? 0.32 : 0,
                      }}
                      className="text-[#FF0000] font-black inline-block"
                    >
                      .
                    </motion.span>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── Bottom Skip Hint ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase === "dark" ? 0 : 0.25, y: phase === "dark" ? 10 : 0 }}
            transition={{ duration: 1, delay: 0.8, ease: EASE_SOFT }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8"
          >
            <span
              className="text-black/35 uppercase tracking-widest select-none"
              style={{ fontSize: "10px", fontFamily: "var(--font-mono, monospace)" }}
            >
              Tap anywhere to skip &bull; [ESC]
            </span>
          </motion.div>

          {/* ── Horizontal light sweep across on logo entry ── */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={
              phase === "logoEnter"
                ? { x: "220%", opacity: [0, 0.6, 0] }
                : { x: "-120%", opacity: 0 }
            }
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-1/2 -translate-y-1/2 w-[40%] h-[2px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.3) 40%, rgba(255,0,0,0.5) 50%, rgba(255,0,0,0.3) 60%, transparent 100%)",
            }}
          />

          {/* ── Soft shimmer flash on logo slam ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              phase === "logoEnter"
                ? { opacity: [0, 0.06, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 0.6, ease: EASE_SOFT }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(255,0,0,0.15), transparent 60%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { LogoIntro };

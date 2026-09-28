"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark } from "@/components/ui/BrandLogo";

const LETTERS = [
  { char: "R", initialX: -160, initialY: -90, initialRotate: -25, delay: 0.1 },
  { char: "A", initialX: -90, initialY: 110, initialRotate: 18, delay: 0.2 },
  { char: "U", initialX: -30, initialY: -130, initialRotate: -15, delay: 0.25 },
  { char: "L", initialX: 40, initialY: 120, initialRotate: 20, delay: 0.3 },
  { char: "T", initialX: 100, initialY: -100, initialRotate: -18, delay: 0.35 },
  { char: "Z", initialX: 180, initialY: 80, initialRotate: 22, delay: 0.45 },
];

export function NameFormingIntro({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFormed, setIsFormed] = useState(false);
  const [glowFlash, setGlowFlash] = useState(false);

  useEffect(() => {
    // 1. Letters converge together into the center
    const formedTimer = setTimeout(() => {
      setIsFormed(true);
    }, 1400);

    // 2. Light sheen / flash pulses across the formed word
    const flashTimer = setTimeout(() => {
      setGlowFlash(true);
    }, 1800);

    // 3. Screen dissolves / curtains upward revealing the website
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(formedTimer);
      clearTimeout(flashTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSkip();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="pitch-black-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center select-none overflow-hidden cursor-pointer"
          onClick={handleSkip}
        >
          {/* Subtle Ambient Depth Glow in Pure Darkness */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isFormed ? 0.35 : 0.15,
              scale: isFormed ? 1.2 : 0.8,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF4D2E] to-[#FF7A59] blur-[160px] pointer-events-none"
          />

          {/* Center Stage: The Scattered Letters Coming Together */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
            
            {/* Signature Interlocking Monogram Illuminating Above */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -20, filter: "blur(12px)" }}
              animate={{
                opacity: isFormed ? 1 : 0.2,
                scale: isFormed ? 1 : 0.8,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center mb-2"
            >
              <BrandMark
                theme="dark"
                size="2xl"
                withGlow={true}
                className="drop-shadow-[0_0_30px_rgba(255,77,46,0.6)]"
              />
            </motion.div>

            {/* The Converging Letters */}
            <div className="flex items-center justify-center">
              {LETTERS.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    x: item.initialX,
                    y: item.initialY,
                    rotate: item.initialRotate,
                    opacity: 0,
                    scale: 2.2,
                    filter: "blur(16px)",
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1.3,
                    delay: item.delay,
                    ease: [0.16, 1, 0.3, 1], // Smooth magnetic snap
                  }}
                  className={`inline-block font-sans text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tighter select-none relative ${
                    item.char === "Z" ? "text-[#FF4D2E]" : "text-white"
                  }`}
                  style={{
                    textShadow:
                      item.char === "Z"
                        ? "0 0 40px rgba(255, 77, 46, 0.9), 0 0 80px rgba(255, 77, 46, 0.6)"
                        : glowFlash
                        ? "0 0 40px rgba(255, 77, 46, 0.8), 0 0 80px rgba(255, 255, 255, 0.4)"
                        : "0 0 20px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {item.char}
                </motion.span>
              ))}

              {/* Glowing Red Dot Snapping into Place */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isFormed ? 1 : 0,
                  scale: isFormed ? 1 : 0,
                }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#FF4D2E] inline-block ml-2 sm:ml-4 shadow-[0_0_20px_#FF4D2E]"
              />
            </div>
          </div>

          {/* Minimal Skip Indicator at Bottom */}
          <div className="absolute bottom-8 right-8 font-mono text-[10px] text-white/30 uppercase tracking-widest">
            Click anywhere or [ESC] to enter
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// All 10 local hero photos from the project
export const HERO_PHOTOS = [
  {
    id: "hp-1",
    image: "/hero-photos/IMG-20260902-WA0031.jpg",
    alt: "Hero Artwork 1",
  },
  {
    id: "hp-2",
    image: "/hero-photos/IMG-20260902-WA0033.jpg",
    alt: "Hero Artwork 2",
    tag: {
      text: "@coplin",
      bgColor: "#2563EB",
      textColor: "#FFFFFF",
    },
  },
  {
    id: "hp-3",
    image: "/hero-photos/IMG-20260902-WA0034.jpg",
    alt: "Hero Artwork 3",
  },
  {
    id: "hp-4",
    image: "/hero-photos/IMG-20260903-WA0014.jpg",
    alt: "Hero Artwork 4",
  },
  {
    id: "hp-5",
    image: "/hero-photos/IMG-20260903-WA0016.jpg",
    alt: "Hero Artwork 5",
  },
  {
    id: "hp-6",
    image: "/hero-photos/IMG-20260903-WA0018.jpg",
    alt: "Hero Artwork 6",
    tag: {
      text: "@andrea",
      bgColor: "#16A34A",
      textColor: "#FFFFFF",
    },
  },
  {
    id: "hp-7",
    image: "/hero-photos/IMG-20260902-WA0028.jpg",
    alt: "Hero Artwork 7",
  },
  {
    id: "hp-8",
    image: "/hero-photos/IMG-20260903-WA0013.jpg",
    alt: "Hero Artwork 8",
  },
  {
    id: "hp-9",
    image: "/hero-photos/IMG-20260903-WA0015.jpg",
    alt: "Hero Artwork 9",
  },
  {
    id: "hp-10",
    image: "/hero-photos/IMG-20260903-WA0017.jpg",
    alt: "Hero Artwork 10",
  },
];

export default function HeroCardFan() {
  const [phase, setPhase] = useState<"enter" | "fanning" | "continuous">("enter");
  const [windowWidth, setWindowWidth] = useState(1440);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Continuous progress tracker (animates from 0 to 10 in a smooth loop)
  const progressRef = useRef(0);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Responsive window measurement
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Entrance choreography:
  // 1. Deck rises stacked from bottom with ONLY ONE front card visible
  // 2. Holds for 1.3s so the user clearly sees the single card
  // 3. Smoothly fans out to left and right
  // 4. Then transitions to slow, continuous rotating motion
  useEffect(() => {
    let fanTimer: NodeJS.Timeout;
    let continuousTimer: NodeJS.Timeout;

    const startChoreography = () => {
      setPhase("enter");

      // Hold single card stacked for 1.3s so the user clearly registers only ONE card
      fanTimer = setTimeout(() => {
        setPhase("fanning");
      }, 1300);

      // Transition to continuous rotation after fanning settles at 2.9s
      continuousTimer = setTimeout(() => {
        setPhase("continuous");
      }, 2900);
    };

    // If LogoIntro is currently active on screen, wait for it to finish!
    const introOverlay = typeof document !== "undefined" ? document.getElementById("logo-intro-overlay") : null;
    if (introOverlay) {
      const onIntroComplete = () => {
        window.removeEventListener("raultz:intro-complete", onIntroComplete);
        setTimeout(startChoreography, 250);
      };
      window.addEventListener("raultz:intro-complete", onIntroComplete);
      return () => {
        window.removeEventListener("raultz:intro-complete", onIntroComplete);
        clearTimeout(fanTimer);
        clearTimeout(continuousTimer);
      };
    } else {
      // If no intro overlay, start immediately
      startChoreography();
      return () => {
        clearTimeout(fanTimer);
        clearTimeout(continuousTimer);
      };
    }
  }, []);

  const totalPhotos = HERO_PHOTOS.length;
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Horizontal card spacing spanning full left to right across the screen
  const cardSpacing = isMobile
    ? Math.max(78, windowWidth * 0.22)
    : isTablet
    ? Math.max(145, windowWidth * 0.17)
    : Math.max(190, Math.min(245, windowWidth / 6.6));

  const arcDropFactor = isMobile ? 3.6 : 4.6;
  const baseSlotY = isMobile ? -8 : -14;
  const angleFactor = isMobile ? 4.6 : 4.2;

  // Continuous animation loop via requestAnimationFrame (butter-smooth, zero pauses)
  useEffect(() => {
    if (phase !== "continuous") return;

    let lastTime = performance.now();
    let animFrameId: number;

    // Speed: ~38 seconds for a complete 10-card revolution (luxurious, calm, slow)
    // When hovered, motion gently eases to half-speed so the user can inspect comfortably
    const cycleDurationSeconds = 38;

    const animateLoop = (now: number) => {
      const deltaSeconds = (now - lastTime) / 1000;
      lastTime = now;

      const speedModifier = hoveredCard ? 0.4 : 1.0;
      progressRef.current =
        (progressRef.current + (deltaSeconds / cycleDurationSeconds) * totalPhotos * speedModifier) %
        totalPhotos;

      const currentProgress = progressRef.current;

      // Update all 10 cards' transforms and opacities directly on the GPU
      cardElementsRef.current.forEach((el, photoIndex) => {
        if (!el) return;

        // Continuous relative position along the 10-slot circular ring
        const rawRelative = (photoIndex - currentProgress + totalPhotos) % totalPhotos;

        // Wrap to continuous signed slot: range [-5, 5)
        let k = ((rawRelative + 5) % 10 + 10) % 10 - 5;

        // Parabolic curved arc positioning
        const x = k * cardSpacing;
        const arcY = Math.abs(k) * Math.abs(k) * arcDropFactor + baseSlotY;
        const rotate = k * angleFactor;
        const scale = Math.max(0.85, 1.03 - Math.abs(k) * 0.035);

        // Smooth fade out at edges before wrapping around
        const opacity = Math.max(0, Math.min(1, (4.3 - Math.abs(k)) / 0.8));
        const zIndex = Math.round(50 - Math.abs(k) * 5);

        const isThisHovered = hoveredCard === HERO_PHOTOS[photoIndex]?.id;
        const finalY = isThisHovered ? arcY - 24 : arcY;
        const finalScale = isThisHovered ? (isMobile ? 1.08 : 1.13) : scale;
        const finalRotate = isThisHovered ? 0 : rotate;
        const finalZIndex = isThisHovered ? 99 : zIndex;

        el.style.transform = `translate3d(${x}px, ${finalY}px, 0) rotate(${finalRotate}deg) scale(${finalScale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${finalZIndex}`;
        el.style.pointerEvents = opacity > 0.3 ? "auto" : "none";
      });

      animFrameId = requestAnimationFrame(animateLoop);
    };

    animFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animFrameId);
  }, [phase, cardSpacing, arcDropFactor, baseSlotY, angleFactor, isMobile, totalPhotos, hoveredCard]);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;
    progressRef.current = (progressRef.current - diff * 0.007 + totalPhotos) % totalPhotos;
    touchStartX.current = currentX;
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center select-none overflow-hidden py-3 sm:py-6 touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Width Canvas Anchor Container */}
      <div className="relative flex items-center justify-center w-full h-[330px] sm:h-[410px] lg:h-[480px]">
        {HERO_PHOTOS.map((photo, photoIndex) => {
          // Static initial offsets for the entrance / fanning phases before continuous loop kicks in
          // Symmetrical slots: center front card at initialK = 0, negative slots to left, positive slots to right
          const relPos = photoIndex;
          let initialK: number;
          if (relPos === 0) initialK = -3;
          else if (relPos === 1) initialK = -2;
          else if (relPos === 2) initialK = -1;
          else if (relPos === 3) initialK = 0; // The single front lead card!
          else if (relPos === 4) initialK = 1;
          else if (relPos === 5) initialK = 2;
          else if (relPos === 6) initialK = 3;
          else if (relPos === 7) initialK = -4;
          else if (relPos === 8) initialK = 4;
          else initialK = 5;

          const isLeadCard = initialK === 0;

          // In "enter" phase: ONLY the single lead card is visible in the center.
          // Other cards are hidden behind it until "fanning" triggers.
          const initX = phase === "enter" ? 0 : initialK * cardSpacing;
          const initY =
            phase === "enter"
              ? 0
              : Math.abs(initialK) * Math.abs(initialK) * arcDropFactor + baseSlotY;
          const initRotate = phase === "enter" ? 0 : initialK * angleFactor;
          const initOpacity =
            phase === "enter"
              ? isLeadCard
                ? 1
                : 0
              : Math.abs(initialK) > 3.4
              ? 0
              : 1;
          const initScale = phase === "enter" ? (isLeadCard ? 1 : 0.96) : 1;
          const initZIndex = isLeadCard ? 65 : Math.round(50 - Math.abs(initialK) * 5);

          return (
            <div
              key={photo.id}
              ref={(el) => {
                cardElementsRef.current[photoIndex] = el;
              }}
              onMouseEnter={() => setHoveredCard(photo.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={
                phase !== "continuous"
                  ? {
                      transform: `translate3d(${initX}px, ${initY}px, 0) rotate(${initRotate}deg) scale(${initScale})`,
                      opacity: initOpacity,
                      zIndex: initZIndex,
                      transition:
                        phase === "fanning"
                          ? "transform 1.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.1s ease"
                          : "none",
                    }
                  : undefined
              }
              className={`absolute cursor-pointer will-change-transform ${
                phase === "enter" && isLeadCard ? "animate-rise-stacked" : ""
              }`}
            >
              {/* Elaborated Larger Card Container */}
              <div className="relative w-[160px] sm:w-[220px] md:w-[250px] lg:w-[275px] xl:w-[295px] aspect-[4/4.9] rounded-[22px] sm:rounded-[30px] overflow-hidden bg-white p-1.5 sm:p-2.5 shadow-[0_22px_55px_rgba(0,0,0,0.2)] border-2 border-white hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                
                {/* Artwork Photo Image */}
                <div className="relative w-full h-full rounded-[16px] sm:rounded-[22px] overflow-hidden bg-neutral-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    loading="eager"
                  />

                  {/* Inner Refined Bevel Ring */}
                  <div className="absolute inset-0 rounded-[inherit] ring-1 ring-black/15 pointer-events-none" />
                </div>

                {/* Floating Reference Speech Bubble Tag */}
                {photo.tag && (
                  <div className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300">
                    <div
                      style={{
                        backgroundColor: photo.tag.bgColor,
                        color: photo.tag.textColor,
                      }}
                      className="relative px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-tight shadow-lg flex items-center justify-center whitespace-nowrap"
                    >
                      <span>{photo.tag.text}</span>
                      
                      {/* Speech Bubble Arrow Tail */}
                      <div
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: "5px solid transparent",
                          borderRight: "5px solid transparent",
                          borderTop: `6px solid ${photo.tag.bgColor}`,
                        }}
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

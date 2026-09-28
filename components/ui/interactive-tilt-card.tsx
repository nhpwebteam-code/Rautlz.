"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface InteractiveTiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltDegree?: number;
}

export function InteractiveTiltCard({
  children,
  className = "",
  glowColor = "rgba(193, 103, 59, 0.15)",
  tiltDegree = 7,
}: InteractiveTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for 3D rotation
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltDegree, -tiltDegree]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltDegree, tiltDegree]), {
    stiffness: 300,
    damping: 30,
  });

  // Spotlight coordinates (percentage)
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
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
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
          stiffness: 350,
          damping: 25,
        }}
        className="w-full h-full relative"
      >
        {/* Dynamic Cursor Spotlight Shine Layer */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${spotX.get()} ${spotY.get()}, ${glowColor}, transparent 70%)`,
            }}
          />
        )}

        {children}
      </motion.div>
    </motion.div>
  );
}

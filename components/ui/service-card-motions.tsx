"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceBackgroundMotionProps {
  serviceId: string;
  isHovered: boolean;
}

export function ServiceBackgroundMotion({ serviceId, isHovered }: ServiceBackgroundMotionProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-[inherit]">
      {/* Universal Ambient Backlight Glow */}
      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.35 : 0.15,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FF4D2E] rounded-full blur-[60px]"
      />

      {/* Subtle Background Architectural Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Discipline-Specific Motion Visual Engine */}
      {renderBespokeMotion(serviceId, isHovered)}
    </div>
  );
}

function renderBespokeMotion(serviceId: string, isHovered: boolean) {
  switch (serviceId) {
    case "website-development":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Horizontal Code Compilation Track */}
          <line x1="20" y1="50" x2="280" y2="50" stroke="#FF4D2E" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="#FF4D2E" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />

          {/* Traveling Laser Pulse along Track */}
          <motion.circle
            cx="20"
            cy="50"
            r="3"
            fill="#FF4D2E"
            animate={{ cx: [20, 280, 20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="280"
            cy="150"
            r="3"
            fill="#FF4D2E"
            animate={{ cx: [280, 20, 280] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Code Bracket Elements */}
          <motion.text
            x="35"
            y="95"
            fill="#FF4D2E"
            fillOpacity="0.25"
            fontSize="18"
            fontFamily="monospace"
            fontWeight="bold"
            animate={{ y: [95, 88, 95], opacity: isHovered ? 0.7 : 0.3 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            &lt;/&gt;
          </motion.text>
          <motion.text
            x="225"
            y="125"
            fill="#FF4D2E"
            fillOpacity="0.25"
            fontSize="20"
            fontFamily="monospace"
            fontWeight="bold"
            animate={{ y: [125, 132, 125], opacity: isHovered ? 0.7 : 0.3 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            &#123; &#125;
          </motion.text>

          {/* Terminal Command Line Cursor Pulse */}
          <motion.rect
            x="35"
            y="130"
            width="8"
            height="14"
            fill="#FF4D2E"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <line x1="50" y1="137" x2="120" y2="137" stroke="#FF4D2E" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />
        </svg>
      );

    case "graphic-designing":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Morphing Bezier Pen Tool Vector Curve */}
          <motion.path
            d="M 30 140 C 90 40, 210 160, 270 60"
            stroke="#FF4D2E"
            strokeWidth="1.5"
            fill="none"
            animate={{
              d: isHovered
                ? [
                    "M 30 140 C 90 40, 210 160, 270 60",
                    "M 30 120 C 110 170, 190 30, 270 80",
                    "M 30 140 C 90 40, 210 160, 270 60",
                  ]
                : [
                    "M 30 140 C 90 60, 210 140, 270 60",
                    "M 30 130 C 100 150, 200 50, 270 70",
                    "M 30 140 C 90 60, 210 140, 270 60",
                  ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Vector Tangent Anchor Handles */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 100px" }}
          >
            <circle cx="150" cy="100" r="4" fill="#FF4D2E" />
            <line x1="120" y1="100" x2="180" y2="100" stroke="#FF4D2E" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="117" y="97" width="6" height="6" fill="white" stroke="#FF4D2E" strokeWidth="1" />
            <rect x="177" y="97" width="6" height="6" fill="white" stroke="#FF4D2E" strokeWidth="1" />
          </motion.g>

          {/* CMYK / RGB Chromatic Floating Swatch Orbs */}
          <motion.circle
            cx="60"
            cy="60"
            r="16"
            stroke="#FF4D2E"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="240"
            cy="140"
            r="20"
            stroke="#FF4D2E"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );

    case "ui-ux-web-designing":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Responsive UI Wireframe Card Outlines */}
          <motion.rect
            x="40"
            y="40"
            width="90"
            height="65"
            rx="8"
            stroke="#FF4D2E"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            animate={{ y: [40, 36, 40], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.rect
            x="170"
            y="95"
            width="90"
            height="65"
            rx="8"
            stroke="#FF4D2E"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            animate={{ y: [95, 99, 95], opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Floating UI Cursor Click Ripple */}
          <motion.g
            animate={{
              x: [85, 215, 85],
              y: [72, 127, 72],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="0" cy="0" r="4" fill="#FF4D2E" />
            <motion.circle
              cx="0"
              cy="0"
              r="14"
              stroke="#FF4D2E"
              strokeWidth="1"
              animate={{ scale: [0.5, 1.8], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.g>

          {/* Layout Grid Alignment Markers */}
          <line x1="150" y1="20" x2="150" y2="180" stroke="#FF4D2E" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.25" />
        </svg>
      );

    case "3d-websites":
      return (
        <div className="w-full h-full flex items-center justify-center opacity-40">
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: isHovered ? 8 : 16,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 600,
            }}
            className="relative w-28 h-28"
          >
            {/* 3D Wireframe Rings & Rotating Polygons */}
            <div className="absolute inset-0 rounded-full border border-[#FF4D2E]/60 border-dashed animate-spin" style={{ animationDuration: "12s" }} />
            <div
              className="absolute inset-2 rounded-2xl border-2 border-[#FF4D2E]/40"
              style={{ transform: "rotate(45deg)" }}
            />
            <div
              className="absolute inset-4 rounded-full border border-[#FF4D2E]/80"
              style={{ transform: "rotateX(60deg)" }}
            />
            <div
              className="absolute inset-4 rounded-full border border-white/40"
              style={{ transform: "rotateY(60deg)" }}
            />
          </motion.div>
        </div>
      );

    case "sketch-designing":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Architectural Compass Drafting Arcs */}
          <motion.circle
            cx="150"
            cy="100"
            r="60"
            stroke="#FF4D2E"
            strokeWidth="1"
            strokeDasharray="6 6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 100px" }}
          />
          <motion.circle
            cx="150"
            cy="100"
            r="35"
            stroke="#FF4D2E"
            strokeWidth="1"
            strokeDasharray="3 3"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 100px" }}
          />

          {/* Precision Blueprint Crosshairs */}
          <line x1="150" y1="15" x2="150" y2="185" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="30" y1="100" x2="270" y2="100" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />

          {/* Scale Hatch Marks */}
          {[60, 90, 120, 180, 210, 240].map((x) => (
            <line key={x} x1={x} y1="96" x2={x} y2="104" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.5" />
          ))}
        </svg>
      );

    case "landing-pages":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* High-Velocity Upward Conversion Laser Streaks */}
          {[50, 90, 150, 210, 250].map((x, i) => (
            <motion.line
              key={x}
              x1={x}
              y1="190"
              x2={x}
              y2="10"
              stroke="#FF4D2E"
              strokeWidth={i % 2 === 0 ? "1.5" : "1"}
              strokeDasharray="12 40"
              animate={{
                strokeDashoffset: [0, -150],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2.2 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Rising Spark Particles */}
          <motion.circle
            cx="75"
            cy="160"
            r="2"
            fill="#FF4D2E"
            animate={{ y: [-20, -140], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.circle
            cx="225"
            cy="170"
            r="2.5"
            fill="#FF4D2E"
            animate={{ y: [-20, -150], opacity: [1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
          />
        </svg>
      );

    case "ecommerce":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Sweeping Laser Barcode Scanner Beam */}
          <motion.line
            x1="30"
            y1="50"
            x2="270"
            y2="50"
            stroke="#FF4D2E"
            strokeWidth="2"
            strokeOpacity="0.8"
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Isometric Floating Product Box Outlines */}
          <motion.g
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Left Box */}
            <path
              d="M 50 110 L 80 95 L 110 110 L 80 125 Z"
              stroke="#FF4D2E"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 50 110 L 50 140 L 80 155 L 80 125"
              stroke="#FF4D2E"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 110 110 L 110 140 L 80 155"
              stroke="#FF4D2E"
              strokeWidth="1"
              fill="none"
            />
          </motion.g>

          <motion.g
            animate={{ y: [0, 8, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            {/* Right Box */}
            <path
              d="M 190 70 L 220 55 L 250 70 L 220 85 Z"
              stroke="#FF4D2E"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 190 70 L 190 100 L 220 115 L 220 85"
              stroke="#FF4D2E"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 250 70 L 250 100 L 220 115"
              stroke="#FF4D2E"
              strokeWidth="1"
              fill="none"
            />
          </motion.g>
        </svg>
      );

    case "saas-web-apps":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Multi-Layer Stacked Cloud Database Wafers */}
          {[40, 75, 110].map((y, idx) => (
            <motion.path
              key={y}
              d={`M 60 ${y + 20} L 150 ${y} L 240 ${y + 20} L 150 ${y + 40} Z`}
              stroke="#FF4D2E"
              strokeWidth="1.2"
              fill="none"
              animate={{
                y: [0, idx === 1 ? -6 : 6, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.3,
              }}
            />
          ))}

          {/* Pulsating Microservices Data Node Signals */}
          <motion.circle
            cx="150"
            cy="60"
            r="3.5"
            fill="#FF4D2E"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="150"
            cy="130"
            r="3.5"
            fill="#FF4D2E"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </svg>
      );

    case "seo-content-writing":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Ascending Google SERP #1 Organic Search Surge Curve */}
          <motion.path
            d="M 30 160 Q 120 150 170 90 T 270 35"
            stroke="#FF4D2E"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Shimmering Text Line Placeholders */}
          <motion.line
            x1="40"
            y1="50"
            x2="110"
            y2="50"
            stroke="#FF4D2E"
            strokeWidth="2"
            strokeOpacity="0.4"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.line
            x1="40"
            y1="65"
            x2="90"
            y2="65"
            stroke="#FF4D2E"
            strokeWidth="2"
            strokeOpacity="0.3"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
          />

          {/* Floating Search Indexing Crawler Node */}
          <motion.circle
            cx="270"
            cy="35"
            r="5"
            fill="#FF4D2E"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <motion.circle
            cx="270"
            cy="35"
            r="12"
            stroke="#FF4D2E"
            strokeWidth="1"
            animate={{ scale: [1, 2], opacity: [0.8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        </svg>
      );

    case "digital-market-planning":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* 360° Rotating Radar Sweep */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 100px" }}
          >
            <circle cx="150" cy="100" r="70" stroke="#FF4D2E" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.35" />
            <circle cx="150" cy="100" r="40" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.25" />
            <line x1="150" y1="100" x2="150" y2="30" stroke="#FF4D2E" strokeWidth="1.5" strokeOpacity="0.8" />
          </motion.g>

          {/* Strategic Target Reticle Points */}
          <motion.circle
            cx="190"
            cy="70"
            r="3"
            fill="#FF4D2E"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="130"
            r="3"
            fill="#FF4D2E"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
          />
        </svg>
      );

    case "ai-integration":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Neural Synapse Interconnect Network Lines */}
          <line x1="40" y1="60" x2="110" y2="100" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="40" y1="140" x2="110" y2="100" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="110" y1="100" x2="190" y2="60" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="110" y1="100" x2="190" y2="140" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="190" y1="60" x2="260" y2="100" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="190" y1="140" x2="260" y2="100" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />

          {/* Synaptic Light Signals Traveling Along Graph */}
          <motion.circle
            cx="40"
            cy="60"
            r="3"
            fill="#FF4D2E"
            animate={{
              cx: [40, 110, 190, 260],
              cy: [60, 100, 60, 100],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="40"
            cy="140"
            r="3"
            fill="#FF4D2E"
            animate={{
              cx: [40, 110, 190, 260],
              cy: [140, 100, 140, 100],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Synapse Node Halos */}
          {[
            { cx: 40, cy: 60 },
            { cx: 40, cy: 140 },
            { cx: 110, cy: 100 },
            { cx: 190, cy: 60 },
            { cx: 190, cy: 140 },
            { cx: 260, cy: 100 },
          ].map((pt, i) => (
            <motion.circle
              key={i}
              cx={pt.cx}
              cy={pt.cy}
              r="4"
              stroke="#FF4D2E"
              strokeWidth="1.5"
              fill="#141414"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </svg>
      );

    case "automation-workflows":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Circuit Pipeline Flow Track */}
          <path
            d="M 30 100 L 90 100 L 130 50 L 190 50 L 230 100 L 270 100"
            stroke="#FF4D2E"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Kinetic Webhook Pulse Moving Through Pipeline */}
          <motion.circle
            cx="30"
            cy="100"
            r="4"
            fill="#FF4D2E"
            animate={{
              cx: [30, 90, 130, 190, 230, 270],
              cy: [100, 100, 50, 50, 100, 100],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Lightning Energy Fork Marks */}
          <motion.path
            d="M 140 130 L 155 110 L 150 145 L 165 125"
            stroke="#FF4D2E"
            strokeWidth="1.5"
            fill="none"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      );

    case "business-management":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Interlocking Executive Synergy Rings */}
          <motion.circle
            cx="120"
            cy="100"
            r="55"
            stroke="#FF4D2E"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "120px 100px" }}
          />
          <motion.circle
            cx="180"
            cy="100"
            r="55"
            stroke="#FF4D2E"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 100px" }}
          />

          {/* Center Intersection Glow */}
          <motion.circle
            cx="150"
            cy="100"
            r="6"
            fill="#FF4D2E"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      );

    case "market-data-analysing":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Fluctuating Telemetry Equalizer Bars */}
          {[40, 70, 100, 130, 160, 190, 220, 250].map((x, idx) => (
            <motion.rect
              key={x}
              x={x}
              y="120"
              width="10"
              height="40"
              rx="3"
              fill="#FF4D2E"
              animate={{
                height: isHovered ? [20, 65, 30, 75, 20] : [25, 50, 20, 45, 25],
                y: isHovered ? [140, 95, 130, 85, 140] : [135, 110, 140, 115, 135],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + (idx % 4) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.15,
              }}
            />
          ))}

          {/* Fluctuating Trendline Sparkline */}
          <motion.path
            d="M 30 70 Q 90 40 150 65 T 270 30"
            stroke="#FF4D2E"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="3 3"
          />
        </svg>
      );

    case "active-maintenance":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* Continuous EKG Health Heartbeat Waveform */}
          <motion.path
            d="M 20 100 L 90 100 L 105 60 L 120 140 L 135 70 L 150 115 L 160 100 L 280 100"
            stroke="#FF4D2E"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* 24/7 Security Shield Radar Rings */}
          <motion.circle
            cx="150"
            cy="100"
            r="65"
            stroke="#FF4D2E"
            strokeWidth="1"
            strokeDasharray="4 8"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 100px" }}
          />
        </svg>
      );

    case "hosting-cloud-infra":
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 300 200" fill="none">
          {/* 3D Wireframe Globe Latitude / Longitude Arcs */}
          <circle cx="150" cy="100" r="65" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.4" />
          <ellipse cx="150" cy="100" rx="65" ry="25" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.3" />
          <ellipse cx="150" cy="100" rx="25" ry="65" stroke="#FF4D2E" strokeWidth="1" strokeOpacity="0.3" />

          {/* Orbiting Satellite Path & Node */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 100px" }}
          >
            <ellipse cx="150" cy="100" rx="85" ry="32" stroke="#FF4D2E" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.4" />
            <circle cx="235" cy="100" r="3.5" fill="#FF4D2E" />
          </motion.g>

          {/* Edge CDN Node Ping Signals */}
          <motion.circle
            cx="130"
            cy="85"
            r="2.5"
            fill="#FF4D2E"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="175"
            cy="115"
            r="2.5"
            fill="#FF4D2E"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
          />
        </svg>
      );

    default:
      return null;
  }
}

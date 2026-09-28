const fs = require('fs');

// We can construct both the pure standalone geometric SVG path and a styled React component
const markDarkBg = `<svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Dynamic Slanted R+Z Monogram for RAULTZ -->
  <g transform="skewX(-16) translate(22, 6)">
    <!-- Architectural "R" Outer Frame in Crisp Frost White / Carbon -->
    <!-- R Left Backbone Stem -->
    <path 
      d="M 10 18 H 25 L 14 88 H -1 Z" 
      fill="currentColor" 
      opacity="0.95"
    />
    
    <!-- R Upper Aerodynamic Loop -->
    <path 
      d="M 22 18 H 68 C 86 18 99 27 99 43 C 99 57 88 67 70 67 H 52 L 58 55 H 68 C 76 55 83 50 83 43 C 83 36 77 30 68 30 H 34 Z" 
      fill="currentColor" 
      opacity="0.95"
    />
    
    <!-- R Dynamic Kick Leg -->
    <path 
      d="M 58 56 H 73 L 95 88 H 80 Z" 
      fill="currentColor" 
      opacity="0.95"
    />

    <!-- The Bold Electric Red / Terracotta "Z" Centerpiece -->
    <path 
      d="M 28 26 H 68 L 61 38 H 45 L 26 73 H 66 L 59 86 H 14 L 21 74 L 40 38 H 22 Z" 
      fill="#FF4D2E" 
    />
  </g>
</svg>`;

console.log("Vector mark created.");

const fs = require('fs');

// Create test SVG generator
function generateLogoSVG({ rColor = "#161616", zColor = "#FF4D2E", width = 120, height = 80, bg = "transparent" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="${width}" height="${height}" fill="none">
  ${bg !== "transparent" ? `<rect width="100%" height="100%" fill="${bg}"/>` : ""}
  <g transform="skewX(-16) translate(22, 5)">
    <!-- Architectural "R" Outer Frame & Geometry -->
    <!-- R Left Vertical / Stem Segment -->
    <path 
      d="M 12 18 L 26 18 L 16 92 L 2 92 Z" 
      fill="${rColor}" 
    />
    
    <!-- R Top Loop / Upper Bowl -->
    <path 
      d="M 24 18 L 74 18 C 92 18 106 28 106 44 C 106 58 95 68 76 68 L 56 68 L 62 55 L 74 55 C 83 55 90 49 90 43 C 90 35 83 31 72 31 L 38 31 L 40 18 Z" 
      fill="${rColor}" 
    />
    
    <!-- R Bottom Right Kick Leg -->
    <path 
      d="M 64 56 L 78 56 L 102 92 L 86 92 Z" 
      fill="${rColor}" 
    />

    <!-- The Bold Red "Z" Centerpiece (Interlocking & Dominant) -->
    <path 
      d="M 28 26 L 68 26 L 62 38 L 44 38 L 24 74 L 64 74 L 58 86 L 12 86 L 18 74 L 38 38 L 22 38 Z" 
      fill="${zColor}" 
    />
  </g>
</svg>`;
}

console.log("Testing basic SVG generation...");

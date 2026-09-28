const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '../public/brand');
if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

// 1. Standalone Mark (SVG)
const markSvg = `<svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="raultzZGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5C3B" />
      <stop offset="100%" stop-color="#E53517" />
    </linearGradient>
  </defs>
  <g transform="skewX(-16) translate(22, 6)">
    <!-- R Frame -->
    <path d="M 14 18 H 28 L 22 50 H 8 L 0 92 H 14 L 20 62 H 30 L 37 18 Z" fill="#FFFFFF" opacity="0.95"/>
    <path d="M 30 18 H 74 C 92 18 104 27 104 43 C 104 57 93 67 75 67 H 58 L 64 55 H 74 C 82 55 88 50 88 43 C 88 36 82 30 72 30 H 42 Z" fill="#FFFFFF" opacity="0.95"/>
    <path d="M 64 56 H 79 L 102 92 H 87 Z" fill="#FFFFFF" opacity="0.95"/>
    <!-- Z Centerpiece -->
    <path d="M 34 26 H 76 L 69 38 H 52 L 32 73 H 74 L 67 86 H 20 L 27 74 L 46 38 H 28 Z" fill="url(#raultzZGradient)"/>
  </g>
</svg>`;

// 2. Full Lockup Dark (For dark surfaces)
const fullDarkSvg = `<svg viewBox="0 0 380 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="raultzZGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5C3B" />
      <stop offset="100%" stop-color="#E53517" />
    </linearGradient>
  </defs>
  <!-- Mark -->
  <g transform="skewX(-16) translate(22, 6)">
    <path d="M 14 18 H 28 L 22 50 H 8 L 0 92 H 14 L 20 62 H 30 L 37 18 Z" fill="#FFFFFF" opacity="0.95"/>
    <path d="M 30 18 H 74 C 92 18 104 27 104 43 C 104 57 93 67 75 67 H 58 L 64 55 H 74 C 82 55 88 50 88 43 C 88 36 82 30 72 30 H 42 Z" fill="#FFFFFF" opacity="0.95"/>
    <path d="M 64 56 H 79 L 102 92 H 87 Z" fill="#FFFFFF" opacity="0.95"/>
    <path d="M 34 26 H 76 L 69 38 H 52 L 32 73 H 74 L 67 86 H 20 L 27 74 L 46 38 H 28 Z" fill="url(#raultzZGrad)"/>
  </g>
  <!-- Wordmark -->
  <text x="165" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Plus Jakarta Sans', sans-serif" font-size="52" font-weight="900" letter-spacing="-0.04em" fill="#FFFFFF">
    RAULT<tspan fill="#FF4D2E">Z.</tspan>
  </text>
</svg>`;

// 3. Full Lockup Light (For light surfaces)
const fullLightSvg = `<svg viewBox="0 0 380 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="raultzZGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5C3B" />
      <stop offset="100%" stop-color="#E53517" />
    </linearGradient>
  </defs>
  <!-- Mark -->
  <g transform="skewX(-16) translate(22, 6)">
    <path d="M 14 18 H 28 L 22 50 H 8 L 0 92 H 14 L 20 62 H 30 L 37 18 Z" fill="#161616"/>
    <path d="M 30 18 H 74 C 92 18 104 27 104 43 C 104 57 93 67 75 67 H 58 L 64 55 H 74 C 82 55 88 50 88 43 C 88 36 82 30 72 30 H 42 Z" fill="#161616"/>
    <path d="M 64 56 H 79 L 102 92 H 87 Z" fill="#161616"/>
    <path d="M 34 26 H 76 L 69 38 H 52 L 32 73 H 74 L 67 86 H 20 L 27 74 L 46 38 H 28 Z" fill="url(#raultzZGradLight)"/>
  </g>
  <!-- Wordmark -->
  <text x="165" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Plus Jakarta Sans', sans-serif" font-size="52" font-weight="900" letter-spacing="-0.04em" fill="#161616">
    RAULT<tspan fill="#FF4D2E">Z.</tspan>
  </text>
</svg>`;

// 4. Square Favicon Icon
const faviconSvg = `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="128" height="128" rx="28" fill="#161616"/>
  <defs>
    <linearGradient id="favZ" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5C3B" />
      <stop offset="100%" stop-color="#E53517" />
    </linearGradient>
  </defs>
  <g transform="translate(4, 12) scale(0.75) skewX(-16)">
    <path d="M 14 18 H 28 L 22 50 H 8 L 0 92 H 14 L 20 62 H 30 L 37 18 Z" fill="#FFFFFF"/>
    <path d="M 30 18 H 74 C 92 18 104 27 104 43 C 104 57 93 67 75 67 H 58 L 64 55 H 74 C 82 55 88 50 88 43 C 88 36 82 30 72 30 H 42 Z" fill="#FFFFFF"/>
    <path d="M 64 56 H 79 L 102 92 H 87 Z" fill="#FFFFFF"/>
    <path d="M 34 26 H 76 L 69 38 H 52 L 32 73 H 74 L 67 86 H 20 L 27 74 L 46 38 H 28 Z" fill="url(#favZ)"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(brandDir, 'raultz-mark.svg'), markSvg);
fs.writeFileSync(path.join(brandDir, 'raultz-logo-dark.svg'), fullDarkSvg);
fs.writeFileSync(path.join(brandDir, 'raultz-logo-light.svg'), fullLightSvg);
fs.writeFileSync(path.join(brandDir, 'favicon.svg'), faviconSvg);

// Also write to app/icon.svg for Next.js App Router dynamic favicon
fs.writeFileSync(path.join(__dirname, '../app/icon.svg'), faviconSvg);

console.log("Brand SVG assets generated successfully!");

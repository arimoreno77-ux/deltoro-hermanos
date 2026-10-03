import React from 'react';

export default function HudBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Matte black / dark asphalt base */}
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-98"></div>

      {/* Cyber-Industrial Circuit SVG Grid with Gold & Green accents (Static background lines) */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D7B86C" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#045848" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D7B86C" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g stroke="url(#circuit-grad)" strokeWidth="1.5" fill="none" filter="url(#glow)">
          <path d="M 0,100 L 300,100 L 450,250 L 500,250" />
          <path d="M 100%,150 L 750,150 L 600,280 L 500,280" />
          <path d="M 0,80% L 250,80% L 400,600 L 500,600" />
          <path d="M 100%,85% L 800,85% L 650,550 L 500,550" />
          <path d="M 50%,0 L 50%,200" />
          <path d="M 50%,100% L 50%,700" />
          <path d="M 200,0 L 350,150 L 450,150" />
          <path d="M 800,0 L 650,200 L 550,200" />
        </g>

        <pattern id="hud-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D7B86C" strokeWidth="0.5" strokeOpacity="0.06" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hud-grid)" />
      </svg>
    </div>
  );
}

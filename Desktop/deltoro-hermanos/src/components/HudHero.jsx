import React, { useState, useEffect, useRef } from 'react';

export default function HudHero() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => {
      const startTime = performance.now();
      const duration = 1100;
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount1(Math.round(ease * 100));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 150);

    const t2 = setTimeout(() => {
      const startTime = performance.now();
      const duration = 900;
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount2(Math.round(ease * 24));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 300);

    const t3 = setTimeout(() => {
      const startTime = performance.now();
      const duration = 1100;
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount3(Math.round(ease * 100));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Direct, butter-smooth proportional rotation for crane boom
  const boomAngle = mousePos.x * 22 - mousePos.y * 14;
  const lat = (34.6037 + mousePos.y * 0.05).toFixed(4);
  const lon = (58.3816 + mousePos.x * 0.05).toFixed(4);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-6 pb-20 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-800"
    >
      {/* HUD Corner Technical Readouts */}
      <div className="absolute top-6 left-6 hidden lg:block font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase pointer-events-none z-20">
        <div>[SYS.CORE: DELTORO_HERMANOS_HUD]</div>
        <div>[LAT: {lat}° S, LON: {lon}° W]</div>
        <div>[STATUS: OPTIMAL_GREEN]</div>
      </div>

      <div className="absolute top-6 right-6 hidden lg:block font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase text-right pointer-events-none z-20">
        <div>[SEC: 04 - INDUSTRIAL_LIFT]</div>
        <div>[CAPACITY: 100t MAX]</div>
        <div>[MODE: AUTONOMOUS_LOGISTICS]</div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left / Center Main Content */}
        <div className="lg:col-span-8 text-center lg:text-left space-y-8 z-20">
          
          {/* Brutalist Giant Single-Line Title */}
          <div className="overflow-visible w-full">
            <h1 className="font-display font-black text-4xl sm:text-7xl lg:text-[7.5vw] tracking-tighter uppercase leading-tight sm:leading-none whitespace-normal sm:whitespace-nowrap text-white select-none">
              PLANIFICACIÓN. <br className="block sm:hidden" />
              <span className="text-[#D7B86C] drop-shadow-[0_0_40px_rgba(215,184,108,0.5)]">IZAJE.</span> INGENIERÍA.
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed font-sans">
            Ingeniería de izaje para equipos de pequeño, mediano y gran porte, mudanzas familiares, oficinas e industriales complejas y logística corporativa ejecutadas bajo rigurosos estándares de seguridad y certificación. Combinamos tecnología de vanguardia y precisión milimétrica con una atención personalizada para cada necesidad.
          </p>

          {/* Technical HUD Stats Footer */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-gray-800 font-mono text-xs">
            <div className="flex flex-col items-center lg:items-start space-y-1.5 animate-metric-1">
              <span className="text-[#D7B86C] font-bold text-[1.95rem] leading-tight">{count1}t+</span>
              <span className="text-gray-400 text-[0.9075rem] leading-snug">Capacidad Izaje</span>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-1.5 animate-metric-2">
              <span className="text-[#D7B86C] font-bold text-[1.95rem] leading-tight">{count2}/7</span>
              <span className="text-gray-400 text-[0.9075rem] leading-snug">Monitoreo Activo</span>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-1.5 animate-metric-3">
              <span className="text-[#D7B86C] font-bold text-[1.95rem] leading-tight">{count3}%</span>
              <span className="text-gray-400 text-[0.9075rem] leading-snug">Seguridad Certificada</span>
            </div>
          </div>

        </div>

        {/* Right Column: Telescopic Crane Boom overlapping with brutalist title (Hidden on mobile, visible on lg+ screens) */}
        <div className="hidden lg:flex lg:col-span-4 relative h-96 items-center justify-end overflow-visible pointer-events-none -ml-16 lg:-ml-32 z-30 animate-crane-slide-up">
          
          {/* SVG Telescopic Boom anchored off-screen bottom-right */}
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] flex items-end justify-end pointer-events-none">
            <svg 
              className="w-full h-full drop-shadow-[0_0_35px_rgba(215,184,108,0.45)] origin-bottom-right" 
              viewBox="0 0 500 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: `rotate(${boomAngle}deg)`,
                transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {/* Hydraulic Piston Cylinder (Green #045848) */}
              <path d="M 420 420 L 320 280 L 340 270 L 440 410 Z" fill="#045848" stroke="#D7B86C" strokeWidth="2" />
              <line x1="330" y1="275" x2="430" y2="415" stroke="#D7B86C" strokeWidth="2.5" />

              {/* Main Telescopic Boom / Jib Arm (Green #045848 structure with Gold #D7B86C details) */}
              <polygon points="500,500 480,480 200,180 220,165" fill="#111827" stroke="#045848" strokeWidth="4" />
              
              {/* Internal Lattice Truss / Cyber Details */}
              <line x1="220" y1="175" x2="480" y2="485" stroke="#045848" strokeWidth="3" />
              <line x1="210" y1="172" x2="490" y2="490" stroke="#D7B86C" strokeWidth="1.5" strokeDasharray="12 6" />
              
              <line x1="250" y1="210" x2="300" y2="230" stroke="#D7B86C" strokeWidth="2" />
              <line x1="300" y1="230" x2="280" y2="255" stroke="#D7B86C" strokeWidth="2" />
              <line x1="330" y1="280" x2="380" y2="300" stroke="#D7B86C" strokeWidth="2" />
              <line x1="380" y1="300" x2="360" y2="325" stroke="#D7B86C" strokeWidth="2" />

              {/* Tip Head / Reflector / Spotlight (Gold #D7B86C glowing) */}
              <circle cx="210" cy="172" r="14" fill="#D7B86C" className="drop-shadow-[0_0_20px_#D7B86C]" />
              <circle cx="210" cy="172" r="8" fill="#045848" />

              {/* Taut Steel Cable & Counter-Rotated Vertical Hook Block */}
              <g transform={`rotate(${-boomAngle}, 210, 172)`}>
                <g className="animate-hook-initial-swing">
                  {/* Taut Vertical Steel Cable */}
                  <line x1="210" y1="172" x2="210" y2="290" stroke="#D7B86C" strokeWidth="3" />
                  
                  {/* Sheave / Hook Block */}
                  <rect x="195" y="290" width="30" height="25" rx="4" fill="#111827" stroke="#D7B86C" strokeWidth="2.5" className="drop-shadow-[0_0_12px_#D7B86C]" />
                  <circle cx="210" cy="302.5" r="5" fill="#D7B86C" />

                  {/* Replaced Hook with gancho-removebg-preview.png image */}
                  <image 
                    href="./images/gancho-removebg-preview.png" 
                    x="185" 
                    y="312" 
                    width="50" 
                    height="50" 
                    preserveAspectRatio="xMidYMid meet"
                    className="drop-shadow-[0_0_10px_#D7B86C]"
                  />
                </g>
              </g>

            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}

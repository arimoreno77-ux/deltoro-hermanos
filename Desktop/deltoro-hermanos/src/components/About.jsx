import { useState, useEffect, useRef } from 'react';

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/-[]&";

function decipherElement(el, targetText, duration = 400) {
  if (!el) return;
  const startTime = performance.now();
  const len = targetText.length;

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    let result = "";
    for (let i = 0; i < len; i++) {
      const charTargetProgress = (i + 1) / len;
      const threshold = charTargetProgress * 0.85;

      if (progress === 1 || ease >= 1 || (progress > threshold && Math.random() < (progress - threshold) / (1 - threshold))) {
        result += targetText[i];
      } else {
        result += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
    }

    el.textContent = result;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = targetText;
    }
  };

  requestAnimationFrame(update);
}

export default function About() {
  const [isEnglish, setIsEnglish] = useState(true);
  const upperRef = useRef(null);
  const lowerRef = useRef(null);

  // 12-second language toggle interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  // Trigger text decipher on language change
  useEffect(() => {
    const upperTarget = isEnglish
      ? "[DELTORO_HERMANOS // CORPORATE_HERITAGE_V1.0 — FOUNDATION_&_VALUES]"
      : "[DELTORO_HERMANOS // HERENCIA_CORPORATIVA_V1.0 — FUNDAMENTOS_Y_VALORES]";
    decipherElement(upperRef.current, upperTarget);

    const lowerTarget = isEnglish
      ? "[TRACK_RECORD // DECADES_OF_EXPERIENCE — SAFETY_COMMITMENT]"
      : "[TRAYECTORIA // DECADAS_DE_EXPERIENCIA — COMPROMISO_DE_SEGURIDAD]";
    decipherElement(lowerRef.current, lowerTarget);
  }, [isEnglish]);

  return (
    <section id="trayectoria" className="relative py-32 sm:py-40 bg-[#0A0A0A] border-b border-gray-800 overflow-hidden">
      {/* Background Blueprint Technical Grid with Radial Fade Mask */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        style={{
          maskImage: 'radial-gradient(circle at 75% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 20%, transparent 45%)',
          WebkitMaskImage: 'radial-gradient(circle at 75% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 20%, transparent 45%)'
        }}
      >
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#D7B86C_1px,transparent_1px),linear-gradient(to_bottom,#D7B86C_1px,transparent_1px)] bg-[size:56px_56px]"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D7B86C]/30 to-transparent"></div>
      </div>

      {/* HUD Corner Framing Lines & Technical Readouts - Top Band */}
      <div className="absolute top-6 left-6 hidden lg:block p-3 border-t-2 border-l-2 border-[#D7B86C]/40 pointer-events-none z-20">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[SYS.MODULE: BLUEPRINT_GRID_VIEW]</div>
          <div>[GEO.COORD: 34.6037° S, 58.3816° W]</div>
        </div>
      </div>

      <div className="absolute top-6 right-6 hidden lg:block p-3 border-t-2 border-r-2 border-[#D7B86C]/40 pointer-events-none z-20 text-right">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[STRUCT.CHECK: OK_NOMINAL]</div>
          <div>[SCALE: 1:100_ENGINEERING]</div>
        </div>
      </div>

      {/* HUD Corner Framing Lines & Technical Readouts - Bottom Band */}
      <div className="absolute bottom-4 left-4 sm:left-6 hidden lg:flex flex-col gap-0.5 border-b-2 border-l-2 border-[#D7B86C]/40 p-2 pointer-events-none z-20">
        <span className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase">[FLEET_STATUS: ACTIVE_FLEET]</span>
        <span className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase">[HYDRAULIC_PRESS: 350 BAR]</span>
      </div>

      <div className="absolute bottom-4 right-4 sm:right-6 hidden lg:flex flex-col gap-0.5 border-b-2 border-r-2 border-[#D7B86C]/40 p-2 text-right pointer-events-none z-20">
        <span className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase">[RIGGING_CHECK: PASSED_100%]</span>
        <span className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase">[WIND_MAX: 45 KM/H SAFETY]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro text / Header */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div ref={upperRef} className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase mb-2">
            {isEnglish
              ? "[DELTORO_HERMANOS // CORPORATE_HERITAGE_V1.0 — FOUNDATION_&_VALUES]"
              : "[DELTORO_HERMANOS // HERENCIA_CORPORATIVA_V1.0 — FUNDAMENTOS_Y_VALORES]"}
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
            <span className="text-white">Trayectoria</span> <span className="text-[#D7B86C]">y Compromiso</span>
          </h2>

          <div ref={lowerRef} className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase mt-2 mb-4">
            {isEnglish
              ? "[TRACK_RECORD // DECADES_OF_EXPERIENCE — SAFETY_COMMITMENT]"
              : "[TRAYECTORIA // DECADAS_DE_EXPERIENCIA — COMPROMISO_DE_SEGURIDAD]"}
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans pt-2">
            En <strong className="text-white">Deltoro Hermanos</strong> llevamos años consolidándonos como un referente ineludible en el rubro de izajes, elevación de cargas pesadas y mudanzas integrales. Nuestra impronta familiar garantiza honestidad, cercanía y un trato personalizado en cada operación.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            Combinamos equipos modernos, grúas especializadas y un equipo humano altamente capacitado para resolver desde traslados residenciales hasta complejas maniobras industriales y corporativas con absoluta seguridad.
          </p>
        </div>

      </div>
    </section>
  );
}

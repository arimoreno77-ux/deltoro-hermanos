import { useState, useEffect, useRef } from 'react';
import servicesData from '../data/services.json';
import { Truck, Factory, Building2, Home, ArrowRight } from 'lucide-react';

const iconWatermarkMap = {
  Crane: <Truck className="w-20 h-20 text-[#045848]" />,
  Factory: <Factory className="w-20 h-20 text-[#045848]" />,
  Building2: <Building2 className="w-20 h-20 text-[#045848]" />,
  Home: <Home className="w-20 h-20 text-[#045848]" />,
};

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/-[]";

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

export default function Services() {
  const whatsappNumber = "5491100000000";
  const [isEnglish, setIsEnglish] = useState(true);
  const [countVal, setCountVal] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Ref for header and lower microtext decipher targets
  const headerRef = useRef(null);
  const lowerRef = useRef(null);

  // 12-second language toggle interval for header
  useEffect(() => {
    const timer = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  // Trigger text decipher on language change for header and lower microtext
  useEffect(() => {
    const headerTarget = isEnglish
      ? "[DELTORO_HERMANOS // SPECIALIZED_SERVICES_V1.0 — HEAVY_LIFT_LOGISTICS]"
      : "[DELTORO_HERMANOS // SERVICIOS_ESPECIALIZADOS_V1.0 — LOGISTICA_DE_IZAJE]";
    decipherElement(headerRef.current, headerTarget);

    const lowerTarget = isEnglish
      ? "[ACTIVE_MODULES // 4_SERVICES_LOADED — CERTIFIED_SPECS]"
      : "[MODULOS_ACTIVOS // 4_SERVICIOS_CARGADOS — ESPEC_CERTIFICADAS]";
    decipherElement(lowerRef.current, lowerTarget);
  }, [isEnglish]);

  // IntersectionObserver for count-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();
            const duration = 1200;
            const animateCount = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              setCountVal(Math.round(ease * 4));
              if (progress < 1) {
                requestAnimationFrame(animateCount);
              }
            };
            requestAnimationFrame(animateCount);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="servicios" className="py-12 sm:py-32 bg-[#0A0A0A] relative border-y border-gray-800 overflow-hidden">
      {/* Background Blueprint Technical Grid with Radial Fade Mask */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        style={{
          maskImage: 'radial-gradient(circle at 25% 80%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 20%, transparent 45%)',
          WebkitMaskImage: 'radial-gradient(circle at 25% 80%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 20%, transparent 45%)'
        }}
      >
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#D7B86C_1px,transparent_1px),linear-gradient(to_bottom,#D7B86C_1px,transparent_1px)] bg-[size:56px_56px]"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D7B86C]/30 to-transparent"></div>
      </div>

      {/* HUD Corner Framing Lines & Technical Readouts - Top Band */}
      <div className="absolute top-6 left-6 hidden lg:block p-3 border-t border-l border-[#D7B86C]/40 pointer-events-none z-20">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[LOAD_LIMIT: 100,000 KG MAX]</div>
          <div>[TOLERANCE: ±0.05 MM]</div>
        </div>
      </div>

      <div className="absolute top-6 right-6 hidden lg:block p-3 border-t border-r border-[#D7B86C]/40 pointer-events-none z-20 text-right">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[BOOM_REACH: 48.5 M EXT]</div>
          <div>[CERT: ASME_B30.5 / OSHA]</div>
        </div>
      </div>

      {/* HUD Corner Framing Lines & Technical Readouts - Bottom Band */}
      <div className="absolute bottom-6 left-6 hidden lg:block p-3 border-b border-l border-[#D7B86C]/40 pointer-events-none z-20">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[FLEET_STATUS: ACTIVE_FLEET]</div>
          <div>[HYDRAULIC_PRESS: 350 BAR]</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden lg:block p-3 border-b border-r border-[#D7B86C]/40 pointer-events-none z-20 text-right">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[RIGGING_CHECK: PASSED_100%]</div>
          <div>[WIND_MAX: 45 KM/H SAFETY]</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-6 sm:my-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div ref={headerRef} className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase mb-2">
            {isEnglish
              ? "[DELTORO_HERMANOS // SPECIALIZED_SERVICES_V1.0 — HEAVY_LIFT_LOGISTICS]"
              : "[DELTORO_HERMANOS // SERVICIOS_ESPECIALIZADOS_V1.0 — LOGISTICA_DE_IZAJE]"}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Servicios <span className="text-[#D7B86C]">Especializados</span>
          </h2>
          <div ref={lowerRef} className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase mt-2">
            {isEnglish
              ? "[ACTIVE_MODULES // 4_SERVICES_LOADED — CERTIFIED_SPECS]"
              : "[MODULOS_ACTIVOS // 4_SERVICIOS_CARGADOS — ESPEC_CERTIFICADAS]"}
          </div>
        </div>

        {/* Services Grid with Technical Cell Border Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gray-800/80 border border-gray-800 rounded-2xl max-w-5xl mx-auto overflow-hidden shadow-[0_0_30px_rgba(4,88,72,0.15)]">
          {servicesData.map((service) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Deltoro%20Hermanos,%20quiero%20solicitar%20presupuesto%20para%20el%20servicio%20de:%20${encodeURIComponent(service.title)}`;

            return (
              <div
                key={service.id}
                className="bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:bg-gray-900/60"
              >
                {/* Background Watermark Icon in Top-Right Corner */}
                <div className="absolute top-0 right-0 pointer-events-none z-0 opacity-15 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-2 group-hover:opacity-30 transition-all duration-500 ease-out">
                  {iconWatermarkMap[service.icon] || <Truck className="w-20 h-20 text-[#045848]" />}
                </div>

                <div className="relative z-10 pr-12">
                  {/* Title & Divider Bar & Description */}
                  <div className="inline-block relative">
                    <h3 className="font-display font-black text-base sm:text-lg text-white leading-tight">
                      {service.title}
                    </h3>
                    <div className="mt-2 w-full h-[2px] bg-[#D7B86C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mb-4 font-sans mt-3">
                    {service.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 mt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-[#0A0A0A] hover:bg-[#D7B86C] text-white hover:text-[#0A0A0A] font-mono font-bold py-2 px-3 rounded-lg border border-[#045848] hover:border-[#D7B86C] transition-all duration-300 group/btn text-[11px] uppercase tracking-wider"
                  >
                    <span>Cotizar vía WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

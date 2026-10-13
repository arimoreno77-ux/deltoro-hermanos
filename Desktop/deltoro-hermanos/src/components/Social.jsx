import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Mail, MapPin, Clock } from 'lucide-react';

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

export default function Social() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const upperRef = useRef(null);
  const lowerRef = useRef(null);

  // 12-second language toggle interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  // Native scroll listener for hook tilt & translate in the final scroll stretch (up to -23deg)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) return;
      const currentScroll = window.scrollY;
      const distanceToBottom = scrollTotal - currentScroll;
      
      const triggerDistance = 950;
      if (distanceToBottom <= triggerDistance) {
        const progress = Math.min(1, Math.max(0, (triggerDistance - distanceToBottom) / triggerDistance));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger text decipher on language change
  useEffect(() => {
    const upperTarget = isEnglish
      ? "[DELTORO_HERMANOS // DIRECT_CHANNELS_V1.0 — CONNECT_&_QUOTE]"
      : "[DELTORO_HERMANOS // CANALES_DIRECTOS_V1.0 — CONTACTO_Y_COTIZACION]";
    decipherElement(upperRef.current, upperTarget);

    const lowerTarget = isEnglish
      ? "[COMMUNICATION_HUB // INSTANT_SUPPORT — SOCIAL_NETWORKS_&_LOCATION]"
      : "[CENTRO_DE_COMUNICACION // ATENCION_INMEDIATA — REDES_Y_UBICACION]";
    decipherElement(lowerRef.current, lowerTarget);
  }, [isEnglish]);

  return (
    <section id="contacto" className="relative pt-32 sm:pt-40 pb-[36px] sm:pb-[52px] bg-[#0A0A0A] overflow-hidden">
      {/* Background Blueprint Technical Grid with Radial Fade Mask */}
      <div 
        className="absolute right-0 w-full md:w-1/2 inset-y-0 pointer-events-none overflow-hidden z-0"
        style={{
          maskImage: 'radial-gradient(circle at 70% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 35%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 35%, transparent 70%)'
        }}
      >
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#D7B86C_1px,transparent_1px),linear-gradient(to_bottom,#D7B86C_1px,transparent_1px)] bg-[size:56px_56px]"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D7B86C]/30 to-transparent"></div>
      </div>

      {/* HUD Corner Framing Lines & Technical Readouts - Top-Left */}
      <div className="absolute top-6 left-6 hidden lg:block p-3 border-t-2 border-l-2 border-[#D7B86C]/40 pointer-events-none z-20">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[SYS.CONTACT_NODES]</div>
          <div>[NET.SOCIAL_FEED]</div>
        </div>
      </div>

      {/* HUD Corner Framing Lines & Technical Readouts - Top-Right */}
      <div className="absolute top-6 right-6 hidden lg:block p-3 border-t-2 border-r-2 border-[#D7B86C]/40 pointer-events-none z-20 text-right">
        <div className="font-mono text-[11px] text-[#D7B86C]/80 tracking-widest uppercase space-y-0.5">
          <div>[COMM_LINK: ONLINE_24/7]</div>
          <div>[ARG_HQ_DISPATCH]</div>
        </div>
      </div>

      {/* Background Hook Watermark Accent (imagengancho-removebg-preview.png) with scroll tilt & translate animation */}
      <div className="absolute right-[-8%] sm:right-[-10%] bottom-2 sm:bottom-4 pointer-events-none z-0 opacity-25 sm:opacity-30 overflow-hidden">
        <img 
          src="./images/imagengancho-removebg-preview.png" 
          alt="Deltoro Hermanos Hook Accent" 
          className="max-h-[275px] sm:max-h-[450px] lg:max-h-[550px] w-auto object-contain select-none"
          style={{
            filter: 'sepia(100%) hue-rotate(5deg) saturate(220%) brightness(85%)',
            transform: `translateX(${-40 * scrollProgress}px) rotate(${-23 * scrollProgress}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div ref={upperRef} className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase mb-2">
            {isEnglish
              ? "[DELTORO_HERMANOS // DIRECT_CHANNELS_V1.0 — CONNECT_&_QUOTE]"
              : "[DELTORO_HERMANOS // CANALES_DIRECTOS_V1.0 — CONTACTO_Y_COTIZACION]"}
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Contacto y <span className="text-[#D7B86C]">Redes Sociales</span>
          </h2>

          <div ref={lowerRef} className="font-mono text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase mt-2 mb-4">
            {isEnglish
              ? "[COMMUNICATION_HUB // INSTANT_SUPPORT — SOCIAL_NETWORKS_&_LOCATION]"
              : "[CENTRO_DE_COMUNICACION // ATENCION_INMEDIATA — REDES_Y_UBICACION]"}
          </div>

          <p className="mt-4 text-gray-300 text-base sm:text-lg font-sans">
            Conectá con nosotros en nuestras redes sociales para ver trabajos en tiempo real o comunicate por nuestros canales oficiales.
          </p>
        </div>

        {/* 2 Columns Floating Layout (No card boxes around items or outer container) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto items-start relative z-10">
          
          {/* Column 1: Social Profiles */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Seguinos en Redes
              </h3>

              <div className="space-y-4 font-mono">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 pr-2 border-b border-gray-800 relative group overflow-visible"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D7B86C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-10"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 text-[#D7B86C] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#D7B86C]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">Facebook</h4>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D7B86C] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Visitar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 pr-2 border-b border-gray-800 relative group overflow-visible"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D7B86C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-10"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 text-[#D7B86C] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#D7B86C]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">LinkedIn</h4>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D7B86C] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Conectar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 pr-2 border-b border-gray-800 relative group overflow-visible"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D7B86C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-10"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 text-[#D7B86C] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#D7B86C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">Instagram</h4>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D7B86C] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Seguir</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col justify-between h-full border-t md:border-t-0 md:border-l border-gray-800 pt-8 md:pt-0 md:pl-12">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Datos de Contacto
              </h3>

              <div className="space-y-6 font-mono text-xs">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-[#D7B86C] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Correo Electrónico</h4>
                    <p className="text-sm text-gray-300 mt-0.5">contacto@deltorohermanos.com</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-sans">Presupuestos formales y licitaciones</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-[#D7B86C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Ubicación Operativa</h4>
                    <p className="text-sm text-gray-300 mt-0.5 font-sans">Buenos Aires, Argentina (Base y Logística)</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-sans">Cobertura en todo el país</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-[#D7B86C] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Horario de Atención</h4>
                    <p className="text-sm text-gray-300 mt-0.5 font-sans">Lunes a Sábados: 08:00 - 18:00 hs</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-sans">Emergencias e Izajes especiales 24/7</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import { ExternalLink, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function Social() {
  const whatsappNumber = "5491100000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Deltoro%20Hermanos,%20me%20gustaría%20realizar%20una%20consulta.`;

  return (
    <section id="contacto" className="py-24 bg-[#111827] border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Contacto y <span className="text-[#D7B86C]">Redes Sociales</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg font-sans">
            Conectá con nosotros en nuestras redes sociales para ver trabajos en tiempo real o comunicate por nuestros canales oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Social Proof & Profiles Card (HUD Flat Style) */}
          <div className="lg:col-span-6 bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
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
                  className="flex items-center justify-between py-4 border-b border-gray-800 hover:border-[#045848] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#045848]/20 text-[#D7B86C] rounded-lg flex items-center justify-center border border-[#045848]">
                      <svg className="w-5 h-5 text-[#D7B86C]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">Facebook Oficial</h4>
                      <p className="text-xs text-gray-400 font-sans">Galería de trabajos y novedades diarias</p>
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
                  className="flex items-center justify-between py-4 border-b border-gray-800 hover:border-[#045848] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#045848]/20 text-[#D7B86C] rounded-lg flex items-center justify-center border border-[#045848]">
                      <svg className="w-5 h-5 text-[#D7B86C]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">LinkedIn Corporativo</h4>
                      <p className="text-xs text-gray-400 font-sans">Servicios industriales y corporativos</p>
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
                  className="flex items-center justify-between py-4 hover:border-[#045848] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#045848]/20 text-[#D7B86C] rounded-lg flex items-center justify-center border border-[#045848]">
                      <svg className="w-5 h-5 text-[#D7B86C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">Instagram</h4>
                      <p className="text-xs text-gray-400 font-sans">Reels de maniobras y fotos de flota</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D7B86C] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Seguir</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 text-center font-mono">
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                [DELTORO_HERMANOS — REDES HUD]
              </span>
            </div>
          </div>

          {/* Institutional Data Card */}
          <div className="lg:col-span-6 bg-[#0A0A0A] border border-[#045848] rounded-2xl p-8 shadow-xl flex flex-col justify-between shadow-[0_0_25px_rgba(4,88,72,0.2)]">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Datos de Contacto
              </h3>

              <div className="space-y-6 font-mono text-xs">
                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#045848]/30 text-[#D7B86C] rounded-xl flex items-center justify-center border border-[#045848] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Teléfono / WhatsApp</h4>
                    <p className="text-sm text-gray-300 mt-0.5">+54 9 11 0000-0000</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-sans">Atención comercial inmediata</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#045848]/30 text-[#D7B86C] rounded-xl flex items-center justify-center border border-[#045848] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Correo Electrónico</h4>
                    <p className="text-sm text-gray-300 mt-0.5">contacto@deltorohermanos.com</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-sans">Presupuestos formales y licitaciones</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#045848]/30 text-[#D7B86C] rounded-xl flex items-center justify-center border border-[#045848] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Ubicación Operativa</h4>
                    <p className="text-sm text-gray-300 mt-0.5 font-sans">Buenos Aires, Argentina (Base y Logística)</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-sans">Cobertura en todo el país</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#045848]/30 text-[#D7B86C] rounded-xl flex items-center justify-center border border-[#045848] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Horario de Atención</h4>
                    <p className="text-sm text-gray-300 mt-0.5 font-sans">Lunes a Sábados: 08:00 - 18:00 hs</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-sans">Emergencias e Izajes especiales 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-mono font-bold py-3.5 px-6 rounded-xl shadow-lg transition-colors uppercase tracking-wide text-xs"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Iniciar Chat de WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

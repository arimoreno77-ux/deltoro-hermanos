import { Truck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800 text-zinc-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D7B86C] rounded-lg flex items-center justify-center text-[#0A0A0A]">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white uppercase">
                Deltoro <span className="text-[#D7B86C]">Hermanos</span>
              </span>
            </div>
            <p className="text-sm text-zinc-300 max-w-sm leading-relaxed font-sans">
              Empresa líder en izajes, elevación de cargas pesadas y mudanzas industriales, corporativas y familiares. Profesionalismo, seguridad y trayectoria garantizada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 uppercase tracking-wider font-mono text-xs text-[#D7B86C]">[NAVEGACIÓN]</h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a href="#servicios" className="text-zinc-300 hover:text-white transition-colors">Servicios de Izajes</a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-300 hover:text-white transition-colors">Mudanzas Industriales</a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-300 hover:text-white transition-colors">Mudanzas de Oficinas</a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-300 hover:text-white transition-colors">Mudanzas Familiares</a>
              </li>
              <li>
                <a href="#trayectoria" className="text-zinc-300 hover:text-white transition-colors">Quiénes Somos</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 uppercase tracking-wider font-mono text-xs text-[#D7B86C]">[CONTACTO]</h4>
            <ul className="space-y-2.5 text-sm font-mono">
              <li className="text-zinc-300">contacto@deltorohermanos.com</li>
              <li className="text-zinc-400 text-xs mt-2 font-sans">Buenos Aires, Argentina</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-mono">
          <p className="text-zinc-400">© {currentYear} Deltoro Hermanos. Todos los derechos reservados.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="text-[10px] sm:text-[11px] text-[#D7B86C]/80 tracking-widest uppercase text-center sm:text-left">[DELTORO_HERMANOS // FOOTER_SYSTEM_V1.0 — ALL_RIGHTS_RESERVED]</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 bg-gray-900 hover:bg-[#D7B86C] text-zinc-300 hover:text-[#0A0A0A] px-3.5 py-2 rounded-lg border border-gray-800 transition-colors"
              aria-label="Volver arriba"
            >
              <span>Arriba</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

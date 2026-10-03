import { Truck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F19] border-t border-gray-800 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-industrial-yellow rounded-lg flex items-center justify-center text-industrial-dark">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white uppercase">
                Deltoro <span className="text-industrial-yellow">Hermanos</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-sans">
              Empresa líder en izajes, elevación de cargas pesadas y mudanzas industriales, corporativas y familiares. Profesionalismo, seguridad y trayectoria garantizada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider font-mono text-xs text-industrial-yellow">[NAVEGACIÓN]</h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a href="#servicios" className="hover:text-industrial-yellow transition-colors">Servicios de Izajes</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-industrial-yellow transition-colors">Mudanzas Industriales</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-industrial-yellow transition-colors">Mudanzas de Oficinas</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-industrial-yellow transition-colors">Mudanzas Familiares</a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-industrial-yellow transition-colors">Quiénes Somos</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider font-mono text-xs text-industrial-yellow">[CONTACTO]</h4>
            <ul className="space-y-2.5 text-sm font-mono">
              <li className="text-gray-300">+54 9 11 0000-0000</li>
              <li className="text-gray-300">contacto@deltorohermanos.com</li>
              <li className="text-gray-400 text-xs mt-2 font-sans">Buenos Aires, Argentina</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-mono">
          <p>© {currentYear} Deltoro Hermanos. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-500">// IZAJES & MUDANZAS HUD</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 bg-gray-900 hover:bg-industrial-yellow text-gray-300 hover:text-industrial-dark px-3.5 py-2 rounded-lg border border-gray-800 transition-colors"
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

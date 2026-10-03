import { ArrowRight, ShieldCheck, Award, Clock } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "5491100000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Deltoro%20Hermanos,%20quiero%20cotizar%20un%20servicio%20de%20izaje%20o%20mudanza.`;

  return (
    <section className="relative bg-gradient-to-b from-industrial-charcoal to-industrial-dark py-20 lg:py-32 border-b border-gray-800 overflow-hidden">
      {/* Background Industrial Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-industrial-yellow/10 border border-industrial-yellow/30 px-3.5 py-1.5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-industrial-yellow animate-pulse"></span>
              <span className="text-industrial-yellow text-xs font-bold uppercase tracking-wider">
                Expertos en Logística Pesada & Izajes
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
              Elevación de cargas y mudanzas con <span className="text-industrial-yellow">máxima seguridad</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Especialistas en izajes de gran porte, mudanzas industriales, corporativas y familiares. Brindamos solidez, tecnología operativa y personal altamente capacitado para cada desafío logístico.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-industrial-yellow hover:bg-industrial-amber text-industrial-dark font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-industrial-yellow/20 transition-all transform hover:-translate-y-1 text-base uppercase tracking-wide"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold px-7 py-4 rounded-xl border border-gray-700 transition-all text-base"
              >
                <span>Ver Servicios</span>
              </a>
            </div>

            {/* Key Trust Stats / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-gray-800/80">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-industrial-yellow mb-1">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-display font-black text-xl text-white">100%</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Seguridad Operativa</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-industrial-yellow mb-1">
                  <Award className="w-5 h-5" />
                  <span className="font-display font-black text-xl text-white">+15 Años</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">De Trayectoria</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-industrial-yellow mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="font-display font-black text-xl text-white">24/7</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Atención y Logística</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-industrial-yellow to-industrial-amber rounded-2xl blur-xl opacity-20"></div>

              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
                
                {/* Header card indicator */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Deltoro Operaciones</span>
                </div>

                {/* Simulated Visual / Industrial Banner Graphic */}
                <div className="space-y-4">
                  <div className="h-52 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800 rounded-xl border border-gray-800 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                    
                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>

                    <div className="w-16 h-16 bg-industrial-yellow/10 rounded-2xl flex items-center justify-center mb-3 border border-industrial-yellow/20">
                      <span className="text-3xl">🏗️</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-1">
                      Maniobras de Gran Porte
                    </h3>
                    <p className="text-xs text-gray-400 max-w-xs">
                      Izajes industriales, contenedores, maquinaria pesada y mudanzas corporativas / familiares.
                    </p>
                  </div>

                  {/* Quick contact trigger */}
                  <div className="bg-industrial-charcoal/90 p-4 rounded-xl border border-gray-800 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">¿Tenés una consulta urgente?</h4>
                      <p className="text-xs text-gray-400">Cotización inmediata por WhatsApp</p>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-industrial-yellow hover:bg-industrial-amber text-industrial-dark text-xs font-extrabold px-4 py-2.5 rounded-lg transition-colors uppercase tracking-wider"
                    >
                      Consultar
                    </a>
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

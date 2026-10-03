import servicesData from '../data/services.json';
import { Truck, Factory, Building2, Home, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  Crane: <Truck className="w-8 h-8 text-[#D7B86C]" />,
  Factory: <Factory className="w-8 h-8 text-[#D7B86C]" />,
  Building2: <Building2 className="w-8 h-8 text-[#D7B86C]" />,
  Home: <Home className="w-8 h-8 text-[#D7B86C]" />,
};

export default function Services() {
  const whatsappNumber = "5491100000000";

  return (
    <section id="servicios" className="py-24 bg-[#0A0A0A] relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Servicios <span className="text-[#D7B86C]">Especializados</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg font-sans">
            Soluciones de izaje de gran porte y mudanzas industriales, corporativas y familiares con tecnología y seguridad certificada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Deltoro%20Hermanos,%20quiero%20solicitar%20presupuesto%20para%20el%20servicio%20de:%20${encodeURIComponent(service.title)}`;

            return (
              <div
                key={service.id}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:border-[#045848] transition-all duration-300 shadow-2xl group relative overflow-hidden"
              >
                {/* HUD Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D7B86C]/10 to-transparent pointer-events-none"></div>

                <div>
                  {/* Top row: Icon & Category badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-[#0A0A0A] rounded-2xl flex items-center justify-center border border-gray-800 group-hover:scale-105 transition-transform shadow-inner">
                      {iconMap[service.icon] || <Truck className="w-8 h-8 text-[#D7B86C]" />}
                    </div>
                    <span className="bg-[#0A0A0A] text-[#D7B86C] font-mono text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#045848] uppercase tracking-wider shadow-[0_0_10px_rgba(4,88,72,0.2)]">
                      [{service.category}]
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-2xl text-white mb-3 group-hover:text-[#D7B86C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 border-t border-gray-800 pt-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#D7B86C] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-[#D7B86C] text-white hover:text-[#0A0A0A] font-mono font-bold py-3.5 px-6 rounded-xl border border-[#045848] hover:border-[#D7B86C] transition-all duration-300 group/btn text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(4,88,72,0.2)]"
                  >
                    <span>Cotizar vía WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

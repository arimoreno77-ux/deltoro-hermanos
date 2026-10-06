import servicesData from '../data/services.json';
import { Truck, Factory, Building2, Home, ArrowRight } from 'lucide-react';

const iconWatermarkMap = {
  Crane: <Truck className="w-20 h-20 text-[#045848]" />,
  Factory: <Factory className="w-20 h-20 text-[#045848]" />,
  Building2: <Building2 className="w-20 h-20 text-[#045848]" />,
  Home: <Home className="w-20 h-20 text-[#045848]" />,
};

export default function Services() {
  const whatsappNumber = "5491100000000";

  return (
    <section id="servicios" className="py-6 sm:py-8 bg-[#0A0A0A] relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Servicios <span className="text-[#D7B86C]">Especializados</span>
          </h2>
        </div>

        {/* Services Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-5xl mx-auto items-stretch">
          {servicesData.map((service) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Deltoro%20Hermanos,%20quiero%20solicitar%20presupuesto%20para%20el%20servicio%20de:%20${encodeURIComponent(service.title)}`;

            return (
              <div
                key={service.id}
                className="bg-transparent border border-gray-800 rounded-xl p-4 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Watermark Icon in Top-Right Corner */}
                <div className="absolute top-0 right-0 pointer-events-none z-0 opacity-15 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-2 group-hover:opacity-30 transition-all duration-500 ease-out">
                  {iconWatermarkMap[service.icon] || <Truck className="w-20 h-20 text-[#045848]" />}
                </div>

                <div className="relative z-10">
                  {/* Title & Divider Bar & Description */}
                  <h3 className="font-display font-black text-base sm:text-lg text-white mb-1 leading-tight pr-12">
                    {service.title}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#045848] group-hover:w-[58%] group-hover:bg-[#D7B86C] transition-all duration-500 ease-out my-2"></div>
                  <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mb-3 font-sans">
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

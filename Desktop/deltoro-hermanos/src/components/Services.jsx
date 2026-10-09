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
    <section id="servicios" className="py-24 sm:py-32 bg-[#0A0A0A] relative border-y border-gray-800 overflow-hidden">
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
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            Servicios <span className="text-[#D7B86C]">Especializados</span>
          </h2>
        </div>

        {/* Services Grid with Technical Cell Border Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gray-800/80 border border-gray-800 rounded-2xl max-w-5xl mx-auto overflow-hidden shadow-[0_0_30px_rgba(4,88,72,0.15)]">
          {servicesData.map((service) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Deltoro%20Hermanos,%20quiero%20solicitar%20presupuesto%20para%20el%20servicio%20de:%20${encodeURIComponent(service.title)}`;

            return (
              <div
                key={service.id}
                className="bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:bg-[#111827]/50"
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
                  <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mb-4 font-sans">
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

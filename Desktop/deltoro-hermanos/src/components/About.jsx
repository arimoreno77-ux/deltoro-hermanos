export default function About() {
  return (
    <section id="trayectoria" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111827] border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro text / Header */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight text-center lg:text-left">
            Trayectoria, fuerza y <span className="text-[#D7B86C]">compromiso familiar</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans text-center lg:text-left">
            En <strong className="text-white">Deltoro Hermanos</strong> llevamos años consolidándonos como un referente ineludible en el rubro de izajes, elevación de cargas pesadas y mudanzas integrales. Nuestra impronta familiar garantiza honestidad, cercanía y un trato personalizado en cada operación.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans text-center lg:text-left">
            Combinamos equipos modernos, grúas especializadas y un equipo humano altamente capacitado para resolver desde traslados residenciales hasta complejas maniobras industriales y corporativas con absoluta seguridad.
          </p>
        </div>

        {/* 4 Text Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 pt-8 border-t border-gray-800">
          <div className="lg:pl-6 lg:pr-4 lg:border-r border-gray-800 pb-6 lg:pb-0 border-b lg:border-b-0">
            <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2">Seguridad Estricta</h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">Protocolos rigurosos y mantenimiento constante en cada unidad y maniobra.</p>
          </div>

          <div className="lg:px-4 lg:border-r border-gray-800 pb-6 lg:pb-0 border-b lg:border-b-0">
            <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2">Personal Experto</h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">Operarios profesionales con amplia experiencia en logística y cargas pesadas.</p>
          </div>

          <div className="lg:px-4 lg:border-r border-gray-800 pb-6 lg:pb-0 border-b lg:border-b-0">
            <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2">Experiencia Comprobada</h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">Años de trayectoria respaldando a grandes industrias y familias.</p>
          </div>

          <div className="lg:pl-4 lg:pr-6 pb-0">
            <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2">Puntualidad y Precisión</h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">Cumplimiento estricto en tiempos de entrega y ejecución de servicios.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

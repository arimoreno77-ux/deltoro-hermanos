import { content } from './data/content'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-black font-sans p-4 md:p-10 selection:bg-[#E61C1C] selection:text-white">
      {/* Streetwear / E-Commerce Drop Ticker Bar */}
      <div className="border-4 border-black bg-black text-white py-2 px-4 mb-6 shadow-[4px_4px_0px_0px_#E61C1C] flex justify-between items-center font-mono text-xs uppercase tracking-widest overflow-hidden whitespace-nowrap">
        <span className="animate-pulse text-[#E61C1C] font-black">● LIVE DROP 2026</span>
        <span>// DESIGN SYSTEM & PRODUCT BUILDING ARCHITECTURE // WORLDWIDE ACCESS</span>
        <span className="hidden md:inline bg-[#E61C1C] text-white px-2 py-0.5 font-bold">STATUS: AVAILABLE</span>
      </div>

      {/* Header / Brand Nav */}
      <header className="border-4 border-black bg-white p-6 mb-8 shadow-[8px_8px_0px_0px_#000000] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="font-mono text-xs uppercase bg-[#E61C1C] text-white px-2 py-1 inline-block font-black mb-2 border-2 border-black">
            STREETWEAR UX ARCHIVE
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {content.hero.name}
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
          <div className="border-3 border-black bg-[#F4F1EA] px-4 py-2 font-black shadow-[3px_3px_0px_0px_#000000]">
            BAG [0]
          </div>
          <a
            href={`mailto:${content.contact.email}`}
            className="brutalist-button px-5 py-2 uppercase font-black text-sm no-underline inline-block"
          >
            QUICK_INQUIRY ↗
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section / Collage Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Hero Card */}
          <div className="lg:col-span-8 bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between relative">
            <div className="absolute -top-4 -right-4 bg-[#E61C1C] text-white font-mono text-xs font-black px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_#000000] rotate-3 z-10">
              FEATURED RELEASE // 01
            </div>
            <div>
              <span className="inline-block bg-black text-white font-mono text-xs px-3 py-1 mb-6 uppercase tracking-widest border-2 border-black">
                {content.hero.role}
              </span>
              <p className="text-2xl md:text-4xl font-black leading-tight uppercase tracking-tight mb-6">
                {content.hero.tagline}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t-4 border-black">
              <a
                href={content.contact.cv}
                className="border-3 border-black bg-[#F4F1EA] hover:bg-black hover:text-white px-6 py-3 uppercase text-center font-black text-sm tracking-wider shadow-[4px_4px_0px_0px_#000000] transition-all no-underline"
              >
                VIEW RESUME / CV
              </a>
              <a
                href={content.contact.github}
                target="_blank"
                rel="noreferrer"
                className="border-3 border-black bg-black text-white hover:bg-[#E61C1C] px-6 py-3 uppercase text-center font-black text-sm tracking-wider shadow-[4px_4px_0px_0px_#000000] transition-all no-underline"
              >
                GITHUB REPO ↗
              </a>
            </div>
          </div>

          {/* Brutalist Profile Photo Placeholder */}
          <div className="lg:col-span-4 bg-black text-[#F4F1EA] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#E61C1C] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-2 right-2 font-mono text-[10px] text-[#E61C1C] font-black border border-[#E61C1C] px-1">
              REF_IMG_MISSING
            </div>
            <div className="my-auto py-8 text-center border-2 border-dashed border-[#F4F1EA]/40 p-6 bg-neutral-900">
              <div className="font-mono text-xs tracking-widest text-[#E61C1C] mb-2 font-bold">
                [PHOTO_PLACEHOLDER]
              </div>
              <div className="text-xl font-black uppercase tracking-wider mb-2">
                RAMON ARIEL MORENO
              </div>
              <div className="font-mono text-xs text-neutral-400">
                // 34.6037° S, 58.3816° W
              </div>
            </div>
            <div className="font-mono text-xs text-neutral-300 pt-4 border-t border-neutral-800 flex justify-between">
              <span>EDITION: 1/1</span>
              <span className="text-[#E61C1C] font-bold">VERIFIED</span>
            </div>
          </div>
        </section>

        {/* Manifesto / About Section */}
        <section className="bg-white border-4 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_#000000] relative">
          <div className="absolute -top-3 left-8 bg-[#E61C1C] text-white font-mono text-xs font-black px-3 py-1 border-2 border-black">
            MANIFESTO // SPECIFICATIONS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-2">
            <div className="md:col-span-4 font-mono text-2xl font-black uppercase tracking-tight">
              &gt; DESIGN &amp; CODE PHILOSOPHY
            </div>
            <div className="md:col-span-8 text-lg font-medium leading-relaxed border-l-4 border-black pl-6">
              {content.about}
            </div>
          </div>
        </section>

        {/* Projects Section - Streetwear E-Commerce Grid */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-4 border-black pb-4">
            <div>
              <span className="font-mono text-xs bg-[#E61C1C] text-white px-2 py-1 font-bold uppercase">
                CATALOG // DROP 01
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                FEATURED PROJECTS [{content.projects.length}]
              </h2>
            </div>
            <div className="font-mono text-xs font-bold bg-white border-2 border-black px-3 py-1 shadow-[3px_3px_0px_0px_#000000]">
              SORT BY: HIGHEST IMPACT
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.projects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
              >
                {/* Marked Product Ribbon */}
                <div className="absolute top-0 right-0 bg-black text-white font-mono text-xs font-black px-3 py-1 border-l-3 border-b-3 border-black">
                  SKU: RM-0{project.id}
                </div>

                <div>
                  <div className="font-mono text-xs text-[#E61C1C] font-black mb-2">
                    ITEM 0{idx + 1} // RELEASED
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-3 tracking-tight group-hover:text-[#E61C1C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.roleStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-black bg-[#F4F1EA] border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_#000000]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.link}
                      className="flex-1 text-center bg-black text-white hover:bg-[#E61C1C] border-3 border-black py-3 font-mono text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_#000000] transition-colors no-underline"
                    >
                      INSPECT / VIEW →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / E-Commerce Checkout Section */}
        <section className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000000] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-xs bg-[#E61C1C] text-white px-3 py-1 uppercase font-black">
                CHECKOUT // DIRECT CONNECTION
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-3 mb-4">
                READY TO COLLABORATE?
              </h2>
              <p className="text-neutral-700 text-base font-medium">
                Get in touch for design systems, architecture, and high-performance product building.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-3 border-black bg-[#F4F1EA] hover:bg-black hover:text-white px-6 py-3 font-mono text-sm font-black uppercase text-center shadow-[4px_4px_0px_0px_#000000] no-underline transition-all"
              >
                LINKEDIN ↗
              </a>
              <a
                href={`mailto:${content.contact.email}`}
                className="brutalist-button px-6 py-3 font-mono text-sm uppercase text-center no-underline"
              >
                EMAIL ME
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto border-t-4 border-black pt-6 pb-12 flex flex-col md:flex-row justify-between items-center font-mono text-xs gap-4">
        <div>© 2026 {content.hero.name}. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-4 font-bold">
          <span>URBAN_STREETWEAR_PORTFOLIO</span>
          <span className="text-[#E61C1C]">// VITE + REACT + TAILWIND</span>
        </div>
      </footer>
    </div>
  )
}

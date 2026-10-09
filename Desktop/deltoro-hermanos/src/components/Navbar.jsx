import { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateString = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `[04. ${day}/${month}/${year} - ${hours}:${minutes}:${seconds} hs]`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#045848]/60 shadow-[0_4px_20px_rgba(4,88,72,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3">
            {!imgError ? (
              <img
                src="./images/logo2-removebg-preview.png"
                alt="Deltoro Hermanos Logo"
                width="44"
                height="44"
                onError={() => setImgError(true)}
                className="w-11 h-11 rounded-xl object-contain logo-sharp"
              />
            ) : (
              <div className="w-11 h-11 bg-[#D7B86C] rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#0A0A0A]" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-wider text-white uppercase flex items-center gap-2">
                Deltoro <span className="text-[#D7B86C]">Hermanos</span>
                <span className="w-2 h-2 rounded-full bg-[#045848] animate-ping"></span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                // IZAYES & MUDANZAS HUD
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 font-mono text-sm">
            <a href="#servicios" className="px-3.5 py-2 text-gray-300 hover:text-[#D7B86C] transition-all">
              [01. SERVICIOS]
            </a>
            <a href="#trayectoria" className="px-3.5 py-2 text-gray-300 hover:text-[#D7B86C] transition-all">
              [02. TRAYECTORIA]
            </a>
            <a href="#contacto" className="px-3.5 py-2 text-gray-300 hover:text-[#D7B86C] transition-all">
              [03. CONTACTO]
            </a>
            <div className="px-3.5 py-2 text-gray-300">
              {formatDateString(time)}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111827] border-b border-[#045848] px-4 pt-4 pb-6 space-y-2 shadow-2xl font-mono text-sm">
          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-[#D7B86C] px-3.5 py-2 border-b border-gray-800/50 transition-colors"
          >
            [01. SERVICIOS]
          </a>
          <a
            href="#trayectoria"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-[#D7B86C] px-3.5 py-2 border-b border-gray-800/50 transition-colors"
          >
            [02. TRAYECTORIA]
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-[#D7B86C] px-3.5 py-2 border-b border-gray-800/50 transition-colors"
          >
            [03. CONTACTO]
          </a>
          
          {/* Mobile Live Clock Text */}
          <div className="flex items-center justify-center px-3.5 py-2 text-gray-300 rounded-lg">
            <span>{formatDateString(time)}</span>
          </div>
        </div>
      )}
    </header>
  );
}

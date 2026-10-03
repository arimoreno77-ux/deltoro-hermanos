import Navbar from './components/Navbar';
import HudBackground from './components/HudBackground';
import HudHero from './components/HudHero';
import Services from './components/Services';
import About from './components/About';
import Social from './components/Social';
import Footer from './components/Footer';
import WhatsappBtn from './components/WhatsappBtn';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans selection:bg-industrial-yellow selection:text-industrial-dark relative">
      <HudBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <HudHero />
        <Services />
        <About />
        <Social />
      </main>
      <Footer />
      <WhatsappBtn />
    </div>
  );
}

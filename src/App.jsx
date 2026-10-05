import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import CinematicScrollHero from './components/CinematicScrollHero';
import MarqueeTicker from './components/MarqueeTicker';
import Positioning from './components/Positioning';
import Projects from './components/Projects';
import Services from './components/Services';
import AIAgentPreview from './components/AIAgentPreview';
import ComparisonMatrix from './components/ComparisonMatrix';
import ProjectEstimator from './components/ProjectEstimator';
import Process from './components/Process';
import TrustBlock from './components/TrustBlock';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080A0E] text-[#F3F4F6] selection:bg-[#D4FF00] selection:text-[#080A0E] relative overflow-x-hidden">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-40 z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <CinematicScrollHero />
          <MarqueeTicker />
          <Positioning />
          <Projects />
          <Services />
          <AIAgentPreview />
          <ComparisonMatrix />
          <ProjectEstimator />
          <Process />
          <TrustBlock />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

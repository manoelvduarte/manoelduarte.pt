import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowRight, Shield, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicScrollHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays automatically & loops smoothly
    video.play().catch((err) => {
      console.log('Autoplay prevented, retrying muted play:', err);
    });

    // GSAP ScrollTrigger timeline for video parallax scale & opacity transitions
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        if (videoWrapperRef.current) {
          videoWrapperRef.current.style.transform = `scale(${1 + p * 0.15}) translateY(${p * 60}px)`;
          videoWrapperRef.current.style.opacity = `${Math.max(0.2, 1 - p * 0.8)}`;
        }
        if (heroContentRef.current) {
          heroContentRef.current.style.transform = `translateY(${p * 100}px)`;
          heroContentRef.current.style.opacity = `${Math.max(0, 1 - p * 1.2)}`;
        }
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-24 md:pt-44 md:pb-36 bg-[#080A0E] overflow-hidden border-b border-steel-border/60">
      
      {/* Hairline Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-70"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-electric-limeGlow rounded-full blur-[180px] pointer-events-none"></div>

      {/* Generated Cinematic Video Background Layer */}
      <div ref={videoWrapperRef} className="absolute inset-0 w-full h-full transition-transform ease-out">
        <video
          ref={videoRef}
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-50 filter brightness-110 contrast-125 pointer-events-none"
        />
        
        {/* Seamless Radial Smoked Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-[#080A0E]/80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080A0E]/40 to-[#080A0E] pointer-events-none"></div>
      </div>

      {/* Hero Content Overlay */}
      <div ref={heroContentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-steel-border/60 border border-electric-lime/40 backdrop-blur-xl shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-electric-lime animate-pulse"></span>
            <span className="font-mono text-xs text-electric-lime tracking-widest uppercase font-bold">
              PORTO, PORTUGAL — ENGENHARIA DIGITAL, IA & CAPTAÇÃO
            </span>
          </div>

          {/* Giant Editorial Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05]">
            Páginas e automações que fazem a sua oferta parecer{' '}
            <span className="text-gradient-lime italic font-normal">impossível de ignorar.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-steel-text font-light max-w-2xl mx-auto leading-relaxed">
            Equipa completa de engenharia web, design e inteligência artificial para criar páginas de alta conversão e automações de atendimento 24/7 no WhatsApp.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projectos"
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-lg bg-white text-[#080A0E] font-medium text-sm tracking-wide transition-all duration-300 hover:bg-electric-lime hover:shadow-[0_0_35px_rgba(212,255,0,0.4)]"
            >
              <span>Ver projectos seleccionados</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href="#contacto"
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-lg glass-panel-interactive text-white font-medium text-sm tracking-wide transition-all duration-300"
            >
              <span>Pedir orçamento</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-electric-lime" />
            </a>
          </div>

          {/* Tangible Quality Status Badges */}
          <div className="pt-10 border-t border-steel-border/60 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-steel-text">
            <div className="flex items-center justify-center space-x-2 p-2.5 rounded-lg glass-panel border border-steel-border/80">
              <Shield className="w-4 h-4 text-electric-lime shrink-0" />
              <span>100% Responsivo</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2.5 rounded-lg glass-panel border border-steel-border/80">
              <Zap className="w-4 h-4 text-electric-cyan shrink-0" />
              <span>Carregamento Rápido</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2.5 rounded-lg glass-panel border border-steel-border/80 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-electric-lime shrink-0 animate-ping"></span>
              <span>GA4 & Pixel Ready</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

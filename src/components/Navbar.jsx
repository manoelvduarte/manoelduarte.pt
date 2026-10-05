import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projectos', href: '#projectos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Agentes IA', href: '#ia' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080A0E]/85 backdrop-blur-md border-b border-steel-border/80 py-3 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Textual */}
        <a
          href="#"
          className="group flex items-center space-x-2 font-mono text-sm tracking-wider uppercase font-bold text-white transition-opacity hover:opacity-90"
        >
          <span className="w-2.5 h-2.5 bg-electric-lime rounded-none group-hover:scale-125 transition-transform duration-300"></span>
          <span className="font-display tracking-widest text-base">MANOEL DUARTE</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-steel-text hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contacto"
            className="group relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-electric-lime text-[#080A0E] font-medium text-xs uppercase tracking-wider font-mono hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,255,0,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            <span>Iniciar projecto</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-steel-text hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-steel-border px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-steel-text hover:text-electric-lime transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-steel-border/60">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full px-5 py-3 rounded-md bg-electric-lime text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold"
            >
              <span>Iniciar projecto</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

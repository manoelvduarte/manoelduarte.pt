import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080A0E] py-16 border-t border-steel-border/80 text-steel-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Level: Brand & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-steel-border/60">
          <div>
            <span className="font-display font-bold text-xl text-white tracking-widest block mb-2">
              MANOEL DUARTE
            </span>
            <p className="text-xs text-steel-text max-w-sm font-light">
              Landing Pages, Websites e Sistemas de Captação Digital. Porto, Portugal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <a href="#projectos" className="hover:text-white transition-colors">Projectos</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#ia" className="hover:text-white transition-colors">Agentes IA</a>
            <a href="#simulador" className="hover:text-white transition-colors">Simulador</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-steel-border/60 text-white hover:bg-steel-hover transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Level: Socials & Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
          <div>
            <span className="text-white block font-semibold mb-1">// LINKEDIN:</span>
            <a
              href="https://linkedin.com/in/manoelvduarte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-lime hover:underline"
            >
              linkedin.com/in/manoelvduarte
            </a>
          </div>

          <div>
            <span className="text-white block font-semibold mb-1">// E-MAIL:</span>
            <a
              href="mailto:contato@manoelduarte.pt"
              className="text-steel-text hover:text-electric-lime transition-colors"
            >
              contato@manoelduarte.pt
            </a>
          </div>

          <div>
            <span className="text-white block font-semibold mb-1">// WHATSAPP:</span>
            <a
              href="https://wa.me/351924179047"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel-text hover:text-emerald-400 transition-colors"
            >
              +351 924 179 047
            </a>
          </div>
        </div>

        {/* Bottom Level: Copyright & Privacy */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-steel-muted pt-6 border-t border-steel-border/40 gap-4">
          <div>
            © 2026 Manoel Duarte. Todos os direitos reservados.
          </div>

          <div className="flex space-x-6">
            <a href="#contacto" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>Porto, Portugal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

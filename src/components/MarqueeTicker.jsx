import React from 'react';
import { Zap, ShieldCheck, Globe, MessageCircle, CheckCircle2, Sparkles, Clock } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { icon: Clock, label: 'ENTREGA EM 5 A 7 DIAS ÚTEIS' },
    { icon: Globe, label: 'CASOS REAIS EM PRODUÇÃO (FOROAI, EDITALRADAR, MELLIE)' },
    { icon: ShieldCheck, label: 'AUDITADO EM 6 VIEWPORTS & ZERO OVERFLOW' },
    { icon: MessageCircle, label: 'LEADS DIRETAS NO WHATSAPP DO CLIENTE' },
    { icon: Zap, label: 'CARREGAMENTO ULTRA RÁPIDO (< 1.2S)' },
    { icon: CheckCircle2, label: 'GARANTIA TÉCNICA DE 30 DIAS' },
    { icon: Sparkles, label: 'DESIGN AUTORAL // ZERO TEMPLATES PRONTOS' },
  ];

  // Duplicate items for continuous seamless loop
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full bg-[#0B0E14] border-y border-steel-border/70 py-3.5 overflow-hidden relative select-none">
      {/* Left/Right Smoked Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#080A0E] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#080A0E] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee items-center gap-8 font-mono text-xs text-steel-text uppercase tracking-widest">
        {marqueeItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="inline-flex items-center space-x-2.5 shrink-0 px-3">
              <Icon className="w-3.5 h-3.5 text-electric-lime shrink-0" />
              <span className="text-white/90 font-medium text-[11px] sm:text-xs">
                {item.label}
              </span>
              <span className="text-steel-muted ml-3">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

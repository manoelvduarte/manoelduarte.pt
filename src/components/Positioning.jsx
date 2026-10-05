import React from 'react';
import { Target, Smartphone, BarChart3, ArrowRight } from 'lucide-react';

export default function Positioning() {
  const capabilities = [
    {
      num: '01',
      title: 'Estratégia e estrutura de página',
      icon: Target,
      desc: 'Organização da mensagem segundo a jornada do visitante. Cada secção existe por uma razão: captar interesse, construir confiança e conduzir à acção sem fricção.',
      highlight: 'Mensagem com propósito e percurso direto de conversão.',
    },
    {
      num: '02',
      title: 'Design responsivo e experiência mobile',
      icon: Smartphone,
      desc: 'Mais de 70% dos acessos acontecem no telemóvel. O design é construído com foco em mobile-first, garantindo carregamento instantâneo e usabilidade sem falhas em qualquer ecrã.',
      highlight: 'Mobile-first com performance e fluidez absoluta.',
    },
    {
      num: '03',
      title: 'CTAs, formulários e tracking básico',
      icon: BarChart3,
      desc: 'Formulários funcionais integrados com os seus sistemas, botões de contacto estratégicos e eventos de medição (GA4 e Meta Pixel) configurados desde o primeiro dia.',
      highlight: 'Medição real para saber exactamente de onde vêm os contactos.',
    },
  ];

  return (
    <section className="py-24 bg-[#080A0E] relative border-b border-steel-border/60">
      
      {/* Top Glowing Laser Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-lime/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Secção */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-electric-lime uppercase tracking-widest bg-electric-lime/10 px-3 py-1 rounded border border-electric-lime/20">
            <span>01 // FILOSOFIA DE TRABALHO</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Não é apenas uma página bonita.
          </h2>

          <p className="text-lg sm:text-xl text-steel-text leading-relaxed font-light">
            Uma página deve explicar a oferta, reduzir dúvidas e tornar o próximo passo evidente. É isso que a nossa equipa constrói: experiências digitais claras, rápidas e preparadas para gerar contacto qualificado.
          </p>
        </div>

        {/* Layout Editorial Assimétrico das 3 Capacidades */}
        <div className="space-y-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                className="group glass-panel-interactive rounded-2xl p-8 sm:p-10 transition-all duration-500 relative overflow-hidden border border-steel-border/80 hover:border-electric-lime/40"
              >
                {/* Accent Corner Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-electric-limeGlow rounded-full blur-2xl group-hover:bg-electric-lime/20 transition-all duration-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Número & Ícone Técnico */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-start lg:space-x-6">
                    <span className="font-mono text-4xl sm:text-5xl font-bold text-electric-lime/80 group-hover:text-electric-lime transition-colors">
                      {cap.num}
                    </span>
                    <div className="p-3.5 rounded-xl bg-steel-border/50 border border-steel-border text-white group-hover:border-electric-lime/50 transition-colors shadow-lg">
                      <Icon className="w-6 h-6 text-electric-lime" />
                    </div>
                  </div>

                  {/* Conteúdo Central */}
                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-electric-lime transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-steel-text text-sm sm:text-base leading-relaxed font-light">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Destaque / Conclusão à Direita */}
                  <div className="lg:col-span-3 lg:border-l lg:border-steel-border/60 lg:pl-6 flex items-center">
                    <div className="font-mono text-xs text-steel-text group-hover:text-white transition-colors space-y-1.5">
                      <span className="text-electric-cyan font-semibold flex items-center space-x-1 uppercase tracking-wider text-[11px]">
                        <span>RESULTADO ENTREGUE</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      <span className="block font-medium text-white/90 leading-snug">{cap.highlight}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

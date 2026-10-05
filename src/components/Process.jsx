import React from 'react';
import { Compass, FileText, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Contexto',
      icon: Compass,
      desc: 'Alinhamento inicial sobre a oferta, o público-alvo, o objectivo principal da página e as referências visuais do mercado.',
      deliverable: 'Briefing técnico & alinhamento de escopo',
    },
    {
      num: '02',
      title: 'Estrutura',
      icon: FileText,
      desc: 'Definição da mensagem, hierarquia de informação, copy preliminar e mapa do percurso que o visitante fará até ao clique no CTA.',
      deliverable: 'Wireframe textual & estrutura de conversão',
    },
    {
      num: '03',
      title: 'Construção',
      icon: Code2,
      desc: 'Design de interface, desenvolvimento técnico com foco em velocidade, animações subtis e configuração de formulários e tracking.',
      deliverable: 'Página funcional em ambiente de testes',
    },
    {
      num: '04',
      title: 'Publicação',
      icon: Rocket,
      desc: 'Testes rigorosos em múltiplos dispositivos, verificação de formulários, validação de tags de medição e publicação no domínio final.',
      deliverable: 'Lançamento oficial & entrega da documentação',
    },
  ];

  return (
    <section id="processo" className="py-24 bg-[#0D1017] relative border-b border-steel-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-steel-border/60">
          <div>
            <span className="font-mono text-xs text-electric-lime uppercase tracking-widest block mb-2">
              // METODOLOGIA DE TRABALHO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Do objectivo à publicação.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 p-3 rounded-lg glass-panel border border-steel-border/80 max-w-sm">
            <span className="font-mono text-xs text-electric-lime font-semibold block mb-0.5">NOTA DE TRANSPARÊNCIA:</span>
            <p className="text-xs text-steel-text">Prazos, entregáveis e limites são definidos antes do início do projecto.</p>
          </div>
        </div>

        {/* Timeline em 4 Fases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group glass-panel rounded-xl p-6 flex flex-col justify-between relative border border-steel-border/80 hover:border-electric-lime/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-electric-lime/80 group-hover:text-electric-lime transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-lg bg-steel-border/40 text-white">
                      <Icon className="w-5 h-5 text-electric-cyan" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-steel-text text-sm leading-relaxed font-light mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-steel-border/60">
                  <span className="font-mono text-[10px] text-steel-text uppercase tracking-widest block mb-1">ENTREGÁVEL:</span>
                  <span className="font-mono text-xs text-white font-medium">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

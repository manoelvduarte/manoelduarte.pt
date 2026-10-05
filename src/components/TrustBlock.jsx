import React from 'react';
import { CheckCircle, SlidersHorizontal, MonitorCheck, BarChart2, FileCode2 } from 'lucide-react';

export default function TrustBlock() {
  const trustPoints = [
    {
      title: 'Design 100% Responsivo',
      desc: 'Testado e optimizado para telemóveis, tablets e monitores desktop de alta resolução.',
      icon: MonitorCheck,
    },
    {
      title: 'Experiência Mobile & Performance',
      desc: 'Código limpo, sem scripts desnecessários, garantindo velocidades de carregamento rápidas.',
      icon: SlidersHorizontal,
    },
    {
      title: 'CTA e Formulários Operacionais',
      desc: 'Verificação completa de recepção de mensagens e integração de botões de acção rápida.',
      icon: CheckCircle,
    },
    {
      title: 'Analytics & Eventos Prontos',
      desc: 'Disparo de eventos de conversão (GA4 / Meta Pixel) configurado para medição das suas campanhas.',
      icon: BarChart2,
    },
    {
      title: 'Publicação & Documentação',
      desc: 'Código entregue pronto a alojar ou publicado no seu servidor com instruções claras de utilização.',
      icon: FileCode2,
    },
  ];

  return (
    <section className="py-24 bg-[#080A0E] relative border-b border-steel-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Mensagem de Posicionamento */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-electric-lime uppercase tracking-widest block">
              // CRITÉRIO TÉCNICO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Design com intenção. Implementação com critério.
            </h2>
            <p className="text-steel-text text-base leading-relaxed font-light">
              Trabalhamos com foco em clareza, velocidade, experiência mobile e execução técnica orientada a resultados. Não vendemos pacotes vagos nem prometemos resultados fora do nosso controlo de engenharia.
            </p>

            <div className="p-6 rounded-xl glass-panel border border-steel-border space-y-3">
              <div className="flex items-center space-x-2 font-mono text-xs text-electric-lime font-bold">
                <span className="w-2 h-2 rounded-full bg-electric-lime animate-pulse"></span>
                <span>GARANTIA DE ENTREGÁVEIS TANGÍVEIS</span>
              </div>
              <p className="text-xs text-steel-text leading-relaxed">
                Todas as páginas incluem validação de formulários, marcação de evento de conversão e optimização para telemóveis antes da entrega final.
              </p>
            </div>
          </div>

          {/* Lado Direito: Lista de Garantias Tangíveis */}
          <div className="lg:col-span-7 space-y-4">
            {trustPoints.map((pt) => {
              const Icon = pt.icon;
              return (
                <div
                  key={pt.title}
                  className="glass-panel rounded-xl p-5 border border-steel-border/80 flex items-start space-x-4 hover:border-steel-hover transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-steel-border/50 text-electric-lime shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-1">{pt.title}</h3>
                    <p className="text-steel-text text-xs leading-relaxed font-light">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

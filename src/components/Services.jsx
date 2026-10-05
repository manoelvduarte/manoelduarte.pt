import React from 'react';
import { 
  MousePointerClick, 
  Layout, 
  Flame, 
  Activity, 
  Share2, 
  Bot, 
  Workflow, 
  Code2, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: MousePointerClick,
      title: 'Landing pages de alta conversão',
      desc: 'Páginas dedicadas a um único produto, serviço ou campanha. Foco absoluto em comunicar o valor da oferta e maximizar os pedidos de contacto qualificados no telemóvel.',
      tag: 'CAPTAÇÃO & LEADS',
    },
    {
      icon: Bot,
      title: 'Agentes inteligentes de IA & Atendimento 24/7',
      desc: 'Sistemas que atendem no WhatsApp em segundos, qualificam o interesse do cliente com processamento de linguagem natural e agendam reuniões diretamente na sua agenda.',
      tag: 'IA & SDR VIRTUAL',
    },
    {
      icon: Workflow,
      title: 'Automações de processos & Pipelines com IA',
      desc: 'Integração de fluxos automáticos com Make, n8n e webhooks. Leitura inteligente de documentos, envio de dados para CRMs e eliminação de tarefas manuais repetitivas.',
      tag: 'AUTOMAÇÃO & OPERAÇÕES',
    },
    {
      icon: Code2,
      title: 'Websites & Plataformas Web sob medida',
      desc: 'Sistemas web robustos em React, Next.js e WordPress customizado. Navegação fluida, velocidade extrema e arquitetura pensada para expansão contínua.',
      tag: 'ENGENHARIA WEB',
    },
    {
      icon: Flame,
      title: 'Páginas para campanhas (Google & Meta Ads)',
      desc: 'Páginas optimizadas para tráfego pago, com velocidade de carregamento ultrarrápida (< 1.2s), mensagem alinhada com o anúncio e pontuação de qualidade máxima.',
      tag: 'HIGH SPEED & ADS',
    },
    {
      icon: Activity,
      title: 'Tracking avançado, GA4 & Meta CAPI',
      desc: 'Configuração rigorosa de eventos de conversão, disparos de WhatsApp, Google Analytics 4 e Conversion API do Meta para medição real de ROI publicitário.',
      tag: 'MEDIÇÃO & ATRIBUIÇÃO',
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#080A0E] relative border-b border-steel-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-electric-lime uppercase tracking-widest block mb-2">
            // SERVIÇOS & CAPACIDADES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Engenharia web, automações de IA e infraestrutura digital.
          </h2>
          <p className="text-lg text-steel-text font-light leading-relaxed">
            Cada entrega começa por uma oferta concreta, um objetivo de negócio claro e prazos definidos.
          </p>
        </div>

        {/* Grelha de Serviços com 6 Soluções de Alto Valor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="group glass-panel-interactive rounded-xl p-8 flex flex-col justify-between transition-all duration-300 relative border border-steel-border/80 hover:border-electric-lime/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-steel-border/40 border border-steel-border text-white group-hover:border-electric-lime/50 transition-colors">
                      <Icon className="w-6 h-6 text-electric-lime" />
                    </div>
                    <span className="font-mono text-[9px] text-steel-text bg-steel-border/30 px-2 py-1 rounded border border-steel-border">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-electric-lime transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-steel-text text-sm leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-steel-border/40 flex items-center justify-between text-xs font-mono text-steel-text group-hover:text-white transition-colors">
                  <span>ESCOPO FECHADO</span>
                  {srv.tag.includes('IA') ? (
                    <a
                      href="https://wa.me/351924179047?text=Ol%C3%A1!%20Gostaria%20de%20testar%20a%20demonstra%C3%A7%C3%A3o%20do%20assistente%20de%20IA%20no%20WhatsApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-lime hover:underline font-bold"
                    >
                      TESTAR NO WHATSAPP →
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="text-electric-lime hover:underline font-bold"
                    >
                      PEDIR PROPOSTA →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Capacidade da Equipa Completa */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl glass-panel border border-electric-lime/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-limeGlow rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-electric-lime/10 border border-electric-lime/20 text-electric-lime font-mono text-xs uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" />
                <span>ESTRUTURA TÉCNICA // EQUIPA MULTIDISCIPLINAR COMPLETA</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Não é apenas um profissional isolado. Uma equipa completa focada na sua operação.
              </h3>
              <p className="text-steel-text text-sm sm:text-base font-light leading-relaxed">
                Reunimos designers de produto, engenheiros de software full-stack, especialistas em tráfego pago e arquitetos de inteligência artificial. Assumimos desde páginas de conversão de alto impacto até a automação total dos fluxos comerciais e de atendimento da sua empresa.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="https://wa.me/351924179047?text=Ol%C3%A1%20Manoel,%20gostaria%20de%20conversar%20sobre%20um%20projecto%20com%20a%20vossa%20equipa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-electric-lime text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.25)] text-center"
              >
                <span>Falar com a Equipa</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-center font-mono text-[11px] text-steel-muted">
                ⚡ Resposta em menos de 2 horas úteis
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

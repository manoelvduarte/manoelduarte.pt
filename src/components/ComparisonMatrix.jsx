import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck, Zap } from 'lucide-react';

export default function ComparisonMatrix() {
  const criteria = [
    {
      label: 'Velocidade de Carregamento',
      bad: '4 a 8 segundos (perde mais de 50% dos visitantes pagos antes da página abrir)',
      good: 'Inferior a 1.2 segundos na Vercel/Cloudflare Edge com performance 95+ no Google',
    },
    {
      label: 'Adaptação a Telemóveis',
      bad: 'Templates genéricos com botões cortados e texto ilegível em ecrãs compactos',
      good: 'Engenharia mobile-first auditada rigorosamente em 6 resoluções de ecrã (360px a 1440px)',
    },
    {
      label: 'Encaminhamento de Leads',
      bad: 'Formulários que caem em caixas de correio esquecidas ou caixas de spam',
      good: 'Notificação instantânea formatada diretamente no WhatsApp do decisor e/ou CRM',
    },
    {
      label: 'Atendimento & Triagem Comercial',
      bad: 'Atendimento manual lento (horas ou dias para responder a uma dúvida)',
      good: 'Agente de IA opcional que responde em 3 segundos, qualifica e agenda na sua disponibilidade',
    },
    {
      label: 'Medição & Tracking de Anúncios',
      bad: 'Sem eventos configurados ou tags desatualizadas sem correspondência de UTMs',
      good: 'GA4, Meta Pixel e Conversion API (CAPI) calibrados para otimizar o custo por lead',
    },
    {
      label: 'Propriedade do Código & Custos Fixos',
      bad: 'Preso a plataformas proprietárias caras ou WordPress pesado com 30 plugins vulneráveis',
      good: 'Código-fonte integral entregue ao cliente, arquitetura moderna e custo de alojamento ~0€/mês',
    },
  ];

  return (
    <section className="py-24 bg-[#080A0E] relative border-b border-steel-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-electric-lime uppercase tracking-widest bg-electric-lime/10 px-3 py-1 rounded border border-electric-lime/20">
            <Zap className="w-3.5 h-3.5" />
            <span>DIAGNÓSTICO TÉCNICO // POR QUE A SUA PÁGINA ATUAL PERDE VENDAS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A diferença entre uma página comum e uma máquina de captação.
          </h2>

          <p className="text-steel-text text-base sm:text-lg font-light leading-relaxed">
            Não construímos páginas apenas para "ter presença". Criamos ferramentas de engenharia digital com objetivo estrito de gerar vendas e contactos qualificados.
          </p>
        </div>

        {/* Matriz Comparativa */}
        <div className="glass-panel rounded-2xl border border-steel-border/80 overflow-hidden shadow-2xl">
          
          {/* Header da Tabela Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0B0E14] border-b border-steel-border p-5 text-xs font-mono tracking-wider uppercase font-bold">
            <div className="md:col-span-4 text-steel-muted">
              CRITÉRIO TÉCNICO &amp; COMERCIAL
            </div>
            <div className="md:col-span-4 text-red-400 flex items-center space-x-1.5 mt-2 md:mt-0">
              <ShieldAlert className="w-4 h-4" />
              <span>SITES CONVENCIONAIS / TEMPLATES</span>
            </div>
            <div className="md:col-span-4 text-electric-lime flex items-center space-x-1.5 mt-2 md:mt-0">
              <ShieldCheck className="w-4 h-4" />
              <span>NOSSA ENGENHARIA DIGITAL</span>
            </div>
          </div>

          {/* Linhas da Tabela */}
          <div className="divide-y divide-steel-border/40">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-[#0D1017]/60 transition-colors"
              >
                {/* Critério */}
                <div className="md:col-span-4">
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">
                    {item.label}
                  </h4>
                </div>

                {/* O Lado Comum (Ruim) */}
                <div className="md:col-span-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10 flex items-start space-x-2.5">
                  <div className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-red-200/80 leading-relaxed">
                    {item.bad}
                  </p>
                </div>

                {/* O Nosso Lado (Bom) */}
                <div className="md:col-span-4 p-3 rounded-lg bg-electric-lime/5 border border-electric-lime/20 flex items-start space-x-2.5">
                  <div className="p-1 rounded bg-electric-lime/20 text-electric-lime shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-white leading-relaxed font-medium">
                    {item.good}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, Clock, Shield, Zap, MessageSquare } from 'lucide-react';

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState('landing-page');
  const [timeline, setTimeline] = useState('express');
  const [selectedExtras, setSelectedExtras] = useState(['whatsapp-direct', 'analytics-ga4']);

  const projectTypes = [
    {
      id: 'landing-page',
      name: 'Landing Page de Alta Conversão',
      badge: '5 A 7 DIAS',
      desc: 'Página única orientada para venda de produto, serviço ou captação de leads em anúncios.',
      baseTime: '5 a 7 dias úteis',
      baseFeatures: [
        'Design autoral mobile-first sem templates',
        'Auditoria rigorosa em 6 resoluções de ecrã',
        'Copywriting persuasivo e arquitetura de conversão',
        'Carregamento ultrarrápido na Vercel/Cloudflare CDN',
        'Garantia técnica de 30 dias',
      ],
    },
    {
      id: 'ai-agent',
      name: 'Agente de IA no WhatsApp (SDR 24/7)',
      badge: 'AUTOMAÇÃO INTELIGENTE',
      desc: 'Assistente neural treinado no seu negócio para atender, qualificar clientes e agendar reuniões.',
      baseTime: '4 a 6 dias úteis',
      baseFeatures: [
        'Atendimento instantâneo no WhatsApp em < 3 segundos',
        'Treino com as regras de negócio e FAQs da sua empresa',
        'Qualificação de orçamento e perfil de cliente',
        'Integração com Google Calendar para agendamento direto',
        'Notificação em tempo real para a sua equipa comercial',
      ],
    },
    {
      id: 'website-portal',
      name: 'Website Institucional / Portal',
      badge: 'PRESENÇA CORPORATIVA',
      desc: 'Estrutura completa com múltiplas páginas/secções, portfólio dinâmico e SEO avançado.',
      baseTime: '10 a 14 dias úteis',
      baseFeatures: [
        'Arquitetura multipágina ou one-page estendida',
        'SEO técnico estruturado para Google',
        'Painel dinâmico ou WordPress sob medida',
        'Galeria de projetos e estudos de caso',
        'Formulários múltiplos com roteamento de equipa',
      ],
    },
    {
      id: 'fullstack-saas',
      name: 'Plataforma Web SaaS / App',
      badge: 'ENGENHARIA AVANÇADA',
      desc: 'Aplicação web completa com autenticação, base de dados, área de membros e dashboards.',
      baseTime: '3 a 5 semanas',
      baseFeatures: [
        'Frontend React 19 / Next.js de alta performance',
        'Base de dados PostgreSQL / Supabase com segurança RLS',
        'Área privada com login e gestão de permissões',
        'Integração com gateways de pagamento (Stripe / MB WAY)',
        'Documentação técnica de arquitetura',
      ],
    },
  ];

  const availableExtras = [
    { id: 'whatsapp-direct', label: 'Integração Direta com WhatsApp da Equipa', timeAdd: '+0 dias' },
    { id: 'analytics-ga4', label: 'Tracking GA4 Server-side + Meta CAPI', timeAdd: '+0 dias' },
    { id: 'ai-sdr-addon', label: 'Assistente de IA para Atendimento Inicial', timeAdd: '+2 dias' },
    { id: 'crm-webhook', label: 'Sincronização com CRM (HubSpot / RD / Make / n8n)', timeAdd: '+1 dia' },
    { id: 'custom-motion', label: 'Micro-Interações e Animações GSAP de Alto Nível', timeAdd: '+1 dia' },
  ];

  const currentType = projectTypes.find((p) => p.id === projectType);

  const toggleExtra = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const generateWhatsAppMessage = () => {
    const extrasLabels = selectedExtras
      .map((id) => availableExtras.find((e) => e.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Olá Manoel! Simulei o meu projeto no site e gostaria de avançar:
• Tipo de Solução: ${currentType.name}
• Ritmo de Entrega: ${timeline === 'express' ? 'Sprint Expresso' : 'Ritmo Padrão'}
• Módulos Selecionados: ${extrasLabels || 'Padrão'}

Gostaria de agendar uma conversa rápida para alinhar prazos e detalhes técnicos!`;

    return `https://wa.me/351924179047?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulador" className="py-24 bg-[#080A0E] relative border-b border-steel-border/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric-limeGlow rounded-full blur-[160px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-steel-border/60 border border-electric-lime/30 text-electric-lime font-mono text-xs uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL // SIMULADOR DE ESCOPO</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Simule o seu projecto em segundos.
          </h2>

          <p className="text-steel-text text-base sm:text-lg font-light leading-relaxed">
            Selecione o tipo de solução que a sua empresa necessita e visualize os entregáveis exatos antes de falarmos.
          </p>
        </div>

        {/* Layout do Simulador: Opções à Esquerda, Resumo Dinâmico à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Lado Esquerdo: Seleção */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Escolha da Solução */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-white uppercase tracking-wider block font-bold">
                1. SELECIONE A SOLUÇÃO PRINCIPAL:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`p-5 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'border-electric-lime bg-[#0D1017] shadow-[0_0_25px_rgba(212,255,0,0.12)]'
                          : 'border-steel-border bg-[#0B0E14]/80 hover:border-steel-hover hover:bg-[#0D1017]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${
                            isSelected ? 'bg-electric-lime/10 text-electric-lime border-electric-lime/30' : 'bg-steel-border/40 text-steel-muted border-steel-border'
                          }`}>
                            {type.badge}
                          </span>
                          <span className={`w-3 h-3 rounded-full border ${
                            isSelected ? 'border-electric-lime bg-electric-lime' : 'border-steel-border'
                          }`}></span>
                        </div>

                        <h4 className="font-display font-bold text-white text-base mb-1">
                          {type.name}
                        </h4>
                        <p className="text-xs text-steel-text leading-relaxed font-light">
                          {type.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Módulos & Recursos Adicionais */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-white uppercase tracking-wider block font-bold">
                2. RECURSOS & INTEGRAÇÕES DESEJADAS:
              </span>

              <div className="space-y-2.5">
                {availableExtras.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-electric-lime/50 bg-[#0D1017]/90 text-white'
                          : 'border-steel-border/70 bg-[#0B0E14]/50 text-steel-text hover:border-steel-border'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                          isChecked ? 'bg-electric-lime border-electric-lime text-[#080A0E]' : 'border-steel-border bg-steel-border/30'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">
                          {extra.label}
                        </span>
                      </div>

                      <span className="font-mono text-[11px] text-steel-muted">
                        {extra.timeAdd}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Lado Direito: Resumo do Escopo com Ação Imediata */}
          <div className="lg:col-span-5">
            <div className="glass-panel border border-electric-lime/40 rounded-2xl p-6 sm:p-8 space-y-6 sticky top-28 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-steel-border/60 pb-4">
                <div>
                  <span className="font-mono text-[10px] text-electric-lime uppercase tracking-widest block font-bold">
                    // ESCOPO PRÉ-CONFIGURADO
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {currentType.name}
                  </h3>
                </div>

                <div className="p-2.5 rounded-lg bg-electric-lime/10 border border-electric-lime/30 text-electric-lime">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Tempo de Entrega */}
              <div className="p-4 rounded-xl bg-[#080A0E] border border-steel-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-electric-lime shrink-0" />
                  <div>
                    <span className="text-xs text-steel-text block">Prazo de Entrega Estimado:</span>
                    <span className="font-mono text-sm font-bold text-white">{currentType.baseTime}</span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
                  AGENDA DISPONÍVEL
                </span>
              </div>

              {/* O que está incluído */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-steel-text uppercase tracking-wider block font-bold">
                  ENTREGÁVEIS GARANTIDOS:
                </span>
                <ul className="space-y-2">
                  {currentType.baseFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-lime shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {selectedExtras.map((id) => {
                    const extra = availableExtras.find((e) => e.id === id);
                    if (!extra) return null;
                    return (
                      <li key={id} className="flex items-start space-x-2 text-xs text-electric-lime font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-lime shrink-0 mt-0.5" />
                        <span>Módulo: {extra.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Garantias de Engenharia */}
              <div className="pt-4 border-t border-steel-border/60 grid grid-cols-2 gap-3 text-[11px] font-mono text-steel-text">
                <div className="flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-electric-lime" />
                  <span>Garantia 30 dias</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>Velocidade &lt; 1.2s</span>
                </div>
              </div>

              {/* CTA WhatsApp com Escopo Montado */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-electric-lime text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_0_25px_rgba(212,255,0,0.3)] group text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar este Escopo no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="block text-center font-mono text-[10px] text-steel-muted mt-2">
                  Sem formulários lentos. Conversa direta com Manoel Duarte &amp; equipa.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

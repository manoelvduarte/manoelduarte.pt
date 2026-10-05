import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, Globe, Sparkles, Lock } from 'lucide-react';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const projects = [
    {
      id: 'house-of-mellie',
      name: 'House of Mellie',
      client: 'Melissa Nakagawa',
      category: 'Alta Costura & Noivas',
      type: 'LP',
      status: 'PRODUÇÃO · ONLINE',
      statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      liveUrl: 'https://house-of-mellie.vercel.app',
      hasLiveUrl: true,
      image: '/assets/projects/house-of-mellie.webp',
      description: 'Lookbook editorial e experiência digital de alta costura nupcial sob medida.',
      problem: 'O mercado de noivas de luxo exige uma presença online que transmita a mesma nobreza, exclusividade e acabamento artesanal do ateliê físico, fugindo de formatos comerciais comuns.',
      approach: 'Direcção de arte editorial inspirada em publicações de moda de topo (tipografia Cormorant Garamond, tons alabastro de seda pura, fotografia de ateliê sem banco de imagens) e percurso para prova privada via WhatsApp.',
      technologies: ['Design Editorial', 'Tailwind CSS', 'Vercel Edge', 'WhatsApp Concierge'],
      metrics: 'Design 100% autoral sem templates, aprovado em 6 resoluções de ecrã.',
      badge: 'Lookbook de Luxo',
    },
    {
      id: 'foroai',
      name: 'ForoAI',
      client: 'ForoAI Brasil',
      category: 'Inteligência Jurídica & IA',
      type: 'SAAS',
      status: 'PRODUÇÃO · ONLINE',
      statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      liveUrl: 'https://foroai.com.br',
      hasLiveUrl: true,
      image: '/assets/projects/foroai.webp',
      description: 'Plataforma B2B de inteligência artificial aplicada à análise documental e automação jurídica.',
      problem: 'O sector jurídico necessita de extrema sobriedade e segurança de dados, mas precisava de uma apresentação moderna e cativante que demonstrasse a potência da IA sem jargões desnecessários.',
      approach: 'Interface dark-mode de alta densidade visual, contraste tipográfico rigoroso, apresentação clara dos módulos neurais e fluxo de qualificação para demonstração.',
      technologies: ['React', 'Design System Custom', 'Vercel Edge', 'Tracking GA4'],
      metrics: 'Plataforma oficial ativa em produção com tempo de carregamento < 1.2s.',
      badge: 'LegalTech IA',
    },
    {
      id: 'editalradar',
      name: 'EditalRadar IA',
      client: 'Grupo Hub da IA',
      category: 'Plataforma B2B & Licitações',
      type: 'SAAS',
      status: 'PRODUÇÃO · ONLINE',
      statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      liveUrl: 'https://editalradar.grupohubdaia.com.br',
      hasLiveUrl: true,
      image: '/assets/projects/editalradar.webp',
      description: 'Sistema SaaS de pré-análise preditiva de editais e cadernos de encargos para fornecedores.',
      problem: 'A extensão e complexidade dos cadernos de encargos em licitações públicas faziam com que empresas perdessem oportunidades valiosas por falta de tempo hábil de triagem.',
      approach: 'Landing page focada no produto, destacando relatórios sintetizados por IA, calculadora de relevância de editais e percurso direto para teste gratuito.',
      technologies: ['React', 'Tailwind CSS', 'Google Cloud Run', 'Micro-Interações'],
      metrics: 'Captação contínua de decisores de empresas fornecedoras governamentais.',
      badge: 'B2B Procurement',
    },
    {
      id: 'newprint',
      name: 'Grupo Newprint CTP',
      client: 'Newprint São Paulo',
      category: 'Indústria Gráfica & Pré-Impressão',
      type: 'LP',
      status: 'PRODUÇÃO · ONLINE',
      statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      liveUrl: 'https://gruponewprintctp.com.br',
      hasLiveUrl: true,
      image: '/assets/projects/newprint.webp',
      description: 'Landing page institucional de conversão para bureau industrial de gravação de chapas offset 24h.',
      problem: 'Gráficas comerciais e editoriais sofrem com paragens de máquina e necessitam de fornecimento urgente de chapas gravadas a qualquer hora do dia ou da noite.',
      approach: 'Design System técnico industrial, destaque de maquinário de última geração, conversão imediata para plantão comercial de 24 horas via WhatsApp e carregamento rápido.',
      technologies: ['HTML5 / Web Moderno', 'Design Industrial', 'WhatsApp 24h', 'Alta Performance'],
      metrics: 'Atendimento e triagem imediata de pedidos de pré-impressão 24/7.',
      badge: 'Indústria 24h',
    },
    {
      id: 'bbrstory',
      name: 'BBR Story',
      client: 'BBR Story',
      category: 'Portal Editorial & WordPress',
      type: 'LP',
      status: 'PRODUÇÃO · ONLINE',
      statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      liveUrl: 'https://bbrstory.net',
      hasLiveUrl: true,
      image: '/assets/projects/bbrstory.webp',
      description: 'Portal de narrativas corporativas e publicação editorial desenvolvido em ambiente WordPress sob medida.',
      problem: 'Necessidade de um hub editorial com excelente tipografia, arquitetura de leitura imersiva e indexação orgânica otimizada para matérias e reportagens de alto impacto.',
      approach: 'Estrutura WordPress customizada com layout editorial refinado, categorização intuitiva, carregamento veloz de artigos e responsividade total em telemóveis.',
      technologies: ['WordPress Custom', 'SEO Editorial', 'Arquitetura de Leitura', 'Otimização Mobile'],
      metrics: 'Indexação contínua no Google e experiência de leitura sem distrações.',
      badge: 'WordPress Editorial',
    },
    {
      id: 'equilibrium',
      name: 'Equilibrium App',
      client: 'Equilibrium Finanças',
      category: 'Finanças Pessoais & Casais',
      type: 'SAAS',
      status: 'SISTEMA PRIVADO · SOB NDA',
      statusColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      liveUrl: null,
      hasLiveUrl: false,
      image: null,
      gradient: 'from-[#10141E] via-[#0A0D14] to-[#080A0E]',
      description: 'Aplicação web completa de gestão financeira colaborativa e divisão equilibrada de contas.',
      problem: 'Casais enfrentam atritos na divisão proporcional de contas e planeamento conjunto de metas patrimoniais com ferramentas isoladas.',
      approach: 'Web app moderna com autenticação em tempo real, painel de conciliação bancária, gráficos dinâmicos de distribuição e segurança de dados sob acordo de confidencialidade.',
      technologies: ['Next.js', 'Supabase RLS', 'Turborepo', 'PostgreSQL'],
      metrics: 'Arquitetura interna privada sob acordo rigoroso de confidencialidade.',
      badge: 'FinTech Privado',
    },
  ];

  const filteredProjects = selectedFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.type === selectedFilter);

  return (
    <section id="projectos" className="py-24 bg-[#0D1017] relative border-b border-steel-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Secção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-steel-border/60 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-electric-lime uppercase tracking-widest bg-electric-lime/10 px-3 py-1 rounded border border-electric-lime/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CASOS REAIS EM PRODUÇÃO</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Projectos seleccionados.
            </h2>
          </div>
          
          <div className="space-y-3 md:text-right max-w-md">
            <p className="text-steel-text text-sm sm:text-base font-light">
              Páginas, plataformas e portais reais que construí. Testados, publicados e a gerar valor comercial todos os dias.
            </p>

            {/* Filtros Interativos */}
            <div className="flex flex-wrap md:justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedFilter('ALL')}
                className={`px-3 py-1 rounded-md font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === 'ALL'
                    ? 'bg-electric-lime text-[#080A0E] font-bold shadow-[0_0_15px_rgba(212,255,0,0.25)]'
                    : 'bg-steel-border/40 text-steel-text hover:text-white border border-steel-border'
                }`}
              >
                Todos ({projects.length})
              </button>
              <button
                onClick={() => setSelectedFilter('LP')}
                className={`px-3 py-1 rounded-md font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === 'LP'
                    ? 'bg-electric-lime text-[#080A0E] font-bold shadow-[0_0_15px_rgba(212,255,0,0.25)]'
                    : 'bg-steel-border/40 text-steel-text hover:text-white border border-steel-border'
                }`}
              >
                Landing Pages & Portais
              </button>
              <button
                onClick={() => setSelectedFilter('SAAS')}
                className={`px-3 py-1 rounded-md font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === 'SAAS'
                    ? 'bg-electric-lime text-[#080A0E] font-bold shadow-[0_0_15px_rgba(212,255,0,0.25)]'
                    : 'bg-steel-border/40 text-steel-text hover:text-white border border-steel-border'
                }`}
              >
                SaaS & Plataformas IA
              </button>
            </div>
          </div>
        </div>

        {/* Grelha de Projectos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden border border-steel-border hover:border-electric-lime/50 shadow-2xl"
            >
              {/* Glow Dinâmico no Fundo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-white/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-electric-lime/10 transition-all duration-700"></div>

              <div>
                {/* Linha de Categoria & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-electric-lime uppercase tracking-wider font-semibold">
                      {proj.category}
                    </span>
                    <span className="text-steel-muted text-xs">•</span>
                    <span className="font-mono text-[11px] text-steel-muted">
                      {proj.badge}
                    </span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider border ${proj.statusColor}`}>
                    {proj.status}
                  </span>
                </div>

                {/* Título & Descrição */}
                <div className="space-y-2 mb-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-electric-lime transition-colors flex items-center justify-between">
                    <span>{proj.name}</span>
                    {proj.hasLiveUrl && (
                      <span className="font-mono text-xs text-steel-muted font-normal flex items-center space-x-1 group-hover:text-white transition-colors">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Online</span>
                      </span>
                    )}
                  </h3>

                  <p className="text-steel-text text-sm sm:text-base leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                {/* Mockup do Browser com Screenshot Real */}
                <div className="relative w-full h-52 sm:h-64 rounded-xl border border-steel-border bg-[#080A0E] overflow-hidden mb-6 group-hover:border-electric-lime/40 transition-all duration-300 shadow-xl flex flex-col">
                  {/* Top Browser Bar */}
                  <div className="bg-[#0B0E14] px-4 py-2 border-b border-steel-border flex items-center justify-between z-10 shrink-0">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                      <span className="font-mono text-[11px] text-steel-text ml-2 truncate max-w-[180px] sm:max-w-xs">
                        {proj.hasLiveUrl ? proj.liveUrl.replace('https://', '') : `${proj.id}.interno`}
                      </span>
                    </div>

                    {proj.hasLiveUrl ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/30 flex items-center space-x-1 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>HTTP 200</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px] border border-amber-500/30 flex items-center space-x-1 shrink-0">
                        <Lock className="w-3 h-3" />
                        <span>SOB NDA</span>
                      </span>
                    )}
                  </div>

                  {/* Real Screenshot Preview with zoom on hover */}
                  <div className="relative flex-1 w-full bg-[#0D1017] overflow-hidden">
                    {proj.image ? (
                      <img
                        src={proj.image}
                        alt={`Pré-visualização do projecto ${proj.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${proj.gradient} flex flex-col items-center justify-center p-6 text-center space-y-2`}>
                        <Lock className="w-8 h-8 text-amber-400/80" />
                        <span className="font-mono text-xs text-white font-medium">Projecto interno confidencial</span>
                        <span className="text-[11px] text-steel-text max-w-xs">Apresentação sob pedido direto e validação prévia de escopo comercial.</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Problema Resolvido */}
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-[10px] text-steel-text uppercase tracking-widest block font-bold">
                    PROBLEMA RESOLVIDO:
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    {proj.problem}
                  </p>
                </div>

                {/* Tags Tecnológicas */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-steel-border/50 border border-steel-border font-mono text-[10px] text-steel-text group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botões de Ação na Base */}
              <div className="pt-4 border-t border-steel-border/60 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(proj)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-white hover:text-electric-lime transition-colors cursor-pointer"
                >
                  <span>Ver estudo de caso</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-electric-lime" />
                </button>

                {proj.hasLiveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-electric-lime/10 border border-electric-lime/40 text-electric-lime font-mono text-xs font-semibold hover:bg-electric-lime hover:text-[#080A0E] transition-all shadow-sm"
                  >
                    <span>Ver página ao vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="font-mono text-[11px] text-steel-muted flex items-center space-x-1">
                    <Lock className="w-3 h-3" />
                    <span>Acesso sob NDA</span>
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Banner de Conversão Rápida dos Projectos */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#131722] via-[#0D1017] to-[#131722] border border-electric-lime/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(212,255,0,0.05)]">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs text-electric-lime uppercase tracking-widest font-bold block">
              // QUER UMA PÁGINA OU PLATAFORMA COM ESTE NÍVEL DE EXECUÇÃO?
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Transforme a percepção da sua empresa com uma experiência digital de topo.
            </h3>
            <p className="text-steel-text text-sm font-light max-w-xl">
              Entrega ágil com escopo fechado, integração WhatsApp directa, equipe técnica multidisciplinar e garantia técnica de 30 dias.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/351924179047?text=Ol%C3%A1%20Manoel,%20estive%20a%20ver%20os%20seus%20projectos%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-emerald-400 transition-all shadow-lg"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-electric-lime text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.25)]"
            >
              <span>Pedir Proposta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Modal de Detalhe Completo do Projecto */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel border border-steel-border rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative space-y-6 shadow-2xl">
            
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b border-steel-border/60 pb-4">
              <div>
                <span className="font-mono text-xs text-electric-lime uppercase tracking-widest">
                  {activeModalProject.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalProject.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-3 py-1.5 rounded-lg bg-steel-border text-xs font-mono text-white hover:bg-steel-hover cursor-pointer"
              >
                [Fechar Esc]
              </button>
            </div>

            {/* Imagem Real no Modal */}
            {activeModalProject.image && (
              <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-steel-border/80 shadow-inner">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* Conteúdo do Estudo de Caso */}
            <div className="space-y-5 text-sm text-steel-text leading-relaxed">
              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-1">// Visão Geral:</h4>
                <p>{activeModalProject.description}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-1">// Desafio Comercial:</h4>
                <p>{activeModalProject.problem}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-1">// Abordagem Técnica & Estratégia de Conversão:</h4>
                <p>{activeModalProject.approach}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-1">// Garantia & Métricas:</h4>
                <p className="text-white font-medium">{activeModalProject.metrics}</p>
              </div>

              {/* Tecnologias */}
              <div className="pt-2">
                <span className="font-mono text-xs text-steel-muted uppercase tracking-wider block mb-2">// Stack de Produção:</span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-steel-border/60 text-xs font-mono text-white border border-steel-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ações do Modal */}
              <div className="pt-6 border-t border-steel-border/60 flex flex-wrap justify-between items-center gap-4">
                {activeModalProject.hasLiveUrl ? (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white text-[#080A0E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-electric-lime transition-all"
                  >
                    <span>Abrir página no navegador</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-amber-400/90 flex items-center space-x-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Projecto sob acordo de confidencialidade interna (NDA)</span>
                  </span>
                )}

                <a
                  href="#contacto"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-lg bg-electric-lime text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.2)]"
                >
                  Pedir proposta semelhante →
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

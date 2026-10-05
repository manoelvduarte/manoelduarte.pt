import React, { useState } from 'react';
import { Bot, MessageCircle, Sparkles, Check, CheckCheck, Clock, Zap, Calendar, ArrowRight } from 'lucide-react';

export default function AIAgentPreview() {
  const [activeNiche, setActiveNiche] = useState('b2b');

  const niches = [
    {
      id: 'b2b',
      title: 'Vendas B2B & Consultoria',
      agentName: 'Manoel Duarte IA (SDR Virtual)',
      conversation: [
        { sender: 'user', time: '11:42', text: 'Bom dia! Vi o portfólio de vocês e queria entender como funciona a criação de uma landing page para a minha empresa.' },
        { sender: 'bot', time: '11:42', text: 'Olá! Prazer em falar consigo. Aqui no ateliê do Manoel Duarte entregamos em 5 a 7 dias úteis com design autoral, código limpo e foco em conversão no WhatsApp.' },
        { sender: 'bot', time: '11:42', text: 'Para enquadrar a melhor abordagem: qual é o ramo de atuação da sua empresa e se tem campanhas ativas no Google ou Meta Ads?' },
        { sender: 'user', time: '11:43', text: 'Somos uma consultoria tributária no Porto. Investimos cerca de 2.000€/mês em anúncios mas a página atual converte pouco.' },
        { sender: 'bot', time: '11:43', text: 'Compreendo perfeitamente! Com esse volume de investimento, uma taxa de conversão abaixo do potencial gera desperdício diário de orçamento. O Manoel estruturou uma análise rápida de funil para o vosso caso.' },
        { sender: 'bot', time: '11:43', text: 'Tem disponibilidade para uma sessão técnica de 15 minutos amanhã às 14h30 ou quinta às 10h?' },
        { sender: 'user', time: '11:44', text: 'Amanhã às 14h30 é perfeito para mim.' },
        { sender: 'bot', time: '11:44', text: 'Excelente! Reserva confirmada no Google Calendar para amanhã às 14h30. O Manoel já foi notificado e enviámos o link da reunião para o seu e-mail. Até breve!' },
      ],
    },
    {
      id: 'clinic',
      title: 'Clínica & Saúde Estética',
      agentName: 'Assistente Clínico IA',
      conversation: [
        { sender: 'user', time: '19:15', text: 'Boa noite, vocês fazem alinhadores invisíveis? Qual é o valor aproximado?' },
        { sender: 'bot', time: '19:15', text: 'Boa noite! Sim, a clínica é especialista certificada em ortodontia invisível. Como cada caso tem complexidade própria, o plano e valor exato são definidos após escaneamento 3D digital.' },
        { sender: 'bot', time: '19:15', text: 'Está à procura de tratamento para correção estética rápida ou alinhamento funcional completo?' },
        { sender: 'user', time: '19:16', text: 'Estética rápida, tenho um casamento em 4 meses.' },
        { sender: 'bot', time: '19:16', text: 'Perfeito! Temos protocolos expressos ideais para essa janela. Temos horários para avaliação 3D sem compromisso nesta sexta às 16h ou sábado às 10h. Qual prefere?' },
        { sender: 'user', time: '19:17', text: 'Sexta às 16h fica ótimo.' },
        { sender: 'bot', time: '19:17', text: 'Confirmado para sexta-feira às 16h! A Dra. Sofia já recebeu a sua ficha. A morada é na Av. dos Aliados, 120. Enviámos o lembrete para si!' },
      ],
    },
    {
      id: 'realestate',
      title: 'Imobiliário & Empreendimentos',
      agentName: 'Concierge Imobiliário IA',
      conversation: [
        { sender: 'user', time: '22:30', text: 'Olá! Gostaria de receber a brochura e a tabela de preços do empreendimento em Matosinhos.' },
        { sender: 'bot', time: '22:30', text: 'Olá! Com certeza. O empreendimento conta com tipologias T2 e T3 a 200m da praia, com acabamentos premium e varanda panorâmica.' },
        { sender: 'bot', time: '22:30', text: 'Acabei de anexar o dossier executivo em PDF. Procura para habitação própria ou investimento para rentabilidade?' },
        { sender: 'user', time: '22:31', text: 'Investimento para arrendamento de médio prazo.' },
        { sender: 'bot', time: '22:31', text: 'Excelente escolha. A rentabilidade estimada neste lote é de 6.8% ao ano. Gostaria de receber a simulação de rentabilidade e agendar visita ao apartamento modelo nesta semana?' },
      ],
    },
  ];

  const currentChat = niches.find((n) => n.id === activeNiche);

  return (
    <section id="ia" className="py-24 bg-[#0B0E14] relative border-b border-steel-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-steel-border/60 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-electric-lime uppercase tracking-widest bg-electric-lime/10 px-3 py-1 rounded border border-electric-lime/20 mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>TECNOLOGIA DE PONTA // DEMONSTRAÇÃO REAL</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Agentes de IA que atendem e vendem por si no WhatsApp.
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-steel-text text-sm sm:text-base font-light">
              Nunca mais perca um cliente por demora no atendimento. O nosso agente qualifica a oportunidade, tira dúvidas e agenda no seu calendário em 3 segundos.
            </p>
          </div>
        </div>

        {/* Niche Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {niches.map((n) => (
            <button
              key={n.id}
              onClick={() => setActiveNiche(n.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeNiche === n.id
                  ? 'bg-electric-lime text-[#080A0E] font-bold shadow-[0_0_20px_rgba(212,255,0,0.3)]'
                  : 'bg-steel-border/50 text-steel-text hover:text-white border border-steel-border'
              }`}
            >
              {n.title}
            </button>
          ))}
        </div>

        {/* Interface do Simulador de WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Lado Esquerdo: Janela do WhatsApp Dark Mode */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-steel-border bg-[#080A0E] overflow-hidden shadow-2xl">
              
              {/* WhatsApp Header Bar */}
              <div className="bg-[#131722] px-5 py-3.5 border-b border-steel-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#131722] absolute bottom-0 right-0"></span>
                  </div>

                  <div>
                    <h4 className="font-display text-sm font-bold text-white flex items-center space-x-2">
                      <span>{currentChat.agentName}</span>
                      <span className="px-1.5 py-0.2 rounded bg-electric-lime/20 text-electric-lime font-mono text-[9px]">IA ATIVA</span>
                    </h4>
                    <span className="text-[11px] font-mono text-emerald-400">● Online agora (tempo de resposta: 2s)</span>
                  </div>
                </div>

                <div className="font-mono text-xs text-steel-muted hidden sm:block">
                  WhatsApp Cloud API
                </div>
              </div>

              {/* Chat Stream Messages */}
              <div className="p-5 sm:p-6 space-y-3.5 max-h-[460px] overflow-y-auto bg-[#07090D] bg-radial-gradient">
                {currentChat.conversation.map((msg, idx) => {
                  const isUser = msg.sender === 'user';
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[78%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                          isUser
                            ? 'bg-[#1E2536] text-white rounded-br-xs border border-steel-border/70'
                            : 'bg-[#0F1420] text-[#E5E7EB] rounded-bl-xs border border-electric-lime/30 shadow-sm'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <div className={`flex items-center justify-end space-x-1 mt-1 font-mono text-[10px] ${
                          isUser ? 'text-steel-muted' : 'text-electric-lime/80'
                        }`}>
                          <span>{msg.time}</span>
                          <CheckCheck className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Fake Input Footer */}
              <div className="bg-[#131722] px-4 py-3 border-t border-steel-border flex items-center justify-between text-xs text-steel-muted">
                <span className="font-mono">Demonstração interativa de fluxo neural</span>
                <span className="font-mono text-electric-lime text-[11px]">Agendamento Automático Ativo</span>
              </div>

            </div>
          </div>

          {/* Lado Direito: Métricas de Conversão & Benefícios */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-steel-border space-y-4">
              <span className="font-mono text-xs text-electric-lime uppercase tracking-widest block font-bold">
                // O IMPACTO NO SEU NEGÓCIO:
              </span>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-electric-lime/10 text-electric-lime shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white text-sm">Resposta em menos de 3 segundos</h5>
                    <p className="text-xs text-steel-text font-light">Leads atendidas nos primeiros 5 minutos têm 21x mais probabilidade de fechar negócio do que após 30 minutos.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white text-sm">Agendamento direto no Calendário</h5>
                    <p className="text-xs text-steel-text font-light">O agente analisa a sua disponibilidade em tempo real e insere a reunião na sua agenda com link do Google Meet / Zoom.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white text-sm">Operação 24 horas por dia, 7 dias por semana</h5>
                    <p className="text-xs text-steel-text font-light">Captura clientes à noite, aos fins de semana e feriados sem necessidade de equipa de plantão.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA para o WhatsApp com o Manoel */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#131722] to-[#0D1017] border border-electric-lime/40 space-y-3 text-center sm:text-left">
              <h4 className="font-display font-bold text-white text-base">
                Quer testar um agente treinado na sua oferta?
              </h4>
              <p className="text-xs text-steel-text font-light leading-relaxed">
                Podemos criar uma demonstração personalizada com as informações do seu negócio para ver o fluxo em funcionamento no seu próprio telemóvel.
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/351924179047?text=Ol%C3%A1%20Manoel!%20Gostaria%20de%20testar%20um%20Agente%20de%20IA%20personalizado%20para%20o%20meu%20neg%C3%B3cio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-emerald-500 text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-emerald-400 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Testar Agente no meu WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

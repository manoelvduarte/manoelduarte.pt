import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Em quanto tempo fica pronta a minha landing page ou website?',
      a: 'O prazo de entrega habitual é de 5 a 7 dias úteis após a recepção do briefing e dos acessos básicos. O processo segue um cronograma rigoroso: Estrutura & Copy (dias 1-2), Design & Desenvolvimento (dias 3-4), Testes em 6 resoluções e Publicação (dia 5).',
    },
    {
      q: 'Onde o site fica alojado e quais são os custos fixos mensais?',
      a: 'Alojamos os projectos em redes de distribuição global de alto desempenho (Vercel ou Cloudflare Pages), que oferecem carregamento instantâneo, certificado de segurança SSL gratuito e redundância mundial. Para a grande maioria das empresas, o custo mensal de alojamento é zero ou inferior a 5€/mês.',
    },
    {
      q: 'Como funciona a integração com o WhatsApp e captação de leads?',
      a: 'A página é configurada para enviar os contactos directamente para o seu telemóvel via WhatsApp (com mensagem pré-formatada contendo os dados do cliente) e/ou para a sua caixa de e-mail. Não perde tempo a aceder a painéis complicados: cada lead chega no segundo em que é submetida.',
    },
    {
      q: 'O site funciona perfeitamente em telemóveis e ecrãs pequenos?',
      a: 'Absolutamente. Construímos com metodologia mobile-first rigorosa. Antes de qualquer entrega, o código é auditado automaticamente em 6 resoluções de ecrã (desde telemóveis compactos de 360px até monitores 4K de 1440px), garantindo zero corte de botões e zero rolagem lateral acidental.',
    },
    {
      q: 'Como funciona o processo de contratação e pagamento em Portugal?',
      a: 'Trabalhamos com clareza e escopo fechado. O início do trabalho dá-se com um sinal de 50% para reserva de agenda e arranque da produção. Os restantes 50% são liquidados após a sua revisão e aprovação final da página no ar. Aceitamos transferência bancária (IBAN), MB WAY e Stripe.',
    },
    {
      q: 'Consigo fazer alterações e terei suporte após o lançamento?',
      a: 'Sim. Entregamos o código-fonte integral, organizado e documentado, pronto a alojar. Além disso, todos os projectos incluem garantia técnica de 30 dias para qualquer correcção de bugs ou pequenos ajustes de texto sem custo adicional.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#080A0E] relative border-b border-steel-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-steel-border/60 border border-electric-lime/30 text-electric-lime font-mono text-xs uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL // DÚVIDAS FREQUENTES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Perguntas frequentes antes de avançar.
          </h2>

          <p className="text-steel-text text-base max-w-xl mx-auto font-light leading-relaxed">
            Respostas directas às questões mais comuns sobre prazos, funcionamento técnico, alojamento e garantias.
          </p>
        </div>

        {/* Acordeão de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`glass-panel rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-electric-lime/50 bg-[#0D1017]/90 shadow-[0_0_25px_rgba(212,255,0,0.06)]'
                    : 'border-steel-border/80 hover:border-steel-border bg-[#0D1017]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between space-x-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white/95">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg border transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'rotate-180 bg-electric-lime text-[#080A0E] border-electric-lime'
                        : 'bg-steel-border/50 text-steel-text border-steel-border'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-steel-text font-light leading-relaxed border-t border-steel-border/40 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caixa de Dúvida Rápida */}
        <div className="mt-12 p-6 rounded-xl glass-panel border border-steel-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-display font-semibold text-white block text-sm sm:text-base">
              Tem uma dúvida específica sobre a sua oferta?
            </span>
            <span className="text-xs text-steel-text font-light">
              Envie uma mensagem e respondo directamente com o melhor enquadramento técnico.
            </span>
          </div>

          <a
            href="https://wa.me/351924179047?text=Ol%C3%A1%20Manoel,%20tenho%20uma%20d%C3%BAvida%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20uma%20p%C3%A1gina."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-emerald-400 transition-all shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Tirar dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

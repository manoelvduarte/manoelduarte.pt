import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    tipoProjecto: 'Landing Page de Captação',
    mensagem: '',
    privacidade: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacidade) {
      setErrorMsg('Por favor, autorize o contacto e aceite os termos de privacidade para submeter.');
      return;
    }
    setErrorMsg('');

    // Trigger synthetic GA4 & Meta Pixel Lead Conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'contact_form',
        event_label: formData.tipoProjecto,
      });
    }

    // Deliver lead via WhatsApp with form data pre-filled (no backend required)
    const texto = [
      'Olá Manoel, pedido de orçamento pelo site:',
      `Nome: ${formData.nome}`,
      `Empresa/Projecto: ${formData.empresa || '-'}`,
      `E-mail: ${formData.email}`,
      `Tipo: ${formData.tipoProjecto}`,
      `Mensagem: ${formData.mensagem}`,
    ].join('\n');
    const targetUrl = `https://wa.me/351924179047?text=${encodeURIComponent(texto)}`;
    setWhatsappUrl(targetUrl);
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Browser popup blocker fallback handled in submitted view
    }
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0D1017] relative border-b border-steel-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coluna de Texto & Chamada para Acção */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-electric-lime uppercase tracking-widest block">
              // NOVO PROJECTO / ORÇAMENTO
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Tem uma oferta que merece uma página à altura?
            </h2>

            <p className="text-steel-text text-base leading-relaxed font-light">
              Conte-me o que pretende lançar, captar ou melhorar. Analiso o contexto e respondo com o próximo passo possível.
            </p>

            {/* Opção Rápida WhatsApp */}
            <div className="pt-6 border-t border-steel-border/60 space-y-4">
              <span className="font-mono text-xs text-steel-text uppercase tracking-widest block">
                PREFERE RESPOSTA RÁPIDA?
              </span>

              <a
                href="https://wa.me/351924179047?text=Ol%C3%A1%20Manoel,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20uma%20landing%20page."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 px-6 py-3.5 rounded-lg glass-panel-interactive border border-emerald-500/40 text-emerald-400 font-mono text-xs uppercase tracking-wider font-bold hover:bg-emerald-500/10 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Falar no WhatsApp →</span>
              </a>
              <span className="block text-[11px] font-mono text-steel-muted">+351 924 179 047 · Resposta habitual em menos de 1h</span>
            </div>

            {/* Informação do Porto */}
            <div className="pt-4 font-mono text-xs text-steel-text">
              <span className="block text-white font-semibold">LOCALIZAÇÃO:</span>
              <span>Porto, Portugal (UTC+0 / WET)</span>
            </div>
          </div>

          {/* Coluna do Formulário Responsivo */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-steel-border shadow-2xl relative">
              
              {submitted ? (
                <div className="py-10 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-electric-lime/10 border border-electric-lime flex items-center justify-center mx-auto text-electric-lime">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white">
                      Pedido preparado.
                    </h3>
                    <p className="text-steel-text text-sm max-w-md mx-auto leading-relaxed">
                      Abrimos o WhatsApp com os dados da sua mensagem pré-formatados. Caso o aplicativo não tenha aberto automaticamente, clique no botão abaixo:
                    </p>
                  </div>
                  <div>
                    <a
                      href={whatsappUrl || 'https://wa.me/351924179047'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-[#080A0E] font-mono text-xs uppercase tracking-wider font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                    >
                      <MessageSquare className="w-4 h-4 text-[#080A0E]" />
                      <span>Abrir WhatsApp com o pedido →</span>
                    </a>
                  </div>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-mono text-xs text-steel-muted hover:text-white hover:underline uppercase tracking-wider"
                    >
                      ← Voltar / Enviar outro pedido
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMsg && (
                    <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nome */}
                    <div className="space-y-2">
                      <label htmlFor="nome" className="block font-mono text-xs text-steel-text uppercase tracking-wider">
                        Nome completo <span className="text-electric-lime">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: Pedro Silva"
                        className="w-full px-4 py-3 rounded-lg bg-[#080A0E] border border-steel-border text-white text-sm focus:outline-none focus:border-electric-lime transition-colors placeholder:text-steel-muted"
                      />
                    </div>

                    {/* Empresa / Projecto */}
                    <div className="space-y-2">
                      <label htmlFor="empresa" className="block font-mono text-xs text-steel-text uppercase tracking-wider">
                        Empresa ou projecto
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ex: Studio / Marca X"
                        className="w-full px-4 py-3 rounded-lg bg-[#080A0E] border border-steel-border text-white text-sm focus:outline-none focus:border-electric-lime transition-colors placeholder:text-steel-muted"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* E-mail */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-mono text-xs text-steel-text uppercase tracking-wider">
                        E-mail de contacto <span className="text-electric-lime">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="pedro@empresa.pt"
                        className="w-full px-4 py-3 rounded-lg bg-[#080A0E] border border-steel-border text-white text-sm focus:outline-none focus:border-electric-lime transition-colors placeholder:text-steel-muted"
                      />
                    </div>

                    {/* Tipo de Projecto */}
                    <div className="space-y-2">
                      <label htmlFor="tipoProjecto" className="block font-mono text-xs text-steel-text uppercase tracking-wider">
                        Tipo de projecto
                      </label>
                      <select
                        id="tipoProjecto"
                        name="tipoProjecto"
                        value={formData.tipoProjecto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#080A0E] border border-steel-border text-white text-sm focus:outline-none focus:border-electric-lime transition-colors"
                      >
                        <option value="Landing Page de Captação">Landing Page de Captação</option>
                        <option value="Website Institucional / Apresentação">Website Institucional / Apresentação</option>
                        <option value="Página de Vendas / Produto Digital">Página de Vendas / Produto Digital</option>
                        <option value="Campanha Ads (Google / Meta)">Campanha Ads (Google / Meta)</option>
                        <option value="Outro / Consultoria">Outro / Consultoria</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="block font-mono text-xs text-steel-text uppercase tracking-wider">
                      Mensagem / Detalhes da oferta <span className="text-electric-lime">*</span>
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Explique resumidamente a oferta, prazos previstos ou objectivos da página..."
                      className="w-full px-4 py-3 rounded-lg bg-[#080A0E] border border-steel-border text-white text-sm focus:outline-none focus:border-electric-lime transition-colors placeholder:text-steel-muted resize-none"
                    ></textarea>
                  </div>

                  {/* Checkbox Privacidade */}
                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="privacidade"
                      name="privacidade"
                      checked={formData.privacidade}
                      onChange={handleChange}
                      className="mt-1 rounded bg-[#080A0E] border-steel-border text-electric-lime focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <label htmlFor="privacidade" className="text-xs text-steel-text cursor-pointer leading-relaxed">
                      Autorizo o contacto sobre este pedido e li a{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-white underline hover:text-electric-lime cursor-pointer inline"
                      >
                        Política de Privacidade
                      </button>
                      .
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-electric-lime text-[#080A0E] font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_25px_rgba(212,255,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Pedir orçamento</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel border border-steel-border rounded-2xl p-6 sm:p-8 max-w-lg w-full space-y-4 relative">
            <div className="flex items-center justify-between border-b border-steel-border/60 pb-3">
              <h3 className="font-display text-lg font-bold text-white">Política de Privacidade</h3>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-3 py-1 rounded bg-steel-border text-xs font-mono text-white hover:bg-steel-hover cursor-pointer"
              >
                [Fechar]
              </button>
            </div>
            <div className="text-xs text-steel-text space-y-3 leading-relaxed">
              <p>
                Os dados fornecidos (nome, empresa, e-mail e detalhes do projeto) destinam-se exclusivamente à análise técnica e resposta ao seu pedido de orçamento por Manoel Duarte (Porto, Portugal).
              </p>
              <p>
                Não partilhamos, vendemos ou utilizamos os seus dados para qualquer outro fim comercial. A comunicação é realizada diretamente via WhatsApp ou e-mail.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

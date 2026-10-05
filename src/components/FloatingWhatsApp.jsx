import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/351924179047?text=Ol%C3%A1%20Manoel,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20uma%20landing%20page."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 text-[#080A0E] shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageSquare className="w-6 h-6 text-[#080A0E] fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-mono text-xs uppercase font-bold tracking-wider px-0 group-hover:px-2 text-[#080A0E]">
        WhatsApp
      </span>
    </a>
  );
}

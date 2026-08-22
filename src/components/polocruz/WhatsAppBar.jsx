import { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronUp, Globe } from 'lucide-react';
import { WHATSAPP, LOGOS, WEBSITES } from '@/data/products';

export default function WhatsAppBar() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      {open && (
        <div className="bg-[#EEF5FB] border border-[#D6EAF8] rounded-xl shadow-2xl overflow-hidden w-72 animate-fade-in">
          <div className="px-4 py-3 bg-[#0D3D5C] flex items-center justify-between">
            <span className="text-white text-sm font-medium tracking-wide">Atención y Pedidos</span>
            <button onClick={() => setOpen(false)} className="text-[#D6EAF8]/60 hover:text-[#EEF5FB]">
              <X size={16} />
            </button>
          </div>
          <div className="p-3 space-y-3">
            {/* Mil Sabores */}
            <div className="p-2.5 rounded-lg bg-white shadow-sm border border-[#C87941]/20">
              <div className="flex items-center gap-3 mb-2">
                <img src={LOGOS.milSabores} alt="Mil Sabores" className="w-8 h-8 object-contain shrink-0" />
                <div>
                  <p className="text-[#0D3D5C] font-semibold text-sm leading-tight">Mil Sabores</p>
                  <p className="text-[#C87941] text-[0.65rem] font-medium uppercase tracking-wider">Horneados típicos</p>
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href={WEBSITES.milSabores}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-[#C87941] text-white text-xs font-bold rounded hover:bg-[#b06734] transition-colors"
                >
                  <Globe size={13} />
                  <span>Pedir en Web</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP.milSabores}?text=${encodeURIComponent('Hola! Me interesan los productos de Mil Sabores.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 bg-[#25D366] text-white rounded hover:bg-[#20c15e] transition-colors"
                  title="Chat de WhatsApp"
                >
                  <MessageCircle size={15} />
                </a>
              </div>
            </div>

            {/* Torta Express */}
            <div className="p-2.5 rounded-lg bg-white shadow-sm border border-[#E91E8C]/20">
              <div className="flex items-center gap-3 mb-2">
                <img src={LOGOS.tortaExpress} alt="Torta Express" className="w-8 h-7 object-contain shrink-0" />
                <div>
                  <p className="text-[#0D3D5C] font-semibold text-sm leading-tight">Torta Express</p>
                  <p className="text-[#E91E8C] text-[0.65rem] font-medium uppercase tracking-wider">Tortas artesanales</p>
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href={WEBSITES.tortaExpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-[#E91E8C] text-white text-xs font-bold rounded hover:bg-[#c91577] transition-colors"
                >
                  <Globe size={13} />
                  <span>Pedir en Web</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP.tortaExpress}?text=${encodeURIComponent('Hola! Me interesan las tortas de Torta Express.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 bg-[#25D366] text-white rounded hover:bg-[#20c15e] transition-colors"
                  title="Chat de WhatsApp"
                >
                  <MessageCircle size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white hover:bg-[#20c15e] transition-colors animate-pulse-glow"
        aria-label="Contactar y Pedidos"
      >
        {open ? <ChevronUp size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
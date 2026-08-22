import React, { useEffect, useState } from 'react';
import { useMilSaboresCart } from '@/context/MilSaboresCartContext';
import { base44 } from '@/api/base44Client';
import { X, Minus, Plus, Trash2, Phone } from 'lucide-react';
import { getProductImage } from '@/lib/productImages';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, count, clearCart } = useMilSaboresCart();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleOrderWhatsApp = async () => {
    if (items.length === 0) return;
    setSending(true);
    try {
      const orderItems = items.map((i) => ({
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        image_url: i.image_url || getProductImage(i),
      }));

      await base44.entities.Order.create({
        customer_name: 'Cliente WhatsApp Directo',
        customer_phone: 'WhatsApp Directo',
        items: orderItems,
        total,
        status: 'pendiente',
      });
    } catch (err) {
      console.error(err);
    } finally {
      const lines = items
        .map((i) => `• ${i.quantity}x ${i.name} — ${i.price * i.quantity} Bs`)
        .join('%0A');

      const msg =
        `¡Hola Mil Sabores! Quiero pedir los siguientes horneados congelados:%0A%0A` +
        `${lines}%0A%0A` +
        `Total: ${total} Bs`;

      window.open(`https://wa.me/59172163631?text=${msg}`, '_blank');
      clearCart();
      setIsOpen(false);
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer lateral */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute right-0 top-0 h-full w-full max-w-md glass border-l border-[#E89557]/30 flex flex-col shadow-2xl"
          >
            {/* Encabezado */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E89557]/20">
              <div>
                <p className="text-[10px] uppercase tracking-luxe text-[#E89557]">Tu selección</p>
                <h2 className="font-display text-2xl text-[#E89557]">El Carrito</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-[#E89557]/20 text-white transition-colors cursor-pointer"
                aria-label="Cerrar carrito"
              >
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
                <div className="h-20 w-20 rounded-full border border-[#E89557]/30 flex items-center justify-center bg-[#E89557]/10">
                  <span className="text-4xl">🥖</span>
                </div>
                <p className="font-display text-2xl text-[#E89557]">Tu carrito está vacío</p>
                <p className="text-sm text-white/60 max-w-xs">
                  Descubre nuestros horneados congelados, listos para hornear en casa.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-6 h-11 rounded-full bg-[#E89557] text-[#2B2620] font-medium text-sm hover:bg-white transition-colors cursor-pointer"
                >
                  Ver congelados
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b border-[#E89557]/10 items-center">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-[#E89557]/30 bg-black/40">
                        <img
                          src={getProductImage(item)}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base text-[#E89557] leading-tight truncate">{item.name}</h3>
                        <p className="text-xs text-white/60 mt-0.5">{item.price} Bs · unidad</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-6 w-6 rounded-full border border-[#E89557]/30 flex items-center justify-center text-white hover:bg-[#E89557]/20 transition-colors cursor-pointer"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-6 text-center text-white text-xs">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 rounded-full border border-[#E89557]/30 flex items-center justify-center text-white hover:bg-[#E89557]/20 transition-colors cursor-pointer"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-white/40 hover:text-[#E89557] transition-colors cursor-pointer"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-display text-base text-[#E89557]">{item.price * item.quantity}</p>
                        <p className="text-[10px] uppercase tracking-luxe text-white/40">Bs</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-5 border-t border-[#E89557]/20 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-luxe text-[#E89557]">
                      Total · {count} {count === 1 ? 'unidad' : 'unidades'}
                    </span>
                    <div className="text-right">
                      <span className="font-display text-3xl text-[#E89557]">{total}</span>
                      <span className="text-xs uppercase tracking-luxe text-white/60 ml-1">Bs</span>
                    </div>
                  </div>

                  <button
                    onClick={handleOrderWhatsApp}
                    disabled={sending}
                    className="w-full h-14 rounded-full bg-[#E89557] text-[#2B2620] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-60 shadow-xl active:scale-[0.98] cursor-pointer"
                  >
                    <Phone size={18} />
                    {sending ? 'Abriendo WhatsApp...' : 'Pedir por WhatsApp'}
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center text-xs uppercase tracking-luxe text-white/40 hover:text-white transition-colors pt-1 block cursor-pointer"
                  >
                    Seguir explorando
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

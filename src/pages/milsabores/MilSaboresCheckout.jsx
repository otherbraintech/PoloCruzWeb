import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMilSaboresCart } from '@/context/MilSaboresCartContext';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, Check } from 'lucide-react';

export default function MilSaboresCheckout() {
  const { items, total, count, clearCart } = useMilSaboresCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    customer_name: '',
    customer_phone: '',
    customer_email: '',
    delivery_address: '',
    delivery_method: 'retiro',
    notes: '',
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);
    try {
      const orderItems = items.map((i) => ({
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        image_url: i.image_url,
      }));

      await base44.entities.Order.create({
        ...form,
        items: orderItems,
        total,
        status: 'pendiente',
      });

      const lines = items
        .map((i) => `• ${i.quantity}x ${i.name} — ${i.price * i.quantity} Bs`)
        .join('%0A');
      const msg =
        `¡Hola Mil Sabores! Quiero pedir horneados congelados:%0A%0A${lines}%0A%0A` +
        `Total: ${total} Bs%0A` +
        `Nombre: ${form.customer_name}%0A` +
        `Teléfono: ${form.customer_phone}%0A` +
        `Entrega: ${form.delivery_method === 'retiro' ? 'Retiro en tienda' : 'Delivery'}%0A` +
        (form.delivery_address ? `Dirección: ${form.delivery_address}%0A` : '') +
        (form.notes ? `Notas: ${form.notes}%0A` : '');

      setSuccess(true);
      clearCart();

      setTimeout(() => {
        window.open(`https://wa.me/59172163631?text=${msg}`, '_blank');
      }, 800);
    } catch (err) {
      console.error(err);
      alert('Ocurrió un error al registrar tu pedido. Inténtalo de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#2B2620] text-white px-5 pt-20">
        <div className="text-center max-w-md">
          <div className="mx-auto h-24 w-24 rounded-full bg-[#E89557] flex items-center justify-center mb-8 animate-fade-in">
            <Check size={48} className="text-[#2B2620]" strokeWidth={3} />
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-[#E89557] mb-4">
            ¡Pedido enviado!
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Registramos tu pedido y abrimos WhatsApp para confirmarlo con nosotros.
            Te esperamos pronto.
          </p>
          <Link
            to="/milsabores"
            className="inline-block px-8 py-4 rounded-full bg-[#E89557] text-[#2B2620] font-semibold uppercase tracking-wider text-sm hover:bg-white transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#2B2620] text-white gap-6 px-5 pt-20">
        <p className="font-display text-5xl text-[#E89557]">Tu carrito está vacío</p>
        <Link to="/milsabores" className="px-6 py-3 rounded-full bg-[#E89557] text-[#2B2620] font-medium uppercase tracking-wider text-sm">
          Ver congelados
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2B2620] text-white pt-20 md:pt-24 pb-16">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <Link
          to="/milsabores"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-luxe text-white/60 hover:text-[#E89557] transition mb-8"
        >
          <ArrowLeft size={16} /> Seguir comprando
        </Link>

        <h1 className="font-display text-5xl md:text-7xl text-[#E89557] leading-[0.95] mb-12" style={{ letterSpacing: '-0.02em' }}>
          Finalizar pedido
        </h1>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-4 font-semibold">Tus datos</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre completo" required>
                  <input
                    required
                    value={form.customer_name}
                    onChange={(e) => update('customer_name', e.target.value)}
                    className="checkout-input"
                    placeholder="Tu nombre"
                  />
                </Field>
                <Field label="Teléfono" required>
                  <input
                    required
                    type="tel"
                    value={form.customer_phone}
                    onChange={(e) => update('customer_phone', e.target.value)}
                    className="checkout-input"
                    placeholder="+591 ..."
                  />
                </Field>
              </div>
              <Field label="Correo (opcional)" className="mt-4">
                <input
                  type="email"
                  value={form.customer_email}
                  onChange={(e) => update('customer_email', e.target.value)}
                  className="checkout-input"
                  placeholder="tu@correo.com"
                />
              </Field>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-4 font-semibold">Entrega</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'retiro', label: 'Retiro en tienda', emoji: '🏪' },
                  { id: 'delivery', label: 'Delivery', emoji: '🛵' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => update('delivery_method', opt.id)}
                    className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                      form.delivery_method === opt.id
                        ? 'border-[#E89557] bg-[#E89557]/10'
                        : 'border-[#E89557]/20 hover:border-[#E89557]/50'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{opt.emoji}</span>
                    <span className="text-white text-sm">{opt.label}</span>
                  </button>
                ))}
              </div>
              {form.delivery_method === 'delivery' && (
                <Field label="Dirección de entrega" className="mt-4">
                  <input
                    value={form.delivery_address}
                    onChange={(e) => update('delivery_address', e.target.value)}
                    className="checkout-input"
                    placeholder="Calle, número, referencia"
                  />
                </Field>
              )}
            </div>

            <Field label="Notas del pedido (opcional)">
              <textarea
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                rows={3}
                className="checkout-input resize-none"
                placeholder="Algún detalle especial para tu pedido..."
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-14 rounded-full bg-[#E89557] text-[#2B2620] font-semibold uppercase tracking-wider text-sm hover:bg-white transition disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98]"
            >
              {submitting ? (
                <>
                  <span className="h-5 w-5 border-2 border-[#2B2620]/30 border-t-[#2B2620] rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>Confirmar y pedir por WhatsApp</>
              )}
            </button>
          </form>

          {/* Resumen */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-4 font-semibold">
                Tu pedido · {count} {count === 1 ? 'unidad' : 'unidades'}
              </p>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b border-[#E89557]/10">
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-lg text-[#E89557] leading-tight">{item.name}</p>
                      <p className="text-xs text-white/50 mt-0.5">{item.quantity} × {item.price} Bs</p>
                    </div>
                    <p className="font-display text-lg text-white">{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[#E89557]/20 flex items-baseline justify-between">
                <span className="text-sm uppercase tracking-luxe text-[#E89557]">Total</span>
                <div className="text-right">
                  <span className="font-display text-4xl text-[#E89557]">{total}</span>
                  <span className="text-xs uppercase tracking-luxe text-white/60 ml-1">Bs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-input {
          width: 100%;
          height: 3rem;
          padding: 0 1rem;
          border-radius: 0.75rem;
          background: rgba(232,149,87,0.06);
          border: 1px solid rgba(232,149,87,0.25);
          color: #FFFFFF;
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .checkout-input::placeholder { color: rgba(255,255,255,0.4); }
        .checkout-input:focus {
          outline: none;
          border-color: #E89557;
          box-shadow: 0 0 0 2px rgba(232,149,87,0.2);
        }
        textarea.checkout-input { height: auto; padding-top: 0.75rem; padding-bottom: 0.75rem; }
      `}</style>
    </div>
  );
}

function Field({ label, required, children, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-[10px] uppercase tracking-luxe text-[#E89557] mb-2 font-semibold">
        {label} {required && <span className="text-white">*</span>}
      </label>
      {children}
    </div>
  );
}

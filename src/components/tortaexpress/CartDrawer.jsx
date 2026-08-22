import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Image } from "@/components/ui/image";
import { useTortaExpressCart } from "@/context/TortaExpressCartContext";
import {
  TORTAS,
  SIZES,
  tortaPrice,
  formatPrice,
  GRADIENTS,
} from "@/data/tortas";
import { generalContactUrl } from "@/lib/whatsapp";

export default function CartDrawer() {
  const {
    items,
    setQty,
    removeItem,
    clear,
    open,
    setOpen,
  } = useTortaExpressCart();

  const resolved = items.map((i) => {
    const torta = TORTAS.find((t) => t.id === i.tortaId);
    const size = SIZES.find((s) => s.key === i.sizeKey);
    const price = torta ? tortaPrice(torta, i.sizeKey) : 0;
    return { ...i, torta, size, price, subtotal: price * i.qty };
  });
  const total = resolved.reduce((n, r) => n + r.subtotal, 0);

  const checkout = () => {
    if (!resolved.length) return;
    const lines = ["¡Hola Torta Express! Quiero hacer este pedido (Retiro en Sucursal Norte):"];
    resolved.forEach((r) => {
      const cantidadText = r.qty === 1 ? "1 Unidad" : `${r.qty} Unidades`;
      lines.push(
        `• ${r.torta.name} (${r.size.name} · ${r.size.persons}) — ${cantidadText} — ${formatPrice(r.subtotal)}`
      );
    });
    lines.push(`Total a pagar: ${formatPrice(total)}`);
    lines.push("¿Me confirman la disponibilidad para pasar a retirar?");
    window.open(generalContactUrl(lines.join("\n")), "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />

          {/* Drawer lateral */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[hsl(var(--background))] shadow-2xl border-l border-[hsl(var(--border))]"
          >
            <header className="flex items-center justify-between border-b border-[hsl(var(--border))] px-5 py-4">
              <h2 className="flex items-center gap-2 font-display text-2xl text-foreground">
                <ShoppingBag className="h-5 w-5 text-accent" /> Tu carrito
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {resolved.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted-foreground">
                  <ShoppingBag className="h-12 w-12 opacity-30 text-accent" />
                  <p className="font-medium text-foreground">Tu carrito está vacío.</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-accent hover:underline cursor-pointer"
                  >
                    Explorar tortas
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {resolved.map((r) => (
                    <li key={r.id} className="flex gap-3 rounded-xl border border-[hsl(var(--border))] p-3 bg-card shadow-xs">
                      <div className="h-16 w-16 flex-none overflow-hidden rounded-xl">
                        {r.torta.image ? (
                          <Image
                            src={r.torta.image}
                            alt={r.torta.name}
                            fittingType="fill"
                            loading="lazy"
                            className="h-full w-full"
                          />
                        ) : (
                          <div
                            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${GRADIENTS[r.torta.category]}`}
                          >
                            <span className="text-2xl">{r.torta.emoji}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-display text-base font-bold text-foreground">{r.torta.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {r.size.name} · {r.size.persons}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(r.id)}
                            className="text-muted-foreground transition hover:text-destructive p-1 cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setQty(r.id, r.qty - 1)}
                              className="rounded-full border border-[hsl(var(--border))] p-1 transition hover:bg-muted cursor-pointer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-5 text-center text-sm font-semibold">{r.qty}</span>
                            <button
                              onClick={() => setQty(r.id, r.qty + 1)}
                              className="rounded-full border border-[hsl(var(--border))] p-1 transition hover:bg-muted cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-display text-base font-bold text-accent">{formatPrice(r.subtotal)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {resolved.length > 0 && (
                <div className="mt-6 space-y-3 pt-3 border-t border-[hsl(var(--border))]">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Lugar de Retiro</span>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">Sucursal Norte</span>
                  </div>
                  <div className="flex items-center justify-between text-base font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="font-display text-2xl text-accent">{formatPrice(total)}</span>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={clear}
                      className="text-xs text-muted-foreground transition hover:text-destructive underline cursor-pointer"
                    >
                      Vaciar carrito
                    </button>
                  </div>
                </div>
              )}
            </div>

            {resolved.length > 0 && (
              <footer className="border-t border-[hsl(var(--border))] p-4 bg-card">
                <button
                  onClick={checkout}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-md transition hover:bg-ring hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" /> Comprar por WhatsApp
                </button>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

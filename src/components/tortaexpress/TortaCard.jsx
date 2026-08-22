import { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, ShoppingBag, Check } from "lucide-react";
import { orderTortaUrl } from "@/lib/whatsapp";
import { GRADIENTS, SIZES, tortaPrice, formatPrice } from "@/data/tortas";
import { useTortaExpressCart } from "@/context/TortaExpressCartContext";

export default function TortaCard({ torta }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedSizeKey, setSelectedSizeKey] = useState("ce");
  const { addItem, setOpen: setOpenCart } = useTortaExpressCart();

  const selectedSize = SIZES.find((s) => s.key === selectedSizeKey) || SIZES[0];

  const handleAddToCart = () => {
    addItem(torta.id, selectedSizeKey);
    setOpenModal(false);
    setOpenCart(true);
  };

  const handleOrderWhatsApp = () => {
    window.open(orderTortaUrl(torta, selectedSize), "_blank");
    setOpenModal(false);
  };

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-[hsl(var(--border))] bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <Link to={`/tortaexpress/torta/${torta.id}`} className="relative block h-44 sm:h-72 overflow-hidden">
          {torta.image ? (
            <Image
              src={torta.image}
              alt={torta.name}
              fittingType="fill"
              loading="lazy"
              className="h-full w-full transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${GRADIENTS[torta.category]}`}>
              <span className="text-5xl sm:text-7xl drop-shadow-sm">{torta.emoji}</span>
            </div>
          )}
        </Link>

        <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-6 text-center space-y-2 sm:space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-xl">{torta.emoji}</span>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-foreground">{torta.name}</h3>
            </div>
            <p className="text-xs sm:text-sm leading-snug text-muted-foreground line-clamp-2 pt-0.5">
              {torta.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-1 sm:pt-2">
            <Button asChild variant="outline" className="rounded-full border-primary/40 bg-primary/5 text-ring font-semibold text-xs sm:text-sm py-1.5 sm:py-2.5 hover:bg-primary/15 hover:text-ring hover:border-ring transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <Link to={`/tortaexpress/torta/${torta.id}`}>Ver detalles</Link>
            </Button>
            <button
              onClick={() => setOpenModal(true)}
              className="inline-flex w-full items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-primary px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-ring hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Quiero esta torta
            </button>
          </div>
        </div>
      </article>

      {/* MODAL DE SELECCIÓN DE TAMAÑO Y PRECIO */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpenModal(false)} />
          
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-4">
              <span className="text-3xl">{torta.emoji}</span>
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold text-foreground">{torta.name}</h3>
                <p className="text-xs text-muted-foreground">Elegí tu tamaño preferido</p>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
              {SIZES.map((s) => {
                const p = tortaPrice(torta, s.key);
                const isSelected = selectedSizeKey === s.key;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setSelectedSizeKey(s.key)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition cursor-pointer ${
                      isSelected
                        ? "border-accent bg-accent/10 shadow-sm"
                        : "border-[hsl(var(--border))] hover:border-primary/40 hover:bg-primary/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.emoji}</span>
                      <div>
                        <p className="font-display text-base font-semibold text-foreground">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.persons}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg font-bold text-accent">{formatPrice(p)}</span>
                      {isSelected && <Check className="h-5 w-5 text-accent" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 border-t border-[hsl(var(--border))] pt-4">
              <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-3 text-sm font-semibold text-ring hover:bg-primary/15 transition hover:scale-[1.02] cursor-pointer"
              >
                <ShoppingBag className="h-4 w-4" /> Añadir al Carrito
              </button>
              <button
                onClick={handleOrderWhatsApp}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-ring hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" /> Pedir por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/tortaexpress/Navbar";
import SizeCard from "@/components/tortaexpress/SizeCard";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, MessageCircle, Plus } from "lucide-react";
import { TORTAS, SIZES, tortaPrice, formatPrice, GRADIENTS } from "@/data/tortas";
import { orderTortaUrl } from "@/lib/whatsapp";
import { useTortaExpressCart } from "@/context/TortaExpressCartContext";

export default function TortaExpressDetail() {
  const { id } = useParams();
  const torta = TORTAS.find((t) => t.id === id);
  const [sizeKey, setSizeKey] = useState("ce");
  const { addItem, count, setOpen } = useTortaExpressCart();

  if (!torta) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center bg-[hsl(var(--background))] text-foreground">
        <p className="font-display text-3xl text-foreground">No encontramos esa torta.</p>
        <Button asChild><Link to="/tortaexpress">Volver al catálogo</Link></Button>
      </div>
    );
  }

  const size = SIZES.find((s) => s.key === sizeKey) || SIZES[0];
  const price = tortaPrice(torta, sizeKey);

  const addToCart = () => {
    addItem(torta.id, sizeKey);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-foreground pb-28">
      <Navbar />
      <div className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-28">
        <Link to="/tortaexpress" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Volver al catálogo
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            {torta.image ? (
              <Image src={torta.image} alt={torta.name} fittingType="fill" loading="eager" fetchPriority="high" className="h-80 w-full md:h-[30rem]" />
            ) : (
              <div className={`flex h-80 items-center justify-center bg-gradient-to-br ${GRADIENTS[torta.category]} md:h-[30rem]`}>
                <span className="text-8xl">{torta.emoji}</span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="font-display text-4xl font-bold md:text-5xl leading-tight text-foreground flex items-center gap-3">
                <span>{torta.emoji}</span> {torta.name}
              </h1>
              <p className="text-base md:text-lg font-medium text-accent">{torta.tagline}</p>
            </div>

            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">Perfil de sabor</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {torta.flavor.map((f) => (
                  <span key={f} className="rounded-full border border-[hsl(var(--border))] px-3 py-1 text-sm text-foreground/80">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">{torta.story}</p>

            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">Elegí el tamaño</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {SIZES.map((s) => (
                  <SizeCard
                    key={s.key}
                    size={s}
                    price={tortaPrice(torta, s.key)}
                    selected={s.key === sizeKey}
                    onSelect={setSizeKey}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra fija inferior */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">{size.name} · {size.persons}</p>
            <p className="font-display text-xl sm:text-2xl font-bold text-accent">{formatPrice(price)}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={addToCart}
              className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-primary/50 bg-primary/10 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground active:scale-95 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Agregar</span>
            </button>
            <button
              onClick={() => setOpen(true)}
              className="relative flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-[hsl(var(--border))] bg-card px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-foreground transition hover:border-primary/50 hover:bg-primary/5 active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4 text-accent" />
              <span>Ver carrito</span>
              {count > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[0.7rem] font-bold text-accent-foreground shadow-sm">
                  {count}
                </span>
              )}
            </button>
            <a
              href={orderTortaUrl(torta, size)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-ring hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Pedir WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Navbar from "@/components/tortaexpress/Navbar";
import Footer from "@/components/tortaexpress/Footer";
import TortaCard from "@/components/tortaexpress/TortaCard";
import SectionTitle from "@/components/tortaexpress/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Image } from "@/components/ui/image";
import { MessageCircle, ChevronRight, MapPin, Clock } from "lucide-react";
import { TORTAS, EMOTION_GROUPS, HERO_IMAGE } from "@/data/tortas";
import { generalContactUrl } from "@/lib/whatsapp";

const FAQ = [
  { q: "¿Dónde retiro mi pedido?", a: "📍 Podés retirar tu pedido en nuestra Sucursal Norte, zona Radial 26. También contamos con servicio de delivery." },
  { q: "¿Con cuánta anticipación hay que pedir?", a: "⏰ Recomendamos realizar tu pedido con al menos 1 hora de anticipación, sujeto a disponibilidad." },
  { q: "¿Puedo personalizar la torta?", a: "🎂 Nuestras tortas tienen diseños y presentaciones definidos. Consultanos por WhatsApp para conocer las opciones disponibles." },
  { q: "¿Cómo pago?", a: "💳 Podés pagar mediante QR o en efectivo." },
  { q: "¿Hacen delivery?", a: "🛵 Sí, contamos con envíos por delivery. Consultanos el costo según tu ubicación." },
];

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-[hsl(var(--border))] text-foreground/70 hover:border-accent/60 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export default function TortaExpressHome() {
  const [emotion, setEmotion] = useState("todos");
  const favorites = TORTAS.filter((t) => t.favorite);
  const favoriteIds = new Set(favorites.map((t) => t.id));
  const filtered =
    emotion === "todos"
      ? TORTAS.filter((t) => !favoriteIds.has(t.id))
      : TORTAS.filter((t) => EMOTION_GROUPS.find((g) => g.id === emotion)?.ids.includes(t.id));

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-foreground">
      <Navbar />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3EAFA] via-[#FAF6FE] to-[#EDE0F5]">
          {HERO_IMAGE && (
            <Image
              src={HERO_IMAGE}
              fittingType="fill"
              className="h-full w-full transition-opacity duration-700"
              loading="eager"
              fetchPriority="high"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))]/95 via-[hsl(var(--background))]/70 to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="max-w-xl space-y-8 py-24">
            <h1 className="font-display text-5xl leading-[1.08] text-foreground sm:text-6xl md:text-7xl">
              Celebrar nunca fue tan fácil.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              ¿Qué se te antoja hoy? Elegí tu favorita — nosotros nos encargamos del resto.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="text-base hover:bg-ring hover:scale-[1.02] transition-all duration-300">
                <a href="#tortas">Ver nuestras tortas <ChevronRight className="ml-1 h-5 w-5" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-accent/50 text-[#B81D67] font-semibold hover:bg-accent/15 hover:text-[#800F43] hover:border-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <a href={generalContactUrl()} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Quiero pedir ya
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAVORITAS */}
      <section id="favoritas" className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle
          kicker="Las más vendidas"
          title="Nuestras favoritas"
          subtitle="Las tortas que más eligen para celebrar."
        />
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3.5 sm:gap-8 lg:grid-cols-3">
          {favorites.map((t) => (
            <TortaCard key={t.id} torta={t} />
          ))}
        </div>
      </section>

      {/* ELEGÍ POR EMOCIÓN + TODAS */}
      <section id="tortas" className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle
          kicker="Elegí por emoción"
          title="¿Qué se te antoja hoy?"
          subtitle="Organizamos nuestras tortas por lo que te pide el paladar."
        />
        <div className="mt-8 sm:mt-10 flex flex-wrap gap-2.5 sm:gap-3">
          <Chip active={emotion === "todos"} onClick={() => setEmotion("todos")}>Todas</Chip>
          {EMOTION_GROUPS.map((g) => (
            <Chip key={g.id} active={emotion === g.id} onClick={() => setEmotion(g.id)}>
              {g.emoji} {g.label}
            </Chip>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3.5 sm:gap-8 lg:grid-cols-3">
          {filtered.map((t) => (
            <TortaCard key={t.id} torta={t} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-card py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionTitle
            center
            kicker="Preguntas frecuentes"
            title="Todo muy simple"
          />
          <Accordion type="single" className="mt-10">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}

            {/* Pregunta CTA con botón directo a WhatsApp */}
            <AccordionItem value="q-cta">
              <AccordionTrigger className="text-left font-display text-lg text-foreground">
                ¿Cómo hago mi pedido?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                <p>📲 ¡Muy fácil! Elegí tu torta favorita del catálogo y escribinos directo por WhatsApp. Te confirmamos disponibilidad al instante.</p>
                <a
                  href={generalContactUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-ring hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" /> Pedir por WhatsApp
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <SectionTitle kicker="Contacto" title="Hablemos" subtitle="Estamos para ayudarte con tu celebración." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* WHATSAPP */}
          <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-[hsl(var(--border))] bg-card p-8 shadow-sm transition hover:shadow-md">
            <div className="space-y-3">
              <MessageCircle className="h-7 w-7 text-primary" />
              <h3 className="font-display text-xl text-foreground">WhatsApp Directo</h3>
              <p className="font-semibold text-lg text-foreground tracking-wide">+591 62013533</p>
              <p className="text-sm text-muted-foreground">Atención rápida para consultas, presupuestos y pedidos.</p>
            </div>
            <a
              href={generalContactUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B81D67] hover:text-[#800F43] hover:underline pt-2"
            >
              Abrir chat directo <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* UBICACION SUCURSAL NORTE */}
          <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-[hsl(var(--border))] bg-card p-6 shadow-sm transition hover:shadow-md">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <MapPin className="h-7 w-7 text-primary" />
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-ring">Sucursal Norte</span>
              </div>
              <h3 className="font-display text-xl text-foreground">Torta Express</h3>
              <p className="text-xs text-muted-foreground">Santa Cruz de la Sierra, Bolivia</p>
              <div className="overflow-hidden rounded-xl border border-[hsl(var(--border))] shadow-inner">
                <iframe
                  title="Mapa Torta Express Sucursal Norte"
                  src="https://maps.google.com/maps?q=-17.7392199,-63.1913144&z=16&output=embed"
                  width="100%"
                  height="130"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/aGwW6DS23RaFeodv6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B81D67] hover:text-[#800F43] hover:underline pt-1"
            >
              Abrir en Google Maps <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* HORARIOS */}
          <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-[hsl(var(--border))] bg-card p-8 shadow-sm transition hover:shadow-md">
            <div className="space-y-3">
              <Clock className="h-7 w-7 text-primary" />
              <h3 className="font-display text-xl text-foreground">Horario de Atención</h3>
              <p className="font-semibold text-base text-foreground">🕒 Lunes a Sábado</p>
              <p className="text-sm font-medium text-accent">8:00 AM – 17:00 PM (5:00 PM)</p>
              <p className="text-xs text-muted-foreground">Horario continuo.</p>
              <p className="text-sm text-muted-foreground pt-2">Realizar tu pedido con al menos 1 hora de anticipación, sujeto a disponibilidad.</p>
            </div>
            <div className="pt-2 text-xs text-muted-foreground border-t border-[hsl(var(--border))]">
              Retiro directo en Sucursal Norte (Santa Cruz de la Sierra).
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

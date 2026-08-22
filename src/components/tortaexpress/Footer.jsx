import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import Logo from "@/components/tortaexpress/Logo";
import { generalContactUrl } from "@/lib/whatsapp";

const EXPLORE = [
  { id: "tortas", label: "Nuestras tortas" },
  { id: "faq", label: "Preguntas frecuentes" },
  { id: "contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="space-y-3">
          <Logo className="h-14 w-36" />
          <p className="max-w-xs text-sm text-muted-foreground">
            Celebrar es más fácil con Torta Express. Elegí tu torta favorita y nosotros nos encargamos del resto.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline"
            >
              ← Visitar Portal Corporativo Polo Cruz
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm">
            {EXPLORE.map((e) => (
              <li key={e.id}>
                <a href={`/tortaexpress#${e.id}`} className="text-foreground/70 transition hover:text-accent">{e.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">Contacto</p>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <a href={generalContactUrl()} target="_blank" rel="noreferrer" className="hover:text-foreground font-medium">
                +591 62013533
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <a href="https://maps.app.goo.gl/aGwW6DS23RaFeodv6" target="_blank" rel="noreferrer" className="hover:text-foreground">
                Sucursal Norte (Santa Cruz)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Lun a Sáb · 8:00 AM – 5:00 PM
            </li>
          </ul>
          <a
            href={generalContactUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-ring hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> Escribinos por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-[hsl(var(--border))]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs tracking-wide text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Torta Express · Una marca de Polo Cruz S.R.L.</p>
          <p>Santa Cruz de la Sierra · Bolivia</p>
        </div>
      </div>
    </footer>
  );
}

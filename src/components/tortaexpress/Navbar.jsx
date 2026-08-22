import { Link, useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, ArrowLeft } from "lucide-react";
import Logo from "@/components/tortaexpress/Logo";
import { generalContactUrl } from "@/lib/whatsapp";

const SECTIONS = [
  { id: "tortas", label: "Tortas" },
  { id: "faq", label: "Preguntas" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/tortaexpress" || pathname === "/torta-express" || pathname === "/torta_express";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const go = (id) => {
    if (onHome) {
      scrollToSection(id);
    } else {
      navigate("/tortaexpress");
      setTimeout(() => {
        scrollToSection(id);
      }, 150);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 text-foreground text-xs font-semibold transition-all"
            title="Volver a Polo Cruz"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Polo Cruz</span>
          </Link>

          <Link to="/tortaexpress" className="flex items-center flex-none">
            <Logo className="h-12 w-32" />
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className="text-sm font-medium tracking-wide text-foreground/70 transition hover:text-foreground cursor-pointer"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-none">
          <a
            href={generalContactUrl()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-ring hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Pedir ahora</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

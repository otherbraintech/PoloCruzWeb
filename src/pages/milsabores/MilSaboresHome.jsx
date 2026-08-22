import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import HeroSection from '@/components/milsabores/HeroSection';
import ProductCard from '@/components/milsabores/ProductCard';
import Footer from '@/components/milsabores/Footer';
import NuestraHistoria from '@/components/milsabores/NuestraHistoria';
import { Snowflake, Package, Clock, Eye, Flame, Phone } from 'lucide-react';
import { getCatalogProducts } from '@/data/milSaboresProducts';
import { hasBase44Api } from '@/lib/app-params';
import catalogoFrozenImg from '@/assets/milsabores/catalogo-frozen.jpg';

const BAKE_IMG = 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/10249784-2b84-4b56-84e5-ba1edc39cf62.png';

const CATEGORIES = [
  { id: 'todos', label: 'Todos', emoji: '🥖' },
  { id: 'horneados', label: 'Horneados', emoji: '🏺' },
  { id: 'panaderia', label: 'Panadería y otros', emoji: '🥐' },
];

const STORAGE_STEPS = [
  { icon: Snowflake, title: 'En el congelador', text: 'Conservar en el congelador, NO en la heladera.' },
  { icon: Package, title: 'Solo lo que vas a usar', text: 'Sacar del congelador solo la cantidad que vas a preparar. El resto, conservarlo congelado.' },
  { icon: Clock, title: 'Sin descongelar', text: 'No necesitás descongelar los productos para hornear o freír.' },
  { icon: Eye, title: 'Supervisá la cocción', text: 'Supervisá siempre el producto en el proceso de cocción.' },
  { icon: Flame, title: 'Hasta que doren', text: 'La cocción depende del horno. Hornear hasta que doren.' },
];

export default function MilSaboresHome() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('todos');

  useEffect(() => {
    (async () => {
      try {
        if (hasBase44Api) {
          const list = await base44.entities.Product.list('sort_order', 50);
          setProducts(getCatalogProducts(list));
        } else {
          setProducts(getCatalogProducts([]));
        }
      } catch (e) {
        console.error(e);
        setProducts(getCatalogProducts([]));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = products.filter((p) => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'horneados') {
      return p.category === 'horneados' || p.category === 'tradicionales';
    }
    if (activeCategory === 'panaderia') {
      return p.category === 'panaderia' || p.category === 'salados';
    }
    return true;
  });

  return (
    <div className="bg-[#2B2620] text-white min-h-screen">
      <HeroSection />

      {/* Catálogo congelado */}
      <section id="catalogo" className="py-20 md:py-28 px-5 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-4 font-semibold">
              HORNEADOS TÍPICOS CONGELADOS
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-[#E89557] leading-[0.95]">
              Del freezer a tu horno,
              <br />
              <span className="italic text-white">el sabor de siempre.</span>
            </h2>
            <p className="text-white/80 max-w-md mt-6 leading-relaxed text-base md:text-lg">
              Tenelos siempre en casa. Nuestros horneados típicos congelados están listos para preparar directamente del freezer al horno o air fryer, sin descongelar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#productos"
                className="px-7 py-3.5 rounded-full bg-[#E89557] text-[#2B2620] font-semibold uppercase tracking-wider text-xs md:text-sm hover:bg-white transition-all shadow-md"
              >
                Ver Horneados Congelados
              </a>
              <a
                href="https://wa.me/59172163631?text=¡Hola%20Mil%20Sabores!%20Quiero%20pedir%20horneados%20congelados."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full border border-[#E89557]/60 text-white font-medium uppercase tracking-wider text-xs md:text-sm hover:bg-[#E89557]/20 hover:border-[#E89557] transition-all flex items-center gap-2"
              >
                <Phone size={16} className="text-[#E89557]" /> Pedir por WhatsApp
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#E89557]/30 grain shadow-2xl">
            <img
              src={catalogoFrozenImg}
              alt="Horneados Típicos Congelados Mil Sabores"
              className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Galería / Lista de catálogo */}
      <section id="productos" className="py-20 md:py-28 px-5 md:px-10 max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-2 font-semibold">
              HORNEADOS TÍPICOS CONGELADOS
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-[#E89557] leading-[0.95]">
              Elegí tu antojo favorito
            </h2>
          </div>
          <div className="text-white/70 text-sm md:text-base max-w-md leading-relaxed space-y-1">
            <p>Todos nuestros horneados llegan congelados y listos para preparar en casa.</p>
            <p>Solo seguí las indicaciones de cocción de cada producto y disfrutalos recién horneados.</p>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-[#E89557] text-[#2B2620] shadow-md'
                  : 'border border-[#E89557]/30 text-[#E89557]/80 hover:border-[#E89557] hover:text-[#E89557] bg-[#231E19]'
              }`}
            >
              <span>{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-20 rounded-2xl bg-[#E89557]/10 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-3xl text-white/50">Pronto tendremos más horneados aquí.</p>
          </div>
        ) : (
          <div className="space-y-3.5 sm:space-y-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id || p.slug} product={p} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* Manera de hornear */}
      <section id="horneado" className="py-20 md:py-32 px-5 md:px-10 border-y border-[#E89557]/15">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-4">
              Recomendaciones para hornear
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-[#E89557] leading-[0.95]">
              Práctico, fácil y delicioso
            </h2>
            <p className="text-white/80 mt-6 text-lg">
              Lo típico, ahora más práctico. ♡ Seguí nuestras recomendaciones y disfrutá
              los horneados recién salidos de tu horno.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Columna 1: Pasos de recomendación */}
            <div className="lg:col-span-6 space-y-4">
              {STORAGE_STEPS.map((s, i) => (
                <div key={i} className="rounded-2xl border border-[#E89557]/25 p-5 bg-[#2B2620] hover:border-[#E89557] transition-all flex items-start gap-4 shadow-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E89557]/15 text-[#E89557] mt-0.5">
                    <s.icon size={22} />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase tracking-luxe text-[#E89557] font-semibold block mb-0.5">
                      Paso {i + 1}
                    </span>
                    <p className="text-[#E89557] font-display text-xl leading-tight mb-1">{s.title}</p>
                    <p className="text-white/75 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Columna 2: Infografía / Imagen Manera de hornear */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden ring-1 ring-[#E89557]/30 bg-white grain shadow-2xl">
                <img
                  src={BAKE_IMG}
                  alt="Manera de hornear Mil Sabores"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros / Nuestra Historia */}
      <NuestraHistoria />

      <Footer />
    </div>
  );
}

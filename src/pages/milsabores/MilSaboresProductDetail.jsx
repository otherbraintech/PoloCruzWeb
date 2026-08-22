import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useMilSaboresCart } from '@/context/MilSaboresCartContext';
import { ArrowLeft, Minus, Plus, Flame, Wind, Droplet, Info, Snowflake } from 'lucide-react';
import { getProductImage } from '@/lib/productImages';
import { INITIAL_PRODUCTS } from '@/data/milSaboresProducts';
import { hasBase44Api } from '@/lib/app-params';

export default function MilSaboresProductDetail() {
  const { slug } = useParams();
  const { addItem, setIsOpen } = useMilSaboresCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      try {
        let found = null;
        if (hasBase44Api) {
          const list = await base44.entities.Product.filter({ slug });
          found = list[0] || null;
        }
        if (!found) {
          found = INITIAL_PRODUCTS.find((p) => p.slug === slug) || null;
        }
        setProduct(found);
      } catch (e) {
        console.error(e);
        const found = INITIAL_PRODUCTS.find((p) => p.slug === slug);
        setProduct(found || null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#2B2620]">
        <div className="w-8 h-8 border-4 border-[#E89557]/30 border-t-[#E89557] rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#2B2620] gap-6 px-5">
        <p className="font-display text-5xl text-[#E89557]">No encontramos este horneado.</p>
        <Link to="/milsabores" className="px-6 py-3 rounded-full bg-[#E89557] text-[#2B2620] font-medium uppercase tracking-wider text-sm">
          Volver a Mil Sabores
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity);
    setIsOpen(true);
  };

  const bake = product.baking_instructions || {};

  return (
    <div className="bg-[#2B2620] text-white min-h-screen pt-20 md:pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
        <Link
          to="/milsabores"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-luxe text-white/60 hover:text-[#E89557] transition mb-8"
        >
          <ArrowLeft size={16} /> Volver al catálogo
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Imagen */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-[#E89557]/30 bg-white grain aspect-[4/3]">
              <img
                src={getProductImage(product)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-luxe text-[#2B2620] bg-[#E89557] px-3 py-1 rounded-full font-semibold">
                <Snowflake size={12} /> Congelado · para hornear en casa
              </span>
            </div>
          </div>

          {/* Narrativa */}
          <div className="pb-32 lg:pb-12">
            <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-4">
              {product.emoji} {product.category}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-[#E89557] leading-[0.95]" style={{ letterSpacing: '-0.02em' }}>
              {product.name}
            </h1>
            <p className="mt-4 text-xl text-white/80 font-display italic">
              {product.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-baseline gap-3">
              <span className="font-display text-5xl text-[#E89557]">{product.price}</span>
              <span className="text-sm uppercase tracking-luxe text-white/50">Bs</span>
              {product.package_size && (
                <span className="text-sm text-white/70">· {product.package_size}</span>
              )}
            </div>

            <div className="my-8 h-px bg-[#E89557]/20" />

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">{product.description}</p>

            {/* Manera de hornear */}
            {(bake.oven || bake.airfryer || bake.alternative || bake.note) && (
              <div className="mt-8 rounded-2xl border border-[#E89557]/25 p-6 bg-[#231E19]">
                <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-5 font-semibold">Manera de hornear</p>
                <div className="space-y-4">
                  {bake.oven && <BakeRow icon={Flame} label="Opción" text={bake.oven} />}
                  {bake.alternative && <BakeRow icon={Droplet} label="Preparación" text={bake.alternative} />}
                  {bake.airfryer && <BakeRow icon={Wind} label="Airfryer" text={bake.airfryer} />}
                  {bake.note && <BakeRow icon={Info} label="Tip" text={bake.note} />}
                </div>
              </div>
            )}

            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-luxe text-[#E89557] mb-4 font-semibold">
                  Ingredientes
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {product.ingredients.map((ing) => (
                    <li key={ing} className="flex items-center gap-2 text-white/75 text-sm">
                      <span className="h-1 w-1 rounded-full bg-[#E89557]" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 grid grid-cols-2 gap-6">
              {product.package_size && (
                <div className="border-l-2 border-[#E89557]/40 pl-4">
                  <p className="text-[10px] uppercase tracking-luxe text-[#E89557] font-semibold">Presentación</p>
                  <p className="text-white mt-1 text-sm">{product.package_size}</p>
                </div>
              )}
              {product.serves && (
                <div className="border-l-2 border-[#E89557]/40 pl-4">
                  <p className="text-[10px] uppercase tracking-luxe text-[#E89557] font-semibold">Rinde para</p>
                  <p className="text-white mt-1 text-sm">{product.serves}</p>
                </div>
              )}
            </div>

            {/* Selector de cantidad (desktop) */}
            <div className="hidden lg:flex items-center gap-6 mt-10">
              <div className="flex items-center gap-3 border border-[#E89557]/30 rounded-full px-2 py-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-9 w-9 rounded-full hover:bg-[#E89557]/20 flex items-center justify-center text-white transition cursor-pointer"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-white text-lg font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-9 w-9 rounded-full hover:bg-[#E89557]/20 flex items-center justify-center text-white transition cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 h-12 rounded-full bg-[#E89557] text-[#2B2620] font-semibold uppercase tracking-wider text-sm hover:bg-white transition cursor-pointer"
              >
                Añadir al carrito · {product.price * quantity} Bs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barra fija inferior (mobile) */}
      <div className="fixed bottom-0 inset-x-0 z-40 glass border-t border-[#E89557]/30 p-4 flex items-center gap-3 lg:hidden">
        <div className="flex items-center gap-2 border border-[#E89557]/30 rounded-full px-2 py-1.5">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-7 w-7 rounded-full hover:bg-[#E89557]/20 flex items-center justify-center text-white">
            <Minus size={14} />
          </button>
          <span className="w-6 text-center text-white font-bold">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className="h-7 w-7 rounded-full hover:bg-[#E89557]/20 flex items-center justify-center text-white">
            <Plus size={14} />
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="flex-1 h-12 rounded-full bg-[#E89557] text-[#2B2620] font-semibold uppercase tracking-wider text-sm"
        >
          Añadir · {product.price * quantity} Bs
        </button>
      </div>
    </div>
  );
}

function BakeRow({ icon: Icon, label, text }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#E89557]/15 text-[#E89557]">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-luxe text-[#E89557] mb-0.5 font-semibold">{label}</p>
        <p className="text-white/80 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

import { Image } from '@/components/ui/image';
import { MessageCircle, ExternalLink, Globe } from 'lucide-react';
import { TORTA_EXPRESS, WHATSAPP, LOGOS } from '@/data/products';

function CelebrationCard({ product, large }) {
  const waMessage = encodeURIComponent(
    `Hola Torta Express! Me interesa la torta: ${product.name}. ¿Me pueden dar más información?`
  );
  const waLink = `https://wa.me/${WHATSAPP.tortaExpress}?text=${waMessage}`;

  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-md ${large ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      <div className={`overflow-hidden ${large ? 'aspect-[4/3] lg:aspect-[16/12]' : 'aspect-[4/5]'}`}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fittingType="fill"
            className="w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#E91E8C]/30 via-[#FCE4F0] to-[#9B27B0]/40 flex items-center justify-center">
            <span className="font-serif-display text-3xl text-white/80 italic px-4 text-center">{product.name}</span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A0060]/95 via-[#4A0060]/20 to-transparent" />

      {product.badge && (
        <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#E91E8C] text-white text-[0.65rem] tracking-[0.2em] uppercase font-medium rounded-full animate-pulse-glow">
          {product.badge}
        </div>
      )}

      <div className={`absolute bottom-0 left-0 right-0 p-5 ${large ? 'md:p-8' : ''}`}>
        <h3 className={`font-serif-display text-[#FCE4F0] mb-1 ${large ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
          {product.name}
        </h3>
        <p className="text-[#FCE4F0]/70 text-sm leading-relaxed mb-3 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">
          {product.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a href={TORTA_EXPRESS.website} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#E91E8C] hover:bg-[#c91577] text-white text-xs font-bold rounded-md transition-all shadow-sm">
            <Globe size={13} />
            Pedir en Web
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#F5D000] text-xs font-medium hover:underline transition-all">
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TortaExpressGallery() {
  return (
    <section id="torta-express" className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#FFF0F8] grain-overlay overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif-display text-[6rem] md:text-[12rem] text-[#E91E8C]/[0.04] whitespace-nowrap select-none">
          TORTA EXPRESS
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-5">
              <div className="heritage-line-te w-12" />
              <p className="text-[#E91E8C] text-xs tracking-[0.4em] uppercase font-medium">Marca 02</p>
            </div>
            <div className="flex items-center gap-6 mb-4">
              <img src={LOGOS.tortaExpress} alt="Torta Express" className="w-24 h-20 object-contain" />
              <div>
                <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-[#4A0060] leading-none">
                  Torta Express
                </h2>
                <p className="text-[#E91E8C] text-xs tracking-[0.3em] uppercase mt-1">
                  Tortas Artesanales · El mejor sabor, al mejor precio
                </p>
              </div>
            </div>
            <p className="text-[#4A0060]/70 text-base leading-relaxed max-w-2xl">
              {TORTA_EXPRESS.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['Tamaños XS a XL', 'Delivery disponible', 'Desde 99 Bs'].map((t) => (
                <span key={t} className="border border-[#E91E8C]/30 text-[#4A0060]/70 px-4 py-1.5 rounded-full text-sm bg-white/60">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Direct Web Order Button */}
          <div className="shrink-0">
            <a
              href={TORTA_EXPRESS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#E91E8C] hover:bg-[#c91577] text-white text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Globe size={18} />
              <span>Pedir en Web Oficial</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {TORTA_EXPRESS.products.map((product, i) => (
            <CelebrationCard key={product.id} product={product} large={i === 0} />
          ))}
        </div>
      </div>

      {/* ── Seamless transition to Footer section (#0D3D5C) ── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 md:h-44 bg-gradient-to-b from-transparent via-[#4A0060]/10 to-[#0D3D5C] pointer-events-none z-10" />
    </section>
  );
}
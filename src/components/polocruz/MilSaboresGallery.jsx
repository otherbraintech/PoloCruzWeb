import { Image } from '@/components/ui/image';
import { MessageCircle, ExternalLink, Globe } from 'lucide-react';
import { MIL_SABORES, WHATSAPP, LOGOS, BANNERS } from '@/data/products';

// Updated product list from official catalog image
const CATALOG_PRODUCTS = [
  { id: 'cunape',         name: 'Cuñapé',              ...MIL_SABORES.products.find(p => p.id === 'cunape-bolita')  },
  { id: 'emp-arroz',     name: 'Empanada de Arroz',   ...MIL_SABORES.products.find(p => p.id === 'empanada-arroz') },
  { id: 'tamal',         name: 'Tamal a la Olla',     ...MIL_SABORES.products.find(p => p.id === 'tamal')          },
  { id: 'sonso',         name: 'Sonso Personal',      ...MIL_SABORES.products.find(p => p.id === 'sonso')          },
  { id: 'emp-queso',     name: 'Empanada de Queso',
    description: 'Empanada de masa suave rellena con queso fresco cruceño derretido. Crujiente por fuera, fundente por dentro.',
    image: MIL_SABORES.products.find(p => p.id === 'cunape-rosca')?.image,
    badge: null },
  { id: 'emp-pollo',     name: 'Empanada de Pollo',
    description: 'Rellena con pollo jugoso y especias de la tierra. Una de las más pedidas por nuestros clientes.',
    image: MIL_SABORES.products.find(p => p.id === 'pan-ajo')?.image,
    badge: null },
  { id: 'pan-ajo',       name: 'Pan con Ajo Clásico', ...MIL_SABORES.products.find(p => p.id === 'pan-ajo'), badge: 'Nuevo' },
];

function ProductCard({ product }) {
  const waMessage = encodeURIComponent(
    `Hola Mil Sabores! Me interesa el producto: ${product.name}. ¿Me pueden dar más información?`
  );
  const waLink = `https://wa.me/${WHATSAPP.milSabores}?text=${waMessage}`;

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md bg-[#2C1008] cursor-pointer">
      <div className="aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fittingType="fill"
          className="w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1008]/95 via-[#2C1008]/20 to-transparent" />

      {product.badge && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-[#C87941] text-white text-[0.65rem] tracking-[0.2em] uppercase font-medium rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          {product.badge}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-serif-display text-xl text-[#F5EDE3] mb-1">{product.name}</h3>
        <p className="text-[#F5EDE3]/70 text-sm leading-relaxed mb-3 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">
          {product.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <a href={MIL_SABORES.website} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C87941] hover:bg-[#b06734] text-white text-xs font-semibold rounded-md transition-all shadow-sm">
            <Globe size={13} />
            Pedir en Web
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#C87941] hover:text-[#e5945c] text-xs font-medium transition-all">
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MilSaboresGallery() {
  return (
    <section id="mil-sabores" className="relative bg-[#FBF5EE] grain-overlay overflow-hidden">

      {/* ── Official product banner with seamless transitions ── */}
      <div className="relative w-full overflow-hidden">
        <img
          src={BANNERS.milSabores}
          alt="Mil Sabores — Tradición que se disfruta en casa"
          className="w-full object-cover"
          style={{ maxHeight: '420px', objectPosition: 'center' }}
        />
        {/* Gradient fade from previous section (#EEF6FB) into banner and out to #FBF5EE */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF6FB] via-transparent to-[#FBF5EE]" />
      </div>

      <div className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="heritage-line-ms w-12" />
                <p className="text-[#C87941] text-xs tracking-[0.4em] uppercase font-medium">Marca 01</p>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <img src={LOGOS.milSabores} alt="Mil Sabores" className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="font-serif-display text-4xl md:text-5xl text-[#2C1008] leading-none">
                    Mil Sabores
                  </h2>
                  <p className="text-[#C87941] text-xs tracking-[0.3em] uppercase mt-1">
                    Horneados Típicos · Congelados y Cocidos
                  </p>
                </div>
              </div>
              <p className="text-[#5C2308]/70 text-base leading-relaxed max-w-2xl">
                {MIL_SABORES.description}
              </p>
            </div>

            {/* Direct Web Order Button */}
            <div className="shrink-0">
              <a
                href={MIL_SABORES.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C87941] hover:bg-[#b06734] text-white text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Globe size={18} />
                <span>Pedir en Web Oficial</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['Línea Congelados', 'Línea Cocidos', 'Listo para hornear'].map((t) => (
              <span key={t} className="border border-[#C87941]/40 text-[#5C2308]/70 px-4 py-1.5 rounded-full text-sm bg-white/60">
                {t}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CATALOG_PRODUCTS.map((product, i) => (
              <div key={product.id} className={i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}>
                <div className={i === 0 ? 'h-full' : ''}>
                  {i === 0 ? (
                    // Large featured card
                    <div className="group relative overflow-hidden rounded-xl shadow-md bg-[#2C1008] h-full cursor-pointer">
                      <div className="aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fittingType="fill"
                          className="w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1008]/95 via-[#2C1008]/10 to-transparent" />
                      {product.badge && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#C87941] text-white text-[0.65rem] tracking-[0.2em] uppercase font-medium rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {product.badge}
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h3 className="font-serif-display text-3xl md:text-4xl text-[#F5EDE3] mb-2">{product.name}</h3>
                        <p className="text-[#F5EDE3]/70 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          <a href={MIL_SABORES.website} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C87941] hover:bg-[#b06734] text-white text-xs font-bold rounded-lg transition-all shadow-md">
                            <Globe size={15} />
                            Pedir en Web Oficial
                            <ExternalLink size={14} />
                          </a>
                          <a href={`https://wa.me/${WHATSAPP.milSabores}?text=${encodeURIComponent(`Hola Mil Sabores! Me interesa: ${product.name}`)}`}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[#C87941] text-sm font-medium hover:gap-2.5 transition-all">
                            <MessageCircle size={15} />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ProductCard product={product} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Transition gradient to Torta Express section (#FFF0F8) ── */}
      <div className="h-20 md:h-28 bg-gradient-to-b from-[#FBF5EE] to-[#FFF0F8] pointer-events-none" />
    </section>
  );
}
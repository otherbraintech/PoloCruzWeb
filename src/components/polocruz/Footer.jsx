import { Link } from 'react-router-dom';
import { MapPin, Clock, Instagram, Facebook, Globe, ArrowRight } from 'lucide-react';
import { MIL_SABORES, TORTA_EXPRESS, WHATSAPP, LOGOS } from '@/data/products';

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

function SocialRow({ label, logo, socials, phone, waNumber, routePath }) {
  return (
    <div className="space-y-3">
      <img src={logo} alt={label} className="h-12 object-contain" />
      
      {routePath && (
        <div>
          <Link
            to={routePath}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2AACE2]/20 hover:bg-[#2AACE2] text-[#D6EDF8] hover:text-white text-xs font-semibold rounded-full transition-all duration-300"
          >
            <Globe size={13} />
            <span>Visitar Sitio Web</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      )}

      <div className="flex gap-3">
        {socials.facebook && (
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-[#D6EDF8]/20 hover:border-[#2AACE2] hover:text-[#2AACE2] text-[#D6EDF8]/60 transition-colors rounded-sm"
            aria-label={`${label} en Facebook`}>
            <Facebook size={16} />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-[#D6EDF8]/20 hover:border-[#2AACE2] hover:text-[#2AACE2] text-[#D6EDF8]/60 transition-colors rounded-sm"
            aria-label={`${label} en Instagram`}>
            <Instagram size={16} />
          </a>
        )}
        {socials.tiktok && (
          <a href={socials.tiktok} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-[#D6EDF8]/20 hover:border-[#2AACE2] hover:text-[#2AACE2] text-[#D6EDF8]/60 transition-colors rounded-sm"
            aria-label={`${label} en TikTok`}>
            <TikTokIcon size={16} />
          </a>
        )}
      </div>
      <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
        className="block text-[#2AACE2] text-sm hover:underline">
        WhatsApp: {phone}
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-[#0D3D5C] grain-overlay overflow-hidden pt-12 md:pt-16 pb-16 md:pb-12">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={LOGOS.poloCruz} alt="" className="w-[60vw] max-w-2xl opacity-[0.05] select-none object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="heritage-line w-full mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <img src={LOGOS.poloCruz} alt="Polo Cruz SRL" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-body font-bold text-xl text-white tracking-wide uppercase">POLO CRUZ SRL</h3>
                <p className="text-[#2AACE2] text-xs tracking-[0.3em] uppercase">Alimentos Congelados</p>
              </div>
            </div>
            <p className="text-[#D6EDF8]/60 text-sm leading-relaxed max-w-md mb-6">
              Maestros del sabor cruceño. Dos marcas, una pasión por el horneado
              artesanal y la repostería de celebración. Santa Cruz de la Sierra, Bolivia.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-[#D6EDF8]/70">
                <MapPin size={18} className="text-[#2AACE2] shrink-0 mt-0.5" />
                <span>Zona Norte, Radial 26 y 5to. Anillo<br />Santa Cruz de la Sierra, Bolivia</span>
              </div>
              <div className="flex items-start gap-3 text-[#D6EDF8]/70">
                <Clock size={18} className="text-[#2AACE2] shrink-0 mt-0.5" />
                <span>Pedidos y atención todos los días</span>
              </div>
            </div>
          </div>

          {/* Mil Sabores */}
          <SocialRow
            label="Mil Sabores"
            logo={LOGOS.milSabores}
            socials={MIL_SABORES.social}
            phone="+591 72163631"
            waNumber={WHATSAPP.milSabores}
            routePath="/milsabores"
          />

          {/* Torta Express */}
          <SocialRow
            label="Torta Express"
            logo={LOGOS.tortaExpress}
            socials={TORTA_EXPRESS.social}
            phone="+591 62013533"
            waNumber={WHATSAPP.tortaExpress}
            routePath="/tortaexpress"
          />
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D6EDF8]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#D6EDF8]/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Polo Cruz S.R.L. — Todos los derechos reservados
          </p>
          <p className="text-[#D6EDF8]/40 text-xs tracking-wide">Santa Cruz de la Sierra · Bolivia</p>
        </div>
      </div>
    </footer>
  );
}
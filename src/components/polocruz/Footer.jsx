import { Link } from 'react-router-dom';
import { MapPin, Clock, Instagram, Facebook, Globe, ArrowRight } from 'lucide-react';
import { MIL_SABORES, TORTA_EXPRESS, WHATSAPP, LOGOS } from '@/data/products';

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

function SocialRow({ label, logo, socials, phone, waNumber, routePath }) {
  return (
    <div className="space-y-2.5">
      <img src={logo} alt={label} className="h-11 object-contain" />
      
      {routePath && (
        <div>
          <Link
            to={routePath}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2AACE2]/20 hover:bg-[#2AACE2] text-[#D6EDF8] hover:text-white text-[11px] font-semibold rounded-full transition-all duration-300"
          >
            <Globe size={12} />
            <span>Visitar Sitio Web</span>
            <ArrowRight size={11} />
          </Link>
        </div>
      )}

      <div className="flex gap-2.5">
        {socials.facebook && (
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-[#D6EDF8]/20 hover:border-[#2AACE2] hover:text-[#2AACE2] text-[#D6EDF8]/60 transition-colors rounded-sm"
            aria-label={`${label} en Facebook`}>
            <Facebook size={15} />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-[#D6EDF8]/20 hover:border-[#2AACE2] hover:text-[#2AACE2] text-[#D6EDF8]/60 transition-colors rounded-sm"
            aria-label={`${label} en Instagram`}>
            <Instagram size={15} />
          </a>
        )}
        {socials.tiktok && (
          <a href={socials.tiktok} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-[#D6EDF8]/20 hover:border-[#2AACE2] hover:text-[#2AACE2] text-[#D6EDF8]/60 transition-colors rounded-sm"
            aria-label={`${label} en TikTok`}>
            <TikTokIcon size={15} />
          </a>
        )}
      </div>
      <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
        className="block text-[#2AACE2] text-xs hover:underline font-medium">
        WhatsApp: {phone}
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-[#0D3D5C] grain-overlay overflow-hidden pt-6 pb-8">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="heritage-line w-full mb-6" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-2.5">
              <img src={LOGOS.poloCruz} alt="Polo Cruz SRL" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-body font-bold text-lg text-white tracking-wide uppercase">POLO CRUZ SRL</h3>
                <p className="text-[#2AACE2] text-[10px] tracking-[0.3em] uppercase">Alimentos Congelados</p>
              </div>
            </div>
            <p className="text-[#D6EDF8]/70 text-xs sm:text-sm leading-relaxed max-w-md mb-3">
              Maestros del sabor cruceño. Dos marcas, una pasión por el horneado
              artesanal y la repostería de celebración. Santa Cruz de la Sierra, Bolivia.
            </p>
            <div className="space-y-1.5 text-xs text-[#D6EDF8]/80">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#2AACE2] shrink-0 mt-0.5" />
                <span>Zona Norte, Radial 26 y 5to. Anillo · Santa Cruz de la Sierra, Bolivia</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#2AACE2] shrink-0 mt-0.5" />
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
        <div className="border-t border-[#D6EDF8]/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[#D6EDF8]/50 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Polo Cruz S.R.L. — Todos los derechos reservados
          </p>
          <p className="text-[#D6EDF8]/50 text-[11px] tracking-wide">Santa Cruz de la Sierra · Bolivia</p>
        </div>
      </div>
    </footer>
  );
}
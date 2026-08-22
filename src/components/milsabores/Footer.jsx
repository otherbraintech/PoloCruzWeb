import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/milsabores/logo.png';

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-[#2B2620] border-t border-[#E89557]/20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Columna Izquierda: Identidad de Marca */}
          <div className="lg:col-span-6">
            <img
              src={logoImg}
              alt="Mil Sabores"
              className="h-20 md:h-24 w-auto rounded-full ring-2 ring-[#E89557]/30 mb-6"
            />
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] text-[#E89557]">
              Mil Sabores,
              <br />
              <span className="italic text-white">un solo hogar.</span>
            </h2>
            <p className="mt-4 text-white/75 max-w-md text-base leading-relaxed">
              Lo típico, ahora más práctico. ♡ Horneamos lo tradicional cada madrugada y lo
              congelamos al punto justo, para que lo disfrutes recién horneado en casa.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#2AACE2] hover:underline"
              >
                ← Visitar Portal Corporativo Polo Cruz
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Información de contacto */}
          <div className="lg:col-span-6 lg:pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              {/* Visítanos */}
              <div>
                <p className="text-[10px] uppercase tracking-luxe text-[#E89557] mb-2 font-semibold">Visítanos</p>
                <p className="text-white/80 leading-relaxed text-xs">
                  <a
                    href="https://www.google.com/maps/place/Torta+Express+Sucursal+Norte/@-17.7396962,-63.1904466,18.25z/data=!4m6!3m5!1s0x93f1e7d0d4b1a06d:0x7ed5191274a4f92b!8m2!3d-17.7392199!4d-63.1913144!16s%2Fg%2F11x12jqt4_?entry=tts&g_ep=EgoyMDI2MDgwNS4xIPu8ASoASAFQAw%3D%3D&skid=d1105f93-75ea-419f-a8c1-c6a74c379c2d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-[#E89557] transition-colors font-medium block"
                  >
                    Sucursal Norte · Radial 26<br />(5to anillo) 📍
                  </a>
                </p>
              </div>

              {/* Pide ya */}
              <div>
                <p className="text-[10px] uppercase tracking-luxe text-[#E89557] mb-2 font-semibold">Pide ya</p>
                <p className="text-white/80 leading-relaxed">
                  <a
                    href="https://wa.me/59172163631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-[#E89557] transition-colors block font-semibold text-base text-[#E89557]"
                  >
                    +591 72163631
                  </a>
                </p>
              </div>

              {/* Síguenos */}
              <div>
                <p className="text-[10px] uppercase tracking-luxe text-[#E89557] mb-2 font-semibold">Síguenos</p>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.facebook.com/milsaboreshorneadostipicos"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Mil Sabores"
                    className="h-9 w-9 rounded-full border border-[#E89557]/30 flex items-center justify-center text-white/80 hover:text-[#E89557] hover:border-[#E89557] hover:bg-[#E89557]/10 transition-all"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/milsaboreshorneados/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Mil Sabores"
                    className="h-9 w-9 rounded-full border border-[#E89557]/30 flex items-center justify-center text-white/80 hover:text-[#E89557] hover:border-[#E89557] hover:bg-[#E89557]/10 transition-all"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.tiktok.com/@milsaboreshorneados"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok Mil Sabores"
                    className="h-9 w-9 rounded-full border border-[#E89557]/30 flex items-center justify-center text-white/80 hover:text-[#E89557] hover:border-[#E89557] hover:bg-[#E89557]/10 transition-all"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#E89557]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-luxe text-white/50">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Mil Sabores · Una marca de Polo Cruz S.R.L.
          </p>
          <div className="flex gap-6">
            <a href="/milsabores#nosotros" className="hover:text-[#E89557] transition-colors">Nosotros</a>
            <a href="/milsabores#productos" className="hover:text-[#E89557] transition-colors">Horneados</a>
            <a href="https://wa.me/59172163631" target="_blank" rel="noopener noreferrer" className="hover:text-[#E89557] transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.46 6.22 6.34 6.34 0 1 0 11.8-3.4V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    </svg>
  );
}

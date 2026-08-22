import React, { useRef, useEffect, useState } from 'react';
import heroBg from '@/assets/milsabores/hero-bg.jpg';
import logoImg from '@/assets/milsabores/logo.png';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [flare, setFlare] = useState({ x: 50, y: 50, visible: false });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setFlare({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        visible: true,
      });
    };
    const onLeave = () => setFlare((f) => ({ ...f, visible: false }));
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4 grain"
    >
      {/* Background photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Mil Sabores Horneados Típicos"
          className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#2B2620]" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
      </div>

      {/* Subtle interactive flare */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500 z-10"
        style={{
          left: `${flare.x}%`,
          top: `${flare.y}%`,
          opacity: flare.visible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(232,149,87,0.3) 0%, rgba(232,149,87,0.05) 50%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Centerpiece Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Large Circular Logo Badge */}
        <div className="mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <img
            src={logoImg}
            alt="Mil Sabores Logo"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-contain shadow-2xl drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)] border-2 border-[#E89557]/40 p-1 bg-[#2B2620]/30 backdrop-blur-xs hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Brand Title: Mil Sabores */}
        <div className="relative mb-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-[#E89557] leading-tight tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] select-none">
            Mil Sabores
          </h1>

          {/* Underline Swoosh Curve */}
          <div className="w-64 sm:w-80 md:w-96 mx-auto -mt-2 sm:-mt-4 opacity-90">
            <svg viewBox="0 0 350 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path
                d="M5 12C90 2 260 2 345 12"
                stroke="url(#swoosh-gradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="swoosh-gradient" x1="5" y1="12" x2="345" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E89557" stopOpacity="0.2" />
                  <stop offset="0.5" stopColor="#E89557" />
                  <stop offset="1" stopColor="#E89557" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Subtitle Line 1: 40 años horneando tradición */}
        <p
          className="font-calligraphy text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          40 años horneando tradición
        </p>

        {/* Subtitle Line 2: El sabor cruceño que acompaña generaciones */}
        <p
          className="text-white/90 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          El sabor cruceño que acompaña generaciones
        </p>

        {/* Action Buttons Container */}
        <div
          className="w-full flex flex-col items-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {/* Row 1: Three Horizontal Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-3xl">
            {/* Button 1: VER HORNEADOS CONGELADOS */}
            <a
              href="#catalogo"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#1e1914]/70 hover:bg-[#2B2620] backdrop-blur-md border border-[#E89557]/70 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg group hover:border-[#E89557] hover:shadow-[0_0_20px_rgba(232,149,87,0.3)] hover:-translate-y-0.5"
            >
              <SnowflakeIcon className="w-5 h-5 text-[#E89557] group-hover:scale-110 transition-transform" />
              <span>Ver Horneados Congelados</span>
            </a>

            {/* Button 2: VER PANADERÍA */}
            <a
              href="#productos"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#1e1914]/70 hover:bg-[#2B2620] backdrop-blur-md border border-[#E89557]/70 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg group hover:border-[#E89557] hover:shadow-[0_0_20px_rgba(232,149,87,0.3)] hover:-translate-y-0.5"
            >
              <FrenchBreadIcon className="w-5 h-5 text-[#E89557] group-hover:scale-110 transition-transform" />
              <span>Ver Panadería</span>
            </a>

            {/* Button 3: OTROS PRODUCTOS */}
            <a
              href="#productos"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#1e1914]/70 hover:bg-[#2B2620] backdrop-blur-md border border-[#E89557]/70 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg group hover:border-[#E89557] hover:shadow-[0_0_20px_rgba(232,149,87,0.3)] hover:-translate-y-0.5"
            >
              <BasketIcon className="w-5 h-5 text-[#E89557] group-hover:scale-110 transition-transform" />
              <span>Otros Productos</span>
            </a>
          </div>

          {/* Row 2: WhatsApp Button */}
          <a
            href="https://wa.me/59172163631?text=¡Hola%20Mil%20Sabores!%20Quiero%20pedir%20horneados."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1e1914]/80 hover:bg-[#2B2620] backdrop-blur-md border border-[#E89557]/70 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 shadow-xl group hover:border-[#E89557] hover:shadow-[0_0_22px_rgba(232,149,87,0.35)] hover:-translate-y-0.5 mt-1"
          >
            <WhatsAppOfficialIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FrenchBreadIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.5 7.5C20.8 9.8 20.8 13.5 18.5 16.5C15.5 19.5 9.8 20.5 5.5 18.5C3.2 17 2.5 14.5 4 12C6.2 8.2 11.2 4.5 15.5 5.5C17.5 6 18 6.8 18.5 7.5Z" />
      <path d="M8.5 10L11.5 13" />
      <path d="M11.5 8L14.5 11" />
      <path d="M14.5 6L17.5 9" />
    </svg>
  );
}

function SnowflakeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M19 17l-4-4 4-4M5 7l4 4-4 4M17 5l-4 4-4-4M7 19l4-4 4 4" />
    </svg>
  );
}

function BasketIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h16l-1.5 9.5a2 2 0 0 1-2 1.5h-9a2 2 0 0 1-2-1.5L4 10Z" />
      <path d="M8 10V6a4 4 0 0 1 8 0v4" />
      <path d="M9 14v3" />
      <path d="M15 14v3" />
    </svg>
  );
}

function WhatsAppOfficialIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6.5C10.753 6.5 6.5 10.753 6.5 16c0 2.09.674 4.02 1.821 5.59L6.5 25.5l4.062-1.782A9.458 9.458 0 0016 25.5c5.247 0 9.5-4.253 9.5-9.5S21.247 6.5 16 6.5zm-3.536 4.964c.22 0 .44.004.64.015.228.012.483.088.66.52.22.54.75 1.83.815 1.966.066.136.11.295.022.472-.088.176-.132.286-.264.44-.132.154-.278.344-.397.463-.132.132-.27.276-.117.54.154.264.685 1.13 1.468 1.828.99.882 1.826 1.166 2.09 1.298.264.132.418.11.572-.066.154-.176.66-.77.836-1.034.176-.264.352-.22.594-.132.242.088 1.54.726 1.804.858.264.132.44.198.506.308.066.11.066.638-.176 1.32-.242.682-1.42 1.34-1.96 1.385-.506.044-1.155-.03-3.696-1.034-3.058-1.21-5.016-4.334-5.17-4.532-.154-.198-1.232-1.639-1.232-3.124 0-1.485.77-2.222 1.056-2.53.286-.308.616-.385.836-.385z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

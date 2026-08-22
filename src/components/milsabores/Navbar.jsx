import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMilSaboresCart } from '@/context/MilSaboresCartContext';
import logoImg from '@/assets/milsabores/logo.png';
import { ArrowLeft } from 'lucide-react';

export default function Navbar() {
  const { count, setIsOpen } = useMilSaboresCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'CONGELADOS', href: '/milsabores#catalogo' },
    { label: 'PANADERÍA', href: '/milsabores#productos' },
    { label: 'NUESTRA HISTORIA', href: '/milsabores#nosotros' },
    { label: 'DÓNDE ENCONTRARNOS', href: '/milsabores#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-[#E89557]/20 py-1' : 'bg-transparent py-2'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 hover:bg-[#E89557]/20 hover:border-[#E89557] text-white/80 hover:text-white text-xs font-medium transition-all"
            title="Volver a Polo Cruz"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Polo Cruz</span>
          </Link>

          <Link to="/milsabores" className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Mil Sabores"
              className="h-10 md:h-12 w-auto rounded-full ring-1 ring-[#E89557]/40 group-hover:ring-[#E89557] transition shadow-md"
            />
            <span className="font-display text-xl md:text-2xl text-[#E89557] tracking-wide hidden md:block">
              Mil Sabores
            </span>
          </Link>
        </div>

        {/* Right side navigation links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs lg:text-sm uppercase tracking-wider font-semibold transition-all relative group ${
                index === 0 ? 'text-[#E89557]' : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#E89557] transition-all duration-300 ${
                  index === 0 ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}

          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#E89557] text-[#2B2620] font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg cursor-pointer"
          >
            <ShoppingBagIcon />
            <span className="hidden lg:inline">Carrito</span>
            {count > 0 && (
              <span className="min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-[#2B2620] text-[#FFFFFF] text-[11px] font-bold ring-1 ring-[#E89557]">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu & Cart buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center h-10 w-10 rounded-full bg-[#E89557] text-[#2B2620]"
          >
            <ShoppingBagIcon />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-[#2B2620] text-white text-[10px] font-bold">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="h-10 w-10 flex items-center justify-center text-white"
            aria-label="Menú"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden glass border-t border-[#E89557]/20 px-5 py-6 space-y-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-semibold text-white/90 hover:text-[#E89557]"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-sm uppercase tracking-wider font-semibold text-[#2AACE2] pt-2 border-t border-white/10"
          >
            ← Volver a Polo Cruz
          </Link>
        </div>
      )}
    </header>
  );
}

function ShoppingBagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

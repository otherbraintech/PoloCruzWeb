import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LOGOS } from '@/data/products';

const NAV_LINKS = [
  { label: 'Historia', href: '#historia', path: '/historia', isRoute: false },
  { label: 'Mil Sabores', path: '/milsabores', isRoute: true },
  { label: 'Torta Express', path: '/tortaexpress', isRoute: true },
  { label: 'Contacto', href: '#contacto', path: '/contacto', isRoute: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    setMenuOpen(false);

    if (link.isRoute) {
      // Direct navigation to brand pages
      return;
    }

    e.preventDefault();
    if (location.pathname !== '/' && location.pathname !== '/historia' && location.pathname !== '/contacto') {
      navigate(link.path || '/');
      setTimeout(() => {
        if (link.href === '#contacto' || link.path === '/contacto') {
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        } else if (link.href && link.href !== '#') {
          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      if (link.path) {
        window.history.pushState(null, '', link.path);
      }
      if (link.href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (link.href === '#contacto' || link.path === '/contacto') {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      } else {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={(e) => handleNavClick(e, { href: '#', path: '/' })} className="flex items-center gap-3">
          <img
            src={LOGOS.poloCruz}
            alt="Polo Cruz SRL"
            className={`object-contain transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
          />
          <div className={`font-body font-bold transition-colors text-sm tracking-wide uppercase ${
            scrolled ? 'text-[#0D3D5C]' : 'text-white'
          }`}>
            <span>POLO CRUZ</span>
            <span className={`block text-[0.6rem] tracking-[0.3em] font-normal mt-0.5 ${
              scrolled ? 'text-[#1B6CA8]' : 'text-[#D6EDF8]/80'
            }`}>SRL · Alimentos Congelados</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            
            if (link.isRoute) {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                    scrolled
                      ? 'text-[#0D3D5C] hover:text-[#2AACE2]'
                      : 'text-white hover:text-[#2AACE2]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                  isActive
                    ? 'text-[#2AACE2] font-semibold'
                    : scrolled
                      ? 'text-[#0D3D5C] hover:text-[#2AACE2]'
                      : 'text-white hover:text-[#2AACE2]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2AACE2] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          {menuOpen
            ? <X className={scrolled ? 'text-[#0D3D5C]' : 'text-white'} size={24} />
            : <Menu className={scrolled ? 'text-[#0D3D5C]' : 'text-white'} size={24} />
          }
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#D6EDF8] mt-2 shadow-xl">
          <div className="px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-[#0D3D5C] hover:text-[#2AACE2] transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-base font-medium text-[#0D3D5C] hover:text-[#2AACE2] transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
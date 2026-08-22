import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/polocruz/Navbar';
import Hero from '@/components/polocruz/Hero';
import BrandStory from '@/components/polocruz/BrandStory';
import Footer from '@/components/polocruz/Footer';
import CrumbTrail from '@/components/polocruz/CrumbTrail';

const SECTIONS = [
  { path: '/', id: 'inicio', aliases: [] },
  { path: '/historia', id: 'historia', aliases: [] },
  { path: '/contacto', id: 'contacto', aliases: [] },
];

export default function Home() {
  const location = useLocation();
  const isAutoScrolling = useRef(false);

  // 1. Smooth scroll to target section when landing directly on a section route
  useEffect(() => {
    const path = location.pathname;
    const target = SECTIONS.find((s) => s.path === path || s.aliases.includes(path));

    if (target && target.id !== 'inicio') {
      isAutoScrolling.current = true;
      const timer = setTimeout(() => {
        if (target.id === 'contacto') {
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        } else {
          const el = document.getElementById(target.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }

        const releaseTimer = setTimeout(() => {
          isAutoScrolling.current = false;
        }, 800);
        return () => clearTimeout(releaseTimer);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // 2. ScrollSpy: Dynamically update browser URL as user scrolls through sections
  useEffect(() => {
    const handleScroll = () => {
      if (isAutoScrolling.current) return;

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      let activeSection;

      if (isBottom) {
        activeSection = SECTIONS[SECTIONS.length - 1]; // Contacto / Footer
      } else {
        const viewportMiddle = window.scrollY + window.innerHeight * 0.35;
        activeSection = SECTIONS[0]; // Default to '/' (inicio)

        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const section = SECTIONS[i];
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop;
            if (viewportMiddle >= top - 100) {
              activeSection = section;
              break;
            }
          }
        }
      }

      const currentPath = window.location.pathname;
      if (
        activeSection &&
        currentPath !== activeSection.path &&
        !activeSection.aliases.includes(currentPath)
      ) {
        window.history.replaceState(null, '', activeSection.path);
        window.dispatchEvent(new Event('popstate'));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#F9F7F2] overflow-x-hidden">
      <CrumbTrail />
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
}
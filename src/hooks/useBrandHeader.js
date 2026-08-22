import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BRAND_CONFIGS = {
  milsabores: {
    title: 'Mil Sabores · Horneados Típicos',
    favicon: '/favicons/favicon-milsabores.png',
    themeColor: '#2B2620',
    bodyClass: 'theme-milsabores',
  },
  tortaexpress: {
    title: 'Torta Express · Tortas Artesanales',
    favicon: '/favicons/favicon-tortaexpress.png',
    themeColor: '#9B30FF',
    bodyClass: 'theme-tortaexpress',
  },
  polocruz: {
    title: 'Polo Cruz S.R.L. — Maestros del Sabor Cruceño',
    favicon: '/favicons/favicon-polocruz.png',
    themeColor: '#0D3D5C',
    bodyClass: 'theme-polocruz',
  },
};

export function useBrandHeader() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    let config = BRAND_CONFIGS.polocruz;

    if (
      path.startsWith('/milsabores') ||
      path.startsWith('/mil-sabores') ||
      path.startsWith('/mil_sabores')
    ) {
      config = BRAND_CONFIGS.milsabores;
    } else if (
      path.startsWith('/tortaexpress') ||
      path.startsWith('/torta-express') ||
      path.startsWith('/torta_express')
    ) {
      config = BRAND_CONFIGS.tortaexpress;
    }

    // Update document title
    document.title = config.title;

    // Update favicon
    const faviconLink = document.getElementById('app-favicon') || document.querySelector("link[rel*='icon']");
    if (faviconLink) {
      faviconLink.href = config.favicon;
    }

    // Update theme-color
    const themeMeta = document.getElementById('app-theme-color') || document.querySelector("meta[name='theme-color']");
    if (themeMeta) {
      themeMeta.content = config.themeColor;
    }

    // Update document body theme class
    document.body.classList.remove('theme-polocruz', 'theme-milsabores', 'theme-tortaexpress');
    document.body.classList.add(config.bodyClass);

  }, [location.pathname]);
}

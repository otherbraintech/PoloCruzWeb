// Polo Cruz S.R.L. — Product data
// Mil Sabores: Horneados típicos congelados y cocidos
// Torta Express: Tortas artesanales

export const WHATSAPP = {
  milSabores: '59172163631',
  tortaExpress: '59162013533',
};

export const HERITAGE_IMAGE = 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/68f822f2e_generated_e79e3939.png';

// Official product banners
export const BANNERS = {
  milSabores: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/a87ad4efd_image.png',
};

import poloCruzLogo from '@/recursos/image-removebg-preview.png';
import milSaboresLogo from '@/recursos/image-removebg-preview (2).png';
import tortaExpressLogo from '@/recursos/image-removebg-preview (1).png';

// Real brand logos (local transparent assets)
export const LOGOS = {
  poloCruz: poloCruzLogo,
  milSabores: milSaboresLogo,
  tortaExpress: tortaExpressLogo,
};

// Brand color palettes extracted from logos
export const BRAND_COLORS = {
  poloCruz: {
    dark:  '#0D3D5C',
    mid:   '#1B6CA8',
    light: '#2AACE2',
    pale:  '#D6EDF8',
    bg:    '#EEF6FB',
  },
  milSabores: {
    dark:   '#2C1008',
    mid:    '#5C2308',
    copper: '#C87941',
    cream:  '#F5EDE3',
    bg:     '#FBF5EE',
  },
  tortaExpress: {
    pink:   '#E91E8C',
    yellow: '#F5D000',
    purple: '#9B27B0',
    light:  '#FCE4F0',
    bg:     '#FFF0F8',
  },
};

export const WEBSITES = {
  milSabores: 'https://polocruz-mil-sabores-web.ddt6vc.easypanel.host/',
  tortaExpress: 'https://polocruz-torta-express.ddt6vc.easypanel.host/',
};

export const MIL_SABORES = {
  name: 'Mil Sabores',
  tagline: 'Horneados Típicos',
  subtitle: 'Línea Congelados y Cocidos',
  description: '37 años de trayectoria elaborando los mejores horneados típicos de Santa Cruz. Recetas tradicionales que llegan a miles de hogares cruceños, listas para hornear en casa.',
  whatsapp: WHATSAPP.milSabores,
  website: WEBSITES.milSabores,
  social: {
    facebook: 'https://www.facebook.com/milsaboreshorneadostipicos',
    instagram: 'https://www.instagram.com/milsaboreshorneados/',
    tiktok: 'https://www.tiktok.com/@milsaboreshorneados',
  },
  products: [
    {
      id: 'cunape-bolita',
      name: 'Cuñapé Bolita',
      description: 'El clásico pan de queso cruceño en su versión más querida. Esponjoso por dentro, con esa corteza dorada inconfundible. Listo para hornear.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/2d53897a0_generated_4ffc8cc2.png',
      badge: 'Baked Daily',
    },
    {
      id: 'cunape-rosca',
      name: 'Cuñapé Rosca',
      description: 'El cuñapé en su forma tradicional de rosca, con el equilibrio perfecto entre queso y almidón de yuca. Crujiente, dorado, irresistible.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/9054a8379_generated_image.png',
      badge: null,
    },
    {
      id: 'sonso',
      name: 'Sonso Personal',
      description: 'El mejor sonso del mundo, dicen nuestros clientes. Yuca y queso en proporción exacta, dorado al horno. Individual, práctico, delicioso.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/580064a1f_generated_80d884ee.png',
      badge: 'Baked Daily',
    },
    {
      id: 'tamal',
      name: 'Tamal a la Olla',
      description: 'El tamal cruceño en su versión más tierna. Cocido a la olla con maíz molido y especias, envuelto en hoja de plátano. Sabor de hogar.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/4005a34a1_generated_8d91cc7b.png',
      badge: null,
    },
    {
      id: 'empanada-arroz',
      name: 'Empanada de Arroz',
      description: 'La empanada cruceña con masa de arroz, rellena con el sabor auténtico del oriente boliviano. Dorada, crujiente, reconfortante.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/a7a0290a3_generated_2dfa8b62.png',
      badge: null,
    },
    {
      id: 'pan-ajo',
      name: 'Pan de Ajo',
      description: 'Pan artesanal con ajo fresco y hierbas, dorado al horno. El acompañamiento perfecto para cualquier mesa cruceña.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/e8216bdc1_generated_372e62f3.png',
      badge: 'Baked Daily',
    },
  ],
};

export const TORTA_EXPRESS = {
  name: 'Torta Express',
  tagline: 'Tortas Artesanales',
  subtitle: 'El mejor sabor, al mejor precio',
  description: 'Tortas para cada celebración. Desde XS hasta XL, con sabores que enamoran. Elaboradas con pasión y los mejores ingredientes para tus momentos especiales.',
  whatsapp: WHATSAPP.tortaExpress,
  website: WEBSITES.tortaExpress,
  social: {
    facebook: 'https://www.facebook.com/TortaExpressSCZ',
    instagram: 'https://www.instagram.com/tortaexpress_scz/',
    tiktok: 'https://www.tiktok.com/@tortaexpress',
  },
  products: [
    {
      id: 'vainilla',
      name: 'Torta de Vainilla',
      description: 'Esponjosa masa de vainilla con doble relleno de dulce de leche. Suave, cremosa, la combinación que nunca falla.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/c212ff3d0_generated_image.png',
      badge: 'Favorita',
    },
    {
      id: 'moka',
      name: 'Torta de Moka',
      description: 'Cremas de café y cacao en capas perfectas. Para los amantes del café que buscan una torta con carácter.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/d3e74ad64_generated_image.png',
      badge: null,
    },
    {
      id: 'tres-leches',
      name: 'Tres Leches',
      description: 'Bizcocho humedecido en nuestra salsa tres leches, relleno de dulce de leche. El postre que define la tradición.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/c28fce952_generated_image.png',
      badge: 'Baked Daily',
    },
    {
      id: 'oreo',
      name: 'Torta de Oreo',
      description: 'Galletas Oreo y crema blanca en cada capa. El crujido y la suavidad en una sola torta. Irresistible para grandes y chicos.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/c52e159ec_generated_image.png',
      badge: null,
    },
    {
      id: 'red-velvet',
      name: 'Red Velvet',
      description: 'Masa aterciopelada roja con frosting de queso crema. Elegante, intensa, perfecta para celebraciones memorables.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/73feca5b6_generated_image.png',
      badge: null,
    },
    {
      id: 'durazno',
      name: 'Torta de Durazno',
      description: 'Cremas suaves con duraznos frescos en cada rebanada. Dulzura frutal para los días especiales.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/21a59357d_generated_image.png',
      badge: null,
    },
    {
      id: 'chocolate',
      name: 'Torta de Chocolate',
      description: 'Chocolate intenso en cada capa, con ganache cremoso. Para los que no se conforman con poco chocolate.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/274e0dea8_generated_image.png',
      badge: null,
    },
    {
      id: 'souffle-chantilly',
      name: 'Soufflé de Chantilly',
      description: 'Ligero, aireado, cubierto de chantilly fresco. La torta que se derrite en la boca con cada bocado.',
      image: 'https://media.base44.com/images/public/6a67c5580bd3d709b61670c7/60ff80665_generated_image.png',
      badge: null,
    },
  ],
};
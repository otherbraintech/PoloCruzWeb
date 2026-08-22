// Catálogo oficial Torta Express.
// Precios en Bs tomados del catálogo oficial (tramos estándar y especial).

export const SIZES = [
  {
    key: "ce",
    name: "Cuchareable Express (CE)",
    persons: "Tamaño CE",
    emoji: "🥄",
  },
  {
    key: "mt",
    name: "Mini Torta (MT)",
    persons: "Mini Torta",
    emoji: "🧁",
  },
  {
    key: "xs",
    name: "XS",
    persons: "6–8 porciones",
    emoji: "🍰",
  },
  {
    key: "s",
    name: "S",
    persons: "12–15 porciones",
    emoji: "🎂",
  },
  {
    key: "m",
    name: "M",
    persons: "25 porciones",
    emoji: "🎉",
  },
  {
    key: "l",
    name: "L",
    persons: "30 porciones",
    emoji: "🎊",
  },
  {
    key: "xl",
    name: "XL",
    persons: "40 porciones",
    emoji: "🍾",
  },
];

export const EMOTION_GROUPS = [
  {
    id: "chocolate",
    label: "Antojo de chocolate",
    emoji: "🍫",
    ids: ["chocolate", "oreo", "moka"],
  },
  {
    id: "fresco",
    label: "Algo fresco",
    emoji: "🍃",
    ids: ["durazno", "frutilla"],
  },
  {
    id: "clasico",
    label: "Un clásico",
    emoji: "🥛",
    ids: ["tres-leches", "merengue", "vainilla"],
  },
  {
    id: "sorprender",
    label: "Quiero sorprender",
    emoji: "❤️",
    ids: ["red-velvet", "chantilly"],
  },
];

// Fondos degradados para las tarjetas cuando todavía no hay foto.
export const GRADIENTS = {
  chocolate: "from-[#A78BD6] to-[#7C4DCC]",
  fresco: "from-[#F3DCEC] to-[#E7B3D6]",
  clasico: "from-[#F1EAF7] to-[#D9C7EE]",
  sorprender: "from-[#D9A7C8] to-[#B57BB0]",
};

// Precios por tramo de torta (Bs) — catálogo oficial Torta Express.
const PRICES = {
  standard: {
    ce: 25,
    mt: 59,
    xs: 89,
    s: 119,
    m: 149,
    l: 179,
    xl: 209,
  },
  special: {
    ce: 25,
    mt: 79,
    xs: 109,
    s: 139,
    m: 169,
    l: 199,
    xl: 229,
  },
};

export const TORTAS = [
  {
    id: "oreo",
    emoji: "🍪",
    name: "Oreo",
    tagline: "La favorita de grandes y chicos.",
    story:
      "Masa de chocolate, rellena con crema y galletas Oreo.",
    tier: "standard",
    category: "chocolate",
    favorite: true,
    image: "/images/tortas/oreo.webp",
    flavor: ["Dulce", "Cremosa", "Intensa"],
  },
  {
    id: "chocolate",
    emoji: "🍫",
    name: "Chocolate",
    tagline: "Para los verdaderos amantes del chocolate.",
    story:
      "Masa de chocolate, rellena con dulce de leche. Bañada con ganash de chocolate.",
    tier: "special",
    category: "chocolate",
    favorite: true,
    image: "/images/tortas/chocolate.webp",
    flavor: ["Intensa", "Cacao", "Sedosa"],
  },
  {
    id: "chantilly",
    emoji: "🤍",
    name: "Soufle de Chantilly",
    tagline: "Delicada, cremosa e inolvidable.",
    story:
      "Masa de vainilla, rellena con dulce de leche y toffy, decorada con chantilly, toffy y almendras picadas.",
    tier: "standard",
    category: "sorprender",
    favorite: true,
    image: "/images/tortas/chantilly.webp",
    flavor: ["Suave", "Cremosa", "Delicada"],
  },
  {
    id: "durazno",
    emoji: "🍑",
    name: "Durazno",
    tagline: "La más fresca de nuestra colección.",
    story:
      "Masa de vainilla, rellena con crema chantilly y duraznos.",
    tier: "standard",
    category: "fresco",
    favorite: false,
    image: "/images/tortas/durazno.webp",
    flavor: ["Fresca", "Frutal", "Ligera"],
  },
  {
    id: "frutilla",
    emoji: "🍓",
    name: "Mermelada de Frutilla",
    tagline: "Un toque frutal que conquista.",
    story:
      "Masa de vainilla, rellena con mermelada de frutilla. Y cubierta con crema.",
    tier: "standard",
    category: "fresco",
    favorite: false,
    image: "/images/tortas/frutilla.webp",
    flavor: ["Frutal", "Fresca", "Dulce"],
  },
  {
    id: "moka",
    emoji: "☕",
    name: "Moka",
    tagline: "El placer perfecto para los amantes del café.",
    story:
      "Masa de chocolate, rellena con crema de moka.",
    tier: "standard",
    category: "chocolate",
    favorite: false,
    image: "/images/tortas/moka.webp",
    flavor: ["Café", "Cremosa", "Intensa"],
  },
  {
    id: "tres-leches",
    emoji: "🥛",
    name: "3 Leches",
    tagline: "El clásico que nunca falla.",
    story:
      "Bizcochuelo de vainilla bañado en tres leches, relleno con crema y dulce de leche.",
    tier: "standard",
    category: "clasico",
    favorite: false,
    image: "/images/tortas/tres-leches.webp",
    flavor: ["Húmeda", "Dulce", "Cremosa"],
  },
  {
    id: "merengue",
    emoji: "☁️",
    name: "Merengue",
    tagline: "Irresistiblemente dulce.",
    story:
      "Masa de vainilla, rellena con suspiro y dulce de leche, cubierta con merengue.",
    tier: "standard",
    category: "clasico",
    favorite: false,
    image: "/images/tortas/merengue.webp",
    flavor: ["Dulce", "Aerada", "Tostada"],
  },
  {
    id: "vainilla",
    emoji: "🤍",
    name: "Vainilla",
    tagline: "La favorita de toda la familia.",
    story:
      "Masa de vainilla, rellena con doble dulce de leche.",
    tier: "standard",
    category: "clasico",
    favorite: false,
    image: "/images/tortas/vainilla.webp",
    flavor: ["Clásica", "Suave", "Cremosa"],
  },
  {
    id: "red-velvet",
    emoji: "❤️",
    name: "Red Velvet",
    tagline: "Elegancia en cada celebración.",
    story:
      "Masa Red Velvet, rellena con crema. Frosting de mantequilla y queso crema.",
    tier: "special",
    category: "sorprender",
    favorite: false,
    image: "/images/tortas/red-velvet.webp",
    flavor: ["Elegante", "Suave", "Cremosa"],
  },
];

export const HERO_IMAGE = "/images/hero.svg";

export const LOGO_URL = "/images/logo.webp";

export function tortaPrice(torta, sizeKey) {
  const tier = torta.tier === "special" ? "special" : "standard";
  return PRICES[tier][sizeKey];
}

export function priceFrom(torta) {
  return tortaPrice(torta, "ce");
}

export const formatPrice = (n) => `Bs ${n.toLocaleString("es-BO")}`;

import { getProductImage } from '@/lib/productImages';

export const INITIAL_PRODUCTS = [
  {
    id: 'p1',
    name: 'Cuñapé',
    slug: 'cunape',
    tagline: 'El clásico horneado cruceño con puro queso criollo',
    description: 'Cuñapés congelados elaborados artesanalmente con almidón de yuca seleccionado y queso criollo abundante. Crujientes por fuera y deliciosamente suaves por dentro.',
    price: 60,
    currency: 'BOB',
    category: 'tradicionales',
    emoji: '🧀',
    package_size: 'Paquete de 10 unidades',
    serves: '3-4 personas',
    ingredients: ['Almidón de yuca', 'Queso criollo artesanal', 'Leche', 'Mantequilla', 'Huevo'],
    baking_instructions: {
      oven: 'Horno precalentado a 200°C por 18 a 20 minutos sin descongelar.',
      airfryer: 'Airfryer a 180°C durante 12 a 14 minutos.',
      note: 'Directo del congelador a tu horno. Hornear hasta que estén bien doraditos.'
    },
    sort_order: 1,
    image_url: 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/08201275a_Cunape.jpg'
  },
  {
    id: 'p2',
    name: 'Tamal a la Olla',
    slug: 'tamal-a-la-olla',
    tagline: 'Tierna masa de maíz con sazón tradicional',
    description: 'Tamales a la olla congelados, preparados con choclo tierno recién molido y especias de la casa. El sabor de la tradición cruceña listo en minutos.',
    price: 70,
    currency: 'BOB',
    category: 'tradicionales',
    emoji: '🌽',
    package_size: 'Paquete de 5 unidades',
    serves: '5 personas',
    ingredients: ['Choclo tierno molido', 'Queso criollo', 'Manteca artesanal', 'Especias tradicionales'],
    baking_instructions: {
      oven: 'Calentar al vapor o a baño María por 20 minutos sin retirar la chala.',
      alternative: 'Calentar en microondas en recipiente tapado por 4-5 minutos.',
      note: 'Mantener en su envoltura durante la cocción para preservar su humedad.'
    },
    sort_order: 2,
    image_url: 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/f32ed44d-63a1-4081-9487-29db71d3ea1b.png'
  },
  {
    id: 'p3',
    name: 'Empanada de Arroz',
    slug: 'empanada-de-arroz',
    tagline: 'Masa crocante de arroz cruceño con abundante queso',
    description: 'Empanada típica de arroz congelada. Al hornearse, su capa exterior alcanza un dorado crujiente perfecto manteniendo un centro de queso fundido.',
    price: 40,
    currency: 'BOB',
    category: 'tradicionales',
    emoji: '🌾',
    package_size: 'Paquete de 5 unidades',
    serves: '5 personas',
    ingredients: ['Harina de arroz artesanal', 'Yuca cocida', 'Queso criollo', 'Manteca'],
    baking_instructions: {
      oven: 'Horno bien caliente a 220°C por 18 a 22 minutos.',
      note: 'Hornear directamente congeladas hasta que los bordes adquieran un tono dorado crujiente.'
    },
    sort_order: 3,
    image_url: 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/7b78fd4e-f093-44a9-9884-9a749bf9f260.png'
  },
  {
    id: 'p4',
    name: 'Sonso Personal',
    slug: 'sonso-personal',
    tagline: 'La mezcla perfecta de yuca suave y queso derretido',
    description: 'Sonsos individuales de yuca y queso artesanal. Congelados y listos para colocar en la lata del horno o freidora de aire y dorar al instante.',
    price: 55,
    currency: 'BOB',
    category: 'tradicionales',
    emoji: '🪵',
    package_size: 'Paquete de 5 unidades',
    serves: '5 personas',
    ingredients: ['Yuca seleccionada', 'Queso criollo artesanal', 'Mantequilla', 'Leche entera'],
    baking_instructions: {
      oven: 'Horno precalentado a 200°C por 15 a 18 minutos.',
      airfryer: 'Airfryer a 180°C por 10 a 12 minutos.',
      note: 'Pincelar con un toque de mantequilla antes de hornear para un dorado extra brillante.'
    },
    sort_order: 4,
    image_url: 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/59d504e0-3160-419d-b4d4-628c78e63297.png'
  },
  {
    id: 'p5',
    name: 'Empanada de Queso',
    slug: 'empanada-de-queso',
    tagline: 'Masa dorada y crujiente rebozante de queso',
    description: 'Empanadas congeladas rellenas de queso criollo. Ideal para hornear en casa o freír en aceite caliente para un desayuno o merienda inolvidable.',
    price: 45,
    currency: 'BOB',
    category: 'salados',
    emoji: '🧀',
    package_size: 'Paquete de 5 unidades',
    serves: '5 personas',
    ingredients: ['Harina de trigo de primera', 'Queso criollo', 'Mantequilla', 'Huevo'],
    baking_instructions: {
      oven: 'Horno a 200°C por 15 a 18 minutos.',
      alternative: 'Freír en aceite bien caliente por 3 a 4 minutos por lado hasta dorar.',
      note: 'Servir recién salidas y disfrutar con el queso derretido.'
    },
    sort_order: 5,
    image_url: 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/be5e290c7_EmpanadadeQueso.jpg'
  },
  {
    id: 'p6',
    name: 'Empanada de Pollo',
    slug: 'empanada-de-pollo',
    tagline: 'Relleno jugoso de pollo desmenuzado con sazón criolla',
    description: 'Empanadas congeladas horneables rellenas con un jugoso pino de pollo preparado con vegetales frescos y especias de la casa.',
    price: 65,
    currency: 'BOB',
    category: 'salados',
    emoji: '🍗',
    package_size: 'Congelado paquete de 5 unidades',
    serves: '5 personas',
    ingredients: ['Pollo tierno desmenuzado', 'Harina de trigo', 'Cebolla', 'Pimiento', 'Condimentos caseros'],
    baking_instructions: {
      oven: 'Horno precalentado a 200°C por 20 minutos hasta dorar.',
      airfryer: 'Airfryer a 180°C por 14 a 16 minutos.',
      note: 'Pincelar con yema de huevo antes de hornear si deseas una corteza dorada y brillante.'
    },
    sort_order: 6,
    image_url: 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/0f542504-ae95-4de6-aaa7-77225a10b8e2.png'
  },
  {
    id: 'p7',
    name: 'Pan con Ajo Clásico',
    slug: 'pan-con-ajo-clasico',
    tagline: 'Mantequilla artesanal de ajo y finas hierbas',
    description: 'Panecillos suaves rellenos y untados de abundante mantequilla con ajo y perejil fresco. Congelados y listos para tostar y gratinar.',
    price: 30,
    currency: 'BOB',
    category: 'salados',
    emoji: '🧄',
    package_size: 'Paquete de 5 unidades',
    serves: '5 personas',
    ingredients: ['Pan artesanal', 'Mantequilla sin sal', 'Ajo fresco molido', 'Perejil finamente picado'],
    baking_instructions: {
      oven: 'Horno a 180°C por 10 a 12 minutos.',
      airfryer: 'Airfryer a 160°C por 6 a 8 minutos.',
      note: 'Sacar del horno cuando el pan esté crocante y la mantequilla de ajo chisporrotee.'
    },
    sort_order: 7,
    image_url: 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/6cb7fc603_PanconAjo.jpg'
  },
  {
    id: 'p8',
    name: 'Mini Cuñapé',
    slug: 'mini-cunape',
    tagline: 'Pequeños bocaditos crujientes ideales para compartir',
    description: 'Cunapecitos congelados en presentación tamaño coctel. Perfectos para cumpleaños, reuniones o antojos rápidos a cualquier hora.',
    price: 30,
    currency: 'BOB',
    category: 'tradicionales',
    emoji: '🏺',
    package_size: 'Paquete de 20 unidades',
    serves: '5-6 personas',
    ingredients: ['Almidón de yuca', 'Queso criollo abundante', 'Leche', 'Mantequilla', 'Huevo'],
    baking_instructions: {
      oven: 'Horno a 200°C por 12 a 15 minutos sin descongelar.',
      airfryer: 'Airfryer a 180°C por 8 a 10 minutos.',
      note: 'Por su tamaño mini se doran rápidamente, supervisar la cocción.'
    },
    sort_order: 8,
    image_url: 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/f8038d445_Cunapecitos.jpg'
  }
];

export function getCatalogProducts(remoteList = []) {
  if (Array.isArray(remoteList) && remoteList.length > 0) {
    return remoteList;
  }
  return INITIAL_PRODUCTS;
}

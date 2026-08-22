// Imágenes de productos de Mil Sabores
export const PRODUCT_IMAGES = {
  'cuñapé': 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/08201275a_Cunape.jpg',
  'mini cuñapé': 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/f8038d445_Cunapecitos.jpg',
  'sonso personal': 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/59d504e0-3160-419d-b4d4-628c78e63297.png',
  'sonso': 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/59d504e0-3160-419d-b4d4-628c78e63297.png',
  'pan con ajo clásico': 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/6cb7fc603_PanconAjo.jpg',
  'tamal a la olla': 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/f32ed44d-63a1-4081-9487-29db71d3ea1b.png',
  'empanada de arroz': 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/7b78fd4e-f093-44a9-9884-9a749bf9f260.png',
  'empanada de queso': 'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/be5e290c7_EmpanadadeQueso.jpg',
  'empanada de pollo': 'https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/0f542504-ae95-4de6-aaa7-77225a10b8e2.png'
};

export const DEFAULT_PRODUCT_IMAGE =
  'https://media.base44.com/images/public/6a777f84cf2a850da688ae91/08201275a_Cunape.jpg';

export function getProductImage(product) {
  if (!product) return DEFAULT_PRODUCT_IMAGE;
  const key = (product.name || '').trim().toLowerCase();
  return PRODUCT_IMAGES[key] || product.image_url || DEFAULT_PRODUCT_IMAGE;
}

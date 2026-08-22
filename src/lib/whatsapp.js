// Configuración de WhatsApp oficial para Torta Express (+591 62013533)
export const WA_NUMBER = "59162013533";

export function generalContactUrl(customMessage) {
  const msg =
    customMessage ||
    "¡Hola Torta Express! Quiero consultar sobre sus tortas disponibles para hoy.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function orderTortaUrl(torta, size) {
  const msg = `¡Hola Torta Express! Quiero pedir la torta *${torta.name}* en tamaño *${size.name}* (${size.persons}).`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function orderCartUrl(summaryText) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(summaryText)}`;
}

import { useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useTortaExpressCart } from "@/context/TortaExpressCartContext";

export default function FloatingCart() {
  const { pathname } = useLocation();
  const { count, setOpen } = useTortaExpressCart();

  // En el detalle hay una barra fija para agregar al carrito
  if (pathname.includes("/torta/")) return null;

  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Ver carrito"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105 cursor-pointer"
    >
      <ShoppingBag className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Ver carrito</span>
      {count > 0 && (
        <span className="ml-1 rounded-full bg-background px-2 py-0.5 text-xs font-bold text-primary">
          {count}
        </span>
      )}
    </button>
  );
}

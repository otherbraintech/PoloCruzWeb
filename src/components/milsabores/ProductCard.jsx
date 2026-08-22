import React from 'react';
import { Link } from 'react-router-dom';
import { useMilSaboresCart } from '@/context/MilSaboresCartContext';
import { Plus, Snowflake } from 'lucide-react';

function formatPackageSize(size) {
  if (!size) return '';
  const match = size.match(/(\d+)/);
  if (match) {
    return `PAQUETE (${match[1]} U.)`;
  }
  return size.toUpperCase();
}

export default function ProductCard({ product, index = 0 }) {
  const { addItem, setIsOpen } = useMilSaboresCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setIsOpen(true);
  };

  const formattedIndex = String(index + 1).padStart(2, '0');
  const packageText = formatPackageSize(product.package_size || product.weight);

  return (
    <div className="flex items-center gap-3 sm:gap-4 w-full">
      {/* Tarjeta principal del producto */}
      <Link
        to={`/milsabores/producto/${product.slug}`}
        className="group flex-1 flex items-center justify-between gap-4 p-4 sm:p-5 md:py-5 md:px-7 rounded-2xl sm:rounded-3xl border border-[#E89557]/20 bg-[#231E19] hover:border-[#E89557]/60 hover:bg-[#2A241F] transition-all duration-300 shadow-lg"
      >
        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
          {/* Número correlativo 01, 02... */}
          <span className="font-serif text-xs sm:text-sm md:text-base text-[#E89557]/60 font-semibold select-none">
            {formattedIndex}
          </span>

          {/* Nombre e información */}
          <div className="min-w-0">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-[#E89557] group-hover:text-white transition-colors leading-tight truncate">
              {product.name}
            </h3>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 font-medium mt-1 flex items-center gap-1.5 truncate">
              {packageText && <span>{packageText} ·</span>}
              <Snowflake size={11} className="text-[#E89557]/70 shrink-0" />
              <span>CONGELADO</span>
            </p>
          </div>
        </div>

        {/* Insignia de Precio */}
        <div className="shrink-0 w-14 sm:w-16 h-16 sm:h-20 bg-[#E89557] text-[#2B2620] rounded-2xl flex flex-col items-center justify-center shadow-md">
          <span className="font-display text-2xl sm:text-3xl font-bold leading-none text-[#2B2620]">
            {product.price}
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans uppercase font-bold tracking-widest text-[#2B2620] mt-1 leading-none opacity-80">
            B S
          </span>
        </div>
      </Link>

      {/* Botón de adición directa al carrito (+) */}
      <button
        onClick={handleAdd}
        className="shrink-0 w-12 sm:w-14 h-16 sm:h-20 rounded-2xl border border-[#E89557]/30 bg-[#231E19] hover:bg-[#E89557] hover:border-[#E89557] text-[#E89557] hover:text-[#2B2620] flex items-center justify-center transition-all duration-200 shadow-lg active:scale-95 group cursor-pointer"
        aria-label={`Añadir ${product.name} al carrito`}
        title="Añadir al carrito"
      >
        <Plus size={22} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}

import { formatPrice } from "@/data/tortas";
import { Check } from "lucide-react";

export default function SizeCard({ size, price, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(size.key)}
      className={`relative flex flex-col justify-between rounded-2xl border-2 p-4 text-left transition-colors duration-200 cursor-pointer ${
        selected
          ? "border-primary bg-primary/10"
          : "border-[hsl(var(--border))] bg-card hover:border-primary/40"
      }`}
    >
      <div className="flex w-full items-start justify-between gap-2">
        <div>
          <span className="font-display text-base font-bold text-foreground block">{size.name}</span>
          <span className="text-xs text-muted-foreground block">{size.persons}</span>
        </div>
        <span
          className={`flex h-5 w-5 flex-none items-center justify-center rounded-full border transition-all duration-200 ${
            selected
              ? "border-primary bg-primary text-primary-foreground"
              : "border-[hsl(var(--border))] bg-transparent"
          }`}
        >
          {selected && <Check className="h-3 w-3" />}
        </span>
      </div>
      <div className="mt-3 pt-2 border-t border-[hsl(var(--border))] w-full flex justify-between items-center">
        <span className="text-[0.65rem] font-semibold text-muted-foreground uppercase tracking-wider">Precio</span>
        <span className="font-display text-base font-bold text-accent">{formatPrice(price)}</span>
      </div>
    </button>
  );
}

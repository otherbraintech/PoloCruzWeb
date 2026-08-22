import { Store, Truck } from "lucide-react";

const OPTIONS = [
  { key: "recoger", label: "Recoger en el local", desc: "Paso a buscarlo", Icon: Store },
  { key: "delivery", label: "Delivery", desc: "Lo llevamos a tu dirección", Icon: Truck },
];

export default function FulfillmentSelector({ value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {OPTIONS.map(({ key, label, desc, Icon }) => {
        const active = value === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`flex flex-col items-start gap-1 rounded-2xl border p-5 text-left transition cursor-pointer ${
              active
                ? "border-primary bg-primary/5"
                : "border-[hsl(var(--border))] hover:border-primary/40"
            }`}
          >
            <Icon className={`h-6 w-6 ${active ? "text-primary" : "text-muted-foreground"}`} />
            <span className="font-display text-lg text-foreground">{label}</span>
            <span className="text-xs text-muted-foreground">{desc}</span>
          </button>
        );
      })}
    </div>
  );
}

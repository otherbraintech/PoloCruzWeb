import { LOGO_URL } from "@/data/tortas";

export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={LOGO_URL}
        alt="Torta Express"
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

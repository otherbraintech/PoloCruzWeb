export default function SectionTitle({ kicker, title, subtitle, center }) {
  return (
    <div className={`space-y-4 ${center ? "mx-auto max-w-2xl text-center" : ""}`}>
      {kicker && (
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-accent">{kicker}</p>
      )}
      <h2 className="font-display text-4xl leading-[1.1] text-foreground sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`max-w-xl text-base leading-relaxed text-muted-foreground ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

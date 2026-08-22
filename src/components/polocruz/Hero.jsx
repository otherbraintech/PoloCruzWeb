import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { LOGOS } from '@/data/products';

export default function Hero() {
  const canvasRef = useRef(null);

  // Floating particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214,237,248,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId); };
  }, []);

  const scrollToContent = () => {
    window.history.pushState(null, '', '/historia');
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-between bg-[#0D3D5C] pt-24 pb-16">

      {/* ── Multi-layer background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D3D5C] via-[#1B6CA8] to-[#0D3D5C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(42,172,226,0.18),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D3D5C]/80 via-transparent to-[#0D3D5C]/90" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* ── Decorative rings ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#2AACE2]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#2AACE2]/10 pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto my-auto py-4">

        {/* Polo Cruz logo */}
        <div className="mb-4 animate-fade-up">
          <img
            src={LOGOS.poloCruz}
            alt="Polo Cruz SRL"
            className="w-24 md:w-36 h-24 md:h-36 object-contain drop-shadow-[0_0_30px_rgba(42,172,226,0.4)]"
          />
        </div>

        {/* Tagline above */}
        <p className="text-[#2AACE2] text-xs md:text-sm tracking-[0.5em] uppercase font-medium mb-3 animate-fade-up">
          Alimentos Congelados · Santa Cruz, Bolivia
        </p>

        {/* Main headline */}
        <h1 className="font-body font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-1 animate-fade-up uppercase">
          POLO CRUZ
        </h1>
        <p className="font-body text-[#2AACE2] text-lg md:text-2xl tracking-[0.4em] uppercase font-light mb-6 animate-fade-up">
          S.R.L.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2AACE2]/60" />
          <span className="text-[#2AACE2]/70 text-xs tracking-[0.3em] uppercase font-medium">Nuestras Marcas</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2AACE2]/60" />
        </div>

        {/* Brand logos & Visitar Web buttons */}
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-14 mb-6 animate-fade-up">

          {/* Mil Sabores */}
          <div className="flex flex-col items-center gap-3">
            <Link
              to="/milsabores"
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <img
                src={LOGOS.milSabores}
                alt="Mil Sabores"
                className="w-24 sm:w-32 md:w-36 h-24 sm:h-32 md:h-36 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(200,121,65,0.5)]"
              />
              <span className="text-[#F5EDE3] text-xs tracking-[0.25em] uppercase font-medium group-hover:text-[#C87941] transition-colors">
                Horneados Típicos
              </span>
            </Link>
            <Link
              to="/milsabores"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C87941] hover:bg-[#b06734] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Visitar Sitio Web</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-36 bg-gradient-to-b from-transparent via-[#2AACE2]/40 to-transparent" />

          {/* Torta Express */}
          <div className="flex flex-col items-center gap-3">
            <Link
              to="/tortaexpress"
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <img
                src={LOGOS.tortaExpress}
                alt="Torta Express"
                className="w-24 sm:w-32 md:w-36 h-20 sm:h-28 md:h-32 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(233,30,140,0.5)]"
              />
              <span className="text-[#FCE4F0] text-xs tracking-[0.25em] uppercase font-medium group-hover:text-[#E91E8C] transition-colors">
                Tortas Artesanales
              </span>
            </Link>
            <Link
              to="/tortaexpress"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E91E8C] hover:bg-[#c91577] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Visitar Sitio Web</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <p className="text-[#D6EDF8]/70 text-xs md:text-sm max-w-sm leading-relaxed font-medium">
          37 años de tradición cruceña — dos marcas, una pasión
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer group pb-2"
        onClick={scrollToContent}
      >
        <span className="text-[#2AACE2] group-hover:text-white text-[0.65rem] tracking-[0.3em] uppercase transition-colors font-semibold">Descubrir</span>
        <ArrowDown className="text-[#2AACE2] animate-bounce" size={18} />
      </div>
    </section>
  );
}
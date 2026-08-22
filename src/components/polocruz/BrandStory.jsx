import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Award, Flame, Heart } from 'lucide-react';
import { HERITAGE_IMAGE, LOGOS } from '@/data/products';

const PILLARS = [
  { icon: Heart,  title: 'Receta de Abuela',      text: 'Lo que empezó como una receta familiar hoy llega a miles de hogares en Santa Cruz.' },
  { icon: Flame,  title: '37 Años de Horno',       text: 'Cuatro décadas perfeccionando el arte del horneado cruceño, día tras día.' },
  { icon: Award,  title: 'Dos Marcas, Una Pasión', text: 'Mil Sabores y Torta Express: tradición y celebración bajo un mismo techo.' },
];

export default function BrandStory() {
  return (
    <section id="historia" className="relative px-6 lg:px-12 overflow-hidden">

      {/* ── Seamless gradient transition from Hero (#0D3D5C) to Historia (#EEF6FB) ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, #0D3D5C 0%, #1A5A8A 6%, #3A8DB8 12%, #6BB4D4 20%, #9DD0E5 28%, #C2E2F0 36%, #DBEEF7 44%, #EEF6FB 52%, #EEF6FB 100%)'
      }} />

      {/* Watermark — positioned below the gradient so it appears in the light zone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif-display text-[6rem] md:text-[12rem] text-[#2AACE2]/[0.05] whitespace-nowrap select-none">
          HISTORIA
        </span>
      </div>

      {/* Spacer to push content below the gradient transition zone */}
      <div className="h-12 md:h-16" />

      <div className="relative max-w-7xl mx-auto pb-6 md:pb-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-6 md:mb-10">
          <div className="heritage-line w-12" />
          <p className="text-white text-sm tracking-[0.4em] uppercase font-bold drop-shadow-[0_1px_3px_rgba(13,61,92,0.5)]">Nuestra Historia</p>
        </div>

        {/* Main editorial block */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-10">
          <div className="order-2 md:order-1">

            {/* Polo Cruz logo */}
            <div className="flex items-center gap-4 mb-5">
              <img src={LOGOS.poloCruz} alt="Polo Cruz SRL" className="w-14 h-14 object-contain" />
              <div>
                <h2 className="font-body font-bold text-2xl text-[#0D3D5C] tracking-wide uppercase">POLO CRUZ SRL</h2>
                <p className="text-[#2AACE2] text-xs tracking-[0.3em] uppercase">Alimentos Congelados</p>
              </div>
            </div>

            <h3 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-[#0D3D5C] leading-tight mb-5 text-balance">
              El sabor que nació en una cocina cruceña
            </h3>

            {/* Story paragraphs */}
            <div className="space-y-4 text-[#0D3D5C]/75 text-base leading-relaxed">
              <p>
                Todo comenzó con una abuela, una receta y el aroma inconfundible del cuñapé
                recién horneado. En los años 80, en una cocina del corazón de Santa Cruz de
                la Sierra, nacía lo que hoy conocemos como <strong className="text-[#0D3D5C]">Polo Cruz S.R.L.</strong>
              </p>
              <p>
                Con más de <strong className="text-[#2AACE2]">37 años de trayectoria</strong>, nuestra empresa creció
                sobre los pilares del sabor auténtico, los ingredientes locales y el amor
                por nuestra cultura gastronómica. Hoy llevamos nuestros horneados a miles
                de hogares cruceños cada semana.
              </p>
              <p>
                De esa misma pasión nació <strong className="text-[#E91E8C]">Torta Express</strong>: la rama artesanal
                de celebración, donde cada torta se elabora con el mismo cuidado y dedicación
                que nos enseñaron desde el primer horno encendido.
              </p>
            </div>

            {/* Mini brand logos */}
            <div className="flex items-center gap-6 mt-5 pt-4 border-t border-[#2AACE2]/20">
              <Link to="/milsabores" className="flex items-center gap-2 text-xs font-semibold text-[#C87941] hover:underline">
                <img src={LOGOS.milSabores} alt="Mil Sabores" className="w-12 h-12 object-contain" />
                <span>Ver Mil Sabores →</span>
              </Link>
              <Link to="/tortaexpress" className="flex items-center gap-2 text-xs font-semibold text-[#E91E8C] hover:underline">
                <img src={LOGOS.tortaExpress} alt="Torta Express" className="w-14 h-10 object-contain" />
                <span>Ver Torta Express →</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl shadow-xl">
              <Image
                src={HERITAGE_IMAGE}
                alt="Artesanía en la panadería Polo Cruz"
                fittingType="fill"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-[#0D3D5C]/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#2AACE2]/30 rounded-xl -z-10 hidden md:block" />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="group p-6 border-t-2 border-[#2AACE2]/25 hover:border-[#2AACE2] transition-colors bg-white/70 hover:bg-white rounded-2xl shadow-sm">
                <Icon className="text-[#2AACE2] mb-3 group-hover:scale-110 transition-transform" size={26} strokeWidth={1.5} />
                <h3 className="font-serif-display text-lg text-[#0D3D5C] mb-2">{pillar.title}</h3>
                <p className="text-[#0D3D5C]/70 text-sm leading-relaxed">{pillar.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
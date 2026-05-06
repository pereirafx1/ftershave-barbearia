import Link from "next/link";

const LOGO_URL =
  "https://cdn.discordapp.com/attachments/1420855366685692094/1501540167704641656/Captura_de_ecra_2026-05-06_111242-Photoroom.png?ex=69fc71c1&is=69fb2041&hm=679b46f7df4885db34f446d688f63d933679fc1f9915fb1525fe0548c8e065fe&";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark py-24">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_70%)]" />

      {/* Gold glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Top divider */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-px w-16 bg-gold/60" />
          <span className="text-gold/80 text-xs tracking-[0.4em] uppercase font-light">
            Est. 2020 · Setúbal
          </span>
          <div className="h-px w-16 bg-gold/60" />
        </div>

        {/* Logo grande no centro */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_URL}
          alt="Aftershave Barbearia"
          className="w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[540px] lg:h-[540px] object-contain mx-auto -mt-14 -mb-14 sm:-mt-20 sm:-mb-20 drop-shadow-[0_0_60px_rgba(201,168,76,0.3)]"
        />

        {/* Tagline */}
        <p className="text-white/50 text-sm sm:text-base tracking-[0.25em] uppercase mb-6">
          Arte · Precisão · Estilo
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-24 bg-gold/40" />
          <svg
            className="w-4 h-4 text-gold/60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="h-px w-24 bg-gold/40" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/marcacoes"
            className="px-10 py-4 bg-gold text-dark font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            Marcar Agora
          </Link>
          <Link
            href="/#servicos"
            className="px-10 py-4 border border-white/20 text-white/70 font-light text-sm tracking-[0.15em] uppercase rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Ver Serviços
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-white/60">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

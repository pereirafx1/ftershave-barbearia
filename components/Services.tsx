import Link from "next/link";

const services = [
  { name: "Corte Simples", price: "12,00" },
  { name: "Corte + Styling", price: "15,00" },
  { name: "Corte Degradê", price: "15,00" },
  { name: "Risco", price: "2,00" },
  { name: "Desenho", price: "5,00" },
  { name: "Barba", price: "10,00" },
  { name: "Corte + Barba", price: "20,00" },
  { name: "Hidratação Capilar", price: "15,00" },
  { name: "Sobrancelhas", price: "5,00" },
  { name: "Ritual Premium", price: "35,00" },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 bg-dark-200 overflow-hidden"
    >
      {/* Subtle noise/grain texture via pseudo-element using box-shadows */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8">
        {/* Título estilo tabela */}
        <div className="mb-10">
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
            Tabela de Preços
          </h2>
          <div className="w-12 h-0.5 bg-gold" />
        </div>

        {/* Lista de preços */}
        <ul className="divide-y divide-white/10">
          {services.map((service) => (
            <li
              key={service.name}
              className="flex items-center justify-between py-5 group"
            >
              <span className="text-white font-semibold text-base sm:text-lg group-hover:text-gold transition-colors duration-200">
                {service.name}
              </span>
              <span className="text-white/80 text-base sm:text-lg font-light tracking-wide ml-8 shrink-0">
                € {service.price}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/marcacoes"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-dark font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            Marcar Agora
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

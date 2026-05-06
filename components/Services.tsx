import Link from "next/link";

const services = [
  {
    icon: "✂",
    name: "Corte de Cabelo",
    description:
      "Corte clássico ou moderno, adaptado ao teu estilo. Inclui lavagem e finalização.",
    price: "12€",
    duration: "30 min",
  },
  {
    icon: "🪒",
    name: "Barba",
    description:
      "Tratamento completo de barba com navalha, toalha quente e óleos nutritivos.",
    price: "10€",
    duration: "30 min",
  },
  {
    icon: "⚡",
    name: "Corte + Barba",
    description:
      "O pacote completo. Corte de cabelo e tratamento de barba ao melhor preço.",
    price: "20€",
    duration: "60 min",
  },
  {
    icon: "💧",
    name: "Hidratação Capilar",
    description:
      "Tratamento nutritivo profundo para cabelo seco ou danificado. Inclui máscara e finalização.",
    price: "15€",
    duration: "30 min",
  },
  {
    icon: "〰",
    name: "Sobrancelhas",
    description:
      "Design e definição de sobrancelhas com navalha para um acabamento perfeito.",
    price: "5€",
    duration: "15 min",
  },
  {
    icon: "★",
    name: "Ritual Premium",
    description:
      "Corte + barba + hidratação + sobrancelhas. A experiência completa Aftershave.",
    price: "35€",
    duration: "90 min",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-28 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">
            O Que Fazemos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
            Serviços
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative bg-dark-200 border border-dark-400 hover:border-gold/30 rounded-sm p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Icon */}
              <div className="text-3xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {service.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-end justify-between pt-4 border-t border-dark-400">
                <div>
                  <span className="text-2xl font-bold text-gold">
                    {service.price}
                  </span>
                </div>
                <span className="text-xs text-white/40 tracking-wider uppercase">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/marcacoes"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-dark font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            Marcar Serviço
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

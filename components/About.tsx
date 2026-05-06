const stats = [
  { value: "5+", label: "Anos de Experiência" },
  { value: "3K+", label: "Clientes Satisfeitos" },
  { value: "6", label: "Serviços Disponíveis" },
  { value: "100%", label: "Satisfação Garantida" },
];

export default function About() {
  return (
    <section id="sobre" className="py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: decorative element */}
          <div className="relative">
            {/* Main decorative box */}
            <div className="relative bg-dark-200 border border-dark-400 p-10 rounded-sm">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

              {/* Barber pole icon */}
              <div className="flex flex-col items-center justify-center py-8 gap-6">
                <svg
                  className="w-24 h-24 text-gold/30"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    className="font-serif"
                    fontSize="36"
                    fill="#c9a84c"
                    opacity="0.6"
                  >
                    A
                  </text>
                </svg>

                <div className="text-center">
                  <div className="font-serif text-2xl text-gold mb-1">
                    Aftershave
                  </div>
                  <div className="text-white/40 text-xs tracking-[0.3em] uppercase">
                    Barbearia · Setúbal
                  </div>
                </div>

                <div className="h-px w-full bg-dark-400" />

                <p className="text-white/40 text-sm italic text-center leading-relaxed">
                  &ldquo;A barbearia é um lugar sagrado — onde os homens vêm
                  não apenas para cortar o cabelo, mas para cuidar da sua
                  imagem e do seu bem-estar.&rdquo;
                </p>
              </div>
            </div>

            {/* Offset border effect */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-gold/20 rounded-sm -z-10" />
          </div>

          {/* Right: text content */}
          <div>
            <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">
              A Nossa História
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Mais do que um corte de cabelo
            </h2>
            <div className="space-y-5 text-white/60 leading-relaxed mb-10">
              <p>
                Fundada em Setúbal com paixão pela arte da barbearia tradicional
                portuguesa, a <span className="text-gold">Aftershave</span> é
                um espaço onde o cuidado masculino encontra a excelência.
              </p>
              <p>
                Os nossos barbeiros combinam técnicas clássicas com as últimas
                tendências, garantindo que cada cliente sai com a melhor versão
                de si próprio. Cada visita é uma experiência — não apenas um
                serviço.
              </p>
              <p>
                Usamos os melhores produtos do mercado e dedicamos tempo e
                atenção a cada detalhe. Porque acreditamos que o verdadeiro luxo
                está nos pormenores.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dark-200 border border-dark-400 p-5 rounded-sm"
                >
                  <div className="text-3xl font-bold text-gold font-serif mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

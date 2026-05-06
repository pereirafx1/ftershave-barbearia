// R. João Eloy do Amaral 152, 2900-111 Setúbal — GPS: 38.524385, -8.896569
const ADDRESS = "R. João Eloy do Amaral 152, 2900-111 Setúbal";

// Vista satélite 45° sobre a morada — filtro dark aplicado via CSS
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600!2d-8.896569!3d38.524385!2m3!1f0!2f45!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1939393b41c14b%3A0x0!2sR.+Jo%C3%A3o+Eloy+do+Amaral+152%2C+2900-111+Set%C3%BAbal!5e1!3m2!1spt!2spt!4v1716000000000!5m2!1spt!2spt";

export default function Location() {
  return (
    <section id="localizacao" className="py-28 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">
            Onde Estamos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
            Localização
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2 relative rounded-sm overflow-hidden border border-dark-400">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent z-10" />
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="450"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) hue-rotate(180deg)",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Aftershave Barbearia"
            />
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-dark-200 border border-dark-400 rounded-sm p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="flex gap-4">
                <div className="text-gold mt-0.5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1 uppercase tracking-wider">
                    Morada
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-dark-200 border border-dark-400 rounded-sm p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="flex gap-4">
                <div className="text-gold mt-0.5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                    Horário
                  </h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { days: "Segunda – Sexta", hours: "09:00 – 19:00" },
                      { days: "Sábado", hours: "09:00 – 18:00" },
                      { days: "Domingo", hours: "Fechado" },
                    ].map((row) => (
                      <div
                        key={row.days}
                        className="flex justify-between items-center"
                      >
                        <span className="text-white/50">{row.days}</span>
                        <span
                          className={
                            row.hours === "Fechado"
                              ? "text-red-400/70"
                              : "text-gold"
                          }
                        >
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-dark-200 border border-dark-400 rounded-sm p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="flex gap-4">
                <div className="text-gold mt-0.5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1 uppercase tracking-wider">
                    Contacto
                  </h3>
                  <a
                    href="tel:+351916937547"
                    className="text-gold hover:text-gold-light text-sm transition-colors"
                  >
                    +351 916 937 547
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

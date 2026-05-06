import Link from "next/link";

const LOGO_URL =
  "https://cdn.discordapp.com/attachments/1420855366685692094/1501527385156358214/Captura_de_ecra_2026-05-06_111242-Photoroom.png?ex=69fc65d9&is=69fb1459&hm=ef0031fd8fed623b8a7bc986c895c49bd3c1b7004e4ffdd08a5004beb6ee6b08&";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-dark border-t border-dark-400">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_URL}
                alt="Aftershave Barbearia"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="block font-serif text-base font-bold text-gold tracking-widest uppercase">
                  Aftershave
                </span>
                <span className="block text-[10px] text-white/50 tracking-[0.25em] uppercase">
                  Barbearia
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              A barbearia premium de Setúbal. Arte, precisão e estilo ao
              serviço do homem moderno.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-dark-200 border border-dark-400 rounded-sm flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-dark-200 border border-dark-400 rounded-sm flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/#servicos", label: "Serviços" },
                { href: "/#sobre", label: "Sobre Nós" },
                { href: "/#localizacao", label: "Localização" },
                { href: "/marcacoes", label: "Marcar Visita" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-gold/40">—</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">
              Contacto
            </h3>
            <div className="space-y-4 text-sm text-white/40">
              <div className="flex gap-3">
                <span className="text-gold shrink-0">📍</span>
                <span>
                  R. João Eloy do Amaral 152
                  <br />
                  2900-111 Setúbal
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold shrink-0">📞</span>
                <a
                  href="tel:+351916937547"
                  className="hover:text-gold transition-colors"
                >
                  +351 916 937 547
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-gold shrink-0">✉</span>
                <a
                  href="mailto:geral@aftershavebarbearia.pt"
                  className="hover:text-gold transition-colors"
                >
                  geral@aftershavebarbearia.pt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {year} Aftershave Barbearia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-white/20 text-xs">
            <span>Feito com</span>
            <span className="text-gold/40">♥</span>
            <span>em Setúbal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

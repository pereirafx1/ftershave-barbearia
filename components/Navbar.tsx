"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre Nós" },
  { href: "/#localizacao", label: "Localização" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-100/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — apenas texto */}
          <Link href="/" className="leading-tight group">
            <span className="block font-serif text-lg font-bold text-gold tracking-widest uppercase group-hover:text-gold-light transition-colors">
              Aftershave
            </span>
            <span className="block text-xs text-white/60 tracking-[0.25em] uppercase">
              Barbearia
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-gold tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/marcacoes"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-gold text-dark font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-200"
            >
              Marcar Agora
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2 border-t border-dark-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-white/70 hover:text-gold tracking-wider uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/marcacoes"
              onClick={() => setIsOpen(false)}
              className="inline-flex justify-center items-center px-5 py-3 bg-gold text-dark font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors"
            >
              Marcar Agora
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

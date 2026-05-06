import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcações | Aftershave Barbearia",
  description: "Marca a tua visita à Aftershave Barbearia em Setúbal.",
};

export default function MarcacoesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark pt-20">
        {/* Header */}
        <div className="bg-dark-100 border-b border-dark-400">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">
              Reserve o Seu Lugar
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Marcar Visita
            </h1>
            <p className="text-white/50 max-w-md mx-auto">
              Escolhe o serviço, a data e o horário que preferes. Confirmamos em
              breve.
            </p>
          </div>
        </div>

        {/* Form section */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative bg-dark-200 border border-dark-400 rounded-sm p-8 sm:p-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <BookingForm />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-white/30 hover:text-gold text-sm transition-colors"
            >
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

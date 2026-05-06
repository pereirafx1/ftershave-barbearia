"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LOGO_URL =
  "https://cdn.discordapp.com/attachments/1420855366685692094/1501540167704641656/Captura_de_ecra_2026-05-06_111242-Photoroom.png?ex=69fc71c1&is=69fb2041&hm=679b46f7df4885db34f446d688f63d933679fc1f9915fb1525fe0548c8e065fe&";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Palavra-passe incorreta");
      }

      router.push("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_URL}
            alt="Aftershave Barbearia"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h1 className="font-serif text-2xl font-bold text-white">
            Área de Administração
          </h1>
          <p className="text-white/40 text-sm mt-2">Aftershave Barbearia</p>
        </div>

        {/* Card */}
        <div className="relative bg-dark-200 border border-dark-400 rounded-sm p-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-white/60 text-xs tracking-wider uppercase mb-2"
              >
                Palavra-passe
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-dark-300 border border-dark-400 text-white placeholder-white/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
              />
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-500/20 rounded-sm px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gold text-dark font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            >
              {loading ? "A verificar..." : "Entrar"}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-white/30 hover:text-gold text-sm transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
}

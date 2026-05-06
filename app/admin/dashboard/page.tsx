"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Marcacao {
  id: string;
  nome: string;
  telefone: string;
  servico: string;
  data: string;
  hora: string;
  notas: string;
  status: "pendente" | "confirmada" | "cancelada";
  criadaEm: string;
}

const SERVICE_LABELS: Record<string, string> = {
  corte: "Corte de Cabelo",
  barba: "Barba",
  "corte-barba": "Corte + Barba",
  hidratacao: "Hidratação Capilar",
  sobrancelhas: "Sobrancelhas",
  ritual: "Ritual Premium",
};

const STATUS_STYLES: Record<string, string> = {
  pendente: "bg-yellow-900/30 text-yellow-400 border-yellow-500/20",
  confirmada: "bg-green-900/30 text-green-400 border-green-500/20",
  cancelada: "bg-red-900/30 text-red-400 border-red-500/20",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [marcacoes, setMarcacoes] = useState<Marcacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pendente" | "confirmada" | "cancelada">("all");

  const fetchMarcacoes = useCallback(async () => {
    try {
      const res = await fetch("/api/marcacoes");
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setMarcacoes(data);
    } catch {
      // redirect on auth failure
      router.push("/admin");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchMarcacoes();
  }, [fetchMarcacoes]);

  async function updateStatus(id: string, newStatus: Marcacao["status"]) {
    try {
      await fetch(`/api/marcacoes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setMarcacoes((prev) =>
        prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
      );
    } catch {
      // silent fail
    }
  }

  async function deleteMarcacao(id: string) {
    if (!confirm("Tens a certeza que queres eliminar esta marcação?")) return;
    try {
      await fetch(`/api/marcacoes/${id}`, { method: "DELETE" });
      setMarcacoes((prev) => prev.filter((m) => m.id !== id));
    } catch {
      // silent fail
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  const filtered =
    filter === "all"
      ? marcacoes
      : marcacoes.filter((m) => m.status === filter);

  const counts = {
    all: marcacoes.length,
    pendente: marcacoes.filter((m) => m.status === "pendente").length,
    confirmada: marcacoes.filter((m) => m.status === "confirmada").length,
    cancelada: marcacoes.filter((m) => m.status === "cancelada").length,
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Top bar */}
      <header className="bg-dark-100 border-b border-dark-400 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-lg font-bold text-white">
              Dashboard <span className="text-gold">Admin</span>
            </h1>
            <span className="text-dark-400 text-white/20 hidden sm:block">|</span>
            <span className="text-white/40 text-sm hidden sm:block">
              Aftershave Barbearia
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-white/40 hover:text-gold text-sm transition-colors"
              target="_blank"
            >
              Ver Site
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 border border-dark-400 text-white/60 hover:text-white hover:border-white/20 text-sm rounded-sm transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {(["all", "pendente", "confirmada", "cancelada"] as const).map(
            (s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`p-4 rounded-sm border text-left transition-all ${
                  filter === s
                    ? "bg-gold/10 border-gold/30"
                    : "bg-dark-200 border-dark-400 hover:border-dark-500"
                }`}
              >
                <div
                  className={`text-2xl font-bold font-serif mb-1 ${
                    filter === s ? "text-gold" : "text-white"
                  }`}
                >
                  {counts[s]}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-wider capitalize">
                  {s === "all" ? "Total" : s}
                </div>
              </button>
            )
          )}
        </div>

        {/* Table */}
        <div className="bg-dark-200 border border-dark-400 rounded-sm overflow-hidden">
          <div className="border-b border-dark-400 px-6 py-4 flex items-center justify-between">
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider">
              Marcações{" "}
              {filter !== "all" && (
                <span className="text-gold capitalize">— {filter}s</span>
              )}
            </h2>
            <button
              onClick={fetchMarcacoes}
              className="text-white/40 hover:text-gold text-xs uppercase tracking-wider transition-colors"
            >
              Atualizar
            </button>
          </div>

          {loading ? (
            <div className="text-center py-16 text-white/30">A carregar...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-white/30">
              Nenhuma marcação encontrada.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-400">
                    {[
                      "Nome",
                      "Telefone",
                      "Serviço",
                      "Data",
                      "Hora",
                      "Notas",
                      "Estado",
                      "Ações",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left text-white/30 text-xs uppercase tracking-wider px-4 py-3 font-normal"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered
                    .sort(
                      (a, b) =>
                        new Date(a.data + "T" + a.hora).getTime() -
                        new Date(b.data + "T" + b.hora).getTime()
                    )
                    .map((m, i) => (
                      <tr
                        key={m.id}
                        className={`border-b border-dark-400/50 hover:bg-dark-300/30 transition-colors ${
                          i % 2 === 0 ? "" : "bg-dark-300/10"
                        }`}
                      >
                        <td className="px-4 py-4 text-white font-medium">
                          {m.nome}
                        </td>
                        <td className="px-4 py-4 text-white/60">{m.telefone}</td>
                        <td className="px-4 py-4 text-white/60">
                          {SERVICE_LABELS[m.servico] ?? m.servico}
                        </td>
                        <td className="px-4 py-4 text-gold">
                          {new Date(m.data).toLocaleDateString("pt-PT")}
                        </td>
                        <td className="px-4 py-4 text-white/60">{m.hora}</td>
                        <td className="px-4 py-4 text-white/40 max-w-[150px] truncate">
                          {m.notas || "—"}
                        </td>
                        <td className="px-4 py-4">
                          <select
                            value={m.status}
                            onChange={(e) =>
                              updateStatus(
                                m.id,
                                e.target.value as Marcacao["status"]
                              )
                            }
                            className={`border rounded-sm text-xs px-2 py-1 bg-transparent cursor-pointer ${STATUS_STYLES[m.status]}`}
                          >
                            <option value="pendente">Pendente</option>
                            <option value="confirmada">Confirmada</option>
                            <option value="cancelada">Cancelada</option>
                          </select>
                        </td>
                        <td className="px-4 py-4">
                          <button
                            onClick={() => deleteMarcacao(m.id)}
                            className="text-red-400/50 hover:text-red-400 transition-colors"
                            title="Eliminar"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

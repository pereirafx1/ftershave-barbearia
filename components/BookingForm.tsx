"use client";

import { useState } from "react";

const services = [
  { value: "corte", label: "Corte de Cabelo — 12€" },
  { value: "barba", label: "Barba — 10€" },
  { value: "corte-barba", label: "Corte + Barba — 20€" },
  { value: "hidratacao", label: "Hidratação Capilar — 15€" },
  { value: "sobrancelhas", label: "Sobrancelhas — 5€" },
  { value: "ritual", label: "Ritual Premium — 35€" },
];

function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = 9; h < 19; h++) {
    slots.push(`${h.toString().padStart(2, "0")}:00`);
    slots.push(`${h.toString().padStart(2, "0")}:30`);
  }
  return slots;
}

const timeSlots = generateTimeSlots();

function getTodayStr(): string {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

interface FormData {
  nome: string;
  telefone: string;
  servico: string;
  data: string;
  hora: string;
  notas: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    telefone: "",
    servico: "",
    data: "",
    hora: "",
    notas: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/marcacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao realizar marcação");
      }

      setStatus("success");
      setForm({
        nome: "",
        telefone: "",
        servico: "",
        data: "",
        hora: "",
        notas: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro desconhecido");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-white mb-3">
          Marcação Confirmada!
        </h3>
        <p className="text-white/50 mb-8">
          A tua marcação foi registada com sucesso. Contactaremos em breve para
          confirmar.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-8 py-3 border border-gold/30 text-gold hover:bg-gold/10 text-sm tracking-wider uppercase transition-colors rounded-sm"
        >
          Nova Marcação
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-dark-200 border border-dark-400 text-white placeholder-white/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors";
  const labelClass =
    "block text-white/60 text-xs tracking-wider uppercase mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className={labelClass}>
            Nome Completo <span className="text-gold">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={form.nome}
            onChange={handleChange}
            placeholder="O teu nome"
            className={inputClass}
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className={labelClass}>
            Telefone <span className="text-gold">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            value={form.telefone}
            onChange={handleChange}
            placeholder="+351 900 000 000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Serviço */}
      <div>
        <label htmlFor="servico" className={labelClass}>
          Serviço <span className="text-gold">*</span>
        </label>
        <select
          id="servico"
          name="servico"
          required
          value={form.servico}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Escolhe um serviço
          </option>
          {services.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Data */}
        <div>
          <label htmlFor="data" className={labelClass}>
            Data <span className="text-gold">*</span>
          </label>
          <input
            id="data"
            name="data"
            type="date"
            required
            min={getTodayStr()}
            value={form.data}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Hora */}
        <div>
          <label htmlFor="hora" className={labelClass}>
            Hora <span className="text-gold">*</span>
          </label>
          <select
            id="hora"
            name="hora"
            required
            value={form.hora}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Escolhe um horário
            </option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Notas */}
      <div>
        <label htmlFor="notas" className={labelClass}>
          Notas Adicionais
        </label>
        <textarea
          id="notas"
          name="notas"
          rows={3}
          value={form.notas}
          onChange={handleChange}
          placeholder="Alguma preferência ou observação..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="bg-red-900/20 border border-red-500/20 rounded-sm px-4 py-3 text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-gold text-dark font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
      >
        {status === "loading" ? "A Enviar..." : "Confirmar Marcação"}
      </button>

      <p className="text-white/30 text-xs text-center">
        Entraremos em contacto para confirmar a tua marcação.
      </p>
    </form>
  );
}

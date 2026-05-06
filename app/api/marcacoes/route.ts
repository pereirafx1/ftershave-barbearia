import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { isAdminAuthenticated } from "@/lib/auth";

const DATA_FILE = path.join(process.cwd(), "data", "marcacoes.json");

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

async function readMarcacoes(): Promise<Marcacao[]> {
  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeMarcacoes(marcacoes: Marcacao[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(marcacoes, null, 2), "utf-8");
}

// GET — admin only
export async function GET() {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const marcacoes = await readMarcacoes();
  return NextResponse.json(marcacoes);
}

// POST — public (create booking)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, telefone, servico, data, hora } = body;

    if (!nome || !telefone || !servico || !data || !hora) {
      return NextResponse.json(
        { error: "Todos os campos obrigatórios devem ser preenchidos" },
        { status: 400 }
      );
    }

    const marcacoes = await readMarcacoes();

    const nova: Marcacao = {
      id: crypto.randomUUID(),
      nome: String(nome).trim(),
      telefone: String(telefone).trim(),
      servico: String(servico).trim(),
      data: String(data).trim(),
      hora: String(hora).trim(),
      notas: String(body.notas ?? "").trim(),
      status: "pendente",
      criadaEm: new Date().toISOString(),
    };

    marcacoes.push(nova);
    await writeMarcacoes(marcacoes);

    return NextResponse.json({ ok: true, id: nova.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

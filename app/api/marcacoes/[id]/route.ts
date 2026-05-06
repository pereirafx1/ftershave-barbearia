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

// PATCH — update status (admin only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const { status } = await req.json();
    const marcacoes = await readMarcacoes();
    const idx = marcacoes.findIndex((m) => m.id === params.id);

    if (idx === -1) {
      return NextResponse.json(
        { error: "Marcação não encontrada" },
        { status: 404 }
      );
    }

    marcacoes[idx].status = status;
    await writeMarcacoes(marcacoes);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// DELETE — remove booking (admin only)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const marcacoes = await readMarcacoes();
    const filtered = marcacoes.filter((m) => m.id !== params.id);

    if (filtered.length === marcacoes.length) {
      return NextResponse.json(
        { error: "Marcação não encontrada" },
        { status: 404 }
      );
    }

    await writeMarcacoes(filtered);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

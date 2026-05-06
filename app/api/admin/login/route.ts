import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD ?? "aftershave2024";

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: "Palavra-passe incorreta" },
        { status: 401 }
      );
    }

    const cookieStore = cookies();
    cookieStore.set("admin_session", getAdminToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

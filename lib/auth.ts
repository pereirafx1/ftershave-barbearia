import { cookies } from "next/headers";

export function getAdminToken(): string {
  const password = process.env.ADMIN_PASSWORD ?? "aftershave2024";
  return Buffer.from(password).toString("base64");
}

export function isAdminAuthenticated(): boolean {
  const cookieStore = cookies();
  const session = cookieStore.get("admin_session");
  return session?.value === getAdminToken();
}

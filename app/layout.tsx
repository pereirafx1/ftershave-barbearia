import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aftershave Barbearia | Setúbal",
  description:
    "Barbearia premium em Setúbal. Cortes de cabelo, barba e tratamentos capilares com os melhores profissionais.",
  keywords: "barbearia, setúbal, corte de cabelo, barba, aftershave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}

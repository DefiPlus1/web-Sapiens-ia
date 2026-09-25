import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sapiens-ia — Inteligencia Artificial para Empresas",
  description: "Agencia de IA premium que automatiza operaciones, implementa agentes inteligentes y construye infraestructura de datos para empresas físicas en Latinoamérica.",
  keywords: "inteligencia artificial, automatización, agentes IA, n8n, Gemini, Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0f172a] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

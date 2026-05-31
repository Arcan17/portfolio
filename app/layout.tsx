import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Bastian Altamirano — Python Backend & Applied AI Engineer",
  description:
    "Python Backend & Applied AI Engineer building production APIs, AI agents and RAG systems. FastAPI, LangGraph, RAG, Celery, PostgreSQL, Docker, CI/CD.",
  keywords: [
    "Python developer",
    "Backend engineer",
    "Applied AI engineer",
    "AI agents",
    "LangGraph",
    "FastAPI",
    "RAG",
    "automation",
    "remote",
    "freelance",
  ],
  authors: [{ name: "Bastian Altamirano" }],
  openGraph: {
    title: "Bastian Altamirano — Python Backend & Applied AI Engineer",
    description:
      "Python Backend & Applied AI Engineer building production APIs, AI agents and RAG systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080b12] text-slate-100 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

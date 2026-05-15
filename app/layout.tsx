import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bastian Altamirano — Python Backend Developer",
  description:
    "Python Backend Developer building automation, data processing and AI-powered tools. FastAPI, LangChain, OpenAI, ChromaDB, Streamlit, Docker.",
  keywords: [
    "Python developer",
    "FastAPI",
    "LangChain",
    "OpenAI",
    "RAG",
    "automation",
    "data processing",
    "freelance",
  ],
  authors: [{ name: "Bastian Altamirano" }],
  openGraph: {
    title: "Bastian Altamirano — Python Backend Developer",
    description:
      "Python Backend Developer building automation, data processing and AI-powered tools.",
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
      <body className="bg-[#080b12] text-slate-100 antialiased">{children}</body>
    </html>
  );
}

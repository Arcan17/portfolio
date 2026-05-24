"use client";

import Image from "next/image";
import { ExternalLink, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projectMeta = [
  {
    tech: ["LangGraph","FastAPI","Next.js","PostgreSQL","Celery","Redis","SSE","Docker"],
    github: "https://github.com/Arcan17/agentforge",
    release: "https://github.com/Arcan17/agentforge",
    screenshot: "https://raw.githubusercontent.com/Arcan17/agentforge/main/docs/screenshots/01-dashboard.png",
    screenshotAlt: "AgentForge — multi-agent dashboard showing task pipeline and live events",
    badge: "latest",
  },
  {
    tech: ["Django","DRF","PostgreSQL","Celery","Redis","JWT","pytest","Docker","GitHub Actions"],
    github: "https://github.com/Arcan17/peopleops-workflow-api",
    release: "https://github.com/Arcan17/peopleops-workflow-api/releases/tag/v1.0.0",
    screenshot: "https://raw.githubusercontent.com/Arcan17/peopleops-workflow-api/main/docs/images/swagger_ui.png",
    screenshotAlt: "PeopleOps Workflow API — Swagger UI showing HR endpoints",
    badge: "v1.0.0",
  },
  {
    tech: ["FastAPI","ChromaDB","PostgreSQL","OpenAI","spaCy","Docker","GitHub Actions"],
    github: "https://github.com/Arcan17/privrag",
    release: "https://github.com/Arcan17/privrag",
    screenshot: "",
    screenshotAlt: "PrivRAG — privacy-preserving RAG pipeline",
    badge: "latest",
  },
  {
    tech: ["FastAPI","LangChain","OpenAI","ChromaDB","SQLite","Streamlit","Docker","GitHub Actions"],
    github: "https://github.com/Arcan17/ai-support-bot",
    release: "https://github.com/Arcan17/ai-support-bot/releases/tag/v2.0.1",
    screenshot: "https://raw.githubusercontent.com/Arcan17/ai-support-bot/main/docs/screenshots/chat-with-rag.png",
    screenshotAlt: "AI Support Bot — chat interface showing RAG response with cited sources",
    badge: "v2.0.1",
  },
  {
    tech: ["Python","Scrapling","Polars","DuckDB","FastAPI","Streamlit","Docker","CI/CD"],
    github: "https://github.com/Arcan17/real-estate-etl",
    release: "https://real-estate-etl-production.up.railway.app",
    screenshot: "",
    screenshotAlt: "Real Estate ETL — dashboard with property listings",
    badge: "live",
  },
  {
    tech: ["FastAPI","Streamlit","Polars","SQLAlchemy","APScheduler","Docker","GitHub Actions"],
    github: "https://github.com/Arcan17/automation-toolkit",
    release: "https://github.com/Arcan17/automation-toolkit/releases/tag/v1.0.0",
    screenshot: "",
    screenshotAlt: "Automation Toolkit — data processing dashboard",
    badge: "v1.0.0",
  },
];

const techColors: Record<string, string> = {
  FastAPI: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Django: "bg-green-500/10 text-green-400 border-green-500/20",
  DRF: "bg-red-500/10 text-red-400 border-red-500/20",
  PostgreSQL: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Celery: "bg-lime-500/10 text-lime-400 border-lime-500/20",
  Redis: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  JWT: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  LangGraph: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Next.js": "bg-slate-500/10 text-slate-300 border-slate-500/20",
  SSE: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  spaCy: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  Scrapling: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  DuckDB: "bg-yellow-600/10 text-yellow-400 border-yellow-600/20",
  "CI/CD": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  pytest: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  LangChain: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  OpenAI: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  ChromaDB: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  SQLite: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  SQLAlchemy: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Streamlit: "bg-red-500/10 text-red-400 border-red-500/20",
  Docker: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "GitHub Actions": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  Polars: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  APScheduler: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4">
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
      <p className="text-slate-400 max-w-xl mx-auto text-base">{subtitle}</p>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag={p.tag} title={p.title} subtitle={p.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projectMeta.map((meta, i) => {
            const item = p.items[i];
            return (
              <div key={item.title} className="flex flex-col rounded-2xl border border-[#1e2d45] bg-[#0f1623] overflow-hidden card-hover">
                {/* Screenshot */}
                <div className="relative w-full aspect-[16/9] bg-[#080b12] overflow-hidden">
                  {meta.screenshot ? (
                    <Image
                      src={meta.screenshot}
                      alt={meta.screenshotAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-600">
                      <div className="w-16 h-16 rounded-xl border-2 border-dashed border-[#1e2d45] flex items-center justify-center">
                        <Tag size={24} className="text-slate-700" />
                      </div>
                      <span className="text-sm">{p.screenshotSoon}</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur text-xs font-mono text-slate-300 border border-white/10">
                    {meta.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{item.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {meta.tech.map((tech) => {
                      const cls = techColors[tech] ?? "bg-slate-500/10 text-slate-400 border-slate-500/20";
                      return (
                        <span key={tech} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${cls}`}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-[#1e2d45]">
                    <a href={meta.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors font-medium">
                      <GithubIcon />
                      {p.githubLabel}
                    </a>
                    <span className="text-[#1e2d45]">|</span>
                    <a href={meta.release} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                      <ExternalLink size={14} />
                      {p.releaseLabel}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a href="https://github.com/Arcan17" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors">
            <GithubIcon />
            {p.moreGithub}
          </a>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

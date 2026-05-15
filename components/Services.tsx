import { SectionHeader } from "./Projects";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "⚡",
    title: "Python API Development",
    description:
      "Production-ready REST APIs with FastAPI — async, validated, documented with Swagger. SQLite, PostgreSQL or any SQL backend.",
  },
  {
    icon: "🤖",
    title: "AI Chatbots with RAG",
    description:
      "Chatbots that answer questions over your documents using LangChain, OpenAI and ChromaDB. Multi-turn memory, source citations.",
  },
  {
    icon: "📊",
    title: "Data Automation",
    description:
      "End-to-end data pipelines — ingest, transform, validate and export. Scheduled tasks, alerts and Streamlit dashboards.",
  },
  {
    icon: "📁",
    title: "Excel / CSV Processing",
    description:
      "Automated reports, cleaning workflows, deduplication, format normalization and Excel generation with Python and Polars.",
  },
  {
    icon: "🕷️",
    title: "Web Scraping & Data Pipelines",
    description:
      "Scraping with BeautifulSoup or Playwright, structured data extraction, storage and scheduled runs with Docker.",
  },
  {
    icon: "🔗",
    title: "Bot & API Integrations",
    description:
      "Telegram bots, WhatsApp webhooks, Slack integrations and third-party API connectors for business automation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#0a0e18]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="What I build"
          title="Services"
          subtitle="Practical, client-ready solutions for automation, data and AI use cases."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl border border-[#1e2d45] bg-[#0f1623] card-hover"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

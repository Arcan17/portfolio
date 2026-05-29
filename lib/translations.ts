export type Lang = "en" | "es";

const translations = {
  en: {
    nav: {
      projects: "Projects",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Available for remote roles",
      headline1: "AI Backend Engineer",
      headline2: "building RAG systems, multi-agent pipelines and Python APIs.",
      sub: "I build <b>production RAG pipelines</b>, <b>multi-agent AI systems</b>, <b>FastAPI backends</b>, and <b>data automation tools</b>.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
    },
    projects: {
      tag: "Work",
      title: "Projects",
      subtitle:
        "Production-grade tools built with modern Python and AI — open source and documented.",
      moreGithub: "More on GitHub",
      screenshotSoon: "Screenshot coming soon",
      githubLabel: "GitHub",
      releaseLabel: "Release",
      items: [
        {
          title: "AgentForge",
          description:
            "Production-grade multi-agent research pipeline built with LangGraph and FastAPI. A task description becomes a structured report in minutes: Planner → Researcher → Analyst → Critic → Writer, with automatic revision loops, human-in-the-loop approval via SSE streaming, source citations, cost tracking and a Next.js dashboard. Celery + Redis keeps the API responsive while agents run in the background.",
        },
        {
          title: "PrivRAG",
          description:
            "Privacy-preserving RAG pipeline for enterprise documents — live on Railway. Strips Chilean RUT, emails and phone numbers before embedding: raw PII never reaches the LLM. Local ONNX embeddings via fastembed (no API key needed). SHA256 query cache (30–45% hit rate), cosine threshold filtering (0.75), and a retrieval eval suite with Precision@1 validation on a controlled dataset. 61 automated tests.",
        },
        {
          title: "IntegrationOps",
          description:
            "Backend platform for data ingestion, validation, async processing, webhooks and audit trail — modeled as a realistic internal company tool. CSV/XLSX upload with row-level validation, async Celery+Redis jobs with bounded retries, HMAC-SHA256 signed webhooks, CSV/XLSX exports and a full operational audit log. JWT auth with role-based access control (admin/operator/viewer). Includes a Next.js + TypeScript dashboard covering uploads, validation errors, jobs, exports and audit logs. Alembic migrations, Docker Compose, pytest suite, GitHub Actions CI.",
        },
        {
          title: "Real Estate ETL Pipeline",
          description:
            "End-to-end ETL for Chilean real estate listings. Scrapes ~240 live listings with Scrapling (anti-bot fingerprinting), normalizes data with Polars, loads into DuckDB, exposes a FastAPI query layer with Excel/XLSX export and a Streamlit dashboard with interactive filters. Live on Railway.",
        },
        {
          title: "PeopleOps Workflow API",
          description:
            "Production-grade HR workflow API built with Django REST Framework. Manages the full lifecycle of employee requests: creation, approval and rejection with role-based access control (admin / manager / employee). Includes JWT auth, Celery async tasks, PostgreSQL, magic-bytes file validation, aggregated reports with CSV export and 89 automated tests at 92% coverage.",
        },
        {
          title: "AI Support Bot",
          description:
            "AI chatbot API with multi-turn memory and RAG over uploaded documents. Users upload TXT, PDF or CSV files, ask questions and receive answers with cited sources. Built with FastAPI, LangChain, OpenAI and ChromaDB. Includes a Streamlit demo UI, sample FAQ and 58 automated tests.",
        },
        {
          title: "Automation Toolkit",
          description:
            "Full-stack data automation platform. Upload CSV/Excel files, clean data automatically — remove duplicates, fix missing values, normalize formats — generate Excel reports and schedule recurring tasks with optional alerts. Production-ready with FastAPI backend, Streamlit dashboard and Docker support.",
        },
      ],
    },
    services: {
      tag: "What I build",
      title: "Services",
      subtitle:
        "From a single automation script to a full backend system — I build things that actually ship.",
      items: [
        {
          icon: "🤖",
          title: "Multi-Agent AI Pipelines",
          description:
            "Autonomous research and processing workflows built with LangGraph. Agents that plan, search the web, analyse, self-critique and write — with human approval gates and real-time streaming.",
        },
        {
          icon: "⚡",
          title: "Backend APIs",
          description:
            "Production REST APIs with Django REST Framework or FastAPI — role-based access, JWT auth, PostgreSQL, async tasks with Celery and full Swagger documentation.",
        },
        {
          icon: "🔒",
          title: "Privacy-Preserving RAG",
          description:
            "Document Q&A systems that strip PII before it reaches the LLM. RUT, email and phone detection, semantic chunking, ChromaDB vector search and response caching.",
        },
        {
          icon: "📊",
          title: "Data Automation & ETL",
          description:
            "End-to-end pipelines that ingest, clean, transform and export your data. Scheduled tasks, multi-channel alerts (Telegram, Email, WhatsApp) and Streamlit dashboards.",
        },
        {
          icon: "🕷️",
          title: "Web Scraping & Reporting",
          description:
            "Automated data collection with anti-bot fingerprinting, normalization with Polars, storage in PostgreSQL or DuckDB, and Excel/CSV exports ready to share.",
        },
        {
          icon: "🔗",
          title: "Bot & API Integrations",
          description:
            "Telegram bots, WhatsApp webhooks and third-party API connectors that plug into your existing systems and automate repetitive business tasks.",
        },
      ],
    },
    about: {
      tag: "Background",
      title: "About me",
      subtitle:
        "AI Backend Engineer focused on RAG systems, multi-agent pipelines and production Python APIs.",
      p1: "I build production-ready RAG pipelines, multi-agent LangGraph systems and Python backend APIs. Deployed live systems on Railway — including PrivRAG, a privacy-preserving RAG API with PII stripping, retrieval eval tests and SHA256 caching.",
      p2: "My work focuses on real engineering problems: making LLMs useful on private documents without leaking sensitive data, building agent pipelines that actually complete tasks, and shipping backends that are tested, Dockerized and documented.",
      p3: "Every project I ship includes documentation, tests and a clear README — because production code needs to be maintainable, not just functional.",
      btnGithub: "GitHub profile",
      btnLinkedin: "LinkedIn",
      stackCategories: ["Backend", "AI / Data", "Frontend", "DevOps"],
    },
    contact: {
      tag: "Get in touch",
      title: "Contact",
      subtitle:
        "Open to full-time backend/AI roles and freelance projects. Let's talk about what you need to build.",
      availability:
        "Available for remote work · Full-time or freelance · Python · Django · FastAPI · AI",
    },
    footer: {
      copyright: "Bastian Altamirano",
    },
  },

  es: {
    nav: {
      projects: "Proyectos",
      services: "Servicios",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para roles remotos",
      headline1: "AI Backend Engineer",
      headline2:
        "construyendo sistemas RAG, pipelines multi-agente y APIs Python.",
      sub: "Construyo <b>pipelines RAG de producción</b>, <b>sistemas multi-agente con IA</b>, <b>backends con FastAPI</b> y <b>herramientas de automatización de datos</b>.",
      btnProjects: "Ver Proyectos",
      btnContact: "Contactar",
    },
    projects: {
      tag: "Trabajo",
      title: "Proyectos",
      subtitle:
        "Herramientas de nivel productivo construidas con Python moderno e IA — open source y documentadas.",
      moreGithub: "Más en GitHub",
      screenshotSoon: "Captura próximamente",
      githubLabel: "GitHub",
      releaseLabel: "Release",
      items: [
        {
          title: "AgentForge",
          description:
            "Pipeline multi-agente de nivel productivo construido con LangGraph y FastAPI. Una descripción de tarea se convierte en un informe estructurado en minutos: Planificador → Investigador → Analista → Crítico → Escritor, con loops de revisión automáticos, aprobación humana en el loop vía SSE, citas de fuentes, tracking de costos y dashboard en Next.js. Celery + Redis mantiene la API responsiva mientras los agentes ejecutan en segundo plano.",
        },
        {
          title: "PrivRAG",
          description:
            "Pipeline RAG con privacidad preservada para documentos empresariales — en producción en Railway. Elimina RUT chileno, emails y teléfonos antes del embedding: los datos sensibles nunca llegan al LLM. Embeddings locales ONNX sin API key. Caché SHA256 (30–45% hit rate), filtrado por umbral coseno (0.75) y suite de evaluación RAG con Precision@1 sobre dataset controlado. 61 tests automatizados.",
        },
        {
          title: "IntegrationOps",
          description:
            "Plataforma backend para ingesta de datos, validación, procesamiento async, webhooks y auditoría operacional — modelada como una herramienta interna real de empresa. Carga CSV/XLSX con validación por fila, jobs async Celery+Redis con reintentos acotados, webhooks firmados HMAC-SHA256, exportaciones CSV/XLSX y un log de auditoría completo. Auth JWT con control de acceso por roles (admin/operador/viewer). Incluye dashboard Next.js + TypeScript con vistas de uploads, errores de validación, jobs, exports y logs. Migraciones Alembic, Docker Compose, suite pytest, CI con GitHub Actions.",
        },
        {
          title: "Real Estate ETL Pipeline",
          description:
            "ETL end-to-end para listados inmobiliarios en Chile. Scraping de ~240 propiedades con Scrapling (anti-fingerprinting), normalización con Polars, carga en DuckDB, endpoint FastAPI con exportación Excel/XLSX y dashboard Streamlit con filtros interactivos. En producción en Railway.",
        },
        {
          title: "PeopleOps Workflow API",
          description:
            "API de RRHH de nivel productivo construida con Django REST Framework. Gestiona el ciclo completo de solicitudes de empleados: creación, aprobación y rechazo con control de acceso por roles (admin / manager / empleado). Incluye auth JWT, tareas async con Celery, PostgreSQL, validación de archivos por magic bytes, reportes con exportación CSV y 89 tests automatizados con 92% de cobertura.",
        },
        {
          title: "AI Support Bot",
          description:
            "API de chatbot con memoria multi-turno y RAG sobre documentos subidos. Los usuarios cargan archivos TXT, PDF o CSV, hacen preguntas y reciben respuestas con fuentes citadas. Construido con FastAPI, LangChain, OpenAI y ChromaDB. Incluye UI demo con Streamlit, FAQ de ejemplo y 58 tests automatizados.",
        },
        {
          title: "Automation Toolkit",
          description:
            "Plataforma de automatización de datos full-stack. Sube archivos CSV/Excel, limpia datos automáticamente — elimina duplicados, corrige valores faltantes, normaliza formatos — genera reportes Excel y programa tareas recurrentes con alertas opcionales. Listo para producción con backend FastAPI, dashboard Streamlit y soporte Docker.",
        },
      ],
    },
    services: {
      tag: "Qué construyo",
      title: "Servicios",
      subtitle:
        "Desde un script de automatización hasta un sistema backend completo — construyo cosas que realmente se despliegan.",
      items: [
        {
          icon: "🤖",
          title: "Pipelines Multi-Agente con IA",
          description:
            "Flujos autónomos de investigación y procesamiento con LangGraph. Agentes que planifican, buscan en la web, analizan, se auto-critican y redactan — con aprobación humana y streaming en tiempo real.",
        },
        {
          icon: "⚡",
          title: "APIs Backend",
          description:
            "APIs REST con Django REST Framework o FastAPI — control de acceso por roles, auth JWT, PostgreSQL, tareas async con Celery y documentación Swagger completa.",
        },
        {
          icon: "🔒",
          title: "RAG con Privacidad Preservada",
          description:
            "Sistemas de preguntas sobre documentos que eliminan datos sensibles antes de llegar al LLM. Detección de RUT, email y teléfono, chunking semántico y caché de respuestas.",
        },
        {
          icon: "📊",
          title: "Automatización de Datos y ETL",
          description:
            "Pipelines end-to-end que ingestan, limpian, transforman y exportan tus datos. Tareas programadas, alertas multi-canal (Telegram, Email, WhatsApp) y dashboards Streamlit.",
        },
        {
          icon: "🕷️",
          title: "Scraping y Reportes Automáticos",
          description:
            "Recolección automatizada con anti-fingerprinting, normalización con Polars, almacenamiento en PostgreSQL o DuckDB y exportación Excel/CSV lista para compartir.",
        },
        {
          icon: "🔗",
          title: "Bots e Integraciones de APIs",
          description:
            "Bots de Telegram, webhooks de WhatsApp y conectores de APIs de terceros que se integran a tus sistemas actuales y automatizan tareas repetitivas del negocio.",
        },
      ],
    },
    about: {
      tag: "Perfil",
      title: "Sobre mí",
      subtitle:
        "AI Backend Engineer especializado en sistemas RAG, pipelines multi-agente y APIs Python de producción.",
      p1: "Construyo pipelines RAG de producción, sistemas multi-agente con LangGraph y backends Python. Tengo sistemas desplegados en Railway, incluyendo PrivRAG, una API RAG con preservación de privacidad, PII stripping, tests de evaluación de retrieval y caché SHA256.",
      p2: "Mi trabajo se enfoca en problemas reales de ingeniería: hacer que los LLMs sean útiles sobre documentos privados sin filtrar datos sensibles, construir pipelines de agentes que completan tareas reales, y entregar backends con tests, Docker y documentación.",
      p3: "Cada proyecto que entrego incluye documentación, tests y un README claro — porque el código de producción necesita ser mantenible, no solo funcional.",
      btnGithub: "Perfil en GitHub",
      btnLinkedin: "LinkedIn",
      stackCategories: ["Backend", "IA / Datos", "Frontend", "DevOps"],
    },
    contact: {
      tag: "Contacto",
      title: "Contacto",
      subtitle:
        "Abierto a roles backend/IA full-time y proyectos freelance. Hablemos sobre lo que necesitas construir.",
      availability:
        "Disponible para trabajo remoto · Full-time o freelance · Python · Django · FastAPI · IA",
    },
    footer: {
      copyright: "Bastian Altamirano",
    },
  },
} as const;

export default translations;

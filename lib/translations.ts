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
      badge: "Available for freelance projects",
      headline1: "Python Backend Developer",
      headline2: "building automation, data processing and AI-powered tools.",
      sub: "I build <b>multi-agent AI pipelines</b>, <b>Django &amp; FastAPI backends</b>, <b>privacy-preserving RAG systems</b>, and <b>data automation tools</b>.",
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
            "Privacy-preserving RAG pipeline for enterprise documents. Strips Chilean RUT, emails and phone numbers before embedding — sensitive data never reaches the LLM. Features semantic chunking, SHA256 token cache (30–45% cache hit rate), ChromaDB vector search with cosine threshold, Telegram automation and a /metrics endpoint. Built for legal, HR and healthcare use cases.",
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
        "Practical, client-ready solutions for automation, data and AI use cases.",
      items: [
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
      ],
    },
    about: {
      tag: "Background",
      title: "About me",
      subtitle:
        "Python developer focused on building practical, production-ready tools.",
      p1: "I am a Python backend developer focused on practical automation tools, APIs, data workflows and AI-powered systems. I build portfolio-ready and client-ready solutions using Django REST Framework, FastAPI, PostgreSQL, Celery, Docker and modern AI APIs.",
      p2: "My work centers on solving real business problems: automating repetitive data tasks, building chatbots that answer questions over internal documents, and exposing clean APIs that integrate with existing systems.",
      p3: "Every project I ship includes documentation, tests and a clear README — because production code needs to be maintainable, not just functional.",
      btnGithub: "GitHub profile",
      btnLinkedin: "LinkedIn",
      stackCategories: ["Backend", "AI / Data", "Frontend", "DevOps"],
    },
    contact: {
      tag: "Get in touch",
      title: "Contact",
      subtitle:
        "Open to freelance projects on Workana and Upwork. Let's talk about what you need to build.",
      availability:
        "Available for remote freelance work · Python · FastAPI · AI tools",
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
      badge: "Disponible para proyectos freelance",
      headline1: "Python Backend Developer",
      headline2:
        "construyendo automatización, procesamiento de datos y herramientas con IA.",
      sub: "Construyo <b>pipelines multi-agente con IA</b>, <b>backends con Django y FastAPI</b>, <b>sistemas RAG con privacidad preservada</b> y <b>herramientas de automatización de datos</b>.",
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
            "Pipeline RAG con preservación de privacidad para documentos empresariales. Elimina RUT chileno, emails y teléfonos antes del embedding — los datos sensibles nunca llegan al LLM. Incluye chunking semántico, caché SHA256 de tokens (30–45% de hit rate), búsqueda vectorial ChromaDB con umbral coseno, automatización vía Telegram y endpoint /metrics. Diseñado para casos legales, RRHH y salud.",
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
        "Soluciones prácticas y listas para clientes en automatización, datos e IA.",
      items: [
        {
          icon: "⚡",
          title: "Desarrollo de APIs Python",
          description:
            "APIs REST listas para producción con FastAPI — async, validadas, documentadas con Swagger. SQLite, PostgreSQL o cualquier backend SQL.",
        },
        {
          icon: "🤖",
          title: "Chatbots de IA con RAG",
          description:
            "Chatbots que responden preguntas sobre tus documentos usando LangChain, OpenAI y ChromaDB. Memoria multi-turno, citas de fuentes.",
        },
        {
          icon: "📊",
          title: "Automatización de Datos",
          description:
            "Pipelines de datos end-to-end — ingesta, transformación, validación y exportación. Tareas programadas, alertas y dashboards en Streamlit.",
        },
        {
          icon: "📁",
          title: "Procesamiento Excel / CSV",
          description:
            "Reportes automatizados, flujos de limpieza, deduplicación, normalización de formatos y generación de Excel con Python y Polars.",
        },
        {
          icon: "🕷️",
          title: "Web Scraping y Pipelines",
          description:
            "Scraping con BeautifulSoup o Playwright, extracción estructurada de datos, almacenamiento y ejecuciones programadas con Docker.",
        },
        {
          icon: "🔗",
          title: "Integración de Bots y APIs",
          description:
            "Bots de Telegram, webhooks de WhatsApp, integraciones de Slack y conectores de API de terceros para automatización empresarial.",
        },
      ],
    },
    about: {
      tag: "Perfil",
      title: "Sobre mí",
      subtitle:
        "Desarrollador Python enfocado en construir herramientas prácticas y listas para producción.",
      p1: "Soy un desarrollador backend Python enfocado en herramientas prácticas de automatización, APIs, flujos de datos y sistemas impulsados por IA. Construyo soluciones listas para portafolio y clientes usando Django REST Framework, FastAPI, PostgreSQL, Celery, Docker y APIs modernas de IA.",
      p2: "Mi trabajo se centra en resolver problemas reales de negocio: automatizar tareas de datos repetitivas, construir chatbots que respondan preguntas sobre documentos internos y exponer APIs limpias que se integren con sistemas existentes.",
      p3: "Cada proyecto que entrego incluye documentación, tests y un README claro — porque el código de producción necesita ser mantenible, no solo funcional.",
      btnGithub: "Perfil en GitHub",
      btnLinkedin: "LinkedIn",
      stackCategories: ["Backend", "IA / Datos", "Frontend", "DevOps"],
    },
    contact: {
      tag: "Contacto",
      title: "Contacto",
      subtitle:
        "Disponible para proyectos freelance en Workana y Upwork. Hablemos sobre lo que necesitas construir.",
      availability:
        "Disponible para trabajo freelance remoto · Python · FastAPI · Herramientas de IA",
    },
    footer: {
      copyright: "Bastian Altamirano",
    },
  },
} as const;

export default translations;

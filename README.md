# Portfolio — Bastian Altamirano

Personal portfolio website built with Next.js 14, TypeScript and Tailwind CSS.  
Deploy-ready for Vercel.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styles:** Tailwind CSS v3
- **Icons:** Lucide React
- **Deploy:** Vercel

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — GitHub

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import the repository
4. Click Deploy — no env vars needed

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (all sections)
│   └── globals.css      # Tailwind + custom CSS
├── components/
│   ├── Navbar.tsx       # Sticky responsive nav
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Project cards
│   ├── Services.tsx     # Services grid
│   ├── About.tsx        # About + tech stack
│   ├── Contact.tsx      # Contact links
│   └── Footer.tsx       # Footer
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Adding a new project

Edit `components/Projects.tsx` — add an entry to the `projects` array:

```ts
{
  title: "My New Project",
  description: "What it does and why it matters.",
  tech: ["FastAPI", "Docker"],
  github: "https://github.com/...",
  release: "https://github.com/.../releases/tag/v1.0.0",
  screenshot: "https://raw.githubusercontent.com/...",
  screenshotAlt: "Description of screenshot",
  badge: "v1.0.0",
}
```

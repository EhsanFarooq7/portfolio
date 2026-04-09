# Muhammad Ehsan Farooq — Portfolio

A sleek, dark-techy Next.js portfolio with animated UI, custom cursor, and scroll-reveal effects.

## Tech Used
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (installed, ready to extend)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customize

| What | Where |
|------|-------|
| Your email | `components/Contact.tsx` → `href="mailto:..."` |
| Social links | `components/Contact.tsx` → `socials` array |
| Profile photo | Replace `public/profile.jpg` |
| Projects | `components/Projects.tsx` → `projects` array |
| Skills | `components/Skills.tsx` → `skills` array |
| Stats (Hero) | `components/Hero.tsx` → stats section |
| Upwork stats | `components/Upwork.tsx` → `stats` array |

## Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

That's it — Vercel auto-detects Next.js and deploys instantly.
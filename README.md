# Sumit Verma — Portfolio

A fast, responsive personal portfolio for **Sumit Verma — AI/ML Engineer & Full-Stack Software Engineer**. Built with React, Vite, and Tailwind CSS, with a deliberately restrained dark theme and a single teal accent.

🔗 Live: [sumitverma.me](https://sumitverma.me) &nbsp;·&nbsp; Repo: [github.com/sumitverma21/Portfolio](https://github.com/sumitverma21/Portfolio)

## Tech Stack

- **React 18** — UI
- **Vite 5** — dev server and build tooling
- **Tailwind CSS 3** — utility-first styling (custom theme tokens)
- **Framer Motion** — subtle scroll/entrance animations
- **Font Awesome** (CDN) — icons

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build into build/
npm run preview  # preview the production build
```

## Project Structure

```
portfolio/
├── index.html              # Vite entry HTML
├── vite.config.js          # Vite config (React plugin, outDir: build)
├── tailwind.config.js      # Tailwind theme tokens (colors, fonts)
├── postcss.config.js       # PostCSS (tailwindcss + autoprefixer)
├── public/                 # static assets served at /
│   ├── Sumit_Verma_Resume.pdf
│   ├── fonts/              # Geist Pixel Circle display font (.woff2)
│   ├── favicon.ico
│   ├── logo192.png
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── main.jsx            # app entry (imports global stylesheet)
    ├── App.jsx             # section composition
    ├── styles/
    │   └── index.css       # Tailwind directives + base/component layers
    └── components/         # all styled with Tailwind utility classes
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Design System

Theme tokens live in `tailwind.config.js` and reusable classes (`.container-x`, `.section-pad`, `.section-label`, `.section-title`, `.btn`) in `src/styles/index.css`:

- **Background** — deep warm slate (`#101314`), with raised/elevated surfaces
- **Accent** — a single muted teal (`#4db6a4`), used sparingly
- **Type** — system sans for body, monospace for labels/tags, and the **Geist Pixel Circle** display font for the hero title

> The hero title uses `GeistPixel-Circle.woff2` from `public/fonts/`. If that file is absent, the title falls back to the system sans font (`font-display: swap`).

## Sections

- **Hero** — intro, positioning, social links
- **About** — summary, quick facts, resume download
- **Skills** — Deep Learning & ML, Generative AI & NLP, API Development & Tools, Languages & Data, Statistical & Core AI
- **Projects** — CodeGenie, PresenceIQ, Samyukt, SyncSpace
- **Recognition** — awards, patent, education, certifications
- **Contact** — email, LinkedIn, GitHub, location

## Deployment

The production build outputs to `build/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). On Vercel/Netlify, set the build command to `npm run build` and the output/publish directory to `build`. The site is served at the custom domain `sumitverma.me`.

## License

MIT

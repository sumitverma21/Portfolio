# Sumit Verma — Portfolio

A fast, responsive personal portfolio for **Sumit Verma — AI/ML Engineer** (Generative AI · Computer Vision · Multi-Agent Systems). Built with React and Vite, with a deliberately restrained dark theme.

## Tech Stack

- **React 18** — UI
- **Vite 5** — dev server and build tooling
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
├── public/                 # static assets served at /
│   ├── Sumit_Verma_Resume.pdf
│   ├── favicon.ico
│   ├── logo192.png
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── main.jsx            # app entry
    ├── App.jsx             # section composition
    ├── styles/
    │   └── index.css       # global design system (dark, single accent)
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Projects.jsx / .css
        ├── Achievements.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## Sections

- **Hero** — intro, positioning, social links
- **About** — summary, quick facts, résumé download
- **Skills** — Deep Learning & ML, Generative AI & NLP, API Development & Tools, Languages & Data, Statistical & Core AI
- **Projects** — CodeGenie, PresenceIQ, Samyukt, SyncSpace
- **Achievements** — awards, patent, education, certifications
- **Contact** — email, LinkedIn, GitHub, location

## Deployment

The production build outputs to `build/`. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.). On Vercel/Netlify, set the build command to `npm run build` and the publish directory to `build`.

## License

MIT

# mrdevsahil — portfolio

Personal portfolio for **Sahil** — Android & systems developer, Guwahati, IN.

Live → **https://mrdevsahil.github.io**

---

## Modes

| Mode | Description |
|------|-------------|
| **Recruiter mode** | Terminal-style tabbed UI — about / projects / stack / blog / contact |
| **Wow mode** | Five cinematic full-screen scenes — Three.js star field, glitch animations, orbit diagram |

Chosen mode persists in `localStorage` across refreshes. Switch via the button at bottom-right.

---

## Stack

- **Vite 7** — dev server + static build to `/dist`
- **React 19** — SPA with React Router v7
- **TypeScript 5** — strict mode throughout
- **Three.js** — Wow mode hero background, split into its own chunk
- **gh-pages** — deploys `/dist` to the `master` branch (GitHub Pages source)

No Tailwind, no CSS framework — pure CSS custom properties + utility classes in `src/index.css`.

---

## Project structure

```
mrdevsahil/
├── index.html                           # Vite entry — loads fonts, mounts #root
├── public/
│   └── 404.html                         # SPA redirect trick for gh-pages deep links
├── src/
│   ├── main.tsx                         # React 19 root, BrowserRouter, SPA redirect handler
│   ├── App.tsx                          # Routes: / (Portfolio) + /projects/:slug
│   ├── index.css                        # CSS vars, resets, keyframes, animation utilities
│   ├── lib/
│   │   └── data.ts                      # All content: projects, blog, contact, wow data
│   └── components/
│       ├── ui.tsx                       # Shared primitives: BlockHeader, Prompt, StatusBadge, Tag, Cursor
│       ├── recruiter/
│       │   └── RecruiterMode.tsx        # Tab shell for recruiter mode
│       ├── sections/                    # Recruiter tab content
│       │   ├── About.tsx
│       │   ├── Projects.tsx             # useNavigate for subapp routing
│       │   ├── Stack.tsx
│       │   ├── Blog.tsx
│       │   └── Contact.tsx
│       ├── subapps/                     # Project detail pages
│       │   ├── ProjectPage.tsx          # Route shell — useParams + SubappContent switch
│       │   ├── SuperAppOverview.tsx
│       │   ├── EdtechCrmOverview.tsx
│       │   └── AiCompanionOverview.tsx
│       └── wow/
│           ├── WowMode.tsx              # Scroll container + section-dot nav
│           ├── GlitchOverlay.tsx        # Mode-switch flash transition
│           ├── ThreeHeroBG.tsx          # Three.js canvas (rAF, mouse, cleanup)
│           ├── OrbitNode.tsx            # Single orbiting tech label (rAF)
│           └── scenes/
│               ├── WowHero.tsx          # Scene 01 — IDENTITY
│               ├── WowOrigin.tsx        # Scene 02 — ORIGIN
│               ├── WowProjects.tsx      # Scene 03 — WORKS
│               ├── WowStack.tsx         # Scene 04 — STACK
│               └── WowTransmission.tsx  # Scene 05 — TRANSMISSION
├── vite.config.ts
├── tsconfig.app.json
├── tsconfig.node.json
└── package.json                         # deploy: gh-pages -d dist -b master
```

---

## Local dev

```bash
npm install
npm run dev        # → http://localhost:5173
```

## Deploy

```bash
npm run deploy
# Runs: tsc -b && vite build → gh-pages -d dist -b master
# GitHub Pages serves master branch → mrdevsahil.github.io
```

---

## Adding content

All portfolio data lives in **`src/lib/data.ts`** — edit there, never in components.

To add a new subapp project page, add a component in `src/components/subapps/`
and register it in the `SubappContent` switch inside `ProjectPage.tsx`.

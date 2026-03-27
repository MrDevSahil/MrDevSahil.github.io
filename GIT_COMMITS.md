# Git Commit Guide

Run these in order from the root of the repo after replacing your source branch contents.
Each commit is one logical unit of work for a clean, readable history.

---

## Step 0 — Switch to source branch and clean old files

```bash
git checkout source          # or whatever your source branch is named
git rm -rf src public index.html vite.config.ts tsconfig*.json eslint.config.js package.json README.md
# (keep .github/ and .gitignore if they're already there)
```

---

## Step 1 — Scaffold & config

```bash
git add \
  package.json \
  vite.config.ts \
  tsconfig.json \
  tsconfig.app.json \
  tsconfig.node.json \
  eslint.config.js \
  .gitignore \
  index.html \
  README.md

git commit -m "chore: scaffold Vite + React 19 + TypeScript project

- Vite 7 with @vitejs/plugin-react
- React 19.2 + react-dom 19.2
- TypeScript 5.9 strict mode, paths alias @/* → src/*
- react-router-dom 7 for /projects/:slug routing
- three + @types/three for Wow-mode hero canvas
- gh-pages 6 for deploy script: gh-pages -d dist -b master
- vite.config.ts: base '/', @/ alias, Three.js manual chunk split
- index.html: Google Fonts preconnect + IBM Plex Mono / Bebas Neue / Barlow Condensed
- public/404.html: SPA redirect trick for gh-pages deep link support"
```

---

## Step 2 — Global styles & CSS custom properties

```bash
git add src/index.css

git commit -m "style: add global CSS — design tokens, resets, keyframes, animation utilities

CSS custom properties (design tokens):
  --font-mono/bebas/barlow, --bg/bg2/border/dim/muted/text/bright/accent/amber/blue/red

Base resets: box-sizing, body font/color/line-height, scroll-behavior

CRT scanlines: body::before fixed repeating-linear-gradient overlay z-index 9999

Wow-mode CSS:
  .wow-scroll: scroll-snap-type y mandatory, hidden scrollbar
  .wow-section: height 100vh, scroll-snap-align start, overflow hidden

Keyframes: blink, fadein, fadeUp, revealUp, glitchFx, ticker, pulse,
           floatY, scanH, modeFlash, drawLine

Animation utility classes: .animate-blink, .animate-fadein, .animate-fadeUp,
  .animate-revealUp, .animate-glitch, .animate-ticker, .animate-pulse-glow,
  .animate-floatY, .animate-scanH, .animate-modeFlash, .animate-drawLine"
```

---

## Step 3 — Data layer

```bash
git add src/lib/data.ts

git commit -m "feat(data): add src/lib/data.ts as single source of truth for all content

Types: Project, ProjectStatus, ProjectType, BlogPost, ContactEntry, NarrativeLine

Exports:
  projects[]       — BPF (live/link), super-app (wip/subapp),
                     edtech-crm (exploring/subapp), ai-student-companion (exploring/subapp)
  blogPosts[]      — 2 draft entries
  contactEntries[] — email, github, play store, location, status with color enum
  tickerText       — hero ticker tape string
  originLines[]    — 8 NarrativeLine entries for Wow Scene 02

Centralising content here means zero component edits needed to update portfolio data."
```

---

## Step 4 — App entry & routing

```bash
git add src/main.tsx src/App.tsx

git commit -m "feat(app): add React 19 entry with BrowserRouter, SPA redirect, and route config

main.tsx:
  - IIFE SPA redirect handler: decodes ?p= query injected by public/404.html
    and restores original URL via history.replaceState before React mounts
  - createRoot with StrictMode + BrowserRouter

App.tsx:
  - Portfolio component: mode state (recruiter|wow), glitching state,
    localStorage persistence, 520ms GlitchOverlay transition
  - Mode toggle button: fixed bottom-right, shifts up 68px in wow mode
    to clear section dot nav, hover inverts color/background
  - Routes: / → Portfolio, /projects/:slug → ProjectPage, * → Portfolio"
```

---

## Step 5 — Shared UI primitives

```bash
git add src/components/ui.tsx

git commit -m "feat(ui): add shared primitive components and design token object

C object: maps token names to CSS var() strings — used across all components
  for type-safe inline style access without string duplication

BlockHeader  — section label + flex trailing hr
Prompt       — '\$ text // comment' CLI-style line
StatusBadge  — bordered badge, color resolved from status string
Tag          — small bordered tech pill
Cursor       — blinking 8×13px block using .animate-blink"
```

---

## Step 6 — Recruiter mode

```bash
git add \
  src/components/recruiter/RecruiterMode.tsx \
  src/components/sections/About.tsx \
  src/components/sections/Projects.tsx \
  src/components/sections/Stack.tsx \
  src/components/sections/Blog.tsx \
  src/components/sections/Contact.tsx

git commit -m "feat(recruiter): add recruiter mode shell and all five section components

RecruiterMode.tsx:
  - ASCII logo in <pre>, subtitle with amber location span
  - Tab bar: about/projects/stack/blog/contact, active bg-bg2 + accent color
  - key={tab} on section div forces remount → re-triggers .animate-fadein
  - h-screen overflow-y-auto scroll container inside outer overflow:hidden root

About.tsx     — whoami + currently (3x Prompt) + background
Projects.tsx  — project cards from data.ts, hover accent bar, useNavigate for subapps
Stack.tsx     — SkillRow grid (languages + platforms), philosophy Prompts
Blog.tsx      — published/draft split, draft rows opacity 0.4
Contact.tsx   — contactEntries[] data-driven, COLOR_MAP for inline style colors"
```

---

## Step 7 — Subapp project detail pages

```bash
git add \
  src/components/subapps/ProjectPage.tsx \
  src/components/subapps/SuperAppOverview.tsx \
  src/components/subapps/EdtechCrmOverview.tsx \
  src/components/subapps/AiCompanionOverview.tsx

git commit -m "feat(subapps): add /projects/:slug route with shell and three subapp pages

ProjectPage.tsx (route shell):
  - useParams to read slug, useNavigate for back/breadcrumb navigation
  - Breadcrumb: mrdevsahil / projects / {name} (all buttons, no <Link>)
  - Project header: name + StatusBadge, description, Tag pills, optional github link
  - SubappContent switch: slug → correct overview component or 'coming soon' fallback
  - Footer: back button with hover color transition + Cursor

SuperAppOverview    — what is this, monospace architecture tree, status Prompts, design principle
EdtechCrmOverview   — what is this, ✗ problem box, planned modules Prompts, status
AiCompanionOverview — what is this, → India-specific reasons box, scope Prompts, status"
```

---

## Step 8 — Wow mode: shared utilities

```bash
git add \
  src/components/wow/GlitchOverlay.tsx \
  src/components/wow/ThreeHeroBG.tsx \
  src/components/wow/OrbitNode.tsx \
  src/components/wow/WowMode.tsx

git commit -m "feat(wow): add Wow-mode shared utilities and scroll container

GlitchOverlay: fixed inset #000 with .animate-modeFlash (0.55s), glitchy
  mono label ('INITIATING BROADCAST' / 'RETURNING TO TERMINAL'), pointer-events none

ThreeHeroBG: Three.js WebGLRenderer (alpha, antialias), sized to canvas bounds,
  pixel ratio capped at 2. Scene: 2000-point star field (PointsMaterial #7fff7f),
  IcosahedronGeometry(11,1) wireframe, OctahedronGeometry(5,0) wireframe offset,
  TorusGeometry(15,0.04) ring. Mouse tracking nudges rotation axes. Full cleanup
  on unmount: cancelAnimationFrame, removeEventListeners, renderer.dispose,
  geo/mat dispose.

OrbitNode: rAF loop computes angle = startRad + (elapsed/period)*2π, positions
  div via translate(calc(x - 50%), calc(y - 50%)) relative to parent centre.
  will-change: transform for GPU compositing, userSelect none.

WowMode: .wow-scroll container, renders 5 scene components, scroll listener
  computes Math.round(scrollTop/clientHeight) for dot nav. 5 fixed dot buttons
  right:18px top:50%, active dot #7fff7f scale(1.6), inactive #1a2a1a."
```

---

## Step 9 — Wow mode: all five scenes

```bash
git add \
  src/components/wow/scenes/WowHero.tsx \
  src/components/wow/scenes/WowOrigin.tsx \
  src/components/wow/scenes/WowProjects.tsx \
  src/components/wow/scenes/WowStack.tsx \
  src/components/wow/scenes/WowTransmission.tsx

git commit -m "feat(wow/scenes): add all five cinematic scenes

WowHero (01 — IDENTITY):
  ThreeHeroBG canvas, letterbox bars (54px top+bottom), film-grain SVG overlay,
  'SAHIL' in Bebas Neue clamp(90px,17vw,230px) + .animate-glitch 4s 2s infinite,
  Barlow Condensed subtitle .animate-fadeUp 0.5s delay, scroll CTA onNext prop,
  ticker tape (tickerText × 2) .animate-ticker 30s linear infinite

WowOrigin (02 — ORIGIN):
  perspective(700px) rotateX(22deg) grid bg, originLines[] staggered
  .animate-revealUp (delay = i × 0.13s), font toggles Bebas/Barlow by line.bold,
  SVG circuit: vertical spine, 5 pulsing nodes (.animate-pulse-glow), branch lines,
  animated stroke-dashoffset reveal line (.animate-drawLine)

WowProjects (03 — WORKS):
  .animate-scanH horizontal scan line, projects[] float cards with .animate-floatY
  per-card staggered delay+duration, STATUS_COLOR map, tags, Play Store links

WowStack (04 — STACK):
  SVG dashed orbit rings at r=90/130/165/200, ORBIT_NODES[] → 9 OrbitNode instances,
  right panel: PHILOSOPHY[] in Bebas Neue staggered .animate-revealUp

WowTransmission (05 — TRANSMISSION):
  Two .animate-drawLine SVG circles (opacity 0.06), 'FIND SAHIL' display heading
  clamp(48px,9vw,120px), contactEntries[] rows staggered .animate-revealUp,
  closing manifesto + .animate-blink cursor"
```

---

## Step 10 — Final check & push

```bash
git add -A
git status    # should be clean

git commit -m "chore: verify all imports, routing, and deploy config

- Add new project UI
- Shift old UI code to src_old/ directory for future changes
- @/* alias resolves to src/* in both vite.config.ts and tsconfig.app.json
- public/404.html SPA redirect decodes ?p= before React mounts in main.tsx
- vite.config.ts base:'/' correct for mrdevsahil.github.io (root domain)
- Three.js split into own chunk via rollupOptions.manualChunks
- gh-pages deploy target: dist → master branch"

git push origin source
npm run deploy     # builds and pushes dist/ → master → GitHub Pages live
```

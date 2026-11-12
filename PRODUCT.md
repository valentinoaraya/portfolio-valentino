# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: hiring side.** Recruiters and tech leads evaluating Valentino for a developer position (preferably TypeScript, backend or full stack) on a team. Their job: decide quickly whether he is worth an interview, then verify depth (real products in production, engineering practices, stack).
- **Secondary: potential clients.** Businesses looking for custom software (management systems, SaaS, PWAs, e-commerce). Their job: judge whether he (and Aedes Tech) can deliver a complete, reliable product. Landing a position on a team is the priority when the two audiences compete.

## Product Purpose

Personal portfolio site of Valentino Araya (valentinoaraya.com): Full Stack Developer (TypeScript, React, Node.js), co-founder of Aedes Tech, 4th-year Information Systems Engineering student at UTN FRSR (GPA 8.54), based in San Rafael, Mendoza, Argentina. Success means a visitor understands within seconds who he is and what he builds, finds proof in real shipped projects, and reaches out (email, LinkedIn) or opens a repo/CV.

## Positioning

He ships complete products end-to-end for real clients, not isolated features: discovery with the client, frontend, backend, APIs, databases, deployment on his own VPS infrastructure, and maintenance. He designs states and failure points before coding (late payments, dropped network, duplicate webhooks, offline sync), works with explicit practices (TDD, spec-driven development, ODD, BDD, hexagonal / feature-based architecture, ADRs, CI), and uses AI tools in a disciplined way without giving up code quality or understanding. Several of his systems are in production and in daily use.

## Operating Context

- Evaluators typically arrive from a CV, LinkedIn, or GitHub link and skim before deciding to read further; tech leads may dig into a project write-up or repo.
- Each project gets its own detail page; the overview lists one line per project plus the public repo link when there is one.
- Contact channels: email, LinkedIn, GitHub, Instagram, Aedes Tech site.

## Capabilities and Constraints

- Existing codebase: Vite + React 19 + TypeScript scaffold (`src/`), Oxlint. No routing, styling system, or content pipeline yet.
- Bilingual: Spanish (default) and English. Source content is written in Spanish; English versions must be faithful translations, not new claims.
- Projects to present: Cursada (personal, in development, RAG study copilot), Tu Repe (B2B2C match-replay platform, in use at clubs), Liga Gestión (league management for Liga Municipal de Básquet, offline-first scoring), Bookify (appointments SaaS with Mercado Pago deposits), Don Fortunato (offline-first PWA for portable-toilet cleaning logs with QR and GPS).
- No project screenshots, by the owner's decision. Projects are presented through text, architecture, and technical detail drawn from the analysis documents.
- The CV PDF is offered as a download and is the hero's primary action (`public/cv-valentino-araya.pdf`).

## Brand Commitments

- Name: Valentino Araya. Headline: "Full Stack Developer | TypeScript | React | Node.js | VPS, Docker y Linux | 3 años construyendo software".
- Voice: first person, direct, concrete, technical without buzzwords; claims backed by specific practices and real projects (as in `content/about/SOBRE_MI.md`).
- Aedes Tech is his co-founded company and appears as part of his experience.

## Evidence on Hand

- `content/about/SOBRE_MI.md`: one-line, short, and long bios; experience; how he works; AI-assisted development; tech stack; education; languages (Spanish native, English B1); project list; links.
- `content/about/CV Valentino Araya.pdf`: CV.
- `content/images/edited-image.jpg`, `content/images/grok-image-15c38d33-65ad-45f4-8f1d-c7ef5c7e47a2.jpg`: portrait photos.
- `content/projects/CURSADA.md`, `TUREPE_PROJECT_ANALYSIS.md`, `ANALISIS_PORTFOLIO.md` (Liga Gestión), `BOOKIFY_PROJECT_ANALYSIS.md`, `TOILETS_PROJECT_ANALYSIS.md` (Don Fortunato): full project analyses (problem, stack, architecture, domain, tests, deploy).
- Public repos: github.com/valentinoaraya/cursada, github.com/Aedes/tu-repe, github.com/valentinoaraya/bookify-backend.
- Absent, never fabricate: testimonials, client quotes, usage metrics or numbers not in the analysis docs, project screenshots, awards.

## Product Principles

1. Proof over adjectives: every claim points to a shipped project, a practice, or a repo.
2. Respect the evaluator's time: who he is, what he builds, and how to contact him must be clear at a glance; depth is available for those who dig.
3. Whole products, not features: present each project as a problem solved end-to-end, including failure handling and infrastructure.
4. Engineering discipline is the differentiator: practices (TDD, specs, architecture, CI) are shown concretely, not listed as buzzwords.
5. Spanish first, faithful English: both languages carry the same facts.

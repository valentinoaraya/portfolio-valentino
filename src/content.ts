export type Lang = "es" | "en";

export type Project = {
	id: string;
	name: string;
	voice: "grotesk" | "serif";
	status: string;
	meta: string;
	summary: string;
	highlights: string[];
	stack: string[];
	repo?: string;
};

type Copy = {
	nav: { about: string; projects: string; contact: string };
	langLabel: string;
	cvFile: string;
	hero: {
		name: string;
		lineA: string;
		lineB: string;
		facts: string;
		cv: string;
		toolsLabel: string;
		tools: string[];
	};
	about: {
		lineA: string;
		lineB: string;
		lead: string;
		body: string;
		facts: { label: string; value: string }[];
		practicesTitle: string;
		practices: { name: string; detail: string }[];
		cta: string;
		photoSetupAlt: string;
		photoPortraitAlt: string;
		sticker: [string, string];
	};
	projects: {
		lineA: string;
		lineB: string;
		intro: string;
		stackLabel: string;
		repoLabel: string;
		privateLabel: string;
		items: Project[];
	};
	contact: {
		lineA: string;
		lineB: string;
		body: string;
		mail: string;
		cv: string;
		navTitle: string;
		contactTitle: string;
		socialTitle: string;
		place: string;
		backToTop: string;
		credit: string;
	};
};

const links = {
	email: "valentinoaraya04@gmail.com",
	github: "https://github.com/valentinoaraya",
	linkedin: "https://www.linkedin.com/in/valentinoaraya/",
	instagram: "https://www.instagram.com/tinoaraya/",
	aedes: "https://aedestec.com",
};

export { links };

export const copy: Record<Lang, Copy> = {
	es: {
		nav: { about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
		langLabel: "Cambiar idioma",
		cvFile: "/cv-valentino-araya.pdf",
		hero: {
			name: "Valentino Araya",
			lineA: "Construyo software",
			lineB: "que resuelve problemas",
			facts: "Full Stack Developer · TypeScript, React y Node.js · 3 años construyendo para clientes reales.",
			cv: "Descargar CV",
			toolsLabel: "Tecnologías y formas de trabajo",
			tools: [
				"TypeScript",
				"LLMs",
				"Node.js",
				"RAG",
				"React",
				"ODD",
				"IA aplicada",
				"TDD",
				"Next.js",
				"BDD",
				"PostgreSQL",
				"Docker",
				"CI/CD",
			],
		},
		about: {
			lineA: "De punta",
			lineB: "a punta",
			lead: "Soy desarrollador Full Stack, cofundador de Aedes Tech y estudiante de 4.° año de Ingeniería en Sistemas de la Información en la UTN Facultad Regional San Rafael.",
			body: "Participo en todo el proyecto: relevamiento con el cliente, frontend, backend, APIs, bases de datos, despliegue en servidor propio y mantenimiento. Antes de codear diseño los estados y los puntos de falla: pagos tardíos, red caída, webhooks duplicados.",
			facts: [
				{ label: "Experiencia", value: "3 años con clientes reales" },
				{
					label: "Carrera",
					value: "UTN FRSR · 4.° año · promedio 8,54",
				},
				{
					label: "Idiomas",
					value: "Español nativo · Inglés B1",
				},
			],
			practicesTitle: "Cómo trabajo",
			practices: [
				{
					name: "ODD",
					detail: "Organic Driven Development: Defino el alcance antes de codear. Un cambio chico va directo; uno grande arranca con una spec aceptada y seguimiento antes de la primera línea.",
				},
				{
					name: "Arquitectura",
					detail: "Elijo la arquitectura según el proyecto; por funcionalidades, en capas o hexagonal.",
				},
				{
					name: "BDD",
					detail: "Escribo el comportamiento en escenarios Gherkin que sirven de criterios de aceptación y corren con Cucumber.js en el CI.",
				},
				{
					name: "TDD",
					detail: "Test en rojo primero, después el código que lo pone verde, y refactor con la suite en verde. Cubro casos de integración y de fallo, no solo el camino feliz.",
				},
				{
					name: "CI y deploy",
					detail: "GitHub Actions con typecheck, lint, tests y build en cada push. Despliego en VPS Linux con Docker, Nginx y Traefik, y me ocupo de SSL y monitoreo.",
				},
				{
					name: "IA con criterio",
					detail: "Uso IA para analizar, planificar, generar y revisar código, sin resignar calidad ni comprensión de lo que se mergea.",
				},
			],
			cta: "Ver proyectos",
			photoSetupAlt:
				"Mi escritorio: monitor con Cursor abierto en el proyecto Cursada, la notebook, una planta y el mate en la mano.",
			photoPortraitAlt:
				"Valentino Araya sonriendo frente a su escritorio, con auriculares y un mate.",
			sticker: ["Mate", "Deploy"],
		},
		projects: {
			lineA: "Productos",
			lineB: "que construyo",
			intro: "Cinco sistemas, de la idea al servidor. Algunos los usan clubes y empresas todos los días; otro lo uso yo para estudiar.",
			stackLabel: "Stack",
			repoLabel: "Ver repositorio",
			privateLabel: "Repositorio privado del cliente",
			items: [
				{
					id: "cursada",
					name: "Cursada",
					voice: "serif",
					status: "Proyecto personal · en desarrollo",
					meta: "Diseño y desarrollo · 2026",
					summary:
						"Copiloto de estudio con RAG: responde solo a partir de mis apuntes, cita archivo y página, y se abstiene si no hay evidencia.",
					highlights: [
						"Búsqueda híbrida: full-text en español más similitud vectorial con pgvector.",
						"Si la evidencia no alcanza, responde «no está en tu material» sin llamar al modelo.",
						"Arquitectura hexagonal, ADRs, TDD y escenarios BDD con Cucumber.js en cada push.",
					],
					stack: [
						"TypeScript",
						"Fastify",
						"Next.js",
						"Drizzle",
						"pgvector",
						"Vercel AI SDK",
					],
					repo: "https://github.com/valentinoaraya/cursada",
				},
				{
					id: "liga-gestion",
					name: "Liga Gestión",
					voice: "grotesk",
					status: "Liga Municipal de Básquet",
					meta: "Full Stack · General Alvear · jun. – oct. 2026",
					summary:
						"Sistema a medida para administrar una liga de básquet de punta a punta: padrones, torneos, fixture, planillaje en cancha y estadísticas públicas.",
					highlights: [
						"Planilla oficial como PWA offline-first, con IndexedDB, sincronización diferida y una sola mesa por partido.",
						"Las reglas del deporte viven en el backend: cuartos, faltas, timeouts, elegibilidad por edad y llaves de playoffs.",
						"Contratos Zod compartidos entre frontend y backend en un monorepo.",
					],
					stack: [
						"TypeScript",
						"Express",
						"Prisma",
						"PostgreSQL",
						"Supabase",
						"Zod",
						"Dexie",
					],
				},
				{
					id: "tu-repe",
					name: "Tu Repe",
					voice: "serif",
					status: "En uso en clubes",
					meta: "Full Stack · Aedes Tech · oct. 2025 – oct. 2026",
					summary:
						"Plataforma B2B2C para complejos deportivos: los partidos se graban solos y cada jugador encuentra, mira y descarga su repetición.",
					highlights: [
						"Pipeline automático: grabación RTSP, segmentos MP4 con FFmpeg y subida a Backblaze B2.",
						"Búsqueda por club, fecha, hora y cancha, sin registro; reproductor con clips y descarga.",
						"50 archivos de test con Jest y Supertest; CI con typecheck, lint, audit y build de Docker.",
					],
					stack: [
						"TypeScript",
						"Express 5",
						"MySQL",
						"FFmpeg",
						"Backblaze B2",
						"React 19",
						"Zustand",
					],
					repo: "https://github.com/Aedes/tu-repe",
				},
				{
					id: "bookify",
					name: "Bookify",
					voice: "grotesk",
					status: "SaaS en producción",
					meta: "Full Stack · ago. 2024 – oct. 2026",
					summary:
						"Plataforma SaaS de turnos para profesionales y empresas de servicios: publican su disponibilidad, cobran señas y reducen el ausentismo.",
					highlights: [
						"Los clientes reservan desde el portal público de cada empresa, sin registrarse.",
						"Señas y suscripciones con Mercado Pago; recordatorios por email con colas BullMQ y Redis.",
						"Panel en tiempo real con Socket.io y claves de idempotencia en los webhooks de pago.",
					],
					stack: [
						"TypeScript",
						"Express",
						"MongoDB",
						"BullMQ",
						"Redis",
						"Socket.io",
						"Mercado Pago",
						"React",
					],
					repo: "https://github.com/valentinoaraya/bookify-backend",
				},
				{
					id: "don-fortunato",
					name: "Don Fortunato",
					voice: "grotesk",
					status: "Gestión de baños químicos",
					meta: "Full Stack · mar. – oct. 2026",
					summary:
						"PWA para una empresa de alquiler de baños químicos: cada unidad queda rastreada con su historial de limpiezas y movilizaciones.",
					highlights: [
						"Los operarios escanean un QR con GPS, incluso sin señal en obra: IndexedDB y sincronización automática.",
						"Panel por empresa con el estado limpio o pendiente de cada baño y supervisión de eventos.",
						"Reportes en PDF y CSV para facturación y auditoría ante clientes industriales.",
					],
					stack: [
						"TypeScript",
						"React 19",
						"Supabase",
						"PWA",
						"Workbox",
						"IndexedDB",
					],
				},
			],
		},
		contact: {
			lineA: "¿Armamos algo",
			lineB: "juntos?",
			body: "Busco sumarme a un equipo de desarrollo. Si necesitás software a medida, también lo construimos con Aedes Tech.",
			mail: "Escribime",
			cv: "Descargar CV",
			navTitle: "Navegación",
			contactTitle: "Contacto",
			socialTitle: "Redes",
			place: "San Rafael, Mendoza, Argentina",
			backToTop: "Volver arriba",
			credit: "Inspirado en",
		},
	},
	en: {
		nav: { about: "About", projects: "Projects", contact: "Contact" },
		langLabel: "Change language",
		cvFile: "/cv-valentino-araya-en.pdf",
		hero: {
			name: "Valentino Araya",
			lineA: "I build software",
			lineB: "that solves problems",
			facts: "Full Stack Developer · TypeScript, React and Node.js · 3 years building for real clients.",
			cv: "Download CV",
			toolsLabel: "Technologies and ways of working",
			tools: [
				"TypeScript",
				"LLMs",
				"Node.js",
				"RAG",
				"React",
				"ODD",
				"Applied AI",
				"TDD",
				"Next.js",
				"BDD",
				"PostgreSQL",
				"Docker",
				"CI/CD",
			],
		},
		about: {
			lineA: "End",
			lineB: "to end",
			lead: "I'm a Full Stack developer, co-founder of Aedes Tech, and a 4th-year Information Systems Engineering student at UTN, San Rafael Regional Faculty.",
			body: "I take part in the whole project: discovery with the client, frontend, backend, APIs, databases, deployment on our own servers, and maintenance. Before coding I design states and failure points: late payments, dropped networks, duplicate webhooks.",
			facts: [
				{ label: "Experience", value: "3 years with real clients" },
				{ label: "Degree", value: "UTN FRSR · 4th year · GPA 8.54" },
				{
					label: "Languages",
					value: "Spanish (native) · English B1",
				},
			],
			practicesTitle: "How I work",
			practices: [
				{
					name: "ODD",
					detail: "Organic Driven Development: I define the scope before coding. A small change goes straight in; a large change starts with an accepted spec and tracking before the first line.",
				},
				{
					name: "Architecture",
					detail: "I choose the architecture based on the project; feature-based, layered, or hexagonal.",
				},
				{
					name: "BDD",
					detail: "Gherkin scenarios that run with Cucumber.js as part of CI.",
				},
				{
					name: "TDD",
					detail: "Red test first, then the code that turns it green, then refactor with the suite still green. I cover integration and failure cases, not just the happy path.",
				},
				{
					name: "CI and deploy",
					detail: "GitHub Actions running typecheck, lint, tests, and build on every push. I deploy to Linux VPS with Docker, Nginx, and Traefik, and handle SSL and monitoring.",
				},
				{
					name: "AI with judgment",
					detail: "I use AI to analyze, plan, generate, and review code, without giving up quality or understanding of what gets merged.",
				},
			],
			cta: "See projects",
			photoSetupAlt:
				"My desk: a monitor with Cursor open on the Cursada project, the laptop, a plant, and a mate in hand.",
			photoPortraitAlt:
				"Valentino Araya smiling at his desk, wearing headphones and holding a mate.",
			sticker: ["Mate", "Deploy"],
		},
		projects: {
			lineA: "Products",
			lineB: "I build",
			intro: "Five systems, from idea to server. Clubs and companies use some of them every day; I use another one to study.",
			stackLabel: "Stack",
			repoLabel: "View repository",
			privateLabel: "Client's private repository",
			items: [
				{
					id: "bookify",
					name: "Bookify",
					voice: "grotesk",
					status: "SaaS in production",
					meta: "Full Stack · Aug 2024 – Oct 2026",
					summary:
						"An appointments SaaS for professionals and service businesses: they publish availability, collect deposits, and cut no-shows.",
					highlights: [
						"Customers book from each business's public portal without signing up.",
						"Deposits and subscriptions with Mercado Pago; email reminders through BullMQ and Redis queues.",
						"Real-time dashboard with Socket.io and idempotency keys on payment webhooks.",
					],
					stack: [
						"TypeScript",
						"Express",
						"MongoDB",
						"BullMQ",
						"Redis",
						"Socket.io",
						"Mercado Pago",
						"React",
					],
					repo: "https://github.com/valentinoaraya/bookify-backend",
				},
				{
					id: "tu-repe",
					name: "Tu Repe",
					voice: "serif",
					status: "In use at clubs",
					meta: "Full Stack · Aedes Tech · Oct 2025 – Oct 2026",
					summary:
						"A B2B2C platform for sports venues: matches record themselves and every player finds, watches, and downloads their replay.",
					highlights: [
						"Automatic pipeline: RTSP recording, MP4 segments with FFmpeg, and upload to Backblaze B2.",
						"Search by club, date, time, and court with no sign-up; a player with clips and downloads.",
						"50 test files with Jest and Supertest; CI with typecheck, lint, audit, and a Docker build.",
					],
					stack: [
						"TypeScript",
						"Express 5",
						"MySQL",
						"FFmpeg",
						"Backblaze B2",
						"React 19",
						"Zustand",
					],
					repo: "https://github.com/Aedes/tu-repe",
				},
				{
					id: "liga-gestion",
					name: "Liga Gestión",
					voice: "grotesk",
					status: "Municipal Basketball League",
					meta: "Full Stack · General Alvear · Jun – Oct 2026",
					summary:
						"A custom system that runs a basketball league end to end: player registry, tournaments, fixtures, courtside scoring, and public stats.",
					highlights: [
						"The official scoresheet is an offline-first PWA with IndexedDB, deferred sync, and one scoring table per game.",
						"The rules of the sport live in the backend: quarters, fouls, timeouts, age eligibility, and playoff brackets.",
						"Zod contracts shared between frontend and backend in a monorepo.",
					],
					stack: [
						"TypeScript",
						"Express",
						"Prisma",
						"PostgreSQL",
						"Supabase",
						"Zod",
						"Dexie",
					],
				},
				{
					id: "cursada",
					name: "Cursada",
					voice: "serif",
					status: "Personal project · in development",
					meta: "Design and development · 2026",
					summary:
						"A RAG study copilot: it answers only from my notes, cites file and page, and abstains when there is no evidence.",
					highlights: [
						"Hybrid search: Spanish full-text plus vector similarity with pgvector.",
						'When the evidence falls short, it answers "not in your material" without calling the model.',
						"Hexagonal architecture, ADRs, TDD, and BDD scenarios with Cucumber.js on every push.",
					],
					stack: [
						"TypeScript",
						"Fastify",
						"Next.js",
						"Drizzle",
						"pgvector",
						"Vercel AI SDK",
					],
					repo: "https://github.com/valentinoaraya/cursada",
				},
				{
					id: "don-fortunato",
					name: "Don Fortunato",
					voice: "grotesk",
					status: "Portable toilet operations",
					meta: "Full Stack · Mar – Oct 2026",
					summary:
						"A PWA for a portable toilet rental company: every unit is tracked with its history of cleanings and relocations.",
					highlights: [
						"Field workers scan a QR code with GPS, even with no signal on site: IndexedDB and automatic sync.",
						"A per-company dashboard with each unit's clean or pending status and event supervision.",
						"PDF and CSV reports for billing and audits with industrial clients.",
					],
					stack: [
						"TypeScript",
						"React 19",
						"Supabase",
						"PWA",
						"Workbox",
						"IndexedDB",
					],
				},
			],
		},
		contact: {
			lineA: "Shall we build",
			lineB: "something?",
			body: "I'm looking to join a development team. If you need custom software, we also build it at Aedes Tech.",
			mail: "Email me",
			cv: "Download CV",
			navTitle: "Navigation",
			contactTitle: "Contact",
			socialTitle: "Social",
			place: "San Rafael, Mendoza, Argentina",
			backToTop: "Back to top",
			credit: "Inspired by",
		},
	},
};

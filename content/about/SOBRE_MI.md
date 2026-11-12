# Valentino Araya

**Full Stack Developer | TypeScript | React | Node.js | VPS, Docker y Linux | 3 años construyendo software**

San Rafael, Mendoza, Argentina

---

## Presentaciones

### Una línea

Desarrollador Full Stack (TypeScript, React y Node.js) y estudiante de 4.° año de Ingeniería en Sistemas de la Información en la UTN Facultad Regional San Rafael.

### Párrafo corto

Soy Valentino Araya, desarrollador Full Stack especializado en TypeScript, React y Node.js, con 3 años de experiencia construyendo aplicaciones web, plataformas SaaS y sistemas a medida que hoy están en producción. Estudio 4.° año de Ingeniería en Sistemas de la Información en la UTN Facultad Regional San Rafael (promedio 8,54) y busco una oportunidad para seguir creciendo como developer.

### Párrafo largo

Soy Valentino Araya, desarrollador Full Stack de San Rafael, Mendoza, Argentina, y cofundador de Aedes Tech. Estoy especializado en TypeScript, React y Node.js, y tengo 3 años de experiencia desarrollando proyectos para clientes reales, con soluciones en producción. Participo de forma end-to-end en aplicaciones web, plataformas SaaS y sistemas a medida: frontend, backend, APIs REST, bases de datos, despliegues e infraestructura.

Estoy en 4.° año de Ingeniería en Sistemas de la Información en la Universidad Tecnológica Nacional, Facultad Regional San Rafael (2023–2027), con promedio 8,54. Antes hice la Carrera de Desarrollo Frontend React y Full Stack en Coderhouse (junio de 2022 – julio de 2023) y el Bachiller en Informática en el Instituto San Antonio (2018–2023).

Integro herramientas de inteligencia artificial en mi flujo de desarrollo para analizar, planificar, generar y revisar código, siempre apoyado en buenas prácticas: arquitectura por funcionalidades, TDD y desarrollo guiado por especificaciones. En Cursada, un copiloto de estudio con RAG que estoy construyendo, aplico además arquitectura hexagonal, ODD, BDD, ADRs y CI. Me importa aprovechar la IA sin perder calidad, mantenibilidad, escalabilidad ni comprensión del código.

Estoy abierto a nuevas oportunidades y me gustaría sumarme a un equipo de desarrollo.

---

## Quién soy y qué busco

Soy desarrollador Full Stack y estudiante de 4.° año de Ingeniería en Sistemas de la Información. También soy cofundador de Aedes Tech, donde desarrollamos software a medida para empresas y clientes: sistemas de gestión, landing pages, aplicaciones mobile y e-commerce.

Me enfoco en productos completos, no en features sueltas. Me importa entender el contexto de negocio, diseñar estados y puntos de falla antes de codear, e iterar con datos reales: pagos tardíos, red caída o webhooks duplicados, no solo el happy path.

Busco una posición de developer —de preferencia con TypeScript, en backend o full stack— donde pueda seguir aplicando estas prácticas y sumar a un equipo. Mientras termino la carrera, sigo construyendo apps para clientes reales y proyectos personales como Cursada.

---

## Experiencia

### Cofundador | Full Stack Developer — Aedes Tech

Junio de 2025 – actualidad · San Rafael, Mendoza, Argentina

Cofundador de Aedes Tech. Participo de punta a punta en los proyectos: relevamiento con clientes, desarrollo frontend y backend, prototipos y validaciones, despliegue en servidor propio, puesta en producción y mantenimiento.

### Full Stack Developer — Liga Municipal de Básquet (Liga Gestión)

Junio de 2026 – octubre de 2026 · General Alvear

Sistema a medida para la administración de una liga de básquet: padrones, torneos, planillaje offline-first en cancha y estadísticas públicas.

### Full Stack Developer — Don Fortunato

Marzo de 2026 – octubre de 2026 · San Rafael, Mendoza, Argentina

Sistema a medida para una empresa de alquiler de baños químicos: registro de limpiezas y movilizaciones con QR, geolocalización y panel administrativo con funcionamiento offline.

### Full Stack Developer — Tu Repe

Octubre de 2025 – octubre de 2026 · San Rafael, Mendoza, Argentina

Desarrollo completo de una plataforma B2B2C para complejos deportivos: se graban los partidos y los jugadores pueden buscar, ver y descargar su repetición. El sistema está en uso en clubes.

### Full Stack Developer — Bookify

Agosto de 2024 – octubre de 2026 · San Rafael, Mendoza, Argentina

Desarrollo de punta a punta de una plataforma SaaS de gestión y reserva de turnos, con cobro de señas, recordatorios y panel en tiempo real.

### Freelance — Autónomo

Enero de 2023 – julio de 2025 · San Rafael, Mendoza, Argentina

---

## Cómo trabajo

- **TDD.** Escribo el test en rojo y recién después el código que lo pone verde; si hace falta, refactorizo con la suite en verde. Lo aplico en Cursada y en Tu Repe, donde la suite cubre casos unitarios, de integración y de fallo, no solo el camino feliz.
- **SDD (spec-driven development).** Si el cambio es grande, primero escribo y acepto una spec con criterios de aceptación, y recién después los tests. En Cursada las historias siguen esa plantilla, con una tabla de trazabilidad entre criterios, tests y pull requests.
- **ODD.** En Cursada, cada implementación nueva sigue un orden claro: un cambio chico no crea spec; el test rojo sigue yendo antes del código. Un cambio grande tiene spec aceptada y seguimiento antes del primer cambio de código.
- **BDD.** Cuando la historia se cuenta en Gherkin, el escenario se escribe después de que el caso de uso está en verde, y corre con Cucumber.js como parte del CI de Cursada.
- **Arquitectura.** En varios productos organizo el código por funcionalidades (feature-based architecture). En Cursada uso arquitectura hexagonal: las reglas de negocio viven en el dominio, detrás de puertos; Fastify, Next.js, Drizzle y el LLM quedan en adapters y no contienen esas reglas. En Tu Repe y Bookify trabajo con una arquitectura en capas (API REST, servicios y persistencia; en Bookify, SPA + API + workers).
- **ADRs.** Las decisiones de stack, alcance, arquitectura y flujo de Cursada quedan registradas en ADRs. Si una decisión cambia, escribo otro.
- **CI.** Uso GitHub Actions: en Cursada corren typecheck, tests y BDD en cada push y pull request; en Tu Repe, typecheck, lint, migraciones de test, la suite de tests, un audit de seguridad y el build de la imagen Docker. Despliego en VPS Linux, Vercel y Supabase, con Docker, Docker Compose, Nginx, PM2 y Traefik, y me encargo de dominios, certificados SSL, monitoreo e incidentes de infraestructura y seguridad.
- **Otras prácticas.** DRY, KISS, YAGNI y SOLID. Resiliencia en producción: reintentos en subidas, claves de idempotencia en webhooks y sincronización offline idempotente. En Cursada no llamo al modelo si no hay evidencia, y el material de cada usuario queda aislado.

---

## Desarrollo asistido por IA

Integro herramientas de inteligencia artificial en mi flujo de desarrollo para agilizar análisis, planificación, generación y revisión de código, y para acortar tiempos de implementación. Las uso sin perder de vista la calidad, la mantenibilidad, la escalabilidad y la comprensión del código, y sigo formándome en cómo incorporarlas bien.

En el día a día trabajo con Cursor. En Cursada dejo las reglas en `AGENTS.md` y en `.cursor/rules`, para que una persona o un agente las sigan igual, y tengo skills manuales (`/backlog`, `/story`, `/pair`) que solo corren cuando las nombro. El orden no lo decide el modelo: en un cambio grande, la spec va antes que el test; en uno chico, el test rojo va antes que el código. Está prohibido meter reglas de negocio en handlers o componentes, importar infraestructura desde el dominio o commitear secretos.

En el frontend a veces arranco con un mockup generado con IA, además de un wireframe propio o una referencia de diseño. También construyo producto con LLMs: Cursada es un copiloto de estudio basado en RAG, con citas y salvaguardas.

---

## Tecnologías

### Lenguajes

- TypeScript
- JavaScript
- HTML y CSS
- SQL

### Frontend

- React y Next.js
- Vite y Tailwind CSS
- Zustand y Context API
- Ant Design y FullCalendar
- Framer Motion
- PWA, Workbox, Service Workers, IndexedDB y Dexie

### Backend

- Node.js
- Express y Fastify
- APIs REST
- Zod
- BullMQ, Redis y Socket.io
- FFmpeg
- Mercado Pago
- Backblaze B2
- Cloudinary
- Nodemailer

### Bases de datos

- PostgreSQL
- MySQL
- MongoDB y Mongoose
- Prisma y Drizzle
- Supabase
- Firebase
- pgvector

### IA y LLM

- RAG y embeddings
- Vercel AI SDK y Ollama
- Búsqueda híbrida (full-text en español y similitud vectorial)
- Streaming por SSE

### Testing

- Jest y Supertest
- Vitest
- Cucumber.js y Gherkin
- Testcontainers

### DevOps y herramientas

- Git y GitHub
- GitHub Actions
- Docker y Docker Compose
- Linux y administración de VPS
- Nginx, PM2 y Traefik
- Vercel
- Gestión de dominios, SSL, despliegues y monitoreo

---

## Formación

- **Ingeniería en Sistemas de Información** — UTN Facultad Regional San Rafael (2023–2027). Cursando 4.° año. Promedio: 8,54.
- **Carrera de Desarrollo Frontend React y Full Stack** — Coderhouse (junio de 2022 – julio de 2023).
- **Bachiller en Informática** — Instituto San Antonio (2018–2023).

---

## Idiomas

- Español: nativo
- Inglés: B1

---

## Proyectos

El detalle de cada uno va en su propia página. Acá, una línea y el link al repositorio cuando es público.

- **Cursada** — Copiloto de estudio con RAG que responde a partir de los apuntes del usuario, cita archivo y página, y se abstiene si no hay evidencia. Proyecto personal, en desarrollo. [github.com/valentinoaraya/cursada](https://github.com/valentinoaraya/cursada)
- **Tu Repe** — SaaS de streaming para ver partidos grabados automáticamente en clubes deportivos. [github.com/Aedes/tu-repe](https://github.com/Aedes/tu-repe)
- **Liga Gestión** — Sistema a medida para la Liga Municipal de Básquet: padrones, torneos, planillaje offline-first y estadísticas públicas.
- **Bookify** — SaaS de turnos, señas con Mercado Pago y recordatorios para profesionales y empresas de servicios. [github.com/valentinoaraya/bookify-backend](https://github.com/valentinoaraya/bookify-backend)
- **Gestión de baños químicos (Don Fortunato)** — PWA offline-first para registrar limpiezas y movilizaciones con QR y GPS.

---

## Links

- Sitio: [https://valentinoaraya.com](https://valentinoaraya.com)
- Email: [valentinoaraya04@gmail.com](mailto:valentinoaraya04@gmail.com)
- GitHub: [https://github.com/valentinoaraya](https://github.com/valentinoaraya)
- LinkedIn: [https://www.linkedin.com/in/valentinoaraya/](https://www.linkedin.com/in/valentinoaraya/)
- Instagram: [https://www.instagram.com/tinoaraya/](https://www.instagram.com/tinoaraya/)
- Aedes Tech: [https://aedestech.vercel.app](https://aedestech.vercel.app)

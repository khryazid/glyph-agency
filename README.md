# Portafolio — Khristian Ali (Founder @ Glyph Agency)

Web de portafolio editorial en español diseñada con **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4** y **GSAP + ScrollTrigger**, orientada a presentar productos SaaS *offline-first*, sistemas multi-tenant con PostgreSQL RLS, proyectos Open Source de IA y servicios de ingeniería full-stack.

## Stack Tecnológico

- **Framework:** Next.js 16 (App Router, RSC), React 19, TypeScript (`strict`)
- **Estilos:** Tailwind CSS v4, `@property` CSS gradients, texturas granuladas editoriales y motivo visual de arco/portal
- **Animaciones:** GSAP + ScrollTrigger (respetando `prefers-reduced-motion`)
- **Validación y API:** Zod + Route Handler `POST /api/contact` (soporte opcional para Resend)
- **Despliegue:** Vercel (producción en `main`, previews en `test` y `dev`)

## Instalación y Ejecución Local

### Requisitos
- Node.js 20+ y npm

### Pasos
```powershell
npm install
copy .env.example .env.local
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Variables de Entorno (`.env.example`)

- `NEXT_PUBLIC_SITE_URL` — URL pública para metadata Open Graph, `sitemap.xml` y `robots.txt`
- `RESEND_API_KEY` *(opcional)* — Clave de Resend para entrega directa de mensajes desde `/api/contact`
- `CONTACT_TO_EMAIL` *(opcional)* — Correo destinatario para los mensajes del formulario
- `CONTACT_FROM_EMAIL` *(opcional)* — Remitente verificado en Resend
- `NEXT_PUBLIC_WHATSAPP_NUMBER` *(opcional)* — Número internacional para botón directo de WhatsApp

## Comandos Disponibles

- `npm run dev` — Servidor de desarrollo
- `npm run build` — Compilación de producción
- `npm run start` — Servidor de producción local
- `npm run typecheck` — Verificación estricta de TypeScript
- `npm run lint` — Auditoría con ESLint

## Licencia

Distribuido bajo la licencia [MIT](LICENSE).

# Portafolio — Khristian Ali (Fundador de Glyph Agency)

Web de portafolio comercial y editorial en español enfocada en dueños de negocios y empresas: presenta soluciones reales (sistemas de ventas e inventario, gestión clínica, plataformas B2B, webs corporativas y automatización con IA) con diseño luminoso, transiciones suaves y formulario de contacto directo.

## Stack del Proyecto

- **Framework:** Next.js 16 (App Router, RSC), React 19, TypeScript
- **Estilos:** Tailwind CSS v4, `@property` CSS gradients y texturas granuladas editoriales
- **Animaciones:** GSAP + ScrollTrigger (respetando `prefers-reduced-motion`)
- **Validación y Contacto:** Zod + `POST /api/contact` (soporte opcional para Resend y fallback directo)
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

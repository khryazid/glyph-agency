# Glyph Agency — Web Comercial Oficial

Sitio web comercial de **Glyph Agency**, agencia digital cofundada por **Khristian Ali** (Desarrollo de Software, Webs y Automatización) y **Daniela Quiroz** (Lic. en Administración mención Mercadeo · Estrategia, Redes Sociales y Meta Ads).

Diseñado con enfoque directo para dueños de negocios y empresas: presenta soluciones reales (sistemas de ventas e inventario sin internet, gestión clínica, plataformas B2B, sitios web corporativos, gestión de redes sociales como Community Manager, diseño comercial y campañas en Meta Ads) con identidad luminosa, animaciones suaves y contacto directo.

## Stack del Proyecto

- **Framework:** Next.js 16 (App Router, RSC), React 19, TypeScript
- **Estilos:** Tailwind CSS v4, gradientes animables (`@property`) y texturas editoriales
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

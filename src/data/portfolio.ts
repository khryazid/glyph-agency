export type ProjectTab = "all" | "saas" | "ai-oss";

export type ProjectCategory = "SaaS Privado" | "Open Source" | "Plataforma Web";

export type HeroCategory = "SaaS B2B" | "App con IA" | "Plataforma Web" | "Equipo Senior";

export interface ProjectItem {
  id: string;
  title: string;
  shortLabel: string;
  tagline: string;
  category: ProjectCategory;
  tab: Exclude<ProjectTab, "all">;
  gradient: string;
  badgeTone: string;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  repoUrl?: string;
  mockupLines: { title: string; subtitle: string; stat: string; pill: string }[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  gradient: string;
  badge: string;
  mockupTitle: string;
  mockupBullets: string[];
  mockupTag: string;
}

export interface CapabilityBadge {
  label: string;
  detail: string;
}

export interface ScaleCategoryPill {
  label: string;
  bg: string;
  text: string;
  category: HeroCategory;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  presetCategory: HeroCategory;
  presetBrief: string;
  variant: "templates" | "ai" | "founder";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://khryazid-portfolio.vercel.app";

export const PROFILE = {
  name: "Khristian Ali",
  handle: "@khryazid",
  role: "Full-Stack Product Engineer & Founder @ Glyph Agency",
  location: "Venezuela · Remoto Global (UTC-4)",
  emailHint: "contacto vía formulario o LinkedIn",
  githubUrl: "https://github.com/khryazid",
  linkedinUrl: "https://www.linkedin.com/in/khyazid",
  xUrl: "https://x.com/khr_yazid",
  instagramUrl: "https://www.instagram.com/khryazid",
};

export const HERO_TYPEWRITER_EXAMPLES = [
  "Un SaaS B2B offline-first multi-empresa con cobranza multimoneda y reportes PDF...",
  "Una app con Gemini AI y búsqueda semántica pgvector sobre nuestros documentos internos...",
  "Un sistema clínico o POS resiliente que siga operando aunque falle el internet...",
  "Incorporar a un ingeniero full-stack senior para diseñar arquitectura y lanzar a producción...",
];

export const HERO_CATEGORY_PILLS: HeroCategory[] = [
  "SaaS B2B",
  "App con IA",
  "Equipo Senior",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "glyphcore",
    title: "GlyphCore B2B",
    shortLabel: "SaaS Multi-Tenant",
    tagline: "Plataforma B2B offline-first para distribuidoras y mayoristas en Latinoamérica.",
    category: "SaaS Privado",
    tab: "saas",
    gradient: "linear-gradient(145deg, #ff8400 0%, #ff8ee5 52%, #d559ff 100%)",
    badgeTone: "bg-orange-100 text-orange-950",
    summary:
      "Ecosistema SaaS multi-empresa con 4 portales (Comprador, Vendedor en Campo, Comercio Mayorista y Administrador de Plataforma), operación offline-first y contabilidad multimoneda exacta.",
    problem:
      "Las distribuidoras mayoristas sufren caídas de conectividad en ruta, errores de redondeo entre USD/VES/COP y descontrol en aprobaciones parciales de pedidos y abonos.",
    solution:
      "Arquitectura con aislamiento estricto por tenant en PostgreSQL RLS (migraciones 0001–0010 verificadas en PGlite), caché local en Dexie IndexedDB v3 con PWA Service Worker y aritmética decimal exacta con decimal.js.",
    highlights: [
      "4 portales aislados por rol (BUYER, SALES_REP, ADMIN/INVENTORY_MANAGER, PLATFORM_OWNER)",
      "Motor de reorden en 1 clic, ruta diaria de vendedores y estados de cuenta PDF con jsPDF",
      "Seguridad auditada en PostgreSQL 17: column-locks y RPCs SECURITY DEFINER",
      "Empaquetado web PWA con base lista para Tauri v2 y Capacitor",
    ],
    metrics: [
      { label: "Portales integrados", value: "4 roles" },
      { label: "Monedas nativas", value: "USD / VES / COP" },
      { label: "Pruebas E2E & RLS", value: "268+ checks" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase RLS", "Dexie IndexedDB", "decimal.js", "Tailwind v4"],
    mockupLines: [
      { title: "Portal Comercio Mayorista", subtitle: "Aprobación parcial bilateral", stat: "$14,820.00", pill: "Sync OK" },
      { title: "Mi Ruta de Hoy", subtitle: "12 clientes asignados offline", stat: "98.4%", pill: "IndexedDB" },
      { title: "Auditoría Multi-Tenant", subtitle: "RLS PostgreSQL 17 activo", stat: "0 leaks", pill: "Verificado" },
    ],
  },
  {
    id: "glyphix-hce",
    title: "Glyphix (HCE)",
    shortLabel: "HealthTech SaaS",
    tagline: "Motor clínico inteligente offline-first, multi-tenant e impulsado por Gemini AI.",
    category: "SaaS Privado",
    tab: "saas",
    gradient: "linear-gradient(145deg, #ff70b8 0%, #cf67ff 55%, #7c6bff 100%)",
    badgeTone: "bg-fuchsia-100 text-fuchsia-950",
    summary:
      "Plataforma médica diseñada para operar a 0 ms de latencia sin internet, sincronizando historias clínicas en segundo plano con encriptación y aislamiento criptográfico por clínica.",
    problem:
      "Los consultorios y clínicas no pueden detener la atención médica cuando falla la red, ni arriesgar fugas de datos clínicos entre organizaciones.",
    solution:
      "Lectura/escritura directa en IndexedDB con Sync Worker de reintentos exponenciales, políticas RLS en PostgreSQL por organization_id, asistente diagnóstico CIE-11 con Gemini 2.0 Flash y facturación SaaS vía Stripe.",
    highlights: [
      "RBAC granular para 8 roles clínicos y administrativos con guards SSR",
      "Agenda en tiempo real con WebSockets de Supabase y control de turnos de caja",
      "Exportación de expedientes PDF y paquetes ZIP generados 100% en navegador",
      "Suite de calidad automatizada con Vitest y Playwright E2E",
    ],
    metrics: [
      { label: "Latencia offline", value: "0 ms local" },
      { label: "Roles RBAC", value: "8 perfiles" },
      { label: "Asistente IA", value: "CIE-11" },
    ],
    stack: ["Next.js 16", "React 19", "Supabase RLS", "IndexedDB", "Gemini AI", "Stripe", "Playwright"],
    mockupLines: [
      { title: "Wizard Clínico Offline", subtitle: "Guardado local instantáneo", stat: "Sync 100%", pill: "IndexedDB" },
      { title: "Sugerencia CIE-11", subtitle: "Análisis contextual de anamnesis", stat: "Gemini", pill: "IA Activa" },
      { title: "Turnos & Suscripción", subtitle: "Cash shifts + Stripe Billing", stat: "Activo", pill: "Multi-Tenant" },
    ],
  },
  {
    id: "glyphbrain",
    title: "GlyphBrain",
    shortLabel: "Open Source · IA",
    tagline: "Segundo cerebro con grafo 2D interactivo, búsqueda semántica pgvector y voz en vivo.",
    category: "Open Source",
    tab: "ai-oss",
    gradient: "linear-gradient(145deg, #a7f34d 0%, #5eead4 50%, #7dd3fc 100%)",
    badgeTone: "bg-lime-100 text-lime-950",
    summary:
      "Red personal de conocimiento que combina edición por bloques estilo Notion, visualización en grafo de fuerzas 2D y un asistente Gemini AI capaz de buscar, sintetizar y enlazar notas por significado.",
    problem:
      "Las apps tradicionales de notas organizan archivos en carpetas rígidas donde las conexiones conceptuales se pierden y la búsqueda exacta falla si cambias las palabras.",
    solution:
      "Generación de embeddings en Supabase PostgreSQL + pgvector, grafo dinámico con react-force-graph-2d, editor BlockNote con menciones @, interacción por voz con Gemini Live API y soporte PWA offline con Serwist.",
    highlights: [
      "Búsqueda semántica vectorial y auto-sugerencia inteligente de enlaces",
      "Asistente Gemini AI con tool calling sobre tu grafo personal",
      "Interacción por voz de baja latencia mediante Gemini Live API",
      "Código fuente abierto en GitHub bajo licencia MIT",
    ],
    metrics: [
      { label: "Motor vectorial", value: "pgvector" },
      { label: "Interfaz", value: "Grafo 2D + Voz" },
      { label: "Licencia", value: "MIT Pública" },
    ],
    stack: ["Next.js 16", "React 19", "Supabase pgvector", "Google Gemini", "BlockNote", "Zustand", "Serwist PWA"],
    repoUrl: "https://github.com/khryazid/glyphbrain",
    mockupLines: [
      { title: "Grafo Semántico 2D", subtitle: "Clústeres por similitud coseno", stat: "48 nodos", pill: "ForceGraph" },
      { title: "Agente Gemini + Tools", subtitle: "Síntesis y cruce de notas", stat: "Live API", pill: "Voz + Texto" },
      { title: "Editor BlockNote", subtitle: "Bloques y menciones @ rápidas", stat: "PWA", pill: "Open Source" },
    ],
  },
  {
    id: "ai-image-upscaler",
    title: "AI Image Upscaler",
    shortLabel: "Open Source · PyTorch",
    tagline: "Superresolución Real-ESRGAN (2x/4x) y colorización ECCV16 100% local en Python.",
    category: "Open Source",
    tab: "ai-oss",
    gradient: "linear-gradient(145deg, #ffd15c 0%, #ff8400 55%, #ff5c8a 100%)",
    badgeTone: "bg-amber-100 text-amber-950",
    summary:
      "Aplicación web local en Python y Flask para restaurar, escalar hasta 4x y colorizar imágenes antiguas sin enviar ni un byte a servidores externos.",
    problem:
      "Las herramientas online de mejora de imágenes imponen límites de pago, marcas de agua y suben material privado de usuarios o clientes a la nube.",
    solution:
      "Implementación directa de arquitectura RRDBNet (Real-ESRGAN) y generador ECCV16 sobre PyTorch y ONNX Runtime con procesamiento por tiles en CPU para evitar desbordamientos de memoria.",
    highlights: [
      "Procesamiento por mosaicos (tiles) optimizado para CPU sin colapsar RAM",
      "Soporte dual PyTorch y ONNX Runtime para inferencia acelerada",
      "Descarga automática de pesos oficiales e interfaz web lista en 1 clic",
      "Repositorio público limpio en GitHub bajo licencia MIT",
    ],
    metrics: [
      { label: "Escalas IA", value: "2x / 4x" },
      { label: "Privacidad", value: "100% Local" },
      { label: "Modelos", value: "ESRGAN + ECCV16" },
    ],
    stack: ["Python", "Flask", "PyTorch", "Real-ESRGAN", "ONNX Runtime", "OpenCV", "Pillow"],
    repoUrl: "https://github.com/khryazid/ai-image-upscaler",
    mockupLines: [
      { title: "Pipeline Real-ESRGAN", subtitle: "Inferencia por tiles en CPU", stat: "4x PNG", pill: "PyTorch" },
      { title: "Colorizador ECCV16", subtitle: "Restauración cromática automática", stat: "Local", pill: "ONNX" },
      { title: "Comparador Antes/Después", subtitle: "Sin cuotas ni nube externa", stat: "0 bytes", pill: "Privado" },
    ],
  },
  {
    id: "pos-bimonetario",
    title: "Sistema POS Bimonetario",
    shortLabel: "Retail & Finanzas",
    tagline: "Punto de venta, inventario dual USD/VES y lectura automática de facturas con IA.",
    category: "SaaS Privado",
    tab: "saas",
    gradient: "linear-gradient(145deg, #b9f442 0%, #ffe657 55%, #ff9b42 100%)",
    badgeTone: "bg-yellow-100 text-yellow-950",
    summary:
      "Suite operativa para comercios con alta rotación que necesitan operar simultáneamente con dos regímenes cambiarios, controlar créditos de clientes y cerrar caja por turno con precisión.",
    problem:
      "La volatilidad cambiaria y la carga manual de facturas de proveedores generan márgenes erróneos y pérdidas silenciosas en caja.",
    solution:
      "Motor de precios bimonetario BCV vs. Monitor en TypeScript estricto, store modular en Zustand, carga mágica de facturas asistida con IA (OCR + LLM), recibos 80 mm/WhatsApp y RPC atómicos en Supabase.",
    highlights: [
      "Ventas al contado y a crédito con validación en tiempo real vs. límite de deuda",
      "Cierres X / Z con desglose por método de pago, gastos y utilidad neta",
      "Endurecimiento transaccional en PostgreSQL para devoluciones y stock",
      "Renderizado optimizado para catálogos superiores a 1,000 SKUs",
    ],
    metrics: [
      { label: "Regímenes", value: "BCV + Monitor" },
      { label: "Cierre de caja", value: "X / Z exacto" },
      { label: "Carga facturas", value: "OCR + IA" },
    ],
    stack: ["React 19", "TypeScript", "Vite", "Zustand", "Supabase", "decimal.js", "Tailwind CSS"],
    mockupLines: [
      { title: "Motor Bimonetario", subtitle: "Conversión USD ↔ VES al instante", stat: "BCV / TH", pill: "decimal.js" },
      { title: "Carga Mágica de Factura", subtitle: "Extracción automática de SKUs", stat: "IA OCR", pill: "Ahorro 80%" },
      { title: "Cierre de Turno Z", subtitle: "Utilidad neta y métodos de pago", stat: "Auditado", pill: "RPC SQL" },
    ],
  },
  {
    id: "aerolex-global",
    title: "AeroLex Global",
    shortLabel: "LegalTech & Aviation",
    tagline: "Plataforma web, calculadora operativa y portal ejecutivo para firma aeronáutica.",
    category: "Plataforma Web",
    tab: "saas",
    gradient: "linear-gradient(145deg, #93c5fd 0%, #818cf8 52%, #e879f9 100%)",
    badgeTone: "bg-sky-100 text-sky-950",
    summary:
      "Presencia digital de alto nivel y herramientas interactivas para asesoría legal aeronáutica y corretaje ejecutivo multijurisdicción (INAC YV / FAA N-Number).",
    problem:
      "Los clientes de aviación ejecutiva necesitan evaluar costos reales de adquisición, agendar inspecciones técnicas PPI y consultar inventario off-market sin fricción.",
    solution:
      "Aplicación Next.js 16 con pilares interactivos sticky, calculadora financiera operativa, flujo dedicado de inspección PPI in situ, portal de clientes y CMS respaldado por Supabase.",
    highlights: [
      "Calculadora de costos operativos y de adquisición de aeronaves",
      "Catálogo brokerage con fichas técnicas y alertas off-market",
      "Integración directa de calificación y contacto ejecutivo",
      "Portal y CMS gestionados sobre Supabase y Zod",
    ],
    metrics: [
      { label: "Jurisdicciones", value: "INAC + FAA" },
      { label: "Módulos", value: "6 rutas clave" },
      { label: "Arquitectura", value: "Next.js 16" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Supabase", "Zod"],
    mockupLines: [
      { title: "Calculadora Operativa", subtitle: "Estimación de misión y costos", stat: "Tiempo real", pill: "Zod" },
      { title: "Inspección PPI in situ", subtitle: "Alcance técnico SVCS / SVMI", stat: "YV / N-Num", pill: "Multijurisd." },
      { title: "Portal Off-Market", subtitle: "Alertas y gestión CMS privada", stat: "Supabase", pill: "SSR" },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-architecture",
    number: "01",
    title: "Arquitectura y reglas antes de picar código",
    description:
      "Cada sistema arranca modelando dominio, aislamiento multi-empresa (RLS) y reglas financieras estrictas para evitar deuda técnica desde el día uno.",
    gradient: "linear-gradient(140deg, #ff8400 0%, #ff8ee5 100%)",
    badge: "Diseño de Sistema",
    mockupTitle: "Esquema PostgreSQL + RLS Multi-Tenant",
    mockupBullets: [
      "Políticas por tenant_id y roles SECURITY DEFINER",
      "Contratos tipados end-to-end con TypeScript + Zod",
      "Bitácora inmutable de auditoría para operaciones críticas",
    ],
    mockupTag: "0 fugas entre empresas",
  },
  {
    id: "step-offline",
    number: "02",
    title: "Resiliencia Offline-First y velocidad real",
    description:
      "Cuando el cliente pierde señal en calle o clínica, la app no se detiene: guarda en IndexedDB al instante y sincroniza de forma idempotente al volver.",
    gradient: "linear-gradient(140deg, #ff70b8 0%, #a855f7 100%)",
    badge: "0 ms Local",
    mockupTitle: "Motor Local-First + Cola de Sincronización",
    mockupBullets: [
      "Persistencia inmediata en Dexie / IndexedDB v3",
      "Sync Worker con reintentos exponenciales y delta-sync",
      "Aritmética financiera exacta sin errores flotantes (decimal.js)",
    ],
    mockupTag: "PWA Lista para Producción",
  },
  {
    id: "step-ai",
    number: "03",
    title: "IA aplicada que resuelve trabajo real",
    description:
      "Integro modelos generativos, búsqueda vectorial pgvector e inferencia local PyTorch donde realmente ahorran tiempo operativo, sin humo innecesario.",
    gradient: "linear-gradient(140deg, #bef264 0%, #ffb347 100%)",
    badge: "IA Útil",
    mockupTitle: "Pipelines de Inteligencia Artificial",
    mockupBullets: [
      "Asistentes con tool calling y contexto estructurado (Gemini API)",
      "Embeddings semánticos con Supabase pgvector",
      "Inferencia 100% local sin costos de API (PyTorch / ONNX)",
    ],
    mockupTag: "Cloud + Local AI",
  },
  {
    id: "step-qa",
    number: "04",
    title: "Verificación rigurosa y despliegue continuo",
    description:
      "Entrego código auditado con typecheck estricto, pruebas E2E, accesibilidad verificada y flujo limpio en ramas dev → test → main conectado a Vercel.",
    gradient: "linear-gradient(140deg, #7dd3fc 0%, #c084fc 100%)",
    badge: "Release Listo",
    mockupTitle: "Pipeline de Calidad y Entrega",
    mockupBullets: [
      "Validación automatizada: TypeScript strict, Vitest y Playwright",
      "Verificación de migraciones y políticas SQL antes de producción",
      "Previews por rama en Vercel y documentación clara en español",
    ],
    mockupTag: "main · test · dev",
  },
];

export const CAPABILITY_BADGES: CapabilityBadge[] = [
  { label: "Offline-First", detail: "Dexie · IndexedDB · PWA" },
  { label: "Supabase RLS", detail: "PostgreSQL Multi-Tenant" },
  { label: "Gemini AI", detail: "Tool Calling · pgvector" },
  { label: "Multimoneda", detail: "decimal.js · USD/VES/COP" },
  { label: "Python & ML", detail: "FastAPI · PyTorch · ONNX" },
  { label: "Vercel Cloud", detail: "Next.js 16 · Edge · CI" },
];

export const SCALE_CATEGORY_PILLS: ScaleCategoryPill[] = [
  { label: "un SaaS B2B", bg: "#cf67ff", text: "#ffffff", category: "SaaS B2B" },
  { label: "una app con IA", bg: "#9ed0ff", text: "#0a0a0a", category: "App con IA" },
  { label: "un sistema offline-first", bg: "#c8f552", text: "#0a0a0a", category: "SaaS B2B" },
  { label: "una web de alto impacto", bg: "#ff9b42", text: "#0a0a0a", category: "Plataforma Web" },
];

export const SERVICE_CARDS: ServiceCardItem[] = [
  {
    id: "saas-turnkey",
    title: "Productos SaaS llave en mano",
    description:
      "De la arquitectura de base de datos a la interfaz final en producción: multi-empresa, roles, pagos, PDFs y operación resiliente.",
    ctaLabel: "Cotizar producto",
    presetCategory: "SaaS B2B",
    presetBrief: "Hola Khristian, necesito diseñar y lanzar un producto SaaS / sistema web a medida para mi negocio.",
    variant: "templates",
  },
  {
    id: "ai-automation",
    title: "IA aplicada a tus flujos",
    description:
      "Integro asistentes con Gemini AI, búsqueda semántica en tus datos (pgvector) o modelos locales en Python adaptados a tu operación.",
    ctaLabel: "Explorar solución IA",
    presetCategory: "App con IA",
    presetBrief: "Hola Khristian, quiero integrar inteligencia artificial o automatización en un flujo real de trabajo.",
    variant: "ai",
  },
  {
    id: "founder-direct",
    title: "Directo con el fundador",
    description:
      "Sin capas intermedias: hablas directamente con quien diseña la arquitectura, escribe el código crítico y responde en tu equipo.",
    ctaLabel: "Agendar conversación",
    presetCategory: "Equipo Senior",
    presetBrief: "Hola Khristian, me gustaría conversar sobre sumar ingeniería full-stack senior a nuestro equipo o proyecto.",
    variant: "founder",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Trabajas proyectos completos como Glyph Agency o te integras a equipos?",
    answer:
      "Ambas modalidades. Puedo liderar la construcción completa de un producto SaaS o plataforma web desde cero bajo Glyph Agency, o integrarme como Full-Stack Product Engineer senior en equipos remotos que necesiten acelerar arquitectura, Next.js/React, Supabase o IA.",
  },
  {
    id: "faq-2",
    question: "¿Por qué varios de tus productos principales están en repositorios privados?",
    answer:
      "Productos como GlyphCore B2B, Glyphix (HCE) y sistemas comerciales de clientes contienen propiedad intelectual y reglas de negocio privadas. En este portafolio te muestro su arquitectura real y además mantengo proyectos públicos Open Source en GitHub (como GlyphBrain y AI Image Upscaler) donde puedes auditar mi código directamente.",
  },
  {
    id: "faq-3",
    question: "¿Cuál es tu stack principal en producción?",
    answer:
      "En web y frontend trabajo principalmente con Next.js (App Router), React, TypeScript estricto, Tailwind CSS y Zustand. En backend y datos uso PostgreSQL / Supabase (RLS, RPCs, pgvector), Dexie/IndexedDB para modo offline, y Python (FastAPI, Flask, PyTorch) para bots e IA.",
  },
  {
    id: "faq-4",
    question: "¿Qué significa exactamente que construyes apps Offline-First?",
    answer:
      "Significa que la interfaz lee y escribe primero en almacenamiento local seguro del navegador (IndexedDB / Dexie) para responder en milisegundos incluso si cae internet, y un worker sincroniza los cambios en segundo plano cuando regresa la conexión.",
  },
  {
    id: "faq-5",
    question: "¿Cómo manejas seguridad y multi-tenancy en proyectos SaaS?",
    answer:
      "Nunca confío la seguridad únicamente al frontend. Aplico Row Level Security (RLS) directamente en PostgreSQL, funciones RPC con SECURITY DEFINER cuando se requieren operaciones atómicas, validación estricta con Zod en APIs y separación de claves de servidor.",
  },
  {
    id: "faq-6",
    question: "¿En qué zona horaria trabajas y cómo es la comunicación?",
    answer:
      "Opero desde Venezuela en horario UTC-4 (muy cercano a EST / costa este de EE. UU.), con entregas semanales visibles en Vercel Preview URLs, repositorios ordenados (main / test / dev) y comunicación directa en español o inglés.",
  },
  {
    id: "faq-7",
    question: "¿Cuánto tarda normalmente lanzar una primera versión funcional (MVP)?",
    answer:
      "Una web comercial o landing interactiva de alto impacto suele tomar entre 1 y 2 semanas; un MVP SaaS multi-usuario con base de datos, autenticación y flujos clave suele tomar entre 4 y 8 semanas según el alcance.",
  },
];

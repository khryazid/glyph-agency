export type ProjectTab = "all" | "gestion" | "web-apps";

export type ProjectCategory =
  | "Sistema Empresarial"
  | "Salud & Clínicas"
  | "Comercio & Retail"
  | "Plataforma Web"
  | "App Móvil";

export type HeroCategory =
  | "Sistema a Medida"
  | "Web Comercial"
  | "Automatización e IA"
  | "Asesoría Digital";

export interface ProjectItem {
  id: string;
  title: string;
  shortLabel: string;
  tagline: string;
  category: ProjectCategory;
  tab: Exclude<ProjectTab, "all">;
  gradient: string;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  mockupLines: { title: string; subtitle: string; stat: string }[];
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
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://khryazid-portfolio.vercel.app";

export const PROFILE = {
  name: "Khristian Ali",
  handle: "@khryazid",
  role: "Fundador de Glyph Agency — Desarrollador de Software & Soluciones Digitales para Empresas",
  location: "Venezuela · Atención Remota",
  githubUrl: "https://github.com/khryazid",
  linkedinUrl: "https://www.linkedin.com/in/khyazid",
  xUrl: "https://x.com/khr_yazid",
  instagramUrl: "https://www.instagram.com/khryazid",
};

export const HERO_TYPEWRITER_EXAMPLES = [
  "Un sistema para controlar ventas, inventario, crédito y cobranzas en varias monedas...",
  "Una página web profesional que atraiga clientes y cotice nuestros servicios al instante...",
  "Automatizar lectura de facturas, citas o atención al cliente con inteligencia artificial...",
  "Un portal donde mis vendedores tomen pedidos en la calle aunque se caiga el internet...",
];

export const HERO_CATEGORY_PILLS: HeroCategory[] = [
  "Sistema a Medida",
  "Web Comercial",
  "Automatización e IA",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "glyphcore",
    title: "GlyphCore B2B",
    shortLabel: "Distribuidoras y Mayoristas",
    tagline:
      "Plataforma comercial completa para controlar pedidos, vendedores en ruta, crédito y cobranzas sin depender del internet.",
    category: "Sistema Empresarial",
    tab: "gestion",
    gradient: "linear-gradient(145deg, #ff8400 0%, #ff8ee5 52%, #d559ff 100%)",
    summary:
      "Sistema integral para distribuidoras y comercios mayoristas con cuatro espacios independientes: compradores, vendedores en calle, gerencia del comercio y administración global.",
    problem:
      "Muchas distribuidoras pierden ventas cuando sus vendedores se quedan sin señal en ruta, cometen errores al manejar USD/Bs/COP y sufren desorden entre lo pedido, lo despachado y lo cobrado.",
    solution:
      "Una plataforma lista para funcionar desde el teléfono o computadora incluso sin conexión, con reglas claras de crédito, aprobación parcial de pedidos, control de rutas y estados de cuenta en PDF con un clic.",
    highlights: [
      "4 accesos independientes: Comprador, Vendedor en Ruta, Comercio y Dirección",
      "Repetición de pedidos en 1 clic y lista diaria priorizada por cliente",
      "Manejo exacto de múltiples monedas (USD / Bs / COP) y abonos parciales",
      "Estados de cuenta, recibos y reportes listos para imprimir o enviar",
    ],
    metrics: [
      { label: "Áreas cubiertas", value: "4 portales" },
      { label: "Monedas", value: "USD / Bs / COP" },
      { label: "Operación", value: "Con y sin señal" },
    ],
    features: ["Pedidos sin internet", "Crédito y cobranzas", "Reportes PDF"],
    mockupLines: [
      { title: "Panel del Comercio", subtitle: "Aprobación y despacho de pedidos", stat: "$14,820" },
      { title: "Ruta de Vendedores", subtitle: "12 clientes asignados hoy", stat: "Al día" },
      { title: "Cuentas por Cobrar", subtitle: "Abonos y límite de crédito", stat: "Controlado" },
    ],
  },
  {
    id: "glyphix",
    title: "Glyphix",
    shortLabel: "Clínicas y Consultorios",
    tagline:
      "Sistema de gestión clínica e historias médicas que sigue trabajando aunque falle la conexión de tu centro de salud.",
    category: "Salud & Clínicas",
    tab: "gestion",
    gradient: "linear-gradient(145deg, #ff70b8 0%, #cf67ff 55%, #7c6bff 100%)",
    summary:
      "Plataforma diseñada para consultorios independientes y redes de clínicas: agenda en vivo, historias clínicas rápidas, asistente inteligente de apoyo médico y control de caja por turnos.",
    problem:
      "Cuando falla el internet en una clínica, la recepción y los doctores se frenan, se duplican citas y el historial del paciente queda disperso entre papeles y archivos sueltos.",
    solution:
      "Una herramienta médica que guarda cada consulta al instante en el equipo y sincroniza automáticamente al volver la red, protegiendo la privacidad de cada sede y permitiendo exportar expedientes completos.",
    highlights: [
      "Accesos diferenciados para dueño, médicos, asistentes y laboratorio",
      "Agenda actualizada en tiempo real y control estricto de caja por turno",
      "Apoyo inteligente para agilizar diagnósticos y notas de consulta",
      "Descarga inmediata de récipes, informes y expedientes completos",
    ],
    metrics: [
      { label: "Atención", value: "Sin interrupciones" },
      { label: "Perfiles", value: "8 roles claros" },
      { label: "Expedientes", value: "PDF al instante" },
    ],
    features: ["Historias clínicas", "Agenda y caja", "Multisede privado"],
    mockupLines: [
      { title: "Consulta Médica", subtitle: "Guardado instantáneo en equipo", stat: "En línea" },
      { title: "Asistente de Consulta", subtitle: "Apoyo rápido en diagnósticos", stat: "Activo" },
      { title: "Caja y Suscripciones", subtitle: "Cierre de turno ordenado", stat: "Auditado" },
    ],
  },
  {
    id: "pos-bimonetario",
    title: "Sistema POS & Inventario",
    shortLabel: "Comercios y Tiendas",
    tagline:
      "Punto de venta, inventario inteligente, cotizaciones y lectura automática de facturas en varias monedas.",
    category: "Comercio & Retail",
    tab: "gestion",
    gradient: "linear-gradient(145deg, #b9f442 0%, #ffe657 55%, #ff9b42 100%)",
    summary:
      "Sistema administrativo pensado para tiendas y negocios con alto movimiento: facturación ágil, control real de inventario, ventas a crédito y cierres de caja X/Z transparentes.",
    problem:
      "Cargar facturas de proveedores a mano toma horas y cualquier descuido con el cambio de moneda termina comiéndose el margen de ganancia del negocio.",
    solution:
      "Un punto de venta rápido que calcula automáticamente precios y márgenes por tasa, lee facturas con inteligencia artificial para cargar mercancía en segundos y envía recibos por WhatsApp.",
    highlights: [
      "Ventas al contado o a crédito con alertas cuando un cliente supera su límite",
      "Carga inteligente de facturas desde foto o PDF para actualizar costos y stock",
      "Cotizaciones profesionales en PDF que se convierten en venta con 1 clic",
      "Cierre de turno X/Z con gastos del día y utilidad neta real",
    ],
    metrics: [
      { label: "Precios", value: "USD y Bs" },
      { label: "Carga facturas", value: "Automática" },
      { label: "Recibos", value: "80mm y WhatsApp" },
    ],
    features: ["Punto de venta rápido", "Lectura de facturas", "Cierre X / Z"],
    mockupLines: [
      { title: "Caja y Facturación", subtitle: "Conversión automática al cobro", stat: "BCV / Ref" },
      { title: "Carga de Compras", subtitle: "Lectura inteligente de factura", stat: "-80% tiempo" },
      { title: "Cierre del Día", subtitle: "Ventas, gastos y utilidad neta", stat: "Cuadrado" },
    ],
  },
  {
    id: "suite-comercial",
    title: "Suite Comercial por Rubro",
    shortLabel: "Negocios de Servicios",
    tagline:
      "Soluciones listas para barberías, clínicas dentales, ferreterías, concesionarios y agroindustria con reservas y cotizaciones.",
    category: "Sistema Empresarial",
    tab: "gestion",
    gradient: "linear-gradient(145deg, #a7f34d 0%, #5eead4 50%, #7dd3fc 100%)",
    summary:
      "Ecosistema de aplicaciones comerciales enfocadas en captar clientes y ordenar la operación diaria de pymes: reservas 24/7 sin choques de horario, cotizadores mayoristas y seguimiento de prospectos.",
    problem:
      "Muchos negocios atienden citas, presupuestos y clientes por notas sueltas o mensajes perdidos en WhatsApp, dejando dinero sobre la mesa por falta de seguimiento.",
    solution:
      "Herramientas simples y directas adaptadas a cada rubro: agenda que bloquea horarios ocupados, cotizadores instantáneos con PDF, alertas de seguimiento comercial y reportes claros para gerencia.",
    highlights: [
      "Agenda de citas 24/7 con recordatorios automáticos por WhatsApp",
      "Cotizador comercial y portal postventa con historial por cliente",
      "Tablero de oportunidades para no olvidar ningún presupuesto enviado",
      "Propuestas comerciales en PDF listas para entregar al cliente",
    ],
    metrics: [
      { label: "Rubros listos", value: "4 verticales" },
      { label: "Reservas", value: "24/7 sin choques" },
      { label: "Presupuestos", value: "PDF + WhatsApp" },
    ],
    features: ["Agenda de citas", "Cotizador rápido", "Control de clientes"],
    mockupLines: [
      { title: "Agenda de Citas", subtitle: "Reservas web sin choques de hora", stat: "24/7" },
      { title: "Cotizador Comercial", subtitle: "Lista mayorista y envío directo", stat: "1 clic" },
      { title: "Seguimiento de Ventas", subtitle: "Alertas y tablero comercial", stat: "Ordenado" },
    ],
  },
  {
    id: "aerolex-global",
    title: "AeroLex Global",
    shortLabel: "Firma Legal & Brokerage",
    tagline:
      "Web corporativa premium, calculadora de costos y portal privado para firma aeronáutica internacional.",
    category: "Plataforma Web",
    tab: "web-apps",
    gradient: "linear-gradient(145deg, #93c5fd 0%, #818cf8 52%, #e879f9 100%)",
    summary:
      "Presencia digital de alto nivel diseñada para transmitir autoridad desde el primer segundo, explicar servicios complejos de forma clara y captar clientes calificados.",
    problem:
      "Los clientes de alto valor descartan servicios profesionales cuando la web luce anticuada o no les permite estimar costos y agendar una asesoría sin vueltas.",
    solution:
      "Sitio web editorial con recorrido interactivo por pilares de servicio, calculadora operativa en vivo, página dedicada de inspecciones, catálogo exclusivo y acceso directo a WhatsApp.",
    highlights: [
      "Diseño moderno pensado para generar confianza inmediata en clientes exigentes",
      "Calculadora interactiva de costos y estimación de operaciones",
      "Catálogo de oportunidades privadas con ficha de detalles",
      "Panel interno para actualizar inventario y contenido sin programar",
    ],
    metrics: [
      { label: "Enfoque", value: "Captación B2B" },
      { label: "Herramienta", value: "Calculadora" },
      { label: "Gestión", value: "Autoadministrable" },
    ],
    features: ["Web corporativa", "Calculadora en vivo", "Portal de clientes"],
    mockupLines: [
      { title: "Recorrido de Servicios", subtitle: "Presentación ejecutiva clara", stat: "4 pilares" },
      { title: "Calculadora Operativa", subtitle: "Estimación inmediata de costos", stat: "Interactiva" },
      { title: "Catálogo Privado", subtitle: "Consultas y agenda directa", stat: "Calificado" },
    ],
  },
  {
    id: "nova-movride",
    title: "Nova / MOVRIDE",
    shortLabel: "Delivery y Movilidad",
    tagline:
      "Superapp de pedidos, comercios locales y traslados con pantallas separadas para cliente, tienda y repartidor.",
    category: "App Móvil",
    tab: "web-apps",
    gradient: "linear-gradient(145deg, #ffd15c 0%, #ff8400 55%, #ff5c8a 100%)",
    summary:
      "Experiencia completa de aplicación móvil para validar modelos de delivery, comercio local y movilidad urbana, integrando todo el recorrido desde el pedido hasta la entrega.",
    problem:
      "Presentar una idea de negocio móvil ante socios o inversionistas con diapositivas estáticas no transmite cómo funciona realmente la operación.",
    solution:
      "Prototipo funcional navegable con vista de cliente, portal para comercios afiliados, aplicación de conductor y panel central de monitoreo en tiempo real.",
    highlights: [
      "Flujo completo de compra: catálogo, carrito, pago y seguimiento en ruta",
      "Módulo de traslados urbanos con selección de ruta y flota",
      "Vistas dedicadas para comercios aliados, conductores y administración",
      "Diseño pensado 100% para usarse con una mano desde el celular",
    ],
    metrics: [
      { label: "Ecosistema", value: "4 perfiles" },
      { label: "Pantallas", value: "20+ flujos" },
      { label: "Experiencia", value: "100% Móvil" },
    ],
    features: ["Pedidos y delivery", "Panel de comercios", "App de conductor"],
    mockupLines: [
      { title: "App del Cliente", subtitle: "Tiendas, carrito y seguimiento", stat: "Fluido" },
      { title: "Portal de Aliados", subtitle: "Gestión de órdenes y menú", stat: "Tiempo real" },
      { title: "Panel Central", subtitle: "Control de entregas y flota", stat: "Visión 360°" },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-diagnosis",
    number: "01",
    title: "Entiendo tu operación antes de construir",
    description:
      "Primero revisamos cómo vendes, cobras y controlas tu negocio hoy. El software se adapta a tu flujo real, no al revés.",
    gradient: "linear-gradient(140deg, #ff8400 0%, #ff8ee5 100%)",
    badge: "Paso 01 · Diagnóstico",
    mockupTitle: "Mapa Claro de Tu Negocio",
    mockupBullets: [
      "Identificamos cuellos de botella en ventas, caja o inventario",
      "Definimos permisos claros para dueños, vendedores y personal",
      "Te muestro una propuesta concreta con alcance y tiempos reales",
    ],
    mockupTag: "Sin rodeos",
  },
  {
    id: "step-resilience",
    number: "02",
    title: "Sistemas pensados para el mundo real",
    description:
      "Si en tu zona falla la luz o el internet, tu operación no puede parar. Construyo herramientas rápidas que siguen trabajando contigo.",
    gradient: "linear-gradient(140deg, #ff70b8 0%, #a855f7 100%)",
    badge: "Paso 02 · Continuidad",
    mockupTitle: "Tu Negocio No Se Detiene",
    mockupBullets: [
      "Registra ventas y pedidos incluso sin conexión a internet",
      "Control exacto de precios y cobranzas en varias monedas",
      "Cada sucursal y dato comercial protegido y separado",
    ],
    mockupTag: "Cero pausas",
  },
  {
    id: "step-ai",
    number: "03",
    title: "Automatización práctica que ahorra horas",
    description:
      "Uso inteligencia artificial donde realmente genera retorno: leer facturas en segundos, agilizar cotizaciones y responder más rápido.",
    gradient: "linear-gradient(140deg, #bef264 0%, #ffb347 100%)",
    badge: "Paso 03 · Automatización",
    mockupTitle: "Menos Trabajo Manual",
    mockupBullets: [
      "Carga de productos y facturas sin transcribir línea por línea",
      "Presupuestos, recibos y reportes en PDF generados al instante",
      "Integración directa con WhatsApp, correo y pagos online",
    ],
    mockupTag: "Ahorro diario",
  },
  {
    id: "step-launch",
    number: "04",
    title: "Avances visibles cada semana y soporte directo",
    description:
      "Vas viendo y probando avances reales desde un enlace privado cada semana, hasta dejar el sistema listo con tu equipo.",
    gradient: "linear-gradient(140deg, #7dd3fc 0%, #c084fc 100%)",
    badge: "Paso 04 · Lanzamiento",
    mockupTitle: "Acompañamiento Completo",
    mockupBullets: [
      "Pruebas reales en celular y computadora antes de salir en vivo",
      "Capacitación práctica para que tu equipo lo use sin miedo",
      "Soporte cercano para nuevas mejoras conforme crece tu empresa",
    ],
    mockupTag: "Trato directo",
  },
];

export const CAPABILITY_BADGES: CapabilityBadge[] = [
  { label: "Sigue sin internet", detail: "Ventas y pedidos en ruta" },
  { label: "Varias monedas", detail: "USD, Bolívares y Pesos" },
  { label: "Reportes PDF", detail: "Facturas y estados de cuenta" },
  { label: "Automatización IA", detail: "Menos carga manual" },
  { label: "Control por roles", detail: "Cada quien ve lo suyo" },
  { label: "Celular y PC", detail: "Rápido desde cualquier lugar" },
];

export const SCALE_CATEGORY_PILLS: ScaleCategoryPill[] = [
  { label: "un sistema de ventas y stock", bg: "#cf67ff", text: "#ffffff", category: "Sistema a Medida" },
  { label: "una web que atraiga clientes", bg: "#9ed0ff", text: "#0a0a0a", category: "Web Comercial" },
  { label: "automatizaciones con IA", bg: "#c8f552", text: "#0a0a0a", category: "Automatización e IA" },
  { label: "una app para tus vendedores", bg: "#ff9b42", text: "#0a0a0a", category: "Sistema a Medida" },
];

export const SERVICE_CARDS: ServiceCardItem[] = [
  {
    id: "custom-systems",
    title: "Sistemas a medida para tu empresa",
    description:
      "Digitalizo tu operación con herramientas hechas para tu forma de trabajar: inventario, ventas, crédito, cobranzas, clínicas o pedidos.",
    ctaLabel: "Cotizar sistema",
    presetCategory: "Sistema a Medida",
    presetBrief:
      "Hola Khristian, me gustaría cotizar un sistema a medida para ordenar las ventas, inventario o gestión de mi negocio.",
    variant: "templates",
  },
  {
    id: "ai-automation",
    title: "Webs y automatización inteligente",
    description:
      "Sitios web que transmiten confianza y herramientas con IA para leer documentos, agilizar cotizaciones y atender clientes más rápido.",
    ctaLabel: "Explorar solución",
    presetCategory: "Automatización e IA",
    presetBrief:
      "Hola Khristian, quiero una web comercial o automatizar tareas repetitivas en mi negocio con inteligencia artificial.",
    variant: "ai",
  },
  {
    id: "founder-direct",
    title: "Trato directo sin intermediarios",
    description:
      "Hablas directamente conmigo de principio a fin: analizamos tu necesidad, ves avances semanales y lanzamos sin burocracia.",
    ctaLabel: "Conversar ahora",
    presetCategory: "Asesoría Digital",
    presetBrief:
      "Hola Khristian, me gustaría conversar directamente contigo sobre cómo mejorar la parte digital de mi empresa.",
    variant: "founder",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Qué tipo de proyectos desarrollas para negocios y empresas?",
    answer:
      "Desde páginas web de alto impacto para captar clientes hasta sistemas completos de punto de venta, control de inventario, gestión de clínicas, plataformas de pedidos para distribuidoras y automatizaciones con inteligencia artificial.",
  },
  {
    id: "faq-2",
    question: "¿Qué diferencia hay entre contratar un sistema a medida y usar uno genérico?",
    answer:
      "Un sistema genérico te obliga a cambiar la forma en que trabajas y te cobra mensualidades por usuario para siempre. Un sistema a medida se construye alrededor de tus reglas reales (monedas, comisiones, créditos, sucursales) y crece contigo.",
  },
  {
    id: "faq-3",
    question: "¿Los sistemas sirven si en mi negocio o tienda falla el internet?",
    answer:
      "Sí. Varios de los sistemas que desarrollo están preparados para seguir registrando pedidos, consultas o ventas cuando se cae la conexión y actualizar todo automáticamente en cuanto vuelve la señal.",
  },
  {
    id: "faq-4",
    question: "¿Puedo ver avances antes de que el proyecto esté terminado?",
    answer:
      "Sí, siempre. Trabajo con entregas semanales en un enlace privado de pruebas para que revises pantallas reales desde tu teléfono o computadora y hagamos ajustes sobre la marcha.",
  },
  {
    id: "faq-5",
    question: "¿Incluyes diseño y textos o debo tener todo listo antes de empezar?",
    answer:
      "No necesitas tenerlo todo resuelto. Te ayudo a aterrizar la estructura, los flujos, el diseño visual y los textos clave enfocados en lo que tus clientes necesitan entender para comprarte o usar tu herramienta.",
  },
  {
    id: "faq-6",
    question: "¿Cómo manejan múltiples monedas como dólares, bolívares o pesos?",
    answer:
      "Los sistemas comerciales contemplan tasas configurables, precios en varias divisas, registro exacto de abonos y reportes claros para que nunca pierdas control del margen ni tengas descuadres en caja.",
  },
  {
    id: "faq-7",
    question: "¿Cuánto tiempo toma tener una primera versión lista para usar?",
    answer:
      "Una web comercial moderna suele estar lista en 1 a 2 semanas. Un sistema administrativo o plataforma comercial completa toma normalmente entre 4 y 8 semanas según la cantidad de módulos y roles.",
  },
];

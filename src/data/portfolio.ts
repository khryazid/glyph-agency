export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glyph-agency.vercel.app";

export const AGENCY = {
  name: "Glyph Agency",
  shortName: "Glyph",
  tagline:
    "Software a medida, páginas web comerciales, redes sociales y Meta Ads para negocios y empresas.",
  location: "Venezuela · Atención Remota Internacional",
  heroEyebrow: "Glyph Agency · Software & Mercadeo Digital",
  linkedinUrl: "https://www.linkedin.com/in/khyazid",
  danielaLinkedinUrl: "https://www.linkedin.com/in/daniela-quiroz-ba4418246",
  instagramUrl: "https://www.instagram.com/khr_yazid/",
  xUrl: "https://x.com/khr_yazid",
  githubUrl: "https://github.com/khryazid",
} as const;

export interface CofounderProfile {
  id: string;
  name: string;
  initials: string;
  role: string;
  credential?: string;
  specialty: string;
  bio: string;
  highlights: string[];
  linkedinUrl: string;
  accentBg: string;
  accentText: string;
}

export const COFOUNDERS: CofounderProfile[] = [
  {
    id: "khristian",
    name: "Khristian Ali",
    initials: "KA",
    role: "Cofundador · Desarrollo de Software, Webs y Automatización",
    specialty: "Sistemas de Gestión, Webs Comerciales y Automatización",
    bio: "Dirige la creación de sistemas internos para ventas, inventario y cobranzas, páginas web rápidas orientadas a conversión y herramientas de automatización que ahorran horas operativas cada semana.",
    highlights: [
      "Sistemas POS e inventario que trabajan sin internet",
      "Plataformas administrativas y gestión clínica",
      "Páginas web comerciales y flujos automatizados",
    ],
    linkedinUrl: "https://www.linkedin.com/in/khyazid",
    accentBg: "#171717",
    accentText: "#ffffff",
  },
  {
    id: "daniela",
    name: "Daniela Quiroz",
    initials: "DQ",
    role: "Cofundadora · Estrategia, Redes Sociales y Meta Ads",
    credential: "Licenciada en Administración (Mención Mercadeo) · UCAT",
    specialty: "Community Management, Diseño Visual y Pauta en Meta",
    bio: "Licenciada en Administración mención Mercadeo (Universidad Católica del Táchira). Lidera la estrategia de marca, la gestión diaria de redes sociales para negocios, el diseño de piezas visuales y campañas pagadas en Instagram y Facebook.",
    highlights: [
      "Community Management para empresas y marcas",
      "Diseño gráfico limpio y coherente para redes sociales",
      "Campañas segmentadas en Meta Ads (Instagram y Facebook)",
    ],
    linkedinUrl: "https://www.linkedin.com/in/daniela-quiroz-ba4418246",
    accentBg: "#ff8400",
    accentText: "#18181b",
  },
];

export type HeroCategory =
  | "Sistema a Medida"
  | "Web Comercial"
  | "Redes y Meta Ads"
  | "Plan Integral";

export const HERO_CATEGORY_PILLS: HeroCategory[] = [
  "Sistema a Medida",
  "Web Comercial",
  "Redes y Meta Ads",
  "Plan Integral",
];

export const HERO_TYPEWRITER_EXAMPLES: string[] = [
  "Necesitamos un sistema de ventas e inventario que trabaje incluso sin internet...",
  "Buscamos llevar nuestras redes sociales con diseño profesional y campañas en Instagram...",
  "Queremos una página web moderna que genere confianza y capte clientes por WhatsApp...",
  "Necesitamos ordenar las cobranzas en dólares y bolívares y automatizar reportes...",
];

export type ProjectTab = "all" | "gestion" | "web-marketing";

export interface ProjectItem {
  id: string;
  tab: Exclude<ProjectTab, "all">;
  category: string;
  shortLabel: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  gradient: string;
  accentColor: string;
  features: string[];
  highlights: string[];
  mockupLines: { title: string; subtitle: string; stat: string }[];
  metrics: { label: string; value: string }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "glyphcore-b2b",
    tab: "gestion",
    category: "Sistema a Medida",
    shortLabel: "Distribuidoras y Mayoristas",
    title: "GlyphCore B2B",
    tagline:
      "Control total de rutas, ventas a crédito y cobranzas sin depender de internet.",
    summary:
      "Plataforma comercial diseñada para distribuidoras con vendedores en calle y despachos diarios: registra pedidos, controla créditos vencidos y mantiene el stock exacto incluso sin señal.",
    problem:
      "Los equipos comerciales perdían pedidos en ruta por mala conexión y tardaban días en conciliar pagos y comisiones.",
    solution:
      "Creamos una herramienta ágil donde el vendedor factura desde el teléfono aunque esté desconectado y la oficina ve cada abono y despacho al instante.",
    gradient:
      "linear-gradient(155deg, #ffa033 0%, #ff8400 35%, #ff8ee5 72%, #d559ff 100%)",
    accentColor: "#ff8400",
    features: ["Trabajo sin internet", "Multimoneda USD / Bs", "Facturación rápida"],
    highlights: [
      "Toma de pedidos en calle sin depender de datos móviles",
      "Control automático de cuentas por cobrar y límites de crédito",
      "Catálogo actualizado con precios y descuentos por cliente",
      "Reportes diarios claros para gerencia y comisiones",
    ],
    mockupLines: [
      {
        title: "Cobranza y Rutas al Día",
        subtitle: "Estado real de cuentas y despachos",
        stat: "Control total",
      },
      {
        title: "Pedido Móvil en Calle",
        subtitle: "Funciona aunque caiga la señal",
        stat: "Sin conexión",
      },
      {
        title: "Precios USD / Bolívares",
        subtitle: "Conversión clara en cada factura",
        stat: "Exacto",
      },
    ],
    metrics: [
      { label: "Operación", value: "Continuidad total" },
      { label: "Moneda", value: "Dólares y Bolívares" },
      { label: "Enfoque", value: "Ventas B2B" },
    ],
  },
  {
    id: "redes-meta-ads",
    tab: "web-marketing",
    category: "Redes y Meta Ads",
    shortLabel: "Instagram y Facebook",
    title: "Redes Sociales & Meta Ads",
    tagline:
      "Gestión profesional de redes, diseño limpio y campañas pagadas para atraer clientes.",
    summary:
      "Servicio estratégico y operativo pensado para dueños de negocio que necesitan presencia constante y profesional en Instagram y Facebook sin dedicar horas improvisando publicaciones ni desperdiciando presupuesto en anuncios sin segmentación.",
    problem:
      "Publicar sin rumbo, con diseños desordenados o usando el botón promocionar sin estrategia termina generando poco alcance comercial y cero clientes calificados.",
    solution:
      "Estructuramos tu calendario mensual, diseñamos piezas visuales claras y alineadas a tu marca, gestionamos tu comunidad y configuramos campañas segmentadas en Meta Ads.",
    gradient:
      "linear-gradient(155deg, #ffc157 0%, #ff8400 45%, #ff8ee5 100%)",
    accentColor: "#ff8400",
    features: [
      "Community Management",
      "Diseño para Redes",
      "Campañas Meta Ads",
    ],
    highlights: [
      "Planificación mensual y grilla de contenido enfocada en ventas",
      "Diseño gráfico limpio y funcional para feed, historias y portadas",
      "Gestión diaria de comunidad, mensajes clave y coherencia de marca",
      "Campañas publicitarias en Instagram y Facebook orientadas a consultas reales",
    ],
    mockupLines: [
      {
        title: "Calendario y Community",
        subtitle: "Presencia activa y constante cada semana",
        stat: "Instagram + FB",
      },
      {
        title: "Diseño Gráfico Comercial",
        subtitle: "Piezas claras que transmiten confianza",
        stat: "Identidad visual",
      },
      {
        title: "Campañas en Meta Ads",
        subtitle: "Segmentación directa hacia clientes potenciales",
        stat: "Consultas reales",
      },
    ],
    metrics: [
      { label: "Gestión", value: "Contenido y Pauta" },
      { label: "Dirección", value: "Mercadeo y Estrategia" },
      { label: "Objetivo", value: "Visibilidad y Ventas" },
    ],
  },
  {
    id: "glyphix-salud",
    tab: "gestion",
    category: "Gestión Clínica",
    shortLabel: "Clínicas y Salud",
    title: "Glyphix",
    tagline:
      "Historias clínicas, citas y control de consultorio privados y en orden.",
    summary:
      "Sistema pensado para consultorios y clínicas que necesitan organizar expedientes médicos, turnos y existencias de insumos sin depender de carpetas de papel.",
    problem:
      "Buscar historias en papel retrasa las consultas y dificulta llevar seguimiento ordenado de pacientes, recetas e inventario clínico.",
    solution:
      "Centralizamos pacientes, agenda e insumos en una interfaz limpia y rápida con resguardo privado y búsqueda inmediata.",
    gradient:
      "linear-gradient(160deg, #ff70e0 0%, #d559ff 50%, #9b4dff 100%)",
    accentColor: "#d559ff",
    features: ["Expediente Digital", "Agenda de Citas", "Privacidad Total"],
    highlights: [
      "Historial de pacientes organizado cronológicamente",
      "Control de citas diarias y seguimiento entre consultas",
      "Inventario de insumos médicos con alertas por reposición",
      "Información resguardada bajo control exclusivo de tu clínica",
    ],
    mockupLines: [
      {
        title: "Expediente por Paciente",
        subtitle: "Consultas previas al alcance de un clic",
        stat: "Ordenado",
      },
      {
        title: "Agenda y Recepción",
        subtitle: "Turnos diarios sin solapamientos",
        stat: "Flujo ágil",
      },
      {
        title: "Control de Insumos",
        subtitle: "Seguimiento claro de stock y salidas",
        stat: "Sin quiebres",
      },
    ],
    metrics: [
      { label: "Enfoque", value: "Sector Salud" },
      { label: "Acceso", value: "Búsqueda inmediata" },
      { label: "Respaldo", value: "Privado y Seguro" },
    ],
  },
  {
    id: "sistema-pos-pyme",
    tab: "gestion",
    category: "Punto de Venta",
    shortLabel: "Comercios y Tiendas",
    title: "Sistema POS & Inventario",
    tagline:
      "Caja rápida, control de stock exacto y cierre diario transparente en dólares y bolívares.",
    summary:
      "Software de caja e inventario hecho para negocios comerciales que necesitan cobrar rápido, evitar pérdidas de mercancía y saber cuánto ganaron al final del día.",
    problem:
      "Las hojas de cálculo manuales generan errores de cobro, descuadres de caja al cierre y diferencias en la tasa cambiaria.",
    solution:
      "Caja visual intuitiva que suma pagos mixtos, descuenta mercancía al instante y entrega reportes diarios listos para imprimir.",
    gradient:
      "linear-gradient(155deg, #ffd166 0%, #ff9b21 48%, #ff6b6b 100%)",
    accentColor: "#ff9b21",
    features: ["Pagos Mixtos", "Caja sin Internet", "Cierre Diario PDF"],
    highlights: [
      "Cobra con efectivo, punto de venta, pago móvil o Zelle en una factura",
      "Descuento inmediato de inventario con alerta de productos por agotarse",
      "Cierre de caja en segundos con cálculo exacto de ganancias",
      "Sigue facturando con normalidad incluso si falla el internet",
    ],
    mockupLines: [
      {
        title: "Facturación Rápida en Caja",
        subtitle: "Cobra en varios métodos de pago sin trabas",
        stat: "Multimoneda",
      },
      {
        title: "Control de Mercancía",
        subtitle: "Sabes qué queda y qué reponer hoy",
        stat: "Stock real",
      },
      {
        title: "Resumen para Gerencia",
        subtitle: "Ventas, gastos y utilidades en PDF",
        stat: "Cierre exacto",
      },
    ],
    metrics: [
      { label: "Disponibilidad", value: "Funciona offline" },
      { label: "Cierre", value: "En segundos" },
      { label: "Ideal para", value: "Tiendas y PyMEs" },
    ],
  },
  {
    id: "aerolex-global",
    tab: "web-marketing",
    category: "Web Comercial",
    shortLabel: "Empresas y Servicios",
    title: "AeroLex Global",
    tagline:
      "Presencia web corporativa diseñada para proyectar seriedad y captar cotizaciones.",
    summary:
      "Sitio web empresarial creado para presentar servicios complejos con claridad ejecutiva, elevar la confianza de nuevos clientes y convertir visitas en contactos comerciales.",
    problem:
      "Una empresa con gran trayectoria perdía contratos frente a competidores porque su web lucía anticuada, lenta o difícil de navegar en teléfono.",
    solution:
      "Diseñamos una vitrina digital rápida, clara y enfocada en que cualquier prospecto entienda el servicio y solicite cotización en segundos.",
    gradient:
      "linear-gradient(155deg, #4b83ff 0%, #6d59ff 50%, #ff8ee5 100%)",
    accentColor: "#546dff",
    features: ["Diseño Corporativo", "Adaptado a Móvil", "Captación de Leads"],
    highlights: [
      "Estructura clara que explica el valor del servicio desde el primer segundo",
      "Botones y formularios directos hacia cotización y WhatsApp comercial",
      "Navegación limpia pensada para clientes que revisan desde el teléfono",
      "Base optimizada para posicionarse y acompañar pauta digital",
    ],
    mockupLines: [
      {
        title: "Propuesta Clara al Entrar",
        subtitle: "El cliente entiende qué ofreces al instante",
        stat: "Impacto inicial",
      },
      {
        title: "Contacto Sin Fricción",
        subtitle: "Solicitudes listas por correo o WhatsApp",
        stat: "Más consultas",
      },
      {
        title: "Imagen Corporativa Sólida",
        subtitle: "Eleva el valor percibido de tu empresa",
        stat: "Alta confianza",
      },
    ],
    metrics: [
      { label: "Objetivo", value: "Captar clientes" },
      { label: "Experiencia", value: "Móvil y Escritorio" },
      { label: "Resultado", value: "Imagen Profesional" },
    ],
  },
  {
    id: "suite-verticales",
    tab: "web-marketing",
    category: "Web + Operación",
    shortLabel: "Tiendas, Gimnasios y Hoteles",
    title: "Suite Comercial por Rubro",
    tagline:
      "Tu web comercial conectada con atención en redes y operación ordenada por industria.",
    summary:
      "Ecosistema digital adaptable según tu tipo de negocio: unimos imagen en línea, captación desde redes y herramientas de gestión diarias pensadas para cada rubro.",
    problem:
      "Tener la web por un lado, las redes por otro y los clientes anotados en libretas rompe la experiencia y hace perder ventas ya interesadas.",
    solution:
      "Integramos presencia web, estrategia en redes y módulos operativos hechos para tiendas, gimnasios, estudios y hoteles.",
    gradient:
      "linear-gradient(155deg, #5ce1e6 0%, #4b83ff 52%, #b56bff 100%)",
    accentColor: "#4b83ff",
    features: ["Catálogo Online", "Cobro de Planes", "Imagen Unificada"],
    highlights: [
      "Catálogo web o landing comercial conectada con pedidos por WhatsApp",
      "Control de membresías, vencimientos y asistencias para gimnasios",
      "Gestión visual de habitaciones, reservas y cobros para hoteles",
      "Coherencia total entre lo que muestras en redes y cómo atiendes al cliente",
    ],
    mockupLines: [
      {
        title: "Tiendas y Catálogos",
        subtitle: "Vitrina online + pedidos ordenados",
        stat: "Venta ágil",
      },
      {
        title: "Gimnasios y Centros",
        subtitle: "Control de mensualidades y renovación",
        stat: "Cero fugas",
      },
      {
        title: "Hoteles y Posadas",
        subtitle: "Reservas claras y recepción en orden",
        stat: "Control diario",
      },
    ],
    metrics: [
      { label: "Integración", value: "Web + Redes + Gestión" },
      { label: "Adaptación", value: "Según tu rubro" },
      { label: "Crecimiento", value: "Escalable por etapas" },
    ],
  },
];

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  gradient: string;
  mockupTag: string;
  mockupTitle: string;
  mockupBullets: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "diagnostico",
    number: "01",
    title: "Entendemos tu negocio y tus metas",
    badge: "Sesión inicial",
    description:
      "Conversamos sobre cómo opera hoy tu empresa, qué te frena administrativamente o cómo quieres atraer más clientes por internet, redes y pauta.",
    gradient:
      "linear-gradient(135deg, #d7ecff 0%, #eaf5ff 55%, #f6fbff 100%)",
    mockupTag: "Paso 01 · Diagnóstico",
    mockupTitle: "Mapa claro de prioridades para tu empresa",
    mockupBullets: [
      "Identificamos fugas de tiempo, desorden en caja o fallas de visibilidad",
      "Definimos qué resuelve software, qué resuelve tu web y qué impulsan tus redes",
      "Propuesta transparente de alcance, tiempos y presupuesto sin tecnicismos",
    ],
  },
  {
    id: "construccion",
    number: "02",
    title: "Diseñamos y construimos a medida",
    badge: "Avances semanales",
    description:
      "Trabajamos en paralelo la base digital: desarrollamos tu sistema o web comercial y damos forma a tu imagen visual y estrategia de contenido en Meta.",
    gradient:
      "linear-gradient(135deg, #e7ffd7 0%, #f1ffe6 55%, #fcfff9 100%)",
    mockupTag: "Paso 02 · Ejecución",
    mockupTitle: "Entregas visibles cada semana",
    mockupBullets: [
      "Pantallas intuitivas que tu equipo entiende desde el primer día",
      "Línea gráfica coherente para web, Instagram y Facebook",
      "Ajustes continuos con tus comentarios antes de salir al público",
    ],
  },
  {
    id: "lanzamiento",
    number: "03",
    title: "Lanzamiento, campañas y acompañamiento",
    badge: "Puesta en marcha",
    description:
      "Dejamos el sistema o web operando con tu equipo capacitado, activamos la gestión de redes o campañas en Meta Ads y te acompañamos para seguir escalando.",
    gradient:
      "linear-gradient(135deg, #ffe7f7 0%, #fff0fa 55%, #fff9fd 100%)",
    mockupTag: "Paso 03 · Crecimiento",
    mockupTitle: "Tu negocio vendiendo con orden y respaldo",
    mockupBullets: [
      "Capacitación práctica incluida para todo tu personal",
      "Seguimiento mensual de redes sociales, diseño y rendimiento en Meta Ads",
      "Soporte directo con los cofundadores para nuevas etapas de crecimiento",
    ],
  },
];

export const CAPABILITY_BADGES = [
  { label: "Funciona sin internet", detail: "Tu caja y pedidos nunca se paran" },
  { label: "Redes sociales y Diseño", detail: "Presencia profesional en Instagram y FB" },
  { label: "Campañas Meta Ads", detail: "Anuncios enfocados en atraer clientes" },
  { label: "Multimoneda USD / Bs", detail: "Precios y cobranzas siempre claros" },
  { label: "Reportes claros PDF", detail: "Cierres, ventas y resultados medibles" },
  { label: "Respaldo directo", detail: "Acompañamiento real de principio a fin" },
];

export interface ScaleCategoryPill {
  label: string;
  bg: string;
  text: string;
  category: HeroCategory;
}

export const SCALE_CATEGORY_PILLS: ScaleCategoryPill[] = [
  {
    label: "sistemas de gestión",
    bg: "#ff6ef2",
    text: "#1a0418",
    category: "Sistema a Medida",
  },
  {
    label: "redes y Meta Ads",
    bg: "#ff9b21",
    text: "#1f0d00",
    category: "Redes y Meta Ads",
  },
  {
    label: "webs comerciales",
    bg: "#9ef756",
    text: "#0f2200",
    category: "Web Comercial",
  },
  {
    label: "planes integrales",
    bg: "#7ce8ff",
    text: "#00232b",
    category: "Plan Integral",
  },
];

export interface ServiceCardItem {
  id: string;
  variant: "software" | "marketing" | "agency";
  title: string;
  description: string;
  ctaLabel: string;
  presetCategory: HeroCategory;
  presetBrief: string;
}

export const SERVICE_CARDS: ServiceCardItem[] = [
  {
    id: "software-web",
    variant: "software",
    title: "Software a Medida & Webs",
    description:
      "Sistemas de ventas, inventario, clínicas o distribuidoras que operan hasta sin internet, junto con webs corporativas pensadas para vender.",
    ctaLabel: "Cotizar sistema o web",
    presetCategory: "Sistema a Medida",
    presetBrief:
      "Hola equipo de Glyph Agency, queremos cotizar un sistema a medida o página web comercial para ordenar y hacer crecer nuestro negocio.",
  },
  {
    id: "redes-meta",
    variant: "marketing",
    title: "Redes Sociales, Diseño & Meta Ads",
    description:
      "Gestión profesional como Community Manager, diseño limpio para tu marca y campañas segmentadas en Instagram y Facebook enfocadas en resultados.",
    ctaLabel: "Impulsar mis redes",
    presetCategory: "Redes y Meta Ads",
    presetBrief:
      "Hola equipo de Glyph Agency, nos interesa la gestión de redes sociales, diseño de contenido y campañas publicitarias en Instagram y Facebook.",
  },
  {
    id: "plan-integral",
    variant: "agency",
    title: "Estrategia Integral Glyph",
    description:
      "Une imagen comercial, pauta en Meta, página web y control operativo interno bajo un mismo equipo directivo que entiende administración y tecnología.",
    ctaLabel: "Solicitar plan integral",
    presetCategory: "Plan Integral",
    presetBrief:
      "Hola equipo de Glyph Agency, queremos evaluar un plan integral que combine web o sistema interno con estrategia de redes y Meta Ads.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-servicios",
    question: "¿Puedo contratar solo redes sociales o solo software, o ambos juntos?",
    answer:
      "Sí. Cada área funciona de forma independiente según lo que tu empresa necesite hoy: puedes contratar únicamente la gestión de redes sociales, diseño y pauta en Meta Ads, únicamente tu web o sistema de gestión, o combinar ambos frentes en un plan integral.",
  },
  {
    id: "faq-redes-meta",
    question: "¿Qué incluye el servicio de Redes Sociales y Meta Ads?",
    answer:
      "Trabajamos planificación estratégica de contenido, gestión diaria como Community Manager, diseño gráfico limpio adaptado a tu marca para Instagram y Facebook, y montaje de campañas pagadas en Meta Ads segmentadas para generar conversaciones y prospectos reales.",
  },
  {
    id: "faq-offline",
    question: "¿Los sistemas siguen funcionando si falla la conexión a internet?",
    answer:
      "Sí. Diseñamos los sistemas de punto de venta, inventario y toma de pedidos para que tu equipo siga cobrando y registrando operaciones con normalidad sin internet, actualizándose de forma automática cuando vuelve la señal.",
  },
  {
    id: "faq-monedas",
    question: "¿Se adaptan al manejo de dólares, bolívares y pagos mixtos?",
    answer:
      "Totalmente. El cálculo multimoneda, las tasas diarias, las cuentas por cobrar y los pagos combinados en efectivo, punto o transferencia forman parte natural de nuestras soluciones para negocios.",
  },
  {
    id: "faq-tiempos",
    question: "¿En cuánto tiempo podemos ver resultados o empezar a operar?",
    answer:
      "Una campaña de redes y presencia comercial puede activarse en los primeros días tras definir la estrategia. Una página web comercial o sistema a medida toma entre 2 y 6 semanas según el alcance, siempre con avances visibles cada semana.",
  },
  {
    id: "faq-remoto",
    question: "¿Atienden negocios fuera de Venezuela?",
    answer:
      "Sí. Trabajamos de forma remota con empresas y comercios en Venezuela y el exterior, adaptando horarios, monedas, flujos comerciales y tono de marca a cada mercado.",
  },
];

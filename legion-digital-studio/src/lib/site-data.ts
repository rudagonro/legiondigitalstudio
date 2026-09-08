export const site = {
  name: "Legión Digital Studio",
  url: "https://legiondigitalstudio.com",
  ogImage: "https://legiondigitalstudio.com/og-image.png",
  city: "Bogotá, Colombia",
  email: "legionario@legiondigitalstudio.com",
  whatsappNumber: "+57 323 568 8278",
  whatsappUrl:
    "https://wa.me/573235688278?text=Hola%20Legi%C3%B3n%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web",
};

export type Plan = {
  slug: string;
  name: string;
  price: string;
  note: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    slug: "landing",
    name: "Landing Page",
    price: "$500.000 – $700.000",
    note: "Pago único · entrega en 5 a 8 días",

    summary:
      "Una sola página, directa al punto: presenta tu negocio, genera confianza y lleva al visitante a escribirte por WhatsApp.",
    features: [
      "Diseño a la medida, sin plantillas genéricas",
      "Una página con todas tus secciones",
      "Adaptada a celular, tableta y computador",
      "Botón y chat de WhatsApp",
      "Formulario de contacto funcional",
      "SEO técnico básico y velocidad optimizada",
      "Aviso de tratamiento de datos (Habeas Data)",
    ],
  },
  {
    slug: "autoadministrable",
    name: "Sitio Autoadministrable",
    price: "$800.000 – $1.500.000",
    note: "Entrega en 2 a 3 semanas",

    summary:
      "Varias páginas y un panel para que tú mismo cambies textos, fotos y servicios sin depender de nadie.",
    features: [
      "Todo lo del plan Landing",
      "Entre 5 y 10 páginas según tu negocio",
      "Panel para editar textos e imágenes",
      "Página por servicio para posicionar en Google",
      "Galería o portafolio de trabajos",
      "Google Business Profile y correo profesional",
      "Capacitación en video para que lo administres",
    ],
    featured: true,
  },
  {
    slug: "cms-ecommerce",
    name: "Tienda en Línea",
    price: "$2.000.000 – $3.000.000",
    note: "Entrega en 3 a 5 semanas",

    summary:
      "Catálogo, carrito y contenido creciente: para negocios que venden en línea o publican de forma constante.",
    features: [
      "Todo lo del plan Autoadministrable",
      "Catálogo de productos con categorías",
      "Carrito de compras y cotización",
      "Blog o sección de contenido",
      "Integración con medios de pago",
      "SEO técnico avanzado y datos estructurados",
      "Acompañamiento en el lanzamiento",
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "paginas-web",
    title: "Páginas web a la medida",
    tagline: "Sitios a la medida",
    summary:
      "Diseñamos y programamos tu sitio desde cero, sin plantillas recicladas: rápido, claro y pensado para que el visitante te escriba. Atendemos toda Colombia.",
    bullets: [
      "Diseño propio alineado a tu identidad visual",
      "Código liviano: carga en menos de dos segundos",
      "Adaptado a celular, tableta y computador",
      "Textos ordenados para que el visitante entienda y actúe",
      "Botón de WhatsApp y formulario que sí llega a tu correo",
      "Trabajamos en todo el territorio nacional, de forma remota",
    ],
    metaTitle: "Páginas web a la medida en Colombia | Legión Digital Studio",
    metaDescription:
      "Diseño y desarrollo de páginas web en toda Colombia desde $500.000. Sitios rápidos, sin plantillas, con SEO técnico y WhatsApp integrado.",
  },
  {
    slug: "desarrollo-software",
    title: "Desarrollo de software",
    tagline: "Sistemas para tu negocio",
    summary:
      "Programas a la medida para tiendas y comercios: ventas con lector de código de barras, impresión de tirilla en impresora térmica y panel de inventarios.",
    bullets: [
      "Punto de venta con lector de código de barras",
      "Impresión de tirilla o factura en impresora térmica",
      "Panel de inventarios con entradas, salidas y alertas de stock",
      "Reportes de ventas por día, producto y usuario",
      "Usuarios con permisos para cajeros y administradores",
      "Funciona en computador y también desde el celular",
    ],
    metaTitle: "Desarrollo de software para tiendas y comercios | Legión Digital Studio",
    metaDescription:
      "Software a la medida para tiendas: punto de venta con código de barras, impresión térmica, inventarios y reportes. Desarrollo en toda Colombia.",
  },
  {
    slug: "tiendas-en-linea",
    title: "Tiendas en línea",
    tagline: "E-commerce",
    summary:
      "Catálogo, carrito y cotización para vender desde tu propio sitio, no solo desde redes sociales.",
    bullets: [
      "Catálogo con categorías, fotos y descripciones",
      "Carrito de compras o cotización por WhatsApp",
      "Integración con medios de pago colombianos",
      "Panel para cargar y editar productos tú mismo",
      "Fichas de producto optimizadas para Google",
      "Capacitación para administrar tu tienda",
    ],
    metaTitle: "Tiendas en línea en Colombia | Legión Digital Studio",
    metaDescription:
      "Desarrollo de tiendas en línea con catálogo, carrito y medios de pago. Desde $2.000.000, con panel administrable y SEO técnico.",
  },
  {
    slug: "seo-tecnico",
    title: "SEO técnico",
    tagline: "Aparecer cuando te buscan",
    summary:
      "La base que casi nadie hace bien: estructura, metadatos, velocidad y datos estructurados para que Google entienda tu sitio.",
    bullets: [
      "Títulos y descripciones únicos por página",
      "Datos estructurados (negocio local, productos, artículos)",
      "Mapa del sitio y archivo de rastreo correctos",
      "Velocidad, imágenes y medidas de rendimiento",
      "Una página por servicio, no todo en una sola",
      "Configuración de Google Search Console",
    ],
    metaTitle: "SEO técnico para negocios en Colombia | Legión Digital Studio",
    metaDescription:
      "SEO técnico: estructura, metadatos, velocidad y datos estructurados para que tu negocio aparezca en Google cuando lo buscan.",
  },
  {
    slug: "landing-pages",
    title: "Landing pages que convierten",
    tagline: "Una página, un objetivo",
    summary:
      "Ideal si pautas en redes o Google: una sola página enfocada en un objetivo, con mensaje claro y contacto inmediato.",
    bullets: [
      "Un solo objetivo por página: cotizar, agendar o comprar",
      "Mensaje y beneficios ordenados por prioridad",
      "Prueba social: casos, reseñas y garantías reales",
      "Formulario corto y WhatsApp a un toque",
      "Lista para conectar con tu pauta",
      "Entrega rápida desde $500.000",
    ],
    metaTitle: "Landing pages que convierten | Legión Digital Studio",
    metaDescription:
      "Landing pages desde $500.000: una página enfocada en un objetivo, con formulario, WhatsApp y velocidad optimizada.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  status: string;
  sector: string;
  capabilities: string[];
  url: string;
  summary: string;
  challenge: string;
  work: string[];
  result: string;
  metaTitle: string;
  metaDescription: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "legioncoin",
    client: "LegionCoin",
    status: "En línea",
    sector: "E-commerce · Monedas conmemorativas",
    capabilities: [
      "Panel de administración",
      "Pagos en línea (Bold)",
      "Cotizador guiado",
      "Seguimiento de pedido",
      "Asistente de chat",
      "Sitio bilingüe",
      "WhatsApp integrado",
    ],
    url: "https://legioncoin.com.co/",
    summary:
      "Sitio bilingüe de monedas conmemorativas militares con galería de piezas reales, cotizador paso a paso, pagos en línea, seguimiento de pedido y asistente de chat propio.",
    challenge:
      "Cada moneda es un encargo distinto: tipo, cantidad, tamaño, acabado y empaque. Antes, cada cotización nacía de una conversación larga por WhatsApp, y las piezas ya fabricadas no se veían en ningún lado.",
    work: [
      "Galería de monedas reales filtrable por aviación, batallones y conmemorativas",
      "Ficha por pieza con su unidad, su año y la historia detrás del diseño",
      "Cotizador guiado: tipo, cantidad, tamaño, acabado, empaque y archivo adjunto",
      "Pagos en línea integrados con Bold y página de seguimiento de pedido",
      "Sitio completo en español e inglés, con secciones de proceso y acabados",
      "Asistente de chat propio que orienta al visitante antes de escribir",
      "Panel de administración, aviso de cookies y SEO técnico por categorías",
    ],
    result:
      "El cliente recibe solicitudes ya completas con todas las especificaciones, cobra en línea y su catálogo real hace la primera venta antes del primer mensaje.",
    metaTitle: "Caso LegionCoin: e-commerce bilingüe con cotizador y pagos | Legión Digital Studio",
    metaDescription:
      "Cómo construimos LegionCoin: galería de monedas conmemorativas, cotizador guiado, pagos con Bold, seguimiento de pedido y sitio bilingüe.",
  },
  {
    slug: "omg-serviteca",
    client: "OMG Serviteca",
    status: "En línea",
    sector: "Automotriz · Taller en Chía",
    capabilities: [
      "Panel de administración",
      "Blog de contenido",
      "Asistente virtual",
      "Reseñas con moderación",
      "Agendamiento por WhatsApp",
      "SEO local",
    ],
    url: "https://omgserviteca.com/",
    summary:
      "Sitio de un taller automotriz en Chía con doce servicios explicados, agendamiento por WhatsApp, blog de contenido y asistente virtual propio.",
    challenge:
      "Un taller pierde el día contestando las mismas preguntas: qué hacen, cuánto cuesta, dónde están y a qué hora abren. El sitio debía responder todo eso y dejar la cita agendada.",
    work: [
      "Doce servicios detallados: revisión preventiva, diagnóstico computarizado, frenos, suspensión, alineación, inyección, eléctrico, aire, llantas, latonería y autolavado",
      "Formulario de turno con vehículo y servicio que llega directo a WhatsApp",
      "Asistente virtual propio que atiende dudas frecuentes en el sitio",
      "Blog automotriz con guías y consejos de mantenimiento",
      "Sección de reseñas con moderación antes de publicarse",
      "Dirección, horarios, teléfono y WhatsApp visibles en todo el sitio",
      "SEO local para búsquedas de serviteca en Chía y Cundinamarca",
    ],
    result:
      "Los clientes llegan sabiendo qué necesitan y agendan solos; el taller dedica el tiempo a los carros, no al teléfono.",
    metaTitle: "Caso OMG Serviteca: sitio de taller con agendamiento | Legión Digital Studio",
    metaDescription:
      "Sitio para una serviteca en Chía: doce servicios, agendamiento por WhatsApp, asistente virtual, blog y SEO local.",
  },
  {
    slug: "illuminare",
    client: "Illuminare",
    status: "En línea",
    sector: "Salud y educación · Psicopedagogía",
    capabilities: ["Solicitud de valoración", "Proceso en seis pasos", "WhatsApp integrado"],
    url: "https://rudagonro.github.io/illuminare/",
    summary:
      "Sitio de acompañamiento psicopedagógico para niños y adolescentes: servicios, población atendida, proceso de atención de seis pasos y solicitud de valoración.",
    challenge:
      "Una familia que busca ayuda para su hijo llega con dudas y algo de temor. El sitio tenía que explicar con claridad y calidez qué se evalúa, a quién se atiende y cómo es el proceso completo.",
    work: [
      "Seis servicios explicados: evaluación, intervención, orientación familiar, acompañamiento escolar, estimulación de habilidades y apoyo en dificultades de aprendizaje",
      "Sección de población atendida, con las señales que las familias reconocen",
      "Proceso de atención en seis pasos, de la entrevista inicial al seguimiento con el colegio",
      "Presentación profesional de la psicopedagoga y su enfoque de trabajo",
      "Solicitud de valoración y contacto directo por WhatsApp",
      "Fotografía cálida y lenguaje claro, sin tecnicismos clínicos",
    ],
    result:
      "Las familias entienden el proceso antes de escribir y llegan a la primera consulta con expectativas claras.",
    metaTitle: "Caso Illuminare: sitio de acompañamiento psicopedagógico | Legión Digital Studio",
    metaDescription:
      "Sitio para un servicio de psicopedagogía infantil: servicios, población atendida, proceso de atención y solicitud de valoración.",
  },
  {
    slug: "abogada-mejia-rivera",
    client: "Abogada Mejía Rivera",
    status: "En línea",
    sector: "Servicios profesionales · Derecho laboral",
    capabilities: [
      "Panel de administración",
      "Acceso privado para clientes",
      "Videoconsultas con Google Meet",
      "Formulario con Habeas Data",
      "WhatsApp integrado",
    ],
    url: "https://abogadamejiarivera.com/",
    summary:
      "Sitio de una abogada laboralista con cobertura nacional: seis áreas de práctica, panel de administración, acceso privado para clientes y videoconsultas por Google Meet.",
    challenge:
      "En derecho laboral la confianza se gana antes del primer contacto, y la consulta necesita un canal privado y ordenado que además cumpla la ley colombiana de datos.",
    work: [
      "Seis áreas de práctica: laboral individual, seguridad social y pensiones, asesoría empresarial, conciliación, tutelas y representación judicial",
      "Perfil profesional con trayectoria, especialización y cobertura nacional",
      "Panel de administración para gestionar contenido y consultas",
      "Acceso privado para clientes con la información de su caso",
      "Videoconsultas integradas con Google Meet",
      "Sección de planeación pensional y testimonios de clientes",
      "Formulario con autorización de datos y aviso de Habeas Data",
    ],
    result:
      "Las consultas llegan filtradas por área, se atienden en línea desde cualquier ciudad, y la abogada administra todo desde su propio panel.",
    metaTitle: "Caso Abogada Mejía Rivera: sitio legal con Habeas Data | Legión Digital Studio",
    metaDescription:
      "Sitio para una abogada laboralista en Colombia: áreas de práctica, panel de administración, acceso de clientes, Google Meet y Habeas Data.",
  },
  {
    slug: "xiomy-perfumeria",
    client: "Xiomy Perfumería",
    status: "En línea",
    sector: "Retail · Perfumería",
    capabilities: [
      "Panel de administración",
      "Gestión de imágenes y publicaciones",
      "Catálogo con filtros",
      "Consulta por WhatsApp",
      "SEO técnico",
    ],
    url: "https://xiomyperfumeria.com/",
    summary:
      "Vitrina de perfumería con catálogo filtrable por dama, caballero y unisex, panel para gestionar fotos y publicaciones, y consulta de cada fragancia por WhatsApp.",
    challenge:
      "La venta de perfumes vive en WhatsApp y el catálogo cambia cada semana: el sitio tenía que verse cuidado, actualizarse sin ayuda técnica y llevar cada consulta con el producto ya identificado.",
    work: [
      "Catálogo con fichas por fragancia: familia olfativa, género, presentación y descripción",
      "Filtros por dama, caballero y unisex sobre fragancias árabes y americanas",
      "Botón de consulta que abre WhatsApp con el perfume ya escrito en el mensaje",
      "Panel de administración para publicaciones, productos e imágenes",
      "Mensajes de envíos nacionales, medios de pago y asesoría personalizada",
      "Diseño pensado primero en celular, donde compra su clienta",
      "SEO técnico para búsquedas de marca y de referencias puntuales",
    ],
    result:
      "La dueña publica novedades cuando quiere y cada mensaje entra a WhatsApp con el perfume identificado, sin explicaciones de más.",
    metaTitle: "Caso Xiomy Perfumería: catálogo y ventas por WhatsApp | Legión Digital Studio",
    metaDescription:
      "Vitrina digital para una perfumería colombiana: catálogo filtrable, panel de administración y consulta de cada fragancia por WhatsApp.",
  },
];

export const faqs = [
  {
    q: "¿Cuánto tarda mi proyecto?",
    a: "Rápido y bien hecho: una landing page se entrega en 5 a 8 días, un sitio autoadministrable en 2 a 3 semanas y una tienda en línea en 3 a 5 semanas. Si tu contenido está listo, entregamos en el tiempo más corto del rango.",
  },
  {
    q: "¿Cómo logran entregar tan rápido sin bajar la calidad?",
    a: "Escribimos el código nosotros y trabajamos con un proceso definido de cuatro pasos. No perdemos días instalando plantillas ni extensiones: cada entrega se revisa en celular, tableta y computador antes de publicarla.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Tu logo, fotos de buena calidad, la lista de servicios o productos y los datos de contacto. Si no tienes textos, los redactamos contigo a partir de una conversación inicial.",
  },
  {
    q: "¿El sitio queda adaptado a celulares?",
    a: "Sí. Diseñamos y probamos cada proyecto en celular, tableta y computador, con atención a legibilidad, navegación y velocidad de carga.",
  },
  {
    q: "¿Qué pasa con el dominio, el correo y el alojamiento?",
    a: "Nos encargamos de dejar todo funcionando: dominio, correo profesional y publicación del sitio. Cada año se renuevan el dominio y el correo con su proveedor, y te avisamos con tiempo cuál es el valor.",
  },
  {
    q: "¿Puedo editar el sitio yo mismo después?",
    a: "Sí, en los planes Autoadministrable y Tienda en Línea: entregamos un panel de administración y una capacitación en video para que cambies textos, fotos y productos sin depender de nosotros.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Normalmente 50% para iniciar y 50% contra entrega. Lo definimos por escrito en la propuesta antes de comenzar.",
  },
];

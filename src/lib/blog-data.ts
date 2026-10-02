export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  relatedService: string;
  sections: BlogSection[];
  faq: Array<{ question: string; answer: string }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-pagina-web-colombia-2026",
    title: "¿Cuánto cuesta una página web en Colombia en 2026?",
    description:
      "Conoce cuánto cuesta una página web en Colombia en 2026, qué incluye cada rango y qué gastos debes prever antes de contratar.",
    excerpt:
      "Rangos reales, costos anuales y señales para comparar propuestas sin pagar de más ni terminar con un sitio que no cumple su objetivo.",
    category: "Precios y contratación",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readingMinutes: 8,
    relatedService: "/precios/",
    sections: [
      {
        heading: "La respuesta corta: depende del alcance, no solo del diseño",
        paragraphs: [
          "En Colombia, una página web profesional puede comenzar alrededor de $500.000 para una landing page y superar varios millones cuando incluye catálogo, pagos, usuarios o procesos a la medida. La diferencia no está únicamente en cuántas pantallas se ven: también intervienen la estrategia, el contenido, la programación, las integraciones y el acompañamiento después de publicar.",
          "Un precio responsable debe explicar qué se entrega, cuánto tarda, qué puedes administrar y qué costos continuarán cada año. Comparar solo la cifra final suele ocultar diferencias importantes entre una plantilla instalada y un proyecto diseñado para el negocio.",
        ],
      },
      {
        heading: "Rangos de referencia para un negocio colombiano",
        paragraphs: [
          "Estos rangos sirven como punto de partida. La cotización definitiva depende del número de páginas, la preparación del contenido y las funciones necesarias.",
        ],
        bullets: [
          "Landing page: entre $500.000 y $700.000. Reúne la propuesta, beneficios y contacto en una sola página.",
          "Sitio autoadministrable: entre $800.000 y $1.500.000. Incluye varias páginas y un panel para actualizar contenido.",
          "Tienda en línea: entre $2.000.000 y $3.000.000. Agrega catálogo, carrito, medios de pago y administración de productos.",
          "Software a la medida: se cotiza según procesos, usuarios, reportes, inventarios e integraciones.",
        ],
      },
      {
        heading: "Qué debería incluir una cotización seria",
        paragraphs: [
          "La propuesta debe dejar por escrito el alcance y evitar expresiones ambiguas como “página completa” sin enumerar entregables. También debe identificar qué debe aportar el cliente y qué ocurrirá si el proyecto cambia durante el desarrollo.",
        ],
        bullets: [
          "Número de páginas o secciones y funciones incluidas.",
          "Diseño adaptable a celular, tableta y computador.",
          "Formulario, WhatsApp y destino de las solicitudes.",
          "Configuración de títulos, descripciones, sitemap y Search Console.",
          "Revisiones incluidas, plazo de entrega y forma de pago.",
          "Propiedad del dominio, accesos y archivos al finalizar.",
        ],
      },
      {
        heading: "Costos anuales que no deben sorprenderte",
        paragraphs: [
          "El desarrollo suele pagarse una sola vez, pero el dominio, el correo profesional y algunos servicios externos se renuevan. El alojamiento puede estar incluido o cobrarse por separado. Antes de contratar, pregunta quién administra cada cuenta y cuánto costará mantenerla.",
          "También conviene definir si habrá soporte, copias de seguridad, actualizaciones de contenido o mejoras posteriores. Un sitio económico puede resultar costoso si depende permanentemente del proveedor para cambiar un teléfono o una fotografía.",
        ],
      },
      {
        heading: "Cómo elegir sin equivocarte",
        paragraphs: [
          "Pide ejemplos que estén realmente en línea, visita esos sitios desde el celular y comprueba que sus formularios funcionen. Pregunta qué problema resolvió cada proyecto, no solo qué colores utilizó. La mejor propuesta no es necesariamente la más barata ni la más extensa: es la que conecta alcance, precio y objetivo comercial con claridad.",
        ],
      },
    ],
    faq: [
      {
        question: "¿El dominio está incluido en el precio?",
        answer:
          "Depende de la propuesta. Debe indicarse quién lo compra, a nombre de quién queda y cuánto costará renovarlo.",
      },
      {
        question: "¿Una página barata puede aparecer en Google?",
        answer:
          "Puede indexarse, pero posicionarse requiere estructura técnica, contenido útil, autoridad y seguimiento; no depende únicamente del precio.",
      },
    ],
  },
  {
    slug: "landing-page-o-sitio-web",
    title: "Landing page o sitio web: ¿cuál necesita tu negocio?",
    description:
      "Compara una landing page con un sitio web completo y elige según tu objetivo, presupuesto, publicidad y etapa del negocio.",
    excerpt:
      "Una sola página puede ser suficiente para una campaña; un sitio completo es mejor cuando necesitas explicar varios servicios y crecer en Google.",
    category: "Estrategia web",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readingMinutes: 7,
    relatedService: "/servicios/landing-pages/",
    sections: [
      {
        heading: "No son dos nombres para el mismo producto",
        paragraphs: [
          "Una landing page concentra todo en una sola dirección y conduce a una acción: solicitar una cotización, reservar una cita o comprar. Un sitio web distribuye la información entre páginas como servicios, nosotros, casos, preguntas y contacto.",
          "La decisión correcta depende de lo que el visitante necesita entender antes de actuar y de cómo llegará al sitio. Una campaña publicitaria puede funcionar mejor con una landing directa; una empresa con varios servicios necesita una estructura que pueda crecer y posicionarse por diferentes búsquedas.",
        ],
      },
      {
        heading: "Cuándo elegir una landing page",
        paragraphs: [
          "La landing es adecuada cuando existe una oferta concreta y una fuente de tráfico definida. Reduce distracciones y permite medir con claridad cuántas personas completan la acción principal.",
        ],
        bullets: [
          "Vas a lanzar una campaña en Google, Instagram o Facebook.",
          "Promocionas un solo servicio, evento o producto.",
          "Necesitas validar una idea antes de construir algo más grande.",
          "El visitante puede decidir con una explicación breve y prueba de confianza.",
        ],
      },
      {
        heading: "Cuándo necesitas un sitio web completo",
        paragraphs: [
          "Un sitio de varias páginas es mejor cuando cada servicio requiere explicación propia, el cliente compara alternativas o quieres trabajar el posicionamiento orgánico. Cada página puede responder una intención de búsqueda distinta y enlazarse con casos y contenidos relacionados.",
        ],
        bullets: [
          "Ofreces varios servicios o atiendes públicos diferentes.",
          "Necesitas portafolio, equipo, preguntas, blog o recursos.",
          "Quieres aparecer en Google por más de una búsqueda comercial.",
          "El negocio necesita actualizar información de forma constante.",
        ],
      },
      {
        heading: "La publicidad y el SEO no piden exactamente lo mismo",
        paragraphs: [
          "Una landing puede responder muy bien a un anuncio porque el mensaje coincide con la campaña. Para SEO, un sitio completo ofrece más espacio para demostrar experiencia, cubrir preguntas y construir relaciones entre temas. Esto no significa que una landing no pueda indexarse, sino que tendrá menos oportunidades para competir por búsquedas variadas.",
        ],
      },
      {
        heading: "Una ruta práctica para empezar",
        paragraphs: [
          "Si el presupuesto es limitado y tienes una oferta principal, comienza con una landing bien construida que pueda convertirse más adelante en la portada de un sitio completo. Si ya tienes varios servicios, clientes y casos, construir la arquitectura completa desde el inicio evita migraciones y contenidos duplicados.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Una landing page puede tener formulario y WhatsApp?",
        answer:
          "Sí. De hecho, ambos canales suelen ser parte de su objetivo principal de conversión.",
      },
      {
        question: "¿Puedo convertir una landing en un sitio completo después?",
        answer:
          "Sí, si el proyecto se construye con una estructura preparada para añadir nuevas rutas y contenidos.",
      },
    ],
  },
  {
    slug: "como-aparecer-en-google-pagina-nueva",
    title: "Cómo aparecer en Google con una página web nueva",
    description:
      "Guía práctica para que una página nueva sea rastreada, indexada y empiece a competir en Google sin promesas de resultados inmediatos.",
    excerpt:
      "Publicar no basta: Google debe descubrir, entender y considerar útil cada página antes de mostrarla para búsquedas relevantes.",
    category: "SEO técnico",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readingMinutes: 9,
    relatedService: "/servicios/seo-tecnico/",
    sections: [
      {
        heading: "Publicar es el comienzo, no el resultado",
        paragraphs: [
          "Cuando un sitio nuevo queda en línea, Google todavía no sabe necesariamente que existe. Primero debe encontrar sus direcciones, rastrear el contenido, decidir qué versión es la oficial e incorporarla a su índice. Después evalúa para qué consultas podría ser relevante.",
          "Por eso una búsqueda con el nombre del negocio suele aparecer antes que búsquedas generales y competitivas. El posicionamiento se construye con señales técnicas, contenido, experiencia demostrable y menciones externas.",
        ],
      },
      {
        heading: "Paso 1: permitir que Google rastree la página",
        paragraphs: [
          "El archivo robots.txt debe permitir el acceso a las páginas públicas. Cada página importante debe responder correctamente, tener enlaces internos y no incluir una etiqueta noindex por accidente. Las versiones con y sin www, así como http y https, deben consolidarse mediante redirecciones permanentes.",
        ],
      },
      {
        heading: "Paso 2: declarar las páginas importantes",
        paragraphs: [
          "El sitemap enumera las direcciones que quieres que Google conozca. Debe usar las URL oficiales, responder correctamente y excluir páginas privadas, duplicadas o marcadas noindex. Luego se registra en Google Search Console.",
          "Enviar un sitemap ayuda al descubrimiento, pero no obliga a Google a indexar ni posicionar todas las direcciones. La calidad y utilidad de cada página siguen siendo decisivas.",
        ],
      },
      {
        heading: "Paso 3: explicar claramente cada servicio",
        paragraphs: [
          "Una página no debería intentar posicionarse por todo. Es mejor asignar una intención principal a cada servicio, utilizar un título descriptivo y responder preguntas que una persona necesita resolver antes de contratar. El texto debe aportar información real sobre alcance, proceso, precios o resultados.",
        ],
        bullets: [
          "Un título único y un H1 coherente.",
          "Una descripción clara del servicio y para quién sirve.",
          "Enlaces hacia precios, casos y contacto.",
          "Datos de negocio consistentes.",
          "Contenido visible en texto, no únicamente dentro de imágenes.",
        ],
      },
      {
        heading: "Paso 4: demostrar experiencia y conseguir referencias",
        paragraphs: [
          "Los casos reales, testimonios autorizados y enlaces desde clientes ayudan a demostrar que detrás del sitio existe trabajo verificable. Una página nueva sin menciones externas puede estar técnicamente perfecta y aun así tardar en competir frente a dominios con años de autoridad.",
        ],
      },
      {
        heading: "Paso 5: medir consultas, no solo posiciones",
        paragraphs: [
          "Search Console muestra por qué búsquedas apareció el sitio, cuántas impresiones obtuvo y qué páginas recibieron clics. Esos datos permiten ampliar temas que ya muestran señales y corregir resultados con muchas impresiones pero pocos clics.",
          "El objetivo final no es acumular visitas sin intención, sino atraer personas que necesiten el servicio y facilitar que contacten por formulario o WhatsApp.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Cuánto tarda una página nueva en aparecer en Google?",
        answer:
          "No existe un plazo garantizado. El descubrimiento puede ser rápido, pero competir por búsquedas comerciales requiere contenido, autoridad y tiempo.",
      },
      {
        question: "¿Pagar anuncios mejora el posicionamiento orgánico?",
        answer:
          "No directamente. Los anuncios y los resultados orgánicos son sistemas distintos, aunque la publicidad puede generar conocimiento de marca y clientes.",
      },
    ],
  },
  {
    slug: "que-debe-tener-pagina-web-para-generar-clientes",
    title: "Qué debe tener una página web para generar clientes",
    description:
      "Elementos esenciales de una página web que genera confianza, explica una oferta y convierte visitas en conversaciones comerciales.",
    excerpt:
      "Diseño bonito no es suficiente: mensaje, confianza, velocidad y una ruta clara de contacto deben trabajar juntos.",
    category: "Conversión",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readingMinutes: 8,
    relatedService: "/servicios/paginas-web/",
    sections: [
      {
        heading: "Una página genera clientes cuando reduce incertidumbre",
        paragraphs: [
          "Antes de escribir, una persona quiere saber si entendiste su problema, si puedes resolverlo, cuánto podría costar y qué ocurrirá después del contacto. Una página efectiva responde esas preguntas en orden y evita obligar al visitante a buscar información esencial.",
          "La conversión no depende de un botón llamativo aislado. Es el resultado de una propuesta clara, evidencia, facilidad de uso y un canal de contacto que realmente funciona.",
        ],
      },
      {
        heading: "Una propuesta que se entienda en pocos segundos",
        paragraphs: [
          "El encabezado principal debe explicar qué haces, para quién y qué resultado ayudas a conseguir. Frases genéricas como “transformamos tus sueños” no sustituyen una descripción concreta del servicio. El visitante debe reconocer rápidamente que llegó al lugar correcto.",
        ],
      },
      {
        heading: "Pruebas que respalden lo que prometes",
        paragraphs: [
          "Los proyectos reales son más persuasivos que una lista de adjetivos. Un caso útil describe el problema, el trabajo realizado y el resultado. También puede incluir un enlace al proyecto, capturas, funciones implementadas y un testimonio autorizado.",
        ],
        bullets: [
          "Portafolio verificable y actualizado.",
          "Testimonios con contexto, no frases anónimas.",
          "Proceso de trabajo y tiempos aproximados.",
          "Datos de contacto y ubicación consistentes.",
          "Políticas visibles cuando se recopilan datos o se venden productos.",
        ],
      },
      {
        heading: "Una llamada a la acción adecuada al momento",
        paragraphs: [
          "No todos los visitantes están listos para comprar. Algunos quieren ver precios, otros comparar trabajos y otros hacer una pregunta. La página debe ofrecer una acción principal, como cotizar, y rutas secundarias como revisar planes o casos.",
          "El formulario debe pedir solo la información necesaria y confirmar el envío sin obligar a abrir otra aplicación. WhatsApp puede complementar el formulario para quienes prefieren una conversación inmediata.",
        ],
      },
      {
        heading: "Velocidad y experiencia móvil",
        paragraphs: [
          "Una gran parte de los visitantes llegará desde el celular. El texto debe ser legible, los botones fáciles de tocar y el contenido principal debe aparecer sin esperas innecesarias. Las imágenes deben tener tamaño definido y peso razonable para evitar saltos y demoras.",
        ],
      },
      {
        heading: "Medición para mejorar con evidencia",
        paragraphs: [
          "Sin medición es imposible saber si el sitio ayuda al negocio. Conviene registrar envíos de formulario, clics en WhatsApp, visitas a precios y consultas originadas en búsquedas. Esos datos permiten cambiar mensajes, prioridades y llamadas a la acción con base en comportamiento real.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Conviene mostrar precios en la página?",
        answer:
          "Cuando el servicio puede expresarse en rangos, mostrarlos ayuda a filtrar expectativas y genera confianza. La propuesta final puede seguir siendo personalizada.",
      },
      {
        question: "¿Es mejor formulario o WhatsApp?",
        answer:
          "Lo ideal es ofrecer ambos: el formulario organiza solicitudes y WhatsApp facilita conversaciones rápidas.",
      },
    ],
  },
];

export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Bogota",
  }).format(new Date(`${value}T12:00:00-05:00`));
}

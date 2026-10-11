export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogLink = { label: string; to: string; description: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  relatedService: string;
  answer: string;
  sections: BlogSection[];
  faq: Array<{ question: string; answer: string }>;
  nextSteps?: BlogLink[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-pagina-web-colombia-2026",
    title: "¿Cuánto cuesta una página web en Colombia en 2026?",
    description:
      "Precios de referencia de una página web en Colombia en 2026: landing, sitio autoadministrable y tienda, qué cambia el valor y qué pagos continúan después.",
    excerpt:
      "Precios publicados por tipo de página, factores que suben o bajan el valor y costos posteriores para comparar propuestas sin sorpresas.",
    category: "Precios y contratación",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-11",
    readingMinutes: 9,
    relatedService: "/servicios/paginas-web/",
    answer:
      "En Legión Digital Studio una landing page cuesta desde $500.000, un sitio autoadministrable desde $800.000 y una tienda en línea desde $2.000.000. El valor exacto depende del número de páginas, el contenido, el panel, el catálogo y las integraciones. Todos los planes incluyen dominio .com o .com.co y alojamiento durante el primer año; desde el segundo año se pagan sus renovaciones.",
    sections: [
      {
        heading: "La respuesta corta: depende del alcance, no solo del diseño",
        paragraphs: [
          "Si comparas cotizaciones encontrarás valores muy distintos para algo que todos llaman “página web”. La diferencia no está únicamente en cuántas pantallas se ven: también cuentan los textos, la programación, el panel para editar, las integraciones y lo que ocurre después de publicar.",
          "Un precio responsable debe explicar qué se entrega, cuánto tarda, qué puedes administrar y qué costos continuarán cada año. Comparar solo la cifra final suele ocultar diferencias importantes entre una plantilla instalada y un proyecto diseñado para el negocio.",
        ],
      },
      {
        heading: "Precios y tiempos de referencia por tipo de página",
        paragraphs: [
          "Estos son los precios iniciales que publicamos en Legión Digital Studio. El valor aumenta según el alcance y se confirma en una cotización escrita antes de comenzar.",
        ],
        bullets: [
          "Landing page: desde $500.000, entrega en 5 a 8 días. Una sola página con tu propuesta, beneficios, formulario y WhatsApp.",
          "Sitio autoadministrable: desde $800.000, entrega en 2 a 3 semanas. Entre 5 y 10 páginas, una por servicio, y un panel para cambiar textos e imágenes.",
          "Tienda en línea: desde $2.000.000, entrega en 3 a 5 semanas. Catálogo con categorías, carrito o cotización, medios de pago y panel de productos.",
          "Software a la medida: se cotiza según procesos, usuarios, reportes, inventarios e integraciones.",
        ],
      },
      {
        heading: "Qué hace subir o bajar el precio",
        paragraphs: [
          "Dos negocios pueden pedir “una página sencilla” y necesitar trabajos muy diferentes. Estos factores son los que más mueven una cotización:",
        ],
        bullets: [
          "Número de páginas o secciones: cada servicio con su propia página requiere textos, diseño y revisión.",
          "Contenido: si los textos y las fotos están listos o hay que organizarlos desde una conversación.",
          "Panel de administración: poder cambiar textos, fotos o productos sin depender del proveedor.",
          "Catálogo: cantidad de productos, categorías y variantes como talla, color o presentación.",
          "Pagos, envíos y pedidos: cada regla de negocio debe programarse y probarse.",
          "Integraciones: reservas, pasarelas de pago, facturación, inventarios u otros sistemas.",
          "Materiales que no existen: producción fotográfica o de video se cotiza aparte.",
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
        heading: "Costos que continúan después de publicar",
        paragraphs: [
          "El desarrollo suele pagarse una sola vez, pero el dominio, el correo profesional y el alojamiento se renuevan con su proveedor, y sus tarifas dependen de cada uno. Una tienda puede sumar las comisiones de la pasarela de pagos. Antes de contratar, pregunta quién administra cada cuenta, a nombre de quién queda y cuándo vence.",
          "También conviene definir si habrá soporte, copias de seguridad, actualizaciones de contenido o mejoras posteriores. En Legión el mantenimiento y el soporte continuo se contratan por separado cuando no están incluidos en la propuesta. Un sitio económico puede resultar costoso si depende permanentemente del proveedor para cambiar un teléfono o una fotografía.",
        ],
      },
      {
        heading: "Cómo se paga y qué cubre la garantía",
        paragraphs: [
          "En nuestros proyectos el pago normalmente se divide en 50 % para iniciar y 50 % contra entrega, antes de publicar o transferir los archivos finales. El plazo empieza a contar cuando se confirma el anticipo y se reciben los contenidos.",
          "Después de publicar corregimos sin costo los errores técnicos reproducibles del desarrollo que se reporten dentro de 30 días. Las nuevas páginas, funciones o cambios de contenido no hacen parte de esa garantía y se cotizan aparte.",
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
          "Depende de la propuesta. Debe indicarse quién lo compra, a nombre de quién queda y cuánto costará renovarlo. En Legión todos los planes incluyen dominio .com o .com.co y alojamiento durante el primer año, y el dominio queda a nombre de tu negocio.",
      },
      {
        question: "¿Por qué algunas páginas web cuestan mucho menos?",
        answer:
          "Suelen incluir menos alcance: una plantilla con pocos cambios, sin textos trabajados, sin panel o con costos mensuales posteriores. Compara qué se entrega, quién es dueño de las cuentas y qué pagarás después, no solo el valor inicial.",
      },
      {
        question: "¿Cuánto cuesta mantener una página web?",
        answer:
          "Depende de las renovaciones de dominio, correo y alojamiento y de si contratas soporte para cambios. Esos valores dependen de cada proveedor y deben aparecer separados del costo de desarrollo.",
      },
      {
        question: "¿Una página barata puede aparecer en Google?",
        answer:
          "Puede indexarse, pero posicionarse requiere estructura técnica, contenido útil, autoridad y seguimiento; no depende únicamente del precio.",
      },
    ],
    nextSteps: [
      {
        label: "Planes y precios",
        to: "/precios/",
        description: "Qué incluye cada plan y qué se cobra aparte.",
      },
      {
        label: "Diseño de páginas web",
        to: "/servicios/paginas-web/",
        description: "Proceso, condiciones y preguntas antes de contratar.",
      },
      {
        label: "Proyectos en línea",
        to: "/trabajo/",
        description: "Sitios reales que puedes visitar desde tu celular.",
      },
    ],
  },
  {
    slug: "que-tipo-de-pagina-web-necesita-mi-negocio",
    title: "¿Qué tipo de página web necesita mi negocio? Landing page o sitio web",
    seoTitle: "Landing page o sitio web: ¿qué necesita tu negocio?",
    description:
      "Diferencias entre landing page y sitio web, cuándo conviene cada una, si una landing puede posicionarse en Google y cuándo necesitas catálogo o tienda.",
    excerpt:
      "La opción adecuada depende de lo que vendes, cuánto debe entender el cliente y si necesitas catálogo, pagos, publicidad o posicionamiento en Google.",
    category: "Estrategia web",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-11",
    readingMinutes: 8,
    relatedService: "/servicios/paginas-web/",
    answer:
      "Una landing page es una sola página enfocada en una acción, ideal para una oferta concreta o una campaña. Un sitio web tiene varias páginas y conviene cuando ofreces varios servicios o quieres aparecer en Google por distintas búsquedas. Si muestras productos necesitas un catálogo y, si cobras en línea, una tienda virtual.",
    sections: [
      {
        heading: "No son dos nombres para el mismo producto",
        paragraphs: [
          "Una landing page concentra todo en una sola dirección y conduce a una acción: solicitar una cotización, reservar una cita o comprar. Un sitio web distribuye la información entre páginas como servicios, nosotros, casos, preguntas y contacto.",
          "La decisión correcta depende de lo que el visitante necesita entender antes de actuar y de cómo llegará al sitio. Una campaña publicitaria puede funcionar mejor con una landing directa; una empresa con varios servicios necesita una estructura que pueda crecer y posicionarse por diferentes búsquedas.",
        ],
      },
      {
        heading: "Diferencias entre landing page y sitio web",
        paragraphs: ["Esta comparación resume en qué se diferencian en la práctica:"],
        bullets: [
          "Objetivo: la landing persigue una sola acción; el sitio atiende varias necesidades y públicos.",
          "Estructura: la landing es una página larga; el sitio reparte el contenido en varias direcciones.",
          "Tráfico: la landing suele recibir visitas de anuncios o redes; el sitio, además, de búsquedas en Google.",
          "Posicionamiento: la landing compite por una intención principal; el sitio puede competir por una búsqueda en cada página.",
          "Inversión con Legión: landing desde $500.000 en 5 a 8 días; sitio autoadministrable desde $800.000 en 2 a 3 semanas.",
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
        heading: "¿Se puede hacer SEO a una landing page?",
        paragraphs: [
          "Sí. Una landing puede indexarse y aparecer en Google si tiene contenido en texto, un título y una descripción propios, un encabezado principal claro, buena velocidad en celular y enlaces que permitan descubrirla. Lo que no puede hacer es competir bien por muchas búsquedas distintas a la vez.",
          "Si la landing se crea solo para una campaña y repite el contenido de otra página, conviene definir cuál es la versión oficial para evitar duplicados. Si con el tiempo atraes búsquedas de varios servicios, lo natural es convertir la landing en la portada de un sitio y crear una página para cada servicio.",
        ],
        bullets: [
          "Una intención de búsqueda principal por página.",
          "Texto visible que responda dudas reales, no solo imágenes.",
          "Título, descripción y encabezado coherentes con esa búsqueda.",
          "Carga rápida y diseño cómodo en celular.",
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
        question: "¿Una landing page aparece en Google?",
        answer:
          "Puede aparecer si es rastreable y tiene contenido útil, pero compite por menos búsquedas que un sitio con una página por servicio.",
      },
      {
        question: "¿Puedo convertir una landing en un sitio completo después?",
        answer:
          "Sí, si el proyecto se construye con una estructura preparada para añadir nuevas rutas y contenidos.",
      },
    ],
    nextSteps: [
      {
        label: "Landing pages",
        to: "/servicios/landing-pages/",
        description: "Una página, un objetivo, desde $500.000.",
      },
      {
        label: "Sitio web a la medida",
        to: "/servicios/paginas-web/",
        description: "Varias páginas, panel y condiciones claras.",
      },
      {
        label: "Comparar planes",
        to: "/precios/",
        description: "Qué incluye cada nivel y qué se cobra aparte.",
      },
    ],
  },
  {
    slug: "como-aparecer-en-google-pagina-nueva",
    title: "Cómo aparecer en Google con una página web nueva",
    seoTitle: "Cómo hacer que tu página web aparezca en Google",
    description:
      "Guía práctica para que una página nueva sea rastreada, indexada y empiece a competir en Google sin promesas de resultados inmediatos.",
    excerpt:
      "Publicar no basta: Google debe descubrir, entender y considerar útil cada página antes de mostrarla para búsquedas relevantes.",
    category: "SEO técnico",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-11",
    readingMinutes: 9,
    relatedService: "/servicios/seo-tecnico/",
    answer:
      "Para aparecer en Google, la página debe poder rastrearse, tener una dirección oficial, estar enlazada dentro del sitio, figurar en un sitemap y responder con contenido útil a una búsqueda concreta. Search Console ayuda a confirmar el descubrimiento y medir resultados.",
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
        heading: "Cómo dar de alta tu página en Google y otros buscadores",
        paragraphs: [
          "“Dar de alta” una página no es un trámite pagado: consiste en demostrar que el sitio es tuyo y decirle al buscador dónde están tus direcciones. Google y Bing ofrecen herramientas gratuitas para hacerlo.",
        ],
        bullets: [
          "Crea una propiedad en Google Search Console y verifica el dominio con el registro DNS que te indica.",
          "En la sección Sitemaps, envía la dirección de tu sitemap, por ejemplo tudominio.com/sitemap.xml.",
          "Usa la inspección de URL para revisar una página importante y solicitar su indexación.",
          "Registra el sitio en Bing Webmaster Tools; permite importar la configuración desde Search Console.",
          "Revisa después de unos días los informes de páginas indexadas y corrige los errores que aparezcan.",
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
      {
        question: "¿Hay que pagar para dar de alta una página en Google?",
        answer:
          "No. Search Console y Bing Webmaster Tools son gratuitos. Lo que tiene costo es el trabajo técnico y de contenido para que la página merezca aparecer.",
      },
    ],
    nextSteps: [
      {
        label: "SEO técnico",
        to: "/servicios/seo-tecnico/",
        description: "Estructura, metadatos, sitemap y Search Console configurados.",
      },
      {
        label: "Páginas web a la medida",
        to: "/servicios/paginas-web/",
        description: "Sitios que nacen preparados para aparecer en Google.",
      },
      {
        label: "Cuánto cuesta una página web",
        to: "/blog/cuanto-cuesta-pagina-web-colombia-2026/",
        description: "Precios de referencia y costos posteriores.",
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
    answer:
      "Una página que genera clientes explica de inmediato qué ofrece, demuestra confianza, funciona rápido en celular y facilita una acción clara como escribir por WhatsApp, enviar un formulario o solicitar una cotización.",
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
  {
    slug: "cuanto-cuestan-dominio-hosting-mantenimiento-colombia",
    title: "¿Cuánto cuestan el dominio, el hosting y el mantenimiento de una página web?",
    description:
      "Conoce cuánto cuestan el dominio, el hosting y el mantenimiento de una página web en Colombia, qué se renueva y a nombre de quién debe quedar.",
    excerpt:
      "El desarrollo no es el único valor: dominio, alojamiento, correo y soporte pueden renovarse cada año. Esta guía explica qué pagas y qué debes exigir.",
    category: "Costos web",
    publishedAt: "2026-10-02",
    updatedAt: "2026-10-02",
    readingMinutes: 8,
    relatedService: "/precios/",
    answer:
      "En Colombia, un dominio suele renovarse anualmente y el hosting puede cobrarse mensual o anualmente. El total depende del proveedor, el tráfico, el correo y el soporte; la propuesta debe separar claramente esos valores del costo de construir la página.",
    sections: [
      {
        heading: "Dominio, hosting y mantenimiento no son lo mismo",
        paragraphs: [
          "El dominio es la dirección del sitio, como tunegocio.com. El hosting es el servicio que mantiene sus archivos disponibles en internet. El mantenimiento reúne tareas posteriores: copias, seguridad, cambios de contenido, soporte y mejoras.",
          "Algunas propuestas agrupan todo durante el primer año y otras cobran cada componente por separado. Ningún modelo es malo por sí mismo; lo importante es conocer desde el inicio qué se renueva, cuánto cuesta y quién controla las cuentas.",
        ],
      },
      {
        heading: "Qué valores debes pedir por separado",
        paragraphs: [
          "Los precios cambian entre proveedores y según la capacidad contratada. En lugar de comparar solo un total, solicita un desglose para saber qué continuará después del lanzamiento.",
        ],
        bullets: [
          "Registro y renovación anual del dominio.",
          "Alojamiento, certificado SSL, copias de seguridad y tráfico permitido.",
          "Correo profesional y cantidad de cuentas incluidas.",
          "Soporte técnico, cambios de contenido y tiempo de respuesta.",
          "Licencias o servicios externos que dependan de una suscripción.",
        ],
      },
      {
        heading: "El dominio debe quedar bajo control del negocio",
        paragraphs: [
          "El titular del negocio debe conservar acceso al registrador del dominio o, como mínimo, quedar identificado como propietario. Si la relación con el proveedor termina, la página debe poder trasladarse sin perder el nombre ni el correo.",
          "Pide por escrito quién administra DNS, hosting, correo y copias. También solicita una fecha de renovación y un aviso con suficiente anticipación para evitar interrupciones.",
        ],
      },
      {
        heading: "Cómo calcular el costo real del primer año",
        paragraphs: [
          "Suma el desarrollo, dominio, hosting, correo, contenido, integraciones y soporte. Después separa cuáles pagos se repiten cada año. Esa comparación evita aceptar una oferta barata que después depende de renovaciones costosas o de servicios que no puedes trasladar.",
        ],
      },
    ],
    faq: [
      {
        question: "¿El dominio se paga una sola vez?",
        answer:
          "No. Normalmente se registra por un periodo y debe renovarse para conservar la dirección.",
      },
      {
        question: "¿Puedo cambiar de proveedor de hosting?",
        answer:
          "Sí, siempre que conserves los accesos, los archivos, la base de datos y el control del dominio.",
      },
      {
        question: "¿El certificado SSL debe cobrarse aparte?",
        answer:
          "Depende del proveedor, pero existen certificados incluidos sin costo adicional. La cotización debe aclararlo.",
      },
    ],
  },
  {
    slug: "mi-negocio-necesita-pagina-web-si-tiene-instagram-whatsapp",
    title: "¿Mi negocio necesita una página web si ya tiene Instagram y WhatsApp?",
    description:
      "Descubre cuándo Instagram y WhatsApp son suficientes y por qué una página web puede dar más confianza, control y visibilidad en Google.",
    excerpt:
      "Las redes ayudan a conversar y mostrar novedades; la página organiza la oferta, pertenece al negocio y puede responder búsquedas cuando el cliente todavía no conoce la marca.",
    category: "Estrategia digital",
    publishedAt: "2026-10-02",
    updatedAt: "2026-10-02",
    readingMinutes: 7,
    relatedService: "/servicios/paginas-web/",
    answer:
      "Sí conviene cuando quieres aparecer en Google, explicar varios servicios, mostrar precios o casos y depender menos de una red social. Instagram, WhatsApp y la página no compiten: cada canal cumple una función diferente.",
    sections: [
      {
        heading: "Instagram atrae atención; la página organiza la decisión",
        paragraphs: [
          "Una red social es útil para publicar novedades y conversar con una comunidad. Sin embargo, obliga al visitante a recorrer publicaciones para entender servicios, precios, ubicación y condiciones.",
          "Una página reúne esa información en una estructura estable: cada servicio tiene una dirección, los casos se pueden verificar y el contacto aparece en el momento adecuado.",
        ],
      },
      {
        heading: "WhatsApp es un canal de contacto, no un catálogo completo",
        paragraphs: [
          "WhatsApp facilita cerrar una conversación, pero no debería obligarte a responder una y otra vez las mismas preguntas. La página puede explicar previamente opciones, rangos de precio, cobertura y requisitos para que el contacto llegue mejor informado.",
        ],
      },
      {
        heading: "Cuándo una página se vuelve especialmente útil",
        paragraphs: [
          "No todos los negocios necesitan la misma estructura. Estas señales indican que una página puede aportar más que mantener únicamente perfiles sociales.",
        ],
        bullets: [
          "Los clientes buscan tu servicio en Google sin conocer todavía tu nombre.",
          "Ofreces varios servicios o productos que necesitan explicación.",
          "Quieres mostrar trabajos, testimonios, preguntas o precios de forma ordenada.",
          "Necesitas formularios, reservas, catálogo, pagos o seguimiento.",
          "Quieres conservar control sobre el contenido y medir conversiones.",
        ],
      },
      {
        heading: "La mejor estrategia combina los tres canales",
        paragraphs: [
          "La página recibe búsquedas y concentra información; Instagram mantiene presencia y muestra actividad; WhatsApp convierte el interés en conversación. Cada publicación social puede llevar a una página concreta y cada página puede ofrecer contacto inmediato.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Una página reemplaza Instagram?",
        answer:
          "No. La página complementa las redes y ofrece un espacio estable bajo control del negocio.",
      },
      {
        question: "¿Puedo enviar visitantes de la página a WhatsApp?",
        answer:
          "Sí. Se pueden usar botones con mensajes preparados y medir cuántas personas los utilizan.",
      },
    ],
  },
  {
    slug: "cuanto-tiempo-demora-hacer-pagina-web-que-debo-entregar",
    title: "¿Cuánto tiempo se demora hacer una página web y qué debo entregar?",
    description:
      "Conoce cuánto tarda hacer una página web, qué materiales debe entregar el negocio y qué factores pueden retrasar el proyecto.",
    excerpt:
      "Una página sencilla puede estar lista en pocos días; un sitio con catálogo, contenido e integraciones necesita más tiempo. La preparación del cliente también influye.",
    category: "Proceso y contratación",
    publishedAt: "2026-10-02",
    updatedAt: "2026-10-02",
    readingMinutes: 7,
    relatedService: "/servicios/paginas-web/",
    answer:
      "Una página sencilla puede tardar entre 5 y 8 días; un sitio de varias páginas, entre 2 y 3 semanas; y una tienda, entre 3 y 5 semanas. El plazo depende de funciones, contenido, revisiones y rapidez para aprobar avances.",
    sections: [
      {
        heading: "El plazo depende más del alcance que del número de colores",
        paragraphs: [
          "Una página informativa con una oferta clara requiere menos etapas que una tienda con productos, pagos, envíos y panel administrativo. La cotización debe indicar el alcance y desde qué momento empieza a contarse el plazo.",
        ],
        bullets: [
          "Landing o página sencilla: aproximadamente 5 a 8 días.",
          "Sitio empresarial de varias páginas: aproximadamente 2 a 3 semanas.",
          "Tienda virtual: aproximadamente 3 a 5 semanas.",
          "Software o integraciones especiales: cronograma definido según funciones.",
        ],
      },
      {
        heading: "Qué debe entregar el negocio",
        paragraphs: [
          "No necesitas llegar con todo perfectamente redactado, pero sí debes aportar información suficiente para entender la oferta y comprobar los datos que se publicarán.",
        ],
        bullets: [
          "Logo, nombre comercial, teléfonos, correo, dirección y horarios.",
          "Lista de servicios o productos y sus diferencias.",
          "Fotografías propias disponibles y autorizadas.",
          "Precios o criterios para solicitar una cotización.",
          "Políticas, cobertura, garantías y condiciones relevantes.",
          "Accesos al dominio o cuentas existentes cuando aplique.",
        ],
      },
      {
        heading: "Qué suele retrasar un proyecto",
        paragraphs: [
          "Las demoras más frecuentes aparecen cuando cambia el alcance, falta contenido, intervienen muchas personas en la aprobación o se solicitan funciones que no estaban contempladas. Un calendario de revisiones reduce esos riesgos.",
        ],
      },
      {
        heading: "Cómo saber si el proyecto realmente terminó",
        paragraphs: [
          "La entrega no debería limitarse a mostrar una página bonita. Deben probarse formularios, WhatsApp, versión móvil, dominio, certificado, metadatos, sitemap y accesos. También conviene dejar por escrito el soporte incluido después de publicar.",
        ],
      },
    ],
    faq: [
      {
        question: "¿El tiempo empieza desde el primer pago?",
        answer:
          "Debe acordarse en la propuesta. Normalmente comienza cuando se confirma el proyecto y se recibe la información inicial necesaria.",
      },
      {
        question: "¿Puedo cambiar textos después de publicar?",
        answer:
          "Sí. Debe definirse si los cambios los hará el proveedor, un panel administrativo o ambos.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-tienda-virtual-colombia",
    title: "¿Cuánto cuesta una tienda virtual en Colombia?",
    description:
      "Conoce cuánto cuesta una tienda virtual en Colombia y cómo influyen el catálogo, los pagos, los envíos, el inventario y el mantenimiento.",
    excerpt:
      "El costo de una tienda no depende únicamente del número de productos: pagos, inventario, envíos, variantes y administración cambian el alcance real.",
    category: "Tiendas en línea",
    publishedAt: "2026-10-02",
    updatedAt: "2026-10-02",
    readingMinutes: 9,
    relatedService: "/servicios/tiendas-en-linea/",
    answer:
      "En Legión Digital Studio una tienda en línea parte desde $2.000.000. El valor puede aumentar según productos, variantes, pagos, envíos, inventario, usuarios e integraciones necesarias.",
    sections: [
      {
        heading: "Una tienda virtual es más que un catálogo",
        paragraphs: [
          "Un catálogo muestra productos; una tienda permite seleccionar, calcular, registrar un pedido y, cuando aplica, pagar. Esa diferencia incorpora reglas de negocio que deben probarse antes de vender.",
          "El precio también depende de quién cargará los productos, cómo se manejará el inventario y qué información necesita el cliente para comprar sin preguntar todo por WhatsApp.",
        ],
      },
      {
        heading: "Funciones que cambian la cotización",
        paragraphs: [
          "Dos tiendas con el mismo número de productos pueden tener alcances muy diferentes. Conviene definir estas decisiones antes de comparar propuestas.",
        ],
        bullets: [
          "Cantidad de productos, categorías y variantes como talla, color o sabor.",
          "Carrito, cotización por WhatsApp o pago directo en línea.",
          "Reglas de envío por ciudad, peso, valor o transportadora.",
          "Inventario, alertas, cupones y precios promocionales.",
          "Cuentas de cliente, historial de pedidos y correos automáticos.",
          "Integraciones con facturación, logística, punto de venta o ERP.",
        ],
      },
      {
        heading: "Costos que continúan después del desarrollo",
        paragraphs: [
          "Además del dominio y el alojamiento, una tienda puede asumir comisiones de la pasarela, planes de correo, aplicaciones externas y mantenimiento. La propuesta debe indicar qué cobra el desarrollador y qué pagas directamente a terceros.",
        ],
      },
      {
        heading: "Qué debe estar listo antes de publicar",
        paragraphs: [
          "Cada producto necesita nombre, precio, descripción, fotografías, disponibilidad y condiciones de entrega. También deben existir políticas de compra, cambios, garantías, privacidad y tratamiento de datos acordes con la operación real.",
        ],
      },
      {
        heading: "Cómo elegir entre catálogo, carrito y tienda completa",
        paragraphs: [
          "Si los precios cambian por pedido, un catálogo con cotización puede ser suficiente. Si los productos son estándar y puedes definir pagos y entregas, el carrito reduce trabajo manual. La mejor opción es la que coincide con el proceso actual del negocio, no la que acumula más funciones.",
        ],
      },
    ],
    faq: [
      {
        question: "¿La pasarela de pagos cobra comisión?",
        answer:
          "Normalmente sí. La comisión pertenece al proveedor de pagos y debe distinguirse del costo de desarrollo.",
      },
      {
        question: "¿Puedo comenzar con catálogo y agregar pagos después?",
        answer:
          "Sí, siempre que la arquitectura se prepare para ampliar productos, carrito y proceso de compra.",
      },
      {
        question: "¿Quién carga los productos?",
        answer:
          "Debe definirse en el alcance: puede incluir una carga inicial y capacitación para continuar desde el panel.",
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

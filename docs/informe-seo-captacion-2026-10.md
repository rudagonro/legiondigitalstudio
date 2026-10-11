# Posicionamiento y captación — diagnóstico y cambios (octubre 2026)

Fuente principal: exportación de Search Console del 13 de agosto al 8 de
octubre de 2026 (búsqueda web, “últimos 3 meses”), más revisión del sitio
publicado y del código el 11 de octubre de 2026.

## 1. Diagnóstico

### Datos de Search Console (verificados)

| Dato | Valor | Nota |
| --- | --- | --- |
| Impresiones | 55 | Suma diaria de la pestaña Gráfico |
| Clics | 0 | |
| Posición media ponderada | 55,13 | Ponderada por impresiones diarias |
| Impresiones en Colombia | 11 (20 %) | Perú 18, España 16, EE. UU. 4, otros 6 |
| 2–8 de octubre | 44 impresiones, posición 67,8 | Los artículos nuevos empezaron a mostrarse |
| Antes del 2 de octubre | 11 impresiones, posición 4,55 | Todas de la portada, por búsquedas de marca |
| Dispositivo | Computador 47, celular 8 | |

Las cifras preliminares son correctas. Precisiones:

- La suma de consultas da 42, no 55: Search Console omite consultas poco
  frecuentes o anónimas.
- La suma de páginas da 57: Search Console agrega por página de otra forma.
  No son visitas adicionales.
- Las 11 impresiones en posición 4,55 de la portada coinciden con búsquedas de
  marca (“legion digital”, “legion studios”). No hay señales todavía de
  visibilidad para búsquedas comerciales como “diseño de páginas web”.
- Las impresiones de octubre son informativas (“seo para landing page”, “cómo
  hacer que mi página aparezca en Google”, “dar de alta en buscadores”), en
  posiciones de 30 a 98 y mayormente fuera de Colombia. Su valor comercial
  directo es bajo.
- “Cuánto cuesta una página web” no aparece. El artículo de precios tuvo 2
  impresiones en posición 53.
- `cotizador.php` (2 impresiones, posición 2) es una URL antigua que Google
  aún conserva; hoy redirige con 301 a `/contacto/`.

### Defectos comprobados en producción

1. **La segunda página con más impresiones devolvía 404.**
   `/blog/landing-page-o-sitio-web/` (19 impresiones) cambió de dirección el
   2 de octubre a `/blog/que-tipo-de-pagina-web-necesita-mi-negocio/`. La
   redirección se programó en el `loader` de la ruta, pero GitHub Pages sirve
   archivos estáticos y nunca la ejecuta. **Corregido.**
2. **No existía ninguna medición.** No había GA4, Tag Manager ni eventos: era
   imposible saber cuántas personas escribían por WhatsApp o enviaban el
   formulario. **Corregido en código; falta el ID de GA4.**
3. **La página comercial de diseño web era delgada.** `/servicios/paginas-web/`
   solo tenía seis viñetas y los planes: sin proceso, condiciones, portafolio
   ni preguntas. **Corregido.**
4. **El formulario no calificaba.** No pedía teléfono (aunque la política dice
   que se recoge), ni presupuesto o plazo, y no ofrecía “software”, que sí es
   un servicio. **Corregido.**
5. **Datos estructurados con URL relativas** en las migas de pan de servicios
   y casos. **Corregido.**
6. La frase “carga en menos de dos segundos” era una promesa sin medición que
   la respalde. **Suavizada.**

### Puntos revisados sin problemas

- `robots.txt` permite el rastreo y declara el sitemap.
- Las 27 URL del sitemap responden 200, con canonical propia y un solo H1.
- `http://` y `www.` redirigen con 301 a `https://legiondigitalstudio.com/`.
- El contenido llega prerenderizado en el HTML: no depende de JavaScript para
  que los buscadores lo lean.
- En 375 px de ancho no hay desbordes horizontales.
- Peso razonable: ≈112 KB de JavaScript comprimido e imagen principal de
  ≈100 KB.

### Menores, no corregidos

- Algunos títulos superan 60 caracteres (los casos y artículos largos); Google
  los recorta, no los penaliza.
- La raíz del repositorio conserva una versión antigua del sitio (`index.html`,
  `blog/`, `assets/`, `privacy.html`) que el despliegue no publica. Conviene
  limpiarla en un cambio aparte para evitar confusiones.

### Requiere Search Console u otras herramientas

- Estado de indexación de cada URL e inspección de URL.
- Datos de campo de Core Web Vitals (el tráfico actual es insuficiente).
- Enlaces externos: ningún sitio de cliente enlaza hoy a Legión.
- Reglas de redirección de Cloudflare (la de `cotizador.php` → `/contacto/` no puede venir de GitHub Pages, así que probablemente ya existe una allí).

## 2. Estrategia elegida

**Prioridad: convertir mejor lo poco que llega y medirlo, antes de producir
más contenido o pagar tráfico.** Con 0 clics y 11 impresiones en Colombia, el
mayor riesgo no es la falta de artículos: es que no se puede saber si el sitio
genera contactos.

| # | Acción | Impacto | Esfuerzo | Depende de |
| --- | --- | --- | --- | --- |
| 1 | Reparar la URL con 404 | Alto (recupera la página con más señales) | Bajo | — |
| 2 | Medición de WhatsApp, formulario y campañas | Alto | Bajo | ID de GA4 para verlo en informes |
| 3 | Convertir `/servicios/paginas-web/` en la página de venta | Alto | Medio | — |
| 4 | Formulario con plan, presupuesto, plazo y origen | Medio-alto | Bajo | — |
| 5 | Artículos con impresiones: respuesta más completa y enlaces a servicio, planes y casos | Medio | Medio | — |
| 6 | Prueba de Google Ads | Por validar | Medio | 2 y 3 activos, presupuesto |

**Página comercial: mejorar la existente en lugar de crear una nueva.**
`/servicios/paginas-web/` ya está indexada, en el sitemap y enlazada desde el
menú y el pie. Crear otra URL para lo mismo competiría con ella. `/precios/`
sigue siendo el detalle de planes y el artículo de precios atiende la búsqueda
informativa; los tres se enlazan entre sí.

**Comparación con la referencia comercial.** La página revisada muestra
planes, comparación, portafolio, testimonios, proceso, preguntas y WhatsApp.
Legión ya publicaba precios; ahora la página de servicio suma proceso,
condiciones, casos verificables y preguntas. Lo que falta es lo que no se
puede inventar: testimonios autorizados.

**No se crearon artículos ni páginas por ciudad.** Las búsquedas que llegan
son informativas y desde otros países; se reforzaron los artículos existentes
y se enlazaron con la oferta.

## 3. Cambios implementados

| Archivo | Cambio |
| --- | --- |
| `public/blog/landing-page-o-sitio-web/index.html` | Redirección inmediata (meta refresh + canonical) a la nueva guía. Google la trata como redirección permanente. |
| `src/lib/analytics.ts` | Eventos `whatsapp_click`, `email_click`, `form_start`, `generate_lead`, `form_submit_error`; carga GA4 solo si hay ID; guarda UTM/gclid de la visita. |
| `src/routes/__root.tsx` | Activa la medición y carga GA4 de forma condicional. |
| `.github/workflows/deploy-pages.yml` | Lee la variable de repositorio `VITE_GA_MEASUREMENT_ID`. Sin variable no cambia nada. |
| `src/lib/site-data.ts` | Mensajes de WhatsApp con el plan o la guía de origen; contenido de la página de diseño web tomado de planes, términos y casos. |
| `src/routes/servicios.$slug.tsx` | Secciones de proceso, condiciones, casos, preguntas y guías; esquema `Service` con ofertas en COP y `FAQPage`; migas de pan absolutas. |
| `src/components/site/Bits.tsx` | Cada plan cotiza por WhatsApp con su nombre y ofrece el formulario con el plan preseleccionado. |
| `src/routes/contacto.tsx` | Campos opcionales de teléfono, presupuesto y plazo; tipo “Software a la medida”; plan, página de origen y campaña en el correo; eventos. |
| `src/lib/blog-data.ts`, `src/routes/blog.$slug.tsx` | Artículo de precios con tiempos, factores de precio, costos posteriores y condiciones; guía de landing vs. sitio con comparación y SEO de landing; guía de Google con alta en Search Console y Bing; bloque “Siguientes pasos”; fecha de actualización. |
| `src/routes/privacidad.tsx` | Aviso de Google Analytics que aparece solo si GA4 está activo. |
| `docs/medicion-y-seguimiento.md` | Eventos, activación de GA4 y hoja del embudo comercial. |

Todo el contenido comercial usa datos que ya estaban publicados: rangos y
tiempos de los planes, pago 50/50, revisiones según propuesta, garantía de 30
días sobre errores técnicos y mantenimiento aparte (términos y condiciones).

**Casos.** La página comercial muestra OMG Serviteca, Xiomy Perfumería y
Abogada Mejía Rivera con su descripción existente y enlace al sitio. Se
comprobó que los tres están en línea y que se ven públicamente: los servicios,
el turno por WhatsApp, el blog y el asistente de OMG; los filtros dama,
caballero y unisex y la consulta por WhatsApp de Xiomy; las áreas de práctica,
el blog y el acceso de administración de la abogada. Las videoconsultas con
Google Meet y el aviso de Habeas Data de ese caso no aparecen en su portada
pública: confírmalos.

## 4. Comprobaciones realizadas

| Prueba | Resultado |
| --- | --- |
| `tsc --noEmit` | Sin errores |
| `eslint src` | 0 errores (6 advertencias previas en `components/ui`) |
| `npm run build` con prerender | Correcto; 27 páginas generadas |
| URL antigua sobre la salida estática | Redirige a la nueva guía; canonical correcta |
| Rastreo de enlaces internos del build | 27 páginas, 0 enlaces rotos |
| HTML estático | Contiene las secciones nuevas y los esquemas `Service`, `FAQPage`, `BreadcrumbList` |
| Clics en WhatsApp y correo | Eventos con ubicación y plan correctos |
| Formulario con `?plan=landing` | Plan y tipo preseleccionados; `form_start` y `generate_lead` |
| Envío con error simulado | Mensaje de error y `form_submit_error` |
| Visita con UTM y gclid → plan → formulario | El campo Campaña llega con los parámetros |
| Ancho de 375 px | Sin desbordes en las 8 páginas modificadas |
| Consola | Sin errores ni avisos de hidratación |

Los envíos se probaron sustituyendo la respuesta de Web3Forms en el navegador:
no se envió ninguna solicitud real. Antes de publicar, conviene hacer un envío
real desde producción y confirmar que llega al correo.

## 5. Pendientes que requieren acceso o información

| Pendiente | Quién | Para qué |
| --- | --- | --- |
| ~~Crear GA4 y la variable~~ Hecho: propiedad “Legión Digital Studio - Sitio web” (`G-XH96PHZHEM`) y variable en GitHub | — | Formularios de la medición mejorada desactivados para no duplicar eventos |
| Marcar `generate_lead` como evento clave | Claude o tú, después de publicar | GA4 solo lo permite cuando el evento ya llegó |
| Autorizar la publicación (merge a `main`) | Tú | El push a `main` despliega |
| Opcional: regla 301 en Cloudflare `/blog/landing-page-o-sitio-web/*` → nueva guía | Tú | Redirección de servidor, además del archivo |
| Inspeccionar y solicitar indexación de las páginas cambiadas | Tú (Search Console) | Acelerar el nuevo rastreo |
| Google Business y reseñas | Tú y clientes | Ver `docs/google-business-y-referencias.md`; requiere atención presencial |
| Enlace “Sitio desarrollado por Legión” en los sitios de clientes | Clientes | Referencias externas verificables |
| ~~Google Meet y Habeas Data de la abogada~~ Confirmado: Meet es interno y el formulario exige aceptar la política de datos | — | — |
| ~~Alojamiento~~ Dominio incluido el primer año en todos los planes; aplicado en planes, preguntas y términos | — | Falta definir qué extensiones (.com, .co, .com.co) cubre |
| ¿Existe un plan de mantenimiento con precio? | Tú | Completar la sección de costos posteriores |
| Presupuesto máximo para una prueba de Ads | Tú | Ver sección 6 |

## 6. Publicidad: prueba de Google Ads

**¿Está listo el sitio?** Después de publicar estos cambios y activar GA4, sí:
`/servicios/paginas-web/` tiene precios, proceso, condiciones, casos y dos vías
de contacto, y el formulario conserva la campaña. **Hoy no lo está**, porque no
hay medición en producción.

Propuesta (no se activó nada ni se generó gasto):

- **Objetivo:** comprobar si las búsquedas comerciales en Colombia generan
  contactos calificados a un costo que el margen de un proyecto soporte.
- **Tipo:** solo Red de Búsqueda; sin Display ni socios de búsqueda.
- **Ubicación:** Colombia, personas que están en el país (no “interesadas”).
  Idioma español.
- **Página de destino:** `/servicios/paginas-web/` con UTM
  (`utm_source=google&utm_medium=cpc&utm_campaign=…`). El gclid se guarda solo.
- **Grupos y búsquedas (concordancia de frase o exacta):**
  - Diseño web: “diseño de páginas web”, “diseño de páginas web Colombia”,
    “desarrollo de páginas web”, “páginas web para empresas”.
  - Precio y cotización: “cuánto cuesta una página web”, “precio página web”,
    “cotizar página web”.
  - Landing: “landing page precio”, “hacer landing page”.
- **Exclusiones iniciales:** gratis, gratuita, curso, tutorial, cómo hacer,
  plantilla, plantillas, Wix, WordPress, empleo, trabajo, vacante, freelance,
  PDF, ejemplos, qué es, significado, SENA, universidad, app.
- **Conversión:** `generate_lead` como conversión principal. `whatsapp_click`
  solo como observación: es intención, no un contacto confirmado.
- **Presupuesto y puja:** sin datos verificados de costo por clic. Antes de
  fijar el presupuesto, consulta el Planificador de palabras clave de Google
  Ads para Colombia. Define un tope total y una duración de cuatro semanas.
- **Evaluación semanal:** revisar el informe de términos de búsqueda y ampliar
  exclusiones. Al cierre, comparar el costo por contacto **calificado** y por
  cotización con el valor de un plan Landing ($500.000 – $700.000). Si el
  costo por contacto calificado se acerca al margen de un proyecto, pausar o
  ajustar.

## 7. Plan de seguimiento a 30 días

| Semana | Acción | Señal a revisar |
| --- | --- | --- |
| 0 (al aprobar) | Publicar; activar GA4 y vincularlo a Search Console; reenviar el sitemap; inspeccionar `/servicios/paginas-web/`, el artículo de precios y la guía de landing; comprobar la URL antigua; hacer un envío real del formulario | Eventos visibles en el informe en tiempo real |
| 1 | Iniciar la hoja del embudo; pedir a tres clientes testimonio y enlace; revisar Google Business | Primeros contactos registrados con origen |
| 2 | Search Console filtrado por Colombia: páginas y consultas con impresiones y 0 clics; ajustar títulos y descripciones solo donde haya datos | Impresiones comerciales en Colombia |
| 3 | Decidir la prueba de Ads con presupuesto definido | Medición estable una semana |
| 4 | Evaluación | Ver tabla |

Indicadores (línea base del periodo analizado):

| Indicador | Línea base | Fuente |
| --- | --- | --- |
| Impresiones en Colombia | 11 | Search Console, filtro país |
| Clics desde Colombia | 0 | Search Console |
| Impresiones de páginas comerciales (`/servicios/paginas-web/`, `/precios/`) | 0 registradas | Search Console, filtro página |
| Clics a WhatsApp | Sin medición | GA4 `whatsapp_click` |
| Formularios enviados | Sin medición | GA4 `generate_lead` |
| Contactos calificados | Sin registro | Hoja del embudo |
| Cotizaciones enviadas | Sin registro | Hoja del embudo |
| Ventas | Sin registro | Hoja del embudo |

Treinta días es poco para el posicionamiento orgánico de un dominio nuevo: las
cifras de búsqueda pueden moverse poco o con ruido. No se promete ningún
puesto en Google. La medición del embudo sí debería dar información útil desde
la primera semana.

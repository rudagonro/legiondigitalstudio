# Medición y seguimiento comercial

Este documento separa lo que mide el sitio (acciones de visitantes) de lo que
se registra a mano (calificación, cotización y venta). Un clic a WhatsApp o un
formulario enviado **no** es un contrato.

## 1. Eventos del sitio (`src/lib/analytics.ts`)

| Evento | Cuándo se dispara | Parámetros |
| --- | --- | --- |
| `whatsapp_click` | Clic en cualquier enlace a WhatsApp | `cta_location`, `plan` (si aplica), `page_path` |
| `email_click` | Clic en un enlace `mailto:` | `cta_location`, `page_path` |
| `form_start` | Primera interacción con el formulario de cotización | `form_name`, `plan` |
| `generate_lead` | El servicio de formularios confirma el envío | `form_name`, `project_type`, `budget_range`, `plan` |
| `form_submit_error` | El envío falla | `form_name` |

Valores de `cta_location`: `header`, `hero`, `home_hero`, `plan_card`,
`cta_band`, `boton_flotante`, `footer`, `contacto`, `blog_articulo`.

Los eventos se envían a GA4 cuando existe `VITE_GA_MEASUREMENT_ID`. Si no
existe, se guardan en `window.dataLayer` (útil para Google Tag Manager) y no se
carga ningún script externo.

### Activar GA4

1. Crear una propiedad GA4 y un flujo web para `legiondigitalstudio.com`.
2. En GitHub: *Settings → Secrets and variables → Actions → Variables*, crear
   `VITE_GA_MEASUREMENT_ID` con el ID `G-XXXXXXX`.
3. Volver a desplegar. La política de datos muestra el aviso de medición solo
   cuando el ID está configurado.
4. En GA4, marcar `generate_lead` como evento clave. Dejar `whatsapp_click` como
   evento normal: indica intención, no un contacto confirmado.
5. Vincular GA4 con Search Console para cruzar búsquedas y páginas de entrada.

## 2. Embudo comercial (registro manual)

Cada conversación de WhatsApp llega con un mensaje que indica el origen
(“quiero cotizar el plan Landing Page”, “vengo de la guía …”). El formulario
incluye plan consultado, presupuesto, plazo y página de origen.

Registrar cada contacto en una hoja con estas columnas:

| Columna | Valores |
| --- | --- |
| Fecha | AAAA-MM-DD |
| Canal | WhatsApp / Formulario / Correo / Otro |
| Origen | Mensaje precargado o “Página de origen” del formulario |
| Tipo de proyecto | Landing / Autoadministrable / Tienda / Software / SEO / Otro |
| Etapa | Contacto → Calificado → Cotizado → Ganado / Perdido |
| Motivo de descarte | Presupuesto / Fuera de alcance / Sin respuesta / Otro |
| Valor cotizado | COP |
| Valor contratado | COP |

Definiciones:

- **Contacto**: alguien escribió o envió el formulario.
- **Calificado**: necesita un servicio que ofrecemos, en Colombia, con
  presupuesto compatible con los rangos publicados y un plazo definido.
- **Cotizado**: recibió propuesta escrita con alcance, valor y tiempos.
- **Ganado**: pagó el anticipo.

Estas etapas no se envían a GA4 automáticamente.

## 3. Atribución de campañas

Si la visita llega con `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`
o `gclid`, el sitio los guarda durante la sesión y el formulario los envía en el
campo **Campaña**. Copiar ese valor a la hoja permite saber qué solicitudes
vinieron de anuncios. Con el `gclid` de un contacto ganado se puede importar a
Google Ads como conversión sin conexión.

WhatsApp no recibe esos parámetros: para conversaciones que lleguen durante una
campaña, preguntar al inicio cómo encontraron el estudio y anotarlo en “Origen”.

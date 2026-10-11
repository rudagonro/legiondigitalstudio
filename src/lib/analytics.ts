// Medición de contactos. Los eventos se envían a GA4 (gtag) cuando existe
// VITE_GA_MEASUREMENT_ID y, en cualquier caso, quedan en window.dataLayer para
// que Google Tag Manager pueda leerlos si se instala más adelante.
//
// Un evento de este archivo registra una acción en el sitio (un clic, un envío),
// no una venta: la calificación, la cotización y el contrato se registran fuera
// del sitio. Ver docs/medicion-y-seguimiento.md.

type EventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const gaMeasurementId: string | undefined =
  (import.meta.env["VITE_GA_MEASUREMENT_ID"] as string | undefined)?.trim() || undefined;

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const payload: EventParams = { page_path: window.location.pathname, ...params };
  for (const key of Object.keys(payload)) {
    if (payload[key] === undefined || payload[key] === "") delete payload[key];
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...payload });
}

// Guarda el origen de campaña de la primera página de la visita (UTM o gclid)
// para adjuntarlo al formulario y poder atribuir solicitudes de anuncios.
const campaignKey = "lds_campaign";
const campaignParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid"];

export function captureCampaign() {
  if (typeof window === "undefined") return;
  try {
    const query = new URLSearchParams(window.location.search);
    const found = campaignParams
      .filter((key) => query.get(key))
      .map((key) => `${key}=${query.get(key)}`);
    if (found.length) window.sessionStorage.setItem(campaignKey, found.join("&"));
  } catch {
    // Sin almacenamiento disponible: la atribución simplemente queda vacía.
  }
}

export function getCampaign() {
  try {
    return window.sessionStorage.getItem(campaignKey) ?? "";
  } catch {
    return "";
  }
}

// Escucha global: cualquier enlace a WhatsApp o correo se mide sin tener que
// repetir código en cada botón. `data-cta` indica la ubicación del botón y
// `data-plan` el plan, cuando aplica.
export function installContactClickTracking() {
  if (typeof document === "undefined") return () => {};

  const onClick = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!link) return;

    const href = link.getAttribute("href") ?? "";
    const location = link.dataset["cta"] ?? "sin_ubicacion";
    const plan = link.dataset["plan"];

    if (/wa\.me|api\.whatsapp\.com/.test(href)) {
      trackEvent("whatsapp_click", { cta_location: location, plan });
    } else if (href.startsWith("mailto:")) {
      trackEvent("email_click", { cta_location: location });
    }
  };

  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}

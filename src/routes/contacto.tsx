import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageHero, Section } from "@/components/site/Bits";
import { getCampaign, trackEvent } from "@/lib/analytics";
import { budgetRanges, plans, projectTypes, site, timelines, whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>): { plan?: string } =>
    typeof search["plan"] === "string" ? { plan: search["plan"] } : {},
  head: () => ({
    meta: [
      { title: "Contacto y cotización | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Cotiza tu página web o software desde cualquier ciudad de Colombia: escríbenos por WhatsApp al +57 323 568 8278 o envía el formulario con el detalle de tu proyecto.",
      },
      { property: "og:title", content: "Contacto y cotización | Legión Digital Studio" },
      {
        property: "og:description",
        content:
          "Cotiza tu página web: WhatsApp +57 323 568 8278 o formulario con el detalle de tu proyecto.",
      },
      { property: "og:url", content: `${site.url}/contacto/` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contacto/` }],
  }),
  component: Contact,
});

const WEB3FORMS_ACCESS_KEY = "5c7ed16a-d71b-4386-9b5d-6fdbffbe16a8";
type SubmitStatus = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary";

function Contact() {
  const { plan: planSlug } = Route.useSearch();
  // La página se prerenderiza sin plan; se aplica tras montar para no
  // desajustar la hidratación cuando la URL trae ?plan=.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const selectedPlan = mounted ? plans.find((p) => p.slug === planSlug) : undefined;
  const initialType = selectedPlan?.formType ?? projectTypes[0]!;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(initialType);
  const [budget, setBudget] = useState(budgetRanges[0]!);
  const [timeline, setTimeline] = useState(timelines[0]!);
  const [detail, setDetail] = useState("");
  const formStarted = useRef(false);
  useEffect(() => setType(initialType), [initialType]);
  const [consent, setConsent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const ready = name.trim() !== "" && email.trim() !== "" && detail.trim() !== "" && consent;

  function markStarted() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("form_start", { form_name: "cotizacion", plan: selectedPlan?.slug });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || submitStatus === "sending") return;

    setSubmitStatus("sending");
    setSubmitMessage("Enviando tu solicitud…");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nueva cotización: ${type}`,
          from_name: "Formulario de Legión Digital Studio",
          replyto: email.trim(),
          Nombre: name.trim(),
          "Correo electrónico": email.trim(),
          "WhatsApp o teléfono": phone.trim() || "No indicado",
          "Tipo de proyecto": type,
          "Presupuesto estimado": budget,
          "Fecha esperada": timeline,
          "Plan consultado": selectedPlan?.name ?? "Ninguno",
          "Página de origen": document.referrer || "Directo",
          Campaña: getCampaign() || "Ninguna",
          Mensaje: detail.trim(),
          botcheck: "",
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "No fue posible enviar la solicitud.");
      }

      // Un envío es una solicitud recibida, no una venta: se califica después.
      trackEvent("generate_lead", {
        form_name: "cotizacion",
        project_type: type,
        budget_range: budget,
        plan: selectedPlan?.slug,
      });
      setSubmitStatus("success");
      setSubmitMessage("¡Mensaje enviado! Te responderemos muy pronto.");
      setName("");
      setEmail("");
      setPhone("");
      setType(initialType);
      setBudget(budgetRanges[0]!);
      setTimeline(timelines[0]!);
      setDetail("");
      setConsent(false);
    } catch {
      trackEvent("form_submit_error", { form_name: "cotizacion" });
      setSubmitStatus("error");
      setSubmitMessage(
        "No pudimos enviar el mensaje. Intenta nuevamente o escríbenos por WhatsApp.",
      );
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos qué necesitas."
        intro="Respondemos con una propuesta clara: alcance, precio y tiempos. Sin compromiso y sin llamadas de venta insistentes."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="plate p-7">
              <p className="eyebrow">Vía más rápida</p>
              <h2 className="mt-3 font-display text-xl">WhatsApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">{site.whatsappNumber}</p>
              <a
                href={
                  selectedPlan ? whatsappLink(`el plan ${selectedPlan.name}`) : site.whatsappUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                data-cta="contacto"
                data-plan={selectedPlan?.slug}
                className="btn-base btn-primary mt-5 w-full"
              >
                <MessageCircle className="h-4 w-4" /> Escribir ahora
              </a>
            </div>

            <div className="plate space-y-4 p-7 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {site.city}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${site.email}`}
                  data-cta="contacto"
                  className="hover:text-foreground"
                >
                  {site.email}
                </a>
              </p>
              <p className="rule-top pt-4">
                Atendemos proyectos en toda Colombia. El trabajo se coordina por WhatsApp y
                videollamada.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            onFocusCapture={markStarted}
            className="plate space-y-5 p-7 md:p-9"
          >
            {selectedPlan ? (
              <p className="rounded-md border border-primary/30 bg-primary/5 px-4 py-3 text-sm">
                Plan consultado: <strong>{selectedPlan.name}</strong> ({selectedPlan.price})
              </p>
            ) : null}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Correo
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                WhatsApp o teléfono <span className="text-muted-foreground">(opcional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="type" className="mb-2 block text-sm font-medium">
                Tipo de proyecto
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                  Presupuesto estimado
                </label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={fieldClass}
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="mb-2 block text-sm font-medium">
                  ¿Para cuándo lo necesitas?
                </label>
                <select
                  id="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className={fieldClass}
                >
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="detail" className="mb-2 block text-sm font-medium">
                Cuéntanos de tu proyecto
              </label>
              <textarea
                id="detail"
                rows={5}
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                required
                className="w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-primary"
              />
              <span>
                Autorizo a Legión Digital Studio a usar mis datos para responder esta solicitud, de
                acuerdo con la{" "}
                <a href="/privacidad/" className="text-primary underline">
                  política de tratamiento de datos
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={!ready || submitStatus === "sending"}
              className="btn-base btn-primary w-full disabled:opacity-50"
            >
              {submitStatus === "sending" ? "Enviando…" : "Enviar solicitud"}
            </button>
            {submitMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`rounded-md border px-4 py-3 text-sm ${
                  submitStatus === "success"
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : submitStatus === "error"
                      ? "border-red-300 bg-red-50 text-red-800"
                      : "border-border bg-muted text-muted-foreground"
                }`}
              >
                {submitMessage}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              El mensaje se envía directamente a {site.email} sin abrir otra aplicación.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}

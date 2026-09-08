import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Bits";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
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

const projectTypes = [
  "Landing / una página",
  "Sitio completo autoadministrable",
  "Tienda en línea",
  "SEO técnico",
  "Otro",
];

const WEB3FORMS_ACCESS_KEY = "5c7ed16a-d71b-4386-9b5d-6fdbffbe16a8";
type SubmitStatus = "idle" | "sending" | "success" | "error";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(projectTypes[0]);
  const [detail, setDetail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const ready = name.trim() !== "" && email.trim() !== "" && detail.trim() !== "" && consent;

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
          "Tipo de proyecto": type,
          Mensaje: detail.trim(),
          botcheck: "",
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "No fue posible enviar la solicitud.");
      }

      setSubmitStatus("success");
      setSubmitMessage("¡Mensaje enviado! Te responderemos muy pronto.");
      setName("");
      setEmail("");
      setType(projectTypes[0]);
      setDetail("");
      setConsent(false);
    } catch {
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
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </p>
              <p className="rule-top pt-4">
                Atendemos proyectos en toda Colombia. El trabajo se coordina por WhatsApp y
                videollamada.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="plate space-y-5 p-7 md:p-9">
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
                <a href="/privacidad" className="text-primary underline">
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

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

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(projectTypes[0]);
  const [detail, setDetail] = useState("");
  const [consent, setConsent] = useState(false);

  const ready = name.trim() !== "" && detail.trim() !== "" && consent;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready) return;
    const text = [
      `Hola Legión, soy ${name}.`,
      `Tipo de proyecto: ${type}.`,
      email.trim() ? `Mi correo: ${email}.` : "",
      `Detalle: ${detail}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/573235688278?text=${encodeURIComponent(text)}`, "_blank");
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
                Correo <span className="text-muted-foreground">(opcional)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              disabled={!ready}
              className="btn-base btn-primary w-full disabled:opacity-50"
            >
              Enviar por WhatsApp
            </button>
            <button
              type="button"
              disabled={!ready}
              onClick={() => {
                if (!ready) return;
                const body = [
                  `Hola Legión, soy ${name}.`,
                  `Tipo de proyecto: ${type}.`,
                  email.trim() ? `Mi correo: ${email}.` : "",
                  `Detalle: ${detail}`,
                ]
                  .filter(Boolean)
                  .join("\n");
                window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
                  `Cotización: ${type}`,
                )}&body=${encodeURIComponent(body)}`;
              }}
              className="btn-base btn-outline w-full disabled:opacity-50"
            >
              Enviar por correo
            </button>
            <p className="text-xs text-muted-foreground">
              Con WhatsApp se abre el chat con tu mensaje listo; con correo se abre tu app de email
              hacia {site.email}.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}

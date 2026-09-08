import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, PlansGrid, Section, SectionHeading } from "@/components/site/Bits";
import { faqs, site } from "@/lib/site-data";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: "Precios de páginas web en Colombia | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Precios claros: landing page $500.000 a $700.000, sitio autoadministrable $800.000 a $1.500.000 y tienda en línea $2.000.000 a $3.000.000.",
      },
      {
        property: "og:title",
        content: "Precios de páginas web en Colombia | Legión Digital Studio",
      },
      {
        property: "og:description",
        content:
          "Landing desde $500.000, sitio autoadministrable desde $800.000 y tienda en línea desde $2.000.000. Sin letra menuda.",
      },

      { property: "og:url", content: `${site.url}/precios` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/precios` }],
  }),
  component: Pricing,
});

const included = [
  "Diseño a la medida, sin plantillas",
  "Adaptado a celular, tableta y computador",
  "SEO técnico y velocidad optimizada",
  "Botón y chat de WhatsApp",
  "Formulario de contacto funcional",
  "Publicación del sitio y configuración del correo",
  "Aviso de tratamiento de datos (Habeas Data)",
];

const notIncluded = [
  "Renovación anual del dominio y el correo (se paga a su proveedor)",
  "Pauta publicitaria en Google o redes",
  "Producción fotográfica o de video",
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Precios visibles, sin tener que preguntar."
        intro="Tres niveles según lo que tu negocio necesita hoy. Los rangos dependen del número de páginas y del tamaño del catálogo; la propuesta escrita fija el valor exacto antes de comenzar."
      />

      <Section>
        <PlansGrid />
      </Section>

      <Section className="rule-top grid-backdrop">
        <SectionHeading eyebrow="Claridad total" title="Qué está incluido y qué no." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="plate p-7">
            <h3 className="font-display text-lg text-primary">Siempre incluido</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {included.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary">✓</span> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="plate p-7">
            <h3 className="font-display text-lg">Se cotiza aparte</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {notIncluded.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-muted-foreground">—</span> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="rule-top">
        <SectionHeading eyebrow="Dudas comunes" title="Antes de decidir." />
        <div className="mt-10 max-w-3xl divide-y divide-border">
          {faqs.map((f) => (
            <details key={f.q} className="py-5">
              <summary className="cursor-pointer list-none font-display text-base font-bold">
                <span className="text-primary">+</span> {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand
        title="¿En qué plan encaja tu proyecto?"
        intro="Cuéntanos qué necesitas y te decimos el valor exacto, sin compromiso."
      />
    </>
  );
}

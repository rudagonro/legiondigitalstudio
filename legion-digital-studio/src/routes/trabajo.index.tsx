import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";
import { cases, site } from "@/lib/site-data";

export const Route = createFileRoute("/trabajo/")({
  head: () => ({
    meta: [
      { title: "Trabajo real: sitios ya en línea | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Casos reales de Legión Digital Studio: e-commerce de coleccionismo, sitio legal con Habeas Data y vitrina de perfumería.",
      },
      { property: "og:title", content: "Trabajo real: sitios ya en línea | Legión Digital Studio" },
      {
        property: "og:description",
        content: "Casos reales con el reto, el trabajo y el resultado de cada proyecto.",
      },
      { property: "og:url", content: `${site.url}/trabajo/` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/trabajo/` }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <PageHero
        eyebrow="Trabajo real"
        title="Sitios ya en línea, no maquetas."
        intro="Estos proyectos están en línea y puedes visitarlos: panel de administración, pagos en línea, acceso para clientes, videoconsultas y WhatsApp integrado según cada negocio."
      />
      <Section>
        <div className="grid gap-6">
          {cases.map((c) => (
            <article key={c.slug} className="plate plate-hover p-7 md:p-9">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary">
                  {c.status}
                </span>
                <span className="text-xs text-muted-foreground">{c.sector}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl">{c.client}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{c.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-[0.7rem] text-muted-foreground"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/trabajo/$slug/"
                  params={{ slug: c.slug }}
                  className="btn-base btn-primary"
                >
                  Ver el caso <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline"
                >
                  Visitar el sitio <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand
        title="¿Quieres el siguiente caso?"
        intro="Tu proyecto puede ser el próximo sitio en línea de la lista."
      />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";
import { services, site } from "@/lib/site-data";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios de desarrollo web y SEO | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Páginas web a la medida, tiendas en línea, software para comercios, landing pages y SEO técnico para negocios en toda Colombia.",
      },
      {
        property: "og:title",
        content: "Servicios de desarrollo web y SEO | Legión Digital Studio",
      },
      {
        property: "og:description",
        content:
          "Páginas web a la medida, tiendas en línea, landing pages y SEO técnico para negocios colombianos.",
      },
      { property: "og:url", content: `${site.url}/servicios` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/servicios` }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Lo que construimos para tu negocio."
        intro="Cuatro frentes que se complementan: el sitio, la venta en línea, la página de campaña y la base técnica para que Google te encuentre."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} className="plate plate-hover flex flex-col p-7">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary">
                {s.tagline}
              </p>
              <h2 className="mt-3 font-display text-xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {s.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/servicios/$slug"
                params={{ slug: s.slug }}
                className="btn-base btn-outline mt-7 self-start"
              >
                Ver detalle <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

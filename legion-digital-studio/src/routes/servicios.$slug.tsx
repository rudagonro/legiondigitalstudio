import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand, PageHero, PlansGrid, Section, SectionHeading } from "@/components/site/Bits";
import { services, site } from "@/lib/site-data";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Servicio no disponible" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: `${site.url}/servicios/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${site.url}/servicios/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            areaServed: "Colombia",
            provider: { "@type": "Organization", name: "Legión Digital Studio" },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow={service.tagline} title={service.title} intro={service.summary} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Qué incluye" title="El alcance, punto por punto." />
            <ul className="mt-8 space-y-4">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-3 rule-top pt-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="plate h-fit p-7">
            <p className="eyebrow">Otros servicios</p>
            <ul className="mt-5 space-y-4">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/servicios/$slug"
                    params={{ slug: o.slug }}
                    className="group flex items-start justify-between gap-3"
                  >
                    <span>
                      <span className="block font-display text-base font-bold">{o.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{o.tagline}</span>
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section className="rule-top grid-backdrop">
        <SectionHeading
          eyebrow="Precios"
          title="Cuánto cuesta este trabajo."
          intro="Estos son los tres niveles del estudio. En la propuesta escrita definimos en cuál encaja tu proyecto."
        />
        <PlansGrid />
      </Section>

      <CtaBand />
    </>
  );
}

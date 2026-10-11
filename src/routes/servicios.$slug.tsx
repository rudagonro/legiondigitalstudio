import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand, PageHero, PlansGrid, Section, SectionHeading } from "@/components/site/Bits";
import { blogPosts } from "@/lib/blog-data";
import { cases, plans, services, site } from "@/lib/site-data";

function priceBounds(price: string) {
  const values = price.match(/[\d.]+/g)?.map((v) => Number(v.replace(/\./g, ""))) ?? [];
  return { min: values[0], max: values[values.length - 1] };
}

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
    const url = `${site.url}/servicios/${params.slug}/`;
    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.heading ?? s.title,
          description: s.metaDescription,
          url,
          areaServed: { "@type": "Country", name: "Colombia" },
          provider: { "@type": "Organization", name: site.name, url: site.url },
          ...(s.slug === "paginas-web"
            ? {
                offers: plans.map((plan) => {
                  const { min, max } = priceBounds(plan.price);
                  return {
                    "@type": "Offer",
                    name: plan.name,
                    url: `${site.url}/precios/`,
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "COP",
                      minPrice: min,
                      maxPrice: max,
                    },
                  };
                }),
              }
            : {}),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/servicios/` },
            { "@type": "ListItem", position: 3, name: s.title, item: url },
          ],
        }),
      },
    ];
    if (s.faq?.length) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      });
    }
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts,
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);
  const featuredCases = (service.caseSlugs ?? [])
    .map((slug) => cases.find((c) => c.slug === slug))
    .filter((c) => c !== undefined);
  const guides = (service.guideSlugs ?? [])
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.heading ?? service.title}
        intro={service.summary}
        whatsappSubject={`el servicio de ${service.title}`}
      />

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
                    to="/servicios/$slug/"
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
        <Link to="/precios/" className="btn-base btn-outline mt-6">
          Ver qué incluye cada plan y qué se cobra aparte <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {service.process ? (
        <Section className="rule-top">
          <SectionHeading
            eyebrow="Cómo se contrata"
            title="De la primera conversación a tu página publicada."
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {service.process.map((step, index) => (
              <li key={step.title} className="plate p-5 sm:p-6">
                <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary">
                  Paso {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      {service.conditions ? (
        <Section className="rule-top grid-backdrop">
          <SectionHeading
            eyebrow="Condiciones"
            title="Lo que queda claro antes de empezar."
            intro="Resumen de nuestros términos. La propuesta escrita de cada proyecto fija los detalles."
          />
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
            {service.conditions.map((item) => (
              <div key={item.title} className="plate p-5 sm:p-6">
                <dt className="font-display text-base font-bold">{item.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
          <Link to="/terminos/" className="btn-base btn-outline mt-6">
            Leer los términos completos <ArrowRight className="h-4 w-4" />
          </Link>
        </Section>
      ) : null}

      {featuredCases.length ? (
        <Section className="rule-top">
          <SectionHeading
            eyebrow="Trabajo real"
            title="Páginas que ya están en línea."
            intro="Puedes visitarlas desde tu celular y comprobar cómo funcionan antes de escribirnos."
          />
          <div className="mt-8 grid gap-4 sm:gap-6 md:mt-12 lg:grid-cols-3">
            {featuredCases.map((c) => (
              <article key={c.slug} className="plate flex flex-col p-5 sm:p-7">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                  {c.sector}
                </p>
                <h3 className="mt-2 font-display text-lg">{c.client}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.capabilities.slice(0, 4).map((cap) => (
                    <li
                      key={cap}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm font-bold">
                  <Link
                    to="/trabajo/$slug/"
                    params={{ slug: c.slug }}
                    className="inline-flex items-center gap-2 text-primary"
                  >
                    Ver el caso <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Visitar el sitio
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {service.faq ? (
        <Section className="rule-top">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de pedir tu cotización." />
          <div className="mt-10 max-w-3xl divide-y divide-border">
            {service.faq.map((item) => (
              <details key={item.question} className="py-5">
                <summary className="cursor-pointer list-none font-display text-base font-bold">
                  <span className="text-primary">+</span> {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      ) : null}

      {guides.length ? (
        <Section className="rule-top grid-backdrop">
          <p className="eyebrow">Guías para decidir</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {guides.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug/"
                params={{ slug: post.slug }}
                className="plate plate-hover p-5"
              >
                <span className="text-xs text-primary">{post.category}</span>
                <h3 className="mt-2 font-display text-base">{post.title}</h3>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}

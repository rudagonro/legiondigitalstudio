import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { cases, site } from "@/lib/site-data";

export const Route = createFileRoute("/trabajo/$slug")({
  loader: ({ params }) => {
    const study = cases.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Caso no disponible" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.study;
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${site.url}/trabajo/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${site.url}/trabajo/${params.slug}` }],
    };
  },
  component: CaseDetail,
});

function CaseDetail() {
  const { study } = Route.useLoaderData();
  const others = cases.filter((c) => c.slug !== study.slug);

  return (
    <>
      <PageHero eyebrow={study.sector} title={study.client} intro={study.summary} />

      <Section>
        <p className="eyebrow">Lo que incluye</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {study.capabilities.map((cap) => (
            <li
              key={cap}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
            >
              {cap}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div>
              <SectionHeading eyebrow="El reto" title="Qué había que resolver." />
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                {study.challenge}
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="El trabajo" title="Qué construimos." />
              <ul className="mt-6 space-y-4">
                {study.work.map((w) => (
                  <li key={w} className="rule-top flex gap-3 pt-4 text-muted-foreground">
                    <span className="text-primary">—</span> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="El resultado" title="Cómo quedó." />
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{study.result}</p>
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary mt-7"
              >
                Visitar el sitio <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="plate h-fit p-7">
            <p className="eyebrow">Otros casos</p>
            <ul className="mt-5 space-y-4">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/trabajo/$slug"
                    params={{ slug: o.slug }}
                    className="group flex items-start justify-between gap-3"
                  >
                    <span>
                      <span className="block font-display text-base font-bold">{o.client}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{o.sector}</span>
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/trabajo" className="btn-base btn-outline mt-7 w-full">
              Ver todo el trabajo
            </Link>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

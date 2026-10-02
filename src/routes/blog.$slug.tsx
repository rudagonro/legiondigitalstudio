import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowRight, Clock3, MessageCircle } from "lucide-react";
import { CtaBand, Section } from "@/components/site/Bits";
import { blogPosts, formatBlogDate } from "@/lib/blog-data";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (params.slug === "landing-page-o-sitio-web") {
      throw redirect({
        to: "/blog/$slug/",
        params: { slug: "que-tipo-de-pagina-web-necesita-mi-negocio" },
        statusCode: 301,
      });
    }
    const post = blogPosts.find((entry) => entry.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artículo no disponible" }, { name: "robots", content: "noindex" }],
      };
    }

    const post = loaderData.post;
    const url = `${site.url}/blog/${params.slug}/`;

    return {
      meta: [
        { title: `${post.title} | Legión Digital Studio` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: site.ogImage },
        { property: "article:published_time", content: post.publishedAt },
        { property: "article:modified_time", content: post.updatedAt },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            inLanguage: "es-CO",
            mainEntityOfPage: url,
            image: site.ogImage,
            author: { "@type": "Organization", name: site.name, url: site.url },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.url}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog/` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .sort((a, b) => {
      const aScore =
        Number(a.relatedService === post.relatedService) + Number(a.category === post.category);
      const bScore =
        Number(b.relatedService === post.relatedService) + Number(b.category === post.category);
      return bScore - aScore;
    })
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="grid-backdrop border-b border-border">
          <div className="container-page py-10 sm:py-14 md:py-20">
            <div className="max-w-4xl">
              <p className="eyebrow">{post.category}</p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl">{post.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {post.excerpt}
              </p>
              <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span>Por Legión Digital Studio</span>
                <span>Publicado el {formatBlogDate(post.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" /> {post.readingMinutes} min de lectura
                </span>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary"
                >
                  <MessageCircle className="h-4 w-4" /> Aplicarlo a mi negocio
                </a>
                <Link to="/contacto/" className="btn-base btn-outline">
                  Enviar consulta
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="max-w-3xl space-y-12">
              <section className="plate border-primary/20 bg-primary/5 p-6 sm:p-8">
                <p className="eyebrow">Respuesta rápida</p>
                <p className="mt-3 text-base font-medium leading-8 text-foreground sm:text-lg">
                  {post.answer}
                </p>
              </section>

              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="rule-top flex gap-3 pt-3 text-muted-foreground">
                          <span className="font-bold text-primary">—</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section className="rule-top pt-10">
                <p className="eyebrow">Preguntas frecuentes</p>
                <div className="mt-4 divide-y divide-border">
                  {post.faq.map((item) => (
                    <details key={item.question} className="group py-5">
                      <summary className="cursor-pointer list-none font-display text-base font-bold">
                        <span className="text-primary">+</span> {item.question}
                      </summary>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="h-fit lg:sticky lg:top-32">
              <div className="plate p-6">
                <p className="eyebrow">Siguiente paso</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Revisa el servicio relacionado o cuéntanos tu proyecto para recibir una propuesta
                  clara.
                </p>
                <Link to={post.relatedService} className="btn-base btn-primary mt-5 w-full">
                  Ver servicio <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contacto/" className="btn-base btn-outline mt-3 w-full">
                  Solicitar cotización
                </Link>
              </div>
            </aside>
          </div>
        </Section>
      </article>

      <Section className="rule-top grid-backdrop">
        <p className="eyebrow">También te puede servir</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((entry) => (
            <Link
              key={entry.slug}
              to="/blog/$slug/"
              params={{ slug: entry.slug }}
              className="plate plate-hover p-5"
            >
              <span className="text-xs text-primary">{entry.category}</span>
              <h2 className="mt-2 font-display text-base">{entry.title}</h2>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

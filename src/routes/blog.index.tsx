import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";
import { blogPosts, formatBlogDate } from "@/lib/blog-data";
import { site } from "@/lib/site-data";

const blogGroups = [
  {
    eyebrow: "Costos y contratación",
    title: "Antes de pedir una cotización",
    intro:
      "Respuestas claras sobre inversión, renovaciones, tiempos y lo que debe incluir una propuesta.",
    slugs: [
      "cuanto-cuesta-pagina-web-colombia-2026",
      "cuanto-cuestan-dominio-hosting-mantenimiento-colombia",
      "cuanto-tiempo-demora-hacer-pagina-web-que-debo-entregar",
      "cuanto-cuesta-tienda-virtual-colombia",
    ],
  },
  {
    eyebrow: "Decidir qué necesitas",
    title: "La página adecuada para tu negocio",
    intro:
      "Guías para elegir estructura, canales y funciones sin pagar por cosas que no necesitas.",
    slugs: [
      "que-tipo-de-pagina-web-necesita-mi-negocio",
      "mi-negocio-necesita-pagina-web-si-tiene-instagram-whatsapp",
    ],
  },
  {
    eyebrow: "Aparecer y convertir",
    title: "De estar en internet a generar oportunidades",
    intro:
      "Cómo ayudar a Google a entender tu sitio y facilitar que una visita se convierta en contacto.",
    slugs: [
      "como-aparecer-en-google-pagina-nueva",
      "que-debe-tener-pagina-web-para-generar-clientes",
    ],
  },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog de desarrollo web y SEO | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Guías claras sobre páginas web, SEO, tiendas en línea, software y decisiones digitales para negocios en Colombia.",
      },
      { property: "og:title", content: "Blog de desarrollo web y SEO | Legión Digital Studio" },
      {
        property: "og:description",
        content:
          "Contenido práctico para tomar mejores decisiones sobre la presencia digital de tu negocio.",
      },
      { property: "og:url", content: `${site.url}/blog/` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/blog/` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Decisiones digitales, explicadas sin vueltas."
        intro="Precios, estrategia, SEO y desarrollo web para que sepas qué contratar, qué exigir y cómo convertir tu presencia digital en resultados."
      />

      {blogGroups.map((group, index) => {
        const posts = group.slugs
          .map((slug) => blogPosts.find((post) => post.slug === slug))
          .filter((post): post is (typeof blogPosts)[number] => Boolean(post));

        return (
          <Section key={group.title} className={index % 2 ? "rule-top grid-backdrop" : ""}>
            <div className="max-w-3xl">
              <p className="eyebrow">{group.eyebrow}</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">{group.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                {group.intro}
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 md:mt-10">
              {posts.map((post) => (
                <article key={post.slug} className="plate plate-hover flex flex-col p-6 sm:p-8">
                  <p className="eyebrow">{post.category}</p>
                  <h3 className="mt-3 font-display text-xl sm:text-2xl">{post.title}</h3>
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>{formatBlogDate(post.publishedAt)}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" /> {post.readingMinutes} min de lectura
                    </span>
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog/$slug/"
                    params={{ slug: post.slug }}
                    className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-primary"
                  >
                    Leer la guía <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </Section>
        );
      })}

      <CtaBand
        title="¿Quieres aplicar esto a tu negocio?"
        intro="Cuéntanos qué necesitas y te proponemos el alcance, el precio y los pasos para llevarlo a internet."
      />
    </>
  );
}

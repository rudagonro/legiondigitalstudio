import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import stepDesarrollo from "@/assets/step-desarrollo.jpg";
import stepDescubrimiento from "@/assets/step-descubrimiento.jpg";
import stepDiseno from "@/assets/step-diseno.jpg";
import stepLanzamiento from "@/assets/step-lanzamiento.jpg";

import { CtaBand, PlansGrid, Section, SectionHeading } from "@/components/site/Bits";
import { cases, faqs, services, site } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Páginas web y software a la medida en Colombia | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Páginas web y software a la medida en toda Colombia: rápidos, sin plantillas, con SEO técnico y WhatsApp. Precios claros desde $500.000.",
      },
      {
        property: "og:title",
        content: "Páginas web y software a la medida en Colombia | Legión Digital Studio",
      },
      {
        property: "og:description",
        content:
          "Sitios web y software a la medida en toda Colombia: rápidos, sin plantillas, con SEO técnico. Precios visibles y trato directo.",
      },
      { property: "og:url", content: `${site.url}/` },
      { property: "og:image", content: site.ogImage },
      { name: "twitter:image", content: site.ogImage },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Gauge,
    title: "Rápido de verdad",
    text: "Código propio y liviano, no un sitio cargado de complementos que lo vuelven lento.",
  },
  {
    icon: Sparkles,
    title: "Sin plantillas",
    text: "Cada diseño se hace desde cero para tu marca. Tu sitio no se parece al de nadie más.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro y estable",
    text: "Sin decenas de extensiones que se rompan o abran la puerta a contenido ajeno.",
  },
  {
    icon: MessageCircle,
    title: "Trato directo",
    text: "Hablas con quien construye tu sitio. Sin intermediarios ni cadenas de correos.",
  },
];

const steps = [
  {
    n: "01",
    title: "Descubrimiento",
    text: "Entendemos tu negocio, tu objetivo y a quién le hablas.",
    img: stepDescubrimiento,
  },
  {
    n: "02",
    title: "Diseño",
    text: "Propuesta visual a la medida de tu marca, no una plantilla genérica.",
    img: stepDiseno,
  },
  {
    n: "03",
    title: "Desarrollo",
    text: "Construcción rápida, adaptable y optimizada para buscadores.",
    img: stepDesarrollo,
  },
  {
    n: "04",
    title: "Lanzamiento",
    text: "Publicamos, conectamos tu correo y dejamos todo funcionando.",
    img: stepLanzamiento,
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImg}
          alt="Equipo de Legión Digital Studio trabajando en un sitio web"
          width={1400}
          height={593}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, oklch(1 0 0 / 0.96) 0%, oklch(1 0 0 / 0.9) 55%, oklch(1 0 0 / 0.82) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, oklch(1 0 0 / 0.97) 0%, oklch(1 0 0 / 0.92) 42%, oklch(1 0 0 / 0.45) 68%, transparent 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 55%, var(--background) 100%)",
          }}
        />
        <div className="container-page relative py-14 sm:py-20 md:py-32">
          <div className="fade-up max-w-3xl">
            <p className="eyebrow">Desarrollo web y software · Toda Colombia</p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl">
              Sitios web y software que hacen crecer tu negocio.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Páginas rápidas y a la medida — desde una landing page hasta una tienda en línea — y
              software para tu comercio: punto de venta con código de barras, impresión térmica e
              inventarios. Trabajamos en todo el país.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
              </a>
              <Link to="/precios/" className="btn-base btn-outline w-full sm:w-auto">
                Ver precios <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-5 md:mt-14 md:grid-cols-4 md:gap-6">
              {[
                ["Desde", "$500.000"],
                ["Entrega", "Desde 5 días"],
                ["SEO técnico", "Incluido"],
                ["Trato", "1:1 directo"],
              ].map(([k, v]) => (
                <div key={k} className="rule-top min-w-0 pt-3">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-1 font-display text-base font-extrabold text-primary md:text-lg">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section>
        <SectionHeading
          eyebrow="Por qué Legión"
          title="Lo que no verás en un sitio hecho con plantilla."
          intro="Muchos estudios entregan el mismo tema de siempre con veinte extensiones encima. Nosotros escribimos el sitio a mano: pesa menos, carga más rápido y no se rompe con el tiempo."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 md:mt-12">
          {pillars.map((p) => (
            <article key={p.title} className="plate plate-hover p-4 sm:p-6">
              <p.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              <h3 className="mt-3 font-display text-base sm:text-lg">{p.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted-foreground sm:text-sm">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="rule-top grid-backdrop">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Todo lo que tu presencia digital necesita."
          intro="Cada servicio tiene su propia página con detalle, alcance y precios de referencia."
        />
        <div className="mt-8 grid gap-4 sm:gap-6 md:mt-12 md:grid-cols-2">
          {services.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              to="/servicios/$slug/"
              params={{ slug: s.slug }}
              className="plate plate-hover group flex flex-col p-5 sm:p-7"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                {s.tagline}
              </p>
              <h3 className="mt-2 font-display text-lg sm:text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-primary sm:mt-6">
                Ver detalle
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <Link to="/servicios/" className="btn-base btn-outline mt-6">
          Ver todos los servicios <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeading
          eyebrow="Precios claros"
          title="Sabes cuánto cuesta antes de escribirnos."
          intro="Tres niveles según lo que tu negocio necesita hoy. Sin letra menuda: la propuesta escrita detalla alcance y tiempos."
        />
        <PlansGrid />
        <p className="mt-6 text-sm text-muted-foreground">
          Los rangos dependen del número de páginas y del catálogo. Nos encargamos de dejar tu
          proyecto publicado y funcionando; la renovación anual del dominio y el correo se paga a su
          proveedor y te avisamos con tiempo.
        </p>
      </Section>

      {/* Process */}
      <Section className="rule-top">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="De la idea a tu proyecto en línea."
          intro="Cuatro pasos claros, sin vueltas: así entregamos rápido sin sacrificar calidad."
        />
        <ol className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 md:mt-10">
          {steps.map((s) => (
            <li key={s.n} className="plate flex flex-col p-4 sm:p-5">
              <img
                src={s.img}
                alt={s.title}
                width={512}
                height={512}
                loading="lazy"
                className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
              />
              <span className="mt-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary">
                Paso {s.n}
              </span>
              <h3 className="mt-1 font-display text-base">{s.title}</h3>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground sm:text-sm">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Work */}
      <Section className="rule-top grid-backdrop">
        <SectionHeading
          eyebrow="Trabajo real"
          title="Sitios ya en línea, no maquetas."
          intro="Proyectos con panel de administración, pagos en línea, acceso para clientes y WhatsApp integrado. Cada caso tiene su propia página con el reto, lo que hicimos y el resultado."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
          {cases.slice(0, 3).map((c) => (
            <Link
              key={c.slug}
              to="/trabajo/$slug/"
              params={{ slug: c.slug }}
              className="plate plate-hover group flex flex-col p-5 sm:p-7"
            >
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                {c.status}
              </span>
              <h3 className="mt-2 font-display text-lg">{c.client}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.sector}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-primary sm:mt-6">
                Ver el caso
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <Link to="/trabajo/" className="btn-base btn-outline mt-6">
          Ver todos los proyectos <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* FAQ */}
      <Section className="rule-top">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Lo esencial antes de comenzar." />
        <div className="mt-10 max-w-3xl divide-y divide-border">
          {faqs.slice(0, 4).map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none font-display text-base font-bold marker:hidden">
                <span className="text-primary">+</span> {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <Link to="/precios/" className="btn-base btn-outline mt-6">
          Ver todas las preguntas <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <CtaBand />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros: así construye Legión Digital Studio" },
      {
        name: "description",
        content:
          "Estudio de desarrollo web y software con base en Bogotá, atendiendo toda Colombia. Código propio en vez de plantillas, trato directo con quien construye tu sitio y precios visibles.",
      },
      {
        property: "og:title",
        content: "Nosotros: cómo trabaja el estudio | Legión Digital Studio",
      },
      {
        property: "og:description",
        content:
          "Código propio en vez de plantillas, trato directo y precios visibles. Así trabaja Legión Digital Studio.",
      },
      { property: "og:url", content: `${site.url}/nosotros` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/nosotros` }],
  }),
  component: About,
});

const principles = [
  {
    title: "Escribimos el sitio, no lo ensamblamos",
    text: "La mayoría de las páginas en Colombia son un tema comprado con veinte extensiones encima. Eso pesa, se pone lento y con el tiempo se rompe o se llena de contenido que nadie autorizó. Nosotros programamos el sitio a mano: solo lleva lo que tu negocio necesita.",
  },
  {
    title: "Precios a la vista",
    text: "No hacemos que preguntes para saber cuánto vale. Los tres niveles están publicados y la propuesta escrita fija el valor exacto antes de que pagues nada.",
  },
  {
    title: "Hablas con quien construye",
    text: "No hay ejecutivo de cuenta ni cadena de correos. La persona que diseña y programa tu sitio es la que te responde por WhatsApp.",
  },
  {
    title: "Te entregamos el control",
    text: "En los planes administrables recibes el panel de edición y una capacitación en video, para que no dependas de nosotros para cambiar un teléfono o subir una foto.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Construimos sitios que trabajan para tu negocio."
        intro="Legión Digital Studio es un estudio de desarrollo web y software con base en Bogotá que atiende toda Colombia. Escribimos cada proyecto a mano: rápido, medible y hecho para vender desde el primer día."
      />

      <Section>
        <SectionHeading eyebrow="Cómo trabajamos" title="Cuatro reglas que no negociamos." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <article key={p.title} className="plate p-7">
              <h2 className="font-display text-lg">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="rule-top grid-backdrop">
        <SectionHeading
          eyebrow="Con qué construimos"
          title="Tecnología que sirve al negocio, no al proveedor."
          intro="Usamos herramientas modernas y estándar de la industria para que tu sitio cargue rápido, aparezca en Google y pueda crecer sin rehacerlo desde cero. Si tu proyecto necesita un panel de contenido, lo montamos; si no lo necesita, no te lo cobramos."
        />
      </Section>

      <CtaBand />
    </>
  );
}

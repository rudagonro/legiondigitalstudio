import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";
import { portfolioCases, site } from "@/lib/site-data";

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
        <div className="compact-grid compact-grid-three portfolio-grid">
          {portfolioCases.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </Section>
      <CtaBand
        title="¿Quieres el siguiente caso?"
        intro="Tu proyecto puede ser el próximo sitio en línea de la lista."
      />
    </>
  );
}

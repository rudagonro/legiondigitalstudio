import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de tratamiento de datos | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Política de tratamiento de datos personales de Legión Digital Studio conforme a la Ley 1581 de 2012 (Habeas Data) en Colombia.",
      },
      { property: "og:title", content: "Política de tratamiento de datos | Legión Digital Studio" },
      {
        property: "og:description",
        content: "Cómo recogemos, usamos y protegemos tus datos personales.",
      },
      { property: "og:url", content: `${site.url}/privacidad/` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/privacidad/` }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de tratamiento de datos personales."
        intro="Conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015 de Colombia (Habeas Data)."
      />
      <Section>
        <div className="max-w-3xl space-y-8 leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl text-foreground">Responsable</h2>
            <p className="mt-3">
              Legión Digital Studio, con domicilio en {site.city}. Canales de atención:{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline">
                {site.email}
              </a>{" "}
              y WhatsApp {site.whatsappNumber}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">Datos que recogemos</h2>
            <p className="mt-3">
              Solo los que tú nos entregas al escribirnos: nombre, correo electrónico, número de
              WhatsApp y la descripción de tu proyecto.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">Para qué los usamos</h2>
            <ul className="mt-3 space-y-2">
              <li>— Responder tu solicitud y preparar una propuesta comercial.</li>
              <li>— Ejecutar y dar soporte al proyecto contratado.</li>
              <li>— Enviarte información relacionada con tu proyecto.</li>
            </ul>
            <p className="mt-3">
              No vendemos, alquilamos ni compartimos tus datos con terceros para fines
              publicitarios.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">Tus derechos</h2>
            <p className="mt-3">
              Puedes conocer, actualizar, rectificar o solicitar la supresión de tus datos, y
              revocar la autorización en cualquier momento, escribiendo a{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline">
                {site.email}
              </a>
              . Atendemos las consultas en un plazo máximo de diez días hábiles y los reclamos en
              quince días hábiles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">Conservación y seguridad</h2>
            <p className="mt-3">
              Conservamos los datos mientras exista una relación comercial o una solicitud activa, y
              aplicamos medidas razonables para protegerlos frente a accesos no autorizados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">Vigencia</h2>
            <p className="mt-3">
              Esta política rige desde su publicación. Cualquier cambio se informará en esta misma
              página.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Legión Digital Studio" },
      {
        name: "description",
        content:
          "Condiciones de contratación, pagos, tiempos de entrega, garantía y propiedad intelectual de los servicios de Legión Digital Studio.",
      },
      { property: "og:title", content: "Términos y condiciones | Legión Digital Studio" },
      {
        property: "og:description",
        content:
          "Condiciones claras para contratar servicios de diseño, desarrollo web y software.",
      },
      { property: "og:url", content: `${site.url}/terminos/` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/terminos/` }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Términos y condiciones de servicio."
        intro="Condiciones claras para contratar proyectos de diseño, desarrollo web, comercio electrónico, software y servicios digitales con Legión Digital Studio."
      />

      <Section>
        <div className="max-w-3xl space-y-9 leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl text-foreground">1. Identificación y alcance</h2>
            <p className="mt-3">
              Legión Digital Studio es una marca comercial mediante la cual se prestan de forma
              independiente servicios digitales en Colombia. Estos términos regulan la información,
              cotización y contratación de los servicios ofrecidos en este sitio. La propuesta
              comercial de cada proyecto identifica al prestador, al cliente, el alcance, el valor y
              las condiciones particulares aplicables.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">2. Servicios</h2>
            <p className="mt-3">
              Los servicios pueden incluir diseño y desarrollo de páginas web, tiendas en línea,
              landing pages, software a la medida, paneles de administración, integraciones y SEO
              técnico. El alcance definitivo será únicamente el descrito en la propuesta aceptada.
              Funciones, páginas, integraciones o cambios no incluidos se cotizarán por separado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">3. Precios y forma de pago</h2>
            <p className="mt-3">
              Los valores publicados son rangos de referencia en pesos colombianos. El precio final
              se confirma por escrito antes de comenzar. Salvo que la propuesta indique algo
              diferente, se paga el 50 % para reservar e iniciar el proyecto y el 50 % restante
              contra entrega, antes de publicar o transferir los archivos finales.
            </p>
            <p className="mt-3">
              Dominio, correo, alojamiento, licencias, pasarelas de pago y otros servicios de
              terceros no están incluidos, salvo que la propuesta los mencione expresamente. Sus
              renovaciones y tarifas dependen de cada proveedor.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">4. Inicio y tiempos de entrega</h2>
            <p className="mt-3">
              El trabajo inicia cuando se confirma el anticipo y el cliente entrega los contenidos,
              accesos e información necesarios. Como referencia, una landing page toma entre 5 y 8
              días, un sitio autoadministrable entre 2 y 3 semanas y una tienda en línea entre 3 y 5
              semanas.
            </p>
            <p className="mt-3">
              Los tiempos pueden ajustarse por cambios de alcance, demora en contenidos o
              aprobaciones, indisponibilidad de servicios externos, fuerza mayor o circunstancias
              informadas oportunamente. Las fechas específicas constarán en la propuesta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">5. Obligaciones del cliente</h2>
            <p className="mt-3">
              El cliente debe entregar información veraz, contenidos, imágenes y accesos que tenga
              derecho a utilizar; revisar los avances; responder solicitudes de aprobación; y pagar
              en las fechas acordadas. El cliente responde por la legalidad de los productos,
              servicios, promociones y contenidos que solicite publicar.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">6. Revisiones y aprobación</h2>
            <p className="mt-3">
              Las rondas de revisión y entregables se establecen en cada propuesta. Una revisión
              corrige o ajusta lo acordado; no comprende nuevas páginas, funciones, integraciones o
              cambios de dirección creativa. La aprobación escrita de una etapa permite continuar a
              la siguiente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">7. Garantía y soporte</h2>
            <p className="mt-3">
              Legión Digital Studio corregirá sin costo los errores técnicos reproducibles que sean
              atribuibles al desarrollo entregado y se reporten dentro de los 30 días calendario
              siguientes a la publicación, salvo que la propuesta establezca un plazo superior. Esta
              garantía no cubre nuevas funciones, cambios de contenido, uso indebido, modificaciones
              de terceros, pérdida de accesos ni fallas de proveedores externos.
            </p>
            <p className="mt-3">
              El mantenimiento posterior, las actualizaciones y el soporte continuo se contratan por
              separado cuando no estén incluidos expresamente. Lo anterior no limita los derechos
              irrenunciables que reconozca la legislación colombiana al consumidor.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">8. Cancelaciones y retracto</h2>
            <p className="mt-3">
              Si el cliente cancela un proyecto iniciado, se liquidará el trabajo efectivamente
              realizado y los costos de terceros ya causados. Cualquier saldo a favor se devolverá
              conforme a la propuesta y a la ley. Cuando exista legalmente el derecho de retracto,
              podrá solicitarse por escrito dentro del plazo aplicable. Ninguna disposición de estos
              términos elimina derechos obligatorios del consumidor.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">9. Propiedad intelectual</h2>
            <p className="mt-3">
              Una vez recibido el pago total, el cliente obtiene los derechos de uso sobre los
              entregables creados específicamente para su proyecto, en los términos de la propuesta.
              Las herramientas, componentes reutilizables, librerías, metodologías y software de
              terceros conservan sus respectivas titularidades y licencias. El cliente garantiza que
              puede utilizar los materiales que proporciona.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">10. Servicios de terceros</h2>
            <p className="mt-3">
              El proyecto puede conectarse con servicios como dominios, alojamiento, correo,
              WhatsApp, formularios, analítica o pasarelas de pago. Su disponibilidad, tarifas y
              políticas dependen de sus proveedores. Legión Digital Studio acompaña la
              configuración, pero no controla interrupciones o cambios ajenos a su servicio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">11. Datos personales</h2>
            <p className="mt-3">
              Los datos recibidos se tratan conforme a la{" "}
              <a href="/privacidad/" className="text-primary underline">
                política de tratamiento de datos personales
              </a>
              . El cliente que recopile datos mediante su propio proyecto será responsable de
              definir sus avisos, finalidades y autorizaciones.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">
              12. Solicitudes y reclamaciones
            </h2>
            <p className="mt-3">
              Las solicitudes relacionadas con una cotización, entrega, garantía o reclamación
              pueden enviarse a{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline">
                {site.email}
              </a>{" "}
              o por WhatsApp al {site.whatsappNumber}. Se debe indicar el proyecto, los hechos y la
              solución solicitada para poder dar una respuesta completa.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">
              13. Legislación y actualizaciones
            </h2>
            <p className="mt-3">
              Estos términos se interpretan conforme a la legislación colombiana. Las condiciones
              vigentes serán las publicadas al momento de aceptar la propuesta, junto con sus
              condiciones particulares. Última actualización: 14 de septiembre de 2026.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { type ReactNode } from "react";
import { CompactCard } from "./CompactCard";
import { plans, site, whatsappLink, type Plan } from "@/lib/site-data";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">{title}</h2>
      {intro ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  whatsappSubject,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  whatsappSubject?: string;
}) {
  return (
    <section className="grid-backdrop border-b border-border">
      <div className="container-page py-10 sm:py-14 md:py-20">
        <div className="fade-up max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappSubject ? whatsappLink(whatsappSubject) : site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero"
              className="btn-base btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
            </a>
            <Link to="/contacto/" className="btn-base btn-outline">
              Enviar formulario
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <CompactCard
      title={plan.name}
      label={plan.featured ? "Más pedido" : "Página web"}
      summary={plan.summary}
      className={plan.featured ? "compact-card-featured" : ""}
      preview={<span className="compact-plan-price">{plan.price}</span>}
    >
      <p className="font-display text-2xl text-primary">{plan.price}</p>
      <p className="text-sm text-muted-foreground">{plan.note}</p>
      <ul className="space-y-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href={whatsappLink(`el plan ${plan.name}`)} target="_blank" rel="noopener noreferrer"
        data-cta="plan_card" data-plan={plan.slug} className="btn-base btn-primary mt-2 w-full">
        Cotizar este plan
      </a>
      <Link to="/contacto/" search={{ plan: plan.slug }}
        className="text-center text-sm font-medium text-primary underline underline-offset-4">
        Prefiero enviar el formulario
      </Link>
    </CompactCard>
  );
}

export function PlansGrid() {
  return (
    <div className="compact-grid compact-grid-three mt-8 md:mt-12">
      {plans.map((plan) => <PlanCard key={plan.slug} plan={plan} />)}
    </div>
  );
}

export function CtaBand({
  title = "¿Listo para tu proyecto?",
  intro = "Cuéntanos qué necesitas y te respondemos con una propuesta clara: alcance, precio y tiempos.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="rule-top grid-backdrop">
      <div className="container-page py-12 sm:py-16 md:py-20">
        <div className="plate flex flex-col items-start gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl">{title}</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">{intro}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="cta_band"
              className="btn-base btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
            </a>
            <Link to="/contacto/" className="btn-base btn-outline">
              Enviar formulario
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatsappFloat() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      data-cta="boton_flotante"
      className="fixed bottom-5 right-5 z-50 grid h-13 w-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-plate transition-transform hover:scale-105"
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

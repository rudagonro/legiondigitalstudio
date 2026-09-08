import { Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { plans, site, type Plan } from "@/lib/site-data";

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
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="grid-backdrop border-b border-border">
      <div className="container-page py-10 sm:py-14 md:py-20">
        <div className="fade-up max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
        </div>
      </div>
    </section>
  );
}

export function PlanCard({
  plan,
  selected = false,
  onSelect,
}: {
  plan: Plan;
  selected?: boolean;
  onSelect?: () => void;
}) {
  return (
    <article
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      tabIndex={onSelect ? 0 : undefined}
      className={`plate plate-hover flex cursor-pointer flex-col p-5 transition-all sm:p-7 ${
        selected ? "border-primary/60 ring-2 ring-primary/25 shadow-plate" : ""
      }`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <h3 className="min-w-0 font-display text-lg sm:text-xl">{plan.name}</h3>
        {plan.featured ? (
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] ${
              selected
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground"
            }`}
          >
            Más pedido
          </span>
        ) : null}
      </div>
      <p className="mt-4 font-display text-2xl text-primary sm:text-3xl">{plan.price}</p>
      <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground">
        {plan.note}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.summary}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="min-w-0 text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-base mt-6 w-full ${selected ? "btn-primary" : "btn-outline"}`}
      >
        Cotizar este plan
      </a>
    </article>
  );
}

export function PlansGrid() {
  const featuredSlug = plans.find((p) => p.featured)?.slug ?? plans[0]!.slug;
  const [selected, setSelected] = useState(featuredSlug);

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 md:mt-12">
      {plans.map((p) => (
        <PlanCard
          key={p.slug}
          plan={p}
          selected={selected === p.slug}
          onSelect={() => setSelected(p.slug)}
        />
      ))}
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
              className="btn-base btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
            </a>
            <Link to="/contacto" className="btn-base btn-outline">
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
      className="fixed bottom-5 right-5 z-50 grid h-13 w-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-plate transition-transform hover:scale-105"
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

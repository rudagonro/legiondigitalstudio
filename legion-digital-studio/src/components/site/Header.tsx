import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/legion-logo.png";
import { site } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios/", label: "Servicios" },
  { to: "/precios/", label: "Precios" },
  { to: "/trabajo/", label: "Trabajo" },
  { to: "/nosotros/", label: "Nosotros" },
  { to: "/contacto/", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="container-page grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:h-16 md:flex md:justify-between md:gap-6">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logoImg}
            alt="Legión Digital Studio"
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 object-contain md:h-9 md:w-9"
          />
          <span className="truncate font-display text-[0.8rem] font-extrabold md:whitespace-nowrap md:text-sm">
            Legión <span className="text-primary">Digital Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="gold-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary hidden whitespace-nowrap px-4 py-2 text-[0.8rem] sm:inline-flex md:hidden lg:inline-flex"
          >
            Cotizar por WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-input text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-surface md:hidden">
          <div className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-border py-3 font-display text-sm font-bold uppercase tracking-wide last:border-0"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

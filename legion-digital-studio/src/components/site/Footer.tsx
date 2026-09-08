import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/legion-logo.png";
import { services, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="rule-top mt-14 bg-surface md:mt-24">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:py-14">
        <div className="min-w-0 sm:col-span-2">
          <p className="flex items-center gap-2.5 font-display text-lg font-extrabold">
            <img
              src={logoAsset}
              alt="Legión Digital Studio"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            Legión <span className="text-primary">Digital Studio</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Desarrollo web y software a la medida en toda Colombia. Sitios rápidos, sin plantillas y
            con SEO técnico incluido. Trato directo, sin intermediarios.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {site.city}
            </li>
            <li>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> {site.whatsappNumber}
              </a>
            </li>
            <li className="min-w-0">
              <a
                href={`mailto:${site.email}`}
                className="flex min-w-0 items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{site.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/servicios/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Estudio</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/precios" className="transition-colors hover:text-foreground">
                Precios
              </Link>
            </li>
            <li>
              <Link to="/trabajo" className="transition-colors hover:text-foreground">
                Trabajo real
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="transition-colors hover:text-foreground">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="transition-colors hover:text-foreground">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="transition-colors hover:text-foreground">
                Tratamiento de datos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-top">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Legión Digital Studio. Bogotá, Colombia — atendemos todo el
            país.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">Hecho a mano, no con plantillas</p>
        </div>
      </div>
    </footer>
  );
}

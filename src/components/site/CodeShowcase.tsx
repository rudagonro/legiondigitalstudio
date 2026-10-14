import { useEffect, useRef, useState } from "react";
import { Code2, MonitorSmartphone, RotateCcw, ShoppingBag, Check, MessageCircle, Boxes } from "lucide-react";

const examples = {
  web: {
    file: "tu-negocio.html",
    code: '<main class="tu-marca">\n  <h1>Tu negocio, en línea.</h1>\n  <p>Diseñado a tu medida.</p>\n  <section>Servicios</section>\n  <section>Proyectos</section>\n  <button>Contactar</button>\n</main>',
    title: "Tu negocio, en línea.",
    text: "Tu marca. Tus servicios. Tu página.",
    tiles: ["Servicios", "Proyectos"],
    action: "Contactar por WhatsApp",
  },
  software: {
    file: "tu-sistema.tsx",
    code: 'function TuSistema() {\n  return <Panel>\n    <Titulo>Tu negocio</Titulo>\n    <Ventas />\n    <Inventario />\n    <Boton>Registrar</Boton>\n  </Panel>;\n}',
    title: "Tu negocio, organizado.",
    text: "Ventas, inventario y reportes.",
    tiles: ["Ventas", "Inventario"],
    action: "Registrar una venta",
  },
};

export function CodeShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<keyof typeof examples>("web");
  const [typed, setTyped] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const example = examples[mode];
  const count = reducedMotion ? example.code.length : typed;
  const progress = count / example.code.length;
  const complete = count >= example.code.length;

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion(); updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const element = ref.current;
    const observer = typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)), { threshold: 0.2 })
      : null;
    if (element && observer) observer.observe(element);
    else setVisible(true);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!visible || !pageVisible || reducedMotion || complete) return;
    const timer = window.setTimeout(() => setTyped((value) => Math.min(value + 3, example.code.length)), 65);
    return () => window.clearTimeout(timer);
  }, [visible, pageVisible, reducedMotion, complete, typed, example.code.length]);

  const changeMode = (next: keyof typeof examples) => {
    if (next === mode) return;
    setMode(next); setTyped(0);
  };
  const pieceClass = (index: number) => `code-preview-piece ${progress > (index + 1) * 0.19 ? "is-built" : ""}`;

  return (
    <section id="codigo-en-accion" className="code-showcase-section rule-top">
      <div className="container-page">
        <div className="code-showcase-heading">
          <p className="eyebrow">Así construimos tu proyecto</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl">Hecho con código. Diseñado para tu negocio.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Mira cómo una idea toma forma: el código avanza y tu página o sistema aparece.
          </p>
        </div>
        <div ref={ref} className="code-showcase-window">
          <div className="code-showcase-toolbar">
            <span className="code-demo-label"><Code2 aria-hidden="true" className="h-4 w-4" /> Demostración</span>
            <div className="code-showcase-options" role="group" aria-label="Tipo de proyecto">
              <button type="button" aria-pressed={mode === "web"} onClick={() => changeMode("web")}>Página web</button>
              <button type="button" aria-pressed={mode === "software"} onClick={() => changeMode("software")}>Software</button>
            </div>
          </div>
          <div className="code-showcase-panels">
            <div className="code-showcase-editor">
              <p className="code-panel-label"><Code2 aria-hidden="true" className="h-4 w-4" /> {example.file}</p>
              <pre aria-hidden="true"><code>{example.code.slice(0, count) || "/* Tu proyecto empieza aquí */"}<span className="code-caret" hidden={complete}>▏</span></code></pre>
              <p className="sr-only">Ejemplo de código que construye una {mode === "web" ? "página web con servicios, proyectos y contacto" : "interfaz con ventas e inventario"}.</p>
            </div>
            <div className="code-showcase-preview">
              <p className="code-panel-label"><MonitorSmartphone aria-hidden="true" className="h-4 w-4" /> Vista previa</p>
              <div className="code-preview-screen" aria-hidden="true">
                <div className={pieceClass(0)}><p className="code-preview-brand">TU NEGOCIO</p><p className="code-preview-title">{example.title}</p></div>
                <p className={`${pieceClass(1)} code-preview-copy`}>{example.text}</p>
                <div className={`${pieceClass(2)} code-preview-tiles`}>
                  {example.tiles.map((tile, index) => <div key={tile}><span>{mode === "software" ? (index === 0 ? <ShoppingBag /> : <Boxes />) : <Code2 />}</span>{tile}</div>)}
                </div>
                <div className={`${pieceClass(3)} code-preview-contact`}>{mode === "web" ? <MessageCircle /> : <Check />}{example.action}</div>
              </div>
            </div>
          </div>
          <div className="code-showcase-footer">
            <p aria-live="polite">{complete ? "Código listo. Proyecto visible." : "Construyendo tu proyecto…"}</p>
            <button type="button" onClick={() => setTyped(0)} aria-label="Repetir animación del código"><RotateCcw aria-hidden="true" className="h-4 w-4" /> Repetir</button>
          </div>
        </div>
      </div>
    </section>
  );
}

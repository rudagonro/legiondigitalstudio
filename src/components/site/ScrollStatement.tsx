import { useEffect, useRef } from "react";

const paragraphs = [
  "Tu negocio merece una página que se entienda, se vea bien y facilite el contacto con tus clientes.",
  "En Legión Digital Studio diseñamos tu sitio a la medida. De la primera idea a tu proyecto en línea.",
];

export function ScrollStatement() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const block = ref.current;
    if (!block) return;
    const words = Array.from(block.querySelectorAll<HTMLElement>("[data-word]"));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.75 - block.getBoundingClientRect().top) / (window.innerHeight * 0.65)));
      words.forEach((word, index) => word.classList.toggle("is-dark", motion.matches || progress * (words.length + 4) > index));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    // Keep server-rendered text readable before hydration or without JavaScript.
    block.classList.add("scroll-statement-active");
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      block.classList.remove("scroll-statement-active");
    };
  }, []);
  return (
    <section className="scroll-statement-section rule-top" aria-label="Nuestra forma de trabajar">
      <div ref={ref} className="container-page scroll-statement">
        {paragraphs.map((text) => (
          <p key={text} aria-label={text}>
            {text.split(" ").map((word, index) => <span key={index} aria-hidden="true"><span data-word>{word}</span>{" "}</span>)}
          </p>
        ))}
      </div>
    </section>
  );
}

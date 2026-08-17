import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import "./Trust.css";

const PLACEHOLDER_COMPANIES = [
  { name: "Northwind", glyph: "N" },
  { name: "Vertex Labs", glyph: "V" },
  { name: "Helios", glyph: "H" },
  { name: "Brightpath", glyph: "B" },
  { name: "Corely", glyph: "C" },
];

function Trust() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".trust__item", {
      opacity: 0,
      y: 18,
      duration: 0.6,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: { trigger: ".trust", start: "top 88%" },
    });
  });

  return (
    <section className="trust tv-section" id="trust" ref={scopeRef}>
      <div className="tv-container">
        <p className="trust__heading">
          Built for modern teams that want HR to work smarter.
        </p>
        <ul className="trust__list">
          {PLACEHOLDER_COMPANIES.map(({ name, glyph }) => (
            <li className="trust__item" key={name} aria-label={`${name} (placeholder logo)`}>
              <span className="trust__glyph" aria-hidden="true">
                {glyph}
              </span>
              <span className="trust__name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Trust;

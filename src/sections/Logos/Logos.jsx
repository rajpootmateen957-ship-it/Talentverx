import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { COMPANY_LOGOS } from "../../data/data.jsx";
import "./Logos.css";

function Logos() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    const track = scopeRef.current.querySelector(".logos__track");
    const items = track.querySelectorAll(".logos__item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".logos",
        start: "top 88%",
        once: true,
      },
    });

    tl.from(".logos__heading", { opacity: 0, y: 18, duration: 0.6, ease: "power3.out" })
      .from(items, { opacity: 0, y: 14, duration: 0.45, stagger: 0.05, ease: "power2.out" }, "-=0.3")
      .add(() => {
        gsap.to(track, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
      });
  });

  return (
    <section className="logos tv-section" id="logos" ref={scopeRef}>
      <div className="tv-container">
        <p className="logos__heading">
          Trusted by <strong>2,000+ teams</strong> across the globe
        </p>
      </div>
      <div className="logos__marquee" aria-label="Company logos">
        <div className="logos__track">
          {[0, 1].map((copy) => (
            <ul className="logos__list" key={copy} aria-hidden={copy === 1}>
              {COMPANY_LOGOS.map(({ name, src }) => (
                <li className="logos__item" key={`${copy}-${name}`} aria-label={name}>
                  <img
                    src={src}
                    alt={`${name} logo`}
                    className="logos__image"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logos;

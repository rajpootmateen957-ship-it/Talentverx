import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { PROBLEMS } from "../../data/data.jsx";
import "./Problems.css";

function Problems() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".problems__card", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".problems", start: "top 82%" },
    });
  });

  return (
    <section className="problems tv-section" id="problems" ref={scopeRef}>
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">The problem</span>
          <h2 className="tv-heading-lg">HR shouldn't feel complicated.</h2>
          <p>
            Many teams manage their people with a patchwork of tools and manual
            processes. The result is duplicated work, missing information and
            little time left for the things that matter.
          </p>
        </div>

        <div className="problems__grid">
          {PROBLEMS.map(({ icon: Icon, title, text }) => (
            <article className="tv-card problems__card" key={title}>
              <span className="tv-icon-badge">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="tv-heading-md">{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;

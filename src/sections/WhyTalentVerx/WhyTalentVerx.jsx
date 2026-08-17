import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { REASONS } from "../../data/data.jsx";
import "./WhyTalentVerx.css";

function WhyTalentVerx() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".why__card", {
      opacity: 0,
      y: 28,
      duration: 0.55,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".why", start: "top 82%" },
    });
  });

  return (
    <section
      className="why tv-section tv-section--tinted"
      id="why-talentverx"
      ref={scopeRef}
    >
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Why TalentVerx</span>
          <h2 className="tv-heading-lg">Why teams choose TalentVerx</h2>
          <p>
            Purpose-built for HR teams that want less manual work and a clearer
            view of their people.
          </p>
        </div>

        <div className="why__grid">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <article className="tv-card why__card" key={title}>
              <span className="tv-icon-badge">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTalentVerx;

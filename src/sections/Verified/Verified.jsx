import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { VERIFICATIONS } from "../../data/data.jsx";
import "./Verified.css";

function Verified() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".verified__item", {
      opacity: 0,
      y: 24,
      duration: 0.55,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: ".verified", start: "top 85%" },
    });
  });

  return (
    <section
      className="verified tv-section tv-section--tinted"
      id="verified"
      ref={scopeRef}
    >
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Verified &amp; secure</span>
          <h2 className="tv-heading-lg">Trusted, audited and secure by design.</h2>
          <p>
            TalentVerx meets the security and compliance standards that modern
            organizations rely on.
          </p>
        </div>

        <ul className="verified__grid">
          {VERIFICATIONS.map(({ icon: Icon, title, text }) => (
            <li className="verified__item" key={title}>
              <span className="verified__badge">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="verified__title">{title}</h3>
              <p className="verified__text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Verified;

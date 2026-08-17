import { Check, ArrowRight } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { goToSection } from "../../lib/scroll.js";
import { PLANS } from "../../data/data.jsx";
import "./Pricing.css";

function Pricing() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".pricing__card", {
      opacity: 0,
      y: 34,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".pricing", start: "top 82%" },
    });
  });

  return (
    <section className="pricing tv-section" id="pricing" ref={scopeRef}>
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Pricing</span>
          <h2 className="tv-heading-lg">Flexible plans for growing teams.</h2>
          <p>
            Every organization is different. Our team will help you choose the
            right plan and scope for your needs.
          </p>
        </div>

        <div className="pricing__grid">
          {PLANS.map(({ name, description, features, highlighted }) => (
            <article
              className={`tv-card pricing__card ${highlighted ? "is-highlighted" : ""}`}
              key={name}
            >
              {highlighted && <span className="pricing__badge">Most popular</span>}
              <h3 className="pricing__name">{name}</h3>
              <p className="pricing__desc">{description}</p>
              <p className="pricing__price">
                Custom <span>pricing</span>
              </p>
              <ul className="pricing__features">
                {features.map((feature) => (
                  <li key={feature}>
                    <span className="pricing__check">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`tv-btn tv-btn--block ${
                  highlighted ? "tv-btn--primary" : "tv-btn--secondary"
                }`}
                onClick={(e) => goToSection(e, "demo")}
              >
                Talk to Sales
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="pricing__note">
          Need something specific?{" "}
          <a
            href="#demo"
            onClick={(e) => goToSection(e, "demo")}
          >
            Request a Demo
          </a>{" "}
          and we'll walk you through the right fit for your team.
        </p>
      </div>
    </section>
  );
}

export default Pricing;

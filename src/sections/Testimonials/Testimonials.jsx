import { Quote, Star } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { TESTIMONIALS } from "../../data/data.jsx";
import "./Testimonials.css";

function Testimonials() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".testi__card", {
      opacity: 0,
      y: 32,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".testi", start: "top 82%" },
    });
  });

  return (
    <section className="testi tv-section tv-section--tinted" id="testimonials" ref={scopeRef}>
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Testimonials</span>
          <h2 className="tv-heading-lg">What teams are saying</h2>
          <p>
            The feedback below is illustrative. We'll share verified customer
            stories here as they become available.
          </p>
        </div>

        <div className="testi__grid">
          {TESTIMONIALS.map((t) => (
            <article className="tv-card testi__card" key={t.name}>
              <span className="testi__sample">Sample</span>
              <span className="testi__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </span>
              <Quote size={30} className="testi__quote-icon" aria-hidden="true" />
              <p className="testi__quote">{t.quote}</p>
              <div className="testi__author">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testi__avatar"
                  loading="lazy"
                />
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

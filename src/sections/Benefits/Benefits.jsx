import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { BENEFITS, BENEFITS_STATS as STATS } from "../../data/data.jsx";
import "./Benefits.css";

function Benefits() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    gsap.from(".benefits__card", {
      opacity: 0,
      y: 30,
      duration: 0.55,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: { trigger: ".benefits", start: "top 82%" },
    });

    gsap.from(".benefits__stat-num [data-count]", {
      textContent: 0,
      duration: 1.2,
      snap: { textContent: 1 },
      ease: "power1.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".benefits__stats", start: "top 88%" },
    });
  });

  return (
    <section className="benefits tv-section" id="benefits" ref={scopeRef}>
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Business value</span>
          <h2 className="tv-heading-lg">Less administration. More time for people.</h2>
          <p>
            TalentVerx helps HR teams shift their time from manual processes to
            the work that matters most.
          </p>
        </div>

        <div className="benefits__grid">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <article className="tv-card benefits__card" key={title}>
              <span className="benefits__icon">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3 className="tv-heading-md">{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="benefits__stats">
          {STATS.map(({ value, suffix, label }) => (
            <div className="benefits__stat" key={label}>
              <strong className="benefits__stat-num">
                <span className="tv-gradient-text" data-count={value}>
                  {value}
                </span>
                {suffix}
              </strong>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;

import { Check, X } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { COMPARISON_ROWS, COMPETITORS } from "../../data/data.jsx";
import "./Competitors.css";

function Competitors() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    const mm = gsap.matchMedia(scopeRef);

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".competitors",
          start: "top top",
          end: "+=140%",
          pin: true,
          anticipatePin: 1,
          scrub: 0.6,
        },
      });

      tl.from(".competitors__head", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".competitors__table",
          { y: 140, opacity: 0, scale: 0.96, duration: 1, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          ".competitors__row",
          { y: 44, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
          "-=0.6"
        )
        .from(".competitors__cell--brand.is-ours", {
          scale: 0.85,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });

      return () => tl.scrollTrigger?.kill();
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".competitors", start: "top 85%", once: true },
      });

      tl.from(".competitors__table", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      }).from(
        ".competitors__row",
        { y: 20, opacity: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.4"
      );

      return () => tl.scrollTrigger?.kill();
    });
  });

  return (
    <section
      className="competitors tv-section"
      id="competitors"
      ref={scopeRef}
    >
      <div className="tv-container">
        <div className="tv-section-head competitors__head">
          <span className="tv-eyebrow">Why TalentVerx</span>
          <h2 className="tv-heading-lg">
            Compare and see the difference.
          </h2>
          <p>
            More value, fewer tools. See how TalentVerx compares to other HR
            platforms.
          </p>
        </div>

        <div className="competitors__wrap">
          <div className="competitors__table" role="table" aria-label="TalentVerx vs competitors">
            <div className="competitors__row competitors__row--head" role="row">
              <div className="competitors__cell competitors__cell--feature" role="columnheader">
                Capability
              </div>
              {COMPETITORS.map((c) => (
                <div
                  className={`competitors__cell competitors__cell--brand ${
                    c.isOurs ? "is-ours" : ""
                  }`}
                  role="columnheader"
                  key={c.name}
                >
                  <span className={`competitors__logo ${c.isOurs ? "is-ours" : ""}`}>
                    {c.logo}
                  </span>
                  <span className="competitors__name">{c.name}</span>
                  {c.isOurs && <span className="competitors__pill">Best choice</span>}
                </div>
              ))}
            </div>

            {COMPARISON_ROWS.map((feature) => (
              <div className="competitors__row" role="row" key={feature}>
                <div className="competitors__cell competitors__cell--feature" role="cell">
                  {feature}
                </div>
                {COMPETITORS.map((c) => {
                  const supported = c.marks[COMPARISON_ROWS.indexOf(feature)];
                  return (
                    <div
                      className={`competitors__cell competitors__cell--mark ${
                        c.isOurs ? "is-ours" : ""
                      }`}
                      role="cell"
                      key={`${c.name}-${feature}`}
                    >
                      {supported ? (
                        <span className="competitors__check">
                          <Check size={15} aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="competitors__x">
                          <X size={15} aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competitors;

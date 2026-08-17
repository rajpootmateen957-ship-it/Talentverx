import { useState } from "react";
import { CheckCircle2, Send } from "../../components/icons/index.js";
import { DemoButton, ExploreButton, SubmitButton } from "../../components/buttons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { goToSection } from "../../lib/scroll.js";
import "./Cta.css";

const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "500+"];

function Cta() {
  const [submitted, setSubmitted] = useState(false);

  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".cta__panel", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".cta", start: "top 82%" },
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="cta tv-section" id="demo" ref={scopeRef}>
      <div className="tv-container">
        <div className="cta__panel">
          <div className="cta__shapes" aria-hidden="true">
            <span className="cta__shape cta__shape--bolt" />
            <span className="cta__shape cta__shape--ring" />
            <span className="cta__shape cta__shape--bar" />
            <span className="cta__shape cta__shape--bar2" />
          </div>

          <div className="cta__copy">
            <span className="cta__eyebrow">Get started</span>
            <h2 className="tv-heading-xl">Ready to make HR simpler?</h2>
            <p>
              Bring your people, processes and HR operations together with
              TalentVerx.
            </p>
            <div className="cta__buttons">
              <DemoButton
                variant="secondary"
                size="lg"
                onClick={(e) => goToSection(e, "demo")}
              />
              <ExploreButton
                variant="ghost"
                size="lg"
                className="cta__ghost"
                onClick={(e) => goToSection(e, "features")}
              />
            </div>
            <ul className="cta__points">
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                No obligation — just a practical walkthrough
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" />
                See how TalentVerx fits your team
              </li>
            </ul>
          </div>

          <div className="cta__form-wrap">
            {submitted ? (
              <div className="cta__success" role="status">
                <span className="cta__success-icon">
                  <CheckCircle2 size={30} aria-hidden="true" />
                </span>
                <h3>Thanks! Request received.</h3>
                <p>
                  Our team will reach out shortly to schedule your demo.
                </p>
                <SubmitButton variant="secondary" onClick={() => setSubmitted(false)}>
                  Send another request
                </SubmitButton>
              </div>
            ) : (
              <form className="cta__form" onSubmit={handleSubmit}>
                <h3>Request a Demo</h3>
                <p className="cta__form-sub">
                  Tell us a bit about your team and we'll be in touch.
                </p>
                <div className="cta__field">
                  <label htmlFor="cta-name">Full name</label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="cta__field">
                  <label htmlFor="cta-email">Work email</label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="cta__field-row">
                  <div className="cta__field">
                    <label htmlFor="cta-company">Company</label>
                    <input
                      id="cta-company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="cta__field">
                    <label htmlFor="cta-size">Team size</label>
                    <select id="cta-size" name="teamSize" defaultValue="">
                      <option value="" disabled>
                        Select
                      </option>
                      {TEAM_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size} people
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="cta__field">
                  <label htmlFor="cta-message">Message (optional)</label>
                  <textarea
                    id="cta-message"
                    name="message"
                    rows="3"
                    placeholder="What are your main HR priorities?"
                  />
                </div>
                <SubmitButton block size="lg" icon={Send}>
                  Request a Demo
                </SubmitButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;

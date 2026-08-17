import { useState } from "react";
import { ChevronDown, Quote, Star } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { TESTIMONIALS } from "../../data/data.jsx";
import "./Testimonials.css";

function TestimonialItem({ t, isOpen, onToggle, index }) {
  return (
    <article className={`testi__item ${isOpen ? "is-open" : ""}`}>
      <h3>
        <button
          type="button"
          className="testi__question"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`testi-answer-${index}`}
          id={`testi-question-${index}`}
        >
          <span className="testi__logo" aria-hidden="true">
            <img src={t.logo} alt="" className="testi__logo-img" loading="lazy" />
          </span>
          <span className="testi__question-text">{t.question}</span>
          <span className="testi__chevron">
            <ChevronDown size={18} aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div
        id={`testi-answer-${index}`}
        role="region"
        aria-labelledby={`testi-question-${index}`}
        className="testi__answer"
      >
        <div className="testi__body">
          <span className="testi__stars" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
            ))}
          </span>
          <Quote size={30} className="testi__quote-icon" aria-hidden="true" />
          <p className="testi__quote">{t.quote}</p>
          <div className="testi__author">
            <span className="testi__avatar" aria-hidden="true">
              {t.name.charAt(0)}
            </span>
            <div>
              <strong>{t.name}</strong>
              <small>{t.role}</small>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  const [openIndex, setOpenIndex] = useState(-1);

  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".testi__item", {
      opacity: 0,
      y: 22,
      duration: 0.5,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: ".testi", start: "top 85%" },
    });
  });

  return (
    <section className="testi tv-section tv-section--tinted" id="testimonials" ref={scopeRef}>
      <div className="tv-container testi__container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Testimonials</span>
          <h2 className="tv-heading-lg">What teams are saying</h2>
          <p>
            The feedback below is illustrative. We'll share verified customer
            stories here as they become available.
          </p>
        </div>

        <div className="testi__list">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialItem
              key={t.name}
              t={t}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import { useState } from "react";
import { ChevronDown } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { FAQS } from "../../data/data.jsx";
import "./Faq.css";

function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className={`faq__item ${isOpen ? "is-open" : ""}`}>
      <h3>
        <button
          type="button"
          className="faq__question"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
        >
          {faq.q}
          <span className="faq__chevron">
            <ChevronDown size={18} aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="faq__answer"
      >
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".faq__item", {
      opacity: 0,
      y: 22,
      duration: 0.5,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: ".faq", start: "top 85%" },
    });
  });

  return (
    <section className="faq tv-section tv-section--tinted" id="faq" ref={scopeRef}>
      <div className="tv-container faq__container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Resources</span>
          <h2 className="tv-heading-lg">Frequently asked questions</h2>
          <p>Everything you need to know about getting started with TalentVerx.</p>
        </div>

        <div className="faq__list">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.q}
              faq={faq}
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

export default Faq;

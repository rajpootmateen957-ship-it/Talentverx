import { useState } from "react";
import { ChevronDown } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import "./Faq.css";

const FAQS = [
  {
    q: "What is TalentVerx?",
    a: "TalentVerx is an all-in-one HR management platform that brings employee management, attendance, time off, payroll information, discussions and reporting together in one workspace.",
  },
  {
    q: "What HR processes can TalentVerx manage?",
    a: "TalentVerx covers employee records and departments, attendance and presence, time-off requests and approvals, payroll-related information, workplace discussions and HR reports.",
  },
  {
    q: "Can employees manage their own time-off requests?",
    a: "Yes. Employees can submit time-off requests themselves, and managers can review and approve them directly in the platform.",
  },
  {
    q: "Can managers track attendance?",
    a: "Yes. Attendance and presence information is centralized, so managers can see who's working and review working hours in one place.",
  },
  {
    q: "Does TalentVerx support payroll management?",
    a: "TalentVerx centralizes payroll-related employee information, making it easier to organize and prepare payroll. It complements your existing payroll process rather than replacing it.",
  },
  {
    q: "Can TalentVerx scale with growing teams?",
    a: "TalentVerx is designed to support teams as they grow — from a small company to a larger workforce — with consistent processes in a single platform.",
  },
  {
    q: "Can I request a product demo?",
    a: "Absolutely. Use the Request a Demo button on this page and our team will get in touch to walk you through the platform.",
  },
];

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
  const [openIndex, setOpenIndex] = useState(0);

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

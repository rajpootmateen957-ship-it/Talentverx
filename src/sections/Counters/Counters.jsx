import { useRef } from "react";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { COUNTERS as DATA } from "../../data/data.jsx";
import "./Counters.css";

function Counter({ target, suffix }) {
  const numberRef = useRef(null);

  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) {
      if (numberRef.current) numberRef.current.textContent = target.toLocaleString();
      return;
    }

    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: ".counters", start: "top 80%" },
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.round(counter.value).toLocaleString();
        }
      },
    });
  });

  return (
    <span ref={scopeRef}>
      <span ref={numberRef} className="counters__value">
        0
      </span>
      <span className="counters__suffix">{suffix}</span>
    </span>
  );
}

function Counters() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".counters__item", {
      opacity: 0,
      y: 26,
      duration: 0.6,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: { trigger: ".counters", start: "top 85%" },
    });
  });

  return (
    <section className="counters tv-section" id="counters" ref={scopeRef}>
      <div className="tv-container">
        <div className="counters__panel">
          {DATA.map(({ icon: Icon, value, suffix, label }) => (
            <div className="counters__item" key={label}>
              <span className="counters__icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <Counter target={value} suffix={suffix} />
              <p className="counters__label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counters;

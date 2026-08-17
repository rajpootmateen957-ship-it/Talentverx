import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { TESTIMONIALS } from "../../data/data.jsx";
import "./Testimonials.css";

function getCompanyName(logoPath) {
  if (!logoPath) return "";
  const parts = logoPath.split("/");
  const file = parts[parts.length - 1];
  const name = file.split(".")[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".testi__head", {
      opacity: 0,
      y: 22,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: { trigger: ".testi", start: "top 85%" },
    });
    gsap.from(".testi__slider-container", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".testi", start: "top 75%" },
    });
  });

  const t = TESTIMONIALS[activeIndex];
  const companyName = getCompanyName(t.logo);

  return (
    <section className="testi tv-section tv-section--tinted" id="testimonials" ref={scopeRef}>
      <div className="tv-container testi__container">
        <div className="tv-section-head testi__head">
          <h2 className="tv-heading-lg font-display">Loved by teams worldwide</h2>
          <p>
            Real results from teams who replaced their fragmented HR stack with TalentVerx.
          </p>
        </div>

        <div className="testi__slider-container">
          <div className="testi__card-wrapper">
            <div className="testi__card" key={activeIndex}>
              <div className="testi__quote-icon-wrap">
                <Quote size={48} className="testi__quote-icon" aria-hidden="true" />
              </div>

              <p className="testi__quote-text">
                “{t.quote}”
              </p>

              <div className="testi__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="testi__star" aria-hidden="true" />
                ))}
              </div>

              <div className="testi__avatar-wrap" aria-hidden="true">
                <img src={t.avatar} alt={t.name} className="testi__avatar-img" loading="lazy" />
              </div>

              <h3 className="testi__author-name">{t.name}</h3>
              <p className="testi__author-role">
                {t.role} {companyName ? `· ${companyName}` : ""}
              </p>
            </div>
          </div>

          <div className="testi__controls">
            <button
              type="button"
              className="testi__control-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className="testi__dots" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  className={`testi__dot ${idx === activeIndex ? "is-active" : ""}`}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="testi__control-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

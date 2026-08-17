import { ArrowRight } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { goToSection } from "../../lib/scroll.js";
import { FEATURES } from "../../data/data.jsx";
import "./Features.css";

function TileVisual({ kind }) {
  if (kind === "employees") {
    return (
      <div className="bento__table" aria-hidden="true">
        <div className="bento__table-row">
          <span className="bento__avatar" style={{ background: "linear-gradient(135deg,#123e9e,#1e5fe8)" }}>AK</span>
          <span className="bento__table-name">Aisha Khan</span>
          <span className="bento__table-dept">Design</span>
          <span className="bento__tag is-teal">Active</span>
        </div>
        <div className="bento__table-row">
          <span className="bento__avatar" style={{ background: "linear-gradient(135deg,#0e7490,#19c6e8)" }}>DR</span>
          <span className="bento__table-name">Daniel Reyes</span>
          <span className="bento__table-dept">Engineering</span>
          <span className="bento__tag is-blue">Active</span>
        </div>
        <div className="bento__table-row">
          <span className="bento__avatar" style={{ background: "linear-gradient(135deg,#0f766e,#12b8a6)" }}>SM</span>
          <span className="bento__table-name">Sara Malik</span>
          <span className="bento__table-dept">Marketing</span>
          <span className="bento__tag is-amber">On leave</span>
        </div>
      </div>
    );
  }

  if (kind === "attendance") {
    return (
      <div className="bento__minibars" aria-hidden="true">
        {[64, 82, 58, 90, 74, 95].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  }

  if (kind === "timeoff") {
    return (
      <div className="bento__mini-list" aria-hidden="true">
        <span className="bento__mini-chip">Annual · 5 days</span>
        <span className="bento__mini-chip is-muted">Sick · 2 days</span>
        <span className="bento__mini-chip is-muted">Personal · 1 day</span>
      </div>
    );
  }

  if (kind === "payroll") {
    return (
      <div className="bento__payroll" aria-hidden="true">
        <span>$148,240</span>
        <div className="bento__payroll-row">
          <i />
          <i />
          <i />
          <i />
          <i className="is-strong" />
        </div>
      </div>
    );
  }

  if (kind === "discussions") {
    return (
      <div className="bento__chat" aria-hidden="true">
        <span className="bento__bubble is-in">Payroll cutoff is Friday, everyone.</span>
        <span className="bento__bubble is-out">Noted. Leave requests due by Thursday?</span>
        <span className="bento__bubble is-in">Exactly. Nice.</span>
      </div>
    );
  }

  return (
    <div className="bento__chart" aria-hidden="true">
      <div className="bento__chart-row">
        <span className="bento__chart-label">Attendance</span>
        <div className="bento__chart-bars">
          {[70, 85, 60, 92, 78].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="bento__chart-row">
        <span className="bento__chart-label">Leave</span>
        <div className="bento__chart-bars">
          {[40, 30, 55, 25, 45].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Features() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".bento__tile", {
      opacity: 0,
      y: 32,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".bento", start: "top 82%" },
    });
  });

  return (
    <section
      className="features tv-section tv-section--tinted"
      id="features"
      ref={scopeRef}
    >
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">All-in-one platform</span>
          <h2 className="tv-heading-lg">Everything HR. One powerful platform.</h2>
          <p>
            Bring your essential HR operations together in one centralized
            workspace designed to make everyday people management simpler,
            faster and more organized.
          </p>
        </div>

        <div className="bento">
          {FEATURES.map(({ icon: Icon, title, text, size, visual }) => (
            <article
              className={`tv-card bento__tile bento__tile--${size}`}
              key={title}
            >
              <div className="bento__tile-head">
                <span className="tv-icon-badge">
                  <Icon size={20} aria-hidden="true" />
                </span>
              </div>
              <h3 className="bento__tile-title">{title}</h3>
              <p className="bento__tile-text">{text}</p>
              <div className="bento__tile-visual">
                <TileVisual kind={visual} />
              </div>
            </article>
          ))}
        </div>

        <div className="features__foot">
          <a
            href="#competitors"
            className="tv-btn tv-btn--secondary"
            onClick={(e) => goToSection(e, "competitors")}
          >
            Compare with other platforms
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;

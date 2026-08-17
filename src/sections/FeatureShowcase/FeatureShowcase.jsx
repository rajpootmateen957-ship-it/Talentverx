import {
  ArrowRight,
  MoreHorizontal,
  Search,
  UserRound,
  CheckCircle2,
  XCircle,
} from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { goToSection } from "../../lib/scroll.js";
import {
  FS_FEATURES as FEATURES,
  FS_EMPLOYEE_ROWS,
  FS_ATTENDANCE_ROWS,
  FS_TIMEOFF_REQUESTS,
  FS_PAYROLL_ROWS,
  FS_CHAT_MESSAGES,
  FS_CHARTS,
  FS_REPORT_CHIPS,
  FS_ATTENDANCE_FOOT,
} from "../../data/data.jsx";
import "./FeatureShowcase.css";

function MockupFrame({ title, children }) {
  return (
    <div className="fs-mockup">
      <div className="fs-mockup__bar">
        <div className="fs-mockup__title">
          <span className="fs-mockup__glyph" aria-hidden="true" />
          <span>{title}</span>
        </div>
        <div className="fs-mockup__search" aria-hidden="true">
          <Search size={12} />
          Search
        </div>
        <MoreHorizontal size={16} className="fs-mockup__more" aria-hidden="true" />
      </div>
      <div className="fs-mockup__body">{children}</div>
    </div>
  );
}

function MockupContent({ kind }) {
  if (kind === "employees") {
    return (
      <div className="fs-table">
        {FS_EMPLOYEE_ROWS.map((row) => (
          <div className="fs-table__row" key={row.name}>
            <span className="fs-avatar" style={{ background: row.color }}>{row.initials}</span>
            <span className="fs-table__name">{row.name}</span>
            <span className="fs-table__dept">{row.dept}</span>
            <span className={`fs-tag is-${row.tone}`}>{row.status}</span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "attendance") {
    return (
      <div className="fs-attendance">
        {FS_ATTENDANCE_ROWS.map((row) => (
          <div className="fs-attendance__row" key={row.name}>
            <div className="fs-attendance__meta">
              <strong>{row.name}</strong>
              <span>{row.hours} avg. today</span>
            </div>
            <span className={`fs-tag is-${row.tone}`}>{row.present} present</span>
          </div>
        ))}
        <div className="fs-attendance__foot">
          <span>{FS_ATTENDANCE_FOOT.label}</span>
          <strong>{FS_ATTENDANCE_FOOT.value}</strong>
        </div>
      </div>
    );
  }

  if (kind === "timeoff") {
    return (
      <div className="fs-timeoff">
        {FS_TIMEOFF_REQUESTS.map((r) => (
          <div className="fs-timeoff__card" key={r.name}>
            <div className="fs-timeoff__meta">
              <span className={`fs-tag is-${r.tone}`}>{r.type}</span>
              <strong>{r.name}</strong>
            </div>
            <div className="fs-timeoff__actions" aria-hidden="true">
              <span className="fs-timeoff__approve"><CheckCircle2 size={14} /></span>
              <span className="fs-timeoff__decline"><XCircle size={14} /></span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "payroll") {
    return (
      <div className="fs-table">
        {FS_PAYROLL_ROWS.map((row) => (
          <div className="fs-table__row" key={row.name}>
            <span className="fs-avatar fs-avatar--plain"><UserRound size={13} /></span>
            <span className="fs-table__name">{row.name}</span>
            <span className="fs-table__dept">{row.dept}</span>
            <span className="fs-table__amount">{row.amount}</span>
            <span className={`fs-tag is-${row.tone}`}>{row.status}</span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "discussions") {
    return (
      <div className="fs-chat">
        {FS_CHAT_MESSAGES.map((msg) => (
          <div className={`fs-chat__msg is-${msg.side}`} key={msg.name}>
            {msg.side === "in" ? (
              <span className="fs-chat__avatar" style={{ background: msg.color }}>{msg.initials}</span>
            ) : null}
            <div>
              <strong>{msg.name}</strong>
              <p>{msg.text}</p>
            </div>
            {msg.side === "out" ? (
              <span className="fs-chat__avatar" style={{ background: msg.color }}>{msg.initials}</span>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="fs-reports">
      <div className="fs-reports__chips">
        {FS_REPORT_CHIPS.map((chip, i) => (
          <span key={chip} className={`fs-reports__chip ${i === 0 ? "is-strong" : ""}`}>{chip}</span>
        ))}
      </div>
      <div className="fs-reports__chart">
        <div className="fs-reports__legend">
          <span><i className="is-blue" />{FS_CHARTS[0].label}</span>
          <span><i className="is-cyan" />{FS_CHARTS[1].label}</span>
        </div>
        <div className="fs-reports__bars">
          <div className="fs-reports__group">
            {FS_CHARTS[0].bars.map((h, i) => <i key={i} className="is-blue" style={{ height: `${h}%` }} />)}
          </div>
          <div className="fs-reports__group">
            {FS_CHARTS[1].bars.map((h, i) => <i key={i} className="is-cyan" style={{ height: `${h}%` }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureRow({ feature }) {
  const Icon = feature.icon;
  return (
    <div className="fs-row" id={feature.id}>
      <div className="fs-row__content">
        <span className="tv-eyebrow">
          <Icon size={14} aria-hidden="true" />
          {feature.category}
        </span>
        <h3 className="tv-heading-lg fs-row__title">{feature.title}</h3>
        <p className="fs-row__text">{feature.text}</p>
        <ul className="fs-row__benefits">
          {feature.benefits.map(({ icon: BIcon, text }) => (
            <li key={text}>
              <span className="fs-row__check">
                <BIcon size={14} aria-hidden="true" />
              </span>
              {text}
            </li>
          ))}
        </ul>
        <a
          href="#demo"
          className="tv-btn tv-btn--secondary"
          onClick={(e) => goToSection(e, "demo")}
        >
          Learn More
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="fs-row__visual">
        <MockupFrame title={feature.category}>
          <MockupContent kind={feature.mockup} />
        </MockupFrame>
      </div>
    </div>
  );
}

function FeatureShowcase() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    document.querySelectorAll(".fs-row").forEach((row, i) => {
      const fromLeft = i % 2 === 0;
      gsap.from(row.querySelector(".fs-row__content"), {
        opacity: 0,
        x: fromLeft ? -40 : 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: row, start: "top 78%" },
      });
      gsap.from(row.querySelector(".fs-mockup"), {
        opacity: 0,
        x: fromLeft ? 50 : -50,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: row, start: "top 78%" },
      });
      gsap.from(row.querySelectorAll(".fs-table__row, .fs-attendance__row, .fs-timeoff__card, .fs-chat__msg, .fs-reports__chips, .fs-reports__bars > *"), {
        opacity: 0,
        y: 14,
        stagger: 0.07,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: { trigger: row, start: "top 70%" },
      });
    });
  });

  return (
    <section className="fs tv-section" id="solutions" ref={scopeRef}>
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Solutions</span>
          <h2 className="tv-heading-lg">Everything your HR team needs.</h2>
          <p>
            Six focused modules that work together, so your people operations
            run smoothly from hiring to payroll.
          </p>
        </div>

        <div className="fs__list">
          {FEATURES.map((feature) => (
            <FeatureRow key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;

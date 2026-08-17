import {
  ChevronDown,
  Users,
  UserCheck,
  CalendarOff,
  Inbox,
  ArrowUpRight,
  CheckCircle2,
  UserPlus,
  WalletCards,
  MessageCircle,
} from "../../components/icons/index.js";
import { DemoButton, ExploreButton } from "../../components/buttons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { goToSection } from "../../lib/scroll.js";
import "./Hero.css";

const STATS = [
  { icon: Users, label: "Total Employees", value: 128, delta: "+6 this month", tone: "blue" },
  { icon: UserCheck, label: "Present Today", value: 104, delta: "81% of team", tone: "teal" },
  { icon: CalendarOff, label: "On Leave", value: 6, delta: "2 annual · 4 sick", tone: "amber" },
  { icon: Inbox, label: "Pending Requests", value: 12, delta: "7 leave · 5 hires", tone: "cyan" },
];

const WEEK = [
  { day: "Mon", value: 118 },
  { day: "Tue", value: 124 },
  { day: "Wed", value: 121 },
  { day: "Thu", value: 116 },
  { day: "Fri", value: 119 },
  { day: "Sat", value: 32 },
  { day: "Sun", value: 0 },
];

const LEAVES = [
  { label: "Annual leave", used: 14, total: 20 },
  { label: "Sick leave", used: 3, total: 8 },
  { label: "Personal leave", used: 1, total: 5 },
];

const ACTIVITY = [
  {
    icon: CalendarOff,
    text: "Aisha Khan submitted time-off",
    time: "2m ago",
  },
  {
    icon: UserPlus,
    text: "Daniel Reyes added to Engineering",
    time: "1h ago",
  },
  {
    icon: WalletCards,
    text: "June payroll draft completed",
    time: "3h ago",
  },
];

function DashboardMockup() {
  return (
    <div className="hero-dashboard">
      <div className="hero-dashboard__chrome">
        <span className="hero-dashboard__dot" />
        <span className="hero-dashboard__dot" />
        <span className="hero-dashboard__dot" />
        <span className="hero-dashboard__url">app.talentverx.com</span>
      </div>

      <div className="hero-dashboard__body">
        <div className="hero-dashboard__top">
          <div>
            <h3>HR Overview</h3>
            <p>Friday, August 14 · Weekly summary</p>
          </div>
          <div className="hero-dashboard__top-actions">
            <div className="hero-dashboard__avatars" aria-hidden="true">
              <span style={{ background: "linear-gradient(135deg,#123e9e,#1e5fe8)" }}>AK</span>
              <span style={{ background: "linear-gradient(135deg,#0e7490,#19c6e8)" }}>DR</span>
              <span style={{ background: "linear-gradient(135deg,#0f766e,#12b8a6)" }}>SM</span>
            </div>
            <button type="button" className="hero-dashboard__add-btn">
              <UserPlus size={13} aria-hidden="true" />
              Add Employee
            </button>
          </div>
        </div>

        <div className="hero-dashboard__stats">
          {STATS.map(({ icon: Icon, label, value, delta, tone }) => (
            <div className="hero-dashboard__stat" key={label}>
              <span className={`hero-dashboard__stat-icon is-${tone}`}>
                <Icon size={15} aria-hidden="true" />
              </span>
              <div>
                <p>{label}</p>
                <strong className="hero-dashboard__stat-value">{value}</strong>
                <small>{delta}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-dashboard__grid">
          <div className="hero-dashboard__panel hero-dashboard__chart">
            <div className="hero-dashboard__panel-head">
              <h4>Attendance Overview</h4>
              <span className="hero-dashboard__chip">This week</span>
            </div>
            <div className="hero-dashboard__bars" aria-hidden="true">
              {WEEK.map(({ day, value }) => (
                <div className="hero-dashboard__bar-col" key={day}>
                  <div
                    className="hero-dashboard__bar"
                    style={{ height: `${value ? Math.max(value / 1.3, 8) : 3}%` }}
                  >
                    {value > 0 && (
                      <span className="hero-dashboard__bar-value">{value}</span>
                    )}
                  </div>
                  <small>{day}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-dashboard__panel hero-dashboard__leave">
            <div className="hero-dashboard__panel-head">
              <h4>Leave Overview</h4>
              <span className="hero-dashboard__chip">2026</span>
            </div>
            {LEAVES.map(({ label, used, total }) => (
              <div className="hero-dashboard__leave-row" key={label}>
                <div className="hero-dashboard__leave-meta">
                  <span>{label}</span>
                  <small>
                    {used}/{total} days
                  </small>
                </div>
                <div className="hero-dashboard__leave-track">
                  <span
                    style={{
                      width: `${Math.round((used / total) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="hero-dashboard__leave-foot">
              <span>Avg. approval time</span>
              <strong>1.4 days</strong>
            </div>
          </div>

          <div className="hero-dashboard__panel hero-dashboard__payroll">
            <div className="hero-dashboard__panel-head">
              <h4>Payroll Summary</h4>
              <span className="hero-dashboard__chip">Monthly</span>
            </div>
            <div className="hero-dashboard__payroll-value">
              <strong>$148,240</strong>
              <span>
                <ArrowUpRight size={13} aria-hidden="true" /> 4.2% vs last month
              </span>
            </div>
            <div className="hero-dashboard__sparkline" aria-hidden="true">
              {[42, 55, 48, 66, 60, 78, 72, 88, 82, 95].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className="hero-dashboard__panel hero-dashboard__activity">
            <div className="hero-dashboard__panel-head">
              <h4>Recent Activity</h4>
              <span className="hero-dashboard__chip">Live</span>
            </div>
            <ul>
              {ACTIVITY.map(({ icon: Icon, text, time }) => (
                <li key={text}>
                  <span className="hero-dashboard__activity-icon">
                    <Icon size={14} aria-hidden="true" />
                  </span>
                  <div>
                    <p>{text}</p>
                    <small>{time}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero__eyebrow", { y: 20, opacity: 0, duration: 0.5 })
      .from(
        ".hero__title-line",
        { y: 34, opacity: 0, duration: 0.7, stagger: 0.12 },
        "-=0.3"
      )
      .from(".hero__subtitle", { y: 20, opacity: 0, duration: 0.55 }, "-=0.35")
      .from(
        ".hero__ctas > *",
        { y: 18, opacity: 0, duration: 0.5, stagger: 0.1 },
        "-=0.35"
      )
      .from(".hero__points > *", { opacity: 0, y: 12, stagger: 0.08, duration: 0.4 }, "-=0.3")
      .from(
        ".hero__visual",
        { opacity: 0, y: 40, scale: 0.96, duration: 0.9 },
        "-=0.9"
      )
      .from(
        ".hero-dashboard__stat, .hero-dashboard__panel",
        { y: 16, opacity: 0, duration: 0.45, stagger: 0.06 },
        "-=0.5"
      )
      .from(".hero-dashboard__bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.5,
        stagger: 0.04,
        ease: "power2.out",
      })
      .from(".hero__float", { y: 14, opacity: 0, stagger: 0.15, duration: 0.5 }, "-=0.4");

    gsap.to(".hero__visual", {
      y: -14,
      duration: 3.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".hero__float--one", {
      y: -10,
      duration: 2.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".hero__float--two", {
      y: -8,
      duration: 3.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".hero__blob--one", {
      x: 24,
      y: -18,
      duration: 6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".hero__blob--two", {
      x: -20,
      y: 16,
      duration: 7,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <section className="hero" id="home" ref={scopeRef}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--one" />
        <div className="hero__blob hero__blob--two" />
        <div className="hero__grid" />
      </div>

      <div className="tv-container hero__inner">
        <div className="hero__content">
          <span className="tv-eyebrow hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            All-in-one HR management
          </span>

          <h1 className="tv-heading-xl hero__title">
            <span className="hero__title-line">Simplify HR.</span>
            <span className="hero__title-line">Empower people.</span>
            <span className="hero__title-line tv-gradient-text">Grow faster.</span>
          </h1>

          <p className="hero__subtitle">
            TalentVerx is an all-in-one HRM platform designed to simplify employee
            management, attendance, time off, payroll, workplace communication and
            everyday HR operations — all from one powerful workspace.
          </p>

          <div className="hero__ctas">
            <DemoButton
              size="lg"
              iconSize={18}
              onClick={(e) => goToSection(e, "demo")}
            />
            <ExploreButton
              size="lg"
              onClick={(e) => goToSection(e, "features")}
            />
          </div>

          <ul className="hero__points" aria-label="Platform highlights">
            {["Employee Management", "Attendance & Time Off", "Payroll", "Reports"].map(
              (point) => (
                <li key={point}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {point}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="hero__visual">
          <DashboardMockup />

          <div className="hero__float hero__float--one" aria-hidden="true">
            <span className="hero__float-icon">
              <CheckCircle2 size={16} />
            </span>
            <div>
              <strong>Leave approved</strong>
              <small>Annual leave · 5 days</small>
            </div>
          </div>

          <div className="hero__float hero__float--two" aria-hidden="true">
            <span className="hero__float-icon">
              <MessageCircle size={16} />
            </span>
            <div>
              <strong>3 new discussions</strong>
              <small>Product team · just now</small>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#trust"
        className="hero__scroll"
        onClick={(e) => goToSection(e, "trust")}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;

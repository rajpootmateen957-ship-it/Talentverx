import {
  Users,
  CalendarDays,
  WalletCards,
  BarChart3,
  MessageCircle,
  Settings,
  LayoutDashboard,
  Bell,
  Download,
  TrendingUp,
  CalendarCheck2,
} from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import "./DashboardPreview.css";

const SIDEBAR = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Users, label: "Employees" },
  { icon: CalendarDays, label: "Time Off" },
  { icon: WalletCards, label: "Payroll" },
  { icon: MessageCircle, label: "Discussions" },
  { icon: BarChart3, label: "Reports" },
];

const STATS = [
  { label: "Total Employees", value: 128, delta: "+6 this month" },
  { label: "Present Today", value: 104, delta: "81% of team" },
  { label: "On Leave", value: 6, delta: "4 annual · 2 sick" },
  { label: "Pending Requests", value: 12, delta: "across 3 modules" },
];

const WEEK = [
  { day: "Mon", present: 118, leave: 4 },
  { day: "Tue", present: 124, leave: 3 },
  { day: "Wed", present: 121, leave: 5 },
  { day: "Thu", present: 116, leave: 6 },
  { day: "Fri", present: 119, leave: 4 },
];

const TABLE_ROWS = [
  { initials: "AK", name: "Aisha Khan", dept: "Product Design", role: "Design Lead", status: "Active", color: "linear-gradient(135deg,#123e9e,#1e5fe8)", tone: "teal" },
  { initials: "DR", name: "Daniel Reyes", dept: "Engineering", role: "Frontend Engineer", status: "Active", color: "linear-gradient(135deg,#0e7490,#19c6e8)", tone: "teal" },
  { initials: "SM", name: "Sara Malik", dept: "Marketing", role: "Growth Manager", status: "On leave", color: "linear-gradient(135deg,#0f766e,#12b8a6)", tone: "amber" },
  { initials: "OJ", name: "Omar Javed", dept: "Sales", role: "Account Executive", status: "Active", color: "linear-gradient(135deg,#4f46e5,#818cf8)", tone: "teal" },
  { initials: "LF", name: "Lena Fischer", dept: "People Ops", role: "HR Generalist", status: "Active", color: "linear-gradient(135deg,#b45309,#f59e0b)", tone: "teal" },
];

function DashboardPreview() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    gsap.from(".dp-frame", {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".dp", start: "top 80%" },
    });

    gsap.from(".dp-stat, .dp-panel, .dp-table__row", {
      opacity: 0,
      y: 18,
      stagger: 0.06,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: { trigger: ".dp-frame", start: "top 70%" },
    });

    gsap.from(".dp-bars i", {
      scaleY: 0,
      transformOrigin: "bottom",
      stagger: 0.05,
      duration: 0.55,
      ease: "power2.out",
      scrollTrigger: { trigger: ".dp-frame", start: "top 65%" },
    });

    gsap.from(".dp-float", {
      opacity: 0,
      scale: 0.9,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      ease: "back.out(1.6)",
      scrollTrigger: { trigger: ".dp-frame", start: "top 55%" },
    });

    gsap.to(".dp-frame", {
      y: -18,
      ease: "sine.inOut",
      duration: 4,
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".dp-float--one", {
      y: -8,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".dp-float--two", {
      y: -6,
      duration: 3.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".dp__glow", {
      yPercent: 14,
      ease: "none",
      scrollTrigger: {
        trigger: ".dp",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  });

  return (
    <section className="dp tv-section tv-section--tinted" id="dashboard" ref={scopeRef}>
      <div className="tv-container dp__container">
        <div className="dp__glow" aria-hidden="true" />

        <div className="tv-section-head">
          <span className="tv-eyebrow">Dashboard preview</span>
          <h2 className="tv-heading-lg">A clearer view of your entire workforce.</h2>
          <p>
            Attendance, leave, payroll and people data — organized in one
            dashboard so nothing gets missed.
          </p>
        </div>

        <div className="dp-stage">
          <div className="dp-frame">
            <div className="dp-frame__chrome">
              <div className="dp-frame__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="dp-frame__url">app.talentverx.com/dashboard</span>
            </div>

            <div className="dp-frame__layout">
              <aside className="dp-sidebar" aria-hidden="true">
                <span className="dp-sidebar__logo">TV</span>
                <nav>
                  {SIDEBAR.map(({ icon: Icon, label, active }) => (
                    <span
                      key={label}
                      className={`dp-sidebar__item ${active ? "is-active" : ""}`}
                    >
                      <Icon size={15} />
                      <span>{label}</span>
                    </span>
                  ))}
                </nav>
                <span className="dp-sidebar__settings">
                  <Settings size={15} />
                  <span>Settings</span>
                </span>
              </aside>

              <div className="dp-main">
                <div className="dp-main__head">
                  <div>
                    <h3>Workforce Overview</h3>
                    <p>August 2026 · All departments</p>
                  </div>
                  <div className="dp-main__head-actions">
                    <span className="dp-icon-btn" aria-hidden="true">
                      <Bell size={14} />
                    </span>
                    <span className="dp-export-btn" aria-hidden="true">
                      <Download size={13} />
                      Export
                    </span>
                  </div>
                </div>

                <div className="dp-stats">
                  {STATS.map((stat) => (
                    <div className="dp-stat" key={stat.label}>
                      <span className="dp-stat__label">{stat.label}</span>
                      <strong className="dp-stat__value" data-count={stat.value}>
                        {stat.value}
                      </strong>
                      <span className="dp-stat__delta">
                        <TrendingUp size={11} aria-hidden="true" />
                        {stat.delta}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="dp-panels">
                  <div className="dp-panel dp-panel--chart">
                    <div className="dp-panel__head">
                      <h4>Attendance this week</h4>
                      <span className="dp-panel__chip">Present vs leave</span>
                    </div>
                    <div className="dp-bars" aria-hidden="true">
                      {WEEK.map(({ day, present, leave }) => (
                        <div className="dp-bars__col" key={day}>
                          <div className="dp-bars__track">
                            <i className="is-leave" style={{ height: `${leave * 3.2}%` }} />
                            <i className="is-present" style={{ height: `${present * 1.05}%` }} />
                          </div>
                          <span>{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dp-panel dp-panel--leave">
                    <div className="dp-panel__head">
                      <h4>Leave utilization</h4>
                      <span className="dp-panel__chip">2026</span>
                    </div>
                    {[
                      { label: "Annual", used: 14, total: 20 },
                      { label: "Sick", used: 3, total: 8 },
                      { label: "Personal", used: 1, total: 5 },
                    ].map(({ label, used, total }) => (
                      <div className="dp-leave" key={label}>
                        <div className="dp-leave__meta">
                          <span>{label}</span>
                          <small>
                            {used}/{total}
                          </small>
                        </div>
                        <div className="dp-leave__track">
                          <span style={{ width: `${(used / total) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                    <div className="dp-panel__foot">
                      <CalendarCheck2 size={13} aria-hidden="true" />
                      Approvals avg. 1.4 days
                    </div>
                  </div>
                </div>

                <div className="dp-table">
                  <div className="dp-table__head">
                    <h4>Employees</h4>
                    <span className="dp-panel__chip">128 total</span>
                  </div>
                  {TABLE_ROWS.map((row) => (
                    <div className="dp-table__row" key={row.name}>
                      <span className="dp-avatar" style={{ background: row.color }}>
                        {row.initials}
                      </span>
                      <span className="dp-table__name">{row.name}</span>
                      <span className="dp-table__dept">{row.dept}</span>
                      <span className="dp-table__role">{row.role}</span>
                      <span className={`dp-tag is-${row.tone}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="dp-float dp-float--one" aria-hidden="true">
            <span className="dp-float__icon">
              <WalletCards size={16} />
            </span>
            <div>
              <strong>Payroll draft ready</strong>
              <small>June cycle · 128 employees</small>
            </div>
          </div>

          <div className="dp-float dp-float--two" aria-hidden="true">
            <span className="dp-float__icon">
              <CalendarCheck2 size={16} />
            </span>
            <div>
              <strong>3 leave approvals</strong>
              <small>Waiting for your review</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;

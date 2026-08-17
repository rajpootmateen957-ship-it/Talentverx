import {
  Settings,
  Bell,
  Download,
  TrendingUp,
  CalendarCheck2,
  WalletCards,
} from "../../components/icons/index.js";
import { useGsapContext } from "../../lib/gsap.js";
import dashboardPreviewSetup from "../../lib/animations.js";
import {
  DP_SIDEBAR as SIDEBAR,
  DP_STATS as STATS,
  DP_WEEK as WEEK,
  DP_TABLE_ROWS as TABLE_ROWS,
  DP_LEAVES as LEAVES,
} from "../../data/data.jsx";
import "./DashboardPreview.css";

function DashboardPreview() {
  const scopeRef = useGsapContext(dashboardPreviewSetup);

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
                    {LEAVES.map(({ label, used, total }) => (
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

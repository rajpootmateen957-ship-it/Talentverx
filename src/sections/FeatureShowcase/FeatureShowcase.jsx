import {
  Users,
  Clock3,
  CalendarDays,
  WalletCards,
  MessageCircle,
  BarChart3,
  Check,
  ArrowRight,
  MoreHorizontal,
  Search,
  UserRound,
  CheckCircle2,
  XCircle,
} from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { goToSection } from "../../lib/scroll.js";
import "./FeatureShowcase.css";

const BENEFIT_CHECK = (text) => ({ icon: Check, text });

const FEATURES = [
  {
    id: "employee-management",
    category: "Employee Management",
    title: "Manage your people from one place.",
    text: "Manage employee profiles, departments, job information and important workforce data through a centralized HR workspace.",
    benefits: [
      BENEFIT_CHECK("Centralized employee information"),
      BENEFIT_CHECK("Organized workforce management"),
      BENEFIT_CHECK("Faster access to employee records"),
    ],
    icon: Users,
    mockup: "employees",
  },
  {
    id: "attendance",
    category: "Attendance & Presence",
    title: "Know who's working. Stay informed.",
    text: "Track employee attendance, working hours and daily presence with a centralized system.",
    benefits: [
      BENEFIT_CHECK("Simplify attendance tracking"),
      BENEFIT_CHECK("Improve workforce visibility"),
      BENEFIT_CHECK("Reduce manual record keeping"),
    ],
    icon: Clock3,
    mockup: "attendance",
  },
  {
    id: "time-off",
    category: "Time Off & Absence",
    title: "Make leave management simple.",
    text: "Employees can submit time-off requests while managers can review and manage them efficiently.",
    benefits: [
      BENEFIT_CHECK("Easier leave requests"),
      BENEFIT_CHECK("Faster approval workflows"),
      BENEFIT_CHECK("Clear leave visibility"),
    ],
    icon: CalendarDays,
    mockup: "timeoff",
  },
  {
    id: "payroll",
    category: "Payroll Management",
    title: "Make payroll easier to manage.",
    text: "Centralize payroll-related employee information and streamline payroll processes.",
    benefits: [
      BENEFIT_CHECK("Organized payroll information"),
      BENEFIT_CHECK("Less manual administration"),
      BENEFIT_CHECK("Better visibility into compensation"),
    ],
    icon: WalletCards,
    mockup: "payroll",
  },
  {
    id: "discussions",
    category: "Discussions",
    title: "Keep your teams connected.",
    text: "Make workplace communication easier with centralized discussions and team collaboration.",
    benefits: [
      BENEFIT_CHECK("Centralized communication"),
      BENEFIT_CHECK("Better team collaboration"),
      BENEFIT_CHECK("Easier workplace updates"),
    ],
    icon: MessageCircle,
    mockup: "discussions",
  },
  {
    id: "reports",
    category: "Reports & Analytics",
    title: "Turn HR data into better visibility.",
    text: "Give HR teams a clearer view of workforce information through useful reports and analytics.",
    benefits: [
      BENEFIT_CHECK("Workforce activity insights"),
      BENEFIT_CHECK("Attendance and leave reporting"),
      BENEFIT_CHECK("Payroll and headcount summaries"),
    ],
    icon: BarChart3,
    mockup: "reports",
  },
];

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
    const rows = [
      { initials: "AK", name: "Aisha Khan", dept: "Product Design", status: "Active", tone: "teal", color: "linear-gradient(135deg,#123e9e,#1e5fe8)" },
      { initials: "DR", name: "Daniel Reyes", dept: "Engineering", status: "Active", tone: "blue", color: "linear-gradient(135deg,#0e7490,#19c6e8)" },
      { initials: "SM", name: "Sara Malik", dept: "Marketing", status: "On leave", tone: "amber", color: "linear-gradient(135deg,#0f766e,#12b8a6)" },
      { initials: "OJ", name: "Omar Javed", dept: "Sales", status: "Active", tone: "blue", color: "linear-gradient(135deg,#4f46e5,#818cf8)" },
    ];
    return (
      <div className="fs-table">
        {rows.map((row) => (
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
    const rows = [
      { name: "Engineering", present: "34 / 38", hours: "7h 24m", tone: "teal" },
      { name: "Product Design", present: "12 / 14", hours: "7h 05m", tone: "teal" },
      { name: "Marketing", present: "9 / 11", hours: "6h 48m", tone: "blue" },
      { name: "Sales", present: "15 / 17", hours: "6h 30m", tone: "amber" },
    ];
    return (
      <div className="fs-attendance">
        {rows.map((row) => (
          <div className="fs-attendance__row" key={row.name}>
            <div className="fs-attendance__meta">
              <strong>{row.name}</strong>
              <span>{row.hours} avg. today</span>
            </div>
            <span className={`fs-tag is-${row.tone}`}>{row.present} present</span>
          </div>
        ))}
        <div className="fs-attendance__foot">
          <span>Team presence</span>
          <strong>81%</strong>
        </div>
      </div>
    );
  }

  if (kind === "timeoff") {
    const requests = [
      { name: "Aisha Khan", type: "Annual · 5 days", tone: "blue" },
      { name: "Omar Javed", type: "Sick · 2 days", tone: "amber" },
      { name: "Lena Fischer", type: "Personal · 1 day", tone: "cyan" },
    ];
    return (
      <div className="fs-timeoff">
        {requests.map((r) => (
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
    const rows = [
      { name: "Aisha Khan", dept: "Design", amount: "$4,820", status: "Processed", tone: "teal" },
      { name: "Daniel Reyes", dept: "Engineering", amount: "$6,150", status: "Processed", tone: "teal" },
      { name: "Sara Malik", dept: "Marketing", amount: "$4,395", status: "Pending", tone: "amber" },
      { name: "Omar Javed", dept: "Sales", amount: "$5,020", status: "Processed", tone: "teal" },
    ];
    return (
      <div className="fs-table">
        {rows.map((row) => (
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
        <div className="fs-chat__msg is-in">
          <span className="fs-chat__avatar" style={{ background: "linear-gradient(135deg,#123e9e,#1e5fe8)" }}>AK</span>
          <div>
            <strong>Aisha Khan</strong>
            <p>Reminder — time-off requests for next month close on Friday.</p>
          </div>
        </div>
        <div className="fs-chat__msg is-out">
          <div>
            <strong>Daniel Reyes</strong>
            <p>Thanks! Submitted mine this morning.</p>
          </div>
          <span className="fs-chat__avatar" style={{ background: "linear-gradient(135deg,#0e7490,#19c6e8)" }}>DR</span>
        </div>
        <div className="fs-chat__msg is-in">
          <span className="fs-chat__avatar" style={{ background: "linear-gradient(135deg,#0f766e,#12b8a6)" }}>SM</span>
          <div>
            <strong>Sara Malik</strong>
            <p>Same here. All three approvals pending with you, Aisha 🙂</p>
          </div>
        </div>
      </div>
    );
  }

  const charts = [
    { label: "Present employees", bars: [62, 78, 70, 90, 82, 96] },
    { label: "Leave days taken", bars: [30, 42, 36, 50, 44, 58] },
  ];
  return (
    <div className="fs-reports">
      <div className="fs-reports__chips">
        <span className="fs-reports__chip is-strong">Att. rate 92%</span>
        <span className="fs-reports__chip">12 open requests</span>
        <span className="fs-reports__chip">6 on leave</span>
      </div>
      <div className="fs-reports__chart">
        <div className="fs-reports__legend">
          <span><i className="is-blue" />Present</span>
          <span><i className="is-cyan" />Leave</span>
        </div>
        <div className="fs-reports__bars">
          <div className="fs-reports__group">
            {charts[0].bars.map((h, i) => <i key={i} className="is-blue" style={{ height: `${h}%` }} />)}
          </div>
          <div className="fs-reports__group">
            {charts[1].bars.map((h, i) => <i key={i} className="is-cyan" style={{ height: `${h}%` }} />)}
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

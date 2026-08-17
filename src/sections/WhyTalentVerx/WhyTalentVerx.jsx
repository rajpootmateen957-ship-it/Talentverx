import {
  Layers,
  MousePointerClick,
  ClipboardCheck,
  Eye,
  TrendingUp,
  UsersRound,
} from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import "./WhyTalentVerx.css";

const REASONS = [
  {
    icon: Layers,
    title: "One Centralized Platform",
    text: "Employee data, attendance, leave, payroll and communication live together in a single workspace.",
  },
  {
    icon: MousePointerClick,
    title: "Simple & Intuitive",
    text: "A clean interface your HR team and employees will actually want to use every day.",
  },
  {
    icon: ClipboardCheck,
    title: "Less Administrative Work",
    text: "Reduce repetitive data entry and manual tracking so HR can focus on people, not paperwork.",
  },
  {
    icon: Eye,
    title: "Better Workforce Visibility",
    text: "Attendance, leave and payroll information is organized and easy to review at a glance.",
  },
  {
    icon: TrendingUp,
    title: "Scalable HR Operations",
    text: "Built to support growing teams, from your first hire to hundreds of employees.",
  },
  {
    icon: UsersRound,
    title: "Connected Teams",
    text: "Managers and employees stay aligned with shared processes and clear communication.",
  },
];

function WhyTalentVerx() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".why__card", {
      opacity: 0,
      y: 28,
      duration: 0.55,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".why", start: "top 82%" },
    });
  });

  return (
    <section
      className="why tv-section tv-section--tinted"
      id="why-talentverx"
      ref={scopeRef}
    >
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Why TalentVerx</span>
          <h2 className="tv-heading-lg">Why teams choose TalentVerx</h2>
          <p>
            Purpose-built for HR teams that want less manual work and a clearer
            view of their people.
          </p>
        </div>

        <div className="why__grid">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <article className="tv-card why__card" key={title}>
              <span className="tv-icon-badge">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTalentVerx;

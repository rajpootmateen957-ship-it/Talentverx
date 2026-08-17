import { Timer, BadgeCheck, Eye, HeartHandshake } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import "./Benefits.css";

const BENEFITS = [
  {
    icon: Timer,
    title: "Save Time",
    text: "Reduce repetitive HR administration so your team can focus on strategic work.",
  },
  {
    icon: BadgeCheck,
    title: "Improve Accuracy",
    text: "Keep workforce information organized, consistent and up to date.",
  },
  {
    icon: Eye,
    title: "Increase Visibility",
    text: "Understand attendance, leave, payroll and workforce activity more clearly.",
  },
  {
    icon: HeartHandshake,
    title: "Improve Employee Experience",
    text: "Make everyday HR processes simpler for employees and managers alike.",
  },
];

const STATS = [
  { value: 6, suffix: "", label: "Core HR modules in one platform" },
  { value: 1, suffix: "", label: "Unified workspace for your team" },
  { value: 3, suffix: " steps", label: "From setup to daily operation" },
  { value: 24, suffix: "/7", label: "Self-service access for employees" },
];

function Benefits() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    gsap.from(".benefits__card", {
      opacity: 0,
      y: 30,
      duration: 0.55,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: { trigger: ".benefits", start: "top 82%" },
    });

    gsap.from(".benefits__stat-num [data-count]", {
      textContent: 0,
      duration: 1.2,
      snap: { textContent: 1 },
      ease: "power1.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".benefits__stats", start: "top 88%" },
    });
  });

  return (
    <section className="benefits tv-section" id="benefits" ref={scopeRef}>
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">Business value</span>
          <h2 className="tv-heading-lg">Less administration. More time for people.</h2>
          <p>
            TalentVerx helps HR teams shift their time from manual processes to
            the work that matters most.
          </p>
        </div>

        <div className="benefits__grid">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <article className="tv-card benefits__card" key={title}>
              <span className="benefits__icon">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3 className="tv-heading-md">{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="benefits__stats">
          {STATS.map(({ value, suffix, label }) => (
            <div className="benefits__stat" key={label}>
              <strong className="benefits__stat-num">
                <span className="tv-gradient-text" data-count={value}>
                  {value}
                </span>
                {suffix}
              </strong>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;

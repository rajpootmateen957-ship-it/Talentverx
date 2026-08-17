import { Building2, LayoutDashboard, TrendingUp } from "../../components/icons/index.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import "./HowItWorks.css";

const STEPS = [
  {
    number: "01",
    icon: Building2,
    title: "Set Up Your Organization",
    text: "Configure employees, departments and HR workflows to match how your company works.",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Manage Your Workforce",
    text: "Handle attendance, time off, payroll, communication and employee operations from one place.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Make Better Decisions",
    text: "Use centralized information and reports to gain better visibility into your workforce.",
  },
];

function HowItWorks() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;

    gsap.from(".how__step", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: { trigger: ".how", start: "top 80%" },
    });

    gsap.from(".how__line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.9,
      ease: "power2.inOut",
      scrollTrigger: { trigger: ".how", start: "top 75%" },
    });
  });

  return (
    <section className="how tv-section" id="how-it-works" ref={scopeRef}>
      <div className="tv-container">
        <div className="tv-section-head">
          <span className="tv-eyebrow">How it works</span>
          <h2 className="tv-heading-lg">Up and running in three steps.</h2>
          <p>
            Get your HR operations organized without a lengthy implementation
            process.
          </p>
        </div>

        <div className="how__grid">
          <span className="how__line" aria-hidden="true" />
          {STEPS.map(({ number, icon: Icon, title, text }) => (
            <article className="how__step" key={number}>
              <div className="how__step-top">
                <span className="how__number">{number}</span>
                <span className="how__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
              </div>
              <h3 className="tv-heading-md">{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

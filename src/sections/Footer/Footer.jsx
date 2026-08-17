import { ArrowRight } from "../../components/icons/index.js";
import { goToSection } from "../../lib/scroll.js";
import { useGsapContext, gsap, prefersReducedMotion } from "../../lib/gsap.js";
import { talentverxLogo, FOOTER_COLUMNS as COLUMNS, SOCIAL_LINKS } from "../../data/data.jsx";
import "./Footer.css";

function Footer() {
  const scopeRef = useGsapContext(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".footer__inner", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".footer", start: "top 92%" },
    });
  });

  return (
    <footer className="footer" ref={scopeRef}>
      <div className="tv-container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a
              href="#home"
              className="footer__logo-link"
              onClick={(e) => goToSection(e, "home")}
              aria-label="TalentVerx HRM home"
            >
              <img
                src={talentverxLogo}
                alt="TalentVerx logo"
                className="footer__logo"
                width="40"
                height="40"
              />
              <span className="footer__wordmark">
                Talent<span>Verx</span>
              </span>
            </a>
            <p>
              The all-in-one HRM platform for employee management, attendance,
              time off, payroll and communication.
            </p>
            <a
              href="#demo"
              className="footer__cta-link"
              onClick={(e) => goToSection(e, "demo")}
            >
              Get started with a demo
              <ArrowRight size={15} aria-hidden="true" />
            </a>

            <ul className="footer__social" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__columns">
            {COLUMNS.map(({ title, links }) => (
              <nav className="footer__col" key={title} aria-label={title}>
                <h3>{title}</h3>
                <ul>
                  {links.map(({ label, target }) => (
                    <li key={label}>
                      <a
                        href={`#${target}`}
                        onClick={(e) => goToSection(e, target)}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 TalentVerx. All rights reserved.</p>
          <p className="footer__note">An all-in-one HRM platform.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

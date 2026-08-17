import { useEffect, useRef, useState } from "react";
import { Menu, X } from "../../components/icons/index.js";
import { LoginButton, DemoButton } from "../../components/buttons/index.js";
import { talentverxLogo } from "../../assets/images/image.js";
import { goToSection, scrollToId } from "../../lib/scroll.js";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "Features", href: "features" },
  { label: "Solutions", href: "solutions" },
  { label: "Why TalentVerx", href: "why-talentverx" },
  { label: "Pricing", href: "pricing" },
  { label: "Resources", href: "faq" },
];

const SCROLL_THRESHOLD = 24;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", isMenuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e, id) => {
    closeMenu();
    goToSection(e, id);
  };

  const handleDemo = (e) => {
    closeMenu();
    scrollToId("demo");
    e.preventDefault();
  };

  return (
    <header
      className={`tv-navbar ${isScrolled ? "is-scrolled" : ""}`}
      ref={menuRef}
    >
      <div className="tv-navbar__inner tv-container">
        <a
          href="#home"
          className="tv-navbar__brand"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="TalentVerx HRM home"
        >
          <img
            src={talentverxLogo}
            alt="TalentVerx logo"
            className="tv-navbar__logo"
            width="44"
            height="44"
          />
          <span className="tv-navbar__wordmark">
            Talent<span>Verx</span>
          </span>
        </a>

        <nav className="tv-navbar__nav" aria-label="Primary">
          <ul className="tv-navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.href}`}
                  className="tv-navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="tv-navbar__actions">
          <LoginButton size="sm" />
          <DemoButton size="sm" onClick={handleDemo} />
        </div>

        <button
          type="button"
          className={`tv-navbar__toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="tv-mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="tv-mobile-menu"
        className={`tv-mobile-menu ${isMenuOpen ? "is-open" : ""}`}
      >
        <nav aria-label="Mobile primary">
          <ul className="tv-mobile-menu__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.href}`}
                  className="tv-mobile-menu__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="tv-mobile-menu__actions">
          <LoginButton variant="secondary" block onClick={closeMenu} />
          <DemoButton block onClick={handleDemo} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

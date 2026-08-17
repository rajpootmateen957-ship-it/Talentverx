import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGsapContext } from "../lib/gsap.js";
import { setupSectionStack } from "../lib/animations.js";
import Navbar from "../sections/Navbar/Navbar.jsx";
import Hero from "../sections/Hero/Hero.jsx";
import Logos from "../sections/Logos/Logos.jsx";
import Verified from "../sections/Verified/Verified.jsx";
import Counters from "../sections/Counters/Counters.jsx";
import Features from "../sections/Features/Features.jsx";
import Competitors from "../sections/Competitors/Competitors.jsx";
import Testimonials from "../sections/Testimonials/Testimonials.jsx";
import Pricing from "../sections/Pricing/Pricing.jsx";
import Faq from "../sections/Faq/Faq.jsx";
import Cta, { CtaBanner } from "../sections/Cta/Cta.jsx";
import Footer from "../sections/Footer/Footer.jsx";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [hash]);

  const mainRef = useGsapContext(() => {
    setupSectionStack(mainRef.current);
  });

  return (
    <>
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <Logos />
        <Verified />
        <Counters />
        <Features />
        <Competitors />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

export default Home;

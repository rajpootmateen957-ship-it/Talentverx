import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../sections/Navbar/Navbar.jsx";
import Hero from "../sections/Hero/Hero.jsx";
import Trust from "../sections/Trust/Trust.jsx";
import Problems from "../sections/Problems/Problems.jsx";
import Features from "../sections/Features/Features.jsx";
import FeatureShowcase from "../sections/FeatureShowcase/FeatureShowcase.jsx";
import WhyTalentVerx from "../sections/WhyTalentVerx/WhyTalentVerx.jsx";
import HowItWorks from "../sections/HowItWorks/HowItWorks.jsx";
import DashboardPreview from "../sections/DashboardPreview/DashboardPreview.jsx";
import Benefits from "../sections/Benefits/Benefits.jsx";
import Testimonials from "../sections/Testimonials/Testimonials.jsx";
import Pricing from "../sections/Pricing/Pricing.jsx";
import Faq from "../sections/Faq/Faq.jsx";
import Cta from "../sections/Cta/Cta.jsx";
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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Problems />
        <Features />
        <FeatureShowcase />
        <WhyTalentVerx />
        <HowItWorks />
        <DashboardPreview />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default Home;

import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsap.js";

export function dashboardPreviewSetup() {
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
}

export function setupSectionStack(main) {
  if (prefersReducedMotion() || !main) return;

  const mm = gsap.matchMedia(main);

  mm.add("(min-width: 769px)", () => {
    const END_ID = "get-started";

    const buildTriggers = () => {
      const sections = gsap.utils.toArray(main.querySelectorAll("section"));
      const endSection = sections.find((s) => s.id === END_ID);
      const stackable = sections
        .filter((s) => s.id !== "competitors" && s.id !== END_ID)
        .filter((s) => s.scrollHeight <= window.innerHeight + 2);

      return stackable
        .map((section, index) => {
          const next = stackable[index + 1] || endSection;
          if (!next) return null;
          return ScrollTrigger.create({
            trigger: section,
            start: "top top",
            endTrigger: next,
            end: "top top",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
          });
        })
        .filter(Boolean);
    };

    let triggers = buildTriggers();
    let resizeTimer;

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        triggers.forEach((t) => t.kill());
        triggers = buildTriggers();
        ScrollTrigger.refresh();
      }, 150);
    };

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
      triggers.forEach((t) => t.kill());
    };
  });
}

export default dashboardPreviewSetup;

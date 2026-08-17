import { prefersReducedMotion } from "./gsap.js";

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

export function goToSection(event, id) {
  event.preventDefault();
  scrollToId(id);
}

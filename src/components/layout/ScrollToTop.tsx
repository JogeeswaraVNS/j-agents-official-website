import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop & Global Scroll Reveal Orchestrator
 * ------------------------------------------------
 * 1. Automatically scrolls to top (0, 0) upon any page navigation or route change.
 * 2. Observes all elements marked with `.reveal-on-scroll` using an IntersectionObserver
 *    and reveals them with a smooth fade-in and slide-up transition when scrolled into view.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top immediately on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // 2. Set up scroll reveal observer
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

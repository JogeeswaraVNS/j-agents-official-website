import React, { createContext, useContext, useEffect, useRef, useState } from "react";

/**
 * Context to coordinate reveal animation state across child elements in a section.
 */
interface RevealContextValue {
  isRevealed: boolean;
  mounted: boolean;
  prefersReduced: boolean;
  registerItem: () => number;
}

const RevealContext = createContext<RevealContextValue | null>(null);

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  /**
   * When true, revelation triggers immediately on mount (for Hero section).
   * When false (default), triggers via IntersectionObserver when ~15% visible.
   */
  isHero?: boolean;
  /**
   * Threshold for IntersectionObserver (default 0.15 = 15%).
   */
  threshold?: number;
}

/**
 * RevealGroup
 * -----------
 * Wraps a section and manages observer / mount state.
 * Assigns sequential indices to child RevealItem components so they stagger in reading order.
 */
export function RevealGroup({
  children,
  className = "",
  isHero = false,
  threshold = 0.15,
}: RevealGroupProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const itemIndexCounter = useRef(0);

  // Reset counter on each render so children get stable sequential indices (0, 1, 2...)
  itemIndexCounter.current = 0;

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setPrefersReduced(true);
        setIsRevealed(true);
        setMounted(true);
        return;
      }
    }

    setMounted(true);

    // If hero section, trigger reveal on mount (requestAnimationFrame ensures initial hidden styles attach)
    if (isHero) {
      const raf = requestAnimationFrame(() => {
        setIsRevealed(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    // Scroll reveal using IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isHero, threshold]);

  const registerItem = () => {
    const idx = itemIndexCounter.current;
    itemIndexCounter.current += 1;
    return idx;
  };

  return (
    <RevealContext.Provider
      value={{
        isRevealed,
        mounted,
        prefersReduced,
        registerItem,
      }}
    >
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </RevealContext.Provider>
  );
}

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * Optional manual delay override in milliseconds. If omitted, calculated as order * staggerMs.
   */
  delay?: number;
  /**
   * Stagger delay between items in milliseconds.
   * Default: 100ms for hero, 80ms for scroll sections.
   */
  staggerMs?: number;
  /**
   * Duration in milliseconds (default: 700ms).
   */
  durationMs?: number;
}

/**
 * RevealItem
 * ----------
 * Animates text/button/card elements.
 * Moves up 24px and fades in using cubic-bezier(0.16, 1, 0.3, 1).
 * SSR / Static HTML safety: initial hidden state is applied ONLY after client mount (mounted === true).
 */
export function RevealItem({
  children,
  className = "",
  style = {},
  delay,
  staggerMs,
  durationMs = 700,
}: RevealItemProps) {
  const context = useContext(RevealContext);
  const index = context ? context.registerItem() : 0;

  // Reduced motion: render normally without transform or opacity transition
  if (context?.prefersReduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  // Before hydration / mounting (SSR / static prerender), render fully visible without hiding
  if (!context || !context.mounted) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const effectiveStagger = staggerMs !== undefined ? staggerMs : 80;
  const effectiveDelay = delay !== undefined ? delay : index * effectiveStagger;
  const isShown = context.isRevealed;

  const itemStyle: React.CSSProperties = {
    ...style,
    opacity: isShown ? 1 : 0,
    transform: isShown ? "translate3d(0, 0, 0)" : "translate3d(0, 24px, 0)",
    transitionProperty: "opacity, transform",
    transitionDuration: `${durationMs}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${effectiveDelay}ms`,
    willChange: isShown ? "auto" : "opacity, transform",
  };

  return (
    <div className={className} style={itemStyle}>
      {children}
    </div>
  );
}

interface RevealImageProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * For Hero: delay after image has loaded or mounted (default 0ms).
   * Text finishes or runs while image fades in over 1000ms.
   */
  delay?: number;
  durationMs?: number;
  /**
   * If provided, controls visibility (e.g. Hero image loaded trigger).
   */
  isLoaded?: boolean;
}

/**
 * RevealImage
 * -----------
 * Dedicated image reveal wrapper.
 * Fades in slowly (1000ms) with no movement / transform.
 */
export function RevealImage({
  children,
  className = "",
  style = {},
  delay = 0,
  durationMs = 1000,
  isLoaded = true,
}: RevealImageProps) {
  const context = useContext(RevealContext);

  if (context?.prefersReduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  if (!context || !context.mounted) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const isShown = context.isRevealed && isLoaded;

  const imgStyle: React.CSSProperties = {
    ...style,
    opacity: isShown ? 1 : 0,
    transitionProperty: "opacity",
    transitionDuration: `${durationMs}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
    willChange: isShown ? "auto" : "opacity",
  };

  return (
    <div className={className} style={imgStyle}>
      {children}
    </div>
  );
}

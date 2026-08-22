import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, ReactNode } from "react";

// ─── ParallaxSection ─────────────────────────────────────────────────────────
// Full-width, full-height section with rAF-driven parallax background.
// Uses an oversized child div + translateY rather than background-attachment:fixed
// (which breaks inside overflow:hidden on mobile/Safari).

interface ParallaxSectionProps {
  image: string;
  imagePos?: string;
  minHeight?: string;
  overlayClass?: string;
  children: ReactNode;
  className?: string;
  parallaxAmt?: number;
  id?: string;
}

const ParallaxSection = ({
  image,
  imagePos = "center center",
  minHeight = "min-h-[80vh]",
  overlayClass = "bg-gradient-to-b from-black/70 via-black/40 to-black/80",
  children,
  className = "",
  parallaxAmt = 12,
  id,
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    let rafId: number;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress: 0 when bottom at viewport-bottom, 1 when top at viewport-top
      const progress = 1 - rect.bottom / (viewH + rect.height);
      const shift = (progress - 0.5) * parallaxAmt * 2;
      bg.style.transform = `translateY(${shift}%)`;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [parallaxAmt]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full overflow-hidden bg-black flex items-center ${minHeight} ${className}`}
    >
      {/* Parallax bg — oversized top/bottom so translateY has room */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: `-${parallaxAmt}%`,
          bottom: `-${parallaxAmt}%`,
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: imagePos,
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />
      {/* Unified dark overlay */}
      <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

// ─── ProductRow ───────────────────────────────────────────────────────────────
// Full-width text block for each product section row.
// Alternates left / right alignment for visual rhythm.

interface ProductRowProps {
  eyebrow: string;
  title: string;
  body: string;
  linkTo: string;
  linkLabel: string;
  align: "left" | "right";
}

const ProductRow = ({
  eyebrow,
  title,
  body,
  linkTo,
  linkLabel,
  align,
}: ProductRowProps) => {
  const isRight = align === "right";
  return (
    <div className="container mx-auto px-6 lg:px-12 py-24">
      <div className={`max-w-2xl ${isRight ? "ml-auto text-right" : "mr-auto text-left"}`}>
        <p className="text-white/50 uppercase tracking-[0.18em] text-xs font-medium mb-5">
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 font-light">
          {body}
        </p>
        <Link
          to={linkTo}
          className={`inline-flex items-center gap-3 text-white/90 text-base font-medium hover:text-white hover:gap-4 transition-all duration-300 group ${isRight ? "flex-row-reverse" : ""}`}
        >
          {linkLabel}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

// ─── Home ────────────────────────────────────────────────────────────────────

const Home = () => {
  return (
    <Layout>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <ParallaxSection
        image="/Home/1.png"
        imagePos="center right"
        minHeight="min-h-screen"
        overlayClass="bg-gradient-to-r from-black/85 via-black/50 to-black/20"
        parallaxAmt={8}
      >
        <div className="container mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl text-left">
            <p className="text-white/50 uppercase tracking-[0.18em] text-xs font-medium mb-6 animate-fade-in-up">
              J Agents Labs
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.05s" }}
            >
              Built alongside&nbsp;you.
            </h1>
            <p
              className="text-xl sm:text-2xl text-white/70 leading-relaxed max-w-2xl font-light animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              We understand how your business runs before we touch a single line
              of code. That's how everything we build actually fits.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* ── 2. INSIGHT / QUOTE ──────────────────────────────────────────── */}
      <ParallaxSection
        image="/Home/2.png"
        imagePos="center center"
        minHeight="min-h-[60vh]"
        overlayClass="bg-gradient-to-b from-black/75 via-black/55 to-black/75"
        parallaxAmt={10}
      >
        <div className="container mx-auto px-6 lg:px-12 py-24 flex items-center justify-center">
          <blockquote
            className="max-w-4xl mx-auto text-center text-2xl sm:text-3xl lg:text-5xl leading-relaxed text-white/95 font-light tracking-wide"
            style={{
              fontFamily: "Georgia, Cambria, 'Times New Roman', serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.9)",
            }}
          >
            "The right software isn't the one with the most features.{" "}
            <em>It's the one built around how you already work.</em>"
          </blockquote>
        </div>
      </ParallaxSection>

      {/* ── 3a. For real estate agents ──────────────────────────────────── */}
      <ParallaxSection
        image="/Home/3.png"
        imagePos="center center"
        minHeight="min-h-[85vh]"
        overlayClass="bg-gradient-to-r from-black/85 via-black/50 to-black/20"
        parallaxAmt={10}
      >
        <ProductRow
          eyebrow="For real estate agents"
          title="Find any listing in seconds — by meaning, not keywords."
          body="Eschure searches your private inventory in real time, understanding what your client actually means, so you're never scrambling mid-call."
          linkTo="/eschure"
          linkLabel="Explore Eschure"
          align="left"
        />
      </ParallaxSection>

      {/* ── 3b. For brokerages ──────────────────────────────────────────── */}
      <ParallaxSection
        image="/Home/4.png"
        imagePos="center center"
        minHeight="min-h-[85vh]"
        overlayClass="bg-gradient-to-l from-black/85 via-black/50 to-black/20"
        parallaxAmt={10}
      >
        <ProductRow
          eyebrow="For brokerages"
          title="One system. Website, AI, and CRM — all in sync."
          body="Digital Office bundles your website, an AI assistant, and a CRM into one system built for how a brokerage actually runs."
          linkTo="/digital-office"
          linkLabel="Explore Digital Office"
          align="right"
        />
      </ParallaxSection>

      {/* ── 3c. For D2C food brands ─────────────────────────────────────── */}
      <ParallaxSection
        image="/Home/5.png"
        imagePos="center 40%"
        minHeight="min-h-[85vh]"
        overlayClass="bg-gradient-to-r from-black/85 via-black/50 to-black/20"
        parallaxAmt={10}
      >
        <ProductRow
          eyebrow="For D2C food brands"
          title="Weekly content that sounds like you — without eating your time."
          body="Drish turns your product into carousels and captions, every week, consistently on-brand and ready to post."
          linkTo="/drish"
          linkLabel="Explore Drish"
          align="left"
        />
      </ParallaxSection>

      {/* ── 3d. Something more specific ─────────────────────────────────── */}
      <ParallaxSection
        image="/Home/6.png"
        imagePos="center center"
        minHeight="min-h-[85vh]"
        overlayClass="bg-gradient-to-l from-black/85 via-black/50 to-black/20"
        parallaxAmt={10}
      >
        <ProductRow
          eyebrow="Something more specific"
          title="No off-the-shelf tool was built for your process. We design around that."
          body="If none of the above fits, you likely have a workflow that generic software was never meant to solve. That's exactly where we start."
          linkTo="/custom-software"
          linkLabel="Explore Custom Software"
          align="right"
        />
      </ParallaxSection>

      {/* ── 4. APPROACH TEASER ──────────────────────────────────────────── */}
      <ParallaxSection
        image="/Home/7.png"
        imagePos="center center"
        minHeight="min-h-[75vh]"
        overlayClass="bg-gradient-to-b from-black/60 via-black/30 to-black/85"
        parallaxAmt={10}
      >
        <div className="container mx-auto px-6 lg:px-12 py-28 flex items-end">
          <div className="max-w-2xl">
            <p className="text-white/50 uppercase tracking-[0.18em] text-xs font-medium mb-4">
              Our approach
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              We diagnose before we build.
            </h2>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 font-light">
              Before we recommend a tool, we look at where your process actually
              breaks. That's the difference between software you adopt and
              software you fight.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 rounded-none h-12 px-8 w-fit backdrop-blur-sm text-sm font-medium tracking-wide transition-all duration-300"
            >
              <Link to="/approach">See how we think</Link>
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* ── 5. ABOUT TEASER ─────────────────────────────────────────────── */}
      <ParallaxSection
        image="/Home/8.png"
        imagePos="center center"
        minHeight="min-h-[75vh]"
        overlayClass="bg-gradient-to-b from-black/60 via-black/30 to-black/85"
        parallaxAmt={10}
      >
        <div className="container mx-auto px-6 lg:px-12 py-28 flex items-end justify-end">
          <div className="max-w-2xl text-right">
            <p className="text-white/50 uppercase tracking-[0.18em] text-xs font-medium mb-4">
              Who we are
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Built by people who've run the problem.
            </h2>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 font-light">
              J Agents Labs closes the gap between a good idea and software that
              holds up in production. Meet the studio.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 rounded-none h-12 px-8 w-fit backdrop-blur-sm text-sm font-medium tracking-wide transition-all duration-300 ml-auto"
            >
              <Link to="/about">About us</Link>
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* ── 6. FINAL CTA ────────────────────────────────────────────────── */}
      <ParallaxSection
        image="/Home/9.png"
        imagePos="center center"
        minHeight="min-h-[70vh]"
        overlayClass="bg-gradient-to-b from-black/65 via-black/40 to-black/75"
        parallaxAmt={8}
      >
        <div className="container mx-auto px-6 lg:px-12 py-28 flex flex-col items-center justify-center text-center">
          <p className="text-white/50 uppercase tracking-[0.18em] text-xs font-medium mb-6">
            Let's talk
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl">
            Partner with people who understand your business first.
          </h2>
          <p className="text-xl sm:text-2xl text-white/75 font-light mb-12 max-w-2xl leading-relaxed">
            Tell us what's actually happening in your business. We'll tell you
            honestly whether we're the right people to fix it.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-10 bg-white text-black hover:bg-white/90 font-semibold text-base rounded-none transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl tracking-wide"
          >
            <Link to="/contact">Get started</Link>
          </Button>
        </div>
      </ParallaxSection>

    </Layout>
  );
};

export default Home;

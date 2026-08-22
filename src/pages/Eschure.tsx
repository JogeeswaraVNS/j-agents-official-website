import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useEffect, useRef, ReactNode } from "react";

// --- ParallaxSection ---
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
  minHeight = "min-h-[80vh] min-h-[80dvh]",
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

    // Simple check for mobile to reduce/disable parallax if desired, but we keep it running.
    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
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
      {/* Dark gradient overlay */}
      <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

// --- Eschure ---

const Eschure = () => {
  const externalLink = "https://eschure.com";

  return (
    <Layout>

      {/* 1. Hero */}
      <ParallaxSection
        image="/Eschure/1.png"
        imagePos="center right"
        minHeight="min-h-[100vh] min-h-[100svh]"
        overlayClass="bg-gradient-to-r from-black/85 via-black/50 to-black/20"
        parallaxAmt={8}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32 relative z-10">
          <div className="w-full max-w-4xl backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] animate-fade-in-up">
            <p className="badge-label mb-4 sm:mb-6 text-white/80">
              Eschure
            </p>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6 sm:mb-8"
              style={{ animationDelay: "0.05s" }}
            >
              Built for the moment you're on the call.
            </h1>
            <p
              className="text-base sm:text-xl lg:text-2xl text-white/60 leading-relaxed max-w-3xl font-medium"
              style={{ animationDelay: "0.15s" }}
            >
              Eschure is a real time copilot for real estate agents, searching your private inventory by meaning, not keywords, while you're still talking to the buyer.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* 2. The problem */}
      <ParallaxSection
        image="/Eschure/2.png"
        imagePos="center center"
        minHeight="min-h-[60vh] min-h-[60svh]"
        overlayClass="bg-gradient-to-b from-black/75 via-black/55 to-black/75"
        parallaxAmt={10}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 flex items-center justify-center relative z-10">
          <div className="w-full max-w-3xl backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] animate-fade-in-up hover:shadow-lg transition-all">
            <p className="badge-label mb-4 sm:mb-6 text-white/80 inline-block">
              The problem
            </p>
            <h2 className="leading-snug text-white mb-4 sm:mb-8 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              The listing is somewhere. You just can't get to it fast enough.
            </h2>
            <p className="text-white/60 text-base sm:text-xl leading-relaxed font-medium">
              A buyer describes what they want mid call. Your best match is buried in a spreadsheet, a WhatsApp thread, or someone else's notes. By the time you find it, the moment's gone.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* 3a. Feature: Searches by meaning */}
      <ParallaxSection
        image="/Eschure/3.png"
        imagePos="center center"
        minHeight="min-h-[80vh] min-h-[80svh]"
        overlayClass="bg-gradient-to-r from-black/85 via-black/50 to-black/20"
        parallaxAmt={10}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
          <div className="w-full max-w-2xl sm:mr-auto backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] hover:shadow-lg transition-all">
            <p className="badge-label mb-4 sm:mb-6 text-white/80 inline-block">
              Searches by meaning, not keywords
            </p>
            <h2 className="leading-snug text-white mb-4 sm:mb-8 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Searches by meaning, not keywords
            </h2>
            <p className="text-white/60 text-base sm:text-xl leading-relaxed font-medium">
              Describe what the buyer wants in plain language. Eschure finds the match, even if it's worded nothing like your listing.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* 3b. Feature: Private inventory */}
      <ParallaxSection
        image="/Eschure/4.png"
        imagePos="center center"
        minHeight="min-h-[80vh] min-h-[80svh]"
        overlayClass="bg-gradient-to-l from-black/85 via-black/50 to-black/20"
        parallaxAmt={10}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
          <div className="w-full max-w-2xl sm:ml-auto backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] hover:shadow-lg transition-all text-left sm:text-right">
            <p className="badge-label mb-4 sm:mb-6 text-white/80 inline-block">
              Built for private inventory
            </p>
            <h2 className="leading-snug text-white mb-4 sm:mb-8 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for private inventory
            </h2>
            <p className="text-white/60 text-base sm:text-xl leading-relaxed font-medium">
              Off market and exclusive listings included, with access control built into the search itself.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* 3c. Feature: Works while on the call */}
      <ParallaxSection
        image="/Eschure/5.png"
        imagePos="center center"
        minHeight="min-h-[80vh] min-h-[80svh]"
        overlayClass="bg-gradient-to-r from-black/85 via-black/50 to-black/20"
        parallaxAmt={10}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
          <div className="w-full max-w-2xl sm:mr-auto backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] hover:shadow-lg transition-all">
            <p className="badge-label mb-4 sm:mb-6 text-white/80 inline-block">
              Works while you're still on the call
            </p>
            <h2 className="leading-snug text-white mb-4 sm:mb-8 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Works while you're still on the call
            </h2>
            <p className="text-white/60 text-base sm:text-xl leading-relaxed font-medium">
              No switching tabs, no pausing the conversation. Results appear in real time.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* 4. Closing CTA */}
      <ParallaxSection
        image="/Eschure/6.png"
        imagePos="center center"
        minHeight="min-h-[70vh] min-h-[70svh]"
        overlayClass="bg-gradient-to-b from-black/65 via-black/40 to-black/75"
        parallaxAmt={8}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-28 flex flex-col items-center justify-center text-center relative z-10">
          <div className="w-full max-w-2xl mx-auto text-center backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[2.5rem] animate-fade-in-up hover:scale-[1.02] transition-all hover:shadow-lg flex flex-col items-center">
            <p className="badge-label mb-4 sm:mb-6 text-white/80">
              See it live
            </p>
            <h2 className="leading-snug text-white mb-4 sm:mb-8 text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Built alongside Dubai's agents, for exactly how they work.
            </h2>
            <p className="text-white/60 text-base sm:text-xl leading-relaxed font-medium mb-8 sm:mb-12 max-w-xl">
              See Eschure in action.
            </p>
            <Button
              asChild
              size="lg"
              className="btn-refined h-12 sm:h-14 px-6 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <a href={externalLink} target="_blank" rel="noopener noreferrer">
                Visit Eschure <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </ParallaxSection>

    </Layout>
  );
};

export default Eschure;

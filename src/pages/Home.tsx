import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { LinkButton } from "../components/ui/Button";
import { SectionBackground } from "../components/ui/SectionBackground";
import { ExternalArrow } from "../components/ui/Icons";

/**
 * MobileImageBand
 * ---------------
 * Shown only below the md breakpoint (md:hidden). Renders a 16:9 aspect-ratio
 * image band with the bright image centre visible (object-cover object-center).
 * A gradient inside the container fades the bottom edge into #0B0B0C — no hard
 * line between the image and the text below it.
 * If the image fails to load, the component returns null so no empty gap is left.
 */
interface MobileImageBandProps {
  src: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
}

function MobileImageBand({
  src,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
}: MobileImageBandProps) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div
      className="md:hidden relative w-full overflow-hidden"
      style={{ aspectRatio: "16/9" }}
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={loading}
        decoding={decoding}
        {...(fetchPriority ? { fetchPriority } : {})}
        width={1672}
        height={941}
        onError={() => setHidden(true)}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Bottom fade: image dissolves into #0B0B0C — sits inside overflow:hidden container */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0B0B0C)" }}
      />
    </div>
  );
}

export default function Home() {
  const btnScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform hover:shadow-[0_10px_25px_rgba(91,139,196,0.3)]";

  const linkScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform inline-block";

  // Content column: constrained width, no panel/box/border/shadow
  const contentCol = "w-full max-w-[600px] md:max-w-[52%]";

  return (
    <Layout>
      <SEO
        title="JAgents Labs | AI for Real Estate"
        description="JAgents Labs builds AI for real estate. Eschure is a live AI copilot for property brokers. JAgents Studio builds custom software and AI agents."
        canonicalPath="/"
      />

      {/* SECTION 1: HERO
          Mobile : MobileImageBand (16:9, bright centre visible) + text on plain #0B0B0C.
          Desktop: SectionBackground places the image in a right-side 58% box with
                   continuous left/top/bottom fades. Text sits on the plain left area.
          Height : 100svh minus nav (4rem mobile / 5rem desktop), content centred. */}
      <section
        className="relative isolate overflow-hidden flex flex-col justify-center
          min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)]"
      >
        <MobileImageBand
          src="/home/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />

        <SectionBackground
          src="/home/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />

        <div className="w-full px-6 sm:px-8 py-12 sm:py-16 md:py-24">
          <div className={`${contentCol} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <h1
              className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              AI agents and software for real estate.
            </h1>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-xl">
              We build AI agents and software that take over repetitive work, remove delays and give real estate teams their time back. It starts with Eschure, a live copilot for property brokers.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <LinkButton
                href="https://eschure.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className={`text-[16px] min-h-[44px] font-semibold bg-[#5B8BC4] text-[#0B0B0C] hover:bg-[#6F9FD4] ${btnScale}`}
              >
                Explore Eschure
              </LinkButton>
              <a
                href="https://jagentsstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group text-[16px] font-normal text-[#A1A1AA] hover:text-white inline-flex items-center gap-1 min-h-[44px] ${linkScale}`}
              >
                JAgents Studio
                <ExternalArrow className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ESCHURE */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <MobileImageBand src="/home/2.webp" loading="lazy" decoding="async" />

        <SectionBackground
          src="/home/2.webp"
          loading="lazy"
          decoding="async"
        />
        <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
          <div className={`${contentCol} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <p className="text-[14px] font-normal leading-[1.5] text-[#A1A1AA] uppercase tracking-wider mb-4">
              Eschure
            </p>
            <h2
              className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              The answer is ready before the buyer finishes the sentence.
            </h2>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-xl">
              Eschure is a live copilot for property brokers. During a buyer call, it searches your private inventory by meaning and tells you what fits.
            </p>

            <div className="space-y-6 mb-8 max-w-xl">
              <div>
                <h3
                  className="text-[20px] sm:text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-white mb-2"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Honest matches.
                </h3>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/80">
                  Every listing is marked a strong match, a close match or no match. Eschure never forces a bad recommendation.
                </p>
              </div>

              <div>
                <h3
                  className="text-[20px] sm:text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-white mb-2"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  The whole call in context.
                </h3>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/80">
                  It remembers what the buyer said earlier, so every answer fits the full conversation.
                </p>
              </div>

              <div>
                <h3
                  className="text-[20px] sm:text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-white mb-2"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Done when the call ends.
                </h3>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/80">
                  Contact details captured, call summary written, WhatsApp and email follow-ups drafted.
                </p>
              </div>
            </div>

            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/80 mb-8">
              Private and off-market inventory stays within your team.
            </p>

            <div>
              <LinkButton
                href="https://eschure.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className={`text-[16px] min-h-[44px] font-semibold bg-[#5B8BC4] text-[#0B0B0C] hover:bg-[#6F9FD4] ${btnScale}`}
              >
                Visit Eschure
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: JAGENTS STUDIO */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <MobileImageBand src="/home/3.webp" loading="lazy" decoding="async" />

        <SectionBackground
          src="/home/3.webp"
          loading="lazy"
          decoding="async"
        />
        <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
          <div className={`${contentCol} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <p className="text-[14px] font-normal leading-[1.5] text-[#A1A1AA] uppercase tracking-wider mb-4">
              JAgents Studio
            </p>
            <h2
              className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Software and AI agents, built around your business.
            </h2>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-xl">
              From CRMs to operations software, we build systems that automate repetitive work and connect to the tools your team already uses.
            </p>
            <div>
              <LinkButton
                href="https://jagentsstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className={`text-[16px] min-h-[44px] font-semibold bg-[#5B8BC4] text-[#0B0B0C] hover:bg-[#6F9FD4] ${btnScale}`}
              >
                Visit JAgents Studio
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ONE INDUSTRY */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <MobileImageBand src="/home/4.webp" loading="lazy" decoding="async" />

        <SectionBackground
          src="/home/4.webp"
          loading="lazy"
          decoding="async"
        />
        <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
          <div className={`${contentCol} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <h2
              className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Where AI agents meet real estate.
            </h2>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-xl">
              Real estate runs on calls, listings, WhatsApp and follow-ups. We put AI agents into that work, so less time goes to repetition and delay, and more goes to the person in front of you.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/approach"
                className={`text-[16px] font-normal text-white hover:text-[#5B8BC4] underline underline-offset-4 ${linkScale}`}
              >
                Our approach
              </Link>
              <Link
                to="/about"
                className={`text-[16px] font-normal text-white hover:text-[#5B8BC4] underline underline-offset-4 ${linkScale}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-[16px] font-normal text-white hover:text-[#5B8BC4] underline underline-offset-4 ${linkScale}`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

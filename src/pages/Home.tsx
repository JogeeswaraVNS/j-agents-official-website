import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { LinkButton } from "../components/ui/Button";
import { SectionBackground } from "../components/ui/SectionBackground";

export default function Home() {
  const glassSection =
    "backdrop-blur-md bg-[#0B0B0C]/45 border border-white/[0.08] shadow-2xl rounded-3xl p-8 sm:p-12 md:p-16 transition-all duration-300 ease-out hover:scale-105 hover:bg-[#0B0B0C]/60 hover:border-white/[0.2] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] will-change-transform max-w-3xl";

  const btnScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform hover:shadow-[0_10px_25px_rgba(91,139,196,0.3)]";

  const linkScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform inline-block";

  return (
    <Layout>
      <SEO
        title="JAgents Labs | AI for Real Estate"
        description="JAgents Labs builds AI for real estate. Eschure is a live AI copilot for property brokers. JAgents Studio builds custom software and AI agents."
        canonicalPath="/"
      />

      {/* SECTION 1: HERO */}
      <section className="relative isolate overflow-hidden">
        <SectionBackground
          src="/home/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
          <div className={`${glassSection} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <h1 className="text-[40px] sm:text-[64px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6">
              AI built for real estate.
            </h1>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-2xl">
              JAgents Labs builds AI products and custom software for real estate businesses. Our first product, Eschure, is a live copilot for property brokers.
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
                className={`text-[16px] font-normal text-[#A1A1AA] hover:text-white inline-flex items-center min-h-[44px] ${linkScale}`}
              >
                JAgents Studio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ESCHURE */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <SectionBackground
          src="/home/2.webp"
          loading="lazy"
          decoding="async"
        />
        <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
          <div className={`${glassSection} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <p className="text-[14px] font-normal leading-[1.5] text-[#A1A1AA] uppercase tracking-wider mb-4">
              Eschure
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6">
              The answer is ready before the buyer finishes the sentence.
            </h2>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-2xl">
              Eschure is a live copilot for property brokers. During a buyer call, it searches your private inventory by meaning and tells you what fits.
            </p>

            <div className="space-y-6 mb-8 max-w-2xl">
              <div>
                <h3 className="text-[20px] sm:text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-white mb-2">
                  Honest matches.
                </h3>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/80">
                  Every listing is marked a strong match, a close match or no match. Eschure never forces a bad recommendation.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] sm:text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-white mb-2">
                  The whole call in context.
                </h3>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/80">
                  It remembers what the buyer said earlier, so every answer fits the full conversation.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] sm:text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-white mb-2">
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
        <SectionBackground
          src="/home/3.webp"
          loading="lazy"
          decoding="async"
        />
        <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
          <div className={`${glassSection} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <p className="text-[14px] font-normal leading-[1.5] text-[#A1A1AA] uppercase tracking-wider mb-4">
              JAgents Studio
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6">
              Custom software for real estate businesses.
            </h2>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-2xl">
              JAgents Studio builds custom software and AI agents for real estate businesses, from the first conversation to a working system.
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
        <SectionBackground
          src="/home/4.webp"
          loading="lazy"
          decoding="async"
        />
        <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
          <div className={`${glassSection} animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}>
            <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6">
              Software for how property is sold.
            </h2>
            <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-2xl">
              JAgents Labs builds AI products and custom systems for real estate businesses, starting with the conversation between a broker and a buyer.
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

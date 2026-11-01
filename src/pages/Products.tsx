import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { LinkButton } from "../components/ui/Button";
import { SectionBackground } from "../components/ui/SectionBackground";
import { MobileImageBand } from "../components/ui/MobileImageBand";
import { RevealGroup, RevealItem } from "../components/ui/RevealAnimation";

export default function Products() {
  const btnScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform hover:shadow-[0_10px_25px_rgba(91,139,196,0.3)]";

  // Content column: constrained width, no panel/box/border/shadow
  const contentCol = "w-full max-w-[600px] md:max-w-[52%]";

  return (
    <Layout>
      <SEO
        title="Products | JAgents Labs"
        description="Eschure is a live AI copilot for property brokers. JAgents Studio builds custom software and AI agents for real estate businesses."
        canonicalPath="/products"
      />

      {/* SECTION 1: INTRO */}
      <section className="relative isolate overflow-hidden">
        <RevealGroup isHero className="w-full flex flex-col justify-center">
          <MobileImageBand
            src="/products/1.webp"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            width={1920}
            height={1080}
          />

          <SectionBackground
            src="/products/1.webp"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            width={1920}
            height={1080}
            align="right"
          />

          <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
            <div className={contentCol}>
              <RevealItem delay={0} durationMs={700}>
                <h1
                  className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Two ways we work with real estate teams.
                </h1>
              </RevealItem>
              <RevealItem delay={100} durationMs={700}>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 max-w-xl">
                  Eschure is our product, ready to use today. JAgents Studio builds custom software and AI agents around your business.
                </p>
              </RevealItem>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* SECTION 2: ESCHURE */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <RevealGroup threshold={0.15}>
          <MobileImageBand
            src="/products/2.webp"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />

          <SectionBackground
            src="/products/2.webp"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
            align="right"
          />

          <div className="w-full px-6 sm:px-8 py-20 sm:py-32">
            <div className={contentCol}>
              <RevealItem staggerMs={80} durationMs={700}>
                <p className="text-[14px] font-normal leading-[1.5] text-[#A1A1AA] uppercase tracking-wider mb-4">
                  Product
                </p>
              </RevealItem>
              <RevealItem staggerMs={80} durationMs={700}>
                <h2
                  className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Eschure
                </h2>
              </RevealItem>
              <RevealItem staggerMs={80} durationMs={700}>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-xl">
                  A live copilot for property brokers. During a buyer call, it searches your private inventory by meaning and tells you what fits.
                </p>
              </RevealItem>
              <RevealItem staggerMs={80} durationMs={700}>
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
              </RevealItem>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* SECTION 3: JAGENTS STUDIO */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07]">
        <RevealGroup threshold={0.15}>
          <MobileImageBand
            src="/products/3.webp"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />

          <SectionBackground
            src="/products/3.webp"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
            align="left"
          />

          <div className="w-full px-6 sm:px-8 py-20 sm:py-32 flex justify-start md:justify-end">
            <div className={contentCol}>
              <RevealItem staggerMs={80} durationMs={700}>
                <p className="text-[14px] font-normal leading-[1.5] text-[#A1A1AA] uppercase tracking-wider mb-4">
                  Service
                </p>
              </RevealItem>
              <RevealItem staggerMs={80} durationMs={700}>
                <h2
                  className="text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-6"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  JAgents Studio
                </h2>
              </RevealItem>
              <RevealItem staggerMs={80} durationMs={700}>
                <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] text-white/90 mb-10 max-w-xl">
                  Custom software and AI agents for real estate businesses, from CRMs to operations software.
                </p>
              </RevealItem>
              <RevealItem staggerMs={80} durationMs={700}>
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
              </RevealItem>
            </div>
          </div>
        </RevealGroup>
      </section>
    </Layout>
  );
}

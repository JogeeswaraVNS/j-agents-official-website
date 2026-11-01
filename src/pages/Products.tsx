import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { LinkButton } from "../components/ui/Button";
import { SectionBackground } from "../components/ui/SectionBackground";

export default function Products() {
  const btnScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform hover:shadow-[0_10px_25px_rgba(91,139,196,0.3)]";

  return (
    <Layout>
      <SEO
        title="Products | JAgents Labs"
        description="Eschure is a live AI copilot for property brokers. JAgents Studio builds custom software and AI agents for real estate businesses."
        canonicalPath="/products"
      />

      {/* SECTION 1: INTRO (Center aligned on laptop, left on mobile) */}
      <section className="relative isolate overflow-hidden min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <SectionBackground
          src="/products/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-12 sm:py-0">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start md:items-center justify-center text-left md:text-center reveal-on-scroll">
            <h1 className="w-full text-left md:text-center text-[32px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Two ways we work with real estate teams.
            </h1>
            <p className="w-full text-left md:text-center text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 max-w-2xl md:mx-auto">
              Eschure is our product, ready to use today. JAgents Studio builds custom software and AI agents around your business.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ESCHURE (Left aligned on laptop and mobile) */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[80svh] flex items-center justify-center">
        <SectionBackground
          src="/products/2.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start reveal-on-scroll">
            <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#5B8BC4] uppercase tracking-wider mb-3">
              Product
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-4 text-left max-w-4xl">
              Eschure
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 text-left max-w-2xl">
              A live copilot for property brokers. During a buyer call, it searches your private inventory by meaning and tells you what fits.
            </p>

            <div>
              <LinkButton
                href="https://eschure.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className={`text-[15px] sm:text-[16px] min-h-[44px] px-6 font-semibold bg-[#5B8BC4] text-[#0B0B0C] hover:bg-[#6F9FD4] ${btnScale}`}
              >
                Visit Eschure
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: JAGENTS STUDIO (Right aligned on laptop, left on mobile) */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[70svh] flex items-center justify-center">
        <SectionBackground
          src="/products/3.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start md:items-end reveal-on-scroll">
            <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#5B8BC4] uppercase tracking-wider mb-3 text-left md:text-right">
              Service
            </p>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-4 text-left md:text-right max-w-full">
              JAgents Studio
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 text-left md:text-right max-w-2xl">
              Custom software and AI agents for real estate businesses, from CRMs to operations software.
            </p>
            <div className="w-full flex justify-start md:justify-end">
              <LinkButton
                href="https://jagentsstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className={`text-[15px] sm:text-[16px] min-h-[44px] px-6 font-semibold bg-[#5B8BC4] text-[#0B0B0C] hover:bg-[#6F9FD4] ${btnScale}`}
              >
                Visit JAgents Studio
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

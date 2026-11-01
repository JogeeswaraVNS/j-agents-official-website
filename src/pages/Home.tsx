import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { LinkButton } from "../components/ui/Button";
import { SectionBackground } from "../components/ui/SectionBackground";
import { ExternalArrow } from "../components/ui/Icons";

export default function Home() {
  const btnScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform hover:shadow-[0_10px_25px_rgba(91,139,196,0.3)]";

  const linkScale =
    "transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform inline-block";

  // Centered, compact container with clean readable typography across mobile and desktop
  const contentWrapper = "w-full max-w-2xl mx-auto text-center flex flex-col items-center";

  return (
    <Layout>
      <SEO
        title="JAgents Labs | AI for Real Estate"
        description="JAgents Labs builds AI for real estate. Eschure is a live AI copilot for property brokers. JAgents Studio builds custom software and AI agents."
        canonicalPath="/"
      />

      {/* SECTION 1: HERO */}
      <section className="relative isolate overflow-hidden min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <SectionBackground
          src="/home/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-12 sm:py-0">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-start md:items-center justify-center text-left md:text-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <h1 className="w-full text-left md:text-center text-[32px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-5 md:whitespace-nowrap">
              AI agents and software for real estate.
            </h1>
            <p className="w-full text-left md:text-center text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 max-w-2xl md:mx-auto">
              We build AI agents and software that take over repetitive work, remove delays and give real estate teams their time back. It starts with Eschure, a live copilot for property brokers.
            </p>
            <div className="w-full flex flex-wrap items-center justify-start md:justify-center gap-4 sm:gap-6">
              <LinkButton
                href="https://eschure.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className={`text-[15px] sm:text-[16px] min-h-[44px] px-6 font-semibold bg-[#5B8BC4] text-[#0B0B0C] hover:bg-[#6F9FD4] ${btnScale}`}
              >
                Explore Eschure
              </LinkButton>
              <a
                href="https://jagentsstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group text-[15px] sm:text-[16px] font-normal text-[#A1A1AA] hover:text-white inline-flex items-center gap-1.5 min-h-[44px] px-2 ${linkScale}`}
              >
                JAgents Studio
                <ExternalArrow className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ESCHURE */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[80svh] flex items-center justify-center">
        <SectionBackground
          src="/home/2.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#5B8BC4] uppercase tracking-wider mb-3">
              Eschure
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-4 text-left max-w-4xl">
              The answer is ready before the buyer finishes the sentence.
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-10 text-left max-w-3xl">
              Eschure is a live copilot for property brokers. During a buyer call, it searches your private inventory by meaning and tells you what fits.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full mb-8">
              <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-7 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#5B8BC4] mb-4" />
                <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[1.3] text-white mb-2 text-left">
                  Honest matches.
                </h3>
                <p className="text-[14px] sm:text-[15px] font-normal leading-[1.6] text-white/70 text-left">
                  Every listing is marked a strong match, a close match or no match. Eschure never forces a bad recommendation.
                </p>
              </div>

              <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-7 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#5B8BC4] mb-4" />
                <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[1.3] text-white mb-2 text-left">
                  The whole call in context.
                </h3>
                <p className="text-[14px] sm:text-[15px] font-normal leading-[1.6] text-white/70 text-left">
                  It remembers what the buyer said earlier, so every answer fits the full conversation.
                </p>
              </div>

              <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-7 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#5B8BC4] mb-4" />
                <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[1.3] text-white mb-2 text-left">
                  Done when the call ends.
                </h3>
                <p className="text-[14px] sm:text-[15px] font-normal leading-[1.6] text-white/70 text-left">
                  Contact details captured, call summary written, WhatsApp and email follow-ups drafted.
                </p>
              </div>
            </div>

            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#A1A1AA] mb-8 text-left">
              Private and off-market inventory stays within your team.
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

      {/* SECTION 3: JAGENTS STUDIO */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[70svh] flex items-center justify-center">
        <SectionBackground
          src="/home/3.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start md:items-end animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#5B8BC4] uppercase tracking-wider mb-3 text-left md:text-right">
              JAgents Studio
            </p>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.015em] text-white mb-4 text-left md:text-right max-w-full">
              Software and AI agents, built around your business.
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 text-left md:text-right max-w-2xl">
              From CRMs to operations software, we build systems that automate repetitive work and connect to the tools your team already uses.
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

      {/* SECTION 4: ONE INDUSTRY */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[70svh] flex items-center justify-center">
        <SectionBackground
          src="/home/4.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-start md:items-center justify-center text-left md:text-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <h2 className="w-full text-left md:text-center text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-5 max-w-4xl md:whitespace-nowrap">
              Where AI agents meet real estate.
            </h2>
            <p className="w-full text-left md:text-center text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 max-w-2xl md:mx-auto">
              Real estate runs on calls, listings, WhatsApp and follow-ups. We put AI agents into that work, so less time goes to repetition and delay, and more goes to the person in front of you.
            </p>
            <div className="w-full flex flex-wrap items-center justify-start md:justify-center gap-6">
              <Link
                to="/approach"
                className={`text-[15px] sm:text-[16px] font-normal text-white hover:text-[#5B8BC4] underline underline-offset-4 ${linkScale}`}
              >
                Our approach
              </Link>
              <Link
                to="/about"
                className={`text-[15px] sm:text-[16px] font-normal text-white hover:text-[#5B8BC4] underline underline-offset-4 ${linkScale}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-[15px] sm:text-[16px] font-normal text-white hover:text-[#5B8BC4] underline underline-offset-4 ${linkScale}`}
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

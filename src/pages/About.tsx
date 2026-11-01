import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { SectionBackground } from "../components/ui/SectionBackground";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About â€” JAgents Labs"
        description="About JAgents Labs Private Limited, an applied software company based in Hyderabad, India."
        canonicalPath="/about"
      />

      {/* SECTION 1: INTRO (Centered on laptop, left on mobile) */}
      <section className="relative isolate overflow-hidden min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <SectionBackground
          src="/about/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-12 sm:py-0">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start md:items-center justify-center text-left md:text-center reveal-on-scroll">
            <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#5B8BC4] uppercase tracking-wider mb-3">
              Company
            </p>
            <h1 className="w-full text-left md:text-center text-[32px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              About JAgents Labs
            </h1>
            <p className="w-full text-left md:text-center text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 max-w-2xl md:mx-auto">
              JAgents Labs Private Limited is an applied software studio based in Hyderabad, India. We build specialized software and AI products designed to eliminate operational friction for real-world businesses.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO (Left-aligned on laptop & mobile) */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[80svh] flex items-center justify-center">
        <SectionBackground
          src="/about/2.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start reveal-on-scroll">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-4 text-left max-w-4xl">
              What we do
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-6 text-left max-w-3xl">
              Most businesses operate across fragmented spreadsheets, missed phone calls, and manual handovers because off-the-shelf software doesn't fit their exact workflow. JAgents Labs identifies these bottlenecks and designs dedicated products that integrate directly into the operator's day.
            </p>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 text-left max-w-3xl">
              From our vertical copilot products like Eschure to targeted software delivered through JAgents Studio, our focus is singular: delivering software that gets used, trusted, and relied upon.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP (Right-aligned on laptop, left on mobile) */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[70svh] flex items-center justify-center">
        <SectionBackground
          src="/about/3.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start md:items-end reveal-on-scroll">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-4 text-left md:text-right max-w-4xl">
              Leadership
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 text-left md:text-right max-w-2xl">
              JAgents Labs was founded to close the gap between software engineering and operational reality. We believe that technology should fit the workflow, not force the business to adapt to the software.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORPORATE INFORMATION (Left-aligned on mobile, clean card layout) */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[70svh] flex items-center justify-center">
        <SectionBackground
          src="/about/4.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start reveal-on-scroll">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-6 text-left">
              Corporate Information
            </h2>
            <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-8 space-y-3 text-white/80 max-w-3xl text-left transition-all duration-300 ease-out hover:scale-110 will-change-transform">
              <p><strong className="text-white">Legal Name:</strong> JAgents Labs Private Limited</p>
              <p><strong className="text-white">CIN:</strong> U62011TS2026PTC221182</p>
              <p><strong className="text-white">GSTIN:</strong> 36AAHCJ5628D1ZL</p>
              <p><strong className="text-white">Registered Address:</strong> H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad â€“ 500082, Telangana, India</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { SectionBackground } from "../components/ui/SectionBackground";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact â€” JAgents Labs"
        description="Get in touch with JAgents Labs directly via email or phone."
        canonicalPath="/contact"
      />

      {/* SECTION 1: INTRO (Centered on laptop, left on mobile) */}
      <section className="relative isolate overflow-hidden min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <SectionBackground
          src="/contact/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-12 sm:py-0">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start md:items-center justify-center text-left md:text-center reveal-on-scroll">
            <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#5B8BC4] uppercase tracking-wider mb-3">
              Inquiries
            </p>
            <h1 className="w-full text-left md:text-center text-[32px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Contact us
            </h1>
            <p className="w-full text-left md:text-center text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/85 mb-8 max-w-2xl md:mx-auto">
              Reach us directly. We don't use contact forms, queues, or gatekeepers. Speak directly with our team.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHANNELS (Cards grid, left-aligned, matching Eschure feature card style) */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[80svh] flex items-center justify-center">
        <SectionBackground
          src="/contact/2.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start reveal-on-scroll">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-8 text-left">
              Direct Communication
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12 max-w-4xl">
              {/* Email Card */}
              <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:scale-110 will-change-transform">
                <div>
                  <div className="w-2 h-2 rounded-full bg-[#5B8BC4] mb-4" />
                  <p className="text-[12px] uppercase font-semibold tracking-wider text-[#A1A1AA] mb-2">
                    Email
                  </p>
                  <h3 className="text-[20px] font-semibold text-white mb-2">
                    Direct Inquiries
                  </h3>
                  <p className="text-[15px] font-normal leading-[1.6] text-white/70 mb-6">
                    Send us an email anytime. We typically respond within one business day.
                  </p>
                </div>
                <a
                  href="mailto:hello@jagentslabs.com"
                  className="inline-flex items-center text-[#5B8BC4] hover:text-[#6F9FD4] font-medium text-[16px] min-h-[44px] transition-colors"
                >
                  hello@jagentslabs.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:scale-110 will-change-transform">
                <div>
                  <div className="w-2 h-2 rounded-full bg-[#5B8BC4] mb-4" />
                  <p className="text-[12px] uppercase font-semibold tracking-wider text-[#A1A1AA] mb-2">
                    Phone
                  </p>
                  <h3 className="text-[20px] font-semibold text-white mb-2">
                    Call Directly
                  </h3>
                  <p className="text-[15px] font-normal leading-[1.6] text-white/70 mb-6">
                    Available during standard business hours (IST).
                  </p>
                </div>
                <a
                  href="tel:+919063316737"
                  className="inline-flex items-center text-[#5B8BC4] hover:text-[#6F9FD4] font-medium text-[16px] min-h-[44px] transition-colors"
                >
                  +91 90633 16737
                </a>
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-8 max-w-4xl w-full text-left transition-all duration-300 ease-out hover:scale-110 will-change-transform">
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-3">
                Registered Office
              </h3>
              <p className="text-[15px] sm:text-[16px] font-normal leading-relaxed text-white/75">
                JAgents Labs Private Limited<br />
                H.No. 6-3-1093/406, V V Vintage Boulevard,<br />
                Somajiguda, Nampally, Hyderabad â€“ 500082,<br />
                Telangana, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


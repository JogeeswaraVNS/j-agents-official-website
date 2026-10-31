import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About — JAgents Labs"
        description="About JAgents Labs Private Limited, an applied software company based in Hyderabad, India."
        canonicalPath="/about"
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="type-caption text-text-secondary uppercase tracking-wider mb-3">
            Company
          </p>
          <h1 className="type-heading text-text-primary mb-6">About JAgents Labs</h1>
          <p className="type-body text-text-secondary">
            JAgents Labs Private Limited is an applied software studio based in Hyderabad, India. We build specialized software and AI products designed to eliminate operational friction for real-world businesses.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 max-w-3xl border-t border-border pt-12">
          {/* Studio section */}
          <div className="space-y-4">
            <h2 className="type-subheading text-text-primary">What we do</h2>
            <p className="type-body text-text-secondary">
              Most businesses operate across fragmented spreadsheets, missed phone calls, and manual handovers because off-the-shelf software doesn't fit their exact workflow. JAgents Labs identifies these bottlenecks and designs dedicated products that integrate directly into the operator's day.
            </p>
            <p className="type-body text-text-secondary">
              From our vertical copilot products like Eschure to targeted software delivered through JAgents Studio, our focus is singular: delivering software that gets used, trusted, and relied upon.
            </p>
          </div>

          {/* Founder section */}
          <div className="space-y-4">
            <h2 className="type-subheading text-text-primary">Leadership</h2>
            <p className="type-body text-text-secondary">
              JAgents Labs was founded to close the gap between software engineering and operational reality. We believe that technology should fit the workflow, not force the business to adapt to the software.
            </p>
          </div>

          {/* Registered Details */}
          <div className="space-y-4 border-t border-border pt-12">
            <h2 className="type-subheading text-text-primary">Corporate Information</h2>
            <div className="space-y-2 text-text-secondary type-caption">
              <p><strong className="text-text-primary">Legal Name:</strong> JAgents Labs Private Limited</p>
              <p><strong className="text-text-primary">CIN:</strong> U62011TS2026PTC221182</p>
              <p><strong className="text-text-primary">GSTIN:</strong> 36AAHCJ5628D1ZL</p>
              <p><strong className="text-text-primary">Registered Address:</strong> H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad – 500082, Telangana, India</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

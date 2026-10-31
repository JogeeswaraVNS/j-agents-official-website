import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact — JAgents Labs"
        description="Get in touch with JAgents Labs directly via email or phone."
        canonicalPath="/contact"
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="type-caption text-text-secondary uppercase tracking-wider mb-3">
            Inquiries
          </p>
          <h1 className="type-heading text-text-primary mb-4">Contact us</h1>
          <p className="type-body text-text-secondary">
            Reach us directly. We don't use contact forms, queues, or gatekeepers. Speak directly with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mb-16">
          {/* Email card */}
          <div className="p-8 rounded-card bg-surface border border-border flex flex-col justify-between">
            <div>
              <p className="type-caption text-text-secondary uppercase tracking-wide mb-2">Email</p>
              <h2 className="type-subheading text-text-primary mb-3">Direct Inquiries</h2>
              <p className="type-caption text-text-secondary mb-6">
                Send us an email anytime. We typically respond within one business day.
              </p>
            </div>
            <a
              href="mailto:hello@jagentslabs.com"
              className="inline-flex items-center text-accent hover:text-accent-hover font-medium type-body min-h-touch transition-colors"
            >
              hello@jagentslabs.com
            </a>
          </div>

          {/* Phone card */}
          <div className="p-8 rounded-card bg-surface border border-border flex flex-col justify-between">
            <div>
              <p className="type-caption text-text-secondary uppercase tracking-wide mb-2">Phone</p>
              <h2 className="type-subheading text-text-primary mb-3">Call Directly</h2>
              <p className="type-caption text-text-secondary mb-6">
                Available during standard business hours (IST).
              </p>
            </div>
            <a
              href="tel:+919063316737"
              className="inline-flex items-center text-accent hover:text-accent-hover font-medium type-body min-h-touch transition-colors"
            >
              +91 90633 16737
            </a>
          </div>
        </div>

        {/* Office location */}
        <div className="max-w-3xl border-t border-border pt-12">
          <h2 className="type-subheading text-text-primary mb-4">Registered Office</h2>
          <p className="type-body text-text-secondary leading-relaxed">
            JAgents Labs Private Limited<br />
            H.No. 6-3-1093/406, V V Vintage Boulevard,<br />
            Somajiguda, Nampally, Hyderabad – 500082,<br />
            Telangana, India
          </p>
        </div>
      </section>
    </Layout>
  );
}

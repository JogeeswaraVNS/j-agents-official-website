import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy — JAgents Labs"
        description="Privacy policy for JAgents Labs Private Limited and the jagentslabs.com website."
        canonicalPath="/privacy"
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
        {/* Draft Notice */}
        <div className="p-4 mb-8 rounded-card border border-accent/40 bg-accent/10 text-text-primary type-caption">
          <strong>Draft Notice:</strong> This policy is currently drafted specifically for jagentslabs.com and is pending final legal sign-off prior to production release.
        </div>

        <div className="max-w-3xl mb-12">
          <h1 className="type-heading text-text-primary mb-3">Privacy Policy</h1>
          <p className="type-caption text-text-secondary">Last updated: October 2026</p>
        </div>

        <div className="space-y-12 max-w-3xl border-t border-border pt-10 text-text-secondary type-body">
          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">1. Data Fiduciary</h2>
            <p>
              JAgents Labs Private Limited ("we", "us", or "our") is the data fiduciary responsible for personal data processed through <strong className="text-text-primary">jagentslabs.com</strong>.
            </p>
            <p className="type-caption">
              Registered Office: H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad – 500082, Telangana, India.<br />
              Email: hello@jagentslabs.com · Phone: +91 90633 16737
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">2. Informational Scope & Minimal Data Collection</h2>
            <p>
              This website serves exclusively as an informational showcase for JAgents Labs. We operate under a principle of strict data minimization:
            </p>
            <ul className="list-disc pl-6 space-y-2 type-body">
              <li>We do not provide interactive contact forms or data submission fields on this site.</li>
              <li>We do not require user account registration, passwords, or profile logins.</li>
              <li>We do not execute tracking advertising pixels, analytics tracking cookies, or profiling scripts.</li>
              <li>We do not process billing, financial transactions, or credit card details on this website.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">3. Direct Communications</h2>
            <p>
              If you voluntarily choose to contact us via email (<a href="mailto:hello@jagentslabs.com" className="text-accent underline">hello@jagentslabs.com</a>) or telephone (+91 90633 16737), we will receive your contact details (such as your email address, phone number, and message content). This information is processed exclusively to answer your inquiry and manage standard business correspondence. We do not sell or rent this information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">4. Hosting Infrastructure & Server Logs</h2>
            <p>
              Like virtually all web properties, our hosting and content delivery network provider (Vercel Inc.) automatically processes standard, temporary HTTP request logs when you visit our website. These logs typically include your IP address, browser user-agent, operating system, requested page URL, and access timestamps. These logs are processed solely to ensure network security, defend against distributed denial-of-service (DDoS) attacks, and maintain routing integrity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">5. External Links & Independent Services</h2>
            <p>
              This website includes links to our independent software products and sister sites, such as Eschure (<a href="https://eschure.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">eschure.com</a>) and JAgents Studio (<a href="https://jagentsstudio.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">jagentsstudio.com</a>). These independent sites maintain their own distinct terms, subscriptions, and privacy notices. We encourage you to review their specific policies upon visiting.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">6. Grievance Officer & Contact</h2>
            <p>
              In accordance with applicable data protection laws in India, any questions, notices, or grievances concerning personal data may be addressed to our Grievance Officer:
            </p>
            <div className="p-4 rounded-btn bg-surface border border-border text-text-primary type-caption space-y-1">
              <p><strong className="text-text-primary">Grievance Officer:</strong> [Grievance Officer Name / Designation — To be confirmed by Legal Review]</p>
              <p><strong className="text-text-primary">Company:</strong> JAgents Labs Private Limited</p>
              <p><strong className="text-text-primary">Email:</strong> hello@jagentslabs.com</p>
              <p><strong className="text-text-primary">Address:</strong> H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad – 500082, Telangana, India</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">7. Changes to This Policy</h2>
            <p>
              We may revise this privacy policy from time to time. Updates will be published on this page with an updated revision date.
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}

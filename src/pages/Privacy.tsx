import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy â€” JAgents Labs"
        description="Privacy policy for JAgents Labs Private Limited and the jagentslabs.com website."
        canonicalPath="/privacy"
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">


        <div className="max-w-3xl mb-12">
          <h1 className="type-heading text-text-primary mb-3">Privacy Policy</h1>
          <p className="type-caption text-text-secondary">Last updated: November 2026</p>
        </div>

        <div className="space-y-12 max-w-3xl border-t border-border pt-10 text-text-secondary type-body">
          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">1. Data Fiduciary</h2>
            <p>
              JAgents Labs Private Limited ("we", "us", or "our") is the data fiduciary responsible for personal data processed through <strong className="text-text-primary">jagentslabs.com</strong>.
            </p>
            <p className="type-caption">
              Registered Office: H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad â€“ 500082, Telangana, India.<br />
              Email: hello@jagentslabs.com Â· Phone: +91 90633 16737
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">2. Data We Collect &amp; Why</h2>
            <p>
              This website operates under a principle of strict data minimization. We collect personal data only when you voluntarily provide it through the following channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 type-body">
              <li>
                <strong className="text-text-primary">Contact Form.</strong> When you submit an inquiry via our contact form, we collect your name, business email address, phone number (optional, along with country code), your primary area of interest, and whether you operate in the real estate domain. This information is collected solely to route your inquiry to the appropriate team member and respond to you.
              </li>
              <li>
                <strong className="text-text-primary">Direct Email or Telephone.</strong> If you contact us directly via email (<a href="mailto:hello@jagentslabs.com" className="text-accent underline">hello@jagentslabs.com</a>) or phone (+91 90633 16737), we receive the details you share (such as your name, email, and message) and use them exclusively to manage and respond to your inquiry.
              </li>
              <li>We do not require user account registration, passwords, or profile logins on this website.</li>
              <li>We do not execute tracking advertising pixels, analytics tracking cookies, or behavioural profiling scripts.</li>
              <li>We do not process billing, financial transactions, or payment card details on this website.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">3. How We Use Contact Form Data</h2>
            <p>
              Data submitted through the contact form on this website is received and reviewed directly by the JAgents Labs team. At present, this data is stored internally and is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 type-body">
              <li>Understand the nature of your inquiry and connect you with the right team member.</li>
              <li>Send you a response regarding your inquiry via the email address you provide.</li>
              <li>Maintain a record of business correspondence for internal reference.</li>
            </ul>
            <p>
              We do not sell, rent, or share your contact form submissions with third-party marketing services or data brokers. In the future, we may integrate this data with authorised CRM or communications platforms to streamline responses; if and when we do, this policy will be updated to reflect such integrations and you will be informed accordingly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">4. Hosting Infrastructure &amp; Server Logs</h2>
            <p>
              This website is hosted and delivered through <strong className="text-text-primary">Cloudflare, Inc.</strong> (Cloudflare Pages and Cloudflare's global content delivery network). As part of standard network operations, Cloudflare automatically processes certain technical data when you access our website, including your IP address, browser user-agent string, operating system, requested page URL, HTTP referrer, and access timestamps. This processing is carried out by Cloudflare on our behalf solely to deliver website content, maintain performance, defend against distributed denial-of-service (DDoS) attacks, detect malicious traffic, and ensure routing integrity.
            </p>
            <p>
              Cloudflare may also apply its standard security rules (such as bot detection and rate limiting) to requests reaching our origin. IP addresses processed by Cloudflare are handled in accordance with <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Cloudflare's Privacy Policy</a>. We do not use Cloudflare Analytics or any optional analytics features that would create visitor profiles or behavioural records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">5. External Links &amp; Independent Services</h2>
            <p>
              This website includes links to our independent software products and sister sites, such as Eschure (<a href="https://eschure.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">eschure.com</a>) and JAgents Studio (<a href="https://jagentsstudio.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">jagentsstudio.com</a>). These independent sites maintain their own distinct terms, subscriptions, and privacy notices. We encourage you to review their specific policies upon visiting.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">6. Grievance Officer &amp; Contact</h2>
            <p>
              In accordance with applicable data protection laws in India, any questions, notices, or grievances concerning personal data may be addressed to our Grievance Officer:
            </p>
            <div className="p-4 rounded-btn bg-surface border border-border text-text-primary type-caption space-y-1 transition-all duration-300 ease-out hover:scale-110 will-change-transform">
              <p><strong className="text-text-primary">Grievance Officer:</strong> [Grievance Officer Name / Designation â€” To be confirmed by Legal Review]</p>
              <p><strong className="text-text-primary">Company:</strong> JAgents Labs Private Limited</p>
              <p><strong className="text-text-primary">Email:</strong> hello@jagentslabs.com</p>
              <p><strong className="text-text-primary">Address:</strong> H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad â€“ 500082, Telangana, India</p>
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


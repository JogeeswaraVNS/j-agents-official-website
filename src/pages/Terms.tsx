import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service — JAgents Labs"
        description="Terms of service governing the use of jagentslabs.com."
        canonicalPath="/terms"
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">


        <div className="max-w-3xl mb-12">
          <h1 className="type-heading text-text-primary mb-3">Terms of Service</h1>
          <p className="type-caption text-text-secondary">Last updated: November 2026</p>
        </div>

        <div className="space-y-12 max-w-3xl border-t border-border pt-10 text-text-secondary type-body">
          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (<strong className="text-text-primary">jagentslabs.com</strong>), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">2. Informational Purpose &amp; Commercial Services</h2>
            <p>
              The content provided on this website is for general informational purposes only. JAgents Labs Private Limited does not offer online billing, retail checkout, or consumer subscriptions through <strong className="text-text-primary">jagentslabs.com</strong>.
            </p>
            <p>
              Commercial software licenses, subscriptions, and custom engineering services (such as Eschure or JAgents Studio) are governed exclusively by their respective master services agreements, end-user license agreements, and product-specific terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">3. Intellectual Property</h2>
            <p>
              All trade names, trademarks, visual design, code, logos, and written materials displayed on this website are the intellectual property of JAgents Labs Private Limited or licensed to us. You may not reproduce, duplicate, copy, or redistribute any portion of this site without our prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">4. Infrastructure &amp; Third-Party Services</h2>
            <p>
              This website is delivered through <strong className="text-text-primary">Cloudflare, Inc.</strong>, whose network and security services (including DDoS protection, bot management, and content delivery) are applied to all traffic reaching this site. By using this website, you acknowledge that your requests are processed through Cloudflare's infrastructure in accordance with <a href="https://www.cloudflare.com/website-terms/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Cloudflare's Terms of Service</a> and <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Cloudflare's Privacy Policy</a>.
            </p>
            <p>
              We are not responsible for any interruptions, delays, or actions arising from Cloudflare's network-level operations, including but not limited to bot challenges, firewall rules, or IP-based rate limiting.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">5. External Websites &amp; Third-Party Content</h2>
            <p>
              Our website links to independent platforms and external resources. We do not control, endorse, or assume responsibility for the availability, accuracy, or content of third-party websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
            <p>
              This website is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. To the fullest extent permitted under applicable law, JAgents Labs Private Limited shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to access this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">7. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or related to these terms or your use of the website shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="type-subheading text-text-primary">8. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms, contact us at:
            </p>
            <p className="type-caption text-text-primary">
              JAgents Labs Private Limited<br />
              Email: <a href="mailto:hello@jagentslabs.com" className="text-accent underline">hello@jagentslabs.com</a><br />
              Address: H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad – 500082, Telangana, India
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background px-6">
        <div className="max-w-3xl w-full text-left py-24 lg:py-32 mx-auto">
          <h1 className="mb-2 text-center">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mb-12">Last updated: [insert date]</p>
          
          <div className="space-y-10">
            <section>
              <h3 className="text-foreground mb-3">1. Who we are</h3>
              <p>
                J Agents Labs ("we," "us," "our") is the data fiduciary responsible for the personal data collected through jagentslabs.com, as defined under India's Digital Personal Data Protection Act, 2023 (DPDP Act). Our registered address and contact details are listed in Section 9 below.
              </p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">2. Personal data we collect</h3>
              <p className="mb-3">We only collect what's needed to respond to you:</p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] sm:text-[16px] leading-[1.65] text-foreground/75">
                <li>Contact form: name, email address, company or brand name, and the message you send</li>
                <li>Drish early access form: name, brand name, email address, and Instagram handle (optional)</li>
                <li>Basic technical data collected automatically when you visit (browser type, device type, general location, pages viewed), used only for site analytics</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground mb-3">3. Why we collect it</h3>
              <ul className="list-disc pl-6 space-y-2 mb-3 text-[15px] sm:text-[16px] leading-[1.65] text-foreground/75">
                <li>To respond to inquiries submitted through our contact and early access forms</li>
                <li>To assess whether one of our products fits what you're looking for</li>
                <li>To improve this website</li>
              </ul>
              <p>We do not use your data for any purpose beyond what you've submitted it for, and we do not sell it to third parties.</p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">4. Consent</h3>
              <p>
                By submitting a form on this site, you consent to us processing the information you've provided for the purposes listed above. You can withdraw this consent at any time by contacting us (Section 9); withdrawing consent will not affect processing already carried out before your request.
              </p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">5. Data sharing</h3>
              <p>
                We do not share your personal data with third parties, except where necessary to operate our services (such as email delivery for form submissions) or where required by Indian law.
              </p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">6. Data retention</h3>
              <p>
                We retain your personal data only as long as needed to respond to your inquiry and maintain reasonable business records, or until you request deletion, whichever comes first.
              </p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">7. Your rights</h3>
              <p className="mb-3">Under the DPDP Act, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-[15px] sm:text-[16px] leading-[1.65] text-foreground/75">
                <li>Access the personal data we hold about you</li>
                <li>Correct or update inaccurate or incomplete data</li>
                <li>Request erasure of your data</li>
                <li>Withdraw consent at any time</li>
                <li>File a grievance if you believe your data has been mishandled</li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details in Section 9. We will respond within a reasonable timeframe as required under applicable law.
              </p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">8. Security</h3>
              <p>
                We take reasonable technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">9. Contact and grievance redressal</h3>
              <p>
                For any questions about this policy, or to exercise your rights under the DPDP Act, contact us at <a href="mailto:hello@jagentslabs.com" className="text-primary hover:underline">hello@jagentslabs.com</a>.
              </p>
            </section>

            <section>
              <h3 className="text-foreground mb-3">10. Changes to this policy</h3>
              <p>
                We may update this policy from time to time. Changes will be posted on this page with a revised "last updated" date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

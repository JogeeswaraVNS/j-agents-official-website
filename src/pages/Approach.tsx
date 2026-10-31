import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";

export default function Approach() {
  return (
    <Layout>
      <SEO
        title="Our Approach — JAgents Labs"
        description="How JAgents Labs designs and builds software: diagnosing operational realities before writing a single line of code."
        canonicalPath="/approach"
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="type-caption text-text-secondary uppercase tracking-wider mb-3">
            Methodology
          </p>
          <h1 className="type-heading text-text-primary mb-6">Our approach</h1>
          <p className="type-body text-text-secondary">
            Good software does not come from assumptions. It comes from observing where work slows down and designing directly around the bottleneck.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24 max-w-3xl border-t border-border pt-12">
          {/* Principle 1 */}
          <div className="space-y-4">
            <span className="type-mono text-accent text-[14px]">01</span>
            <h2 className="type-subheading text-text-primary">Diagnose first</h2>
            <p className="type-body text-text-secondary">
              We understand how your business runs before we touch a single line of code. The problem that gets brought to the table is rarely the one causing the real breakdown. By analyzing workflows first, we ensure what gets built actually solves the issue.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="space-y-4">
            <span className="type-mono text-accent text-[14px]">02</span>
            <h2 className="type-subheading text-text-primary">Focused over sprawling</h2>
            <p className="type-body text-text-secondary">
              We build the smallest thing that creates meaningful leverage. A tight, dependable tool that handles a critical job beats a sprawling platform where ninety percent of the features remain unused.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="space-y-4">
            <span className="type-mono text-accent text-[14px]">03</span>
            <h2 className="type-subheading text-text-primary">Built alongside you</h2>
            <p className="type-body text-text-secondary">
              We stay in the room with domain operators. You understand the nuances and edge cases of your daily operation; we understand how to translate that into reliable software. High-impact systems are born from continuous collaboration, not hand-offs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

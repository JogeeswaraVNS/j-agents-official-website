import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { LinkButton } from "../components/ui/Button";
import { ProductCard } from "../components/ui/ProductCard";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="JAgents Labs"
        description="JAgents Labs builds focused, high-leverage software and AI products built alongside how businesses actually operate."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 pt-20 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <p className="type-caption text-text-secondary uppercase tracking-wider mb-4">
            JAgents Labs
          </p>
          <h1 className="type-hero text-text-primary mb-6">
            We build software that fits the way you work.
          </h1>
          <p className="type-body text-text-secondary mb-10 max-w-2xl">
            Applied software and AI agents designed for operational realities, not theoretical workflows.
          </p>
          <div>
            <LinkButton to="/products" variant="primary">
              Explore products
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32">
        <div className="border-t border-border pt-12 sm:pt-16 mb-8">
          <h2 className="type-heading text-text-primary mb-2">Products</h2>
          <p className="type-body text-text-secondary">
            Focused tools built to solve specific operational friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <ProductCard
            title="Eschure"
            tagline="Live AI copilot for real estate property brokers. Real-time semantic search over private inventory during buyer calls."
            href="https://eschure.com"
            badge="Live"
          />
          <ProductCard
            title="JAgents Studio"
            tagline="Custom software and AI agents."
            href="https://jagentsstudio.com"
            badge="Services"
            note="Our dedicated services arm. More details to follow."
          />
        </div>
      </section>
    </Layout>
  );
}

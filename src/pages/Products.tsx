import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { ProductCard } from "../components/ui/ProductCard";

export default function Products() {
  return (
    <Layout>
      <SEO
        title="Products — JAgents Labs"
        description="Explore products from JAgents Labs, including Eschure for real estate brokers and JAgents Studio for custom software."
        canonicalPath="/products"
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h1 className="type-heading text-text-primary mb-4">Products</h1>
          <p className="type-body text-text-secondary">
            Software built around how you actually work. We focus on practical leverage rather than sprawling feature lists.
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
            note="Our dedicated services arm. More details to follow; contact us for custom engineering."
          />
        </div>
      </section>
    </Layout>
  );
}

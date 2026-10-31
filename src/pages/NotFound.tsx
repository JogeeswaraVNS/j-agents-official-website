import React from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { LinkButton } from "../components/ui/Button";

export default function NotFound() {
  return (
    <Layout>
      <SEO
        title="Page Not Found — JAgents Labs"
        description="The page you requested could not be found."
      />

      <section className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-24 sm:py-36 text-center">
        <div className="max-w-md mx-auto">
          <p className="type-mono text-accent text-[14px] mb-3">404</p>
          <h1 className="type-heading text-text-primary mb-4">Page not found</h1>
          <p className="type-body text-text-secondary mb-8">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <LinkButton to="/" variant="primary">
            Return to home
          </LinkButton>
        </div>
      </section>
    </Layout>
  );
}

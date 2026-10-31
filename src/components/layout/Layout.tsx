import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text-primary selection:bg-accent selection:text-accent-foreground">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:font-medium focus:rounded-btn shadow-md"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>

      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Products", to: "/products" },
    { label: "Our approach", to: "/approach" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 h-16 sm:h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          to="/"
          className="text-[18px] sm:text-[20px] font-semibold text-text-primary tracking-tight hover:opacity-85 transition-opacity"
          aria-label="JAgents Labs Homepage"
        >
          JAgents Labs
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`type-caption min-h-touch inline-flex items-center transition-colors duration-150 ${
                  isActive
                    ? "text-text-primary font-medium"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center min-w-touch min-h-touch p-2 text-text-secondary hover:text-text-primary rounded-btn"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`type-caption min-h-touch flex items-center px-2 rounded-btn ${
                    isActive
                      ? "text-text-primary font-medium bg-white/5"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

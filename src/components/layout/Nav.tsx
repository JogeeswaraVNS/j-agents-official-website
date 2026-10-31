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
      <div className="w-full px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-[18px] sm:text-[20px] font-semibold text-text-primary tracking-tight hover:opacity-85 transition-opacity"
          aria-label="JAgents Labs Homepage"
        >
          <img
            src="/jagentslabs-mark.png"
            alt="JAgents Labs Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            width="32"
            height="32"
          />
          <span>JAgents Labs</span>
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded-btn"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-border bg-bg/95 backdrop-blur-md px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-[16px] transition-colors ${
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
        </div>
      )}
    </header>
  );
}

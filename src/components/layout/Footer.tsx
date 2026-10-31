import React from "react";
import { Link } from "react-router-dom";
import {
  SocialLinkedIn,
  SocialInstagram,
  SocialFacebook,
  SocialYouTube,
  ExternalArrow,
} from "../ui/Icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg text-text-secondary mt-auto">
      <div className="max-w-content mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Col 0: Brand & Mission */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-3 text-[18px] font-semibold text-text-primary tracking-tight"
            >
              <img
                src="/jagentslabs-mark.png"
                alt="JAgents Labs Logo"
                className="w-7 h-7 object-contain"
                width="28"
                height="28"
              />
              <span>JAgents Labs</span>
            </Link>
            <p className="type-caption text-text-secondary leading-relaxed">
              AI for real estate.
            </p>
          </div>

          {/* Col 1: Navigation */}
          <div className="space-y-3">
            <p className="type-caption font-semibold text-text-primary tracking-wide uppercase text-[12px]">
              Navigation
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link to="/products" className="type-caption hover:text-text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/approach" className="type-caption hover:text-text-primary transition-colors">
                  Our approach
                </Link>
              </li>
              <li>
                <Link to="/about" className="type-caption hover:text-text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="type-caption hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Sister Sites & Policies */}
          <div className="space-y-3">
            <p className="type-caption font-semibold text-text-primary tracking-wide uppercase text-[12px]">
              Sister Sites
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://eschure.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption hover:text-text-primary inline-flex items-center group transition-colors"
                >
                  Eschure
                  <ExternalArrow className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://jagentsstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption hover:text-text-primary inline-flex items-center group transition-colors"
                >
                  JAgents Studio
                  <ExternalArrow className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://eschure.com/cancellation-refund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption hover:text-text-primary inline-flex items-center group transition-colors"
                >
                  Eschure: Cancellation & Refund Policy
                  <ExternalArrow className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Direct Inquiries */}
          <div className="space-y-3">
            <p className="type-caption font-semibold text-text-primary tracking-wide uppercase text-[12px]">
              Legal & Policies
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy" className="type-caption hover:text-text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="type-caption hover:text-text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <p className="type-caption text-text-primary font-medium">Direct Inquiries</p>
              <p className="type-caption mt-1">
                <a href="mailto:hello@jagentslabs.com" className="hover:text-accent transition-colors">
                  hello@jagentslabs.com
                </a>
              </p>
              <p className="type-caption">
                <a href="tel:+919063316737" className="hover:text-accent transition-colors">
                  +91 90633 16737
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons Strip */}
        <div className="flex items-center gap-4 py-6 border-t border-border">
          <a
            href="https://www.linkedin.com/company/j-agents-labs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JAgents Labs on LinkedIn"
            className="min-w-touch min-h-touch inline-flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          >
            <SocialLinkedIn className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/jagentslabs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JAgents Labs on Instagram"
            className="min-w-touch min-h-touch inline-flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          >
            <SocialInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61593238315501"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JAgents Labs on Facebook"
            className="min-w-touch min-h-touch inline-flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          >
            <SocialFacebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCbe7QVzRM_OL7EBMhYhd1hg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JAgents Labs on YouTube"
            className="min-w-touch min-h-touch inline-flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          >
            <SocialYouTube className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Legal Block */}
        <div className="border-t border-border pt-8 text-[14px] text-text-secondary/80 space-y-2">
          <p className="font-normal">
            © {new Date().getFullYear()} JAgents Labs Private Limited. All rights reserved.
          </p>
          <p className="type-caption leading-relaxed">
            CIN: U62011TS2026PTC221182 · GSTIN: 36AAHCJ5628D1ZL
          </p>
          <p className="type-caption leading-relaxed">
            Registered Address: H.No. 6-3-1093/406, V V Vintage Boulevard, Somajiguda, Nampally, Hyderabad – 500082, Telangana, India
          </p>
        </div>
      </div>
    </footer>
  );
}

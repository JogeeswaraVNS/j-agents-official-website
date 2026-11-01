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
      {/* Same horizontal padding as the Nav */}
      <div className="w-full px-6 sm:px-8 py-10 sm:py-12">

        {/* 5 columns: Brand | Nav | Sister Sites | Legal | Contact */}
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1.8fr_1fr_1.4fr] gap-y-10 gap-x-8 sm:gap-x-10">

          {/* Col 1 â€” Brand */}
          <div className="col-span-2 md:col-span-1 space-y-2">
            <Link
              to="/"
              className="flex items-center gap-2.5 text-[16px] font-semibold text-text-primary tracking-tight"
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
            <p className="text-[15px] leading-relaxed">Real estate technology.</p>
          </div>

          {/* Col 2 â€” Navigation */}
          <div className="space-y-3">
            <p className="text-[13px] font-semibold text-text-primary tracking-widest uppercase">Navigation</p>
            <ul className="space-y-2.5">
              <li><Link to="/products" className="text-[15px] hover:text-text-primary transition-colors">Products</Link></li>
              <li><Link to="/about"    className="text-[15px] hover:text-text-primary transition-colors">About</Link></li>
              <li><Link to="/contact"  className="text-[15px] hover:text-text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 â€” Sister Sites */}
          <div className="space-y-3">
            <p className="text-[13px] font-semibold text-text-primary tracking-widest uppercase">Sister Sites</p>
            <ul className="space-y-2.5">
              <li>
                <a href="https://eschure.com" target="_blank" rel="noopener noreferrer"
                  className="text-[15px] hover:text-text-primary inline-flex items-center gap-1 group transition-colors">
                  Eschure <ExternalArrow className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href="https://jagentsstudio.com" target="_blank" rel="noopener noreferrer"
                  className="text-[15px] hover:text-text-primary inline-flex items-center gap-1 group transition-colors">
                  JAgents Studio <ExternalArrow className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href="https://eschure.com/cancellation-refund" target="_blank" rel="noopener noreferrer"
                  className="text-[15px] hover:text-text-primary inline-flex items-start gap-1 group transition-colors">
                  Eschure: Cancellation &amp; Refund Policy
                  <ExternalArrow className="w-3.5 h-3.5 mt-[2px] opacity-60 group-hover:opacity-100 flex-shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 â€” Legal */}
          <div className="space-y-3">
            <p className="text-[13px] font-semibold text-text-primary tracking-widest uppercase">Legal</p>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-[15px] hover:text-text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms"   className="text-[15px] hover:text-text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Col 5 â€” Social + Contact + Address (address lives here only) */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/j-agents-labs/" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn" className="text-text-secondary hover:text-text-primary transition-colors">
                <SocialLinkedIn className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.instagram.com/jagentslabs/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" className="text-text-secondary hover:text-text-primary transition-colors">
                <SocialInstagram className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61593238315501" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" className="text-text-secondary hover:text-text-primary transition-colors">
                <SocialFacebook className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.youtube.com/channel/UCbe7QVzRM_OL7EBMhYhd1hg" target="_blank" rel="noopener noreferrer"
                aria-label="YouTube" className="text-text-secondary hover:text-text-primary transition-colors">
                <SocialYouTube className="w-[18px] h-[18px]" />
              </a>
            </div>

            {/* Direct Inquiries */}
            <div className="space-y-1">
              <p className="text-[13px] font-semibold text-text-primary tracking-widest uppercase">Contact</p>
              <p className="text-[15px]">
                <a href="mailto:hello@jagentslabs.com" className="hover:text-accent transition-colors">hello@jagentslabs.com</a>
              </p>
              <p className="text-[15px]">
                <a href="tel:+919063316737" className="hover:text-accent transition-colors">+91 90633 16737</a>
              </p>
            </div>

            {/* Address â€” appears once, right here */}
            <div className="space-y-1">
              <p className="text-[13px] font-semibold text-text-primary tracking-widest uppercase">Office</p>
              <p className="text-[15px] leading-relaxed">
                H.No. 6-3-1093/406, V V Vintage Boulevard,<br />
                Somajiguda, Nampally,<br />
                Hyderabad â€“ 500082, Telangana, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar â€” copyright + CIN + GSTIN only. No address. */}
        <div className="border-t border-border mt-10 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[13px] text-text-secondary/70">
          <p>© {new Date().getFullYear()} JAgents Labs Private Limited. All rights reserved.</p>
          <p>CIN: U62011TS2026PTC221182 · GSTIN: 36AAHCJ5628D1ZL</p>
        </div>

      </div>
    </footer>
  );
}


import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/J Agents Logo Dark(PNG).png";

const Footer = () => {
  return (
    <footer className="bg-section-dark">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/90 tracking-tighter hover:opacity-70 transition-all w-fit group"
            >
              <img src={logo} alt="J Agents Logo" className="h-5 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-[14px] font-bold">J Agents</span>
            </Link>
            <p className="mt-6 text-[13px] text-muted-foreground/40 leading-relaxed max-w-xs font-medium">
              Purpose-built AI agents for real business problems.
            </p>
          </div>

          <div>
            <h4 className="badge-label mb-8 opacity-30">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-[13px] text-muted-foreground/50 hover:text-white transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-[13px] text-muted-foreground/50 hover:text-white transition-colors font-medium"
                >
                  Chat Assistant
                </Link>
              </li>
              <li>
                <Link
                  to="/drish"
                  className="text-[13px] text-muted-foreground/50 hover:text-white transition-colors font-medium"
                >
                  Drish
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[13px] text-muted-foreground/50 hover:text-white transition-colors font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-[13px] text-muted-foreground/50 hover:text-white transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="badge-label mb-8 opacity-30">Get in touch</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-[13px] text-muted-foreground/50 hover:text-white transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact.jagents@gmail.com"
                  className="text-[13px] text-muted-foreground/50 hover:text-white transition-colors font-medium"
                >
                  contact.jagents@gmail.com
                </a>
              </li>
              <li>
                <div className="flex gap-5 pt-2">
                  <a
                    href="https://www.linkedin.com/company/j-agents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground/30 hover:text-white transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/jagents.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground/30 hover:text-white transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-[11px] text-muted-foreground/20 font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span>© {new Date().getFullYear()}</span>
              <span className="flex items-center gap-1.5 opacity-40 ml-1">
                <img src={logo} alt="J Agents Logo" className="h-3 w-auto object-contain grayscale opacity-50" />
                <span className="whitespace-nowrap">j agents</span>
              </span>
            </div>
            <div className="flex gap-8 whitespace-nowrap">
              <span className="opacity-30">All Rights Reserved</span>
              <span className="opacity-30">Premium AI Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

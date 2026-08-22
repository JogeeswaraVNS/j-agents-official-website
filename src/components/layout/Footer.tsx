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
              <img src={logo} alt="JAgents Labs Logo" className="h-5 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="text-[14px] font-bold">JAgents Labs</span>
            </Link>
            <p className="mt-6 text-[13px] leading-relaxed max-w-xs font-medium" style={{ color: "#A1A1AA" }}>
              Purpose-built AI agents for real business problems.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.12em] mb-8" style={{ color: "#9CA3AF" }}>Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/eschure"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Eschure
                </Link>
              </li>
              <li>
                <Link
                  to="/digital-office"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Digital Office
                </Link>
              </li>
              <li>
                <Link
                  to="/drish"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Drish
                </Link>
              </li>
              <li>
                <Link
                  to="/custom-software"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  to="/approach"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Approach
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.12em] mb-8" style={{ color: "#9CA3AF" }}>Get in touch</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@jagentslabs.com"
                  className="text-[13px] font-medium transition-colors hover:text-white"
                  style={{ color: "#E5E7EB" }}
                >
                  hello@jagentslabs.com
                </a>
              </li>
              <li>
                <div className="flex gap-5 pt-2">
                  <a
                    href="https://www.linkedin.com/company/j-agents-labs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-white hover:scale-110"
                    style={{ color: "#6B7280" }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/jagents.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-white hover:scale-110"
                    style={{ color: "#6B7280" }}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10" style={{ borderTop: "1px solid #2A2A2E" }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#6B7280" }}>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span>© {new Date().getFullYear()}</span>
              <span className="flex items-center gap-1.5 ml-1">
                <img src={logo} alt="JAgents Labs Logo" className="h-3 w-auto object-contain grayscale opacity-60" />
                <span className="whitespace-nowrap">JAgents Labs</span>
              </span>
            </div>
            <div className="flex gap-8 whitespace-nowrap">
              <span>All Rights Reserved</span>
              <span>Premium AI Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from "@/assets/J Agents Logo Dark(PNG).png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiAgentsOpen, setAiAgentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isAiAgentsActive = location.pathname === "/chat" || location.pathname === "/drish";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAiAgentsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Set initial state
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAiAgentsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-background/95 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground tracking-tighter hover:opacity-70 transition-all group"
          >
            <img src={logo} alt="J Agents Logo" className="h-5 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="text-[15px] font-bold">J Agents</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-[13px] font-medium tracking-wide transition-all ${
                isActive("/") ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* AI Agents Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAiAgentsOpen(!aiAgentsOpen)}
                className={`text-[13px] font-medium tracking-wide transition-all flex items-center gap-1 ${
                  isAiAgentsActive ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                AI Agents
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${aiAgentsOpen ? "rotate-180" : ""}`} />
              </button>
              {aiAgentsOpen && (
                <div className="absolute top-full left-0 mt-3 w-52 bg-[#0a0a0a] border border-white/5 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
                  <Link
                    to="/chat"
                    onClick={() => setAiAgentsOpen(false)}
                    className={`flex flex-col px-4 py-3 transition-colors ${
                      isActive("/chat") ? "bg-white/5" : "hover:bg-white/5"
                    }`}
                  >
                    <span className="text-[13px] font-bold text-white/90">Chat Assistant</span>
                    <span className="text-[11px] text-muted-foreground/50 mt-0.5">24/7 automation</span>
                  </Link>
                  <Link
                    to="/drish"
                    onClick={() => setAiAgentsOpen(false)}
                    className={`flex flex-col px-4 py-3 transition-colors ${
                      isActive("/drish") ? "bg-white/5" : "hover:bg-white/5"
                    }`}
                  >
                    <span className="text-[13px] font-bold text-white/90">Drish</span>
                    <span className="text-[11px] text-muted-foreground/50 mt-0.5">Content Agent</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-[13px] font-medium tracking-wide transition-all ${
                isActive("/about") ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-[13px] font-medium tracking-wide transition-all ${
                isActive("/contact") ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm" className="btn-refined h-9 px-5 bg-white text-black hover:bg-white/90">
              <Link to="/contact">Get started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-muted-foreground hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/5 py-6 bg-background/98 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                  isActive("/") ? "text-white bg-white/5" : "text-muted-foreground hover:text-white"
                }`}
              >
                Home
              </Link>

              <div className="px-4 py-3">
                <button 
                  onClick={() => setAiAgentsOpen(!aiAgentsOpen)}
                  className="w-full flex items-center justify-between text-muted-foreground hover:text-white transition-colors"
                >
                  <span className="badge-label opacity-40">AI Agents</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${aiAgentsOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`flex flex-col gap-2 pl-2 mt-4 overflow-hidden transition-all duration-300 ${aiAgentsOpen ? "max-h-40" : "max-h-0"}`}>
                  <Link
                    to="/chat"
                    onClick={() => { setMobileMenuOpen(false); setAiAgentsOpen(false); }}
                    className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                      isActive("/chat") ? "text-white bg-white/5" : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    Chat Assistant
                  </Link>
                  <Link
                    to="/drish"
                    onClick={() => { setMobileMenuOpen(false); setAiAgentsOpen(false); }}
                    className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                      isActive("/drish") ? "text-white bg-white/5" : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    Drish
                  </Link>
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                  isActive("/about") ? "text-white bg-white/5" : "text-muted-foreground hover:text-white"
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                  isActive("/contact") ? "text-white bg-white/5" : "text-muted-foreground hover:text-white"
                }`}
              >
                Contact
              </Link>

              <div className="pt-6 px-4">
                <Button asChild className="btn-refined w-full h-12 bg-white text-black hover:bg-white/90">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

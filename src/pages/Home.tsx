import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, TrendingDown, Clock, Users } from "lucide-react";

import fiber1 from "@/assets/Home Page/_Close-up_macro_shot_of_fiber_202605141805 (1).jpg";
import fiber2 from "@/assets/Home Page/_Close-up_macro_shot_of_fiber_202605141805.jpg";
import office1 from "@/assets/Home Page/_Close-up_of_a_glass_office_202605141758.jpg";
import office2 from "@/assets/Home Page/_Close-up_of_a_glass_office_202605141759.jpg";
import laptops1 from "@/assets/Home Page/_Close-up_of_two_open_laptop_202605141804.jpg";
import laptops2 from "@/assets/Home Page/_Close-up_of_two_open_laptop_202605141805.jpg";
import businessman1 from "@/assets/Home Page/_Extreme_close-up_of_a_businessman's_202605141759.jpg";
import businessman2 from "@/assets/Home Page/_Extreme_close-up_of_a_businessman's_202605141805.jpg";
import flatlay1 from "@/assets/Home Page/_Flat_lay_top-down_photo_of_202605141804 (1).jpg";
import flatlay2 from "@/assets/Home Page/_Flat_lay_top-down_photo_of_202605141804.jpg";

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url('${office1}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative w-full container mx-auto px-6 lg:px-8 py-32 z-10 flex flex-col">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 mb-8 backdrop-blur-md animate-fade-in-up">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-white/80 uppercase">PURPOSE-BUILT AI AGENTS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Automate the critical.<br />
              <span className="text-white/70">Scale without limits.</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-light mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We build high-performance AI agents designed to solve specific business bottlenecks. From autonomous lead capture to generative content engines, we provide the infrastructure that keeps your business running 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button onClick={scrollToProducts} size="lg" className="h-14 px-6 sm:px-8 bg-white text-black hover:bg-white/90 font-medium text-base rounded-none transition-all hover:scale-[1.02] hover:shadow-lg">
                Explore Our Agents
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-6 sm:px-8 border-white/20 bg-transparent text-white hover:bg-white/10 font-medium text-base rounded-none transition-all hover:scale-[1.02] hover:shadow-lg">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement Section */}
      <section className="relative py-32 bg-black border-b border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url('${office2}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-20 text-white/90 font-light tracking-tight animate-fade-in-up">
              The silent cost of manual operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 sm:p-12 backdrop-blur-md bg-white/5 border border-white/10 flex flex-col items-start text-left animate-fade-in-up group hover:scale-[1.02] hover:shadow-lg transition-all" style={{ animationDelay: '0.1s' }}>
                <Clock className="w-6 h-6 text-white/30 mb-8" />
                <span className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tighter">68%</span>
                <p className="text-white/50 text-sm leading-relaxed">
                  Of customer inquiries occur outside standard business hours, resulting in lost opportunities.
                </p>
              </div>
              <div className="p-8 sm:p-12 backdrop-blur-md bg-white/5 border border-white/10 flex flex-col items-start text-left animate-fade-in-up group hover:scale-[1.02] hover:shadow-lg transition-all" style={{ animationDelay: '0.2s' }}>
                <TrendingDown className="w-6 h-6 text-white/30 mb-8" />
                <span className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tighter">5x</span>
                <p className="text-white/50 text-sm leading-relaxed">
                  Drop in lead qualification rates when response time exceeds just 5 minutes.
                </p>
              </div>
              <div className="p-8 sm:p-12 backdrop-blur-md bg-white/5 border border-white/10 flex flex-col items-start text-left animate-fade-in-up group hover:scale-[1.02] hover:shadow-lg transition-all" style={{ animationDelay: '0.3s' }}>
                <Users className="w-6 h-6 text-white/30 mb-8" />
                <span className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tighter">42%</span>
                <p className="text-white/50 text-sm leading-relaxed">
                  Of potential clients go directly to a competitor if their initial inquiry isn't answered instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Drish Section (Featured) */}
      <section id="products" className="relative min-h-[90vh] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url('${flatlay1}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 mb-8 backdrop-blur-md rounded-sm animate-fade-in-up">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-amber-500/90 uppercase">Invite Only — Early Adopter</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Drish</h2>
            <p className="text-2xl text-white/90 font-light mb-8 leading-snug animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Generative content engines.<br />From prompt to publication in seconds.
            </p>
            <p className="text-lg text-white/60 mb-10 max-w-2xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              A breakthrough AI content agent for modern brands. We generate highly-converting, 5-slide narrative carousels structured from Hook to Product Hero, complete with social copy. No designers needed.
            </p>
            <ul className="space-y-4 mb-12 border-l border-white/20 pl-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <li className="text-white/70">End-to-end 5-slide D2C narrative structures built for conversion</li>
              <li className="text-white/70">Rich, premium editorial aesthetic output tailored to your brand</li>
              <li className="text-white/70">Current Categories: Food (Now) | Roadmap: Fashion, Beauty, Home</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button asChild size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 font-medium text-base rounded-none transition-all hover:scale-[1.02] hover:shadow-lg">
                <Link to="/drish">Explore Drish</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-medium text-base rounded-none transition-all hover:scale-[1.02] hover:shadow-lg">
                <Link to="/contact">Request Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chat Assistant Section */}
      <section className="relative min-h-[90vh] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url('${laptops2}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32 flex justify-end">
          <div className="max-w-3xl text-left md:text-right">
            <div className="inline-flex md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 mb-8 backdrop-blur-md rounded-sm md:ml-auto animate-fade-in-up">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-white/80 uppercase">Always Answering</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Real Estate AI Assistant</h2>
            <p className="text-2xl text-white/90 font-light mb-8 leading-snug animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Your top sales agent.<br />Working 24/7.
            </p>
            <p className="text-lg text-white/60 mb-10 max-w-2xl md:ml-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              An AI agent installed on your property website that answers visitor questions, handles site visit bookings, and captures verified leads automatically — ensuring you never miss an inquiry after hours.
            </p>
            <ul className="space-y-4 mb-12 md:text-right border-l md:border-l-0 md:border-r border-white/20 pl-6 md:pl-0 md:pr-6 md:ml-auto max-w-md animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <li className="text-white/70">Answers project FAQs instantly using your brochure & inventory data</li>
              <li className="text-white/70">Captures phone numbers and names from high-intent buyers</li>
              <li className="text-white/70">Schedules site visits directly into your CRM or calendar</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button asChild size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 font-medium text-base rounded-none transition-all hover:scale-[1.02] hover:shadow-lg">
                <Link to="/chat">See Chat Assistant</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-medium text-base rounded-none transition-all hover:scale-[1.02] hover:shadow-lg">
                <a href="https://chat-assistant.j-agents.in" target="_blank" rel="noopener noreferrer">
                  Visit Live Demo <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="relative min-h-[80vh] flex items-center bg-black border-y border-white/5">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url('${office2}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-6xl">
            <div className="mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Precision Systems.</h2>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase font-semibold">How We Work</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  num: "01", 
                  title: "Tell us your problem", 
                  body: "We identify high-impact manual bottlenecks or revenue leaks in your existing workflow. Every agent starts with a clear, measurable objective." 
                },
                { 
                  num: "02", 
                  title: "We build and install it", 
                  body: "Our team engineers a custom agent tailored to your data and deploys it directly into your stack. Zero technical friction for your team." 
                },
                { 
                  num: "03", 
                  title: "It runs on its own", 
                  body: "The system operates autonomously 24/7, delivering verifiable results and ROI without requiring manual oversight or maintenance." 
                },
              ].map((step, idx) => (
                <div key={step.num} className="p-8 sm:p-10 backdrop-blur-md bg-white/5 border border-white/10 flex flex-col relative animate-fade-in-up hover:scale-[1.02] hover:shadow-lg transition-all" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                  <div className="w-12 h-px bg-white/20 mb-8" />
                  <span className="text-5xl sm:text-6xl font-light text-white/10 tracking-tighter mb-6 block absolute top-6 right-6 z-0">{step.num}</span>
                  <h3 className="text-xl sm:text-2xl text-white font-medium mb-4 relative z-10">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light relative z-10 text-sm sm:text-base">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="relative py-40 bg-black text-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url('${businessman2}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up p-8 sm:p-12 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all">
            <h2 className="text-3xl sm:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Every hour you're offline, <br className="hidden sm:block" />
              a competitor wins.
            </h2>
            <p className="text-xl text-white/60 mb-14 font-light">
              Stop bleeding leads and wasting hours on manual tasks. <br className="hidden sm:block" />
              Let's deploy your first agent today.
            </p>
            <div className="flex justify-center gap-6 mb-12">
               <div className="w-24 h-24 rounded-lg overflow-hidden border border-white/10">
                   <img src={flatlay2} alt="Desk flatlay" className="w-full h-full object-cover" />
               </div>
            </div>
            <Button asChild size="lg" className="h-16 px-12 bg-white text-black hover:bg-white/90 font-medium text-lg rounded-none transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:-translate-y-1 hover:scale-[1.02]">
              <Link to="/contact">
                Deploy Your First Agent
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

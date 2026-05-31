import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, MessageCircle, Sparkles, HeadphonesIcon, Linkedin } from "lucide-react";
import logo from "@/assets/J Agents Logo Dark(PNG).png";
import founderImg from "@/assets/Founder - Zoomed.png";

import threematte1 from "@/assets/About Page/_Close-up_of_three_dark_matte_202605141818 (1).jpeg";
import threematte2 from "@/assets/About Page/_Close-up_of_three_dark_matte_202605141818.jpeg";
import macrodark1 from "@/assets/About Page/_Macro_close-up_of_a_dark_202605141818 (1).jpeg";
import macrodark2 from "@/assets/About Page/_Macro_close-up_of_a_dark_202605141818.jpeg";
import wideangle1 from "@/assets/About Page/_Wide_angle_close-up_of_a_202605141817 (1).jpeg";
import wideangle2 from "@/assets/About Page/_Wide_angle_close-up_of_a_202605141817.jpeg";

const About = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${wideangle1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full container mx-auto px-6 lg:px-8 py-24 z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="badge-label text-white/80">About</span>
              <span className="inline-flex items-center gap-1.5 text-white normal-case tracking-normal font-semibold backdrop-blur-md bg-white/5 px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                <img src={logo} alt="J Agents Logo" className="h-3 w-auto object-contain opacity-80" />
                <span className="text-[10px] font-bold tracking-tight opacity-90">J Agents</span>
              </span>
            </div>
            <h1 className="leading-[1.1] text-white">
              We automate the work that shouldn't need a human.
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${threematte1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem] animate-fade-in-up">
            <div>
              <p className="badge-label mb-6 text-white/80">Why we exist</p>
              <h2 className="leading-snug text-white">
                Most businesses lose time to work that doesn't need a human.
              </h2>
            </div>
            <div className="space-y-6 lg:pt-10">
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                Repetitive support queries, missed follow-ups, and manual handoffs that should have been automated long ago — this is the layer that slows teams down and loses customers silently.
              </p>
              <p className="text-white/60 text-lg leading-relaxed flex flex-wrap items-baseline font-medium">
                <span className="inline-flex items-center gap-1 font-bold text-white mr-1.5 backdrop-blur-md bg-white/10 px-2 py-0.5 rounded-sm border border-white/10">
                  <img src={logo} alt="J Agents Logo" className="h-2.5 w-auto object-contain self-center opacity-80" />
                  <span className="text-[11px] tracking-tight text-white/90">J Agents</span>
                </span>
                <span>builds AI agent systems that handle this layer so your team can focus on what actually requires human judgment.</span>
              </p>
              <p className="text-white/40 leading-relaxed italic text-sm font-medium">
                We design, build, and maintain these systems for businesses and agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-16 lg:py-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${macrodark1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <p className="badge-label mb-10 text-white/80 animate-fade-in-up">What we build</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: "AI Chat Assistants",
                  desc: "Instant responses to customer queries, 24/7. Built on your actual business information.",
                  link: "/chat",
                },
                {
                  icon: Sparkles,
                  title: "Drish",
                  desc: "An AI content agent built for D2C brands. Generates full 5-slide carousels in seconds.",
                  link: "/drish",
                },
                {
                  icon: HeadphonesIcon,
                  title: "SaaS Support Agents",
                  desc: "Handles refunds, pricing, and account queries with smart escalation for everything else.",
                  link: "/contact",
                },
              ].map((item, idx) => (
                <div 
                  key={item.title} 
                  onClick={() => navigate(item.link)}
                  className="p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:border-white/20 transition-all group animate-fade-in-up hover:scale-[1.02] hover:shadow-lg"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors shadow-md">
                    <item.icon className="h-4 w-4 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-white/90 mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-sm text-white/60 font-medium leading-relaxed mb-6">{item.desc}</p>
                  <Link to={item.link} className="text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1.5">
                    Learn more <ArrowRight className="h-3 w-3 opacity-50" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 lg:py-24 bg-black border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${threematte2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem] animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              <div className="lg:col-span-1">
                <p className="badge-label mb-6 text-white/80">How we work</p>
                <h2 className="leading-tight text-white">
                  Simple to work with.
                </h2>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { num: "01", title: "Discovery call", desc: "We learn your workflow and identify where time or leads are being lost." },
                  { num: "02", title: "We build it", desc: "Setup complete in a few days. You don't manage any technical work." },
                  { num: "03", title: "It goes live", desc: "Everything is installed and running on your site or in your system." },
                  { num: "04", title: "Ongoing support", desc: "We maintain it. If something breaks or needs updating, we fix it." },
                ].map((step, idx) => (
                  <div key={step.num} className="flex items-start gap-5 animate-fade-in-up group hover:scale-[1.02] transition-all" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span className="text-3xl font-black text-white/10 tracking-tighter leading-none mt-1 group-hover:text-white/30 transition-colors">{step.num}</span>
                    <div>
                      <p className="text-base font-semibold text-white/90 mb-2">{step.title}</p>
                      <p className="text-sm text-white/60 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-24 lg:py-32 bg-black border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${wideangle2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-14 rounded-[2.5rem] animate-fade-in-up shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="aspect-square overflow-hidden rounded-2xl border border-white/20 w-48 sm:w-64 md:w-full mx-auto shadow-[0_15px_30px_-5px_rgba(255,255,255,0.1)]">
                  <img src={founderImg} alt="Jogeeswara" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left md:pt-4">
                <p className="badge-label mb-6 text-white/80">Meet the Founder</p>
                <h2 className="mb-4 text-white">
                  Jogeeswara
                </h2>
                <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-8 font-medium">
                  He built J Agents because he saw how much time businesses waste on work that doesn't need a human. His focus is on building AI systems that are practical, fast to deploy, and actually used.
                </p>
                <a 
                  href="https://www.linkedin.com/in/jogeeswara-puvvala-85603b24b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${macrodark2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] animate-fade-in-up hover:scale-[1.02] transition-all hover:shadow-lg">
            <h2 className="leading-tight text-white">
              Let's see if we can help.
            </h2>
            <p className="mt-6 text-lg text-white/60 font-medium leading-relaxed">
              A quick call to understand your workflow. No pressure.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="btn-refined h-14 px-6 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02]">
                <Link to="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

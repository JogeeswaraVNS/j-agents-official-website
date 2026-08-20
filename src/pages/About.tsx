import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/J Agents Logo Dark(PNG).png";

import threematte1 from "@/assets/About Page/_Close-up_of_three_dark_matte_202605141818 (1).jpg";
import threematte2 from "@/assets/About Page/_Close-up_of_three_dark_matte_202605141818.jpg";
import macrodark2 from "@/assets/About Page/_Macro_close-up_of_a_dark_202605141818.jpg";
import wideangle1 from "@/assets/About Page/_Wide_angle_close-up_of_a_202605141817 (1).jpg";

const About = () => {
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
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="badge-label text-white/80">About</span>
              <span className="inline-flex items-center gap-1.5 text-white normal-case tracking-normal font-semibold backdrop-blur-md bg-white/5 px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                <img src={logo} alt="JAgents Labs Logo" className="h-3 w-auto object-contain opacity-80" />
                <span className="text-[10px] font-bold tracking-tight opacity-90">JAgents Labs</span>
              </span>
            </div>
            <h1 className="leading-[1.1] text-white mb-6">
              A studio built around understanding your business first.
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
              J Agents Labs designs and builds AI agents and software for real estate, D2C brands, and businesses running processes no template was built for.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 lg:py-32 bg-black border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${threematte1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-14 rounded-[2.5rem] animate-fade-in-up">
            <p className="badge-label mb-6 text-white/80">What we do</p>
            <h2 className="leading-snug text-white mb-8">
              From a diagnosis to a product
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              We work across real estate, D2C, and custom engineering, building Eschure for agents, Digital Office for brokerages, Drish for food brands, and bespoke software for everything in between. Every product starts the same way, understanding exactly how a business runs before deciding what to build.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 lg:py-32 bg-black border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${threematte2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-14 rounded-[2.5rem] animate-fade-in-up">
            <p className="badge-label mb-6 text-white/80">How we work</p>
            <h2 className="leading-tight text-white mb-8">
              Engineering backed by J Agents Studio
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Our custom builds and technical case studies live with J Agents Studio, our engineering arm. What we design here, we know how to ship.
            </p>
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
              Partner with people who understand your business first.
            </h2>
            <p className="mt-6 text-lg text-white/60 font-medium leading-relaxed">
              Tell us what you're working with.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="btn-refined h-14 px-6 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02]">
                <Link to="/contact">
                  Get started
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

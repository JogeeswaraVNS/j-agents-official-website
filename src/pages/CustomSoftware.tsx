import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";

const CustomSoftware = () => {
  const externalLink = "https://jagentsstudio.com";
  
  return (
    <Layout>
      {/* 1. Hero section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-dm-sans">
              When nothing off the shelf fits, we build what does.
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/70 leading-relaxed font-dm-sans">
              Custom software and agents designed around a process no existing tool was built for, engineered by the team behind J Agents Studio.
            </p>
          </div>
        </div>
      </section>

      {/* 2. When this is the right fit */}
      <section className="py-24 bg-zinc-900 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-dm-sans">
              You've already tried the templates. None of them fit.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-dm-sans">
              Maybe it's a workflow specific to your industry, a system that needs to talk to three other tools, or a process you've never seen anyone else solve. If Eschure, Digital Office, or Drish don't match what you need, this is where we start instead.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What custom means here */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-dm-sans">
                Built around your process, not a product roadmap
              </h3>
              <p className="text-white/70 leading-relaxed font-dm-sans">
                No feature backlog to wait on. What gets built is decided by what your business actually needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-dm-sans">
                Full stack, AI native where it matters
              </h3>
              <p className="text-white/70 leading-relaxed font-dm-sans">
                From data architecture to intelligent agents, engineered end to end, not stitched together from APIs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-dm-sans">
                A team that's already shipped this kind of work
              </h3>
              <p className="text-white/70 leading-relaxed font-dm-sans">
                Case studies and technical depth live on J Agents Studio, our engineering arm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA band */}
      <section className="py-24 bg-zinc-900 border-t border-white/10 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 font-dm-sans">
              Built alongside businesses solving problems no one's templated yet.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-dm-sans">
              See our engineering work and case studies.
            </p>
            <Button asChild size="lg" variant="outline" className="btn-refined h-14 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all font-dm-sans">
              <a href={externalLink} target="_blank" rel="noopener noreferrer">
                Visit J Agents Studio <ExternalLink className="ml-2 h-5 w-5 shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomSoftware;

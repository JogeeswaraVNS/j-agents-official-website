import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Eschure = () => {
  const externalLink = "https://eschure.com";
  
  return (
    <Layout>
      {/* 1. Hero section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <h1>Built for the moment you're on the call.</h1>
            <p className="mt-6 text-xl sm:text-2xl text-foreground/70 leading-relaxed max-w-3xl">
              Eschure is a real time copilot for real estate agents, searching your private inventory by meaning, not keywords, while you're still talking to the buyer.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The problem */}
      <section className="py-20 bg-section-alt border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl">The listing is somewhere. You just can't get to it fast enough.</h2>
            <p className="mt-6 text-lg">
              A buyer describes what they want mid call. Your best match is buried in a spreadsheet, a WhatsApp thread, or someone else's notes. By the time you find it, the moment's gone.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Eschure does */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
            
            <div className="space-y-4">
              <h3 className="text-xl">Searches by meaning, not keywords</h3>
              <p>
                Describe what the buyer wants in plain language. Eschure finds the match, even if it's worded nothing like your listing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl">Built for private inventory</h3>
              <p>
                Off market and exclusive listings included, with access control built into the search itself.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl">Works while you're still on the call</h3>
              <p>
                No switching tabs, no pausing the conversation. Results appear in real time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Closing CTA band */}
      <section className="py-24 bg-section-dark border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-section-dark-foreground">Built alongside Dubai's agents, for exactly how they work.</h2>
            <p className="text-xl text-section-dark-muted">See Eschure in action.</p>
            
            <div className="pt-4">
              <Button asChild size="lg" variant="outline" className="btn-refined h-14 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all rounded-full">
                <a href={externalLink} target="_blank" rel="noopener noreferrer">
                  Visit Eschure <ExternalLink className="ml-2 h-5 w-5 shrink-0" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eschure;

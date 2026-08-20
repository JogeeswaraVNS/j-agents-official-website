import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Approach = () => {
  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex items-center overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-foreground">We diagnose before we build.</h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/70 leading-relaxed font-medium">
              Every recommendation starts with understanding exactly where your process loses time, loses leads, or loses trust. Nothing gets built until we know that.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Myth / Reality Section */}
      <section className="py-20 bg-section-alt border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
            {/* Pair 1 */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-16">
              <div>
                <span className="badge-label mb-4 block">Assumption</span>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  "Buyers can search listing portals themselves, so agent side search tools aren't necessary."
                </p>
              </div>
              <div>
                <span className="badge-label mb-4 block text-primary">Reality</span>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  Portals only show what's publicly listed. The inventory that actually closes deals, private and off market, never shows up there. The gap is access, not search. That's what we build for.
                </p>
              </div>
            </div>

            {/* Pair 2 */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-16">
              <div>
                <span className="badge-label mb-4 block">Assumption</span>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  "Off market inventory is too sensitive to search quickly."
                </p>
              </div>
              <div>
                <span className="badge-label mb-4 block text-primary">Reality</span>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  Sensitivity is about who can access it, not how fast it can be found. We build access control into the search itself, so speed and confidentiality aren't a tradeoff.
                </p>
              </div>
            </div>

            {/* Pair 3 */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-16">
              <div>
                <span className="badge-label mb-4 block">Assumption</span>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  "An AI assistant is just a chatbot with a better name."
                </p>
              </div>
              <div>
                <span className="badge-label mb-4 block text-primary">Reality</span>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  A generic chatbot answers questions. What we build is trained on your actual listings, your actual process, your actual tone, so it works like someone who already knows the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How we work */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-24 max-w-3xl">
            <h2 className="text-foreground">How we get from your problem to your product</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col">
              <span className="text-primary/40 text-sm font-mono mb-5 border-b border-border/50 pb-4 inline-block w-full">01</span>
              <h3 className="mb-4 text-xl">We listen first</h3>
              <p className="text-foreground/75 leading-relaxed">
                Not a feature wishlist. We want the spreadsheet, the WhatsApp thread, the workaround you built because nothing else fit.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col">
              <span className="text-primary/40 text-sm font-mono mb-5 border-b border-border/50 pb-4 inline-block w-full">02</span>
              <h3 className="mb-4 text-xl">We map where it breaks</h3>
              <p className="text-foreground/75 leading-relaxed">
                Every process has a point where it slows down or loses information. We find that point before we design anything.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col">
              <span className="text-primary/40 text-sm font-mono mb-5 border-b border-border/50 pb-4 inline-block w-full">03</span>
              <h3 className="mb-4 text-xl">We build around your process</h3>
              <p className="text-foreground/75 leading-relaxed">
                The tool adapts to how your business runs. We don't ask you to change your workflow to fit our product.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col">
              <span className="text-primary/40 text-sm font-mono mb-5 border-b border-border/50 pb-4 inline-block w-full">04</span>
              <h3 className="mb-4 text-xl">We stay in it after launch</h3>
              <p className="text-foreground/75 leading-relaxed">
                Software that's right on day one and wrong by month three isn't done. We keep tuning as your business changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA band */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="mb-6">Partner with people who understand your business first.</h2>
            <p className="text-xl text-foreground/70 mb-10">
              Tell us what's actually happening, workarounds and all. That's where we start.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              <Link to="/contact">Get started</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Approach;

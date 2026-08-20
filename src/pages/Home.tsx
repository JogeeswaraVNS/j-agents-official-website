import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

import office1 from "@/assets/Home Page/_Close-up_of_a_glass_office_202605141758.jpg";

const Home = () => {
  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-start bg-black overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-no-repeat opacity-40"
          style={{ 
            backgroundImage: `url('${office1}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />

        <div className="relative w-full container mx-auto px-6 lg:px-8 z-10 flex flex-col">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 animate-fade-in-up">
              Built alongside you.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              We understand how your business runs before we touch a single line of code. That's how everything we build actually fits.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Insight line */}
      <section className="bg-black py-16 sm:py-24 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="max-w-4xl mx-auto text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-white/90 font-serif font-light tracking-wide" style={{ fontFamily: 'Crimson Pro, serif' }}>
            "The right software isn't the one with the most features. It's the one built around how you already work."
          </p>
        </div>
      </section>

      {/* 3. Entry cards grid */}
      <section className="bg-black py-24 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <Card className="bg-white/5 border-white/10 flex flex-col hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-xl">For real estate agents</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/70 text-sm leading-relaxed">
                  Eschure searches your private inventory in real time, by meaning not keywords, so you're never scrambling for a listing mid call.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-white p-0 h-auto font-medium hover:text-white/80">
                  <Link to="/eschure">
                    Explore Eschure <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white/5 border-white/10 flex flex-col hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-xl">For brokerages</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/70 text-sm leading-relaxed">
                  Digital Office bundles your website, an AI assistant, and a CRM into one system built for how a brokerage actually runs.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-white p-0 h-auto font-medium hover:text-white/80">
                  <Link to="/digital-office">
                    Explore Digital Office <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white/5 border-white/10 flex flex-col hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-xl">For D2C food brands</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/70 text-sm leading-relaxed">
                  Drish turns your product into carousels and captions that sound like you, every week, without eating your time.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-white p-0 h-auto font-medium hover:text-white/80">
                  <Link to="/drish">
                    Explore Drish <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white/5 border-white/10 flex flex-col hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-xl">Something more specific</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/70 text-sm leading-relaxed">
                  If none of the above fits, you likely have a process no off the shelf tool was built for. We design around exactly that.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-white p-0 h-auto font-medium hover:text-white/80">
                  <Link to="/custom-software">
                    Explore Custom Software <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* 4. Approach teaser & 5. About teaser */}
      <section className="bg-black py-24 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            
            <div className="flex flex-col items-start text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">We diagnose before we build</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 font-light max-w-lg">
                Before we recommend a tool, we look at where your process actually breaks. That's the difference between software you adopt and software you fight.
              </p>
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-none h-12 px-6">
                <Link to="/approach">See how we think</Link>
              </Button>
            </div>

            <div className="flex flex-col items-start text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Built by people who've run the problem</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 font-light max-w-lg">
                J Agents Labs closes the gap between a good idea and software that holds up in production. Meet the studio.
              </p>
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-none h-12 px-6">
                <Link to="/about">About us</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Final CTA band */}
      <section className="bg-[#050505] py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Partner with people who understand your business first.</h2>
          <p className="text-xl text-white/70 font-light mb-10 max-w-2xl">
            Tell us what's actually happening in your business. We'll tell you honestly whether we're the right people to fix it.
          </p>
          <Button asChild size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 font-medium text-base rounded-none transition-all hover:scale-[1.02] hover:shadow-lg">
            <Link to="/contact">Get started</Link>
          </Button>
        </div>
      </section>

    </Layout>
  );
};

export default Home;

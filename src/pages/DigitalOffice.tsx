import { Globe, LayoutDashboard, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

import smartphone1 from "@/assets/Chat Assistant Page/_Close-up_of_a_modern_smartphone_202605141807 (1).jpg";
import darkglass2 from "@/assets/Chat Assistant Page/_Close-up_of_a_dark_glass_202605141810.jpg";
import mechkeyboard1 from "@/assets/Chat Assistant Page/_Extreme_close-up_of_a_mechanical_202605141808.jpg";
import mechkeyboard2 from "@/assets/Chat Assistant Page/_Extreme_close-up_of_a_mechanical_202605141809.jpg";

const DigitalOffice = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-20">
        <div
          className="absolute inset-0 bg-no-repeat animate-subtle-zoom"
          style={{ backgroundImage: `url('${smartphone1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative w-full container mx-auto px-6 lg:px-8 z-10 text-center">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl animate-fade-in-up">
            <h1 className="leading-[1.1] text-white mb-8 text-4xl sm:text-5xl lg:text-6xl font-bold">
              A digital office for how brokerages actually run.
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto font-medium">
              Digital Office bundles your website, an AI assistant, and a CRM into one system, built around your listings and your leads, not a generic template.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div
          className="absolute inset-0 bg-no-repeat opacity-50"
          style={{ backgroundImage: `url('${darkglass2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="badge-label mb-6 text-white/80 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-widest text-xs font-bold">The Problem</p>
            <h2 className="mb-8 leading-tight text-white text-3xl sm:text-4xl lg:text-5xl">
              Your listings live in a spreadsheet. Your website hasn't changed since launch.
            </h2>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              Leads come in through a contact form and get lost in an inbox. Listings get updated in one place and forgotten everywhere else. None of it talks to each other.
            </p>
          </div>
        </div>
      </section>

      {/* What's in the bundle */}
      <section className="py-24 lg:py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat opacity-50"
          style={{ backgroundImage: `url('${mechkeyboard1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
                What's in the bundle
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Point 1 */}
              <div className="backdrop-blur-md bg-white/5 p-8 sm:p-10 rounded-[2rem] border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all flex flex-col items-start shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-white/80" />
                </div>
                <h3 className="mb-4 text-xl sm:text-2xl text-white font-bold leading-tight">A website built around your listings</h3>
                <p className="text-white/60 leading-relaxed">
                  Not a static brochure site. Your listings live and update in one place, reflected everywhere they need to be.
                </p>
              </div>

              {/* Point 2 */}
              <div className="backdrop-blur-md bg-white/5 p-8 sm:p-10 rounded-[2rem] border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all flex flex-col items-start shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-white/80" />
                </div>
                <h3 className="mb-4 text-xl sm:text-2xl text-white font-bold leading-tight">An AI assistant that knows your inventory</h3>
                <p className="text-white/60 leading-relaxed">
                  Answers buyer questions and captures leads directly from your site, trained on your actual listings, not a generic script.
                </p>
              </div>

              {/* Point 3 */}
              <div className="backdrop-blur-md bg-white/5 p-8 sm:p-10 rounded-[2rem] border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all flex flex-col items-start shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <LayoutDashboard className="h-6 w-6 text-white/80" />
                </div>
                <h3 className="mb-4 text-xl sm:text-2xl text-white font-bold leading-tight">A mini CRM built for brokerages</h3>
                <p className="text-white/60 leading-relaxed">
                  Every lead, every enquiry, every listing update in one place. No more chasing information across five different tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat opacity-50"
          style={{ backgroundImage: `url('${mechkeyboard2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-10 sm:p-16 rounded-[2.5rem] hover:scale-[1.02] transition-all hover:shadow-lg">
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Built alongside brokerages, for exactly how they run.
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              See Digital Office in action.
            </p>
            
            <Button asChild variant="outline" size="lg" className="btn-refined h-14 px-8 sm:px-12 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all text-base font-semibold">
              <a href="https://jagentsstudio.com" target="_blank" rel="noopener noreferrer">
                Visit Digital Office ↗
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalOffice;

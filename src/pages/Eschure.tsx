import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";

const Eschure = () => {
  const externalLink = "https://eschure.com";
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-white">Eschure</h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              {/* TODO: content */}
              Placeholder for Eschure content.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="btn-refined h-14 px-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all">
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

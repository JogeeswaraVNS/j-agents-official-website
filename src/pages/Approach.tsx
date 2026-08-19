import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Approach = () => {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-white">Approach</h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed">
              {/* TODO: content */}
              Placeholder for Approach content.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Approach;

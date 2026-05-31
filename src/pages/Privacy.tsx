import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background px-6">
        <div className="max-w-2xl w-full text-center py-24 lg:py-32">
          <h1 className="mb-12">
            Privacy Policy
          </h1>
          
          <div className="space-y-10 text-lg text-muted-foreground/60 leading-relaxed font-medium">
            <p>
              We believe in keeping things simple and respecting your privacy.
            </p>
            <p>
              When you interact with our Chat Assistant, we collect your IP address to prevent spam and abuse. This data is stored securely in our database and is automatically deleted within 24 hours. We never sell, share, or use your data for marketing purposes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

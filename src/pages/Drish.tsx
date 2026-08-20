import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import chocolate1 from "@/assets/Drish Page/_Extreme_close-up_of_dark_chocolate_202605141813 (1).jpg";
import macbook1 from "@/assets/Drish Page/_Close-up_of_an_open_MacBook_202605141812.jpg";
import darkobject1 from "@/assets/Drish Page/_Close-up_of_a_single_dark_202605141814 (1).jpg";
import darkobject2 from "@/assets/Drish Page/_Close-up_of_a_single_dark_202605141814.jpg";
import chocolate2 from "@/assets/Drish Page/_Extreme_close-up_of_dark_chocolate_202605141813.jpg";

const Drish = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    email: "",
    instagram: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        user_id: "1f0f3191-4907-453c-bb1c-92cc05cccf97",
        name: formData.name,
        email: formData.email,
        mobile: "",
        looking_for: `Drish Access: ${formData.brandName}`,
        message: formData.instagram ? `Instagram Handle: ${formData.instagram}` : "No Instagram Handle provided",
      };

      const res = await fetch(
        "https://tpzoeumzxamgtdngcztx.supabase.co/functions/v1/contact-handler",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      toast({ title: "Request sent", description: "We'll be in touch soon." });
    } catch (err) {
      toast({
        title: "Error sending request",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-no-repeat animate-subtle-zoom"
          style={{ backgroundImage: `url('${chocolate1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative w-full container mx-auto px-6 lg:px-8 py-32 z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0 backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
              <Sparkles className="w-3.5 h-3.5 text-white/60" />
              <span className="badge-label text-white/80">Drish AI Content Agent</span>
            </div>
            
            <h1 className="leading-[1.1] animate-fade-in-up text-white" style={{ animationDelay: '200ms' }}>
              Your product has a story.
              <span className="block text-white/60 mt-2">Drish turns it into content every week.</span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Drish generates carousels and captions for D2C brands, built from your actual product, in a voice that sounds like you, not a template.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${macbook1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2.5rem]">
            <h2 className="mb-8 text-white">
              You know your product. Turning it into content is the part that eats your time.
            </h2>
            <p className="text-white/70 text-lg font-medium leading-relaxed">
              A new carousel every week, captions that don't sound like a template, consistency across a dozen posts a month. It's not that you don't know your brand. It's that there's no time left to keep saying it.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Drish does */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${darkobject1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Carousels built from your product, not stock templates",
                desc: "Feed it your product details and photos. Drish builds carousels that actually look like your brand made them."
              },
              {
                title: "Captions in your voice",
                desc: "Trained on how your brand actually talks, not generic marketing language."
              },
              {
                title: "A week's worth of content, not a single post",
                desc: "Built for the weekly grind of staying visible, not a one off campaign."
              }
            ].map((point, idx) => (
              <div key={idx} className="p-8 sm:p-10 backdrop-blur-md rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                <h3 className="mb-4 text-white text-2xl font-bold">{point.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who it's for */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${darkobject2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl text-white mb-6 font-bold tracking-tight">
              Built for D2C food brands right now
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Fashion and beauty brands are coming soon. If that's you, get on the list early.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA with Form */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${chocolate2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="animate-fade-in-up">
              <h2 className="mb-6 text-white text-4xl lg:text-5xl font-bold tracking-tight">
                Partner with people who understand your business first.
              </h2>
              <p className="text-lg text-white/70 font-medium leading-relaxed max-w-lg">
                Get early access to Drish, or tell us what you're building so we can build the right thing for it.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 sm:p-12 backdrop-blur-md bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">You're on the list</h3>
                    <p className="text-white/70">We'll reach out when we're ready for you.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="badge-label opacity-80 text-white ml-1">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-14 bg-black/50 border-white/10 focus:border-white/30 rounded-2xl text-sm placeholder:text-white/30 text-white px-6 backdrop-blur-sm"
                        placeholder="Jane Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="brandName" className="badge-label opacity-80 text-white ml-1">Brand Name</Label>
                      <Input
                        id="brandName"
                        name="brandName"
                        type="text"
                        required
                        value={formData.brandName}
                        onChange={handleChange}
                        className="h-14 bg-black/50 border-white/10 focus:border-white/30 rounded-2xl text-sm placeholder:text-white/30 text-white px-6 backdrop-blur-sm"
                        placeholder="Your D2C Brand"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="badge-label opacity-80 text-white ml-1">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-14 bg-black/50 border-white/10 focus:border-white/30 rounded-2xl text-sm placeholder:text-white/30 text-white px-6 backdrop-blur-sm"
                        placeholder="jane@brand.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="badge-label opacity-80 text-white ml-1">Instagram Handle (Optional)</Label>
                      <Input
                        id="instagram"
                        name="instagram"
                        type="text"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="h-14 bg-black/50 border-white/10 focus:border-white/30 rounded-2xl text-sm placeholder:text-white/30 text-white px-6 backdrop-blur-sm"
                        placeholder="@yourbrand"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-refined w-full h-14 mt-4 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98] font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Get early access"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Drish;

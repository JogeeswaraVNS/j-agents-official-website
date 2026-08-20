import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check, Linkedin, Instagram } from "lucide-react";

import office1 from "@/assets/Contact Page/_Close-up_of_a_dark_office_202605141819 (1).jpg";
import office2 from "@/assets/Contact Page/_Close-up_of_a_dark_office_202605141819.jpg";
import extreme1 from "@/assets/Contact Page/_Extreme_close-up_of_a_dark_202605141819.jpg";
import extreme2 from "@/assets/Contact Page/_Extreme_close-up_of_a_dark_202605141820.jpg";
import flatlay1 from "@/assets/Contact Page/_Overhead_flat_lay_of_a_202605141821 (1).jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    lookingFor: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();

    try {
      const payload = {
        user_id: "1f0f3191-4907-453c-bb1c-92cc05cccf97",
        name,
        email: String(data.get("email") || "").trim(),
        company,
        looking_for: String(data.get("lookingFor") || "").trim(),
        message: String(data.get("message") || "").trim(),
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
      toast({ title: "Message sent", description: "We'll be in touch within 24 hours." });
      form.reset();
    } catch (err) {
      toast({
        title: "Error sending message",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-24 lg:py-32 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{ backgroundImage: `url('${office2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-md mx-auto text-center backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] animate-fade-in-up">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden">
                <img src={flatlay1} alt="Success" className="w-full h-full object-cover opacity-50" />
                <Check className="h-8 w-8 text-white absolute" />
              </div>
              <h1 className="text-3xl font-semibold text-white tracking-tight mb-4">
                Thanks for reaching out
              </h1>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                We've received your message and will be in touch soon.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-black border-b border-white/5 min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${office1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left Sidebar Info */}
            <div className="space-y-16 animate-fade-in-up">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem]">
                <p className="badge-label mb-6 text-white/80">Contact</p>
                <h1 className="leading-[1.1] mb-8 text-white text-4xl lg:text-5xl font-medium tracking-tight">
                  Tell us what you're working with.
                </h1>
                <p className="text-lg text-white/60 leading-relaxed max-w-md font-medium mb-8">
                  Whether it's a process that's outgrown your current tools or something you haven't found the right fit for yet, start here.
                </p>
                <div className="rounded-xl overflow-hidden border border-white/10 w-full h-40">
                  <img src={extreme1} alt="Office" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem]">
                <p className="badge-label mb-8 text-white/80">What to expect</p>
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white/90">What happens after you reach out</h2>
                  <p className="text-base text-white/60 leading-relaxed font-medium">
                    We read every message ourselves. If it's a fit, we'll set up a short call to understand your business before talking about any tool. If it's not a fit, we'll tell you that too.
                  </p>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10 backdrop-blur-md bg-white/5 p-6 sm:p-10 rounded-[2.5rem] mt-10">
                <p className="text-sm text-white/60 mb-6 font-medium">
                  Email us at{" "}
                  <a href="mailto:hello@jagentslabs.com" className="text-white hover:text-white/80 transition-all underline underline-offset-8 decoration-white/30 hover:decoration-white/80">
                    hello@jagentslabs.com
                  </a>
                  <br /><br />
                  Call or WhatsApp us at{" "}
                  <a href="tel:+919063316737" className="text-white hover:text-white/80 transition-all underline underline-offset-8 decoration-white/30 hover:decoration-white/80">
                    +91 90633 16737
                  </a>
                </p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/j-agents-labs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 bg-white/5 transition-all hover:scale-110 shadow-md" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="https://www.instagram.com/jagents.ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 bg-white/5 transition-all hover:scale-110 shadow-md" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative lg:sticky lg:top-32 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_70%)] blur-2xl rounded-[3rem] -z-10" />
              <div className="p-6 sm:p-12 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden hover:border-white/20 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl -mr-16 -mt-16" />

                <div className="rounded-xl overflow-hidden border border-white/10 w-full h-32 mb-8 hidden sm:block">
                  <img src={extreme2} alt="Dark space" className="w-full h-full object-cover opacity-80" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Name */}
                  <div className="space-y-3">
                    <Label htmlFor="name" className="badge-label opacity-80 block ml-1 text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-14 bg-black/50 border-white/10 focus:border-white/30 rounded-2xl text-sm placeholder:text-white/30 text-white transition-all px-6 backdrop-blur-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <Label htmlFor="email" className="badge-label opacity-80 block ml-1 text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="h-14 bg-black/50 border-white/10 focus:border-white/30 rounded-2xl text-sm placeholder:text-white/30 text-white transition-all px-6 backdrop-blur-sm"
                    />
                  </div>

                  {/* Company/Brand name */}
                  <div className="space-y-3">
                    <Label htmlFor="company" className="badge-label opacity-80 block ml-1 text-white">Company/Brand name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company or brand"
                      className="h-14 bg-black/50 border-white/10 focus:border-white/30 rounded-2xl text-sm placeholder:text-white/30 text-white transition-all px-6 backdrop-blur-sm"
                    />
                  </div>

                  {/* Looking For */}
                  <div className="space-y-3">
                    <Label htmlFor="lookingFor" className="badge-label opacity-80 block ml-1 text-white">What are you looking for?</Label>
                    <select
                      id="lookingFor"
                      name="lookingFor"
                      required
                      value={formData.lookingFor}
                      onChange={handleChange}
                      className="w-full h-14 bg-black/50 border border-white/10 focus:border-white/30 rounded-2xl text-sm text-white transition-all px-6 backdrop-blur-sm appearance-none outline-none"
                    >
                      <option value="" disabled className="text-white/30">Select an option</option>
                      <option value="Eschure" className="bg-neutral-900 text-white">Eschure</option>
                      <option value="Digital Office" className="bg-neutral-900 text-white">Digital Office</option>
                      <option value="Drish" className="bg-neutral-900 text-white">Drish</option>
                      <option value="Custom Software" className="bg-neutral-900 text-white">Custom Software</option>
                      <option value="Not sure yet" className="bg-neutral-900 text-white">Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <Label htmlFor="message" className="badge-label opacity-80 block ml-1 text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What's actually happening in your business right now?"
                      className="min-h-[180px] resize-none bg-black/50 border-white/10 focus:border-white/30 rounded-2xl p-6 text-sm leading-relaxed placeholder:text-white/30 text-white transition-all backdrop-blur-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-refined w-full h-14 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send it over"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

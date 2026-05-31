import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check, Linkedin, Instagram, Clock, MessageCircle, ShieldCheck } from "lucide-react";

import office1 from "@/assets/Contact Page/_Close-up_of_a_dark_office_202605141819 (1).jpeg";
import office2 from "@/assets/Contact Page/_Close-up_of_a_dark_office_202605141819.jpeg";
import extreme1 from "@/assets/Contact Page/_Extreme_close-up_of_a_dark_202605141819.jpeg";
import extreme2 from "@/assets/Contact Page/_Extreme_close-up_of_a_dark_202605141820.jpeg";
import flatlay1 from "@/assets/Contact Page/_Overhead_flat_lay_of_a_202605141821 (1).jpeg";
import flatlay2 from "@/assets/Contact Page/_Overhead_flat_lay_of_a_202605141821.jpeg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const FORMSPREE_FORM_ID = "mykkzlkw";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact from ${formData.name}`,
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        toast({ title: "Message sent", description: "We'll be in touch within 24 hours." });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                We've received your message and will be in touch within 24 hours.
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
                <h1 className="leading-[1.1] mb-8 text-white">
                  Let's talk about your business.
                </h1>
                <p className="text-lg text-white/60 leading-relaxed max-w-md font-medium mb-8">
                  Tell us what you're trying to automate. We'll take it from there.
                </p>
                <div className="rounded-xl overflow-hidden border border-white/10 w-full h-40">
                  <img src={extreme1} alt="Office" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem]">
                <p className="badge-label mb-8 text-white/80">What to expect</p>
                <div className="space-y-10">
                  {[
                    { icon: Clock, title: "Reply within 24 hours", desc: "We review every message and get back to you the next business day.", img: extreme2 },
                    { icon: MessageCircle, title: "A short discovery call", desc: "We learn your workflow and what you're trying to improve.", img: flatlay2 },
                    { icon: ShieldCheck, title: "A clear proposal", desc: "We share exactly how we can help, with honest pricing upfront.", img: flatlay1 },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-6 group hover:scale-[1.02] transition-all">
                      <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-white/20 transition-colors overflow-hidden relative">
                        <img src={item.img} alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" />
                        <item.icon className="h-5 w-5 text-white/90 absolute z-10" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">{item.title}</p>
                        <p className="text-sm text-white/60 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-white/10 backdrop-blur-md bg-white/5 p-6 sm:p-10 rounded-[2.5rem] mt-10">
                <p className="text-sm text-white/60 mb-6 font-medium">
                  Prefer email?{" "}
                  <a href="mailto:contact.jagents@gmail.com" className="text-white hover:text-white/80 transition-all underline underline-offset-8 decoration-white/30 hover:decoration-white/80">
                    contact.jagents@gmail.com
                  </a>
                </p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/j-agents/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 bg-white/5 transition-all hover:scale-110 shadow-md" aria-label="LinkedIn">
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

                  <div className="space-y-3">
                    <Label htmlFor="message" className="badge-label opacity-80 block ml-1 text-white">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you'd like to improve..."
                      className="min-h-[180px] resize-none bg-black/50 border-white/10 focus:border-white/30 rounded-2xl p-6 text-sm leading-relaxed placeholder:text-white/30 text-white transition-all backdrop-blur-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-refined w-full h-14 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>

                  <p className="text-[10px] text-white/40 text-center font-bold tracking-widest uppercase pt-2">
                    Response time: &lt; 24 Hours
                  </p>
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

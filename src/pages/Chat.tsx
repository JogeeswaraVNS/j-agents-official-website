import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, MessageCircle, Check, Zap, Star, Shield, Users, Layers, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import demoVideo from "@/assets/Chat Assistant Intro Video - Linkedin.mp4";

import darkglass1 from "@/assets/Chat Assistant Page/_Close-up_of_a_dark_glass_202605141810 (1).jpg";
import darkglass2 from "@/assets/Chat Assistant Page/_Close-up_of_a_dark_glass_202605141810.jpg";
import smartphone1 from "@/assets/Chat Assistant Page/_Close-up_of_a_modern_smartphone_202605141807 (1).jpg";
import smartphone2 from "@/assets/Chat Assistant Page/_Close-up_of_a_modern_smartphone_202605141807.jpg";
import hand1 from "@/assets/Chat Assistant Page/_Close-up_of_a_person's_hand_202605141811 (1).jpg";
import hand2 from "@/assets/Chat Assistant Page/_Close-up_of_a_person's_hand_202605141811.jpg";
import mechkeyboard1 from "@/assets/Chat Assistant Page/_Extreme_close-up_of_a_mechanical_202605141808.jpg";
import mechkeyboard2 from "@/assets/Chat Assistant Page/_Extreme_close-up_of_a_mechanical_202605141809.jpg";
import flatlay1 from "@/assets/Chat Assistant Page/_Overhead_flat_lay_of_a_202605141808.jpg";
import flatlay2 from "@/assets/Chat Assistant Page/_Overhead_flat_lay_of_a_202605141809.jpg";

const whoItsForTags = [
  "Clinics", "Salons", "Coaching Centres", "Professional Businesses", "Retail Shops", "Restaurants",
];

const Chat = () => {
  const videoSectionRef = useRef<HTMLDivElement>(null);



  return (

    <Layout>
      <style>{`
        .minimal-video::-webkit-media-controls-play-button,
        .minimal-video::-webkit-media-controls-mute-button,
        .minimal-video::-webkit-media-controls-volume-slider,
        .minimal-video::-webkit-media-controls-fullscreen-button,
        .minimal-video::-webkit-media-controls-time-remaining-display,
        .minimal-video::-webkit-media-controls-current-time-display,
        .minimal-video::-webkit-media-controls-fullscreen-volume-slider,
        .minimal-video::-webkit-media-controls-fullscreen-volume-min-button,
        .minimal-video::-webkit-media-controls-fullscreen-volume-max-button {
          display: none !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-no-repeat animate-subtle-zoom"
          style={{ backgroundImage: `url('${smartphone1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="relative w-full container mx-auto px-6 lg:px-8 py-32 z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0 backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
              <MessageCircle className="w-3.5 h-3.5 text-white/60" />
              <span className="badge-label text-white/80">AI Chat Assistant Agent</span>
            </div>
            
            <h1 className="leading-[1.1] animate-fade-in-up text-white" style={{ animationDelay: '200ms' }}>
              Your business.
              <span className="block text-white/90 mt-2">Always on.</span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              We build and install a Chat Assistant on your website that instantly answers customer questions — 24/7, including nights, weekends, and holidays. Never miss a lead again.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Button asChild size="lg" className="btn-refined h-14 px-6 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Link>
              </Button>
              <Button 
                onClick={() => videoSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                size="lg" 
                className="btn-refined h-14 px-6 sm:px-10 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                See in Action
                <Play className="ml-2 h-5 w-5 shrink-0 fill-white/20" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Area */}
      <section ref={videoSectionRef} className="py-24 lg:py-32 border-y border-white/5 relative overflow-hidden bg-black">

        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${darkglass1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="mb-4 text-white">
                See it in action.
              </h2>
              <p className="text-white/60 text-lg font-medium">
                A real Chat Assistant conversation — instant answers, any time of day.
              </p>
            </div>
            
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative group animate-fade-in-up hover:scale-[1.02] transition-all" style={{ animationDelay: '200ms' }}>
              <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-white/5">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="text-[9px] font-bold text-white/50 tracking-[0.3em] uppercase">Live Demo Sequence</div>
              </div>
              
              <div className="bg-black aspect-video relative flex items-center justify-center overflow-hidden">
                <video
                  src={demoVideo}
                  className="w-full h-full object-contain minimal-video"
                  controls
                  autoPlay
                  loop
                  playsInline
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem + Solution */}
      <section className="py-32 lg:py-40 bg-black relative overflow-hidden border-t border-white/5">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${darkglass2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            <div className="sticky top-32 animate-fade-in-up">
              <p className="badge-label mb-6 text-white/80">The problem</p>
              <h2 className="mb-8 leading-tight text-white">
                Most businesses lose customers silently.
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-12">
                A visitor lands on your website. They have a question. They get no reply. They move to the next business. You never know it happened.
              </p>
              <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 w-full h-40">
                  <img src={smartphone2} className="w-full h-full object-cover opacity-80" alt="Problem Context" />
              </div>
              <div className="space-y-6">
                {[
                  { stat: "80%", desc: "of customers expect a reply within 5 minutes. Most businesses can't deliver that." },
                  { stat: "1 in 3", desc: "website visitors leave without engaging because they can't get an instant answer." },
                ].map((item, idx) => (
                  <div key={item.stat} className="flex items-start gap-6 p-6 sm:p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-[2rem] transition-all hover:border-white/20 hover:scale-[1.02] hover:shadow-lg animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <span className="text-3xl sm:text-4xl font-bold text-white/90 flex-shrink-0 leading-none">{item.stat}</span>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="badge-label mb-6 text-white/80">How we solve it</p>
              <div className="flex flex-col gap-10">
                <div className="flex items-start gap-6 backdrop-blur-md bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:scale-[1.02] transition-all hover:shadow-lg">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageCircle className="h-7 w-7 text-white/80" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-white">Built on your business information.</h3>
                    <p className="text-lg text-white/60 leading-relaxed font-medium">
                      Your business offerings, pricing, timings, and FAQs. When a customer asks anything, it replies instantly.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-5 backdrop-blur-md bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:scale-[1.02] transition-all hover:shadow-lg">
                  {[
                    "Built on your actual business offerings, pricing and FAQs",
                    "Replies instantly — day or night",
                    "No staff needed, no missed queries",
                    "Installed on your existing website",
                    "Escalates to you when a human is needed",
                  ].map(point => (
                    <div key={point} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-white/60" />
                      </div>
                      <span className="text-base text-white/70 font-medium">{point}</span>
                    </div>
                  ))}
                  <div className="mt-6 rounded-xl overflow-hidden border border-white/10 w-full h-32">
                     <img src={hand1} className="w-full h-full object-cover opacity-80" alt="Solution Context" />
                  </div>
                </div>

                <div className="p-10 bg-white/10 border border-white/20 rounded-[2rem] backdrop-blur-md relative overflow-hidden group hover:scale-[1.02] transition-all hover:shadow-lg">
                  <p className="text-[9px] text-white/40 mb-4 uppercase tracking-[0.4em] font-bold">Setup Speed</p>
                  <p className="text-2xl font-bold text-white/90 leading-tight">Ready within 24 hours. <br/><span className="text-white/60 font-medium text-xl">No technical effort from you.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${mechkeyboard1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12 items-start">
              <div className="lg:col-span-1 animate-fade-in-up">
                <p className="badge-label mb-6 text-white/80">Process</p>
                <h2 className="leading-tight text-white">
                  Simple setup. We handle everything.
                </h2>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10">
                {[
                  { num: "01", text: "You share your business information with us" },
                  { num: "02", text: "We build your Chat Assistant using that as its knowledge base" },
                  { num: "03", text: "We install it on your website" },
                  { num: "04", text: "It starts answering customers immediately" },
                ].map((step, idx) => (
                  <div key={step.num} className="flex items-start gap-6 sm:gap-8 group backdrop-blur-md bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 animate-fade-in-up hover:scale-[1.02] transition-all hover:shadow-lg" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <span className="text-4xl sm:text-5xl font-black text-white/20 tracking-tighter leading-none group-hover:text-white/40 transition-colors">{step.num}</span>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed font-medium pt-1 sm:pt-2">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For + Results */}
      <section className="py-32 lg:py-40 bg-black relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${flatlay1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-32">

            {/* Who it's for */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start animate-fade-in-up">
              <div className="backdrop-blur-md bg-white/5 p-8 sm:p-10 rounded-[2rem] border border-white/10 hover:scale-[1.02] transition-all hover:shadow-lg">
                <p className="badge-label mb-6 sm:mb-8 text-white/80">Who it's for</p>
                <h2 className="mb-6 sm:mb-8 leading-tight text-white">
                  Built for businesses with a website.
                </h2>
                <p className="text-base sm:text-lg text-white/60 leading-relaxed font-medium">
                  If you get customer enquiries online and can't always respond in time — this is for you.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap gap-3">
                  {whoItsForTags.map((tag) => (
                    <span key={tag} className="px-5 py-2.5 text-xs font-bold border border-white/10 backdrop-blur-md bg-white/5 rounded-xl text-white/70 hover:text-white hover:border-white/20 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] font-bold text-white/40 leading-relaxed uppercase tracking-[0.2em]">
                  Any business that receives customer questions online can benefit.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="pt-32 border-t border-white/10">
              <p className="badge-label mb-12 text-white/80 animate-fade-in-up">The result</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-10">
                {[
                  { headline: "Faster response than competitors", sub: "Your assistant replies in under 3 seconds. Most businesses take hours." },
                  { headline: "More customers who feel heard", sub: "Visitors who get instant answers are more likely to book or buy." },
                  { headline: "Fewer lost leads", sub: "No more silent drop-offs. Every question gets an answer, every time." },
                ].map((r, idx) => (
                  <div key={r.headline} className="flex flex-col gap-6 p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all hover:shadow-lg group animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shadow-md">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-white/80" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-lg sm:text-xl leading-tight text-white">{r.headline}</h3>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-medium">{r.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 lg:py-48 bg-black relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${flatlay2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="mb-6 text-white">
                Simple, honest pricing.
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
                Choose the plan that fits your business needs. No hidden fees. Cancel any time.
              </p>
            </div>

            <Tabs defaultValue="client" className="w-full">
              <div className="flex justify-center mb-16 animate-fade-in-up overflow-x-auto pb-4 scrollbar-hide">
                <TabsList className="backdrop-blur-md bg-white/5 border border-white/10 p-1 h-14 rounded-2xl w-auto inline-flex whitespace-nowrap">
                  <TabsTrigger 
                    value="client" 
                    className="rounded-xl px-4 sm:px-8 h-full text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-black text-white/60"
                  >
                    Client Pricing
                  </TabsTrigger>
                  <TabsTrigger 
                    value="agency" 
                    className="rounded-xl px-4 sm:px-8 h-full text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-black text-white/60"
                  >
                    Agency Seat Packs
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="client" className="animate-fade-in-up">
                {/* Client Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
                  {/* Starter */}
                  <div className="group flex flex-col p-8 sm:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md bg-white/5 transition-all duration-500 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg relative overflow-hidden">
                    <div className="mb-10 sm:mb-12 relative z-10">
                      <p className="badge-label mb-6 sm:mb-8 text-white/80">Starter</p>
                      <div className="flex items-end gap-2 mb-4">
                        <span className="text-4xl sm:text-5xl font-bold text-white/90 tracking-tight">₹2,499</span>
                        <span className="text-base sm:text-lg text-white/50 font-medium mb-1.5">/mo</span>
                      </div>
                      <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest bg-white/10 inline-block px-3 py-1 rounded-full">1,000 msgs/month</p>
                    </div>
                    <div className="mt-auto relative z-10">
                      <Button asChild variant="outline" className="btn-refined w-full h-14 rounded-xl border-white/20 bg-white/10 hover:bg-white/20 hover:text-white transition-all">
                        <Link to="/contact">Get started</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Growth */}
                  <div className="group flex flex-col p-8 sm:p-12 rounded-[2.5rem] border border-white/30 backdrop-blur-md bg-white/10 relative shadow-2xl transform md:-translate-y-4 transition-all duration-500 hover:scale-[1.03]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full text-[9px] font-bold uppercase tracking-[0.3em] shadow-xl">
                      <Zap className="h-3 w-3 fill-black" /> Most Popular
                    </div>
                    <div className="mb-10 sm:mb-12 pt-4 relative z-10">
                      <p className="badge-label mb-6 sm:mb-8 text-white/80">Growth</p>
                      <div className="flex items-end gap-2 mb-4">
                        <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">₹3,499</span>
                        <span className="text-base sm:text-lg text-white/50 font-medium mb-1.5">/mo</span>
                      </div>
                      <p className="text-[11px] font-bold text-white/80 uppercase tracking-widest bg-white/20 inline-block px-3 py-1 rounded-full">2,000 msgs/month</p>
                    </div>
                    <div className="mt-auto relative z-10">
                      <Button asChild className="btn-refined w-full h-14 rounded-xl bg-white text-black hover:bg-white/90 shadow-xl transition-all">
                        <Link to="/contact">Get started</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Pro */}
                  <div className="group flex flex-col p-8 sm:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md bg-white/5 transition-all duration-500 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg relative overflow-hidden">
                    <div className="absolute top-10 right-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/20 bg-white/10 rounded-full text-[8px] font-bold uppercase tracking-widest text-white/70">
                        <Star className="h-3 w-3 fill-white/50 text-white/50" /> Best value
                      </span>
                    </div>
                    <div className="mb-10 sm:mb-12 relative z-10">
                      <p className="badge-label mb-6 sm:mb-8 text-white/80">Pro</p>
                      <div className="flex items-end gap-2 mb-4">
                        <span className="text-4xl sm:text-5xl font-bold text-white/90 tracking-tight">₹4,499</span>
                        <span className="text-base sm:text-lg text-white/50 font-medium mb-1.5">/mo</span>
                      </div>
                      <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest bg-white/10 inline-block px-3 py-1 rounded-full">3,000 msgs/month</p>
                    </div>
                    <div className="mt-auto relative z-10">
                      <Button asChild variant="outline" className="btn-refined w-full h-14 rounded-xl border-white/20 bg-white/10 hover:bg-white/20 hover:text-white transition-all">
                        <Link to="/contact">Get started</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Client Footer Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="p-8 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 hover:scale-[1.02] transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shadow-md">
                        <Zap className="h-4 w-4 text-white/80" />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">Top Up Option</h4>
                    </div>
                    <p className="text-lg font-medium text-white mb-2">₹1,499 per 1,000 msgs</p>
                    <p className="text-sm text-white/50">Valid current month only — no rollover</p>
                  </div>

                  <div className="p-8 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 hover:scale-[1.02] transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shadow-md">
                        <Check className="h-4 w-4 text-white/80" />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">Included in all plans</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {[
                        "Full Setup", "Knowledge Base", "Lead Capture",
                        "Dashboard", "24/7 Automated Replies", "Maintenance"
                      ].map(feature => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-sm text-white/70 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs text-white/40 font-medium italic">No technical knowledge needed. Cancel any time.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="agency" className="animate-fade-in-up">
                {/* Agency Pricing Tiers */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-8">
                  {/* Starter Tier */}
                  <div className="group flex flex-col p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md bg-white/5 transition-all hover:border-white/20 hover:scale-[1.02] hover:shadow-lg">
                    <div className="mb-10">
                      <p className="badge-label mb-6 text-white/80">Starter Tier</p>
                      <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-8">1,000 msgs per seat</p>
                      
                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-tighter">5 Seats</p>
                            <p className="text-lg font-bold text-white">₹1,999<span className="text-xs text-white/50 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-400 uppercase">20% OFF</p>
                            <p className="text-sm font-medium text-white/80">₹9,995/mo</p>
                          </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-tighter">10 Seats</p>
                            <p className="text-lg font-bold text-white">₹1,749<span className="text-xs text-white/50 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-400 uppercase">30% OFF</p>
                            <p className="text-sm font-medium text-white/80">₹17,490/mo</p>
                          </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-tighter">20 Seats</p>
                            <p className="text-lg font-bold text-white">₹1,499<span className="text-xs text-white/50 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-400 uppercase">40% OFF</p>
                            <p className="text-sm font-medium text-white/80">₹29,980/mo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <p className="text-[10px] font-bold text-white/50 uppercase mb-2">Top Up</p>
                      <p className="text-sm font-medium text-white/80">₹1,199 per 1,000 msgs/seat</p>
                    </div>
                  </div>

                  {/* Growth Tier */}
                  <div className="group flex flex-col p-10 rounded-[2.5rem] border border-white/30 backdrop-blur-md bg-white/10 transition-all hover:scale-[1.03] shadow-2xl relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-full text-[8px] font-bold uppercase tracking-[0.2em] shadow-xl">
                      Recommended
                    </div>
                    <div className="mb-10 pt-2">
                      <p className="badge-label mb-6 text-white/80">Growth Tier</p>
                      <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-8">2,000 msgs per seat</p>
                      
                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-white/20 border border-white/20 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/80 uppercase tracking-tighter">5 Seats</p>
                            <p className="text-lg font-bold text-white">₹2,799<span className="text-xs text-white/60 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-300 uppercase">20% OFF</p>
                            <p className="text-sm font-medium text-white/90">₹13,995/mo</p>
                          </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/20 border border-white/20 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/80 uppercase tracking-tighter">10 Seats</p>
                            <p className="text-lg font-bold text-white">₹2,449<span className="text-xs text-white/60 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-300 uppercase">30% OFF</p>
                            <p className="text-sm font-medium text-white/90">₹24,490/mo</p>
                          </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/20 border border-white/20 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/80 uppercase tracking-tighter">20 Seats</p>
                            <p className="text-lg font-bold text-white">₹2,099<span className="text-xs text-white/60 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-300 uppercase">40% OFF</p>
                            <p className="text-sm font-medium text-white/90">₹41,980/mo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/20">
                      <p className="text-[10px] font-bold text-white/60 uppercase mb-2">Top Up</p>
                      <p className="text-sm font-medium text-white">₹999 per 1,000 msgs/seat</p>
                    </div>
                  </div>

                  {/* Pro Tier */}
                  <div className="group flex flex-col p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md bg-white/5 transition-all hover:border-white/20 hover:scale-[1.02] hover:shadow-lg">
                    <div className="mb-10">
                      <p className="badge-label mb-6 text-white/80">Pro Tier</p>
                      <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-8">3,000 msgs per seat</p>
                      
                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-tighter">5 Seats</p>
                            <p className="text-lg font-bold text-white">₹3,599<span className="text-xs text-white/50 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-400 uppercase">20% OFF</p>
                            <p className="text-sm font-medium text-white/80">₹17,995/mo</p>
                          </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-tighter">10 Seats</p>
                            <p className="text-lg font-bold text-white">₹3,149<span className="text-xs text-white/50 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-400 uppercase">30% OFF</p>
                            <p className="text-sm font-medium text-white/80">₹31,490/mo</p>
                          </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex justify-between items-center shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-tighter">20 Seats</p>
                            <p className="text-lg font-bold text-white">₹2,699<span className="text-xs text-white/50 font-medium">/seat</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-green-400 uppercase">40% OFF</p>
                            <p className="text-sm font-medium text-white/80">₹53,980/mo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <p className="text-[10px] font-bold text-white/50 uppercase mb-2">Top Up</p>
                      <p className="text-sm font-medium text-white/80">₹799 per 1,000 msgs/seat</p>
                    </div>
                  </div>
                </div>

                {/* Agency Enterprise & Footer */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  <div className="p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md bg-white/10 border border-white/20 flex flex-col justify-center hover:scale-[1.02] transition-all hover:shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-white text-black flex items-center justify-center shadow-md">
                        <Layers className="h-5 sm:h-6 w-5 sm:w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Enterprise Agency</h3>
                        <p className="text-xs sm:text-sm text-white/60">50+ seats</p>
                      </div>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-white mb-6">Custom pricing</p>
                    <Button asChild className="btn-refined w-full sm:w-auto h-12 px-8 bg-white text-black hover:bg-white/90 rounded-xl transition-all shadow-md hover:scale-[1.02]">
                      <Link to="/contact">Contact Directly</Link>
                    </Button>
                  </div>

                  <div className="p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md bg-white/5 border border-white/10 flex flex-col justify-center hover:scale-[1.02] transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shadow-md">
                        <Shield className="h-4 w-4 text-white/80" />
                      </div>
                      <h4 className="text-[11px] sm:text-sm font-bold uppercase tracking-widest text-white/90">Premium Features Included</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {[
                        "Dedicated Dashboard", "Priority Support",
                        "Custom Onboarding", "API Access", "SLA Guarantee"
                      ].map(feature => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-white/60" />
                          <span className="text-sm text-white/70 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Agency Rule</p>
                      <p className="text-sm font-medium text-white/80">Min. entry 5 seats. Cancel any time.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Footer note */}
            <div className="mt-20 text-center animate-fade-in-up">
              <p className="text-base font-medium text-white/60">
                Not sure which plan fits? <Link to="/contact" className="text-white hover:underline underline-offset-8 decoration-white/20 transition-all font-bold">Book a free call</Link> and we'll help.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${mechkeyboard2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] hover:scale-[1.02] transition-all hover:shadow-lg animate-fade-in-up">
            <h2 className="mb-8 text-2xl sm:text-4xl lg:text-5xl text-white">
              Stop losing customers <br/>to silence.
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Let us build a Chat Assistant that works while you sleep. Live on your website within 24 hours.
            </p>
            <div className="flex justify-center gap-6 mb-12">
               <div className="w-24 h-24 rounded-lg overflow-hidden border border-white/10">
                   <img src={hand2} alt="CTA visual" className="w-full h-full object-cover" />
               </div>
            </div>
            <Button asChild size="lg" className="btn-refined h-14 px-6 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Chat;

import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Sparkles, ArrowRight, LayoutDashboard, Download, Layers, MessageSquareText, ChevronLeft, ChevronRight, Play } from "lucide-react";

import fingers1 from "@/assets/Drish Page/_Close-up_of_a_person's_fingers_202605141814 (1).jpeg";
import fingers2 from "@/assets/Drish Page/_Close-up_of_a_person's_fingers_202605141814.jpeg";
import darkobject1 from "@/assets/Drish Page/_Close-up_of_a_single_dark_202605141814 (1).jpeg";
import darkobject2 from "@/assets/Drish Page/_Close-up_of_a_single_dark_202605141814.jpeg";
import macbook1 from "@/assets/Drish Page/_Close-up_of_an_open_MacBook_202605141812.jpeg";
import macbook2 from "@/assets/Drish Page/_Close-up_of_an_open_MacBook_202605141813.jpeg";
import topdown1 from "@/assets/Drish Page/_Close-up_top-down_shot_of_a_202605141812 (1).jpeg";
import topdown2 from "@/assets/Drish Page/_Close-up_top-down_shot_of_a_202605141812.jpeg";
import chocolate1 from "@/assets/Drish Page/_Extreme_close-up_of_dark_chocolate_202605141813 (1).jpeg";
import chocolate2 from "@/assets/Drish Page/_Extreme_close-up_of_dark_chocolate_202605141813.jpeg";

import refImage from "@/assets/Thatha's Tamarind Rice Mix With Reference - Drish Demo/Thatha's Tamarind Rice Mix Reference.jpeg";
import slide1 from "@/assets/Thatha's Tamarind Rice Mix With Reference - Drish Demo/1_hook.png";
import slide2 from "@/assets/Thatha's Tamarind Rice Mix With Reference - Drish Demo/2_desire.png";
import slide3 from "@/assets/Thatha's Tamarind Rice Mix With Reference - Drish Demo/3_product_hero.png";
import slide4 from "@/assets/Thatha's Tamarind Rice Mix With Reference - Drish Demo/4_benefit.png";
import slide5 from "@/assets/Thatha's Tamarind Rice Mix With Reference - Drish Demo/5_cta.png";
import drishAdVideo from "@/assets/Drish Ad.mp4";


const Drish = () => {
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);




  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 344;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-no-repeat animate-subtle-zoom"
          style={{ backgroundImage: `url('${chocolate1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="relative w-full container mx-auto px-6 lg:px-8 py-32 z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0 backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
              <Sparkles className="w-3.5 h-3.5 text-white/60" />
              <span className="badge-label text-white/80">Drish AI Content Agent</span>
            </div>
            
            <h1 className="leading-[1.1] animate-fade-in-up text-white" style={{ animationDelay: '200ms' }}>
              Your brand story.
              <span className="block text-white/60 mt-2">Generated in seconds.</span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              An AI content agent built for D2C food brands. Stop struggling with design tools. Upload a reference, pick your format, and get a full 5-slide carousel with social media copy — ready to post.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Button asChild size="lg" className="btn-refined h-14 px-6 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                <Link to="/contact">
                  Request Access (Invite Only)
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

      {/* The Core Flow */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${macbook1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <h2 className="mb-4 text-white">
              From idea to post in 4 steps.
            </h2>
            <p className="text-white/60 text-lg font-medium">No complex prompting. No design skills needed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Log In", desc: "Access your dedicated D2C content workspace.", img: fingers1 },
              { step: "02", title: "Select Category", desc: "Choose your specific food niche for tailored language.", img: topdown1 },
              { step: "03", title: "Upload Reference", desc: "Drop an image or post you like. Drish learns the vibe.", img: fingers2 },
              { step: "04", title: "Generate Carousel", desc: "Get a full narrative sequence instantly.", img: topdown2 },
            ].map((s, idx) => (
              <div key={s.step} className="p-6 sm:p-10 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <span className="text-4xl font-black text-white/10 absolute top-6 right-6 group-hover:text-white/20 transition-all duration-500">{s.step}</span>
                <div className="relative z-10 mt-8">
                  <h3 className="mb-3 text-white/90 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed font-medium mb-6">{s.desc}</p>
                  <div className="w-full h-24 rounded-lg overflow-hidden border border-white/10">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Area */}
      <section ref={videoSectionRef} className="py-24 lg:py-32 border-y border-white/5 relative overflow-hidden bg-black">

        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${darkobject1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="mb-4 text-white">
                See it in action.
              </h2>
              <p className="text-white/60 text-lg font-medium">
                Watch Drish transform a single concept into high-converting social media content.
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
                  src={drishAdVideo}
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

      {/* See Drish in Action Section */}
      <section className="py-32 bg-black relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Part 4 - Headline */}
          <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
            <h2 className="mb-6 text-white text-4xl lg:text-5xl font-bold tracking-tight">
              One prompt. One reference image. Five slides. Two captions. Ready to post.
            </h2>
            <p className="text-white/60 text-xl font-medium">
              This is what Drish generated for Thatha's Tamarind Rice Mix in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Part 1 - The Input */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="p-6 sm:p-8 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-white/40 text-sm ml-2 font-mono">drish_prompt.txt</span>
                </div>
                <p className="text-white/80 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  "My product is called Thatha's Tamarind Rice Mix. It is a ready-to-cook spice mix that you just add to cooked rice and it becomes authentic South Indian puliyodarai in 2 minutes. Made with real tamarind, sesame seeds, curry leaves, dried red chilies and groundnuts. No preservatives, no artificial color. Comes in a small kraft paper pouch with a traditional design. Target customers are working professionals and hostel students who miss home food. Tone should be nostalgic and homemade. Selling on Instagram and through a WhatsApp order link. CTA is Order on WhatsApp."
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-white/90 text-lg font-bold mb-4">Reference Image</h3>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/50">
                  <img src={refImage} alt="Product Reference" className="w-full h-auto object-contain max-h-[300px] mx-auto" />
                </div>
              </div>
            </div>

            {/* Part 2 & 3 - The Output and Captions */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              
              {/* Carousel */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white/90 text-xl font-bold">Generated Sequence</h3>
                  <div className="flex gap-3">
                    <button onClick={() => scrollCarousel('left')} className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={() => scrollCarousel('right')} className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div 
                  ref={carouselRef}
                  className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {[
                    { img: slide1, role: "Hook" },
                    { img: slide2, role: "Desire" },
                    { img: slide3, role: "Product Hero" },
                    { img: slide4, role: "Benefit" },
                    { img: slide5, role: "CTA" }
                  ].map((slide, idx) => (
                    <div key={idx} className="flex-none w-[280px] sm:w-[320px] snap-center">
                      <div className="p-4 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 group hover:border-white/20 transition-all duration-300">
                        <div className="aspect-[9/16] rounded-xl overflow-hidden bg-black/50 border border-white/5 mb-4 relative">
                          <img src={slide.img} alt={`Slide ${idx + 1} - ${slide.role}`} className="absolute inset-0 w-full h-full object-contain" />
                        </div>
                        <div className="text-center">
                          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-wide">
                            {slide.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part 3 - Captions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="p-6 sm:p-8 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center p-[2px]">
                      <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                        <span className="text-white font-bold text-xs">IG</span>
                      </div>
                    </div>
                    <h3 className="text-white/90 font-bold">Instagram Caption</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap flex-grow">
                    That craving for Amma's cooking is real.{"\n"}
                    Our grandmother's puliyodarai mix brings that taste back in 2 minutes.{"\n"}
                    Made with real tamarind and spices, just like she did. 🍚{"\n"}
                    Order on WhatsApp — link in bio.{"\n\n"}
                    <span className="text-blue-400/80">#Puliyodarai #TamarindRice #SouthIndianFood #AmmasCooking #MissingHome #HomeCooking #IndianFood #ReadyToCookMix #EasyMeals #QuickDinner #ComfortFood #StudentLife #WorkingLife #HomemadeMasala #AuthenticFood #IndianCuisine</span>
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#0a66c2] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">in</span>
                    </div>
                    <h3 className="text-white/90 font-bold">LinkedIn Post</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap flex-grow">
                    The convenience of ready-to-cook often comes at the cost of the actual recipe.{"\n\n"}
                    To save time and cost, traditional ingredients are swapped for industrial powders and flavor enhancers, fundamentally changing the dish they claim to replicate.{"\n\n"}
                    Thatha's Tamarind Rice Mix is built on the original method. It's made from a family recipe using real tamarind pulp, sesame seeds, curry leaves, and groundnuts—nothing else.{"\n\n"}
                    Our first small batch is ready. Order on WhatsApp.{"\n\n"}
                    <span className="text-blue-400/80">#IndianFood #ReadyToCook #SouthIndianCuisine #HomeCooking</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 lg:py-40 bg-black relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${macbook2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left max-w-3xl mb-24 animate-fade-in-up">
            <h2 className="mb-6 text-white">
              Everything you need to post.
            </h2>
            <p className="text-white/60 text-lg font-medium">Delivered perfectly formatted, every single time.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 sm:p-10 backdrop-blur-md rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-500 flex flex-col items-start lg:col-span-2 group animate-fade-in-up">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-white/20 transition-colors">
                <Layers className="h-7 w-7 text-white/80" />
              </div>
              <h3 className="mb-4 text-white">5-Slide Narrative Carousels</h3>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl font-medium">
                Structured flow: Hook, Agitation, Desire, Product Hero, Call to Action. Designed to capture attention and convert seamlessly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 sm:p-10 backdrop-blur-md rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-500 flex flex-col items-start group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-white/20 transition-colors">
                <MessageSquareText className="h-7 w-7 text-white/80" />
              </div>
              <h3 className="mb-4 text-white">Social Media Copy</h3>
              <p className="text-lg text-white/70 leading-relaxed font-medium">
                You get an Instagram caption and a content brief generated automatically for every carousel.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 sm:p-10 backdrop-blur-md rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-500 flex flex-col items-start group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex gap-2 mb-10 items-end h-14">
                <div className="w-7 h-7 border border-white/20 rounded-lg shadow-inner bg-white/5" />
                <div className="w-7 h-9 border border-white/20 rounded-lg shadow-inner bg-white/5" />
                <div className="w-7 h-11 border border-white/20 rounded-lg shadow-inner bg-white/5" />
                <div className="w-10 h-7 border border-white/20 rounded-lg shadow-inner bg-white/5" />
              </div>
              <h3 className="mb-4 text-white">All Aspect Ratios</h3>
              <p className="text-lg text-white/70 leading-relaxed font-medium">
                Automatically adapts to 1:1, 4:5, 9:16, and 16:9. Perfect fit for any platform format.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 sm:p-10 backdrop-blur-md rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-500 flex flex-col items-start lg:col-span-2 group relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-white/20 transition-colors">
                <Download className="h-7 w-7 text-white/80" />
              </div>
              <h3 className="mb-4 text-white">One-Click Export</h3>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl font-medium">
                Download individual slides with text overlay or export the full PDF. Canva-quality output, ready to publish immediately.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 sm:p-10 backdrop-blur-md rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-500 flex flex-col items-start group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-white/20 transition-colors">
                <LayoutDashboard className="h-7 w-7 text-white/80" />
              </div>
              <h3 className="mb-4 text-white">Smart Dashboard</h3>
              <p className="text-lg text-white/70 leading-relaxed font-medium">
                Manage generations, track remaining counts, and keep brand assets organized.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Format Display Section */}
      <section className="py-32 bg-black border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${darkobject1}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 animate-fade-in-up">
            <h2 className="mb-4 text-white">
              Formats for every feed.
            </h2>
            <p className="text-white/60 text-lg font-medium">Native sizes for maximum engagement.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 lg:gap-16 items-end">
            
            {/* 1:1 */}
            <div className="flex flex-col items-center group animate-fade-in-up">
              <div className="w-32 h-32 border border-white/20 backdrop-blur-md bg-white/5 rounded-2xl mb-6 group-hover:border-white/40 transition-all duration-500 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.05] shadow-lg">
                <span className="text-white/40 font-black text-lg group-hover:text-white/80 transition-colors">1:1</span>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-white/90 mb-1">Square</span>
                <span className="badge-label opacity-80 text-white/60">Instagram</span>
              </div>
            </div>

            {/* 4:5 */}
            <div className="flex flex-col items-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-32 h-40 border border-white/20 backdrop-blur-md bg-white/5 rounded-2xl mb-6 group-hover:border-white/40 transition-all duration-500 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.05] shadow-lg">
                <span className="text-white/40 font-black text-lg group-hover:text-white/80 transition-colors">4:5</span>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-white/90 mb-1">Portrait</span>
                <span className="badge-label opacity-80 text-white/60">Instagram</span>
              </div>
            </div>

            {/* 9:16 */}
            <div className="flex flex-col items-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-28 h-48 border border-white/20 backdrop-blur-md bg-white/5 rounded-2xl mb-6 group-hover:border-white/40 transition-all duration-500 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.05] shadow-lg">
                <span className="text-white/40 font-black text-lg group-hover:text-white/80 transition-colors">9:16</span>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-white/90 mb-1">Vertical</span>
                <span className="badge-label opacity-80 text-white/60">Stories & Reels</span>
              </div>
            </div>

            {/* 16:9 */}
            <div className="flex flex-col items-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-48 h-28 border border-white/20 backdrop-blur-md bg-white/5 rounded-2xl mb-6 group-hover:border-white/40 transition-all duration-500 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.05] shadow-lg">
                <span className="text-white/40 font-black text-lg group-hover:text-white/80 transition-colors">16:9</span>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-white/90 mb-1">Landscape</span>
                <span className="badge-label opacity-80 text-white/60">Widescreen</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coming Soon Categories */}
      <section className="py-32 bg-black text-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${darkobject2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 max-w-4xl mx-auto hover:scale-[1.02] transition-all hover:shadow-lg">
            <p className="badge-label mb-6 text-white/80">Currently specialized in</p>
            <h3 className="text-3xl sm:text-4xl text-white mb-20 font-bold">D2C Food Brands</h3>
            
            <p className="badge-label mb-10 text-white/60">Upcoming Specialized Agents</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Fashion", "Beauty", "Wellness", "Home", "Electronics"].map(cat => (
                <span key={cat} className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white/60 text-xs font-bold tracking-widest uppercase transition-all hover:border-white/40 hover:text-white cursor-default">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${chocolate2}')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] hover:scale-[1.02] transition-all hover:shadow-lg animate-fade-in-up">
            <h2 className="mb-8 text-white">
              Ready to automate <br/>your content?
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Drish is currently in invite-only beta for D2C brands. Request access to see if you qualify for our early adopter program.
            </p>
            <Button asChild size="lg" className="btn-refined h-14 px-6 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] hover:shadow-lg">
              <Link to="/contact">
                Request Access
                <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Drish;

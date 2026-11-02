import React, { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { SectionBackground } from "../components/ui/SectionBackground";
import { Button } from "../components/ui/Button";

const SUPABASE_FUNCTION_URL =
  "https://tpzoeumzxamgtdngcztx.supabase.co/functions/v1/contact-handler";
const USER_ID =
  (import.meta.env.VITE_CLIENT_USER_ID as string) ||
  "28741dc2-07de-447a-8825-f93120b1b92b";

// Country codes list (common ones first, then alphabetical)
const COUNTRY_CODES = [
  { code: "+91", country: "India (IN)" },
  { code: "+1", country: "United States (US)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+971", country: "UAE (+971)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+65", country: "Singapore (SG)" },
  { code: "+60", country: "Malaysia (MY)" },
  { code: "+974", country: "Qatar (+974)" },
  { code: "+966", country: "Saudi Arabia (SA)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+33", country: "France (FR)" },
  { code: "+39", country: "Italy (IT)" },
  { code: "+34", country: "Spain (ES)" },
  { code: "+31", country: "Netherlands (NL)" },
  { code: "+46", country: "Sweden (SE)" },
  { code: "+47", country: "Norway (NO)" },
  { code: "+45", country: "Denmark (DK)" },
  { code: "+41", country: "Switzerland (CH)" },
  { code: "+7", country: "Russia (RU)" },
  { code: "+86", country: "China (CN)" },
  { code: "+81", country: "Japan (JP)" },
  { code: "+82", country: "South Korea (KR)" },
  { code: "+55", country: "Brazil (BR)" },
  { code: "+52", country: "Mexico (MX)" },
  { code: "+27", country: "South Africa (ZA)" },
  { code: "+234", country: "Nigeria (NG)" },
  { code: "+20", country: "Egypt (EG)" },
  { code: "+92", country: "Pakistan (PK)" },
  { code: "+880", country: "Bangladesh (BD)" },
  { code: "+94", country: "Sri Lanka (LK)" },
  { code: "+977", country: "Nepal (NP)" },
  { code: "+64", country: "New Zealand (NZ)" },
  { code: "+32", country: "Belgium (BE)" },
  { code: "+48", country: "Poland (PL)" },
  { code: "+351", country: "Portugal (PT)" },
  { code: "+30", country: "Greece (GR)" },
  { code: "+90", country: "Turkey (TR)" },
  { code: "+972", country: "Israel (IL)" },
  { code: "+62", country: "Indonesia (ID)" },
  { code: "+63", country: "Philippines (PH)" },
  { code: "+66", country: "Thailand (TH)" },
  { code: "+84", country: "Vietnam (VN)" },
  { code: "+1-CA", country: "Canada (CA)" },
];

const INQUIRY_REASONS = [
  { value: "", label: "Select your primary interest" },
  {
    value: "eschure-demo",
    label: "Eschure — Request a Demo",
    description: "Property management intelligence platform",
  },
  {
    value: "jagents-studio",
    label: "JAgents Studio — Custom Software Development",
    description: "Bespoke software built for your business",
  },
  {
    value: "ai-workflow",
    label: "AI Agent for Business Workflow Automation",
    description: "Intelligent agents for your internal operations",
  },
  {
    value: "general",
    label: "General Inquiry",
    description: "Other questions about JAgents Labs",
  },
];

const inputBase =
  "w-full bg-[#0F0F11]/80 border border-white/[0.10] hover:border-white/[0.18] focus:border-[#5B8BC4]/70 focus:ring-2 focus:ring-[#5B8BC4]/20 rounded-xl px-4 py-3 text-[15px] text-white placeholder-white/30 outline-none transition-all duration-200";

const labelBase =
  "block text-[12px] font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    reason: "",
    isRealEstate: "",
    message: "",
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      reason: "",
      isRealEstate: "",
      message: "",
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.reason) {
      setError("Please select the primary reason for your inquiry.");
      return;
    }
    if (!formData.isRealEstate) {
      setError("Please let us know whether you operate in the real estate domain.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const mobile = formData.phone.trim()
        ? `${formData.countryCode} ${formData.phone.trim()}`
        : "";

      const reasonLabel =
        INQUIRY_REASONS.find((r) => r.value === formData.reason)?.label ?? formData.reason;

      const realEstateMap: Record<string, string> = {
        yes: "Yes, Real Estate Professional",
        no: "No, Different Industry",
        exploring: "Exploring / Not Sure",
      };

      const lookingFor = `${reasonLabel} | Domain: ${realEstateMap[formData.isRealEstate] ?? formData.isRealEstate}`;

      const payload = {
        user_id: USER_ID,
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile,
        looking_for: lookingFor,
        message: formData.message.trim(),
      };

      const res = await fetch(SUPABASE_FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      setSubmittedName(formData.name.trim().split(" ")[0]);
      setIsSuccessModalOpen(true);
      resetForm();
    } catch (err) {
      console.error("[JAgents Labs] Contact form submission error:", err);
      setError("Something went wrong. Please try again or email us directly at hello@jagentslabs.com.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact — JAgents Labs"
        description="Reach out to JAgents Labs. Request an Eschure demo, enquire about custom AI development with JAgents Studio, or ask about automating your business workflows."
        canonicalPath="/contact"
      />

      {/* SECTION 1: CONTACT FORM */}
      <section className="relative isolate overflow-hidden min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-start justify-center pt-12 sm:pt-20 pb-16">
        <SectionBackground
          src="/contact/1.webp"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="opacity-40 sm:opacity-45"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/80 via-[#0B0B0C]/50 to-[#0B0B0C]/90"
        />

        <div className="relative z-10 w-full px-5 sm:px-8">
          <div className="w-full max-w-2xl mx-auto">

            {/* Header */}
            <div className="mb-8 sm:mb-10 text-left">
              <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#5B8BC4] uppercase tracking-wider mb-3">
                Get In Touch
              </p>
              <h1 className="text-[32px] sm:text-[44px] md:text-[50px] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-4">
                Let's talk
              </h1>
              <p className="text-[16px] sm:text-[17px] font-normal leading-[1.65] text-white/75 max-w-xl">
                Tell us about your interest and we'll connect you with the right
                person on our team. Every submission is reviewed directly by our team — no bots, no queues.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#121214]/80 backdrop-blur-md border border-white/[0.09] shadow-2xl rounded-2xl p-6 sm:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelBase}>
                  Full Name <span className="text-[#5B8BC4]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputBase}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelBase}>
                  Business Email <span className="text-[#5B8BC4]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputBase}
                />
              </div>

              {/* Phone: Country Code + Number */}
              <div>
                <label htmlFor="phone" className={labelBase}>
                  Phone Number{" "}
                  <span className="text-white/35 font-normal normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-2">
                  <div className="relative w-full sm:w-[130px] flex-shrink-0">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      aria-label="Country calling code"
                      className={`${inputBase} w-full pr-8 cursor-pointer appearance-none text-[14px]`}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option
                          key={c.code}
                          value={c.code}
                          className="bg-[#141416] text-white"
                        >
                          {c.code} ({c.country.split(" ")[0]})
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-white/50">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel-national"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputBase} flex-1 min-w-0`}
                  />
                </div>
              </div>

              {/* Reason for reaching out */}
              <div>
                <label htmlFor="reason" className={labelBase}>
                  Primary Interest <span className="text-[#5B8BC4]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className={`${inputBase} pr-10 cursor-pointer appearance-none`}
                  >
                    {INQUIRY_REASONS.map((r) => (
                      <option
                        key={r.value}
                        value={r.value}
                        disabled={r.value === ""}
                        className="bg-[#141416] text-white"
                      >
                        {r.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-white/50">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {formData.reason && formData.reason !== "" && (
                  <p className="mt-1.5 text-[12px] text-[#A1A1AA] leading-[1.5]">
                    {
                      INQUIRY_REASONS.find((r) => r.value === formData.reason)
                        ?.description
                    }
                  </p>
                )}
              </div>

              {/* Real Estate domain */}
              <div>
                <fieldset>
                  <legend className={labelBase}>
                    Do you operate in the real estate domain?{" "}
                    <span className="text-[#5B8BC4]">*</span>
                  </legend>
                  <p className="text-[12px] text-[#A1A1AA] mb-3 leading-[1.5]">
                    This helps us understand whether our Eschure platform is
                    directly relevant to your workflow.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {[
                      {
                        value: "yes",
                        label: "Yes, Real Estate Professional",
                        desc: "Developer, broker, agent, or operator",
                      },
                      {
                        value: "no",
                        label: "No, Different Industry",
                        desc: "Another domain or sector",
                      },
                      {
                        value: "exploring",
                        label: "Exploring / Not Sure",
                        desc: "Still evaluating relevance",
                      },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex-1 flex flex-col gap-0.5 rounded-xl border px-4 py-3.5 cursor-pointer transition-all duration-200 ${
                          formData.isRealEstate === opt.value
                            ? "border-[#5B8BC4]/60 bg-[#5B8BC4]/10 ring-2 ring-[#5B8BC4]/20"
                            : "border-white/[0.09] bg-[#0F0F11]/60 hover:border-white/[0.18]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="isRealEstate"
                          value={opt.value}
                          checked={formData.isRealEstate === opt.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-[13px] font-semibold text-white leading-[1.4]">
                          {opt.label}
                        </span>
                        <span className="text-[12px] text-[#A1A1AA] leading-[1.4]">
                          {opt.desc}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelBase}>
                  Message{" "}
                  <span className="text-white/35 font-normal normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us more about your project, timeline, or any specific questions…"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Error Alert */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 p-3.5 text-[13px] text-red-400 leading-[1.5]"
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                  className="w-full sm:w-auto min-w-[180px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-current"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
                <p className="mt-3 text-[12px] text-white/35 leading-[1.55]">
                  Your information is kept confidential and never shared with
                  third parties. By submitting, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-[#5B8BC4]/80 hover:text-[#5B8BC4] underline underline-offset-2 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL / DIALOG */}
      {isSuccessModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-md bg-[#141416] border border-white/[0.12] rounded-2xl p-7 sm:p-9 text-center shadow-2xl transform transition-all">
            {/* Close cross */}
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white p-1.5 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Check icon badge */}
            <div className="w-14 h-14 rounded-full bg-[#5B8BC4]/15 border border-[#5B8BC4]/30 flex items-center justify-center mx-auto mb-5 text-[#5B8BC4]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-[22px] sm:text-[24px] font-semibold text-white mb-2">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.6] text-white/70 mb-7">
              Thank you{submittedName ? `, ${submittedName}` : ""}. We have received your inquiry. A member of our team will review the details and reach out to you within one business day.
            </p>

            <Button
              variant="primary"
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full justify-center"
            >
              Got it
            </Button>
          </div>
        </div>
      )}

      {/* SECTION 2: CHANNELS */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.07] min-h-[80svh] flex items-center justify-center">
        <SectionBackground
          src="/contact/2.webp"
          loading="lazy"
          decoding="async"
          className="opacity-50 sm:opacity-50"
          overlayClassName="bg-gradient-to-b from-[#0B0B0C]/70 via-[#0B0B0C]/40 to-[#0B0B0C]/80"
        />
        <div className="w-full px-6 sm:px-8 py-16 sm:py-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-start reveal-on-scroll">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-[1.18] tracking-[-0.015em] text-white mb-8 text-left">
              Direct Communication
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12 max-w-4xl">
              {/* Email Card */}
              <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:scale-105 will-change-transform">
                <div>
                  <div className="w-2 h-2 rounded-full bg-[#5B8BC4] mb-4" />
                  <p className="text-[12px] uppercase font-semibold tracking-wider text-[#A1A1AA] mb-2">
                    Email
                  </p>
                  <h3 className="text-[20px] font-semibold text-white mb-2">
                    Direct Inquiries
                  </h3>
                  <p className="text-[15px] font-normal leading-[1.6] text-white/70 mb-6">
                    Send us an email anytime. We typically respond within one
                    business day.
                  </p>
                </div>
                <a
                  href="mailto:hello@jagentslabs.com"
                  className="inline-flex items-center text-[#5B8BC4] hover:text-[#6F9FD4] font-medium text-[16px] min-h-[44px] transition-colors"
                >
                  hello@jagentslabs.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:scale-105 will-change-transform">
                <div>
                  <div className="w-2 h-2 rounded-full bg-[#5B8BC4] mb-4" />
                  <p className="text-[12px] uppercase font-semibold tracking-wider text-[#A1A1AA] mb-2">
                    Phone
                  </p>
                  <h3 className="text-[20px] font-semibold text-white mb-2">
                    Call Directly
                  </h3>
                  <p className="text-[15px] font-normal leading-[1.6] text-white/70 mb-6">
                    Available during standard business hours (IST).
                  </p>
                </div>
                <a
                  href="tel:+919063316737"
                  className="inline-flex items-center text-[#5B8BC4] hover:text-[#6F9FD4] font-medium text-[16px] min-h-[44px] transition-colors"
                >
                  +91 90633 16737
                </a>
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-[#121214]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-8 max-w-4xl w-full text-left transition-all duration-300 ease-out hover:scale-105 will-change-transform">
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-3">
                Registered Office
              </h3>
              <p className="text-[15px] sm:text-[16px] font-normal leading-relaxed text-white/75">
                JAgents Labs Private Limited
                <br />
                H.No. 6-3-1093/406, V V Vintage Boulevard,
                <br />
                Somajiguda, Nampally, Hyderabad — 500082,
                <br />
                Telangana, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

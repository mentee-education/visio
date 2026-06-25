/*
 * VISIO Contact Page
 * Design: Clean form layout, editorial, terracotta accents
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroEffect from "@/components/HeroEffect";
import { toast } from "sonner";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const inquiryTypes = [
  "Production Package Inquiry",
  "Workshop Request",
  "Production Support",
  "Volunteer Application",
  "Partnership / Sponsorship",
  "Media / Press",
  "General Inquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    nation: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f642c143-997e-4d9e-9be2-7b9917152700",
          subject: `[Visio] ${formData.inquiryType || "General Inquiry"} from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          organization: formData.organization || "N/A",
          "nation/community": formData.nation || "N/A",
          "inquiry type": formData.inquiryType || "N/A",
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Message sent! We'll be in touch within 24–48 hours.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_85)]">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[oklch(0.38_0.10_200)] overflow-hidden">
        <HeroEffect />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-[oklch(0.65_0.12_195)] mb-4 block">Contact Us</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6" style={{ textWrap: "balance" }}>
              Let's talk about your story.
            </h1>
            <p className="font-body text-lg text-white/65 max-w-2xl">
              Whether you're exploring a production package, requesting a workshop, or just want to learn more — we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <FadeUp>
                <span className="section-label mb-4 block">Reach Us</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-3xl font-bold text-[oklch(0.25_0.04_210)] mb-8">
                  We're here to help.
                </h2>

                <div className="space-y-8">
                  <div>
                    <p className="font-body text-sm text-[oklch(0.50_0.015_230)] leading-relaxed mb-6">
                      We're a small team — the best way to reach us is by email. We respond to all inquiries within 24–48 hours.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail size={16} className="text-[oklch(0.42_0.12_195)]" />
                      <span className="font-body text-xs uppercase tracking-wider text-[oklch(0.42_0.12_195)]">Contact</span>
                    </div>
                    <div className="pl-7">
                      <p className="font-body text-[oklch(0.40_0.015_230)]">
                        Use the form on this page to reach us, including grant inquiries.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={16} className="text-[oklch(0.42_0.12_195)]" />
                      <span className="font-body text-xs uppercase tracking-wider text-[oklch(0.42_0.12_195)]">Hours</span>
                    </div>
                    <div className="pl-7 font-body text-[oklch(0.40_0.015_230)]">
                      <p>Monday – Friday: 9am – 5pm PST</p>
                      <p className="text-sm text-[oklch(0.50_0.015_230)] mt-1">Response time: 24–48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-[oklch(0.95_0.005_85)] border-l-4 border-[oklch(0.42_0.12_195)]">
                  <h4 className="font-body text-xs uppercase tracking-wider text-[oklch(0.42_0.12_195)] mb-2">Not sure where to start?</h4>
                  <p className="font-body text-sm text-[oklch(0.40_0.015_230)]">
                    Tell us about your organization and the story you want to tell. We'll recommend the right program or package for your needs — no commitment required.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <FadeUp delay={0.15}>
                {submitted ? (
                  <div className="bg-[oklch(0.42_0.12_195/0.08)] border border-[oklch(0.42_0.12_195/0.3)] p-12 text-center">
                    <CheckCircle size={48} className="text-[oklch(0.25_0.04_210)] mx-auto mb-6" />
                    <h3 className="font-display text-3xl font-bold text-[oklch(0.25_0.04_210)] mb-4">
                      Message received.
                    </h3>
                    <p className="font-body text-lg text-[oklch(0.40_0.015_230)] mb-8">
                      Thank you for reaching out. We'll get back to you within 24–48 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", organization: "", nation: "", inquiryType: "", message: "" }); }}
                      className="font-body text-sm text-[oklch(0.42_0.12_195)] underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                          Full Name <span className="text-[oklch(0.42_0.12_195)]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                          Email Address <span className="text-[oklch(0.42_0.12_195)]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                          Organization
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Your organization (if applicable)"
                          className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                          Nation / Community
                        </label>
                        <input
                          type="text"
                          value={formData.nation}
                          onChange={(e) => setFormData({ ...formData, nation: e.target.value })}
                          placeholder="Nation or community (if applicable)"
                          className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-[oklch(0.25_0.04_210)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] transition-colors appearance-none"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                        Message <span className="text-[oklch(0.42_0.12_195)]">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, organization, or question..."
                        rows={6}
                        className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-3 bg-[oklch(0.42_0.12_195)] text-white px-8 py-4 font-body font-medium hover:bg-[oklch(0.38_0.12_195)] transition-all hover:gap-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? "Sending..." : "Send Message"} <Send size={16} />
                    </button>
                  </form>
                )}
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Land Acknowledgment */}
      <section className="py-10 bg-[oklch(0.38_0.10_200)]">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.70_0.10_195)] mb-3 block">Land Acknowledgment</span>
            <p className="font-body text-sm text-white/85 leading-relaxed">
              Visio operates on the unceded ancestral territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and Sel̓íl̓witulh (Tsleil-Waututh) Nations. We are grateful to live and work on this land, and we are committed to supporting Indigenous sovereignty and self-determination in all that we do.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

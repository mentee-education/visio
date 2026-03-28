/*
 * VISIO Contact Page
 * Design: Clean form layout, editorial, terracotta accents
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  "Grant Application",
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
        toast.success("Message sent! We'll be in touch within 3–5 business days.");
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
    <div className="min-h-screen bg-[oklch(0.975_0.005_90)]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[oklch(0.24_0.015_60)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">Contact Us</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
              Let's talk about your story.
            </h1>
            <p className="font-body text-lg text-white/65 max-w-2xl">
              Whether you're applying for a grant, requesting a workshop, or just want to learn more — we want to hear from you.
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
                <h2 className="font-display text-3xl font-bold text-[oklch(0.24_0.015_60)] mb-8">
                  We're here to help.
                </h2>

                <div className="space-y-8">
                  <div>
                    <p className="font-body text-sm text-[oklch(0.50_0.01_60)] leading-relaxed mb-6">
                      We're a small team — the best way to reach us is by email. We respond to all inquiries within 3–5 business days.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail size={16} className="text-[oklch(0.52_0.18_30)]" />
                      <span className="font-body text-xs uppercase tracking-wider text-[oklch(0.52_0.18_30)]">Contact</span>
                    </div>
                    <div className="pl-7">
                      <p className="font-body text-[oklch(0.40_0.01_60)]">
                        Use the form on this page to reach us, including grant inquiries.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={16} className="text-[oklch(0.52_0.18_30)]" />
                      <span className="font-body text-xs uppercase tracking-wider text-[oklch(0.52_0.18_30)]">Hours</span>
                    </div>
                    <div className="pl-7 font-body text-[oklch(0.40_0.01_60)]">
                      <p>Monday – Friday: 9am – 5pm PST</p>
                      <p className="text-sm text-[oklch(0.50_0.01_60)] mt-1">Response time: 3–5 business days</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-[oklch(0.94_0.008_90)] border-l-4 border-[oklch(0.52_0.18_30)]">
                  <h4 className="font-body text-xs uppercase tracking-wider text-[oklch(0.52_0.18_30)] mb-2">Grant Applications</h4>
                  <p className="font-body text-sm text-[oklch(0.40_0.01_60)]">
                    Grant applications are acknowledged within 5 business days of submission. Use the contact form above for eligibility questions before applying.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <FadeUp delay={0.15}>
                {submitted ? (
                  <div className="bg-[oklch(0.52_0.18_30/0.08)] border border-[oklch(0.52_0.18_30/0.3)] p-12 text-center">
                    <CheckCircle size={48} className="text-[oklch(0.24_0.015_60)] mx-auto mb-6" />
                    <h3 className="font-display text-3xl font-bold text-[oklch(0.24_0.015_60)] mb-4">
                      Message received.
                    </h3>
                    <p className="font-body text-lg text-[oklch(0.40_0.01_60)] mb-8">
                      Thank you for reaching out. We'll get back to you within 3–5 business days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", organization: "", nation: "", inquiryType: "", message: "" }); }}
                      className="font-body text-sm text-[oklch(0.52_0.18_30)] underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                          Full Name <span className="text-[oklch(0.52_0.18_30)]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                          Email Address <span className="text-[oklch(0.52_0.18_30)]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                          Organization
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Your organization (if applicable)"
                          className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                          Nation / Community
                        </label>
                        <input
                          type="text"
                          value={formData.nation}
                          onChange={(e) => setFormData({ ...formData, nation: e.target.value })}
                          placeholder="Nation or community (if applicable)"
                          className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-[oklch(0.24_0.015_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] transition-colors appearance-none"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                        Message <span className="text-[oklch(0.52_0.18_30)]">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, organization, or question..."
                        rows={6}
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-3 bg-[oklch(0.52_0.18_30)] text-white px-8 py-4 font-body font-medium hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-4 disabled:opacity-60 disabled:cursor-not-allowed"
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
      <section className="py-12 bg-[oklch(0.24_0.015_60)]">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.52_0.18_30)] mb-4 block">Land Acknowledgment</span>
              <p className="font-body text-[oklch(0.50_0.01_60)] leading-relaxed">
                Visio operates on the unceded ancestral territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and Sel̓íl̓witulh (Tsleil-Waututh) Nations. We are grateful to live and work on this land, and we are committed to supporting Indigenous sovereignty and self-determination in all that we do.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}

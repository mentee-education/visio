/*
 * VISIO Contact Page
 * Design: Clean form layout, editorial, terracotta accents
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
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
  "Archive Submission",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within 3–5 business days.");
  };

  return (
    <div className="min-h-screen bg-[oklch(0.95_0.025_80)]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[oklch(0.18_0.005_285)]">
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
                <h2 className="font-display text-3xl font-bold text-[oklch(0.18_0.005_285)] mb-8">
                  We're here to help.
                </h2>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={16} className="text-[oklch(0.48_0.17_35)]" />
                      <span className="font-ui text-xs uppercase tracking-wider text-[oklch(0.48_0.17_35)]">Location</span>
                    </div>
                    <p className="font-body text-[oklch(0.35_0.01_285)] pl-7">
                      1234 Community Way<br />
                      Vancouver, BC V6B 2K4<br />
                      <span className="text-sm text-[oklch(0.55_0.015_285)]">Unceded Musqueam, Squamish, and Tsleil-Waututh Territory</span>
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail size={16} className="text-[oklch(0.48_0.17_35)]" />
                      <span className="font-ui text-xs uppercase tracking-wider text-[oklch(0.48_0.17_35)]">Email</span>
                    </div>
                    <div className="pl-7 space-y-1">
                      <a href="mailto:hello@visiolab.ca" className="block font-body text-[oklch(0.35_0.01_285)] hover:text-[oklch(0.48_0.17_35)] transition-colors">
                        hello@visiolab.ca
                      </a>
                      <a href="mailto:grants@visiolab.ca" className="block font-body text-sm text-[oklch(0.55_0.015_285)] hover:text-[oklch(0.48_0.17_35)] transition-colors">
                        grants@visiolab.ca (Grant inquiries)
                      </a>
                      <a href="mailto:archive@visiolab.ca" className="block font-body text-sm text-[oklch(0.55_0.015_285)] hover:text-[oklch(0.48_0.17_35)] transition-colors">
                        archive@visiolab.ca (Film submissions)
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone size={16} className="text-[oklch(0.48_0.17_35)]" />
                      <span className="font-ui text-xs uppercase tracking-wider text-[oklch(0.48_0.17_35)]">Phone</span>
                    </div>
                    <a href="tel:+16045550192" className="pl-7 block font-body text-[oklch(0.35_0.01_285)] hover:text-[oklch(0.48_0.17_35)] transition-colors">
                      (604) 555-0192
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={16} className="text-[oklch(0.48_0.17_35)]" />
                      <span className="font-ui text-xs uppercase tracking-wider text-[oklch(0.48_0.17_35)]">Hours</span>
                    </div>
                    <div className="pl-7 font-body text-[oklch(0.35_0.01_285)]">
                      <p>Monday – Friday: 9am – 5pm PST</p>
                      <p className="text-sm text-[oklch(0.55_0.015_285)] mt-1">Closed on Indigenous cultural holidays</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-[oklch(0.91_0.025_80)] border-l-4 border-[oklch(0.48_0.17_35)]">
                  <h4 className="font-ui text-xs uppercase tracking-wider text-[oklch(0.48_0.17_35)] mb-2">Response Time</h4>
                  <p className="font-body text-sm text-[oklch(0.35_0.01_285)]">
                    We respond to all inquiries within 3–5 business days. Grant applications are acknowledged within 5 business days of the deadline.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <FadeUp delay={0.15}>
                {submitted ? (
                  <div className="bg-[oklch(0.32_0.1_140/0.08)] border border-[oklch(0.32_0.1_140/0.3)] p-12 text-center">
                    <CheckCircle size={48} className="text-[oklch(0.32_0.1_140)] mx-auto mb-6" />
                    <h3 className="font-display text-3xl font-bold text-[oklch(0.18_0.005_285)] mb-4">
                      Message received.
                    </h3>
                    <p className="font-body text-lg text-[oklch(0.35_0.01_285)] mb-8">
                      Thank you for reaching out. We'll get back to you within 3–5 business days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", organization: "", nation: "", inquiryType: "", message: "" }); }}
                      className="font-ui text-sm text-[oklch(0.48_0.17_35)] underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                          Full Name <span className="text-[oklch(0.48_0.17_35)]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full border border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)] px-4 py-3 font-body text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                          Email Address <span className="text-[oklch(0.48_0.17_35)]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full border border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)] px-4 py-3 font-body text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                          Organization
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Your organization (if applicable)"
                          className="w-full border border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)] px-4 py-3 font-body text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                          Nation / Community
                        </label>
                        <input
                          type="text"
                          value={formData.nation}
                          onChange={(e) => setFormData({ ...formData, nation: e.target.value })}
                          placeholder="Nation or community (if applicable)"
                          className="w-full border border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)] px-4 py-3 font-body text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full border border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)] px-4 py-3 font-body text-[oklch(0.18_0.005_285)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] transition-colors appearance-none"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                        Message <span className="text-[oklch(0.48_0.17_35)]">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, organization, or question..."
                        rows={6}
                        className="w-full border border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)] px-4 py-3 font-body text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-[oklch(0.48_0.17_35)] text-white px-8 py-4 font-ui font-medium hover:bg-[oklch(0.42_0.17_35)] transition-all hover:gap-4"
                    >
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Land Acknowledgment */}
      <section className="py-12 bg-[oklch(0.18_0.005_285)]">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-[oklch(0.48_0.17_35)] mb-4 block">Land Acknowledgment</span>
              <p className="font-body text-[oklch(0.65_0.015_80)] leading-relaxed">
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

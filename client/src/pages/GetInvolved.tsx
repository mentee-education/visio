/**
 * VISIO Get Involved Page
 * Design: Support interest form, volunteer application, and partnership section
 * No donation processing — replaced with a real interest/expression of support form
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart, Users, Briefcase, CheckCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-hero-diverse-7kWXDh4ueTb8gGaiSbrnhL.webp";

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

const volunteerRoles = [
  {
    title: "Workshop Facilitator",
    commitment: "4–8 hrs/month",
    skills: "Video production, teaching experience",
    desc: "Lead or assist in our digital storytelling workshops. Ideal for filmmakers, editors, or media professionals who want to share their skills.",
  },
  {
    title: "Community Liaison",
    commitment: "4–6 hrs/month",
    skills: "Community connections, communications",
    desc: "Help connect Visio with community organizations, nonprofits, and potential applicants. Ideal for people with strong networks in underrepresented communities.",
  },
  {
    title: "Project Review Panelist",
    commitment: "10 hrs/cycle",
    skills: "Community knowledge, media literacy",
    desc: "Join our review committee to evaluate project applications. We especially welcome community members from underrepresented backgrounds and nonprofit leaders.",
  },
  {
    title: "Event Support",
    commitment: "As needed",
    skills: "Event coordination, hospitality",
    desc: "Help organize and run our screenings, workshops, and fundraising events. Great for community members who want to get involved without a long commitment.",
  },
];

interface SupportFormData {
  name: string;
  email: string;
  org: string;
  type: string;
  message: string;
}

interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  availability: string;
  community: string;
}

export default function GetInvolved() {
  // Support form
  const [supportData, setSupportData] = useState<SupportFormData>({
    name: "",
    email: "",
    org: "",
    type: "",
    message: "",
  });
  const [supportSuccess, setSupportSuccess] = useState(false);

  // Volunteer form
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);
  const [volunteerData, setVolunteerData] = useState<VolunteerFormData>({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    availability: "",
    community: "",
  });

  const [supportSending, setSupportSending] = useState(false);

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportData.name || !supportData.email || !supportData.type) {
      toast.error("Please fill in your name, email, and how you'd like to support.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(supportData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSupportSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f642c143-997e-4d9e-9be2-7b9917152700",
          subject: `[Visio] Support Interest from ${supportData.name}`,
          name: supportData.name,
          email: supportData.email,
          organization: supportData.org || "N/A",
          "support type": supportData.type,
          message: supportData.message || "N/A",
        }),
      });
      if (res.ok) {
        setSupportSuccess(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or visit our contact page.");
    } finally {
      setSupportSending(false);
    }
  };

  const [volunteerSending, setVolunteerSending] = useState(false);

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerData.name || !volunteerData.email || !volunteerData.role || !volunteerData.experience) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(volunteerData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setVolunteerSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f642c143-997e-4d9e-9be2-7b9917152700",
          subject: `[Visio] Volunteer Application from ${volunteerData.name}`,
          name: volunteerData.name,
          email: volunteerData.email,
          phone: volunteerData.phone || "N/A",
          "community/nation": volunteerData.community || "N/A",
          "role of interest": volunteerData.role,
          experience: volunteerData.experience,
          availability: volunteerData.availability || "N/A",
        }),
      });
      if (res.ok) {
        setVolunteerSuccess(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or visit our contact page.");
    } finally {
      setVolunteerSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_85)]">
      <Navbar />

      {/* Header */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.03_210/0.95)] via-[oklch(0.20_0.03_210/0.85)] to-[oklch(0.25_0.03_210/0.65)]" />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-[oklch(0.65_0.12_195)] mb-4 block">Get Involved</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6" style={{ textWrap: "balance" }}>
              Help us amplify more voices.
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl">
              Whether you want to support our work financially, share your skills, or build a partnership — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-[oklch(0.95_0.005_85)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Support", desc: "Express your interest in supporting Visio financially. We'll follow up to discuss how your contribution can make an impact.", anchor: "#support" },
              { icon: Users, title: "Volunteer", desc: "Share your skills as a facilitator, reviewer, or event supporter. Open to filmmakers, educators, and community members.", anchor: "#volunteer" },
              { icon: Briefcase, title: "Partner", desc: "Organizations can partner with Visio to co-fund programs, sponsor workshops, or support community productions.", anchor: "#partner" },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <a href={item.anchor} className="block bg-white border border-[oklch(0.91_0.005_230)] p-8 text-center hover:border-[oklch(0.42_0.12_195/0.4)] transition-all group h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-[oklch(0.42_0.12_195)] transition-all duration-500" />
                  <div className="w-14 h-14 bg-[oklch(0.42_0.12_195/0.1)] flex items-center justify-center mx-auto mb-5 group-hover:bg-[oklch(0.42_0.12_195/0.2)] transition-colors">
                    <item.icon size={24} className="text-[oklch(0.42_0.12_195)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)] mb-3 group-hover:text-[oklch(0.35_0.10_195)] transition-colors">{item.title}</h3>
                  <p className="font-body text-sm text-[oklch(0.50_0.015_230)]">{item.desc}</p>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 md:py-28" id="support">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Context */}
            <FadeUp>
              <span className="section-label mb-4 block">Support Our Work</span>
              <div className="rule-terracotta" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)] mb-8">
                Every contribution tells a story.
              </h2>
              <p className="font-body text-lg text-[oklch(0.40_0.015_230)] leading-relaxed mb-6">
                Visio is building the infrastructure for community storytelling across Canada. Your financial support helps fund grants, workshops, and production services for organizations that couldn't otherwise afford them.
              </p>
              <p className="font-body text-[oklch(0.50_0.015_230)] leading-relaxed mb-8">
                Fill out the form and we'll reach out to discuss how your contribution can make a direct impact in communities across the country.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Fund a workshop participant", desc: "Cover materials and training for one community member" },
                  { label: "Sponsor equipment access", desc: "Fund professional camera gear for a community production" },
                  { label: "Support a community grant", desc: "Help a nonprofit produce their own documentary film" },
                  { label: "Sustain our operations", desc: "Keep the lab running — staff, space, and infrastructure" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 bg-[oklch(0.95_0.005_85)]">
                    <div className="w-1 flex-shrink-0 bg-[oklch(0.42_0.12_195)]" />
                    <div>
                      <div className="font-body text-sm font-medium text-[oklch(0.25_0.04_210)] mb-0.5">{item.label}</div>
                      <div className="font-body text-sm text-[oklch(0.50_0.015_230)]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right: Interest Form */}
            <FadeUp delay={0.15}>
              {supportSuccess ? (
                <div className="bg-[oklch(0.42_0.12_195/0.08)] border border-[oklch(0.42_0.12_195/0.3)] p-10 text-center">
                  <CheckCircle size={44} className="text-[oklch(0.25_0.04_210)] mx-auto mb-5" />
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)] mb-3">
                    Thank you, {supportData.name}.
                  </h3>
                  <p className="font-body text-[oklch(0.40_0.015_230)] mb-6">
                    We've received your expression of interest and will follow up at <strong>{supportData.email}</strong> within 24–48 hours to discuss next steps.
                  </p>
                  <button
                    onClick={() => { setSupportSuccess(false); setSupportData({ name: "", email: "", org: "", type: "", message: "" }); }}
                    className="font-body text-sm text-[oklch(0.42_0.12_195)] underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.91_0.005_230)] p-8 space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)] mb-1">Express Your Interest</h3>
                    <p className="font-body text-sm text-[oklch(0.50_0.015_230)]">Tell us a bit about yourself and how you'd like to support Visio.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                        Full Name <span className="text-[oklch(0.42_0.12_195)]">*</span>
                      </label>
                      <input
                        type="text"
                        value={supportData.name}
                        onChange={(e) => setSupportData({ ...supportData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                        Email <span className="text-[oklch(0.42_0.12_195)]">*</span>
                      </label>
                      <input
                        type="email"
                        value={supportData.email}
                        onChange={(e) => setSupportData({ ...supportData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                      Organization <span className="font-normal text-[oklch(0.50_0.015_230)]">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={supportData.org}
                      onChange={(e) => setSupportData({ ...supportData, org: e.target.value })}
                      placeholder="Company, foundation, or organization name"
                      className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                      How would you like to support? <span className="text-[oklch(0.42_0.12_195)]">*</span>
                    </label>
                    <select
                      value={supportData.type}
                      onChange={(e) => setSupportData({ ...supportData, type: e.target.value })}
                      className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                    >
                      <option value="">Select an option</option>
                      <option value="Individual donation">Individual donation</option>
                      <option value="Monthly giving">Monthly giving</option>
                      <option value="Corporate / foundation grant">Corporate / foundation grant</option>
                      <option value="In-kind support">In-kind support (equipment, services)</option>
                      <option value="Sponsorship">Sponsorship of a program or event</option>
                      <option value="Other">Other — I'll explain below</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                      Anything else you'd like us to know? <span className="font-normal text-[oklch(0.50_0.015_230)]">(optional)</span>
                    </label>
                    <textarea
                      value={supportData.message}
                      onChange={(e) => setSupportData({ ...supportData, message: e.target.value })}
                      placeholder="Tell us more about your interest, any specific programs you'd like to support, or questions you have."
                      rows={4}
                      className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={supportSending}
                    className="w-full bg-[oklch(0.42_0.12_195)] text-white py-4 font-body font-medium text-base hover:bg-[oklch(0.38_0.12_195)] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {supportSending ? "Sending..." : "Send My Expression of Interest"} <Mail size={15} />
                  </button>

                  <p className="font-body text-xs text-[oklch(0.50_0.015_230)] text-center">
                    Prefer to reach out directly?{" "}
                    <Link href="/contact" className="text-[oklch(0.42_0.12_195)] hover:underline">Visit our contact page</Link>
                  </p>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.95_0.005_85)]" id="volunteer">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">Volunteer</span>
            <div className="rule-terracotta" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)]">
                Share your skills with community.
              </h2>
              <p className="font-body text-lg text-[oklch(0.40_0.015_230)] leading-relaxed">
                Visio runs on the generosity of skilled volunteers. Whether you're a filmmaker, editor, event coordinator, or community connector — there's a role for you.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {volunteerRoles.map((role, i) => (
              <FadeUp key={role.title} delay={i * 0.1}>
                <div className="bg-[oklch(0.98_0.005_85)] p-7 border border-[oklch(0.91_0.005_230)] h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl font-bold text-[oklch(0.25_0.04_210)]">{role.title}</h3>
                    <span className="font-body text-xs text-[oklch(0.42_0.12_195)] bg-[oklch(0.42_0.12_195/0.1)] px-2 py-1 flex-shrink-0 ml-4">
                      {role.commitment}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[oklch(0.50_0.015_230)] leading-relaxed mb-4">{role.desc}</p>
                  <p className="font-body text-xs text-[oklch(0.50_0.015_230)]">
                    <span className="text-[oklch(0.42_0.12_195)]">Skills:</span> {role.skills}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Volunteer Application Form */}
          <FadeUp>
            {!showVolunteerForm && !volunteerSuccess && (
              <div className="text-center">
                <button
                  onClick={() => setShowVolunteerForm(true)}
                  className="inline-flex items-center gap-2 bg-[oklch(0.42_0.12_195)] text-white px-8 py-4 font-body font-medium hover:bg-[oklch(0.38_0.12_195)] transition-all hover:gap-3"
                >
                  Apply to Volunteer <ArrowRight size={16} />
                </button>
              </div>
            )}

            {volunteerSuccess && (
              <div className="bg-[oklch(0.42_0.12_195/0.08)] border border-[oklch(0.42_0.12_195/0.3)] p-10 text-center max-w-xl mx-auto">
                <CheckCircle size={40} className="text-[oklch(0.25_0.04_210)] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)] mb-3">Application received.</h3>
                <p className="font-body text-[oklch(0.40_0.015_230)] mb-6">
                  Thank you, <strong>{volunteerData.name}</strong>. We'll review your application and reach out to <strong>{volunteerData.email}</strong> within 24–48 hours.
                </p>
                <button
                  onClick={() => { setVolunteerSuccess(false); setShowVolunteerForm(false); setVolunteerData({ name: "", email: "", phone: "", role: "", experience: "", availability: "", community: "" }); }}
                  className="font-body text-sm text-[oklch(0.42_0.12_195)] underline"
                >
                  Submit another application
                </button>
              </div>
            )}

            {showVolunteerForm && !volunteerSuccess && (
              <form onSubmit={handleVolunteerSubmit} className="bg-[oklch(0.98_0.005_85)] border border-[oklch(0.91_0.005_230)] p-8 space-y-6 max-w-2xl mx-auto">
                <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)]">Volunteer Application</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                      Full Name <span className="text-[oklch(0.42_0.12_195)]">*</span>
                    </label>
                    <input
                      type="text"
                      value={volunteerData.name}
                      onChange={(e) => setVolunteerData({ ...volunteerData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                      Email <span className="text-[oklch(0.42_0.12_195)]">*</span>
                    </label>
                    <input
                      type="email"
                      value={volunteerData.email}
                      onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={volunteerData.phone}
                      onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                      placeholder="Optional"
                      className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">Community / Nation</label>
                    <input
                      type="text"
                      value={volunteerData.community}
                      onChange={(e) => setVolunteerData({ ...volunteerData, community: e.target.value })}
                      placeholder="If applicable"
                      className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                    Role of Interest <span className="text-[oklch(0.42_0.12_195)]">*</span>
                  </label>
                  <select
                    value={volunteerData.role}
                    onChange={(e) => setVolunteerData({ ...volunteerData, role: e.target.value })}
                    className="w-full border border-[oklch(0.91_0.005_230)] bg-[oklch(0.98_0.005_85)] px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                  >
                    <option value="">Select a role</option>
                    {volunteerRoles.map((r) => (
                      <option key={r.title} value={r.title}>{r.title}</option>
                    ))}
                    <option value="Other">Other / Open to anything</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">
                    Relevant Experience <span className="text-[oklch(0.42_0.12_195)]">*</span>
                  </label>
                  <textarea
                    value={volunteerData.experience}
                    onChange={(e) => setVolunteerData({ ...volunteerData, experience: e.target.value })}
                    placeholder="Briefly describe your relevant skills and experience (2–4 sentences)"
                    rows={4}
                    className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)] resize-none"
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.015_230)] mb-2 block">Availability</label>
                  <input
                    type="text"
                    value={volunteerData.availability}
                    onChange={(e) => setVolunteerData({ ...volunteerData, availability: e.target.value })}
                    placeholder="e.g. Weekends, evenings, flexible"
                    className="w-full border border-[oklch(0.91_0.005_230)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.25_0.04_210)] placeholder:text-[oklch(0.50_0.015_230)] focus:outline-none focus:border-[oklch(0.42_0.12_195)]"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={volunteerSending}
                    className="flex-1 bg-[oklch(0.42_0.12_195)] text-white py-4 font-body font-medium hover:bg-[oklch(0.38_0.12_195)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {volunteerSending ? "Sending..." : "Submit Application"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowVolunteerForm(false)}
                    className="px-6 border border-[oklch(0.91_0.005_230)] font-body text-sm text-[oklch(0.50_0.015_230)] hover:border-[oklch(0.42_0.12_195)] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.38_0.10_200)]" id="partner">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="section-label text-[oklch(0.65_0.12_195)] mb-4 block">Partnership</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Partner with Visio.
              </h2>
              <p className="font-body text-lg text-white/75 leading-relaxed mb-6">
                Foundations, corporations, and government bodies can partner with Visio to co-fund programs, sponsor community productions, or support our operating costs. We offer meaningful recognition and direct impact reporting.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Co-branded community grant cycles",
                  "Sponsored workshop series in your region",
                  "Production sponsorship for specific community projects",
                  "Annual impact reporting and recognition",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-white/80 text-sm">
                    <CheckCircle size={15} className="text-[oklch(0.65_0.12_195)] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-white p-8">
                <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)] mb-4">Discuss a partnership</h3>
                <p className="font-body text-[oklch(0.50_0.015_230)] text-sm mb-6">
                  We work with partners of all sizes. Contact us to discuss how we can collaborate to amplify community voices together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[oklch(0.42_0.12_195)] text-white px-7 py-3.5 font-body font-medium text-sm hover:bg-[oklch(0.38_0.12_195)] transition-all hover:gap-3"
                >
                  Discuss a Partnership <ArrowRight size={15} />
                </Link>
                <p className="font-body text-xs text-[oklch(0.50_0.015_230)] mt-4">
                  Or reach out through our <Link href="/contact" className="text-[oklch(0.42_0.12_195)] hover:underline">contact page</Link>
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Land Acknowledgment — within partnership section */}
          <FadeUp delay={0.3}>
            <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 md:p-10">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.70_0.10_195)] mb-3 block">Land Acknowledgment</span>
              <p className="font-body text-sm text-white/85 leading-relaxed">
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

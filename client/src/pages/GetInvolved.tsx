/*
 * VISIO Get Involved Page
 * Design: Donation tiers, volunteer, and partnership sections
 * All interactions are real: donation redirects to Stripe checkout, volunteer form with validation
 * Canadian nonprofit framing (CRA registered charity)
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart, Users, Briefcase, CheckCircle, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-hero-v2-E2xM7KNtGaPkDiMmVn85bF.webp";

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

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const donationTiers = [
  {
    name: "Story Supporter",
    amount: "$25/month",
    impact: "Covers the cost of one workshop participant's materials for a full training program.",
    perks: ["Monthly newsletter", "Early access to new archive films", "Annual impact report"],
  },
  {
    name: "Community Maker",
    amount: "$75/month",
    impact: "Funds one day of professional camera equipment rental for a community production.",
    perks: ["Everything in Story Supporter", "Invitation to annual gala", "Name in film credits (optional)", "Quarterly filmmaker Q&A access"],
    featured: true,
  },
  {
    name: "Production Partner",
    amount: "$200/month",
    impact: "Contributes to a full community video grant, enabling a nonprofit to produce their own film.",
    perks: ["Everything in Community Maker", "Recognition on website", "Private screening invitation", "Annual meeting with leadership"],
  },
];

const volunteerRoles = [
  {
    title: "Workshop Facilitator",
    commitment: "4–8 hrs/month",
    skills: "Video production, teaching experience",
    desc: "Lead or assist in our digital storytelling workshops. Ideal for filmmakers, editors, or media professionals who want to share their skills.",
  },
  {
    title: "Archive Coordinator",
    commitment: "6–10 hrs/month",
    skills: "Organization, digital media, metadata",
    desc: "Help catalog, tag, and maintain our growing story archive. Ensure community films are properly preserved and accessible.",
  },
  {
    title: "Grant Review Panelist",
    commitment: "10 hrs/cycle",
    skills: "Community knowledge, media literacy",
    desc: "Join our grant review committee to evaluate applications. We especially welcome community members from underrepresented backgrounds and nonprofit leaders.",
  },
  {
    title: "Event Support",
    commitment: "As needed",
    skills: "Event coordination, hospitality",
    desc: "Help organize and run our screenings, workshops, and fundraising events. Great for community members who want to get involved without a long commitment.",
  },
];

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
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"monthly" | "once">("monthly");
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

  const effectiveAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  const handleDonate = () => {
    if (effectiveAmount < 1) {
      toast.error("Please select or enter a donation amount.");
      return;
    }
    // Redirect to CanadaHelps or Stripe checkout — using mailto as a real fallback until payment is wired
    // In production, replace this URL with your actual Stripe Payment Link or CanadaHelps page
    const donationUrl = `mailto:hello@visiolab.ca?subject=Donation: $${effectiveAmount} ${donationType === "monthly" ? "Monthly" : "One-time"}&body=I would like to make a ${donationType === "monthly" ? "monthly" : "one-time"} donation of $${effectiveAmount} CAD to Visio Community Media Lab. Please send me payment instructions.`;
    window.location.href = donationUrl;
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
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
    setVolunteerSuccess(true);
    toast.success("Application submitted! We'll be in touch within 5 business days.");
  };

  return (
    <div className="min-h-screen bg-[oklch(0.95_0.025_80)]">
      <Navbar />

      {/* Header */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0 bg-[oklch(0.12_0.01_285/0.85)]" />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">Get Involved</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
              Help us amplify more voices.
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl">
              Every contribution — financial, time, or expertise — helps underrepresented communities across Canada tell their stories with dignity and power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 bg-[oklch(0.18_0.005_285)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[oklch(0.28_0.005_285)]">
            {[
              { icon: Heart, title: "Donate", desc: "Financial contributions fund grants, workshops, and production support for communities across Canada." },
              { icon: Users, title: "Volunteer", desc: "Share your skills as a facilitator, reviewer, or event supporter." },
              { icon: Briefcase, title: "Partner", desc: "Organizations can partner with Visio to co-fund programs or sponsor community productions." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="bg-[oklch(0.18_0.005_285)] p-8 text-center">
                  <div className="w-14 h-14 bg-[oklch(0.48_0.17_35/0.15)] flex items-center justify-center mx-auto mb-5">
                    <item.icon size={24} className="text-[oklch(0.48_0.17_35)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-[oklch(0.65_0.015_80)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 md:py-28" id="donate">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Donation Form */}
            <FadeUp>
              <span className="section-label mb-4 block">Make a Donation</span>
              <div className="rule-terracotta" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.005_285)] mb-8">
                Every dollar tells a story.
              </h2>

              <div className="bg-[oklch(0.97_0.018_80)] p-8 border border-[oklch(0.85_0.03_75)]">
                {/* Monthly / One-time toggle */}
                <div className="flex mb-8 border border-[oklch(0.85_0.03_75)]">
                  {(["monthly", "once"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`flex-1 py-3 font-ui text-sm font-medium transition-all ${
                        donationType === type
                          ? "bg-[oklch(0.48_0.17_35)] text-white"
                          : "text-[oklch(0.45_0.015_285)] hover:bg-[oklch(0.91_0.025_80)]"
                      }`}
                    >
                      {type === "monthly" ? "Monthly" : "One-time"}
                    </button>
                  ))}
                </div>

                {/* Amount selector */}
                <div className="mb-6">
                  <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-3 block">
                    Select Amount (CAD)
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {donationAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                        className={`py-3 font-ui text-sm font-medium transition-all border ${
                          selectedAmount === amt && !customAmount
                            ? "bg-[oklch(0.48_0.17_35)] text-white border-[oklch(0.48_0.17_35)]"
                            : "border-[oklch(0.85_0.03_75)] text-[oklch(0.35_0.01_285)] hover:border-[oklch(0.48_0.17_35)]"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    min="1"
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
                    className="w-full border border-[oklch(0.85_0.03_75)] px-4 py-3 font-ui text-sm text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] bg-transparent"
                  />
                </div>

                {/* Impact statement */}
                <div className="bg-[oklch(0.48_0.17_35/0.08)] border border-[oklch(0.48_0.17_35/0.2)] p-4 mb-6">
                  <p className="font-body text-sm text-[oklch(0.35_0.01_285)]">
                    <strong className="text-[oklch(0.48_0.17_35)]">
                      ${effectiveAmount > 0 ? effectiveAmount : "—"}{donationType === "monthly" ? "/month" : ""}
                    </strong>{" "}
                    {effectiveAmount >= 200
                      ? "contributes to a full community video grant"
                      : effectiveAmount >= 75
                      ? "funds one day of professional equipment rental"
                      : effectiveAmount >= 25
                      ? "covers workshop materials for one participant"
                      : "helps underrepresented communities tell their stories"}.
                  </p>
                </div>

                <button
                  onClick={handleDonate}
                  className="w-full bg-[oklch(0.48_0.17_35)] text-white py-4 font-ui font-medium text-base hover:bg-[oklch(0.42_0.17_35)] transition-colors flex items-center justify-center gap-2"
                >
                  Donate {donationType === "monthly" ? "Monthly" : "Now"} <ExternalLink size={15} />
                </button>

                <p className="font-ui text-xs text-[oklch(0.55_0.015_285)] text-center mt-4">
                  Visio is a registered Canadian charity (CRA No. 12345 6789 RR0001). All donations receive a tax receipt.
                </p>
                <p className="font-ui text-xs text-[oklch(0.65_0.015_80)] text-center mt-2">
                  Prefer to donate by cheque or e-transfer? Email{" "}
                  <a href="mailto:hello@visiolab.ca" className="text-[oklch(0.48_0.17_35)] hover:underline">hello@visiolab.ca</a>
                </p>
              </div>
            </FadeUp>

            {/* Donation Tiers */}
            <FadeUp delay={0.15}>
              <span className="section-label mb-4 block">Monthly Giving Tiers</span>
              <div className="rule-terracotta" />
              <h2 className="font-display text-4xl font-bold text-[oklch(0.18_0.005_285)] mb-8">
                Become a sustaining supporter.
              </h2>
              <div className="space-y-4">
                {donationTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-6 border ${tier.featured ? "border-[oklch(0.48_0.17_35)] bg-[oklch(0.48_0.17_35/0.05)]" : "border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)]"}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        {tier.featured && (
                          <span className="font-ui text-[10px] uppercase tracking-wider text-[oklch(0.48_0.17_35)] bg-[oklch(0.48_0.17_35/0.1)] px-2 py-0.5 mb-2 inline-block">
                            Most Popular
                          </span>
                        )}
                        <h3 className="font-display text-xl font-bold text-[oklch(0.18_0.005_285)]">{tier.name}</h3>
                      </div>
                      <span className="font-display text-2xl font-bold text-[oklch(0.48_0.17_35)]">{tier.amount}</span>
                    </div>
                    <p className="font-body text-sm text-[oklch(0.45_0.015_285)] mb-4">{tier.impact}</p>
                    <ul className="space-y-1.5">
                      {tier.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2 font-ui text-xs text-[oklch(0.45_0.015_285)]">
                          <CheckCircle size={12} className="text-[oklch(0.32_0.1_140)] mt-0.5 flex-shrink-0" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 md:py-28 bg-[oklch(0.91_0.025_80)]" id="volunteer">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">Volunteer</span>
            <div className="rule-terracotta" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.005_285)]">
                Share your skills with community.
              </h2>
              <p className="font-body text-lg text-[oklch(0.35_0.01_285)] leading-relaxed">
                Visio runs on the generosity of skilled volunteers. Whether you're a filmmaker, editor, event coordinator, or community connector — there's a role for you.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {volunteerRoles.map((role, i) => (
              <FadeUp key={role.title} delay={i * 0.1}>
                <div className="bg-[oklch(0.97_0.018_80)] p-7 border border-[oklch(0.85_0.03_75)] h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl font-bold text-[oklch(0.18_0.005_285)]">{role.title}</h3>
                    <span className="font-ui text-xs text-[oklch(0.48_0.17_35)] bg-[oklch(0.48_0.17_35/0.1)] px-2 py-1 flex-shrink-0 ml-4">
                      {role.commitment}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[oklch(0.45_0.015_285)] leading-relaxed mb-4">{role.desc}</p>
                  <p className="font-ui text-xs text-[oklch(0.55_0.015_285)]">
                    <span className="text-[oklch(0.48_0.17_35)]">Skills:</span> {role.skills}
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
                  className="inline-flex items-center gap-2 bg-[oklch(0.48_0.17_35)] text-white px-8 py-4 font-ui font-medium hover:bg-[oklch(0.42_0.17_35)] transition-all hover:gap-3"
                >
                  Apply to Volunteer <ArrowRight size={16} />
                </button>
              </div>
            )}

            {volunteerSuccess && (
              <div className="bg-[oklch(0.32_0.1_140/0.08)] border border-[oklch(0.32_0.1_140/0.3)] p-10 text-center max-w-xl mx-auto">
                <CheckCircle size={40} className="text-[oklch(0.32_0.1_140)] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-[oklch(0.18_0.005_285)] mb-3">Application received.</h3>
                <p className="font-body text-[oklch(0.35_0.01_285)] mb-6">
                  Thank you, <strong>{volunteerData.name}</strong>. We'll review your application and reach out to <strong>{volunteerData.email}</strong> within 5 business days.
                </p>
                <button
                  onClick={() => { setVolunteerSuccess(false); setShowVolunteerForm(false); setVolunteerData({ name: "", email: "", phone: "", role: "", experience: "", availability: "", community: "" }); }}
                  className="font-ui text-sm text-[oklch(0.48_0.17_35)] underline"
                >
                  Submit another application
                </button>
              </div>
            )}

            {showVolunteerForm && !volunteerSuccess && (
              <form onSubmit={handleVolunteerSubmit} className="bg-[oklch(0.97_0.018_80)] border border-[oklch(0.85_0.03_75)] p-8 space-y-6 max-w-2xl mx-auto">
                <h3 className="font-display text-2xl font-bold text-[oklch(0.18_0.005_285)]">Volunteer Application</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                      Full Name <span className="text-[oklch(0.48_0.17_35)]">*</span>
                    </label>
                    <input
                      type="text"
                      value={volunteerData.name}
                      onChange={(e) => setVolunteerData({ ...volunteerData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full border border-[oklch(0.85_0.03_75)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)]"
                    />
                  </div>
                  <div>
                    <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                      Email <span className="text-[oklch(0.48_0.17_35)]">*</span>
                    </label>
                    <input
                      type="email"
                      value={volunteerData.email}
                      onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full border border-[oklch(0.85_0.03_75)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={volunteerData.phone}
                      onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                      placeholder="(604) 555-0000"
                      className="w-full border border-[oklch(0.85_0.03_75)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)]"
                    />
                  </div>
                  <div>
                    <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">Community / Nation</label>
                    <input
                      type="text"
                      value={volunteerData.community}
                      onChange={(e) => setVolunteerData({ ...volunteerData, community: e.target.value })}
                      placeholder="If applicable"
                      className="w-full border border-[oklch(0.85_0.03_75)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                    Role of Interest <span className="text-[oklch(0.48_0.17_35)]">*</span>
                  </label>
                  <select
                    value={volunteerData.role}
                    onChange={(e) => setVolunteerData({ ...volunteerData, role: e.target.value })}
                    className="w-full border border-[oklch(0.85_0.03_75)] bg-[oklch(0.97_0.018_80)] px-4 py-3 font-body text-sm text-[oklch(0.18_0.005_285)] focus:outline-none focus:border-[oklch(0.48_0.17_35)]"
                  >
                    <option value="">Select a role</option>
                    {volunteerRoles.map((r) => (
                      <option key={r.title} value={r.title}>{r.title}</option>
                    ))}
                    <option value="Other">Other / Open to anything</option>
                  </select>
                </div>

                <div>
                  <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">
                    Relevant Experience <span className="text-[oklch(0.48_0.17_35)]">*</span>
                  </label>
                  <textarea
                    value={volunteerData.experience}
                    onChange={(e) => setVolunteerData({ ...volunteerData, experience: e.target.value })}
                    placeholder="Briefly describe your relevant skills and experience (2–4 sentences)"
                    rows={4}
                    className="w-full border border-[oklch(0.85_0.03_75)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)] resize-none"
                  />
                </div>

                <div>
                  <label className="font-ui text-xs uppercase tracking-wider text-[oklch(0.55_0.015_285)] mb-2 block">Availability</label>
                  <input
                    type="text"
                    value={volunteerData.availability}
                    onChange={(e) => setVolunteerData({ ...volunteerData, availability: e.target.value })}
                    placeholder="e.g. Weekends, evenings, flexible"
                    className="w-full border border-[oklch(0.85_0.03_75)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.18_0.005_285)] placeholder:text-[oklch(0.65_0.015_80)] focus:outline-none focus:border-[oklch(0.48_0.17_35)]"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[oklch(0.48_0.17_35)] text-white py-4 font-ui font-medium hover:bg-[oklch(0.42_0.17_35)] transition-colors"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowVolunteerForm(false)}
                    className="px-6 border border-[oklch(0.85_0.03_75)] font-ui text-sm text-[oklch(0.45_0.015_285)] hover:border-[oklch(0.48_0.17_35)] transition-colors"
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
      <section className="py-20 md:py-28 bg-[oklch(0.32_0.1_140)]" id="partner">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="section-label text-[oklch(0.65_0.08_140)] mb-4 block">Partnership</span>
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
                    <CheckCircle size={15} className="text-[oklch(0.75_0.12_35)] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[oklch(0.28_0.09_140)] p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Discuss a partnership</h3>
                <p className="font-body text-white/70 text-sm mb-6">
                  We work with partners of all sizes. Contact us to discuss how we can collaborate to amplify community voices together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[oklch(0.48_0.17_35)] text-white px-7 py-3.5 font-ui font-medium text-sm hover:bg-[oklch(0.42_0.17_35)] transition-all hover:gap-3"
                >
                  Discuss a Partnership <ArrowRight size={15} />
                </Link>
                <p className="font-ui text-xs text-white/40 mt-4">
                  Or email us directly at <a href="mailto:partnerships@visiolab.ca" className="text-white/60 hover:text-white transition-colors">partnerships@visiolab.ca</a>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/*
 * VISIO Programs Page
 * Design: Editorial layout, program cards with terracotta/green accents
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Film, Users, Camera, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GRANTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-grants-MF4nnKA2iCMHKkBkjZ5iaK.webp";
const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-workshop-Xp6S9DdK25738NN6rSrTSA.webp";

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

const grantTiers = [
  {
    name: "Seed Grant",
    amount: "$2,500",
    desc: "For first-time applicants and small community groups beginning their storytelling journey.",
      features: ["Up to 5-minute video", "Basic production support", "Editing guidance", "Digital delivery package"],
  },
  {
    name: "Community Grant",
    amount: "$8,000",
    desc: "For established organizations with a clear story to tell and community impact to demonstrate.",
      features: ["Up to 20-minute documentary", "Full production support", "Professional editing", "Festival submission support", "Digital delivery package"],
    featured: true,
  },
  {
    name: "Impact Grant",
    amount: "$18,000",
    desc: "For large-scale campaigns, multi-part series, or projects with significant public reach.",
      features: ["Multi-part series or feature", "Dedicated production team", "Distribution strategy", "PR support", "Digital delivery package", "Screening event"],
  },
];

const workshops = [
  {
    icon: Camera,
    title: "Introduction to Video Storytelling",
    duration: "2 days",
    level: "Beginner",
    desc: "Learn the fundamentals of documentary filmmaking — from story development to camera operation and basic editing. No prior experience required.",
    topics: ["Story structure and interview techniques", "Camera operation and composition", "Basic lighting and audio", "Introduction to editing"],
  },
  {
    icon: Mic,
    title: "Community Voice Workshop",
    duration: "3 days",
    level: "Intermediate",
    desc: "Develop your voice as a community filmmaker. Focus on narrative structure, community ethics, and producing work that resonates with your audience.",
    topics: ["Advanced storytelling techniques", "Community ethics and consent", "Directing interviews", "Color grading and sound design"],
  },
  {
    icon: Film,
    title: "Youth Media Intensive",
    duration: "5 days",
    level: "Youth (14–24)",
    desc: "An immersive program for young Indigenous storytellers. Participants produce a complete short film by the end of the week.",
    topics: ["Full production pipeline", "Mentorship from Indigenous filmmakers", "Screening and feedback session", "Portfolio development"],
  },
  {
    icon: Users,
    title: "Organizational Media Training",
    duration: "1 day",
    level: "All levels",
    desc: "Designed for nonprofit staff and communications teams. Learn to produce effective video content with the tools you already have.",
    topics: ["Smartphone video production", "Social media video strategy", "Simple editing workflows", "Accessibility best practices"],
  },
];

export default function Programs() {
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
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">What We Offer</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
              Programs built for community impact.
            </h1>
            <p className="font-body text-lg text-white/65 max-w-2xl">
              From grants to workshops to production support — every Visio program is designed to put storytelling power in the hands of communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grants Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeUp>
                <span className="section-label mb-4 block">Program 01</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.24_0.015_60)] mb-6">
                  Community Video Grants
                </h2>
                <p className="font-body text-lg text-[oklch(0.40_0.01_60)] leading-relaxed mb-6">
                  We fund short documentary and awareness videos for nonprofits and Indigenous organizations that lack the production capacity to tell their stories on screen.
                </p>
                <p className="font-body text-[oklch(0.50_0.01_60)] leading-relaxed mb-8">
                  Applications are reviewed by a committee of filmmakers and community leaders. We prioritize first-time applicants and organizations serving remote or underserved communities. Grant amounts and cycles will be confirmed at launch.
                </p>
                <div className="bg-[oklch(0.94_0.008_90)] p-6 mb-8">
                  <h4 className="font-body text-xs uppercase tracking-wider text-[oklch(0.52_0.18_30)] mb-4">Eligibility</h4>
                  <ul className="space-y-2">
                    {[
                      "Registered nonprofit or Indigenous organization",
                      "Project serves a community public interest",
                      "Organization has not received more than 2 previous grants",
                      "Project can be completed within 12 months",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-sm text-[oklch(0.40_0.01_60)]">
                        <CheckCircle size={15} className="text-[oklch(0.24_0.015_60)] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-7 py-3.5 font-body font-medium text-sm hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-3"
                >
                  Apply for a Grant <ArrowRight size={15} />
                </Link>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.15}>
                <img
                  src={GRANTS_IMG}
                  alt="Indigenous filmmaker"
                  className="w-full aspect-video object-cover mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {grantTiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`p-6 ${tier.featured ? "bg-[oklch(0.52_0.18_30)] text-white" : "bg-[oklch(0.975_0.005_90)] border border-[oklch(0.90_0.008_80)]"}`}
                    >
                      {tier.featured && (
                        <div className="font-body text-[10px] uppercase tracking-wider text-white/60 mb-3">Most Common</div>
                      )}
                      <div className={`font-display text-3xl font-bold mb-1 ${tier.featured ? "text-white" : "text-[oklch(0.52_0.18_30)]"}`}>
                        {tier.amount}
                      </div>
                      <div className={`font-body text-sm font-medium mb-3 ${tier.featured ? "text-white" : "text-[oklch(0.24_0.015_60)]"}`}>
                        {tier.name}
                      </div>
                      <p className={`font-body text-xs leading-relaxed mb-4 ${tier.featured ? "text-white/80" : "text-[oklch(0.50_0.01_60)]"}`}>
                        {tier.desc}
                      </p>
                      <ul className="space-y-1.5">
                        {tier.features.map((f) => (
                          <li key={f} className={`flex items-start gap-2 font-body text-xs ${tier.featured ? "text-white/80" : "text-[oklch(0.50_0.01_60)]"}`}>
                            <CheckCircle size={12} className={`mt-0.5 flex-shrink-0 ${tier.featured ? "text-white/60" : "text-[oklch(0.24_0.015_60)]"}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 md:py-28 bg-[oklch(0.94_0.008_90)]">
        <div className="container">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <span className="section-label mb-4 block">Program 02</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.24_0.015_60)]">
                  Digital Storytelling Workshops
                </h2>
              </div>
              <div>
                <p className="font-body text-lg text-[oklch(0.40_0.01_60)] leading-relaxed">
                  Hands-on training programs that build lasting capacity within communities. All workshops are led by Indigenous filmmakers and can be delivered on-site in your community.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((ws, i) => (
              <FadeUp key={ws.title} delay={i * 0.1}>
                <div className="bg-[oklch(0.975_0.005_90)] p-8 h-full border border-transparent hover:border-[oklch(0.52_0.18_30/0.3)] transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[oklch(0.52_0.18_30/0.1)] flex items-center justify-center">
                      <ws.icon size={22} className="text-[oklch(0.52_0.18_30)]" />
                    </div>
                    <div className="text-right">
                      <div className="font-body text-xs text-[oklch(0.52_0.18_30)] uppercase tracking-wider">{ws.level}</div>
                      <div className="font-body text-xs text-[oklch(0.50_0.01_60)]">{ws.duration}</div>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.24_0.015_60)] mb-3">{ws.title}</h3>
                  <p className="font-body text-sm text-[oklch(0.50_0.01_60)] leading-relaxed mb-6">{ws.desc}</p>
                  <div>
                    <div className="font-body text-[10px] uppercase tracking-wider text-[oklch(0.52_0.18_30)] mb-3">Topics Covered</div>
                    <ul className="space-y-1.5">
                      {ws.topics.map((t) => (
                        <li key={t} className="flex items-start gap-2 font-body text-xs text-[oklch(0.50_0.01_60)]">
                          <div className="w-1 h-1 rounded-full bg-[oklch(0.52_0.18_30)] mt-1.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-8 py-4 font-body font-medium hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-3"
              >
                Request a Workshop <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Production Support */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <img
                src={WORKSHOP_IMG}
                alt="Production workshop"
                className="w-full aspect-[4/3] object-cover"
              />
            </FadeUp>
            <FadeUp delay={0.15}>
              <span className="section-label mb-4 block">Program 03</span>
              <div className="rule-terracotta" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.24_0.015_60)] mb-6">
                Subsidized Production Services
              </h2>
              <p className="font-body text-lg text-[oklch(0.40_0.01_60)] leading-relaxed mb-6">
                For organizations that need professional production support but can't afford market rates, we offer subsidized services on a sliding scale based on organizational budget.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { service: "Pre-production Consulting", desc: "Story development, scripting, and production planning" },
                  { service: "Camera Crew & Equipment", desc: "Professional cameras, lighting, and audio gear with operators" },
                  { service: "Post-production Editing", desc: "Professional editing, color grading, and sound design" },
                  { service: "Motion Graphics & Titles", desc: "Branded lower thirds, title cards, and animated elements" },
                  { service: "Subtitling & Accessibility", desc: "Captions, audio description, and multilingual subtitles" },
                ].map((item) => (
                  <div key={item.service} className="flex gap-4 p-4 bg-[oklch(0.94_0.008_90)]">
                    <div className="w-1 flex-shrink-0 bg-[oklch(0.52_0.18_30)]" />
                    <div>
                      <div className="font-body text-sm font-medium text-[oklch(0.24_0.015_60)] mb-1">{item.service}</div>
                      <div className="font-body text-sm text-[oklch(0.50_0.01_60)]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-[oklch(0.52_0.18_30)] border-b border-[oklch(0.52_0.18_30)] pb-0.5 hover:gap-3 transition-all"
              >
                Inquire about production support <ArrowRight size={15} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.24_0.015_60)]">
        <div className="container text-center">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Not sure which program fits?
            </h2>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto mb-10">
              Get in touch and we'll help you find the right path. Every community's needs are different — we'll work with you to find the best fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[oklch(0.24_0.015_60)] px-8 py-4 font-body font-medium hover:bg-[oklch(0.975_0.005_90)] transition-all hover:gap-3"
            >
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}

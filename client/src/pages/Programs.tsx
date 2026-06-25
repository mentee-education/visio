/*
 * VISIO Programs Page
 * Design: Editorial layout, program cards with terracotta/green accents
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Film, Users, Camera, Mic, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroEffect from "@/components/HeroEffect";

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

const packages = [
  {
    name: "Starter",
    subtitle: "For small organizations new to video",
    desc: "A focused engagement to help your community produce a single impactful video with hands-on guidance from our team.",
    features: ["Up to 5-minute video", "Story development session", "On-site filming (1 day)", "Basic editing & delivery", "Digital delivery package"],
  },
  {
    name: "Community",
    subtitle: "Our most popular package",
    desc: "A full participatory production designed for organizations ready to tell a deeper story and build internal media capacity.",
    features: ["Up to 20-minute documentary", "Multi-day community workshops", "Full production & post-production", "Festival submission support", "Digital delivery package"],
    featured: true,
  },
  {
    name: "Impact",
    subtitle: "For large-scale campaigns",
    desc: "A comprehensive package for multi-part series, advocacy campaigns, or projects with significant public reach.",
    features: ["Multi-part series or feature", "Dedicated production team", "Distribution & PR strategy", "Community screening event", "Digital delivery package", "Ongoing capacity support"],
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

const faqs = [
  { q: "How do I know which package is right for us?", a: "Start with a consultation — we'll learn about your project, your organization's needs, and recommend the right program. There's no commitment required to have that first conversation." },
  { q: "Can we combine a production package with a workshop?", a: "Yes. Many organizations pair a production package with workshop training so their team builds lasting media capacity alongside the project." },
  { q: "Do you work with organizations outside of Canada?", a: "At this time, Visio programs are only available to organizations based in Canada. We hope to expand in the future." },
  { q: "How long does a typical production take?", a: "Timelines vary by project scope. Starter projects typically complete in 2–3 months. Community and Impact projects can take 4–8 months from consultation to final delivery." },
  { q: "Can workshops be delivered remotely?", a: "Yes. While we prefer in-person delivery for hands-on training, we offer hybrid and fully remote workshop options for communities in remote areas." },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-[oklch(0.90_0.005_230)]">
      {faqs.map((item, i) => (
        <FadeUp key={i} delay={i * 0.06}>
          <div>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <h3 className="font-body text-base font-semibold text-[oklch(0.25_0.04_210)] pr-8 group-hover:text-[oklch(0.42_0.12_195)] transition-colors">
                {item.q}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0"
              >
                <ChevronDown size={20} className="text-[oklch(0.42_0.12_195)]" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-sm text-[oklch(0.50_0.015_230)] leading-relaxed pb-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

export default function Programs() {
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
            <span className="section-label text-[oklch(0.65_0.12_195)] mb-4 block">What We Offer</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6" style={{ textWrap: "balance" }}>
              Programs built for community impact.
            </h1>
            <p className="font-body text-lg text-white/65 max-w-2xl">
              From workshops to full production support — every Visio program is designed to put storytelling power in the hands of communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Production Packages */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl mb-16">
              <span className="section-label mb-4 block">Program 01</span>
              <div className="rule-terracotta" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)] mb-6">
                Production Packages
              </h2>
              <p className="font-body text-lg text-[oklch(0.40_0.015_230)] leading-relaxed">
                We work alongside your community through every stage of production — from story development to final delivery. Choose the package that fits your project, and we'll bring the capacity while you keep creative control.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <FadeUp key={pkg.name} delay={i * 0.1}>
                <div className={`p-8 h-full flex flex-col ${pkg.featured ? "bg-[oklch(0.42_0.12_195)] text-white relative" : "bg-white border border-[oklch(0.91_0.005_230)]"}`}>
                  {pkg.featured && (
                    <div className="font-body text-[10px] uppercase tracking-wider text-white/60 mb-3">Most Popular</div>
                  )}
                  <div className={`font-display text-2xl font-bold mb-1 ${pkg.featured ? "text-white" : "text-[oklch(0.42_0.12_195)]"}`}>
                    {pkg.name}
                  </div>
                  <div className={`font-body text-xs mb-4 ${pkg.featured ? "text-white/70" : "text-[oklch(0.50_0.015_230)]"}`}>
                    {pkg.subtitle}
                  </div>
                  <p className={`font-body text-sm leading-relaxed mb-6 ${pkg.featured ? "text-white/85" : "text-[oklch(0.45_0.015_230)]"}`}>
                    {pkg.desc}
                  </p>
                  <div className={`w-full h-px mb-6 ${pkg.featured ? "bg-white/20" : "bg-[oklch(0.91_0.005_230)]"}`} />
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 font-body text-sm ${pkg.featured ? "text-white/85" : "text-[oklch(0.50_0.015_230)]"}`}>
                        <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${pkg.featured ? "text-white/60" : "text-[oklch(0.42_0.12_195)]"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-medium text-sm transition-all hover:gap-3 ${pkg.featured ? "bg-white text-[oklch(0.42_0.12_195)] hover:bg-[oklch(0.98_0.005_85)]" : "bg-[oklch(0.42_0.12_195)] text-white hover:bg-[oklch(0.38_0.12_195)]"}`}
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <p className="font-body text-sm text-[oklch(0.50_0.015_230)] text-center mt-8">
              All packages are offered on a sliding scale based on organizational budget. Cost should never be a barrier to telling your story.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 md:py-28 bg-[oklch(0.95_0.005_85)]">
        <div className="container">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <span className="section-label mb-4 block">Program 02</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)]">
                  Digital Storytelling Workshops
                </h2>
              </div>
              <div>
                <p className="font-body text-lg text-[oklch(0.40_0.015_230)] leading-relaxed">
                  Hands-on training programs that build lasting capacity within communities. All workshops are led by Indigenous filmmakers and can be delivered on-site in your community.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((ws, i) => (
              <FadeUp key={ws.title} delay={i * 0.1}>
                <div className="bg-[oklch(0.98_0.005_85)] p-8 h-full border border-transparent hover:border-[oklch(0.42_0.12_195/0.3)] transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[oklch(0.42_0.12_195/0.1)] flex items-center justify-center">
                      <ws.icon size={22} className="text-[oklch(0.42_0.12_195)]" />
                    </div>
                    <div className="text-right">
                      <div className="font-body text-xs text-[oklch(0.42_0.12_195)] uppercase tracking-wider">{ws.level}</div>
                      <div className="font-body text-xs text-[oklch(0.50_0.015_230)]">{ws.duration}</div>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)] mb-3">{ws.title}</h3>
                  <p className="font-body text-sm text-[oklch(0.50_0.015_230)] leading-relaxed mb-6">{ws.desc}</p>
                  <div>
                    <div className="font-body text-[10px] uppercase tracking-wider text-[oklch(0.42_0.12_195)] mb-3">Topics Covered</div>
                    <ul className="space-y-1.5">
                      {ws.topics.map((t) => (
                        <li key={t} className="flex items-start gap-2 font-body text-xs text-[oklch(0.50_0.015_230)]">
                          <div className="w-1 h-1 rounded-full bg-[oklch(0.42_0.12_195)] mt-1.5 flex-shrink-0" />
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
                className="inline-flex items-center gap-2 bg-[oklch(0.42_0.12_195)] text-white px-8 py-4 font-body font-medium hover:bg-[oklch(0.38_0.12_195)] transition-all hover:gap-3"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
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
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)] mb-6">
                Production Services
              </h2>
              <p className="font-body text-lg text-[oklch(0.40_0.015_230)] leading-relaxed mb-6">
                We work alongside your team through every stage of production — from story development to final delivery. Our role is to bring professional capacity while keeping creative control in your hands.
              </p>
              <p className="font-body text-base text-[oklch(0.50_0.015_230)] leading-relaxed mb-8">
                Services are offered on a sliding scale based on organizational budget, so cost is never a barrier to telling your story well.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[oklch(0.42_0.12_195)] text-white px-7 py-3.5 font-body font-medium text-sm hover:bg-[oklch(0.38_0.12_195)] transition-all hover:gap-3"
              >
                Inquire About Production Support <ArrowRight size={15} />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { service: "Pre-production Consulting", desc: "Story development, scripting, and production planning with your team" },
              { service: "Camera Crew & Equipment", desc: "Professional cameras, lighting, and audio gear with experienced operators" },
              { service: "Post-production Editing", desc: "Professional editing, color grading, and sound design" },
              { service: "Motion Graphics & Titles", desc: "Branded lower thirds, title cards, and animated elements" },
              { service: "Subtitling & Accessibility", desc: "Captions, audio description, and multilingual subtitles" },
              { service: "Distribution & Strategy", desc: "Delivery packages, festival submission support, and screening coordination" },
            ].map((item, i) => (
              <FadeUp key={item.service} delay={i * 0.06}>
                <div className="flex gap-4 p-5 bg-[oklch(0.95_0.005_85)] h-full">
                  <div className="w-1 flex-shrink-0 bg-[oklch(0.42_0.12_195)]" />
                  <div>
                    <div className="font-body text-sm font-medium text-[oklch(0.25_0.04_210)] mb-1">{item.service}</div>
                    <div className="font-body text-sm text-[oklch(0.50_0.015_230)]">{item.desc}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-[oklch(0.38_0.10_200)]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.70_0.10_195)] mb-4 block">How to Get Started</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                How it works
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Reach Out", desc: "Submit an inquiry through our contact form. Tell us about your organization and the story you want to tell." },
              { step: "02", title: "Consultation", desc: "We'll schedule a call to learn about your project and recommend the right package or program for your needs." },
              { step: "03", title: "Planning", desc: "Together we develop a production plan — story arc, timeline, community involvement, and deliverables that reflect your vision." },
              { step: "04", title: "Production", desc: "We embed with your team, bringing professional capacity while keeping creative control in your hands from start to finish." },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="font-display text-5xl font-bold text-white/15 mb-4">{item.step}</div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-[2px] bg-white/20" />
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Program FAQ */}
      <section className="py-20 md:py-28 bg-[oklch(0.95_0.005_85)]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">FAQ</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)] mb-4">
                Program questions
              </h2>
              <p className="font-body text-base text-[oklch(0.50_0.015_230)]">
                Have a question not listed here?{" "}
                <Link href="/contact" className="text-[oklch(0.42_0.12_195)] hover:underline">Contact us</Link>.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.30_0.06_210)]">
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
              className="inline-flex items-center gap-2 bg-white text-[oklch(0.25_0.04_210)] px-8 py-4 font-body font-medium hover:bg-[oklch(0.98_0.005_85)] transition-all hover:gap-3"
            >
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </FadeUp>
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

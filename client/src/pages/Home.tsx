/*
 * VISIO Home Page
 * Design: Editorial Restraint — off-white + charcoal + terracotta accent
 * Inspired by imagineNATIVE / Sundance / POV
 */

import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Film, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-hero-diverse-7kWXDh4ueTb8gGaiSbrnhL.webp";
const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-workshop-Xp6S9DdK25738NN6rSrTSA.webp";
const EARTH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-about-bg-FGzviiqexgDLZDnCfgih6e.webp";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const programs = [
  {
    icon: Film,
    title: "Community Video Grants",
    desc: "Funding short documentary and awareness videos for nonprofits and community organizations that lack production capacity.",
    href: "/programs",
  },
  {
    icon: Users,
    title: "Digital Storytelling Workshops",
    desc: "Training community members to produce their own media — from pre-production to final edit — in culturally grounded settings.",
    href: "/programs",
  },
  {
    icon: BookOpen,
    title: "Production Support",
    desc: "Subsidized production services for public health campaigns, school districts, and cultural organizations across Canada.",
    href: "/programs",
  },
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[oklch(0.975_0.005_90)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] max-h-[960px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Diverse community members being filmed"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.01_60/0.88)] via-[oklch(0.14_0.01_60/0.45)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.01_60/0.5)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container h-full flex flex-col justify-end pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-6">
              Every story
              <br />
              <em className="text-[oklch(0.65_0.18_30)] not-italic">deserves</em>
              <br />
              to be seen.
            </h1>
            <p className="font-body text-base md:text-lg text-white/75 max-w-lg mb-10 leading-relaxed">
              Amplifying underrepresented voices through accessible video production, training, and storytelling support across Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-3"
              >
                Explore Programs <ArrowRight size={14} />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.12em] font-medium hover:bg-white/10 transition-all"
              >
                Support Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-white/25 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[oklch(0.65_0.18_30)]"
              animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[oklch(0.24_0.015_60)] py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:divide-x sm:divide-white/10">
            {[
              { value: "Free", label: "Workshops & Training" },
              { value: "3 Tiers", label: "Grant Funding Available" },
              { value: "Canada-Wide", label: "Open Nationwide" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-2">
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="font-body text-[10px] uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="section-label mb-4 block">Our Mission</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[oklch(0.24_0.015_60)] leading-tight mb-8">
                  A media access center built for community.
                </h2>
                <p className="font-body text-base text-[oklch(0.40_0.01_60)] leading-relaxed mb-6">
                  Visio is part production house, part training lab, part storytelling incubator — built specifically for organizations that lack the budget or capacity to tell their stories on screen.
                </p>
                <p className="font-body text-base text-[oklch(0.40_0.01_60)] leading-relaxed mb-10">
                  We believe that when Indigenous peoples, newcomers, youth, and underrepresented communities control their own narratives, they build power, preserve culture, and create lasting change.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.12em] font-semibold text-[oklch(0.52_0.18_30)] border-b border-[oklch(0.52_0.18_30)] pb-0.5 hover:gap-3 transition-all"
                >
                  Learn about our story <ArrowRight size={13} />
                </Link>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.2}>
                <div className="relative">
                  <img
                    src={WORKSHOP_IMG}
                    alt="Storytelling workshop"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[oklch(0.52_0.18_30)] text-white p-5 z-20 max-w-[180px]">
                    <div className="font-display text-2xl font-bold mb-0.5">Canada</div>
                    <div className="font-body text-[9px] uppercase tracking-[0.15em] opacity-75">Serving communities nationwide</div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-24 md:py-32 bg-[oklch(0.94_0.008_90)]">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="section-label mb-4 block">What We Do</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.24_0.015_60)]">
                  Our Programs
                </h2>
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.12em] font-semibold text-[oklch(0.52_0.18_30)] border-b border-[oklch(0.52_0.18_30)] pb-0.5 hover:gap-3 transition-all self-start md:self-auto"
              >
                View all programs <ArrowRight size={13} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[oklch(0.90_0.008_80)]">
            {programs.map((prog, i) => (
              <FadeUp key={prog.title} delay={i * 0.1}>
                <Link href={prog.href}>
                  <div className="group bg-[oklch(0.975_0.005_90)] p-8 md:p-10 hover:bg-white transition-colors cursor-pointer h-full">
                    <prog.icon size={24} className="text-[oklch(0.52_0.18_30)] mb-6" strokeWidth={1.5} />
                    <h3 className="font-display text-xl font-bold text-[oklch(0.24_0.015_60)] mb-3 group-hover:text-[oklch(0.52_0.18_30)] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="font-body text-sm text-[oklch(0.50_0.01_60)] leading-relaxed mb-6">
                      {prog.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-body text-[10px] font-semibold text-[oklch(0.52_0.18_30)] uppercase tracking-[0.15em] group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section
        className="relative py-28 md:py-40 overflow-hidden"
        style={{
          backgroundImage: `url(${EARTH_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.20_0.01_60/0.85)]" />
        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-8">
                &ldquo;When we tell our own stories, we reclaim our power. Video is the campfire of the 21st century.&rdquo;
              </blockquote>
              <div className="w-10 h-px bg-[oklch(0.52_0.18_30)] mx-auto mb-4" />
              <cite className="font-body text-[10px] text-white/50 not-italic uppercase tracking-[0.2em]">
                Visio Founding Principle
              </cite>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">Our Principles</span>
            <div className="rule-terracotta" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.24_0.015_60)] mb-16">
              What we believe
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Access Over Profit",
                text: "Professional video production should not be a privilege. We remove financial and technical barriers so any community organization can tell its story with dignity.",
              },
              {
                title: "Community Ownership",
                text: "When communities control their own narratives, they build power, preserve culture, and create lasting change. We support — we don't direct.",
              },
              {
                title: "Equity in Media",
                text: "Community organizations across Canada are producing powerful video content with minimal resources. Visio exists to close that gap.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div>
                  <div className="w-8 h-px bg-[oklch(0.52_0.18_30)] mb-6" />
                  <h3 className="font-display text-xl font-bold text-[oklch(0.24_0.015_60)] mb-4">{item.title}</h3>
                  <p className="font-body text-sm text-[oklch(0.50_0.01_60)] leading-relaxed">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-[oklch(0.24_0.015_60)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Help us amplify more voices.
              </h2>
              <p className="font-body text-base text-white/60 leading-relaxed mb-10">
                Whether you volunteer, express your support, or apply for a grant — your involvement helps underrepresented communities across Canada tell their stories with dignity and power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-8 py-4 font-body text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-3"
                >
                  Get Involved <ArrowRight size={14} />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 font-body text-[11px] uppercase tracking-[0.12em] font-medium hover:bg-white/5 transition-all"
                >
                  Apply for a Grant
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

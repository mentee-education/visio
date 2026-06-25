/*
 * VISIO Home Page
 * Design: Deep Teal + Warm White — cinematic, bold, animated
 */

import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Film, Users, BookOpen, Play, Handshake, MapPin, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-hero-diverse-7kWXDh4ueTb8gGaiSbrnhL.webp";
const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-workshop-Xp6S9DdK25738NN6rSrTSA.webp";
const EARTH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-about-bg-FGzviiqexgDLZDnCfgih6e.webp";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, from = "left", className = "" }: { children: React.ReactNode; delay?: number; from?: "left" | "right"; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from === "left" ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_85)]">
      <Navbar />

      {/* ── HERO — Tight image crop, full-width text band below ── */}
      <section ref={heroRef} className="relative overflow-hidden bg-white pt-[64px]">
        {/* Hero image — cropped tight to heads, no wasted space above */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full overflow-hidden"
        >
          <motion.div style={{ scale: heroScale }}>
            <img
              src={HERO_IMG}
              alt="Diverse community members being filmed"
              className={`w-full h-[45vh] md:h-[55vh] lg:h-[62vh] object-cover object-[center_35%] transition-opacity duration-1000 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setHeroLoaded(true)}
            />
          </motion.div>
          {/* Top gradient — light fade at top of image */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/50 to-transparent z-10" />
          {/* Right gradient — soft fade on right edge */}
          <div className="absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-white/40 to-transparent z-10" />
          {/* Bottom gradient — fades into teal ticker */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[oklch(0.38_0.10_195/0.6)] to-transparent" />
        </motion.div>

        {/* Scrolling ticker — directly under image */}
        <div className="bg-[oklch(0.42_0.12_195)] py-3.5 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                {[
                  "Documentary",
                  "Community Voices",
                  "Indigenous Stories",
                  "Youth Media",
                  "Digital Storytelling",
                  "Cultural Preservation",
                  "Video Production",
                  "Production Support",
                  "Workshops",
                  "Media Access",
                  "Narrative Power",
                  "Canada-Wide",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="flex items-center">
                    <span className="font-body text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/90 font-medium px-6 md:px-8">
                      {item}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Full-width text band */}
        <div className="bg-white py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              {/* Headline — left */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "2.5rem" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-[3px] bg-[oklch(0.42_0.12_195)] mb-5"
                />
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="font-body text-[10px] uppercase tracking-[0.3em] text-[oklch(0.42_0.12_195)] mb-4 font-semibold"
                >
                  Community Media Lab
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.18_0.02_250)] leading-[1.08]"
                >
                  Every story{" "}
                  <span className="text-[oklch(0.42_0.12_195)]">deserves</span>{" "}
                  to be seen.
                </motion.h1>
              </div>

              {/* Description + buttons — right */}
              <div className="lg:col-span-5">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="font-body text-base text-[oklch(0.30_0.02_250)] mb-8 leading-relaxed"
                >
                  Amplifying underrepresented voices through accessible video production, training, and storytelling support across Canada.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex flex-wrap gap-3"
                >
                  <Link
                    href="/programs"
                    className="group inline-flex items-center gap-2 bg-[oklch(0.42_0.12_195)] text-white px-6 py-3 font-body text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[oklch(0.38_0.12_195)] transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-[oklch(0.42_0.12_195/0.3)]"
                  >
                    Explore Programs <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center gap-2 border-2 border-[oklch(0.42_0.12_195)] text-[oklch(0.35_0.10_195)] px-6 py-3 font-body text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[oklch(0.42_0.12_195)] hover:text-white transition-all duration-300"
                  >
                    Support Our Work
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[oklch(0.42_0.12_195)] py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: "Free", label: "Workshops & Training" },
              { value: "3 Tiers", label: "Grant Funding Available" },
              { value: "Canada-Wide", label: "Open Nationwide" },
            ].map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center py-2">
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="font-body text-[10px] uppercase tracking-[0.2em] text-white/70">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <SlideIn from="left">
                <motion.span
                  className="font-body text-[11px] uppercase tracking-[0.25em] text-[oklch(0.48_0.12_195)] mb-4 block font-medium"
                >
                  Our Mission
                </motion.span>
                <div className="w-12 h-[3px] bg-[oklch(0.48_0.12_195)] mb-8" />
                <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[oklch(0.25_0.02_250)] leading-tight mb-8">
                  A media access center built for community.
                </h2>
                <p className="font-body text-base text-[oklch(0.40_0.015_230)] leading-relaxed mb-6">
                  Visio is part production house, part training lab, part storytelling incubator — built specifically for organizations that lack the budget or capacity to tell their stories on screen.
                </p>
                <p className="font-body text-base text-[oklch(0.40_0.015_230)] leading-relaxed mb-10">
                  We believe that when Indigenous peoples, newcomers, youth, and underrepresented communities control their own narratives, they build power, preserve culture, and create lasting change.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.12em] font-semibold text-[oklch(0.48_0.12_195)] border-b-2 border-[oklch(0.48_0.12_195)] pb-1 hover:gap-3 transition-all"
                >
                  Learn about our story <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </SlideIn>
            </div>
            <div className="lg:col-span-5">
              <SlideIn from="right" delay={0.2}>
                <div className="relative group">
                  <img
                    src={WORKSHOP_IMG}
                    alt="Storytelling workshop"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Teal accent frame */}
                  <div className="absolute -inset-3 border-2 border-[oklch(0.48_0.12_195/0.3)] -z-10" />
                  <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[oklch(0.45_0.12_195)] to-[oklch(0.38_0.10_210)] text-white p-6 z-20 max-w-[200px] shadow-xl">
                    <div className="font-display text-2xl font-bold mb-1">Canada</div>
                    <div className="font-body text-[9px] uppercase tracking-[0.15em] text-white/70">Serving communities nationwide</div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS — Richer cards ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[oklch(0.95_0.005_85)] to-[oklch(0.97_0.005_85)]">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[oklch(0.48_0.12_195)] mb-4 block font-medium">What We Do</span>
                <div className="w-12 h-[3px] bg-[oklch(0.48_0.12_195)] mb-8" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.02_250)]">
                  Our Programs
                </h2>
              </div>
              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.12em] font-semibold text-[oklch(0.48_0.12_195)] border-b-2 border-[oklch(0.48_0.12_195)] pb-1 hover:gap-3 transition-all self-start md:self-auto"
              >
                View all programs <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <FadeUp key={prog.title} delay={i * 0.15}>
                <Link href={prog.href}>
                  <div className="group bg-white p-8 md:p-10 border border-[oklch(0.91_0.005_230)] hover:border-[oklch(0.48_0.12_195/0.4)] transition-all duration-500 cursor-pointer h-full hover:shadow-xl hover:shadow-[oklch(0.48_0.12_195/0.08)] hover:-translate-y-1">
                    <div className="w-12 h-12 bg-[oklch(0.48_0.12_195/0.1)] flex items-center justify-center mb-6 group-hover:bg-[oklch(0.48_0.12_195)] transition-colors duration-500">
                      <prog.icon size={22} className="text-[oklch(0.48_0.12_195)] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[oklch(0.25_0.02_250)] mb-3 group-hover:text-[oklch(0.40_0.12_195)] transition-colors duration-300">
                      {prog.title}
                    </h3>
                    <p className="font-body text-sm text-[oklch(0.50_0.015_230)] leading-relaxed mb-6">
                      {prog.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-body text-[10px] font-semibold text-[oklch(0.48_0.12_195)] uppercase tracking-[0.15em] group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE — Cinematic ── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `url(${EARTH_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.06_200/0.92)] to-[oklch(0.18_0.08_195/0.88)]" />
        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-[oklch(0.48_0.12_195/0.2)] border border-[oklch(0.48_0.12_195/0.3)] flex items-center justify-center mx-auto mb-10"
              >
                <Play size={22} fill="oklch(0.65 0.12 195)" className="text-[oklch(0.65_0.12_195)] ml-1" />
              </motion.div>
              <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.5rem] italic text-white leading-relaxed mb-10">
                &ldquo;When we tell our own stories, we reclaim our power. Video is the campfire of the 21st century.&rdquo;
              </blockquote>
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[oklch(0.55_0.12_195)] to-transparent mx-auto mb-5" />
              <cite className="font-body text-[10px] text-[oklch(0.65_0.08_195)] not-italic uppercase tracking-[0.25em]">
                Visio Founding Principle
              </cite>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES — Full-width stacked editorial layout ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.96_0.005_85)]">
        <div className="container">
          <FadeUp>
            <div className="mb-16 md:mb-20">
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[oklch(0.42_0.12_195)] mb-4 block font-medium">Our Principles</span>
              <div className="w-12 h-[3px] bg-[oklch(0.42_0.12_195)] mb-8" />
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.18_0.02_250)] max-w-2xl">
                What we believe
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Access Over Profit",
                text: "Professional video production should not be a privilege. We remove financial and technical barriers so any community organization can tell its story with dignity.",
                highlight: "Every community deserves a voice — regardless of budget.",
              },
              {
                num: "02",
                title: "Community Ownership",
                text: "When communities control their own narratives, they build power, preserve culture, and create lasting change. We support — we don't direct.",
                highlight: "Your story. Your terms. Your ownership.",
              },
              {
                num: "03",
                title: "Equity in Media",
                text: "Community organizations across Canada are producing powerful video content with minimal resources. Visio exists to close that gap.",
                highlight: "Closing the gap between stories that matter and resources to tell them.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="group border-t border-[oklch(0.88_0.005_230)] py-12 md:py-16 pl-0 hover:pl-6 hover:bg-[oklch(0.94_0.008_195/0.4)] transition-all duration-500 cursor-default relative">
                  <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-[oklch(0.42_0.12_195)] transition-all duration-500" />
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                    <div className="md:col-span-1">
                      <span className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.42_0.12_195/0.15)] group-hover:text-[oklch(0.42_0.12_195/0.6)] transition-colors duration-500">{item.num}</span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[oklch(0.18_0.02_250)] group-hover:text-[oklch(0.35_0.10_195)] transition-colors duration-500">{item.title}</h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="font-body text-base text-[oklch(0.40_0.015_230)] leading-relaxed mb-4">{item.text}</p>
                      <p className="font-body text-sm font-medium text-[oklch(0.42_0.12_195)] italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
            <div className="border-t border-[oklch(0.88_0.005_230)]" />
          </div>
        </div>
      </section>

      {/* ── VIDEO SPOTLIGHT — Full-width YouTube embed ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[oklch(0.42_0.12_195)] mb-4 block font-medium">Why This Work Matters</span>
              <div className="w-12 h-[3px] bg-[oklch(0.42_0.12_195)] mx-auto mb-8" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.02_250)] leading-tight mb-6">
                Stories told are a culture shared.
              </h2>
              <p className="font-body text-base text-[oklch(0.35_0.015_230)] leading-relaxed">
                This documentary — produced independently by students and Indigenous storytellers — captures exactly why community-driven media matters. It's the kind of work that inspires everything we do at Visio.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative">
              <div className="aspect-video bg-[oklch(0.12_0.02_230)] overflow-hidden shadow-2xl shadow-[oklch(0.20_0.02_230/0.25)]">
                <iframe
                  src="https://www.youtube.com/embed/U6uFJx7beuk?rel=0"
                  title="Stories Told Are a Culture Shared — Indigenous Storytelling Documentary"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
              <p className="font-body text-xs text-[oklch(0.55_0.015_230)]">
                Video by <span className="font-medium">Ottawa Storytellers</span> · Featured with appreciation — this is not a Visio production, but it exemplifies the community-driven storytelling we exist to support.
              </p>
              <Link
                href="/watch"
                className="group inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.12em] font-semibold text-[oklch(0.42_0.12_195)] border-b-2 border-[oklch(0.42_0.12_195)] pb-1 hover:gap-3 transition-all shrink-0"
              >
                See more essential viewing <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHO WE SERVE — Community types ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[oklch(0.95_0.005_85)] to-[oklch(0.98_0.005_85)]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-16 md:mb-20">
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[oklch(0.42_0.12_195)] mb-4 block font-medium">Who We Serve</span>
              <div className="w-12 h-[3px] bg-[oklch(0.42_0.12_195)] mx-auto mb-8" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.02_250)] mb-6">
                Built for communities that need it most.
              </h2>
              <p className="font-body text-base text-[oklch(0.40_0.015_230)] max-w-2xl mx-auto leading-relaxed">
                Visio serves organizations across Canada that are doing vital work but lack the resources to tell their stories through video.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Indigenous Communities", desc: "First Nations, Inuit, and Métis organizations preserving culture and asserting self-determination through media." },
              { icon: Handshake, title: "Nonprofits & NGOs", desc: "Community organizations creating awareness campaigns, fundraising videos, and impact stories." },
              { icon: BookOpen, title: "Schools & Educators", desc: "School districts and educators developing culturally relevant media content for their communities." },
              { icon: MapPin, title: "Rural & Remote Orgs", desc: "Organizations in underserved regions where access to professional production is limited or nonexistent." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="text-center p-8 group bg-white border border-[oklch(0.91_0.005_230)] hover:border-[oklch(0.42_0.12_195/0.3)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center">
                  <div className="w-14 h-14 bg-[oklch(0.42_0.12_195/0.08)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.42_0.12_195)] transition-colors duration-300">
                    <item.icon size={24} className="text-[oklch(0.42_0.12_195)] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[oklch(0.18_0.02_250)] mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-[oklch(0.45_0.015_230)] leading-relaxed flex-1">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS BAR ── */}
      <section className="bg-[oklch(0.38_0.10_200)] py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Community Partners" },
              { value: "200+", label: "Videos Produced" },
              { value: "8", label: "Provinces Served" },
              { value: "1,000+", label: "Workshop Participants" },
            ].map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="font-body text-[10px] uppercase tracking-[0.2em] text-white/60">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Teal ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[oklch(0.25_0.04_210)] to-[oklch(0.20_0.05_205)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Help us amplify more voices.
              </h2>
              <p className="font-body text-base text-white/65 leading-relaxed mb-12">
                Whether you volunteer, express your support, or apply for a grant — your involvement helps underrepresented communities across Canada tell their stories with dignity and power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-involved"
                  className="group inline-flex items-center justify-center gap-2 bg-[oklch(0.42_0.12_195)] text-white px-8 py-4 font-body text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[oklch(0.48_0.12_195)] transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-[oklch(0.42_0.12_195/0.4)]"
                >
                  Get Involved <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-8 py-4 font-body text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Apply for a Grant
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ — Collapsible accordion ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.96_0.005_85)]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[oklch(0.42_0.12_195)] mb-4 block font-medium">FAQ</span>
              <div className="w-12 h-[3px] bg-[oklch(0.42_0.12_195)] mx-auto mb-8" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.02_250)] mb-4">
                Common questions
              </h2>
              <p className="font-body text-sm text-[oklch(0.45_0.015_230)]">
                Can't find what you're looking for?{" "}
                <Link href="/contact" className="text-[oklch(0.42_0.12_195)] font-medium hover:underline">Contact us</Link> and we'll get back to you within 24–48 hours.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "Who can apply for a Visio grant?",
                a: "Any registered nonprofit, Indigenous organization, community group, or school district in Canada can apply. We prioritize organizations serving Indigenous, newcomer, youth, and other underrepresented communities.",
              },
              {
                q: "Do I need video production experience?",
                a: "No. Our programs are designed for organizations with little to no production experience. We provide the training, equipment guidance, and hands-on support you need to produce professional-quality content.",
              },
              {
                q: "How much does it cost to participate in a workshop?",
                a: "All Visio workshops are offered free of charge. We believe access to media training should never be a financial barrier.",
              },
              {
                q: "Who owns the content we produce?",
                a: "You do. Communities retain full ownership and creative control of all content produced through Visio programs. We may ask permission to feature your work in our archive, but the decision is always yours.",
              },
              {
                q: "How can I support Visio's work?",
                a: "You can support us by volunteering your skills, expressing interest in financial support, or partnering with us as an organization. Visit our Get Involved page to learn more.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border-b border-[oklch(0.88_0.005_230)]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <h3 className="font-body text-base font-semibold text-[oklch(0.18_0.02_250)] pr-8 group-hover:text-[oklch(0.35_0.10_195)] transition-colors">{item.q}</h3>
                    <ChevronDown
                      size={18}
                      className={`text-[oklch(0.42_0.12_195)] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-[oklch(0.42_0.015_230)] leading-relaxed pb-6">{item.a}</p>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAND ACKNOWLEDGMENT ── */}
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

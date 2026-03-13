/*
 * VISIO Home Page
 * Design: Raw Editorial Modernism — full-bleed hero, asymmetric sections
 * Palette: Terracotta, Warm Cream, Forest Green, Charcoal
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Film, Users, BookOpen, Archive } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-hero-v2-E2xM7KNtGaPkDiMmVn85bF.webp";
const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-workshop-Xp6S9DdK25738NN6rSrTSA.webp";
const ARCHIVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-archive-6DdbT9nTDdL5cxwyXHxzff.webp";
const GRANTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-grants-MF4nnKA2iCMHKkBkjZ5iaK.webp";
const EARTH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-about-bg-FGzviiqexgDLZDnCfgih6e.webp";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "240+", label: "Community Films Produced" },
  { value: "18", label: "Communities Served Across Canada" },
  { value: "1,200+", label: "Workshop Participants" },
  { value: "$480K", label: "In Grants Awarded" },
];

const programs = [
  {
    icon: Film,
    title: "Community Video Grants",
    desc: "Funds short documentary and awareness videos for nonprofits and Indigenous organizations that lack production capacity.",
    href: "/programs",
    color: "oklch(0.48_0.17_35)",
  },
  {
    icon: Users,
    title: "Digital Storytelling Workshops",
    desc: "Trains community members to produce their own media — from pre-production to final edit — in culturally grounded settings.",
    href: "/programs",
    color: "oklch(0.32_0.1_140)",
  },
  {
    icon: BookOpen,
    title: "Production Support",
    desc: "Subsidized production services for public health campaigns, school districts, and cultural organizations.",
    href: "/programs",
    color: "oklch(0.62_0.15_65)",
  },
  {
    icon: Archive,
    title: "Story Archive",
    desc: "Preserves and platforms community-produced content, ensuring stories remain accessible for future generations.",
    href: "/archive",
    color: "oklch(0.48_0.17_35)",
  },
];

const featuredFilms = [
  {
    title: "Returning to the River",
    org: "Stó:lō Nation",
    year: "2025",
    duration: "18 min",
    img: ARCHIVE_IMG,
    tag: "Documentary",
  },
  {
    title: "Voices of the Land",
    org: "Tsilhqot'in Community",
    year: "2024",
    duration: "24 min",
    img: GRANTS_IMG,
    tag: "Community Film",
  },
  {
    title: "Our Children, Our Future",
    org: "Métis Nation BC",
    year: "2024",
    duration: "12 min",
    img: WORKSHOP_IMG,
    tag: "Awareness Campaign",
  },
];

const testimonials = [
  {
    quote: "Visio gave our community the tools and confidence to tell our own story. The film we made together has been screened at three festivals.",
    name: "Elder Mary Swiftwind",
    org: "Stó:lō Nation Cultural Director",
  },
  {
    quote: "The workshop changed how I see myself. I'm not just a participant anymore — I'm a filmmaker. I have something to say, and now I know how to say it.",
    name: "Jordan Redcloud",
    org: "Youth Media Initiative Graduate",
  },
  {
    quote: "Partnering with Visio on our public health campaign reached more community members than any brochure ever could. Video is the medium of our time.",
    name: "Dr. Sarah Moose",
    org: "First Nations Health Authority",
  },
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.95_0.025_80)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] max-h-[960px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Indigenous community filmmakers"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.01_285/0.85)] via-[oklch(0.12_0.01_285/0.5)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.01_285/0.6)] via-transparent to-transparent" />
        </div>

        {/* Film frame decorative lines */}
        <div className="absolute inset-6 border border-white/10 pointer-events-none" />
        <div className="absolute inset-10 border border-white/5 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container h-full flex flex-col justify-end pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="section-label text-[oklch(0.75_0.12_35)] mb-4 block">
              Community Media Lab · Vancouver, BC
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6">
              Every story
              <br />
              <em className="text-[oklch(0.75_0.14_35)] not-italic">deserves</em>
              <br />
              to be seen.
            </h1>
            <p className="font-body text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              Amplifying underrepresented voices through accessible video production, training, and storytelling support across Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 bg-[oklch(0.48_0.17_35)] text-white px-7 py-3.5 font-ui font-medium text-sm hover:bg-[oklch(0.42_0.17_35)] transition-all hover:gap-3"
              >
                Explore Programs <ArrowRight size={16} />
              </Link>
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 font-ui font-medium text-sm hover:bg-white/10 transition-all"
              >
                <Play size={15} fill="currentColor" /> Watch Films
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
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[oklch(0.75_0.14_35)]"
              animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-white/40 rotate-90 origin-center mt-4">Scroll</span>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[oklch(0.48_0.17_35)] py-10 relative overflow-hidden">
        {/* Decorative film perforations */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around opacity-20">
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-[oklch(0.35_0.15_35)] mx-auto rounded-sm" />
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col justify-around opacity-20">
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-[oklch(0.35_0.15_35)] mx-auto rounded-sm" />
          ))}
        </div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="font-ui text-xs uppercase tracking-[0.15em] text-white/70">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="section-label mb-4 block">Our Mission</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.18_0.005_285)] leading-tight mb-8">
                  A media access center built for community.
                </h2>
                <p className="font-body text-lg text-[oklch(0.35_0.01_285)] leading-relaxed mb-6">
                  Visio is part production house, part training lab, part storytelling incubator — built specifically for organizations that lack the budget or capacity to tell their stories on screen.
                </p>
                <p className="font-body text-lg text-[oklch(0.35_0.01_285)] leading-relaxed mb-10">
                  We believe that when Indigenous peoples, newcomers, youth, and underrepresented communities control their own narratives, they build power, preserve culture, and create lasting change.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-ui text-sm font-medium text-[oklch(0.48_0.17_35)] border-b border-[oklch(0.48_0.17_35)] pb-0.5 hover:gap-3 transition-all"
                >
                  Learn about our story <ArrowRight size={15} />
                </Link>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.2}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[oklch(0.48_0.17_35/0.2)]" />
                  <img
                    src={WORKSHOP_IMG}
                    alt="Storytelling workshop"
                    className="w-full aspect-[4/5] object-cover relative z-10"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[oklch(0.32_0.1_140)] text-white p-6 z-20 max-w-[200px]">
                    <div className="font-display text-3xl font-bold mb-1">12+</div>
                    <div className="font-ui text-xs uppercase tracking-wider opacity-80">Years of community storytelling</div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.91_0.025_80)]">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="section-label mb-4 block">What We Do</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.005_285)]">
                  Our Programs
                </h2>
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 font-ui text-sm font-medium text-[oklch(0.48_0.17_35)] border-b border-[oklch(0.48_0.17_35)] pb-0.5 hover:gap-3 transition-all self-start md:self-auto"
              >
                View all programs <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <FadeUp key={prog.title} delay={i * 0.1}>
                <Link href={prog.href}>
                  <div className="group bg-[oklch(0.97_0.018_80)] p-8 hover-lift border border-transparent hover:border-[oklch(0.85_0.03_75)] transition-all cursor-pointer h-full">
                    <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: prog.color === 'oklch(0.32_0.1_140)' ? 'oklch(0.32 0.1 140 / 0.12)' : prog.color === 'oklch(0.62_0.15_65)' ? 'oklch(0.62 0.15 65 / 0.12)' : 'oklch(0.48 0.17 35 / 0.12)' }}>
                      <prog.icon size={22} style={{ color: prog.color === 'oklch(0.32_0.1_140)' ? 'oklch(0.32 0.1 140)' : prog.color === 'oklch(0.62_0.15_65)' ? 'oklch(0.62 0.15 65)' : 'oklch(0.48 0.17 35)' }} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[oklch(0.18_0.005_285)] mb-3 group-hover:text-[oklch(0.48_0.17_35)] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="font-body text-[oklch(0.45_0.015_285)] leading-relaxed mb-6">
                      {prog.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 font-ui text-xs font-medium text-[oklch(0.48_0.17_35)] uppercase tracking-wider">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED FILMS ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="section-label mb-4 block">Story Archive</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.005_285)]">
                  Community Films
                </h2>
              </div>
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 font-ui text-sm font-medium text-[oklch(0.48_0.17_35)] border-b border-[oklch(0.48_0.17_35)] pb-0.5 hover:gap-3 transition-all self-start md:self-auto"
              >
                View full archive <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredFilms.map((film, i) => (
              <FadeUp key={film.title} delay={i * 0.12}>
                <Link href="/archive">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden aspect-video mb-4">
                      <img
                        src={film.img}
                        alt={film.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[oklch(0.12_0.01_285/0.4)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[oklch(0.48_0.17_35)] flex items-center justify-center">
                          <Play size={20} fill="white" className="text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="font-ui text-[10px] uppercase tracking-wider bg-[oklch(0.48_0.17_35)] text-white px-2.5 py-1">
                          {film.tag}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-ui text-xs text-[oklch(0.48_0.17_35)]">{film.org}</span>
                        <span className="text-[oklch(0.75_0.015_80)]">·</span>
                        <span className="font-ui text-xs text-[oklch(0.55_0.015_285)]">{film.duration}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[oklch(0.18_0.005_285)] group-hover:text-[oklch(0.48_0.17_35)] transition-colors">
                        {film.title}
                      </h3>
                      <span className="font-ui text-xs text-[oklch(0.55_0.015_285)]">{film.year}</span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── EARTH TEXTURE QUOTE SECTION ── */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{
          backgroundImage: `url(${EARTH_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.12_0.01_285/0.82)]" />
        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <div className="font-display text-6xl text-[oklch(0.48_0.17_35)] mb-6 leading-none">"</div>
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-8">
                When we tell our own stories, we reclaim our power. Video is the campfire of the 21st century.
              </blockquote>
              <div className="w-12 h-px bg-[oklch(0.48_0.17_35)] mx-auto mb-6" />
              <cite className="font-ui text-sm text-white/60 not-italic uppercase tracking-wider">
                Visio Founding Principle
              </cite>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.91_0.025_80)]">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">Community Voices</span>
            <div className="rule-terracotta" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.005_285)] mb-16">
              Heard from the field
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div
                  className={`p-8 transition-all duration-500 ${
                    i === activeTestimonial
                      ? "bg-[oklch(0.48_0.17_35)] text-white"
                      : "bg-[oklch(0.97_0.018_80)] text-[oklch(0.18_0.005_285)]"
                  }`}
                >
                  <div className={`font-display text-4xl mb-4 leading-none ${i === activeTestimonial ? "text-white/40" : "text-[oklch(0.48_0.17_35/0.3)]"}`}>"</div>
                  <p className={`font-body text-base leading-relaxed mb-8 ${i === activeTestimonial ? "text-white/90" : "text-[oklch(0.35_0.01_285)]"}`}>
                    {t.quote}
                  </p>
                  <div>
                    <div className={`font-ui text-sm font-medium ${i === activeTestimonial ? "text-white" : "text-[oklch(0.18_0.005_285)]"}`}>
                      {t.name}
                    </div>
                    <div className={`font-ui text-xs mt-1 ${i === activeTestimonial ? "text-white/60" : "text-[oklch(0.55_0.015_285)]"}`}>
                      {t.org}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.32_0.1_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="section-label text-[oklch(0.65_0.08_140)] mb-4 block">Get Involved</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Help us amplify more voices.
              </h2>
              <p className="font-body text-lg text-white/75 leading-relaxed">
                Whether you donate, volunteer, or apply for a grant — your involvement helps underrepresented communities across Canada tell their stories with dignity and power.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 bg-[oklch(0.48_0.17_35)] text-white px-8 py-4 font-ui font-medium hover:bg-[oklch(0.42_0.17_35)] transition-all hover:gap-3"
                >
                  Donate Now <ArrowRight size={16} />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-ui font-medium hover:bg-white/10 transition-all"
                >
                  Apply for a Grant
                </Link>
              </div>
              <p className="font-ui text-xs text-white/50 mt-4">
                Visio is a registered Canadian charity (CRA No. 12345 6789 RR0001). All donations receive a tax receipt.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

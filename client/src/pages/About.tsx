/*
 * VISIO About Page
 * Design: Editorial asymmetric layout, earth tones, film-frame motifs
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-workshop-Xp6S9DdK25738NN6rSrTSA.webp";
const COMMUNITY_IMG = "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80";
const EARTH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-about-bg-FGzviiqexgDLZDnCfgih6e.webp";

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

const values = [
  {
    number: "01",
    title: "Community Sovereignty",
    desc: "Stories belong to the communities that live them. We support Indigenous-led production and ensure communities retain full ownership of their content.",
  },
  {
    number: "02",
    title: "Accessible Media",
    desc: "Professional video production should not be a privilege. We remove financial and technical barriers so any community organization can tell its story.",
  },
  {
    number: "03",
    title: "Cultural Integrity",
    desc: "We follow community protocols, respect cultural sensitivities, and never impose outside narratives on the stories we help produce.",
  },
  {
    number: "04",
    title: "Long-term Relationships",
    desc: "We are not a one-time service. We build lasting partnerships with the organizations we serve, growing capacity over years, not weeks.",
  },
];


export default function About() {
  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_85)]">
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          backgroundImage: `url(${EARTH_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.20_0.03_210/0.88)]" />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label text-[oklch(0.65_0.12_195)] mb-4 block">About Visio</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight" style={{ textWrap: "balance" }}>
              A media home built from the ground up.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="section-label mb-4 block">Our Story</span>
                <div className="rule-terracotta" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)] mb-8">
                  Born from a gap in the system.
                </h2>
                <div className="space-y-5 font-body text-lg text-[oklch(0.40_0.015_230)] leading-relaxed">
                  <p>
                    Visio was founded when filmmakers and community organizers recognized a persistent problem: the organizations doing the most important work had no way to show it — and when they did hire outside producers, the final product rarely reflected their vision.
                  </p>
                  <p>
                    Visio was built to close that gap. We bring communities into the production process from day one — so the work is shaped by the people it represents, not interpreted by outsiders.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5 lg:pt-16">
              <FadeUp delay={0.2}>
                <div className="relative">
                  <img
                    src={COMMUNITY_IMG}
                    alt="Community workshop and collaboration"
                    className="w-full aspect-[4/5] object-cover object-[center_20%]"
                  />

                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[oklch(0.95_0.005_85)]">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">What We Believe</span>
            <div className="rule-terracotta" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)] mb-16">
              Our Core Values
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <FadeUp key={val.number} delay={i * 0.1}>
                <div className="group bg-white border border-[oklch(0.88_0.005_230)] shadow-sm p-10 hover:border-[oklch(0.42_0.12_195/0.5)] hover:shadow-md hover:bg-[oklch(0.97_0.005_85)] transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-[oklch(0.42_0.12_195)] transition-all duration-500" />
                  <div className="font-body text-xs text-[oklch(0.42_0.12_195)] mb-4 tracking-wider font-medium">{val.number}</div>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.04_210)] mb-4 group-hover:text-[oklch(0.35_0.10_195)] transition-colors duration-300">{val.title}</h3>
                  <p className="font-body text-[oklch(0.45_0.015_230)] leading-relaxed">{val.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-16 bg-[oklch(0.38_0.10_200)]">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.70_0.10_195)] mb-4 block">Funding & Support</span>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Supported by the community, for the community.
              </h2>
              <p className="font-body text-base text-white/75 leading-relaxed mb-4">
                Visio is funded through individual donations, community fundraising, and public arts and media funds. We do not accept funding that compromises our editorial independence or community ownership principles.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 font-body text-sm font-medium text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors">
                Discuss a partnership or sponsorship <ArrowRight size={13} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-[oklch(0.95_0.005_85)]">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">Our Journey</span>
            <div className="rule-terracotta" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_210)] mb-16">
              Milestones
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[oklch(0.42_0.12_195/0.2)] md:-translate-x-px" />
            {[
              { year: "2023", title: "The Idea", desc: "A group of filmmakers and community organizers begin conversations about the gap between community stories and the resources to tell them." },
              { year: "2024", title: "Research & Planning", desc: "Needs assessments conducted with 30+ Indigenous and community organizations across British Columbia and Ontario. Core program model developed." },
              { year: "2025", title: "Founding", desc: "Visio Community Media Lab formally established. First pilot workshops delivered in partnership with community organizations in Vancouver." },
              { year: "2025", title: "First Grant Cycle", desc: "Seed and Community Grant programs launched. First cohort of 8 community organizations selected for production support." },
              { year: "2026", title: "National Expansion", desc: "Programs expanded to serve communities across 8 provinces. Youth Media Intensive launched. Partnership program formalized." },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[oklch(0.42_0.12_195)] rounded-full -translate-x-[5px] md:-translate-x-[6px] mt-1.5 z-10" />
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <span className="font-body text-xs font-semibold text-[oklch(0.42_0.12_195)] uppercase tracking-wider">{item.year}</span>
                    <h3 className="font-display text-xl font-bold text-[oklch(0.25_0.04_210)] mt-1 mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-[oklch(0.50_0.015_230)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-[oklch(0.42_0.12_195)] py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Community Partners" },
              { value: "200+", label: "Videos Produced" },
              { value: "8", label: "Provinces Served" },
              { value: "1,000+", label: "Workshop Participants" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</div>
                  <div className="font-body text-[10px] uppercase tracking-[0.2em] text-white/70">{item.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.30_0.06_210)]">
        <div className="container text-center">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to work with us?
            </h2>
            <p className="font-body text-lg text-white/75 max-w-xl mx-auto mb-10">
              Whether you're an Indigenous organization, newcomer-serving nonprofit, youth group, or community organization — we want to hear your story.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[oklch(0.42_0.12_195)] px-8 py-4 font-body font-medium hover:bg-[oklch(0.98_0.005_85)] transition-all hover:gap-3"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-4 font-body font-medium hover:bg-white/10 transition-all"
              >
                View Programs
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Land Acknowledgment */}
      <section className="py-10 bg-[oklch(0.38_0.10_200)]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.65_0.12_195)] mb-3 block">Land Acknowledgment</span>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Visio operates on the unceded ancestral territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and Sel̓íl̓witulh (Tsleil-Waututh) Nations. We are grateful to live and work on this land, and we are committed to supporting Indigenous sovereignty and self-determination in all that we do.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

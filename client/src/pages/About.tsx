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
const ARCHIVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-archive-6DdbT9nTDdL5cxwyXHxzff.webp";
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

const openRoles = [
  { role: "Executive Director", type: "Leadership" },
  { role: "Director of Programs", type: "Programs" },
  { role: "Production Manager", type: "Production" },
  { role: "Community Outreach Coordinator", type: "Outreach" },
  { role: "Youth Programs Lead", type: "Programs" },
  { role: "Workshop Facilitator", type: "Training" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[oklch(0.975_0.005_90)]">
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
        <div className="absolute inset-0 bg-[oklch(0.20_0.01_60/0.88)]" />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">About Visio</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight">
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
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.24_0.015_60)] mb-8">
                  Born from a gap in the system.
                </h2>
                <div className="space-y-5 font-body text-lg text-[oklch(0.40_0.01_60)] leading-relaxed">
                  <p>
                    Visio was founded when a group of filmmakers and community organizers recognized a persistent problem: the organizations doing the most important work in their communities had no way to show it.
                  </p>
                  <p>
                    Nonprofits and First Nations organizations were writing grant reports that nobody read, distributing brochures that nobody kept, and hosting events that reached only those who already knew about them. Meanwhile, the stories that could change minds, build solidarity, and attract resources sat untold.
                  </p>
                  <p>
                    Professional video production was simply out of reach — too expensive, too technical, and too often in the hands of outside producers who didn't understand the communities they were filming.
                  </p>
                  <p>
                    Visio was built to close that gap. We provide the resources, training, and support that communities need to tell their own stories — on their own terms, in their own voices.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5 lg:pt-16">
              <FadeUp delay={0.2}>
                <div className="relative">
                  <img
                    src={ARCHIVE_IMG}
                    alt="Indigenous elder in landscape"
                    className="w-full aspect-[3/4] object-cover"
                  />

                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[oklch(0.24_0.015_60)]">
        <div className="container">
          <FadeUp>
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">What We Believe</span>
            <div className="w-12 h-0.5 bg-[oklch(0.52_0.18_30)] mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16">
              Our Core Values
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[oklch(0.90_0.008_80)]">
            {values.map((val, i) => (
              <FadeUp key={val.number} delay={i * 0.1}>
                <div className="bg-[oklch(0.24_0.015_60)] p-10 hover:bg-[oklch(0.32_0.05_55)] transition-colors">
                  <div className="font-body text-xs text-[oklch(0.52_0.18_30)] mb-4 tracking-wider">{val.number}</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{val.title}</h3>
                  <p className="font-body text-[oklch(0.50_0.01_60)] leading-relaxed">{val.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 md:py-28">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">The People</span>
            <div className="rule-terracotta" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.24_0.015_60)] mb-4">
              A team rooted in community.
            </h2>
            <p className="font-body text-lg text-[oklch(0.50_0.01_60)] max-w-2xl mb-6">
              Visio is led by filmmakers, educators, and advocates who believe in the power of storytelling. As we grow, we're building a team that reflects the communities we serve.
            </p>
            <p className="font-body text-base text-[oklch(0.50_0.01_60)] max-w-2xl mb-16">
              We prioritize people from Indigenous and underrepresented communities. If you're passionate about community media and want to be part of what we're building,{" "}
              <Link href="/contact" className="text-[oklch(0.52_0.18_30)] hover:underline">we'd love to hear from you</Link>.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openRoles.map((item, i) => (
              <FadeUp key={item.role} delay={i * 0.08}>
                <div className="bg-[oklch(0.975_0.005_90)] border border-[oklch(0.90_0.008_80)] p-8 hover:border-[oklch(0.52_0.18_30/0.4)] transition-colors">
                  <div className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.52_0.18_30)] mb-3">{item.type}</div>
                  <h3 className="font-display text-xl font-bold text-[oklch(0.24_0.015_60)] mb-4">{item.role}</h3>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-body text-xs font-medium text-[oklch(0.52_0.18_30)] border-b border-[oklch(0.52_0.18_30)] pb-0.5 hover:gap-3 transition-all"
                  >
                    Express Interest <ArrowRight size={11} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-16 bg-[oklch(0.94_0.008_90)]">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="section-label mb-3 block">Funding & Support</span>
              <div className="rule-terracotta" />
              <h2 className="font-display text-3xl font-bold text-[oklch(0.24_0.015_60)] mb-6">
                Supported by the community, for the community.
              </h2>
              <p className="font-body text-lg text-[oklch(0.50_0.01_60)] leading-relaxed mb-6">
                Visio is funded through a combination of individual donations, community fundraising, and applications to public arts and media funds. We do not accept funding that compromises our editorial independence or community ownership principles.
              </p>
              <p className="font-body text-base text-[oklch(0.50_0.01_60)] leading-relaxed">
                Interested in supporting our work through a grant, sponsorship, or partnership?{" "}
                <Link href="/contact" className="text-[oklch(0.52_0.18_30)] hover:underline">Contact us</Link>.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.52_0.18_30)]">
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
                className="inline-flex items-center gap-2 bg-white text-[oklch(0.52_0.18_30)] px-8 py-4 font-body font-medium hover:bg-[oklch(0.975_0.005_90)] transition-all hover:gap-3"
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

      <Footer />
    </div>
  );
}

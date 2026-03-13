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

const team = [
  {
    name: "Leah Thunderbird",
    role: "Executive Director",
    nation: "Cree Nation",
    bio: "Leah has spent 15 years working at the intersection of Indigenous rights and media. She founded Visio after recognizing the gap between the stories communities needed to tell and the resources available to tell them.",
  },
  {
    name: "Marcus Swiftwind",
    role: "Director of Programs",
    nation: "Stó:lō Nation",
    bio: "Marcus leads our workshop curriculum and grant programs. A documentary filmmaker with credits on three award-winning films, he brings professional expertise to community-level training.",
  },
  {
    name: "Priya Redcloud",
    role: "Production Manager",
    nation: "Métis",
    bio: "Priya manages our subsidized production services and coordinates with partner organizations. She has overseen over 80 community film productions since joining Visio.",
  },
  {
    name: "Daniel Moose",
    role: "Archive & Technology",
    nation: "Anishinaabe",
    bio: "Daniel built and maintains our Story Archive platform. He ensures community-produced content is preserved, accessible, and protected according to community wishes.",
  },
  {
    name: "Sofia Clearwater",
    role: "Community Outreach",
    nation: "Tsilhqot'in",
    bio: "Sofia connects Visio with communities across BC and beyond. She speaks three Indigenous languages and has built relationships with over 30 First Nations organizations.",
  },
  {
    name: "James Littlefeather",
    role: "Youth Programs Lead",
    nation: "Blackfoot Confederacy",
    bio: "James runs our Youth Media Initiative, training the next generation of Indigenous filmmakers. His workshops have reached over 400 youth in the past three years.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[oklch(0.95_0.025_80)]">
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
        <div className="absolute inset-0 bg-[oklch(0.12_0.01_285/0.88)]" />
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
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.005_285)] mb-8">
                  Born from a gap in the system.
                </h2>
                <div className="space-y-5 font-body text-lg text-[oklch(0.35_0.01_285)] leading-relaxed">
                  <p>
                    Visio was founded in 2013 when a group of Indigenous filmmakers and community organizers recognized a persistent problem: the organizations doing the most important work in their communities had no way to show it.
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
                  <div className="absolute -bottom-4 -left-4 bg-[oklch(0.48_0.17_35)] p-6 max-w-[220px]">
                    <div className="font-display text-4xl font-bold text-white mb-1">2013</div>
                    <div className="font-ui text-xs uppercase tracking-wider text-white/70">Founded in Vancouver, BC</div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[oklch(0.18_0.005_285)]">
        <div className="container">
          <FadeUp>
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">What We Believe</span>
            <div className="w-12 h-0.5 bg-[oklch(0.48_0.17_35)] mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16">
              Our Core Values
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[oklch(0.28_0.005_285)]">
            {values.map((val, i) => (
              <FadeUp key={val.number} delay={i * 0.1}>
                <div className="bg-[oklch(0.18_0.005_285)] p-10 hover:bg-[oklch(0.22_0.005_285)] transition-colors">
                  <div className="font-ui text-xs text-[oklch(0.48_0.17_35)] mb-4 tracking-wider">{val.number}</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{val.title}</h3>
                  <p className="font-body text-[oklch(0.65_0.015_80)] leading-relaxed">{val.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">The People</span>
            <div className="rule-terracotta" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.18_0.005_285)] mb-4">
              Our Team
            </h2>
            <p className="font-body text-lg text-[oklch(0.45_0.015_285)] max-w-2xl mb-16">
              Visio is led by Indigenous filmmakers, community organizers, and media professionals who have spent careers working in and for underrepresented communities across Canada.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.08}>
                <div className="group">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.48_0.17_35/0.15)] border-2 border-[oklch(0.48_0.17_35/0.3)] flex items-center justify-center mb-5">
                    <span className="font-display text-2xl font-bold text-[oklch(0.48_0.17_35)]">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[oklch(0.18_0.005_285)] mb-1">{member.name}</h3>
                  <div className="font-ui text-sm text-[oklch(0.48_0.17_35)] mb-1">{member.role}</div>
                  <div className="font-ui text-xs text-[oklch(0.55_0.015_285)] mb-4 uppercase tracking-wider">{member.nation}</div>
                  <p className="font-body text-sm text-[oklch(0.45_0.015_285)] leading-relaxed">{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[oklch(0.91_0.025_80)]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="section-label mb-3 block">Our Partners</span>
              <h2 className="font-display text-3xl font-bold text-[oklch(0.18_0.005_285)]">
                Supported by organizations who believe in community media
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "First Nations Health Authority",
                "Canada Council for the Arts",
                "BC Arts Council",
                "Indigenous Screen Office",
                "Telus Community Fund",
                "United Way BC",
                "First Peoples Cultural Council",
                "National Film Board",
              ].map((partner) => (
                <div
                  key={partner}
                  className="bg-[oklch(0.97_0.018_80)] p-5 flex items-center justify-center text-center border border-[oklch(0.85_0.03_75)] hover:border-[oklch(0.48_0.17_35/0.4)] transition-colors"
                >
                  <span className="font-ui text-xs text-[oklch(0.45_0.015_285)] leading-tight">{partner}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.48_0.17_35)]">
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
                className="inline-flex items-center gap-2 bg-white text-[oklch(0.48_0.17_35)] px-8 py-4 font-ui font-medium hover:bg-[oklch(0.95_0.025_80)] transition-all hover:gap-3"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-4 font-ui font-medium hover:bg-white/10 transition-all"
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

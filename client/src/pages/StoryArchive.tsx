/*
 * VISIO Watch Page
 * Curated collection of community media and storytelling videos
 * These are not Visio productions — they're essential viewing we believe in
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroEffect from "@/components/HeroEffect";

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

interface Video {
  youtubeId: string;
  title: string;
  credit: string;
  desc: string;
  tag: string;
  featured?: boolean;
}

const allVideos: Video[] = [
  {
    youtubeId: "U6uFJx7beuk",
    title: "Stories Told Are a Culture Shared",
    credit: "Ottawa Storytellers",
    desc: "Local Indigenous storytellers discuss the importance of stories in Indigenous cultures across Turtle Island.",
    tag: "Documentary",
    featured: true,
  },
  {
    youtubeId: "OzpKdPEBLfQ",
    title: "Indigenous Canada — A Story to Tell",
    credit: "CANADA Explore",
    desc: "Canada's Indigenous communities share their culture and stories — an invitation to listen, learn, and understand the richness of Indigenous heritage.",
    tag: "Culture",
  },
  {
    youtubeId: "6ksL-x1XBn4",
    title: "The Journey Home",
    credit: "Zach Ramelan",
    desc: "A First Nations documentary exploring themes of identity, belonging, and the journey back to community and cultural roots.",
    tag: "Documentary",
  },
  {
    youtubeId: "17ufgvmbkcY",
    title: "Amplifying Unheard Voices — Participatory Video in Action",
    credit: "InsightShare",
    desc: "Two decades of participatory video for community development — showing what happens when you put cameras in the hands of communities.",
    tag: "Process",
  },
  {
    youtubeId: "Rxj_GQyCX2s",
    title: "Living Coast: Community Voice",
    credit: "Natural England",
    desc: "A short documentary showing how the Community Voice method captures the lived experiences of people in coastal communities.",
    tag: "Community",
  },
  {
    youtubeId: "1wwcGWK3oW4",
    title: "Recreate — A Participatory Documentary",
    credit: "New Narratives Youth Media",
    desc: "Made by participants of a youth media training program — a real example of what community-led production looks like in practice.",
    tag: "Youth",
  },
  {
    youtubeId: "j_am7ta9uwI",
    title: "The Power of Authentic Storytelling",
    credit: "Locarno Film Festival",
    desc: "A conversation about navigating intersectionality in cinema and why authentic, community-rooted storytelling matters more than ever.",
    tag: "Talk",
  },
  {
    youtubeId: "cJwkmlPJ4BA",
    title: "How This Indigenous Film Project Is Transforming Youth",
    credit: "Bridge City News",
    desc: "An Indigenous film project in Canada putting cameras in the hands of young people — building confidence, cultural connection, and media skills.",
    tag: "Youth",
  },
  {
    youtubeId: "PVKRlcZ7AZM",
    title: "Participatory Filmmaking with Indigenous Communities",
    credit: "InsightShare",
    desc: "A learning session exploring how participatory filmmaking empowers Indigenous communities to tell their own stories and challenge mainstream media narratives.",
    tag: "Process",
  },
  {
    youtubeId: "peRTgZbuE0s",
    title: "The State of Indigenous Film in Canada",
    credit: "CBC News: The National",
    desc: "Three influential Indigenous filmmakers discuss the state of Indigenous cinema in Canada — the progress made and the work still to be done.",
    tag: "Culture",
  },
  {
    youtubeId: "Up9EoG5AAyM",
    title: "The Eyes of the Community — Northern Kenya",
    credit: "InsightShare",
    desc: "A participatory video produced during training with people from four ethnic groups in Northern Kenya, showing the power of community-led media.",
    tag: "Community",
  },
  {
    youtubeId: "TTl6zHMEEjQ",
    title: "Cherokee Filmmaker Anthony Sneed Shares Culture",
    credit: "Indian Country Today",
    desc: "Cherokee filmmaker Anthony Sneed discusses using film as a tool for cultural sharing and Indigenous representation in media.",
    tag: "Documentary",
  },
  {
    youtubeId: "P8Uk3lOy3F0",
    title: "Ācimowin Film Festival — Indigenous Filmmaking",
    credit: "CBC News Saskatchewan",
    desc: "The Ācimowin Film Festival in Saskatoon celebrates the best in Indigenous filmmaking with short films, documentaries, and features.",
    tag: "Culture",
  },
  {
    youtubeId: "5n0u_vh0GlM",
    title: "Indigenous Filmmaking and Futures",
    credit: "University of Minnesota Press",
    desc: "A conversation about where Indigenous filmmaking has been and where it's going — centering the voices of Indigenous creators shaping the future of media.",
    tag: "Talk",
  },
  {
    youtubeId: "Z6AvBVDzMEA",
    title: "The Family — San Indigenous Peoples",
    credit: "InsightShare",
    desc: "A participatory video made by San Indigenous peoples in Nyae Nyae, Namibia — a powerful example of community-led storytelling across cultures.",
    tag: "Community",
  },
];

const tags = ["All", ...Array.from(new Set(allVideos.map((v) => v.tag)))];

export default function StoryArchive() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? allVideos : allVideos.filter((v) => v.tag === activeTag);

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
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.70_0.10_195)] mb-4 block">Watch</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6" style={{ textWrap: "balance" }}>
              Essential viewing.
            </h1>
            <p className="font-body text-lg text-white/75 max-w-2xl">
              A curated collection of videos we believe in — work by filmmakers, organizations, and communities that reflect the values at the core of what we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid with Filters */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeUp>
            <div className="mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.25_0.04_210)] mb-6">
                Stories worth your time.
              </h2>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`font-body text-xs uppercase tracking-wider px-4 py-2 transition-all duration-300 ${
                      activeTag === tag
                        ? "bg-[oklch(0.42_0.12_195)] text-white"
                        : "bg-[oklch(0.95_0.005_85)] text-[oklch(0.45_0.015_230)] hover:bg-[oklch(0.42_0.12_195/0.1)] hover:text-[oklch(0.42_0.12_195)]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="font-body text-xs text-[oklch(0.55_0.015_230)] italic">
                These are not Visio productions. All videos are the property of their respective creators.
              </p>
            </div>
          </FadeUp>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((video) => (
                <div key={video.youtubeId} className="bg-white border border-[oklch(0.91_0.005_230)] overflow-hidden group h-full flex flex-col relative">
                  {video.featured && (
                    <div className="absolute top-3 left-3 z-10 font-body text-[10px] uppercase tracking-wider bg-[oklch(0.42_0.12_195)] text-white px-2.5 py-1 font-medium">
                      Featured
                    </div>
                  )}
                  <div className="aspect-video bg-[oklch(0.12_0.02_230)] overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-body text-[10px] uppercase tracking-wider bg-[oklch(0.42_0.12_195/0.1)] text-[oklch(0.42_0.12_195)] px-2 py-0.5 font-medium">
                        {video.tag}
                      </span>
                      <span className="font-body text-xs text-[oklch(0.55_0.015_230)]">{video.credit}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[oklch(0.25_0.04_210)] mb-2">{video.title}</h3>
                    <p className="font-body text-sm text-[oklch(0.50_0.015_230)] leading-relaxed flex-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-[oklch(0.95_0.005_85)]">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-[oklch(0.25_0.04_210)] mb-4">
                Know a video we should feature?
              </h2>
              <p className="font-body text-base text-[oklch(0.45_0.015_230)] leading-relaxed mb-8">
                We're always looking for community media, documentaries, and storytelling work that aligns with our mission. If you've seen something powerful, we'd love to hear about it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[oklch(0.42_0.12_195)] text-white px-7 py-3.5 font-body font-medium text-sm hover:bg-[oklch(0.38_0.12_195)] transition-all hover:gap-3"
              >
                Suggest a Video <ArrowRight size={15} />
              </Link>
            </div>
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

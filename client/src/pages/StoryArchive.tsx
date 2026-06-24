/*
 * VISIO Story Archive Page
 * Design: Film-grid layout, editorial aesthetic, terracotta accents
 * Showcases the types of community films Visio produces
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, Search, Filter, X, Clock, Building2, Calendar, ArrowRight, CheckCircle, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ARCHIVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-archive-6DdbT9nTDdL5cxwyXHxzff.webp";
const GRANTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-grants-MF4nnKA2iCMHKkBkjZ5iaK.webp";
const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/2gJkziC3sMaXKrksstrnZJ/visio-workshop-Xp6S9DdK25738NN6rSrTSA.webp";
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

interface Film {
  title: string;
  org: string;
  year: string;
  duration: string;
  tag: string;
  img: string;
  community: string;
  desc: string;
  fullDesc: string;
  director: string;
  language?: string;
}

const films: Film[] = [
  {
    title: "Returning to the River",
    org: "Stó:lō Nation",
    year: "2025",
    duration: "18 min",
    tag: "Documentary",
    img: ARCHIVE_IMG,
    community: "Stó:lō",
    desc: "A portrait of salmon restoration efforts led by Stó:lō youth and elders, weaving together traditional knowledge and modern ecology.",
    fullDesc: "Returning to the River follows a year in the lives of Stó:lō youth and elders as they work together to restore salmon populations to the Fraser River watershed. The film weaves together traditional ecological knowledge passed down through generations with contemporary conservation science, showing how community-led stewardship can heal both land and people. Produced with full community consent and oversight, the film premiered at the Stó:lō Nation Cultural Centre before touring regional festivals.",
    director: "Maya Swiftwind",
    language: "English / Halq̓eméylem",
  },
  {
    title: "Voices of the Land",
    org: "Tsilhqot'in Community",
    year: "2024",
    duration: "24 min",
    tag: "Community Film",
    img: GRANTS_IMG,
    community: "Tsilhqot'in",
    desc: "Tsilhqot'in land defenders speak about their 2014 Supreme Court victory and what it means for the next generation.",
    fullDesc: "A decade after the landmark Tsilhqot'in Supreme Court of Canada decision — the first recognition of Aboriginal title in Canadian history — this film asks: what has changed, and what still needs to? Land defenders, youth, and elders speak candidly about sovereignty, resource extraction, and the ongoing work of protecting their territory. The film was produced as part of a broader land-rights education campaign and has been screened in schools and community centres across BC.",
    director: "Jordan Redcloud",
    language: "English / Tsilhqot'in",
  },
  {
    title: "Our Children, Our Future",
    org: "Métis Nation BC",
    year: "2024",
    duration: "12 min",
    tag: "Awareness Campaign",
    img: WORKSHOP_IMG,
    community: "Métis",
    desc: "A public health awareness campaign addressing mental wellness resources for Métis youth across British Columbia.",
    fullDesc: "Produced in partnership with the First Nations Health Authority, this short awareness film highlights the mental wellness resources available to Métis youth across BC and reduces stigma around seeking help. Community health workers, youth counsellors, and young people share their stories with warmth and honesty. The film is distributed through school districts, health centres, and social media, and is available with French subtitles.",
    director: "Celeste Dumont",
    language: "English / French",
  },
  {
    title: "The Long Walk Home",
    org: "Wet'suwet'en Nation",
    year: "2024",
    duration: "32 min",
    tag: "Documentary",
    img: HERO_IMG,
    community: "Wet'suwet'en",
    desc: "Following three Wet'suwet'en women as they walk their ancestral territory, reclaiming connection to land and language.",
    fullDesc: "Over five days, three Wet'suwet'en women walk a 200-kilometre stretch of their ancestral territory — a route their grandmothers walked before them. The film is a meditation on land, memory, and what it means to return. Shot entirely on the land with a small community crew, The Long Walk Home has screened at imagineNATIVE Film + Media Arts Festival and the Vancouver International Film Festival.",
    director: "Theresa George",
    language: "English / Wet'suwet'en",
  },
  {
    title: "Language Keepers",
    org: "Haida Gwaii Cultural Society",
    year: "2023",
    duration: "20 min",
    tag: "Cultural Film",
    img: ARCHIVE_IMG,
    community: "Haida",
    desc: "A celebration of the last fluent Haida language speakers and the young people learning from them.",
    fullDesc: "With fewer than 20 fluent speakers remaining, the Haida language is critically endangered. Language Keepers documents the urgent and joyful work of language revitalization on Haida Gwaii, following elders and young learners as they work together to keep the language alive. The film is used as a teaching resource in Haida immersion programs and has been shared with language revitalization organizations across Canada.",
    director: "Nora Yeltzie",
    language: "English / Haida",
  },
  {
    title: "Seeds of Tomorrow",
    org: "Secwépemc Food Sovereignty",
    year: "2023",
    duration: "15 min",
    tag: "Community Film",
    img: GRANTS_IMG,
    community: "Secwépemc",
    desc: "How Secwépemc communities are reviving traditional food systems and building food sovereignty.",
    fullDesc: "Seeds of Tomorrow documents the growing food sovereignty movement in Secwépemc territory, where community members are reviving traditional agricultural practices, seed saving, and land-based food systems. The film profiles three community gardens and the people behind them, exploring how food sovereignty is connected to cultural sovereignty, health, and self-determination.",
    director: "Alex Palmantier",
    language: "English",
  },
  {
    title: "The Healing Circle",
    org: "First Nations Health Authority",
    year: "2023",
    duration: "8 min",
    tag: "Public Health",
    img: WORKSHOP_IMG,
    community: "Various Nations",
    desc: "A short film supporting mental health awareness and the power of community healing practices.",
    fullDesc: "Commissioned by the First Nations Health Authority, The Healing Circle is a short awareness film that explores the role of traditional healing practices alongside Western mental health supports. Community health workers and knowledge keepers speak about the importance of culturally safe care. The film is distributed to health centres and community organizations across BC as part of a broader mental wellness campaign.",
    director: "Visio Production Team",
    language: "English",
  },
  {
    title: "Fire Season",
    org: "Nlaka'pamux Nation",
    year: "2022",
    duration: "28 min",
    tag: "Documentary",
    img: HERO_IMG,
    community: "Nlaka'pamux",
    desc: "Indigenous firefighters and land stewards respond to the climate crisis threatening their territories.",
    fullDesc: "As wildfire seasons grow longer and more destructive across BC, Nlaka'pamux firefighters and land stewards are on the front lines — protecting their territory with both traditional fire management knowledge and modern firefighting techniques. Fire Season follows a crew through a summer of unprecedented fires, asking hard questions about climate change, land management, and who gets to decide how the land is cared for.",
    director: "Chris Spahan",
    language: "English / Nlaka'pamux",
  },
  {
    title: "Drum Keepers",
    org: "Anishinaabe Cultural Centre",
    year: "2022",
    duration: "16 min",
    tag: "Cultural Film",
    img: ARCHIVE_IMG,
    community: "Anishinaabe",
    desc: "Three generations of drum makers share their craft and the spiritual significance of their work.",
    fullDesc: "Drum Keepers follows a grandfather, his son, and his granddaughter as they build a ceremonial drum together over several weeks. Through the process of drum making — selecting the wood, preparing the hide, singing the drum awake — the film explores the transmission of cultural knowledge across generations and the spiritual dimensions of craft. The film was produced in partnership with the Anishinaabe Cultural Centre in Thunder Bay.",
    director: "Makwa Birch",
    language: "English / Ojibwe",
  },
];

const categories = ["All", "Documentary", "Community Film", "Cultural Film", "Awareness Campaign", "Public Health"];

interface SubmitFormData {
  filmTitle: string;
  organization: string;
  director: string;
  year: string;
  duration: string;
  description: string;
  contactName: string;
  contactEmail: string;
  vimeoUrl: string;
  notes: string;
}

export default function StoryArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitData, setSubmitData] = useState<SubmitFormData>({
    filmTitle: "",
    organization: "",
    director: "",
    year: "",
    duration: "",
    description: "",
    contactName: "",
    contactEmail: "",
    vimeoUrl: "",
    notes: "",
  });

  const filtered = films.filter((f) => {
    const matchCat = activeCategory === "All" || f.tag === activeCategory;
    const matchSearch =
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.community.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const [submitSending, setSubmitSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitData.filmTitle || !submitData.organization || !submitData.contactName || !submitData.contactEmail || !submitData.description) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(submitData.contactEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f642c143-997e-4d9e-9be2-7b9917152700",
          subject: `[Visio] Film Submission from ${submitData.contactName}`,
          "film title": submitData.filmTitle,
          organization: submitData.organization,
          director: submitData.director || "N/A",
          year: submitData.year || "N/A",
          duration: submitData.duration || "N/A",
          description: submitData.description,
          "vimeo/youtube link": submitData.vimeoUrl || "N/A",
          name: submitData.contactName,
          email: submitData.contactEmail,
          notes: submitData.notes || "N/A",
        }),
      });
      if (res.ok) {
        setSubmitSuccess(true);
        toast.success("Submission received! We'll review your film and be in touch within 24–48 hours.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or visit our contact page.");
    } finally {
      setSubmitSending(false);
    }
  };

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
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">Story Archive</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
              Community stories, preserved and shared.
            </h1>
            <p className="font-body text-lg text-white/65 max-w-2xl">
              Every film in our archive was produced by or with a community organization. These stories belong to the communities that made them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-[oklch(0.975_0.005_90)] border-b border-[oklch(0.90_0.008_80)]">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.50_0.01_60)]" />
              <input
                type="text"
                placeholder="Search by title, org, or community..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-transparent border border-[oklch(0.90_0.008_80)] font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={14} className="text-[oklch(0.50_0.01_60)]" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-xs px-3 py-1.5 transition-all ${
                    activeCategory === cat
                      ? "bg-[oklch(0.52_0.18_30)] text-white"
                      : "border border-[oklch(0.90_0.008_80)] text-[oklch(0.40_0.01_60)] hover:border-[oklch(0.52_0.18_30)] hover:text-[oklch(0.52_0.18_30)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Film Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-6">
            <span className="font-body text-sm text-[oklch(0.50_0.01_60)]">
              {filtered.length} film{filtered.length !== 1 ? "s" : ""} found
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-[oklch(0.40_0.01_60)]">No films match your search.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 font-body text-sm text-[oklch(0.52_0.18_30)] underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((film, i) => (
                <FadeUp key={film.title} delay={i * 0.06}>
                  <div
                    className="group cursor-pointer"
                    onClick={() => setSelectedFilm(film)}
                  >
                    <div className="relative overflow-hidden aspect-video mb-4">
                      <img
                        src={film.img}
                        alt={film.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[oklch(0.24_0.015_60/0.45)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[oklch(0.52_0.18_30)] flex items-center justify-center">
                          <Play size={20} fill="white" className="text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="font-body text-[10px] uppercase tracking-wider bg-[oklch(0.52_0.18_30)] text-white px-2.5 py-1">
                          {film.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="font-body text-[10px] bg-[oklch(0.24_0.015_60/0.8)] text-white px-2 py-1">
                          {film.duration}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-body text-xs text-[oklch(0.52_0.18_30)]">{film.org}</span>
                        <span className="text-[oklch(0.80_0.01_60)]">&middot;</span>
                        <span className="font-body text-xs text-[oklch(0.50_0.01_60)]">{film.year}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[oklch(0.24_0.015_60)] group-hover:text-[oklch(0.52_0.18_30)] transition-colors mb-2">
                        {film.title}
                      </h3>
                      <p className="font-body text-sm text-[oklch(0.50_0.01_60)] leading-relaxed line-clamp-2">
                        {film.desc}
                      </p>
                      <button className="mt-3 font-body text-xs text-[oklch(0.52_0.18_30)] flex items-center gap-1 hover:gap-2 transition-all">
                        View details <ArrowRight size={11} />
                      </button>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit Your Film */}
      <section className="py-16 bg-[oklch(0.94_0.008_90)]">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="section-label mb-4 block">Submit Your Work</span>
              <div className="rule-terracotta" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.24_0.015_60)] mb-4">
                Have a community film to share?
              </h2>
              <p className="font-body text-lg text-[oklch(0.40_0.01_60)] mb-8">
                If your organization has produced a film — with or without Visio's support — we welcome submissions to our archive. All community-produced content is considered.
              </p>

              {!showSubmitForm ? (
                <button
                  onClick={() => setShowSubmitForm(true)}
                  className="inline-flex items-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-7 py-3.5 font-body font-medium text-sm hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-3"
                >
                  <Upload size={15} /> Submit a Film
                </button>
              ) : submitSuccess ? (
                <div className="bg-[oklch(0.52_0.18_30/0.08)] border border-[oklch(0.52_0.18_30/0.3)] p-10 text-center">
                  <CheckCircle size={40} className="text-[oklch(0.24_0.015_60)] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.24_0.015_60)] mb-3">Submission received.</h3>
                  <p className="font-body text-[oklch(0.40_0.01_60)] mb-6">
                    Thank you for submitting <strong>{submitData.filmTitle}</strong>. Our archive team will review your submission and contact you at <strong>{submitData.contactEmail}</strong> within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitSuccess(false); setShowSubmitForm(false); setSubmitData({ filmTitle: "", organization: "", director: "", year: "", duration: "", description: "", contactName: "", contactEmail: "", vimeoUrl: "", notes: "" }); }}
                    className="font-body text-sm text-[oklch(0.52_0.18_30)] underline"
                  >
                    Submit another film
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[oklch(0.975_0.005_90)] border border-[oklch(0.90_0.008_80)] p-8 space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl font-bold text-[oklch(0.24_0.015_60)]">Film Submission Form</h3>
                    <button type="button" onClick={() => setShowSubmitForm(false)} className="text-[oklch(0.50_0.01_60)] hover:text-[oklch(0.24_0.015_60)]">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                        Film Title <span className="text-[oklch(0.52_0.18_30)]">*</span>
                      </label>
                      <input
                        type="text"
                        value={submitData.filmTitle}
                        onChange={(e) => setSubmitData({ ...submitData, filmTitle: e.target.value })}
                        placeholder="Title of your film"
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                        Organization <span className="text-[oklch(0.52_0.18_30)]">*</span>
                      </label>
                      <input
                        type="text"
                        value={submitData.organization}
                        onChange={(e) => setSubmitData({ ...submitData, organization: e.target.value })}
                        placeholder="Producing organization"
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">Director</label>
                      <input
                        type="text"
                        value={submitData.director}
                        onChange={(e) => setSubmitData({ ...submitData, director: e.target.value })}
                        placeholder="Director's name"
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">Year</label>
                      <input
                        type="text"
                        value={submitData.year}
                        onChange={(e) => setSubmitData({ ...submitData, year: e.target.value })}
                        placeholder="e.g. 2024"
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">Duration</label>
                      <input
                        type="text"
                        value={submitData.duration}
                        onChange={(e) => setSubmitData({ ...submitData, duration: e.target.value })}
                        placeholder="e.g. 12 min"
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                      Film Description <span className="text-[oklch(0.52_0.18_30)]">*</span>
                    </label>
                    <textarea
                      value={submitData.description}
                      onChange={(e) => setSubmitData({ ...submitData, description: e.target.value })}
                      placeholder="Describe your film — its story, community, and purpose (2–4 sentences)"
                      rows={4}
                      className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] resize-none"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                      Vimeo / YouTube Link
                    </label>
                    <input
                      type="url"
                      value={submitData.vimeoUrl}
                      onChange={(e) => setSubmitData({ ...submitData, vimeoUrl: e.target.value })}
                      placeholder="https://vimeo.com/your-film"
                      className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                    />
                    <p className="font-body text-xs text-[oklch(0.50_0.01_60)] mt-1">You can also submit a screener link through our <a href="/contact" className="text-[oklch(0.52_0.18_30)] hover:underline">contact page</a></p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                        Your Name <span className="text-[oklch(0.52_0.18_30)]">*</span>
                      </label>
                      <input
                        type="text"
                        value={submitData.contactName}
                        onChange={(e) => setSubmitData({ ...submitData, contactName: e.target.value })}
                        placeholder="Contact person's name"
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                        Email Address <span className="text-[oklch(0.52_0.18_30)]">*</span>
                      </label>
                      <input
                        type="email"
                        value={submitData.contactEmail}
                        onChange={(e) => setSubmitData({ ...submitData, contactEmail: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">Additional Notes</label>
                    <textarea
                      value={submitData.notes}
                      onChange={(e) => setSubmitData({ ...submitData, notes: e.target.value })}
                      placeholder="Any additional context, community protocols, or screening restrictions we should know about"
                      rows={3}
                      className="w-full border border-[oklch(0.90_0.008_80)] bg-[oklch(0.975_0.005_90)] px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] resize-none"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={submitSending}
                      className="flex-1 bg-[oklch(0.52_0.18_30)] text-white py-4 font-body font-medium hover:bg-[oklch(0.46_0.18_30)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitSending ? "Sending..." : "Submit Film for Review"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSubmitForm(false)}
                      className="px-6 border border-[oklch(0.90_0.008_80)] font-body text-sm text-[oklch(0.40_0.01_60)] hover:border-[oklch(0.52_0.18_30)] transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />

      {/* Film Detail Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[oklch(0.24_0.015_60/0.9)] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedFilm(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[oklch(0.975_0.005_90)] max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedFilm.img}
                  alt={selectedFilm.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.24_0.015_60/0.7)] to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="font-body text-[10px] uppercase tracking-wider bg-[oklch(0.52_0.18_30)] text-white px-2.5 py-1">
                    {selectedFilm.tag}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedFilm(null)}
                  className="absolute top-3 right-3 w-9 h-9 bg-[oklch(0.24_0.015_60/0.7)] flex items-center justify-center text-white hover:bg-[oklch(0.24_0.015_60/0.9)] transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-[oklch(0.50_0.01_60)]">
                  <span className="flex items-center gap-1.5 font-body text-xs">
                    <Building2 size={13} className="text-[oklch(0.52_0.18_30)]" />
                    {selectedFilm.org}
                  </span>
                  <span className="flex items-center gap-1.5 font-body text-xs">
                    <Calendar size={13} className="text-[oklch(0.52_0.18_30)]" />
                    {selectedFilm.year}
                  </span>
                  <span className="flex items-center gap-1.5 font-body text-xs">
                    <Clock size={13} className="text-[oklch(0.52_0.18_30)]" />
                    {selectedFilm.duration}
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.24_0.015_60)] mb-2">
                  {selectedFilm.title}
                </h2>

                <div className="flex flex-wrap gap-4 mb-6 font-body text-sm text-[oklch(0.40_0.01_60)]">
                  <span>Directed by <strong className="text-[oklch(0.24_0.015_60)]">{selectedFilm.director}</strong></span>
                  {selectedFilm.language && (
                    <span>Language: <strong className="text-[oklch(0.24_0.015_60)]">{selectedFilm.language}</strong></span>
                  )}
                </div>

                <p className="font-body text-base text-[oklch(0.40_0.01_60)] leading-relaxed mb-8">
                  {selectedFilm.fullDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-6 py-3.5 font-body font-medium text-sm hover:bg-[oklch(0.46_0.18_30)] transition-all"
                  >
                    <Play size={14} fill="currentColor" /> Request Screening Access
                  </a>
                  <button
                    onClick={() => setSelectedFilm(null)}
                    className="px-6 py-3.5 border border-[oklch(0.90_0.008_80)] font-body text-sm text-[oklch(0.40_0.01_60)] hover:border-[oklch(0.52_0.18_30)] transition-colors"
                  >
                    Back to Archive
                  </button>
                </div>

                <p className="font-body text-xs text-[oklch(0.50_0.01_60)] mt-4">
                  Screening access is granted at the discretion of the producing community organization. All requests are forwarded directly to the community for approval.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

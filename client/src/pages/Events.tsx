/*
 * VISIO Events Page
 * Design: Calendar/list hybrid, editorial layout
 * All interactions are real: event registration modal with form validation,
 * event detail expansion, no toast placeholders
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, X, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

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

interface Event {
  id: string;
  date: { month: string; day: string; year: string };
  title: string;
  type: string;
  location: string;
  time: string;
  desc: string;
  fullDesc: string;
  featured: boolean;
  capacity?: number;
  cost?: string;
  registration: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: "spring-screening-2026",
    date: { month: "APR", day: "12", year: "2026" },
    title: "Spring Community Screening Night",
    type: "Screening",
    location: "Vancouver, BC (Venue TBA)",
    time: "6:00 PM – 9:30 PM",
    desc: "An evening screening of five new community films produced through our 2025 grant cycle. Q&A with filmmakers to follow.",
    fullDesc: "Join us for an evening celebrating five new community films produced through Visio's 2025 grant cycle. Each film will be introduced by its director, followed by a 30-minute Q&A panel with all filmmakers. Light refreshments will be served. Venue details will be confirmed and shared with registered attendees two weeks before the event.",
    featured: true,
    cost: "Free admission, all welcome",
    capacity: 120,
    registration: true,
  },
  {
    id: "intro-workshop-apr",
    date: { month: "APR", day: "18", year: "2026" },
    title: "Introduction to Video Storytelling Workshop",
    type: "Workshop",
    location: "Vancouver, BC",
    time: "9:00 AM – 5:00 PM (2 days: Apr 18–19)",
    desc: "Two-day beginner workshop for community members with no prior filmmaking experience. Lunch provided.",
    fullDesc: "This two-day hands-on workshop is designed for community members with no prior filmmaking experience. You'll learn the fundamentals of documentary storytelling — from developing your story idea to operating a camera, recording audio, and basic editing. All equipment is provided. Lunch and snacks are included both days. Space is limited to 12 participants to ensure personalized instruction.",
    featured: false,
    cost: "Free (subsidized by Visio)",
    capacity: 12,
    registration: true,
  },
  {
    id: "grant-deadline-spring",
    date: { month: "MAY", day: "3", year: "2026" },
    title: "2026 Spring Grant Deadline",
    type: "Grant Deadline",
    location: "Online Submission",
    time: "11:59 PM PST",
    desc: "Applications for the Spring 2026 Community Video Grant cycle close. Seed, Community, and Impact grant tiers available.",
    fullDesc: "The Spring 2026 grant cycle closes at 11:59 PM PST on May 3rd. Three grant tiers are available: Seed ($2,500), Community ($8,000), and Impact ($18,000). Applications are submitted through our online portal. Late applications will not be accepted. Contact us through the contact page with any questions before the deadline.",
    featured: false,
    cost: "N/A",
    registration: false,
  },
  {
    id: "youth-intensive-may",
    date: { month: "MAY", day: "15", year: "2026" },
    title: "Youth Media Intensive — Cohort 8",
    type: "Workshop",
    location: "North Vancouver, BC (Venue TBA)",
    time: "9:00 AM – 5:00 PM (5 days: May 15–19)",
    desc: "Our flagship youth program for storytellers aged 14–24. Participants produce a complete short film over five days with mentorship from community filmmakers.",
    fullDesc: "The Youth Media Intensive is Visio's flagship program for young storytellers aged 14–24. Over five full days, participants develop a story, shoot footage, and edit a complete short film — all with mentorship from experienced community filmmakers. The program is free and includes all meals. Priority is given to youth from Indigenous and underrepresented communities. A portfolio or short written statement is required with registration. Venue details confirmed upon registration.",
    featured: true,
    cost: "Free (all meals included)",
    capacity: 10,
    registration: true,
  },
  {
    id: "gala-2026",
    date: { month: "JUN", day: "7", year: "2026" },
    title: "Annual Visio Gala & Fundraiser",
    type: "Fundraiser",
    location: "Vancouver, BC (Venue TBA)",
    time: "5:30 PM – 10:00 PM",
    desc: "Our annual fundraising gala celebrating a year of community storytelling. Film premieres, live music, silent auction, and dinner.",
    fullDesc: "The Annual Visio Gala is our signature fundraising event, celebrating a year of community storytelling and raising funds for the next grant cycle. The evening includes world premieres of two community films, live music from Indigenous artists, a silent auction of community-created artwork, and a three-course dinner. Proceeds directly fund our community grant program.",
    featured: false,
    cost: "$125/person, $200/couple",
    capacity: 200,
    registration: true,
  },
  {
    id: "road-kamloops",
    date: { month: "JUN", day: "20", year: "2026" },
    title: "Digital Storytelling on the Road — Kamloops",
    type: "Workshop",
    location: "Kamloops, BC",
    time: "10:00 AM – 4:00 PM",
    desc: "Our traveling workshop series visits Kamloops. Organizational media training for nonprofit staff and communications teams.",
    fullDesc: "Visio's traveling workshop series brings hands-on media training directly to communities. This session in Kamloops is designed for nonprofit staff and communications teams who want to produce their own video content. You'll learn smartphone video production, basic editing, and social media video strategy — all using tools you already have. Venue details will be shared with registered attendees.",
    featured: false,
    cost: "Free for nonprofit staff",
    capacity: 20,
    registration: true,
  },
  {
    id: "archive-showcase-jul",
    date: { month: "JUL", day: "11", year: "2026" },
    title: "Mid-Year Story Archive Update",
    type: "Online Event",
    location: "Online / Zoom",
    time: "2:00 PM – 3:30 PM PST",
    desc: "A virtual showcase of 12 new films added to our community archive. Filmmakers share brief introductions to their work.",
    fullDesc: "Join us online for a 90-minute virtual showcase of 12 new films added to the Visio Story Archive. Each filmmaker will share a 5-minute introduction to their work, followed by a brief Q&A. This is a free public event open to anyone interested in community storytelling. A Zoom link will be sent to registered attendees 48 hours before the event.",
    featured: false,
    cost: "Free",
    capacity: 200,
    registration: true,
  },
  {
    id: "fall-grant-opens",
    date: { month: "SEP", day: "5", year: "2026" },
    title: "Fall Grant Cycle Opens",
    type: "Grant Deadline",
    location: "Online Submission",
    time: "Opens 9:00 AM PST",
    desc: "Applications open for the Fall 2026 Community Video Grant cycle. New this year: a dedicated stream for public health campaigns.",
    fullDesc: "The Fall 2026 grant cycle opens on September 5th. New this year is a dedicated Public Health stream, with grants of up to $12,000 for organizations producing public health awareness videos. All three standard tiers (Seed, Community, Impact) remain available. An information webinar will be held on September 10th for prospective applicants.",
    featured: false,
    cost: "N/A",
    registration: false,
  },
];

const typeColors: Record<string, string> = {
  "Screening": "oklch(0.24_0.015_60)",
  "Workshop": "oklch(0.52_0.18_30)",
  "Grant Deadline": "oklch(0.52_0.18_30)",
  "Fundraiser": "oklch(0.52_0.18_30)",
  "Online Event": "oklch(0.24_0.015_60)",
};

const filterTypes = ["All", "Screening", "Workshop", "Grant Deadline", "Fundraiser", "Online Event"];

interface RegFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  notes: string;
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [registeringEvent, setRegisteringEvent] = useState<Event | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [regSuccess, setRegSuccess] = useState(false);
  const [regData, setRegData] = useState<RegFormData>({ name: "", email: "", phone: "", organization: "", notes: "" });

  const filtered = upcomingEvents.filter(
    (e) => activeFilter === "All" || e.type === activeFilter
  );

  const [regSending, setRegSending] = useState(false);

  const handleRegSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regData.name || !regData.email) {
      toast.error("Please provide your name and email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setRegSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f642c143-997e-4d9e-9be2-7b9917152700",
          subject: `[Visio] Event Registration from ${regData.name}`,
          name: regData.name,
          email: regData.email,
          phone: regData.phone || "N/A",
          organization: regData.organization || "N/A",
          "notes/accessibility": regData.notes || "N/A",
          "event": registeringEvent?.title || "Unknown",
          "event date": registeringEvent ? `${registeringEvent.date.month} ${registeringEvent.date.day}, ${registeringEvent.date.year}` : "N/A",
        }),
      });
      if (res.ok) {
        setRegSuccess(true);
        toast.success(`You're registered for ${registeringEvent?.title}!`);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or visit our contact page.");
    } finally {
      setRegSending(false);
    }
  };

  const closeModal = () => {
    setRegisteringEvent(null);
    setRegSuccess(false);
    setRegData({ name: "", email: "", phone: "", organization: "", notes: "" });
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
            <span className="section-label text-[oklch(0.65_0.1_35)] mb-4 block">Events & Screenings</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
              Join us in community.
            </h1>
            <p className="font-body text-lg text-white/65 max-w-2xl">
              Screenings, workshops, grant deadlines, and fundraisers — all the ways to engage with Visio and the communities we serve across Canada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 md:py-20">
        <div className="container">
          <FadeUp>
            <span className="section-label mb-4 block">Featured Events</span>
            <div className="rule-terracotta" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.24_0.015_60)] mb-12">
              Don't miss these
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {upcomingEvents.filter((e) => e.featured).map((event, i) => (
              <FadeUp key={event.id} delay={i * 0.1}>
                <div className="bg-[oklch(0.28_0.015_55)] p-8 h-full flex flex-col">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-center flex-shrink-0">
                      <div className="font-body text-xs uppercase tracking-wider text-[oklch(0.52_0.18_30)] mb-1">{event.date.month}</div>
                      <div className="font-display text-5xl font-bold text-white leading-none">{event.date.day}</div>
                      <div className="font-body text-xs text-white/40 mt-1">{event.date.year}</div>
                    </div>
                    <div className="flex-1">
                      <span
                        className="font-body text-[10px] uppercase tracking-wider px-2 py-1 mb-3 inline-block"
                        style={{ backgroundColor: `color-mix(in oklch, ${typeColors[event.type] || "oklch(0.52_0.18_30)"} 20%, transparent)`, color: typeColors[event.type] || "oklch(0.52_0.18_30)" }}
                      >
                        {event.type}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white mb-2">{event.title}</h3>
                    </div>
                  </div>
                  <p className="font-body text-[oklch(0.50_0.01_60)] leading-relaxed mb-4">{event.fullDesc}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 font-body text-sm text-[oklch(0.50_0.01_60)]">
                      <MapPin size={14} className="text-[oklch(0.52_0.18_30)] flex-shrink-0" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-3 font-body text-sm text-[oklch(0.50_0.01_60)]">
                      <Clock size={14} className="text-[oklch(0.52_0.18_30)] flex-shrink-0" />
                      {event.time}
                    </div>
                    {event.cost && (
                      <div className="flex items-center gap-3 font-body text-sm text-[oklch(0.50_0.01_60)]">
                        <Calendar size={14} className="text-[oklch(0.52_0.18_30)] flex-shrink-0" />
                        {event.cost}
                      </div>
                    )}
                  </div>
                  <div className="mt-auto">
                    {event.registration ? (
                      <button
                        onClick={() => { setRegisteringEvent(event); setRegSuccess(false); }}
                        className="inline-flex items-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-6 py-3 font-body text-sm font-medium hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-3"
                      >
                        Register for this Event <ArrowRight size={14} />
                      </button>
                    ) : (
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 border border-[oklch(0.52_0.18_30)] text-[oklch(0.52_0.18_30)] px-6 py-3 font-body text-sm font-medium hover:bg-[oklch(0.52_0.18_30)] hover:text-white transition-all"
                      >
                        Contact for Details <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* All Events */}
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h2 className="font-display text-3xl font-bold text-[oklch(0.24_0.015_60)]">All Upcoming Events</h2>
              <div className="flex gap-2 flex-wrap">
                {filterTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveFilter(type)}
                    className={`font-body text-xs px-3 py-1.5 transition-all ${
                      activeFilter === type
                        ? "bg-[oklch(0.52_0.18_30)] text-white"
                        : "border border-[oklch(0.90_0.008_80)] text-[oklch(0.50_0.01_60)] hover:border-[oklch(0.52_0.18_30)]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="space-y-3">
            {filtered.map((event, i) => (
              <FadeUp key={event.id} delay={i * 0.05}>
                <div className="bg-[oklch(0.975_0.005_90)] border border-transparent hover:border-[oklch(0.52_0.18_30/0.3)] transition-all">
                  {/* Main row */}
                  <div className="flex flex-col sm:flex-row gap-6 p-6">
                    {/* Date */}
                    <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 sm:w-16 sm:text-center">
                      <div className="font-body text-xs uppercase tracking-wider text-[oklch(0.52_0.18_30)]">{event.date.month}</div>
                      <div className="font-display text-3xl font-bold text-[oklch(0.24_0.015_60)] sm:leading-none">{event.date.day}</div>
                    </div>

                    <div className="hidden sm:block w-px bg-[oklch(0.90_0.008_80)]" />

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <span
                            className="font-body text-[10px] uppercase tracking-wider px-2 py-0.5 mr-3"
                            style={{ backgroundColor: `color-mix(in oklch, ${typeColors[event.type] || "oklch(0.52_0.18_30)"} 15%, transparent)`, color: typeColors[event.type] || "oklch(0.52_0.18_30)" }}
                          >
                            {event.type}
                          </span>
                          <h3 className="font-display text-xl font-bold text-[oklch(0.24_0.015_60)] inline">
                            {event.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                          className="flex-shrink-0 flex items-center gap-1 font-body text-xs text-[oklch(0.52_0.18_30)] hover:text-[oklch(0.46_0.18_30)] transition-colors"
                          aria-label={expandedEvent === event.id ? "Collapse" : "Expand"}
                        >
                          {expandedEvent === event.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          {expandedEvent === event.id ? "Less" : "Details"}
                        </button>
                      </div>
                      <p className="font-body text-sm text-[oklch(0.50_0.01_60)] leading-relaxed mb-3">{event.desc}</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 font-body text-xs text-[oklch(0.50_0.01_60)]">
                          <MapPin size={12} className="text-[oklch(0.52_0.18_30)]" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 font-body text-xs text-[oklch(0.50_0.01_60)]">
                          <Clock size={12} className="text-[oklch(0.52_0.18_30)]" />
                          {event.time}
                        </div>
                        {event.cost && (
                          <div className="font-body text-xs text-[oklch(0.50_0.01_60)]">{event.cost}</div>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0 flex items-center">
                      {event.registration ? (
                        <button
                          onClick={() => { setRegisteringEvent(event); setRegSuccess(false); }}
                          className="inline-flex items-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-5 py-2.5 font-body text-xs font-medium hover:bg-[oklch(0.46_0.18_30)] transition-all whitespace-nowrap"
                        >
                          Register <ArrowRight size={12} />
                        </button>
                      ) : (
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 border border-[oklch(0.52_0.18_30)] text-[oklch(0.52_0.18_30)] px-5 py-2.5 font-body text-xs font-medium hover:bg-[oklch(0.52_0.18_30)] hover:text-white transition-all whitespace-nowrap"
                        >
                          Learn More <ArrowRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {expandedEvent === event.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-[oklch(0.90_0.008_80)] pt-5">
                          <p className="font-body text-sm text-[oklch(0.40_0.01_60)] leading-relaxed mb-4">{event.fullDesc}</p>
                          {event.capacity && (
                            <p className="font-body text-xs text-[oklch(0.50_0.01_60)]">
                              Capacity: {event.capacity} participants
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Add to Calendar / Newsletter CTA */}
      <section className="py-16 bg-[oklch(0.24_0.015_60)]">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Never miss an event.</h3>
                <p className="font-body text-[oklch(0.50_0.01_60)]">Subscribe to our newsletter for event announcements, grant deadlines, and community stories.</p>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[oklch(0.52_0.18_30)] text-white px-7 py-3.5 font-body font-medium text-sm hover:bg-[oklch(0.46_0.18_30)] transition-all hover:gap-3"
              >
                Contact Us <ArrowRight size={15} />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />

      {/* Registration Modal */}
      <AnimatePresence>
        {registeringEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[oklch(0.20_0.01_60/0.85)] flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[oklch(0.975_0.005_90)] max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {regSuccess ? (
                  <div className="text-center py-6">
                    <CheckCircle size={48} className="text-[oklch(0.24_0.015_60)] mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-[oklch(0.24_0.015_60)] mb-3">
                      You're registered!
                    </h3>
                    <p className="font-body text-[oklch(0.40_0.01_60)] mb-2">
                      <strong>{regData.name}</strong>, you're confirmed for:
                    </p>
                    <p className="font-display text-lg font-bold text-[oklch(0.52_0.18_30)] mb-4">
                      {registeringEvent.title}
                    </p>
                    <p className="font-body text-sm text-[oklch(0.50_0.01_60)] mb-6">
                      A confirmation has been noted for <strong>{regData.email}</strong>. We'll send event details and any updates to this address.
                    </p>
                    <div className="bg-[oklch(0.94_0.008_90)] p-4 text-left mb-6 space-y-2">
                      <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.50_0.01_60)]">
                        <Calendar size={14} className="text-[oklch(0.52_0.18_30)]" />
                        {registeringEvent.date.month} {registeringEvent.date.day}, {registeringEvent.date.year}
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.50_0.01_60)]">
                        <Clock size={14} className="text-[oklch(0.52_0.18_30)]" />
                        {registeringEvent.time}
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.50_0.01_60)]">
                        <MapPin size={14} className="text-[oklch(0.52_0.18_30)]" />
                        {registeringEvent.location}
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="font-body text-sm text-[oklch(0.52_0.18_30)] underline"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span
                          className="font-body text-[10px] uppercase tracking-wider px-2 py-0.5 mb-2 inline-block"
                          style={{ backgroundColor: `color-mix(in oklch, ${typeColors[registeringEvent.type] || "oklch(0.52_0.18_30)"} 15%, transparent)`, color: typeColors[registeringEvent.type] || "oklch(0.52_0.18_30)" }}
                        >
                          {registeringEvent.type}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-[oklch(0.24_0.015_60)]">
                          {registeringEvent.title}
                        </h3>
                      </div>
                      <button onClick={closeModal} className="text-[oklch(0.50_0.01_60)] hover:text-[oklch(0.24_0.015_60)] ml-4">
                        <X size={20} />
                      </button>
                    </div>

                    <div className="bg-[oklch(0.94_0.008_90)] p-4 mb-6 space-y-2">
                      <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.50_0.01_60)]">
                        <Calendar size={14} className="text-[oklch(0.52_0.18_30)]" />
                        {registeringEvent.date.month} {registeringEvent.date.day}, {registeringEvent.date.year}
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.50_0.01_60)]">
                        <Clock size={14} className="text-[oklch(0.52_0.18_30)]" />
                        {registeringEvent.time}
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.50_0.01_60)]">
                        <MapPin size={14} className="text-[oklch(0.52_0.18_30)]" />
                        {registeringEvent.location}
                      </div>
                      {registeringEvent.cost && (
                        <div className="font-body text-sm text-[oklch(0.50_0.01_60)]">{registeringEvent.cost}</div>
                      )}
                    </div>

                    <form onSubmit={handleRegSubmit} className="space-y-5">
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                          Full Name <span className="text-[oklch(0.52_0.18_30)]">*</span>
                        </label>
                        <input
                          type="text"
                          value={regData.name}
                          onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full border border-[oklch(0.90_0.008_80)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">
                          Email Address <span className="text-[oklch(0.52_0.18_30)]">*</span>
                        </label>
                        <input
                          type="email"
                          value={regData.email}
                          onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full border border-[oklch(0.90_0.008_80)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">Phone</label>
                          <input
                            type="tel"
                            value={regData.phone}
                            onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                            placeholder="(604) 555-0000"
                            className="w-full border border-[oklch(0.90_0.008_80)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                          />
                        </div>
                        <div>
                          <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">Organization</label>
                          <input
                            type="text"
                            value={regData.organization}
                            onChange={(e) => setRegData({ ...regData, organization: e.target.value })}
                            placeholder="If applicable"
                            className="w-full border border-[oklch(0.90_0.008_80)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-[oklch(0.50_0.01_60)] mb-2 block">Notes / Accessibility Needs</label>
                        <textarea
                          value={regData.notes}
                          onChange={(e) => setRegData({ ...regData, notes: e.target.value })}
                          placeholder="Any dietary restrictions, accessibility requirements, or questions"
                          rows={3}
                          className="w-full border border-[oklch(0.90_0.008_80)] bg-transparent px-4 py-3 font-body text-sm text-[oklch(0.24_0.015_60)] placeholder:text-[oklch(0.50_0.01_60)] focus:outline-none focus:border-[oklch(0.52_0.18_30)] resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={regSending}
                        className="w-full bg-[oklch(0.52_0.18_30)] text-white py-4 font-body font-medium hover:bg-[oklch(0.46_0.18_30)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {regSending ? "Sending..." : "Confirm Registration"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

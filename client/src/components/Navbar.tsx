/*
 * VISIO Navbar
 * Design: Raw Editorial Modernism — DM Sans UI font, terracotta accents
 * Sticky top nav with film-frame inspired horizontal rule
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/archive", label: "Story Archive" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <>
      {/* Announcement Banner */}
      {bannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.32_0.1_140)] text-white py-2 px-4 flex items-center justify-center gap-4">
          <span className="font-ui text-xs text-center">
            <span className="font-medium">Spring Community Screening Night</span> — April 12, 2026 · Musqueam Cultural Centre
          </span>
          <Link href="/events" className="font-ui text-[10px] uppercase tracking-wider border border-white/40 px-2 py-0.5 hover:bg-white/10 transition-colors flex-shrink-0">
            Details
          </Link>
          <button onClick={() => setBannerVisible(false)} className="absolute right-4 text-white/60 hover:text-white transition-colors" aria-label="Close">
            <X size={14} />
          </button>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${bannerVisible ? 'top-9' : 'top-0'} ${
          scrolled || !isHome
            ? "bg-[oklch(0.95_0.025_80)] border-b border-[oklch(0.85_0.03_75)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-[oklch(0.48_0.17_35)] flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full border-2 border-[oklch(0.95_0.025_80)]" />
              </div>
              <div>
                <span
                  className={`font-display font-bold text-xl tracking-tight transition-colors ${
                    scrolled || !isHome
                      ? "text-[oklch(0.18_0.005_285)]"
                      : "text-[oklch(0.97_0.02_80)]"
                  }`}
                >
                  Visio
                </span>
                <span
                  className={`hidden sm:block font-ui text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    scrolled || !isHome
                      ? "text-[oklch(0.48_0.17_35)]"
                      : "text-[oklch(0.85_0.03_75)]"
                  }`}
                >
                  Community Media Lab
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-ui text-sm font-medium transition-colors relative group ${
                    location === link.href
                      ? "text-[oklch(0.48_0.17_35)]"
                      : scrolled || !isHome
                      ? "text-[oklch(0.35_0.01_285)] hover:text-[oklch(0.48_0.17_35)]"
                      : "text-[oklch(0.9_0.02_80)] hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[oklch(0.48_0.17_35)] transition-all duration-300 ${
                      location === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
              <Link
                href="/get-involved"
                className="font-ui text-sm font-medium bg-[oklch(0.48_0.17_35)] text-[oklch(0.97_0.02_80)] px-5 py-2.5 transition-all hover:bg-[oklch(0.42_0.17_35)] hover:shadow-lg"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled || !isHome
                  ? "text-[oklch(0.18_0.005_285)]"
                  : "text-[oklch(0.97_0.02_80)]"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Thin terracotta line at bottom */}
        {(scrolled || !isHome) && (
          <div className="h-px bg-gradient-to-r from-transparent via-[oklch(0.48_0.17_35/0.3)] to-transparent" />
        )}
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[oklch(0.95_0.025_80)] pt-20 px-6"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block font-display text-3xl py-3 border-b border-[oklch(0.85_0.03_75)] transition-colors ${
                      location === link.href
                        ? "text-[oklch(0.48_0.17_35)]"
                        : "text-[oklch(0.18_0.005_285)] hover:text-[oklch(0.48_0.17_35)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6"
              >
                <Link
                  href="/get-involved"
                  className="inline-block font-ui font-medium bg-[oklch(0.48_0.17_35)] text-[oklch(0.97_0.02_80)] px-8 py-3 text-lg"
                >
                  Donate Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

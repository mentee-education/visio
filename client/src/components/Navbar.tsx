/*
 * VISIO Navbar
 * Design: Editorial Restraint — Inter UI, uppercase nav, terracotta accent
 * Inspired by imagineNATIVE / Sundance nav patterns
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/archive", label: "Archive" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-[oklch(0.975_0.005_90/0.97)] backdrop-blur-sm border-b border-[oklch(0.90_0.008_80)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo — wordmark only, clean */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/favicon.svg" alt="" className="w-7 h-7 flex-shrink-0" />
              <div className="leading-none">
                <span
                  className={`font-display font-bold text-lg tracking-tight transition-colors block ${
                    scrolled || !isHome
                      ? "text-[oklch(0.24_0.015_60)]"
                      : "text-white"
                  }`}
                >
                  Visio
                </span>
                <span
                  className={`hidden sm:block font-body text-[9px] uppercase tracking-[0.25em] transition-colors mt-0.5 ${
                    scrolled || !isHome
                      ? "text-[oklch(0.50_0.01_60)]"
                      : "text-white/60"
                  }`}
                >
                  Community Media Lab
                </span>
              </div>
            </Link>

            {/* Desktop Nav — uppercase, tracked */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[11px] uppercase tracking-[0.15em] font-medium transition-colors relative group ${
                    location === link.href
                      ? scrolled || !isHome
                        ? "text-[oklch(0.52_0.18_30)]"
                        : "text-white"
                      : scrolled || !isHome
                      ? "text-[oklch(0.40_0.01_60)] hover:text-[oklch(0.24_0.015_60)]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-[oklch(0.52_0.18_30)] transition-all duration-300 ${
                      location === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
              <Link
                href="/get-involved"
                className="font-body text-[11px] uppercase tracking-[0.12em] font-semibold bg-[oklch(0.52_0.18_30)] text-white px-5 py-2.5 transition-all hover:bg-[oklch(0.46_0.18_30)]"
              >
                Support
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled || !isHome
                  ? "text-[oklch(0.24_0.015_60)]"
                  : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[oklch(0.975_0.005_90)] pt-20 px-6"
          >
            <nav className="flex flex-col gap-0 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`block font-display text-3xl py-4 border-b border-[oklch(0.90_0.008_80)] transition-colors ${
                      location === link.href
                        ? "text-[oklch(0.52_0.18_30)]"
                        : "text-[oklch(0.24_0.015_60)] hover:text-[oklch(0.52_0.18_30)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="mt-8"
              >
                <Link
                  href="/get-involved"
                  className="inline-block font-body font-semibold text-[11px] uppercase tracking-[0.12em] bg-[oklch(0.52_0.18_30)] text-white px-8 py-3.5"
                >
                  Support Our Work
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

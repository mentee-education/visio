/*
 * VISIO Navbar
 * Design: Clean, always-visible — teal accent on light bg
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/watch", label: "Watch" },
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md shadow-sm"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="block shrink-0">
              <img
                src="/visio-logo-full.png"
                alt="Visio Community Media Lab"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[11px] uppercase tracking-[0.18em] font-medium px-5 py-2 transition-colors duration-300 relative group ${
                    location === link.href
                      ? "text-[oklch(0.42_0.12_195)]"
                      : "text-[oklch(0.35_0.02_250)] hover:text-[oklch(0.42_0.12_195)]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[2px] bg-[oklch(0.42_0.12_195)] transition-all duration-300 ${
                      location === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              ))}
              <div className="w-px h-5 mx-3 bg-[oklch(0.88_0.005_250)]" />
              <Link
                href="/get-involved"
                className="font-body text-[11px] uppercase tracking-[0.12em] font-semibold bg-[oklch(0.42_0.12_195)] text-white px-5 py-2.5 transition-all duration-300 hover:bg-[oklch(0.38_0.12_195)] hover:shadow-md hover:shadow-[oklch(0.42_0.12_195/0.25)]"
              >
                Support
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-[oklch(0.30_0.02_250)] transition-colors"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6"
          >
            <nav className="flex flex-col gap-0 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block font-display text-3xl py-5 border-b border-[oklch(0.93_0.005_250)] transition-colors ${
                      location === link.href
                        ? "text-[oklch(0.42_0.12_195)]"
                        : "text-[oklch(0.25_0.02_250)] hover:text-[oklch(0.42_0.12_195)]"
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
                className="mt-10"
              >
                <Link
                  href="/get-involved"
                  className="inline-block font-body font-semibold text-[11px] uppercase tracking-[0.12em] bg-[oklch(0.42_0.12_195)] text-white px-8 py-3.5 hover:bg-[oklch(0.38_0.12_195)] transition-colors"
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

/*
 * VISIO Footer
 * Design: Dark charcoal background with terracotta accents
 * Film-frame motif, editorial layout
 * Newsletter signup: real state management with validation and confirmation
 */

import { useState } from "react";
import { Link } from "wouter";
import { Mail, MapPin, Phone, Instagram, Youtube, Facebook, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail || !emailRegex.test(newsletterEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setNewsletterLoading(true);
    // Simulate async submission (in production, replace with your email service API call)
    setTimeout(() => {
      setNewsletterLoading(false);
      setNewsletterSuccess(true);
      toast.success("You're subscribed! Welcome to the Visio community.");
    }, 800);
  };

  return (
    <footer className="bg-[oklch(0.18_0.005_285)] text-[oklch(0.85_0.025_80)]">
      {/* Top section */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[oklch(0.48_0.17_35)] flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full border-2 border-[oklch(0.95_0.025_80)]" />
              </div>
              <span className="font-display font-bold text-xl text-[oklch(0.95_0.025_80)]">Visio</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-[oklch(0.65_0.015_80)] mb-6">
              Amplifying underrepresented voices through accessible video production, training, and storytelling support across Canada.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/visiolab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.35_0.01_285)] flex items-center justify-center text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.48_0.17_35)] hover:border-[oklch(0.48_0.17_35)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com/@visiolab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.35_0.01_285)] flex items-center justify-center text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.48_0.17_35)] hover:border-[oklch(0.48_0.17_35)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://facebook.com/visiolab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.35_0.01_285)] flex items-center justify-center text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.48_0.17_35)] hover:border-[oklch(0.48_0.17_35)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[oklch(0.48_0.17_35)] mb-5">Programs</h4>
            <ul className="space-y-3">
              {[
                { href: "/programs#grants", label: "Community Video Grants" },
                { href: "/programs#workshops", label: "Digital Storytelling Workshops" },
                { href: "/programs#production", label: "Production Support" },
                { href: "/archive", label: "Story Archive" },
                { href: "/programs#youth", label: "Youth Media Initiative" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-ui text-sm text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.95_0.025_80)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[oklch(0.48_0.17_35)] mb-5">Organization</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Visio" },
                { href: "/about#team", label: "Our Team" },
                { href: "/events", label: "Events & Screenings" },
                { href: "/get-involved#volunteer", label: "Volunteer" },
                { href: "/get-involved#donate", label: "Donate" },
                { href: "/contact", label: "Partner With Us" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-ui text-sm text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.95_0.025_80)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[oklch(0.48_0.17_35)] mb-5">Contact</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[oklch(0.48_0.17_35)] mt-0.5 flex-shrink-0" />
                <span className="font-ui text-sm text-[oklch(0.65_0.015_80)]">
                  1234 Community Way<br />
                  Vancouver, BC V6B 2K4
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[oklch(0.48_0.17_35)] flex-shrink-0" />
                <a href="tel:+16045550192" className="font-ui text-sm text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.95_0.025_80)] transition-colors">
                  (604) 555-0192
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[oklch(0.48_0.17_35)] flex-shrink-0" />
                <a href="mailto:hello@visiolab.ca" className="font-ui text-sm text-[oklch(0.65_0.015_80)] hover:text-[oklch(0.95_0.025_80)] transition-colors">
                  hello@visiolab.ca
                </a>
              </li>
            </ul>

            <div className="p-4 border border-[oklch(0.48_0.17_35/0.3)] bg-[oklch(0.48_0.17_35/0.08)]">
              {newsletterSuccess ? (
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[oklch(0.32_0.1_140)] flex-shrink-0" />
                  <div>
                    <p className="font-ui text-xs text-[oklch(0.85_0.025_80)] font-medium">You're subscribed!</p>
                    <p className="font-ui text-xs text-[oklch(0.65_0.015_80)]">Welcome to the Visio community.</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-ui text-xs text-[oklch(0.65_0.015_80)] mb-3">Stay connected with our work</p>
                  <form onSubmit={handleNewsletter} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 bg-transparent border border-[oklch(0.35_0.01_285)] px-3 py-2 font-ui text-xs text-[oklch(0.85_0.025_80)] placeholder:text-[oklch(0.45_0.01_285)] focus:outline-none focus:border-[oklch(0.48_0.17_35)]"
                    />
                    <button
                      type="submit"
                      disabled={newsletterLoading}
                      className="bg-[oklch(0.48_0.17_35)] text-[oklch(0.97_0.02_80)] px-3 py-2 font-ui text-xs font-medium hover:bg-[oklch(0.42_0.17_35)] transition-colors disabled:opacity-60"
                    >
                      {newsletterLoading ? "..." : "Join"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.28_0.005_285)]">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="font-ui text-xs text-[oklch(0.45_0.01_285)]">
              © 2026 Visio Community Media Lab.
            </p>
            <p className="font-ui text-xs text-[oklch(0.45_0.01_285)]">
              Registered Canadian Charity · CRA No. 12345 6789 RR0001
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/contact" className="font-ui text-xs text-[oklch(0.45_0.01_285)] hover:text-[oklch(0.65_0.015_80)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="font-ui text-xs text-[oklch(0.45_0.01_285)] hover:text-[oklch(0.65_0.015_80)] transition-colors">
              Accessibility
            </Link>
            <a
              href="mailto:hello@visiolab.ca"
              className="font-ui text-xs text-[oklch(0.45_0.01_285)] hover:text-[oklch(0.65_0.015_80)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/*
 * VISIO Footer
 * Design: Editorial Restraint — dark charcoal bg, terracotta accent, Inter UI
 */

import { useState } from "react";
import { Link } from "wouter";
import { Mail, Instagram, Youtube, Facebook, CheckCircle } from "lucide-react";
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
    setTimeout(() => {
      setNewsletterLoading(false);
      setNewsletterSuccess(true);
      toast.success("You're subscribed! Welcome to the Visio community.");
    }, 800);
  };

  return (
    <footer className="bg-[oklch(0.20_0.01_60)] text-white/80">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-7 h-7 rounded-full bg-[oklch(0.52_0.18_30)] flex items-center justify-center flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">Visio</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/50 mb-6">
              Amplifying underrepresented voices through accessible video production, training, and storytelling support across Canada.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/visiolab", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com/@visiolab", label: "YouTube" },
                { icon: Facebook, href: "https://facebook.com/visiolab", label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 hover:text-[oklch(0.52_0.18_30)] hover:border-[oklch(0.52_0.18_30)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.52_0.18_30)] mb-5">Programs</h4>
            <ul className="space-y-3">
              {[
                { href: "/programs#grants", label: "Community Video Grants" },
                { href: "/programs#workshops", label: "Digital Storytelling Workshops" },
                { href: "/programs#production", label: "Production Support" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-body text-sm text-white/45 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.52_0.18_30)] mb-5">Organization</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Visio" },
                { href: "/events", label: "Events" },
                { href: "/get-involved", label: "Get Involved" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-body text-sm text-white/45 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-[oklch(0.52_0.18_30)] mb-5">Stay Connected</h4>
            <div className="flex items-center gap-3 mb-6">
              <Mail size={14} className="text-[oklch(0.52_0.18_30)] flex-shrink-0" />
              <Link href="/contact" className="font-body text-sm text-white/45 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>

            {newsletterSuccess ? (
              <div className="flex items-center gap-3 p-4 border border-white/10">
                <CheckCircle size={16} className="text-[oklch(0.52_0.18_30)] flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-white font-medium">You're subscribed!</p>
                  <p className="font-body text-xs text-white/40">Welcome to the Visio community.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-0">
                <input
                  type="email"
                  placeholder="Email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-transparent border border-white/15 border-r-0 px-3 py-2.5 font-body text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[oklch(0.52_0.18_30)]"
                />
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="bg-[oklch(0.52_0.18_30)] text-white px-4 py-2.5 font-body text-[10px] uppercase tracking-[0.1em] font-semibold hover:bg-[oklch(0.46_0.18_30)] transition-colors disabled:opacity-60"
                >
                  {newsletterLoading ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-white/30">
            &copy; 2026 Visio Community Media Lab &middot; Canada
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="font-body text-[11px] text-white/30 hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="font-body text-[11px] text-white/30 hover:text-white/60 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

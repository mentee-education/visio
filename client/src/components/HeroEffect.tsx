/*
 * Animated hero banner effect
 * Radial glow + drifting particles + subtle light lines
 */

import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, i) => ({
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  duration: 12 + (i % 8) * 2,
  delay: (i % 6) * 1.5,
}));

export default function HeroEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial glow — warm spot */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, oklch(0.45 0.12 195 / 0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 80%, oklch(0.35 0.08 210 / 0.12) 0%, transparent 50%)",
        }}
      />

      {/* Subtle top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, oklch(0.60 0.10 195 / 0.3), transparent)",
        }}
      />

      {/* Drifting particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 0.3, 0.15, 0],
            y: [0, -15, 5, 0],
            x: [0, 5, -3, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, oklch(0.60 0.10 195 / 0.25), transparent)",
        }}
      />
    </div>
  );
}

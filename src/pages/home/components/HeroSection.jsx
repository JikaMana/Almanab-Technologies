"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Animation Variants

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

// Ticker Component

const TICKER_ITEMS = [
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "REST APIs",
  "SaaS Platforms",
  "E-commerce",
];

const Ticker = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative w-full overflow-hidden border-y border-[#bf9b30]/20 py-3">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#222222] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#222222] to-transparent" />

      <div className="flex animate-[ticker_30s_linear_infinite] gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase"
          >
            <span className="inline-block h-1 w-1 rounded-full bg-[#bf9b30]/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// Metric Card ─

const Metric = ({ value, label, delay }) => (
  <motion.div
    variants={fadeUp}
    custom={delay}
    initial="hidden"
    animate="show"
    className="flex flex-col gap-1 border-l border-[#bf9b30]/25 pl-5"
  >
    <span className="font-display text-3xl leading-none font-bold tracking-tight text-[#bf9b30]">
      {value}
    </span>
    <span className="text-[11px] font-medium tracking-[0.15em] text-white/40 uppercase">
      {label}
    </span>
  </motion.div>
);

// Main Hero

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#222222] selection:bg-[#bf9b30] selection:text-[#222222]">
      {/* ── Geometric Grid Texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(211,175,48,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(211,175,48,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Gold Radial Atmosphere ── */}
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] z-0 h-[700px] w-[700px] rounded-full bg-[#bf9b30] opacity-[0.05] blur-[160px]" />

      {/* ── Diagonal Accent Line ── */}
      <div className="pointer-events-none absolute top-0 right-[18%] z-0 h-full w-[1px] origin-top rotate-[12deg] bg-gradient-to-b from-[#bf9b30]/20 via-[#bf9b30]/5 to-transparent" />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-16 pb-8 md:px-12 lg:px-16 lg:pt-20">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="show"
          className="mb-8 flex items-center gap-4"
        >
          <span className="text-[11px] font-bold tracking-[0.35em] text-[#bf9b30] uppercase">
            Software Development Studio
          </span>
        </motion.div>

        {/* Headline */}
        <div className="">
          <motion.h1
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.88] font-black tracking-[-0.03em] text-white"
          >
            We build software
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            custom={0.32}
            initial="hidden"
            animate="show"
            className="text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.88] font-black tracking-[-0.03em]"
            style={{
              WebkitTextStroke: "1.5px #bf9b30",
              color: "transparent",
            }}
          >
            that wins markets.
          </motion.h1>
        </div>

        {/* Body + CTAs */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12">
          {/* Description */}
          <motion.div
            variants={fadeUp}
            custom={0.45}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-end gap-8 lg:col-span-5"
          >
            <p className="max-w-md text-[15px] leading-relaxed font-light text-white/50">
              From scalable SaaS platforms to precision-engineered mobile apps -
              we partner with ambitious founders and teams who refuse to
              compromise on quality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group flex items-center gap-3 rounded-none bg-[#bf9b30] px-7 py-4 text-[13px] font-black tracking-[0.15em] text-[#222222] uppercase transition-all hover:bg-white"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#portfolio"
                className="flex items-center gap-2 border-b border-white/20 pb-0.5 text-[13px] font-semibold tracking-[0.15em] text-white/50 uppercase transition-colors hover:border-[#bf9b30] hover:text-[#bf9b30]"
              >
                View Our Work
              </a>
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="flex flex-wrap items-end gap-8 lg:col-span-7 lg:justify-end">
            <Metric value="10+" label="Projects Shipped" delay={0.55} />
            <Metric value="~98%" label="Client Retention" delay={0.65} />
            <Metric value="1yr" label="In Production" delay={0.75} />
            <Metric value="< 14d" label="First Deliverable" delay={0.85} />
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <motion.div
        variants={fadeIn}
        custom={1.0}
        initial="hidden"
        animate="show"
        className="relative z-10 mt-auto"
      >
        <Ticker />
      </motion.div>

      {/* ── Bottom Footer Bar ── */}
      <motion.div
        variants={fadeIn}
        custom={1.1}
        initial="hidden"
        animate="show"
        className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-16"
      >
        <span className="hidden text-[10px] font-semibold tracking-[0.2em] text-white/20 uppercase sm:block">
          Nigeria - Available Worldwide
        </span>
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/20 uppercase">
          Full-Stack · Mobile · SaaS · E-commerce
        </span>
      </motion.div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

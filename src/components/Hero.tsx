"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowIcon } from "./Icons";

const googlePlayUrl = "https://play.google.com/store/apps/details?id=app.xsel";
const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  ["2.4k", "Learners and growing"],
  ["12", "Weekly learning labs"],
  ["8 yrs", "On the floor"],
] as const;

function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.28em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.85, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function AccentUnderline({ children }: { children: string }) {
  return (
    <span className="relative inline-block pb-[0.18em]">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 320 18"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-[0.28em] w-full overflow-visible"
      >
        <path
          d="M4 13.5 C70 15.5, 150 11, 230 8.5 C270 7.2, 300 6.5, 316 7.2 L316 9.8 C280 11.8, 220 13.5, 150 14.8 C90 16, 40 15.5, 4 13.5 Z"
          fill="#EFAA93"
        />
      </svg>
    </span>
  );
}

function HeroVisual({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, delay: 0.28, ease }}
      className={`relative w-full ${
        compact ? "mx-auto max-w-[19rem]" : "h-full"
      }`}
    >
      <div className={`relative w-full ${compact ? "aspect-[4/5]" : "h-full"}`}>
        {/* Mobile-only rings (desktop rings live on the section bg) */}
        {compact ? (
          <span
            aria-hidden
            className="pointer-events-none absolute top-[2%] right-[-18%] z-0 h-[13rem] w-[13rem] rounded-full"
            style={{
              border: "1px solid rgba(194, 215, 186, 0.45)",
              boxShadow:
                "0 0 0 1.1rem rgba(194, 215, 186, 0.26), 0 0 0 2.35rem rgba(194, 215, 186, 0.14)",
            }}
          />
        ) : null}

        {/* Warm glow behind peach semi-circle */}
        <div
          aria-hidden
          className={`pointer-events-none absolute z-0 rounded-full bg-[#EFAA93]/30 blur-3xl ${
            compact
              ? "bottom-0 left-[10%] h-[22rem] w-[22rem] translate-y-1/2"
              : "bottom-0 left-[6%] h-[31.5rem] w-[31.5rem] translate-y-1/2"
          }`}
        />

        {/* Peach semi-circle — sits on bottom border */}
        <motion.div
          aria-hidden
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className={`absolute bottom-0 z-0 rounded-full bg-[#EFAA93] shadow-[0_18px_36px_-16px_rgba(0,0,0,0.3)] ${
            compact
              ? "left-[8%] h-[23.5rem] w-[23.5rem] translate-y-1/2"
              : "left-[4%] h-[34.5rem] w-[34.5rem] translate-y-1/2 xl:h-[37.5rem] xl:w-[37.5rem]"
          }`}
        />

        {/* Parrot — mobile only here; desktop parrot sits in the bg drawing */}
        {compact ? (
          <motion.div
            initial={{ opacity: 0, x: -18, y: 14 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.85, delay: 0.48, ease }}
            className="absolute bottom-[2%] left-[-10%] z-[1] h-[70%] w-[58%] -rotate-6"
          >
            <Image
              src="/hero-parrot.png"
              alt=""
              fill
              unoptimized
              sizes="170px"
              className="object-contain object-bottom drop-shadow-[0_18px_30px_rgba(0,0,0,0.38)]"
            />
          </motion.div>
        ) : null}

        {/* Portrait — above the semi-circle */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease }}
          className={`absolute bottom-0 z-[2] ${
            compact
              ? "right-[2%] h-[78%] w-[84%]"
              : "right-[8%] h-[88%] w-[86%]"
          }`}
        >
          <Image
            src="/hero-portrait.png"
            alt="xSEL instructor"
            fill
            priority
            unoptimized
            sizes={compact ? "250px" : "380px"}
            className="object-contain object-bottom drop-shadow-[0_24px_44px_rgba(0,0,0,0.42)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function HeroCopy({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`min-w-0 ${compact ? "" : "w-full max-w-2xl xl:max-w-[40rem]"}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className={`inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#EFAA93]/35 bg-[#EFAA93]/10 font-semibold tracking-[0.14em] text-[#F5D4C4] uppercase backdrop-blur-[2px] ${
          compact
            ? "mb-3 px-3 py-1.5 text-[10px]"
            : "mb-4 px-3.5 py-1.5 text-[11px]"
        }`}
      >
        <span aria-hidden className="text-[#EFAA93]">
          *
        </span>
        An English lab, not just a class
      </motion.p>

      <h1 className="text-left text-white">
        <RevealLine
          delay={0.12}
          className={`font-display leading-[1.02] tracking-[-0.065em] ${
            compact
              ? "text-[clamp(2.15rem,9vw,2.75rem)]"
              : "text-[clamp(2.55rem,4.2vw+0.9rem,4.25rem)]"
          }`}
        >
          English,
        </RevealLine>
        <RevealLine
          delay={0.4}
          className={`font-display leading-[1.02] tracking-[-0.065em] ${
            compact
              ? "mt-0.5 text-[clamp(1.85rem,8vw,2.4rem)]"
              : "mt-1 text-[clamp(2.2rem,3.6vw+0.75rem,3.7rem)]"
          }`}
        >
          taught live &
        </RevealLine>
        <RevealLine
          delay={0.54}
          className={`em-serif leading-[1.02] text-[#EFAA93] ${
            compact
              ? "mt-1 text-[clamp(1.85rem,8vw,2.4rem)]"
              : "mt-1.5 text-[clamp(2.2rem,3.6vw+0.75rem,3.7rem)]"
          }`}
        >
          <AccentUnderline>Put to work.</AccentUnderline>
        </RevealLine>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease }}
        className={`text-left font-normal tracking-[-0.01em] text-white/78 ${
          compact
            ? "mt-3 max-w-[36ch] text-[14px] leading-[1.55]"
            : "mt-5 max-w-xl text-[16px] leading-[1.65] md:text-[1.05rem] md:leading-[1.7]"
        }`}
      >
        A real classroom for grammar, writing and speaking. Learn the rule,
        practise it, get corrected, and leave every lesson a little more
        confident.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.84, ease }}
        className={`flex ${
          compact
            ? "mt-4 flex-col items-stretch gap-2.5"
            : "mt-5 flex-row flex-wrap items-center gap-3.5"
        }`}
      >
        <a
          href="#free-lessons"
          className={`inline-flex items-center gap-2 rounded-full bg-[#EFAA93] font-semibold text-[#152F29] shadow-[0_12px_28px_-12px_rgba(239,170,147,0.65)] transition hover:-translate-y-0.5 hover:bg-[#F2BAA1] ${
            compact
              ? "min-h-11 justify-center px-6 py-3 text-[15px]"
              : "min-h-11 justify-start px-6 py-3 text-[15px]"
          }`}
        >
          Browse free lessons
          <ArrowIcon className="h-4 w-4" />
        </a>
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-flex shrink-0 overflow-hidden rounded-[7px] transition hover:-translate-y-0.5 ${
            compact
              ? "mx-auto h-[46px] w-[min(100%,190px)]"
              : "h-[46px] w-[190px]"
          }`}
          aria-label="Get it on Google Play"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={646}
            height={250}
            className="absolute top-1/2 left-1/2 h-[100px] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
          />
        </a>
      </motion.div>
    </div>
  );
}

function HeroStats({ compact = false }: { compact?: boolean }) {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1, ease }}
      className={`border-t border-white/15 text-left ${
        compact
          ? "mt-0 grid grid-cols-3 gap-3 pt-4"
          : "mt-7 grid max-w-xl grid-cols-3 gap-5 pt-5"
      }`}
    >
      {stats.map(([value, label], index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.05 + index * 0.1, ease }}
          className={`flex min-w-0 ${
            compact ? "flex-col gap-0.5" : "items-center gap-2"
          }`}
        >
          <dt
            className={`font-display tracking-[-0.04em] text-white ${
              compact ? "text-[1.35rem]" : "shrink-0 text-[1.5rem]"
            }`}
          >
            {value}
          </dt>
          <dd
            className={`leading-[1.3] text-white/68 ${
              compact
                ? "max-w-[5.5rem] text-[10px]"
                : "max-w-[5.5rem] text-[11px]"
            }`}
          >
            {label}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}

function HeroMobile() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 pb-5 pt-2 lg:hidden">
      <HeroCopy compact />
      <div className="relative my-3 flex items-center justify-center py-2">
        <HeroVisual compact />
      </div>
      <HeroStats compact />
    </div>
  );
}

function HeroDesktop() {
  return (
    <div className="relative z-10 mx-auto hidden w-full max-w-7xl flex-1 items-center px-8 py-8 md:px-10 lg:flex lg:px-8 lg:py-10 xl:px-10">
      <div className="relative z-10 w-[min(100%,42rem)] pr-6 xl:w-[min(100%,46rem)] xl:pr-8">
        <HeroCopy />
        <HeroStats />
      </div>
    </div>
  );
}

function HeroParrotFlight() {
  const [play, setPlay] = useState(false);
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    // Defer one frame so CSS animation always starts on the client
    const raf = window.requestAnimationFrame(() => setPlay(true));
    // Safety: never leave the parrot invisible if animation is skipped
    const fallback = window.setTimeout(() => setIdle(true), 2300);
    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute top-[2%] -right-[8%] z-[6] hidden h-[28rem] w-[28rem] lg:block xl:top-[0%] xl:-right-[6%] xl:h-[32rem] xl:w-[32rem]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`relative h-[72%] w-[72%] ${
            idle ? "hero-parrot-idle" : play ? "hero-parrot-fly" : "hero-parrot-start"
          }`}
          onAnimationEnd={(event) => {
            if (event.animationName === "hero-parrot-swoop") setIdle(true);
          }}
        >
          <Image
            src="/hero-parrot.png"
            alt=""
            fill
            unoptimized
            priority
            sizes="360px"
            className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.38)]"
          />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex w-full flex-col overflow-hidden bg-[#152F29] min-h-[38rem] sm:min-h-[40rem] lg:min-h-[46rem] lg:h-[min(46rem,86vh)] xl:min-h-[48rem] xl:h-[min(48rem,84vh)]"
    >
      {/* Atmosphere + fixed bg drawing (does not move with SVGs) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_78%_55%,rgba(239,170,147,0.14),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_12%_40%,rgba(194,215,186,0.08),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Soft left drawing */}
        <span
          className="absolute top-[18%] -left-[16%] hidden h-[18rem] w-[18rem] rounded-full opacity-60 lg:block"
          style={{
            border: "1px solid rgba(194, 215, 186, 0.18)",
            boxShadow:
              "0 0 0 1.5rem rgba(194, 215, 186, 0.1), 0 0 0 3.1rem rgba(194, 215, 186, 0.06)",
          }}
        />

        {/* Main right concentric drawing — stays pinned to the section */}
        <span
          className="absolute top-[2%] -right-[8%] hidden h-[28rem] w-[28rem] rounded-full lg:block xl:top-[0%] xl:-right-[6%] xl:h-[32rem] xl:w-[32rem]"
          style={{
            border: "1px solid rgba(194, 215, 186, 0.45)",
            boxShadow:
              "0 0 0 2rem rgba(194, 215, 186, 0.28), 0 0 0 4.25rem rgba(194, 215, 186, 0.15)",
          }}
        />
      </div>

      <HeroParrotFlight />

      {/* Desktop portrait cluster — can shift left without moving the drawing */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[min(46vw,36rem)] translate-x-[calc(-18rem-12%)] lg:block xl:w-[min(44vw,40rem)] xl:translate-x-[calc(-20rem-12%)]">
        <div className="absolute inset-x-0 bottom-0 top-14">
          <HeroVisual />
        </div>
      </div>

      <div className="shrink-0 pt-[env(safe-area-inset-top)]" aria-hidden>
        <div className="h-14 sm:h-16 lg:h-[4.25rem]" />
      </div>

      <HeroMobile />
      <HeroDesktop />
    </section>
  );
}

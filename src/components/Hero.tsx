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

/**
 * One proportional stage: peach + man + parrot + rings.
 * Every layer is % of this box, so the composition stays identical
 * from phone → XL — only the stage width changes.
 */
function HeroVisual({ mode }: { mode: "stack" | "aside" }) {
  const stack = mode === "stack";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, delay: 0.28, ease }}
      className={`relative w-full ${
        stack ? "mx-auto max-w-[22rem] sm:max-w-[26rem]" : "max-w-none"
      }`}
    >
      <div className="hero-visual-stage relative w-full overflow-visible">
        {/* Rings — upper right; nested so spread scales with the stage */}
        <span
          aria-hidden
          className={`hero-visual-rings pointer-events-none absolute top-[-6%] right-[-18%] z-0 aspect-square w-[72%] ${
            stack ? "opacity-55" : ""
          }`}
        />

        {/* Parrot — far right of the man */}
        <div className="pointer-events-none absolute top-[1%] right-[-10%] z-[3] aspect-square w-[58%]">
          {stack ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.48, ease }}
              className="absolute inset-[4%] -rotate-[7deg]"
            >
              <Image
                src="/hero-parrot.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 640px) 180px, 280px"
                className="object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
              />
            </motion.div>
          ) : (
            <HeroParrotFlight />
          )}
        </div>

        {/* Peach pedestal */}
        <motion.div
          aria-hidden
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="absolute bottom-0 left-[6%] z-0 aspect-square w-[78%] translate-y-[38%] rounded-full bg-[#EFAA93]"
        />

        {/* Portrait — zoomed; overflow visible so the head is never clipped */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease }}
          className="absolute bottom-0 left-[8%] z-[2] h-[96%] w-[76%] overflow-visible"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Mascot/Pic.svg"
            alt="xSEL instructor"
            className="absolute inset-0 h-full w-full origin-bottom translate-y-[34%] scale-[1.78] object-contain object-bottom drop-shadow-[0_16px_28px_rgba(0,0,0,0.28)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function HeroCopy() {
  return (
    <div className="min-w-0 w-full max-w-[40rem]">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="mb-3 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#EFAA93]/35 bg-[#EFAA93]/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#F5D4C4] uppercase backdrop-blur-[2px] sm:mb-4 sm:px-3.5 sm:text-[11px]"
      >
        <span aria-hidden className="text-[#EFAA93]">
          *
        </span>
        An English lab, not just a class
      </motion.p>

      <h1 className="text-left text-white">
        <RevealLine
          delay={0.12}
          className="font-display text-[clamp(2.15rem,6.2vw+0.6rem,4.25rem)] leading-[1.02] tracking-[-0.065em]"
        >
          English,
        </RevealLine>
        <RevealLine
          delay={0.4}
          className="mt-0.5 font-display text-[clamp(1.85rem,5.2vw+0.55rem,3.7rem)] leading-[1.02] tracking-[-0.065em] sm:mt-1"
        >
          taught live &
        </RevealLine>
        <RevealLine
          delay={0.54}
          className="em-serif mt-1 text-[clamp(1.85rem,5.2vw+0.55rem,3.7rem)] leading-[1.02] text-[#EFAA93] sm:mt-1.5"
        >
          <AccentUnderline>Put to work.</AccentUnderline>
        </RevealLine>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease }}
        className="mt-3 max-w-[40ch] text-left text-[14px] leading-[1.55] font-normal tracking-[-0.01em] text-white/78 sm:mt-5 sm:max-w-xl sm:text-[16px] sm:leading-[1.65] lg:text-[1.05rem] lg:leading-[1.7]"
      >
        A real classroom for grammar, writing and speaking. Learn the rule,
        practise it, get corrected, and leave every lesson a little more
        confident.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.84, ease }}
        className="mt-4 grid grid-cols-2 items-center gap-2.5 sm:mt-5 sm:flex sm:flex-row sm:flex-wrap sm:gap-3.5"
      >
        <a
          href="#free-lessons"
          className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full bg-[#EFAA93] px-3 py-2.5 text-[13px] font-semibold text-[#152F29] shadow-[0_12px_28px_-12px_rgba(239,170,147,0.65)] transition hover:-translate-y-0.5 hover:bg-[#F2BAA1] sm:w-auto sm:justify-start sm:gap-2 sm:px-6 sm:py-3 sm:text-[15px]"
        >
          Browse free lessons
          <ArrowIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
        </a>
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-[7px] transition hover:-translate-y-0.5 sm:h-[46px] sm:w-[190px]"
          aria-label="Get it on Google Play"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={646}
            height={250}
            className="absolute top-1/2 left-1/2 h-[96px] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[100px]"
          />
        </a>
      </motion.div>
    </div>
  );
}

function HeroStats() {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1, ease }}
      className="mt-0 grid max-w-xl grid-cols-3 gap-2.5 border-t border-white/15 pt-4 text-left sm:gap-5 sm:pt-5 lg:mt-7"
    >
      {stats.map(([value, label], index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.05 + index * 0.1, ease }}
          className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2"
        >
          <dt className="font-display text-[1.35rem] tracking-[-0.04em] text-white sm:shrink-0 sm:text-[clamp(1.2rem,2.4vw,1.5rem)]">
            {value}
          </dt>
          <dd className="max-w-[6rem] text-[11px] leading-[1.35] text-white/70 sm:max-w-[5.5rem] sm:text-[11px]">
            {label}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}

function HeroParrotFlight() {
  const [play, setPlay] = useState(false);
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setPlay(true));
    const fallback = window.setTimeout(() => setIdle(true), 2300);
    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className={`relative h-[88%] w-[88%] ${
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
          sizes="(min-width: 1280px) 280px, 220px"
          className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.38)]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex w-full flex-col overflow-hidden bg-[#152F29] lg:min-h-[min(86vh,48rem)]"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_12%_40%,rgba(194,215,186,0.06),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
        <span className="hero-visual-rings absolute top-[18%] -left-[16%] hidden w-[min(22vw,18rem)] opacity-40 lg:block" />
      </div>

      <div className="shrink-0 pt-[env(safe-area-inset-top)]" aria-hidden>
        <div className="h-14 sm:h-16 lg:h-[4.25rem]" />
      </div>

      {/* Fluid: stack below lg, side-by-side from lg — same visual stage either way */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-stretch gap-0 px-4 pb-6 pt-2 sm:gap-4 sm:px-6 sm:pb-8 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-[clamp(1rem,3vw,2.5rem)] lg:px-10 lg:pb-0 lg:pt-4">
        <div className="relative z-10 flex min-w-0 flex-col justify-center lg:pb-12">
          <HeroCopy />

          <div className="mt-5 lg:hidden">
            <div className="relative z-0 mx-auto flex w-full items-end justify-center overflow-visible">
              <HeroVisual mode="stack" />
            </div>
            <div className="relative z-10 mt-4 bg-[#152F29]">
              <HeroStats />
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroStats />
          </div>
        </div>

        <div className="pointer-events-none relative hidden w-full self-end lg:block lg:pb-0">
          <HeroVisual mode="aside" />
        </div>
      </div>
    </section>
  );
}

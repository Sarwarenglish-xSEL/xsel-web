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

function HeroVisual({ mode }: { mode: "stack" | "aside" }) {
  const stack = mode === "stack";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, delay: 0.28, ease }}
      className={`relative w-full ${
        stack
          ? "mx-auto max-w-[min(100%,20.5rem)] sm:max-w-[22.5rem]"
          : "h-full min-h-[22rem]"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          stack
            ? "aspect-[5/6] rounded-b-[1.25rem]"
            : "h-full min-h-[min(34rem,72vh)] xl:min-h-[min(38rem,74vh)]"
        }`}
      >
        {/* Drawing rings — behind the portrait */}
        {stack ? (
          <span
            aria-hidden
            className="pointer-events-none absolute top-[1%] right-[-8%] z-0 size-[clamp(9.5rem,48%,13.5rem)] rounded-full"
            style={{
              border: "1px solid rgba(194, 215, 186, 0.5)",
              boxShadow:
                "0 0 0 0.75rem rgba(194, 215, 186, 0.28), 0 0 0 1.55rem rgba(194, 215, 186, 0.15)",
            }}
          />
        ) : null}

        {/* Parrot — inside the rings, still behind the portrait */}
        {stack ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.48, ease }}
            className="pointer-events-none absolute top-[6%] right-[-2%] z-[1] size-[clamp(7rem,36%,10rem)] -rotate-[7deg]"
          >
            <Image
              src="/hero-parrot.png"
              alt=""
              fill
              unoptimized
              sizes="(max-width: 640px) 130px, 160px"
              className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
            />
          </motion.div>
        ) : null}

        {/* Warm glow */}
        <div
          aria-hidden
          className={`pointer-events-none absolute z-0 rounded-full bg-[#EFAA93]/30 blur-3xl ${
            stack
              ? "bottom-[-4%] left-[46%] size-[76%] -translate-x-1/2"
              : "bottom-0 left-[4%] size-[min(100%,34rem)] translate-y-1/2 xl:size-[min(108%,38rem)]"
          }`}
        />

        {/* Peach arch — mobile pedestal */}
        <motion.div
          aria-hidden
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className={`absolute z-0 rounded-full bg-[#EFAA93] shadow-[0_18px_36px_-16px_rgba(0,0,0,0.3)] ${
            stack
              ? "bottom-[-36%] left-[46%] size-[88%] -translate-x-1/2"
              : "bottom-0 left-[2%] size-[min(98%,36rem)] translate-y-1/2 xl:left-[4%] xl:size-[min(104%,40rem)]"
          }`}
        />

        {/* Portrait — centered on the peach arch */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease }}
          className={`absolute z-[2] ${
            stack
              ? "bottom-0 left-[46%] h-[90%] w-[90%] -translate-x-1/2"
              : "right-[4%] bottom-0 h-[90%] w-[88%] xl:right-[6%] xl:w-[86%]"
          }`}
        >
          <Image
            src="/hero-portrait.png"
            alt="xSEL instructor"
            fill
            priority
            unoptimized
            sizes="(max-width: 1023px) 300px, (max-width: 1280px) 360px, 440px"
            className="object-contain object-bottom drop-shadow-[0_24px_44px_rgba(0,0,0,0.42)]"
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
    <div className="pointer-events-none absolute top-[4%] right-[-4%] z-[6] hidden size-[clamp(16rem,34vw,32rem)] lg:block xl:top-[1%] xl:right-[-2%]">
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
            sizes="(max-width: 1280px) 280px, 360px"
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
      className="relative flex w-full flex-col overflow-hidden bg-[#152F29] lg:min-h-[min(86vh,46rem)] xl:min-h-[min(84vh,48rem)]"
    >
      {/* Atmosphere + fixed bg drawing */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_78%_55%,rgba(239,170,147,0.14),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_12%_40%,rgba(194,215,186,0.08),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/20 to-transparent" />

        <span
          className="absolute top-[18%] -left-[16%] hidden size-[clamp(14rem,22vw,18rem)] rounded-full opacity-60 lg:block"
          style={{
            border: "1px solid rgba(194, 215, 186, 0.18)",
            boxShadow:
              "0 0 0 1.5rem rgba(194, 215, 186, 0.1), 0 0 0 3.1rem rgba(194, 215, 186, 0.06)",
          }}
        />

        <span
          className="absolute top-[4%] right-[-4%] hidden size-[clamp(16rem,34vw,32rem)] rounded-full lg:block xl:top-[1%] xl:right-[-2%]"
          style={{
            border: "1px solid rgba(194, 215, 186, 0.45)",
            boxShadow:
              "0 0 0 2rem rgba(194, 215, 186, 0.28), 0 0 0 4.25rem rgba(194, 215, 186, 0.15)",
          }}
        />
      </div>

      <HeroParrotFlight />

      <div className="shrink-0 pt-[env(safe-area-inset-top)]" aria-hidden>
        <div className="h-14 sm:h-16 lg:h-[4.25rem]" />
      </div>

      {/* Fluid layout: stack below lg, side-by-side from lg up */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-stretch gap-0 px-4 pb-6 pt-2 sm:gap-4 sm:px-6 sm:pb-8 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(17rem,0.95fr)] lg:items-end lg:gap-6 lg:px-8 lg:pb-0 lg:pt-4 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,1fr)] xl:gap-8 xl:px-10">
        <div className="relative z-10 flex min-w-0 flex-col justify-center lg:pb-10 xl:pb-12">
          <HeroCopy />

          {/* Mobile / tablet visual — contained composition, no clip */}
          <div className="mt-5 lg:hidden">
            <div className="relative mx-auto flex w-full items-end justify-center">
              <HeroVisual mode="stack" />
            </div>
            <div className="mt-4">
              <HeroStats />
            </div>
          </div>

          {/* Desktop stats under copy */}
          <div className="hidden lg:block">
            <HeroStats />
          </div>
        </div>

        <div className="pointer-events-none relative hidden min-h-[min(34rem,72vh)] self-stretch lg:block xl:min-h-[min(38rem,74vh)] xl:px-1">
          <HeroVisual mode="aside" />
        </div>
      </div>
    </section>
  );
}

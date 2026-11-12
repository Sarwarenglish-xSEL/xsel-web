"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";

/** Mobile auth header — parrot stage instead of photo slides. */
export function AuthMobileBackdrop({
  children,
  compact = false,
}: {
  children?: ReactNode;
  compact?: boolean;
}) {
  const heightClass = compact
    ? "h-[28dvh] min-h-[10.5rem] max-h-[15rem]"
    : "min-h-[42dvh]";

  return (
    <div className={`relative isolate overflow-hidden bg-[#0c1a16] lg:hidden ${heightClass}`}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 55% 45%, rgba(239,170,147,0.18) 0%, transparent 55%), radial-gradient(ellipse 80% 70% at 40% 70%, rgba(45,110,90,0.35) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="login-parrot-float absolute inset-x-0 bottom-0 top-2">
        <Image
          src="/enroll-parrot.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-contain object-bottom opacity-95"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,16,14,0.45) 0%, rgba(21,47,41,0.15) 40%, rgba(21,47,41,0.88) 100%)",
        }}
        aria-hidden
      />

      <Link
        href="/"
        className="absolute top-[max(0.75rem,env(safe-area-inset-top))] left-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md sm:h-10 sm:w-10"
        aria-label="Back to home"
      >
        <ArrowIcon className="h-3.5 w-3.5 -scale-x-100" />
      </Link>

      {children ? (
        <div
          className={`relative z-10 flex h-full flex-col justify-end px-5 ${
            compact ? "pb-7 pt-12" : "min-h-[42dvh] pb-10 pt-16"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

/** Desktop left panel — parrot mascot on a quiet stage. */
export function AuthSideSlideshow() {
  return (
    <aside className="relative hidden overflow-hidden bg-[#0a1612] lg:flex lg:w-[46%] xl:w-[48%]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 42%, rgba(239,170,147,0.16) 0%, transparent 58%), radial-gradient(ellipse 90% 70% at 48% 78%, rgba(21,47,41,0.9) 0%, transparent 65%), linear-gradient(165deg, #0c1a16 0%, #152F29 48%, #0a1411 100%)",
        }}
        aria-hidden
      />

      {/* Soft stage rings behind the parrot */}
      <div
        className="pointer-events-none absolute top-[44%] left-1/2 h-[min(68vw,500px)] w-[min(68vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EFAA93]/12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[44%] left-1/2 h-[min(84vw,620px)] w-[min(84vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
        aria-hidden
      />

      <div className="login-parrot-float absolute inset-x-[-6%] inset-y-[-2%] xl:inset-x-[-4%] xl:inset-y-[-4%]">
        <Image
          src="/enroll-parrot.png"
          alt="xSEL parrot mascot"
          fill
          priority
          unoptimized
          sizes="56vw"
          className="scale-[1.18] object-contain object-center xl:scale-[1.22]"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#0a1411] via-[#0a1411]/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

      <Link
        href="/"
        className="absolute top-7 left-7 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white shadow-lg backdrop-blur-md transition hover:bg-black/45"
        aria-label="Back to home"
      >
        <ArrowIcon className="h-4 w-4 -scale-x-100" />
      </Link>

      <div className="absolute right-7 bottom-8 left-7 z-10">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-[#EFAA93] uppercase">
          Sarwar English Lab
        </p>
        <p className="mt-1.5 max-w-[18rem] text-[15px] leading-snug text-white/85">
          Learn English with clarity, confidence, and a little personality.
        </p>
      </div>
    </aside>
  );
}

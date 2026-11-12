"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { signInAction, signUpAction } from "@/app/actions/auth";
import { safeNextPath } from "@/lib/auth-redirect";
import { AuthMobileBackdrop, AuthSideSlideshow } from "./AuthSideSlideshow";
import { EyeIcon, EyeOffIcon } from "./Icons";

const GRID_COLS = 14;
const GRID_ROWS = 10;
const GRID_CELLS = Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => i);

function AuthFormGrid() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [hot, setHot] = useState<number | null>(null);
  const [near, setNear] = useState<Set<number>>(() => new Set());

  function reset() {
    setActive(false);
    setHot(null);
    setNear(new Set());
    setGlow({ x: 50, y: 50 });
    const el = sceneRef.current;
    if (!el) return;
    el.style.setProperty("--auth-gx", "50%");
    el.style.setProperty("--auth-gy", "50%");
    const plane = el.querySelector<HTMLElement>(".auth-grid-plane");
    if (plane) plane.style.transform = "rotateX(18deg) rotateY(0deg)";
  }

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = sceneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const gx = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const gy = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));

    setActive(true);
    setGlow({ x: gx * 100, y: gy * 100 });
    el.style.setProperty("--auth-gx", `${gx * 100}%`);
    el.style.setProperty("--auth-gy", `${gy * 100}%`);

    const plane = el.querySelector<HTMLElement>(".auth-grid-plane");
    if (plane) {
      const rotY = (gx - 0.5) * 14;
      const rotX = 18 + (gy - 0.5) * -10;
      plane.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }

    const col = Math.min(GRID_COLS - 1, Math.max(0, Math.floor(gx * GRID_COLS)));
    const row = Math.min(GRID_ROWS - 1, Math.max(0, Math.floor(gy * GRID_ROWS)));
    const center = row * GRID_COLS + col;
    setHot(center);

    const next = new Set<number>();
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (r < 0 || c < 0 || r >= GRID_ROWS || c >= GRID_COLS) continue;
        const idx = r * GRID_COLS + c;
        if (idx !== center) next.add(idx);
      }
    }
    setNear(next);
  }

  return (
    <div
      ref={sceneRef}
      className={`auth-grid-scene pointer-events-auto absolute inset-0 z-0 ${active ? "is-active" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      aria-hidden
    >
      <div
        className="auth-grid-plane"
        style={{ transform: "rotateX(18deg) rotateY(0deg)" }}
      />
      <div className="auth-grid-cells" style={{ transformStyle: "preserve-3d" }}>
        {GRID_CELLS.map((i) => (
          <div
            key={i}
            className={`auth-grid-cell${i === hot ? " is-hot" : near.has(i) ? " is-near" : ""}`}
          />
        ))}
      </div>
      <div
        className="auth-grid-glow"
        style={{ left: `${glow.x}%`, top: `${glow.y}%` }}
      />
    </div>
  );
}

type AuthMode = "login" | "signup";

const fieldClass =
  "w-full rounded-[10px] border border-[#d9e2d8] bg-[#F3F7F0] px-3.5 py-2.5 text-[14px] leading-none text-ink outline-none transition-all duration-200 placeholder:text-ink/30 hover:border-[#c5d4c4] focus:border-[#152F29]/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(21,47,41,0.1)] sm:rounded-[12px] sm:px-4 sm:py-[11px] sm:text-[14px]";

const ease = [0.22, 1, 0.36, 1] as const;

export function LoginPage({
  initialMode = "login",
}: {
  initialMode?: AuthMode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered") === "1";
  const confirmEmail = searchParams.get("confirm") === "1";
  const loginRequired = searchParams.get("required") === "1";
  const nextPath = safeNextPath(searchParams.get("next"));

  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeTerms: false,
  });

  const isLogin = mode === "login";

  function switchMode(next: AuthMode) {
    setMode(next);
    setError(null);
    setInfo(null);
    setShowPassword(false);
    setShowConfirmPassword(false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (isLogin) {
      setLoading(true);
      try {
        const result = await signInAction(formData.email, formData.password);
        if (!result.ok) {
          setError(result.message);
          return;
        }
        router.push(nextPath);
        router.refresh();
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);
    try {
      const result = await signUpAction(
        formData.email,
        formData.password,
        formData.name,
      );

      if (!result.ok) {
        setError(result.message);
        return;
      }

      if (result.needsEmailConfirmation) {
        setMode("login");
        setInfo("Check your email to confirm your account, then sign in.");
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const alerts = (
    <>
      {isLogin && loginRequired ? (
        <p className="mb-3 rounded-[10px] border border-[#e8d59a] bg-[#fff8e6] px-3 py-2 text-[12px] leading-4 text-[#8a6d1a] sm:text-[13px] sm:leading-5">
          Sign in to enroll in paid courses. New here? Create an account first.
        </p>
      ) : null}

      {isLogin && registered ? (
        <p className="mb-3 rounded-[10px] border border-forest/20 bg-forest/5 px-3 py-2 text-[12px] leading-4 text-forest sm:text-[13px] sm:leading-5">
          Account created. You can sign in now.
        </p>
      ) : null}

      {isLogin && confirmEmail ? (
        <p className="mb-3 rounded-[10px] border border-forest/20 bg-forest/5 px-3 py-2 text-[12px] leading-4 text-forest sm:text-[13px] sm:leading-5">
          Check your email to confirm your account, then sign in.
        </p>
      ) : null}

      {info ? (
        <p className="mb-3 rounded-[10px] border border-forest/20 bg-forest/5 px-3 py-2 text-[12px] leading-4 text-forest sm:text-[13px] sm:leading-5">
          {info}
        </p>
      ) : null}

      {error ? (
        <p className="mb-3 rounded-[10px] border border-red-200 bg-red-50 px-3 py-2 text-[12px] leading-4 text-red-700 sm:text-[13px] sm:leading-5">
          {error}
        </p>
      ) : null}
    </>
  );

  const formFields = (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      {isLogin ? (
        <>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-[12px] font-medium tracking-wide text-ink/55"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              autoComplete="email"
              className={fieldClass}
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-[12px] font-medium tracking-wide text-ink/55"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                className={`${fieldClass} pr-11`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-ink/35 transition hover:bg-ink/[0.04] hover:text-ink/70"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-[12px] font-medium tracking-wide text-ink/55"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                autoComplete="name"
                className={fieldClass}
                required
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-[12px] font-medium tracking-wide text-ink/55"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={fieldClass}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-[12px] font-medium tracking-wide text-ink/55"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className={`${fieldClass} pr-11`}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-ink/35 transition hover:bg-ink/[0.04] hover:text-ink/70"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <label
                htmlFor="confirmPassword"
                className="block text-[12px] font-medium tracking-wide text-ink/55"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  className={`${fieldClass} pr-11`}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-ink/35 transition hover:bg-ink/[0.04] hover:text-ink/70"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {isLogin ? (
        <div className="flex items-center justify-between gap-3">
          <label className="group flex cursor-pointer items-center gap-2 text-[12px] text-ink/50">
            <span className="relative flex h-4 w-4 items-center justify-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
              />
              <span className="h-4 w-4 rounded-[4px] border border-[#c8d3e6] bg-white transition peer-checked:border-forest peer-checked:bg-forest" />
              <svg
                className="pointer-events-none absolute h-2 w-2 text-white opacity-0 transition peer-checked:opacity-100"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2.5 6.2 4.8 8.5 9.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="transition group-hover:text-ink/70">Remember me</span>
          </label>

          <button
            type="button"
            className="text-[12px] font-semibold text-forest underline decoration-forest/20 underline-offset-[3px] transition hover:decoration-forest"
          >
            Forgot password?
          </button>
        </div>
      ) : (
        <label className="group flex cursor-pointer items-start gap-2 text-[11px] leading-4 text-ink/50 sm:text-[12px] sm:leading-5">
          <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
              required
            />
            <span className="h-4 w-4 rounded-[4px] border border-[#c8d3e6] bg-white transition peer-checked:border-forest peer-checked:bg-forest" />
            <svg
              className="pointer-events-none absolute h-2 w-2 text-white opacity-0 transition peer-checked:opacity-100"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M2.5 6.2 4.8 8.5 9.5 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            I agree to the{" "}
            <span className="font-semibold text-forest">Terms</span> and{" "}
            <span className="font-semibold text-forest">Privacy Policy</span>
          </span>
        </label>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex h-11 w-full items-center justify-center rounded-full bg-[#152F29] text-[14px] font-semibold tracking-[0.01em] text-white shadow-[0_12px_24px_-12px_rgba(21,47,41,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a3d35] active:translate-y-0 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
      >
        {loading
          ? isLogin
            ? "Signing in…"
            : "Creating account…"
          : isLogin
            ? "Sign in"
            : "Create account"}
      </button>
    </form>
  );

  const switchPrompt = (
    <p className="mx-auto w-fit rounded-full border border-[#e6e6d9]/90 bg-[#FFFCF6]/95 px-4 py-2 text-center text-[13px] leading-5 text-[#152F29]/75 shadow-[0_8px_20px_-12px_rgba(21,47,41,0.28)] backdrop-blur-sm">
      {isLogin ? (
        <>
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={() => switchMode("signup")}
            className="font-semibold text-[#152F29] underline decoration-[#152F29]/30 underline-offset-[3px] transition hover:decoration-[#152F29]"
          >
            Sign up
          </button>
        </>
      ) : (
        <>
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => switchMode("login")}
            className="font-semibold text-[#152F29] underline decoration-[#152F29]/30 underline-offset-[3px] transition hover:decoration-[#152F29]"
          >
            Sign in
          </button>
        </>
      )}
    </p>
  );

  const cardBody = (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease }}
      >
        {alerts}
        {formFields}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="flex h-dvh max-h-dvh w-full overflow-hidden bg-[#FFFCF6]">
      <AuthSideSlideshow />

      {/* —— Mobile —— */}
      <div className="flex h-dvh max-h-dvh w-full flex-col overflow-hidden bg-[#152F29] lg:hidden">
        <div className="relative shrink-0">
          <Image
            src="/app_logo.png"
            alt="Sarwar English Lab"
            width={56}
            height={56}
            priority
            unoptimized
            className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-4 z-20 h-9 w-9 rounded-[9px] object-contain shadow-[0_8px_20px_-8px_rgba(0,0,0,0.55)] ring-1 ring-white/30"
          />
          <AuthMobileBackdrop compact>
            <div className="flex flex-col items-start text-left">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[#EFAA93] uppercase">
                Sarwar English Lab
              </p>
              <h1 className="font-display mt-1 text-[1.55rem] leading-[1.08] tracking-tight text-white">
                {isLogin ? "Welcome back" : "Create account"}
              </h1>
            </div>
          </AuthMobileBackdrop>
        </div>

        <div className="relative z-10 -mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-[24px] bg-[#FFFCF6] px-5 pt-5 pb-[max(0.85rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.35)]">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {cardBody}
            <div className="mt-4">{switchPrompt}</div>
          </div>
        </div>
      </div>

      {/* —— Desktop —— */}
      <main className="relative hidden h-dvh max-h-dvh flex-1 items-center justify-center overflow-hidden bg-[#FFFCF6] px-6 py-3 lg:flex xl:px-10">
        <AuthFormGrid />

        <div
          className={`relative z-10 mx-auto flex w-full flex-col justify-center ${
            isLogin ? "max-w-[min(100%,400px)]" : "max-w-[min(100%,520px)]"
          }`}
        >
          <div className="overflow-hidden rounded-[22px] border border-[#e6e6d9] bg-white/96 shadow-[0_20px_50px_-24px_rgba(21,47,41,0.3),0_6px_16px_-10px_rgba(21,47,41,0.1)] backdrop-blur-[2px]">
            <div className="bg-gradient-to-b from-[#1a3d35] to-[#152F29] px-6 pt-4 pb-3.5 sm:px-7">
              <div className="mx-auto flex h-11 w-11 items-center justify-center overflow-hidden rounded-[11px] bg-white/95 shadow-[0_8px_18px_-10px_rgba(0,0,0,0.45)] ring-1 ring-white/30">
                <Image
                  src="/app_logo.png"
                  alt="Sarwar English Lab"
                  width={44}
                  height={44}
                  priority
                  unoptimized
                  className="h-9 w-9 object-contain"
                />
              </div>
              <p className="mt-2.5 text-center text-[10px] font-semibold tracking-[0.18em] text-[#EFAA93] uppercase">
                Sarwar English Lab
              </p>
              <h1 className="font-display mt-1 text-center text-[1.55rem] leading-[1.1] tracking-tight text-white">
                {isLogin ? "Welcome back" : "Create account"}
              </h1>
            </div>

            <div className="px-6 py-4 sm:px-7 sm:py-5">{cardBody}</div>
          </div>

          <div className="mt-3 shrink-0">{switchPrompt}</div>
        </div>
      </main>
    </div>
  );
}

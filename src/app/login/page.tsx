"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const result = await signIn("credentials", {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      password: (form.elements.namedItem("password") as HTMLInputElement).value,
      redirect: false,
    });
    if (result?.error) {
      setError("Invalid email or password.");
      setLoading(false);
    } else {
      // Force session update to ensure session is ready
      await update();
      // Always redirect to dashboard - role-based content handled internally
      router.push("/dashboard");
    }
  }

  return (
    <div className="login-wrap">
      {/* LEFT */}
      <div className="login-left">
        <div className="flex items-center gap-2 mb-6">
          <a
            href="/"
            className="w-fit cursor-pointer flex items-center gap-[11px]"
          >
            <span className="c-icon flex! w-[12px]" data-astro-cid-nw4aqlt6>
              <svg
                width="1em"
                height="1em"
                className="svg-arrowAlt"
                aria-hidden="true"
                focusable="false"
                data-astro-cid-nw4aqlt6="true"
                data-icon="arrowAlt"
              >
                <symbol id="ai:local:arrowAlt" viewBox="0 0 12 12">
                  <path
                    fill="none"
                    stroke="#141415"
                    strokeLinecap="square"
                    strokeWidth="2"
                    d="M11 6H2m0 0 3.808-3.808M2 6l3.808 3.808"
                  />
                </symbol>
                <use href="#ai:local:arrowAlt" />
              </svg>
            </span>
            <span className="c-text-body font-medium">Home</span>
          </a>
        </div>

        <h1 className="text-[26px] font-medium text-[#111] m-0 mb-1">
          Welcome back
        </h1>
        <p className="text-[13px] text-[#999] m-0 mb-5">
          Sign in to access your workspace.
        </p>

        {error && (
          <p className="text-[13px] text-red-600 bg-red-50 px-3.5 py-2.5 rounded-lg mb-5">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
          <div className="flex flex-col">
            <label className="text-[11px] font-medium tracking-widest text-[#aaa] uppercase mb-[7px]">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="border border-[#e5e5e5] rounded-lg px-[11px] py-[13px] text-[13px] text-[#111] outline-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-[7px]">
              <label className="text-[11px] font-medium tracking-widest text-[#aaa] uppercase">
                Password
              </label>
              <a href="#" className="text-[11px] text-[#aaa] no-underline">
                Forgot password?
              </a>
            </div>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="border border-[#e5e5e5] rounded-lg px-[11px] py-[13px] text-[13px] text-[#111] outline-none w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#111] text-white border-none rounded-full py-[11px] text-[13px] font-medium cursor-pointer mt-2 w-full disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="text-[11px] text-[#bbb] text-center mt-3">
          Don't have an account?{" "}
          <a href="#" className="text-[#777] font-medium no-underline">
            Request access
          </a>
        </p>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a002b]" />

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.22]"
          viewBox="0 0 500 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="420" cy="80" r="180" fill="none" stroke="#fff" strokeWidth="0.6" />
          <circle cx="420" cy="80" r="120" fill="none" stroke="#fff" strokeWidth="0.6" />
          <circle cx="420" cy="80" r="60" fill="none" stroke="#fff" strokeWidth="0.6" />
          <circle cx="80" cy="500" r="220" fill="none" stroke="#fff" strokeWidth="0.6" />
          <circle cx="80" cy="500" r="140" fill="none" stroke="#fff" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="500" y2="600" stroke="#fff" strokeWidth="0.4" />
          <line x1="500" y1="0" x2="0" y2="600" stroke="#fff" strokeWidth="0.4" />
          <line x1="250" y1="0" x2="250" y2="600" stroke="#fff" strokeWidth="0.4" />
          <line x1="0" y1="300" x2="500" y2="300" stroke="#fff" strokeWidth="0.4" />
          <rect x="160" y="200" width="180" height="180" fill="none" stroke="#fff" strokeWidth="0.6" transform="rotate(45 250 290)" />
        </svg>

        <div className="absolute top-7 right-7 w-[46px] h-[46px] rounded-full bg-white/[0.08] border border-white/[0.13] flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-full bg-white/55" />
        </div>

        <div className="relative z-10">
          <div className="flex gap-2 mb-[18px] flex-wrap">
            {["Analytics", "Reports", "Team"].map((tag) => (
              <span
                key={tag}
                className="bg-white/[0.09] border border-white/[0.14] rounded-lg px-3 py-[5px] text-[11px] text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[20px] font-medium text-white leading-[1.45] m-0 mb-2">
            Everything your team needs,
            <br />
            in one place.
          </p>
          <p className="text-[12px] text-white/40">Streamlined. Secure. Yours.</p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Mail, Shield, Sparkles } from 'lucide-react';

export const SignIn: React.FC = () => {
  const [showNoAccountMessage, setShowNoAccountMessage] = React.useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)]">
      <div className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 py-10 md:px-10">
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-[36px] border border-white/70 bg-white/88 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative hidden overflow-hidden bg-text-primary px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.42),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_32%)]" />
            <div className="relative">
              <Link to="/" className="brand-wordmark text-[30px] text-white">
                Cognivo<span className="text-sky-300">.ai</span>
              </Link>
              <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-100">
                <Sparkles className="h-3.5 w-3.5" />
                Staffing Intelligence
              </div>
              <h1 className="mt-8 max-w-[420px] text-[52px] font-display font-medium leading-[0.96] tracking-tight text-white">
                Sign in to the Cognivo workspace.
              </h1>
              <p className="mt-6 max-w-[430px] text-[18px] leading-relaxed text-slate-300">
                Access your staffing visibility dashboard, search coverage insights, published pages, and inbound lead activity from one place.
              </p>
            </div>

            <div className="relative grid gap-4">
              {[
                'Track which staffing pages are pulling in high-intent demand',
                'See where hiring managers are discovering your firm on AI platforms',
                'Monitor trust signals, coverage gaps, and new inbound opportunities',
              ].map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-4 text-[15px] text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="mx-auto w-full max-w-[440px]">
              <div className="flex items-center justify-between">
                <Link to="/" className="brand-wordmark text-[26px] lg:hidden">
                  Cognivo<span className="text-accent">.ai</span>
                </Link>
                <Link to="/" className="text-[13px] font-semibold uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-accent">
                  Back home
                </Link>
              </div>

              <div className="mt-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  <Shield className="h-3.5 w-3.5" />
                  Secure Sign In
                </div>
                <h2 className="mt-6 text-[40px] font-display font-medium tracking-tight text-text-primary">
                  Welcome back
                </h2>
                <p className="mt-3 text-[17px] leading-relaxed text-text-secondary">
                  Enter your work email and password to access your Cognivo account.
                </p>
              </div>

              <form
                className="mt-10 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setShowNoAccountMessage(true);
                }}
              >
                <div className="space-y-2">
                  <label className="ml-1 text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                    Work Email
                  </label>
                  <div className="flex h-14 items-center gap-3 rounded-[20px] border border-border-subtle bg-bg-surface px-4">
                    <Mail className="h-5 w-5 text-text-muted" />
                    <input
                      type="email"
                      required
                      className="h-full w-full bg-transparent text-[16px] text-text-primary outline-none placeholder:text-text-muted"
                      placeholder="name@agency.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="ml-1 text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                      Password
                    </label>
                    <button type="button" className="text-[13px] font-medium text-accent transition-colors hover:text-accent/80">
                      Forgot password?
                    </button>
                  </div>
                  <div className="flex h-14 items-center gap-3 rounded-[20px] border border-border-subtle bg-bg-surface px-4">
                    <Lock className="h-5 w-5 text-text-muted" />
                    <input
                      type="password"
                      required
                      className="h-full w-full bg-transparent text-[16px] text-text-primary outline-none placeholder:text-text-muted"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-accent text-[16px] font-bold text-white transition-all hover:bg-accent/90"
                >
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {showNoAccountMessage && (
                <div className="mt-5 rounded-[22px] border border-amber-200 bg-amber-50 px-5 py-4 text-[15px] leading-relaxed text-amber-900">
                  You don&apos;t have an account. Join the waitlist. We will let you know.
                </div>
              )}

              <div className="mt-8 rounded-[24px] border border-border-subtle bg-white px-5 py-4 shadow-sm">
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  Looking for access? Cognivo is currently onboarding staffing agencies in batches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

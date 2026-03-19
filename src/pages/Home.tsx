import React from 'react';
import { PlatformLogoRotator } from '@/src/components/PlatformLogoRotator';
import { Section, Reveal } from '@/src/components/Section';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Zap, Target, Search, BarChart3, Shield, Globe, Users } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* HERO SECTION */}
      <Section background="grid" className="pt-4 pb-28 md:pt-10 md:pb-36">
        <div className="max-w-[1240px] mx-auto min-h-[calc(100vh-6.5rem)] flex flex-col justify-center text-center relative">
          <div className="pointer-events-none absolute left-1/2 top-2 h-72 w-72 -translate-x-[145%] rounded-full bg-accent/18 blur-3xl" />
          <div className="pointer-events-none absolute right-1/2 top-16 h-80 w-80 translate-x-[138%] rounded-full bg-sky-400/12 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-48 w-[620px] rounded-full bg-gradient-to-r from-accent/10 via-sky-400/10 to-accent/5 blur-3xl" />
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent text-[13px] font-bold mb-12 rounded-full tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Inbound Demand for Staffing Firms</span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-[56px] md:text-[82px] lg:text-[92px] font-display font-medium text-text-primary leading-[1.02] mb-12 tracking-tight">
              Your <span className="text-accent">agency&apos;s</span> operating <br />
              system for{' '}
              <PlatformLogoRotator />
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[20px] md:text-[24px] text-text-secondary mb-16 max-w-[920px] mx-auto leading-[1.6] font-medium text-balance">
              We help your staffing agency show up when hiring managers search on AI platforms. When your agency gets shown, you get more inbound leads.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <form
              action="https://formspree.io/f/mqakpjne"
              method="POST"
              className="mx-auto max-w-[820px] w-full"
            >
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
              <div className="flex flex-col sm:flex-row items-stretch gap-3 rounded-[30px] border border-accent/20 bg-white/88 p-3 shadow-[0_25px_80px_rgba(79,70,229,0.14)] backdrop-blur-xl ring-1 ring-white/70">
                <input
                  type="email"
                  name="email"
                  required
                  className="h-14 flex-1 rounded-[22px] border border-transparent bg-gradient-to-br from-bg-surface to-accent/5 px-5 text-[16px] text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent"
                  placeholder="Enter your business email"
                />
                <button
                  type="submit"
                  className="h-14 whitespace-nowrap rounded-[22px] bg-accent px-8 text-[16px] font-bold text-white shadow-xl shadow-accent/25 transition-all hover:scale-[1.01] hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/30"
                >
                  Get Early Access
                </button>
              </div>
              <p className="mt-7 text-[14px] font-medium text-text-muted">
                800+ staffing agencies have already registered for early access.
              </p>
            </form>
          </Reveal>

        </div>
      </Section>

      {/* THE SHIFT NARRATIVE */}
      <Section className="pt-10 pb-20 md:pt-12 md:pb-24 bg-text-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-[800px]">
            <Reveal>
              <h2 className="text-[48px] md:text-[72px] font-bold leading-[1] tracking-tight mb-8 md:mb-10">
                Hiring managers shortlist firms <br />
                <span className="font-display text-accent">before they ever reach out.</span>
              </h2>
              <p className="text-[20px] md:text-[26px] text-slate-400 leading-relaxed mb-10 md:mb-12 font-medium">
                Staffing buyers now use AI search tools to compare recruiting firms, specialty staffing partners, and executive search providers. If your site is not built around the roles, verticals, and locations they are asking about, you lose the conversation before your team even gets a call.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-accent font-bold text-[32px]">24/7</div>
                  <p className="text-slate-400 font-medium">Your site keeps attracting staffing demand while your recruiters are working live searches.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-accent font-bold text-[32px]">1 engine</div>
                  <p className="text-slate-400 font-medium">One system for service pages, vertical pages, geo pages, trust signals, and lead capture.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* THE ENGINE - 6 AGENTS */}
      <Section className="py-20 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-14 md:mb-16">
            <Reveal>
              <h2 className="text-[48px] md:text-[64px] font-bold text-text-primary mb-8 tracking-tight">
                How Cognivo helps <span className="font-display">staffing firms get found</span>
              </h2>
              <p className="text-[20px] text-text-secondary max-w-[700px] mx-auto font-medium">
                We do not sell generic SEO retainers. We build the specialty, location, service-line, and proof-point pages your staffing firm needs to get cited and recommended across AI search platforms.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Signal Core", desc: "Maps your staffing firm’s specialties, placements, geographies, proof points, and ideal client profile.", icon: <Users /> },
              { title: "Market Scout", desc: "Finds the actual searches hiring managers and talent leaders use when they need recruiting help.", icon: <Search /> },
              { title: "Story Forge", desc: "Creates service, vertical, city, and solution pages in language staffing buyers immediately understand.", icon: <Zap /> },
              { title: "Launchpad", desc: "Publishes and structures those pages so AI search platforms can crawl, index, and trust them quickly.", icon: <Globe /> },
              { title: "Trust Layer", desc: "Builds the signals that make your staffing firm look credible in competitive recruiting markets.", icon: <Shield /> },
              { title: "Growth Loop", desc: "Tracks which pages bring qualified reqs and doubles down on the searches that convert.", icon: <BarChart3 /> }
            ].map((agent, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bento-card p-10 h-full group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500">
                    {agent.icon}
                  </div>
                  <h3 className="text-[24px] font-bold text-text-primary mb-4 tracking-tight">{agent.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-medium">
                    {agent.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* THE RESULT - INBOUND LEADS */}
      <Section background="surface" className="py-20 md:py-24">
        <div className="container-custom">
          <div className="max-w-[1100px] mx-auto">
            <Reveal>
              <div className="text-center mb-14 md:mb-16">
                <h2 className="text-[48px] md:text-[64px] font-bold text-text-primary mb-8 leading-[1.1] tracking-tight">
                  The longer it runs, <br />
                  <span className="font-display text-accent">the stronger it gets.</span>
                </h2>
                <p className="text-[20px] text-text-secondary max-w-[760px] mx-auto leading-relaxed font-medium">
                  New niche pages go live, trust signals build up, old pages improve, and more hiring-manager searches point back to your firm. The result is a steadier stream of qualified inbound conversations.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
              <Reveal delay={100}>
                <div className="bento-card p-10 md:p-12 bg-white/90 shadow-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "Own high-intent searches around roles, specialties, and locations",
                      "Capture demand from ChatGPT, Claude, Perplexity, Gemini, and Grok",
                      "Build a long-term asset instead of renting attention with ads",
                      "Turn visibility into qualified staffing conversations your team can close"
                    ].map((item, i) => (
                      <div key={i} className="rounded-[28px] border border-black/5 bg-bg-surface p-6">
                        <div className="w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-5">
                          <Zap className="w-4 h-4" />
                        </div>
                        <p className="text-[18px] font-bold text-text-primary leading-relaxed tracking-tight">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-5">
                  {[
                    { value: "84", label: "Published pages live across niche, role, and geo searches" },
                    { value: "28", label: "Qualified inbound conversations generated from AI discovery" },
                    { value: "92%", label: "Coverage across your highest-intent search themes" }
                  ].map((stat, i) => (
                    <div key={i} className="rounded-[30px] border border-black/5 bg-white p-8 shadow-lg shadow-black/5">
                      <div className="text-[44px] md:text-[52px] font-display font-medium text-accent leading-none tracking-tight mb-3">
                        {stat.value}
                      </div>
                      <p className="text-[16px] text-text-secondary leading-relaxed font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section background="grid" className="py-20 md:py-24">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <h2 className="text-[56px] md:text-[80px] font-bold text-text-primary mb-10 leading-[1] tracking-tight">
              Ready to turn your site <br />
              <span className="font-display text-accent underline decoration-accent/20 underline-offset-8">into an inbound engine?</span>
            </h2>
            <p className="text-[22px] text-text-secondary mb-14 max-w-[600px] mx-auto font-medium">
              We will show you where your staffing firm stands today, what hiring managers are searching for, and what your site needs to generate more inbound reqs from search.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/free-audit" className="btn-primary px-16 h-16 text-[18px] font-bold shadow-2xl shadow-accent/20">
                Get My Free Inbound Audit
              </Link>
            </div>
            <p className="mt-10 text-[13px] text-text-muted font-bold tracking-widest uppercase">
              Limited to 5 staffing firms per specialty per month
            </p>
          </Reveal>
        </div>
      </Section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

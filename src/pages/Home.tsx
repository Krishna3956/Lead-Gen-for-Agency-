import React from 'react';
import { PlatformLogoRotator } from '@/src/components/PlatformLogoRotator';
import { Section, Reveal } from '@/src/components/Section';
import { ChevronRight, ArrowRight, Zap, Target, Search, BarChart3, Shield, Globe, Users } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import { WaitlistButton } from '@/src/components/WaitlistButton';

export const Home: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = React.useState(false);

  return (
    <div className="overflow-x-hidden pt-16">
      {/* HERO SECTION */}
      <Section background="grid" className="pt-4 pb-28 md:pt-10 md:pb-36">
        <div className="max-w-[1240px] mx-auto min-h-[calc(100vh-6.5rem)] flex flex-col justify-center text-center relative">
          <div className="pointer-events-none absolute left-1/2 top-2 h-72 w-72 -translate-x-[145%] rounded-full bg-accent/18 blur-3xl" />
          <div className="pointer-events-none absolute right-1/2 top-16 h-80 w-80 translate-x-[138%] rounded-full bg-sky-400/12 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-48 w-[620px] rounded-full bg-gradient-to-r from-accent/10 via-sky-400/10 to-accent/5 blur-3xl" />
          <Reveal delay={100}>
            <h1 className="text-[56px] md:text-[82px] lg:text-[92px] font-display font-medium text-text-primary leading-[1.02] mb-12 tracking-tight">
              Your <span className="text-accent">agency&apos;s</span> operating <br />
              system for{' '}
              <PlatformLogoRotator />
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[20px] md:text-[24px] text-text-secondary mb-16 max-w-[920px] mx-auto leading-[1.6] font-medium text-balance">
              Cognivo makes your staffing agency show up when hiring managers search on AI platforms. When your agency gets shown, you get more inbound leads.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mx-auto max-w-[820px] w-full">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 rounded-[30px] border border-accent/20 bg-white/88 p-3 shadow-[0_25px_80px_rgba(79,70,229,0.14)] backdrop-blur-xl ring-1 ring-white/70">
                <input
                  type="email"
                  className="h-14 flex-1 rounded-[22px] border border-transparent bg-gradient-to-br from-bg-surface to-accent/5 px-5 text-[16px] text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent"
                  placeholder="Enter your business email"
                />
                <WaitlistButton className="flex h-14 whitespace-nowrap items-center justify-center rounded-[22px] bg-accent px-8 text-[16px] font-bold text-white shadow-xl shadow-accent/25 transition-all hover:scale-[1.01] hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/30">
                  Join the Waitlist
                </WaitlistButton>
              </div>
              <p className="mt-7 text-[14px] font-medium text-text-muted">
                800+ staffing agencies have already registered for early access.
              </p>
            </div>
          </Reveal>

        </div>
      </Section>

      {/* THE SHIFT NARRATIVE */}
      <Section className="pt-10 pb-20 md:pt-12 md:pb-24 bg-text-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-[800px]">
            <Reveal>
              <h2 className="text-[45px] md:text-[69px] font-bold text-white leading-[1] tracking-tight mb-8 md:mb-10">
                Hiring managers decide <br />
                <span className="font-display text-white">before they reach out.</span>
              </h2>
              <p className="text-[17px] md:text-[23px] text-slate-400 leading-relaxed mb-10 md:mb-12 font-medium">
                Staffing buyers now use AI search tools to compare recruiting firms, specialty staffing partners, and executive search providers. If your site is not built around the roles, verticals, and locations they are asking about, you lose the conversation before your team even gets a call.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-accent font-bold text-[29px]">24/7</div>
                  <p className="text-slate-400 font-medium">Your site keeps attracting staffing demand while your recruiters are working live searches.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-accent font-bold text-[29px]">1 engine</div>
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
                How <span className="text-text-primary">Cognivo AI Agents</span> helps <span className="font-display text-text-primary">staffing firms get found</span>
              </h2>
              <p className="text-[20px] text-text-secondary max-w-[700px] mx-auto font-medium">
                Six AI agents that run on your website 24x7. Together, they find what hiring managers are searching for, build the right pages, strengthen trust, and help your staffing agency get shown on AI platforms so you can generate more inbound leads.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Signal Core Agent", desc: "Maps your staffing firm’s specialties, placements, geographies, proof points, and ideal client profile.", icon: <Users />, tone: "from-indigo-50 to-white", iconBg: "bg-indigo-100", iconText: "text-indigo-600" },
              { title: "Market Scout Agent", desc: "Finds the actual searches hiring managers and talent leaders use when they need recruiting help.", icon: <Search />, tone: "from-sky-50 to-white", iconBg: "bg-sky-100", iconText: "text-sky-600" },
              { title: "Story Forge Agent", desc: "Creates service, vertical, city, and solution pages in language staffing buyers immediately understand.", icon: <Zap />, tone: "from-violet-50 to-white", iconBg: "bg-violet-100", iconText: "text-violet-600" },
              { title: "Launchpad Agent", desc: "Publishes and structures those pages so AI search platforms can crawl, index, and trust them quickly.", icon: <Globe />, tone: "from-cyan-50 to-white", iconBg: "bg-cyan-100", iconText: "text-cyan-600" },
              { title: "Trust Layer Agent", desc: "Builds the signals that make your staffing firm look credible in competitive recruiting markets.", icon: <Shield />, tone: "from-emerald-50 to-white", iconBg: "bg-emerald-100", iconText: "text-emerald-600" },
              { title: "Growth Loop Agent", desc: "Tracks which pages bring qualified reqs and doubles down on the searches that convert.", icon: <BarChart3 />, tone: "from-fuchsia-50 to-white", iconBg: "bg-fuchsia-100", iconText: "text-fuchsia-600" }
            ].map((agent, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={cn("bento-card p-10 h-full group bg-gradient-to-br border-black/5", agent.tone)}>
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm group-hover:scale-110", agent.iconBg, agent.iconText)}>
                    {agent.icon}
                  </div>
                  <h3 className="text-[24px] font-bold text-text-primary mb-4 tracking-tight group-hover:text-accent transition-colors">{agent.title}</h3>
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
              <button
                type="button"
                onClick={() => setIsAuditModalOpen(true)}
                className="btn-primary px-16 h-16 text-[18px] font-bold shadow-2xl shadow-accent/20"
              >
                Get My Free Inbound Audit
              </button>
            </div>
            <p className="mt-10 text-[13px] text-text-muted font-bold tracking-widest uppercase">
              Limited to 5 staffing firms per specialty per month
            </p>
          </Reveal>
        </div>
      </Section>

      {isAuditModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-6">
          <button
            type="button"
            aria-label="Close free audit popup"
            className="absolute inset-0 bg-text-primary/45 backdrop-blur-sm"
            onClick={() => setIsAuditModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-[560px] rounded-[32px] border border-border-subtle bg-white p-8 md:p-10 shadow-[0_30px_120px_rgba(15,23,42,0.2)]">
            <button
              type="button"
              className="absolute right-5 top-5 text-text-muted transition-colors hover:text-text-primary"
              onClick={() => setIsAuditModalOpen(false)}
            >
              x
            </button>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent mb-6">
              <Zap className="w-3 h-3" />
              Free Audit
            </div>
            <h3 className="text-[34px] md:text-[42px] font-display font-medium text-text-primary leading-[1.05] tracking-tight mb-4">
              Get your free <span className="text-accent">inbound audit.</span>
            </h3>
            <p className="text-[18px] text-text-secondary leading-relaxed mb-8">
              Enter your business email and we&apos;ll reach out with the next step.
            </p>

            <form
              action="https://formspree.io/f/mqakpjne"
              method="POST"
              className="space-y-4"
            >
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
              <input
                type="email"
                name="email"
                required
                className="w-full h-14 rounded-2xl border border-border-subtle bg-bg-surface px-5 text-[16px] text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent"
                placeholder="Enter your business email"
              />
              <button
                type="submit"
                className="btn-primary w-full h-14 text-[16px] font-bold"
              >
                Get My Free Audit
              </button>
            </form>
          </div>
        </div>
      )}

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

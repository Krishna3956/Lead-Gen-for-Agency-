import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Zap, Target, Search, BarChart3, Shield, Globe, Users } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* HERO SECTION */}
      <Section background="grid" className="pt-24 pb-32 md:pt-40 md:pb-48">
        <div className="max-w-[1100px] mx-auto text-center relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent text-[13px] font-bold mb-10 rounded-full tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>The Future of Staffing Growth</span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-[64px] md:text-[92px] font-bold text-text-primary leading-[0.95] tracking-tight mb-10">
              The search for staffing <br className="hidden md:block" />
              <span className="font-display text-accent">has shifted.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[20px] md:text-[24px] text-text-secondary mb-14 max-w-[800px] mx-auto leading-relaxed font-medium">
              Google is for ads. AI is for answers. <br className="hidden md:block" />
              Cited builds your authority so you're the first choice when clients <br className="hidden md:block" />
              ask ChatGPT, Claude, and Perplexity for a staffing partner.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/book-demo" className="btn-primary w-full sm:w-auto px-12 h-16 text-[17px] font-bold shadow-2xl shadow-accent/20">
                Build Your Inbound Engine
              </Link>
              <Link to="/how-it-works" className="btn-secondary h-16 px-12 text-[17px] w-full sm:w-auto font-bold">
                See the 6-Agent Swarm
              </Link>
            </div>
          </Reveal>

          {/* Conceptual Visual */}
          <Reveal delay={500} className="mt-32">
            <div className="relative max-w-[1000px] mx-auto">
              <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full" />
              <div className="bento-card p-12 bg-white/80 backdrop-blur-xl border-border-subtle relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-text-muted uppercase tracking-widest mb-2">The Old Way</h4>
                      <p className="text-text-secondary font-medium leading-relaxed">
                        Paying for clicks on Google. Competing with job boards. 
                        Zero long-term authority.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6 md:border-x border-border-subtle md:px-16">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-accent uppercase tracking-widest mb-2">The Cited Way</h4>
                      <p className="text-text-primary font-bold leading-relaxed">
                        Building an autonomous inbound engine. 
                        Being cited as the top choice by AI.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-emerald-600 uppercase tracking-widest mb-2">The Result</h4>
                      <p className="text-text-secondary font-medium leading-relaxed">
                        High-intent inbound leads. 
                        Hiring managers coming directly to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* THE SHIFT NARRATIVE */}
      <Section className="py-40 bg-text-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-[800px]">
            <Reveal>
              <h2 className="text-[48px] md:text-[72px] font-bold leading-[1] tracking-tight mb-12">
                Hiring managers are <br />
                <span className="font-display text-accent">no longer searching.</span>
              </h2>
              <p className="text-[20px] md:text-[26px] text-slate-400 leading-relaxed mb-16 font-medium">
                They are asking. They go to ChatGPT, Claude, and Perplexity to find 
                specialized staffing partners. If you aren't being cited, you don't exist.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-accent font-bold text-[32px]">82%</div>
                  <p className="text-slate-400 font-medium">Of B2B buyers now use AI search for vendor discovery.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-accent font-bold text-[32px]">0.0s</div>
                  <p className="text-slate-400 font-medium">Latency in your inbound engine. It works while you sleep.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* THE ENGINE - 6 AGENTS */}
      <Section className="py-40">
        <div className="container-custom">
          <div className="text-center mb-32">
            <Reveal>
              <h2 className="text-[48px] md:text-[64px] font-bold text-text-primary mb-8 tracking-tight">
                The <span className="font-display">Authority</span> Engine
              </h2>
              <p className="text-[20px] text-text-secondary max-w-[700px] mx-auto font-medium">
                We don't just "do SEO." We deploy a swarm of six specialized AI agents 
                to map your expertise and build your web authority.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Memory Agent", desc: "Maps your agency's unique DNA, past successes, and vertical expertise.", icon: <Users /> },
              { title: "Research Agent", desc: "Identifies the exact intent-based searches your ideal clients are making.", icon: <Search /> },
              { title: "Content Agent", desc: "Creates authoritative landing zones that answer complex hiring questions.", icon: <Zap /> },
              { title: "Publishing Agent", desc: "Distributes your expertise across the web to build trust signals.", icon: <Globe /> },
              { title: "Authority Agent", desc: "Ensures you are cited as the top choice by AI search engines.", icon: <Shield /> },
              { title: "Optimization Agent", desc: "Continuously refines your engine based on inbound lead conversion.", icon: <BarChart3 /> }
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
      <Section background="surface" className="py-40">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <h2 className="text-[48px] md:text-[64px] font-bold text-text-primary mb-10 leading-[1.1] tracking-tight">
                Inbound leads, <br />
                <span className="font-display text-accent">not cold calls.</span>
              </h2>
              <p className="text-[20px] text-text-secondary mb-12 leading-relaxed font-medium">
                When you are cited as the authority, the power dynamic shifts. 
                Hiring managers come to you pre-sold on your expertise. 
                No more chasing. No more cold outreach.
              </p>
              <div className="space-y-8">
                {[
                  "Be the first choice in AI search results",
                  "Own high-intent search clusters in your niche",
                  "Build a long-term asset that compounds over time",
                  "Get cited by the most trusted platforms on the web"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[18px] font-bold text-text-primary tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bento-card p-12 bg-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <h4 className="text-[14px] font-bold text-text-muted uppercase tracking-widest">Inbound Pipeline</h4>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[12px] font-bold rounded-full">+240% Growth</div>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: "AI Citations", val: "842", color: "bg-accent" },
                      { label: "Inbound Inquiries", val: "28", color: "bg-text-primary" },
                      { label: "Market Authority", val: "92%", color: "bg-text-primary" }
                    ].map((row, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between items-end">
                          <span className="text-[14px] font-bold text-text-secondary">{row.label}</span>
                          <span className="text-[24px] font-bold text-text-primary">{row.val}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            className={cn("h-full", row.color)} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section background="grid" className="py-48">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <h2 className="text-[56px] md:text-[80px] font-bold text-text-primary mb-10 leading-[1] tracking-tight">
              Ready to be <br />
              <span className="font-display text-accent underline decoration-accent/20 underline-offset-8">Cited?</span>
            </h2>
            <p className="text-[22px] text-text-secondary mb-14 max-w-[600px] mx-auto font-medium">
              Join the elite staffing agencies building the future of inbound. 
              Get a free authority audit today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/free-audit" className="btn-primary px-16 h-16 text-[18px] font-bold shadow-2xl shadow-accent/20">
                Get My Free Audit
              </Link>
            </div>
            <p className="mt-10 text-[13px] text-text-muted font-bold tracking-widest uppercase">
              Limited to 5 agencies per vertical per month
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

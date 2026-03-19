import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Database, Search, PenTool, Globe, Shield, BarChart3, ArrowRight, Zap, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const AGENTS = [
  {
    num: '01',
    name: 'Memory Agent',
    icon: <Database className="w-6 h-6" />,
    body: 'Synthesizes your agency\'s DNA into a digital intelligence profile.',
    details: 'The Memory Agent is the foundation of the Cited system. It doesn\'t just store data; it understands the nuances of your staffing niche. If you specialize in high-end legal placement in Chicago, it ensures that every subsequent action taken by the system reflects that specific expertise.',
    practice: 'For Meridian Search Partners, it identifies their focus on mid-market CFO placements, ensuring every page and search is filtered through this lens.'
  },
  {
    num: '02',
    name: 'Research Agent',
    icon: <Search className="w-6 h-6" />,
    body: 'Scans thousands of high-intent searches across AI and traditional platforms.',
    details: 'The Research Agent is constantly monitoring the market. It looks beyond generic keywords to find the specific, high-intent searches that indicate a company is ready to hire. It analyzes search volume, competition levels, and the specific platforms where these searches are occurring.',
    practice: 'Identifies that 340 hiring managers per month are searching for "interim CFO services for manufacturing." Flags this as a high-priority opportunity.'
  },
  {
    num: '03',
    name: 'Content Agent',
    icon: <PenTool className="w-6 h-6" />,
    body: 'Architects authoritative resources for every high-value search identified.',
    details: 'The Content Agent creates high-quality, authoritative pages that serve as the landing point for your inbound leads. These are not generic blog posts; they are purpose-built resources that establish your agency as the expert in that specific search.',
    practice: 'Builds a comprehensive page titled "The Guide to Interim CFO Staffing for Manufacturers," answering every question a CFO has before hiring.'
  },
  {
    num: '04',
    name: 'Publishing Agent',
    icon: <Globe className="w-6 h-6" />,
    body: 'Ensures technical perfection for discovery by AI search engines.',
    details: 'The Publishing Agent ensures that your content is technically perfect. It handles the technical structure, the site architecture, and the submission process to ensure that search engines and AI platforms can find, read, and trust your pages immediately.',
    practice: 'Submits the new manufacturing page to search engines within hours and ensures it is correctly linked from the main services section.'
  },
  {
    num: '05',
    name: 'Authority Agent',
    icon: <Shield className="w-6 h-6" />,
    body: 'Builds your agency\'s credibility footprint across the global web.',
    details: 'The Authority Agent works outside your website to build your reputation. It identifies the directories, industry lists, and authority sites that matter in the staffing world, creating the "trust signals" that AI search engines require.',
    practice: 'Secures listings in major finance staffing directories, verifying expertise in the target market and boosting overall domain authority.'
  },
  {
    num: '06',
    name: 'Optimization Agent',
    icon: <BarChart3 className="w-6 h-6" />,
    body: 'Continuously evolves your engine based on conversion and market shifts.',
    details: 'The Optimization Agent analyzes performance data from every other agent. If a niche is showing high conversion, it directs the Research and Content agents to expand that cluster. Your inbound engine is always evolving.',
    practice: 'Detects high conversion on "interim CFO" pages and immediately schedules the creation of supporting pages for manufacturing sub-sectors.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="pt-20">
      {/* HERO */}
      <Section className="pb-24 pt-20">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
              <Cpu className="w-3 h-3" />
              <span className="uppercase">The Authority Engine</span>
            </div>
            <h1 className="text-[56px] md:text-[80px] font-display font-medium text-text-primary leading-[1.05] mb-8 tracking-tight">
              A system that runs while you <br />
              <span className="italic text-accent">build your legacy.</span>
            </h1>
            <p className="text-[20px] md:text-[22px] text-text-secondary max-w-[640px] mx-auto leading-relaxed">
              Six specialized AI agents, each with one job, working in parallel every day to build your inbound pipeline.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* AGENTS GRID */}
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.num} delay={i * 100}>
              <div className="group bento-card p-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-accent/5 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    {agent.icon}
                  </div>
                  <span className="text-[32px] font-display font-medium text-accent/10 group-hover:text-accent/20 transition-colors">
                    {agent.num}
                  </span>
                </div>
                <h3 className="text-[24px] font-display font-medium text-text-primary mb-4 tracking-tight group-hover:text-accent transition-colors">
                  {agent.name}
                </h3>
                <p className="text-[16px] font-semibold text-text-primary mb-4 leading-relaxed">
                  {agent.body}
                </p>
                <p className="text-[15px] text-text-secondary leading-relaxed mb-8 flex-grow">
                  {agent.details}
                </p>
                <div className="mt-auto pt-8 border-t border-black/5">
                  <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest block mb-4">IN PRACTICE</span>
                  <div className="text-[14px] text-text-secondary leading-relaxed bg-black/5 p-5 rounded-2xl border-l-2 border-accent italic">
                    "{agent.practice}"
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WORKFLOW VISUAL */}
      <Section className="py-32">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
                <Target className="w-3 h-3" />
                <span className="uppercase">The Roadmap</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-10 leading-[1.1] tracking-tight">The Compound Effect</h2>
              <div className="space-y-10">
                {[
                  { title: 'Day 1-30: Foundation', desc: 'Memory Agent maps your agency. Research Agent identifies first 30 search clusters.' },
                  { title: 'Day 31-90: Momentum', desc: 'Content and Publishing agents go live. Authority Agent begins building trust signals.' },
                  { title: 'Day 91+: Compounding', desc: 'Optimization Agent takes over. Your pipeline grows as the system learns what converts.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-12 h-12 bg-white border border-black/5 flex items-center justify-center shrink-0 text-[16px] font-display font-medium text-accent rounded-xl shadow-sm group-hover:border-accent transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-[20px] font-display font-medium text-text-primary mb-2 tracking-tight">{step.title}</h4>
                      <p className="text-text-secondary leading-relaxed text-[16px]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-black/5 p-12 rounded-[40px] shadow-2xl shadow-black/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-12">
                    <div className="w-2 h-2 rounded-full bg-black/10" />
                    <div className="w-2 h-2 rounded-full bg-black/10" />
                    <div className="w-2 h-2 rounded-full bg-black/10" />
                  </div>
                  <div className="space-y-8">
                    <div className="h-3 bg-black/5 w-3/4 rounded-full animate-pulse" />
                    <div className="h-3 bg-black/5 w-1/2 rounded-full animate-pulse delay-75" />
                    <div className="h-3 bg-black/5 w-5/6 rounded-full animate-pulse delay-150" />
                    <div className="pt-10 grid grid-cols-3 gap-6">
                      <div className="h-32 bg-accent/5 border border-accent/10 flex flex-col items-center justify-center gap-3 rounded-2xl">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg animate-bounce" />
                        <div className="w-12 h-1.5 bg-accent/10 rounded-full" />
                      </div>
                      <div className="h-32 bg-accent/5 border border-accent/10 flex flex-col items-center justify-center gap-3 rounded-2xl">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg animate-bounce delay-100" />
                        <div className="w-12 h-1.5 bg-accent/10 rounded-full" />
                      </div>
                      <div className="h-32 bg-accent/5 border border-accent/10 flex flex-col items-center justify-center gap-3 rounded-2xl">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg animate-bounce delay-200" />
                        <div className="w-12 h-1.5 bg-accent/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* RESPONSIBILITIES */}
      <Section className="py-32 border-t border-black/5">
        <div className="max-w-[800px] mx-auto text-center mb-20">
          <Reveal>
            <h2 className="text-[40px] md:text-[52px] font-display font-medium text-text-primary mb-6 tracking-tight">Your only responsibilities</h2>
            <p className="text-[18px] text-text-secondary">
              Everything else is handled by the Cited engine.
            </p>
          </Reveal>
        </div>

        <div className="max-w-[720px] mx-auto">
          {[
            'Complete a 45-minute onboarding call',
            'Review content flagged for your approval (optional)',
            'Respond to the client inquiries that arrive'
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="py-10 border-b border-black/5 flex items-center justify-between group hover:bg-black/5 px-8 -mx-8 transition-all rounded-3xl">
                <span className="text-[20px] font-display font-medium text-text-primary group-hover:text-accent transition-colors tracking-tight">{item}</span>
                <ArrowRight className="w-6 h-6 text-black/10 group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-32">
          <Reveal delay={400}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
              <Zap className="w-3 h-3" />
              <span className="uppercase">Get Started</span>
            </div>
            <h3 className="text-[32px] md:text-[48px] font-display font-medium text-text-primary mb-10 tracking-tight">Ready to build your inbound engine?</h3>
            <Link to="/book-demo" className="btn-primary px-12 py-5 text-[16px]">
              Book Your Strategy Call
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

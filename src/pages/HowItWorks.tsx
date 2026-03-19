import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { cn } from '@/src/lib/utils';
import { Database, Search, PenTool, Globe, Shield, BarChart3, ArrowRight, Zap, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const AGENTS = [
  {
    num: '01',
    name: 'Signal Core Agent',
    icon: <Database className="w-6 h-6" />,
    tone: 'from-indigo-50 to-white',
    iconBg: 'bg-indigo-100',
    iconText: 'text-indigo-600',
    body: 'Turns your recruiting specialty, roles, geographies, and proof into a structured growth profile.',
    details: 'Signal Core is the foundation of the Cognivo system. It does not just store facts about your staffing firm. It understands the nuances of your market, whether you place plant controllers in the Midwest, locum tenens clinicians, or VP-level operators for PE-backed companies.',
    practice: 'For Meridian Search Partners, it identifies their focus on mid-market CFO placements, retained search, and Chicago finance leadership hiring.'
  },
  {
    num: '02',
    name: 'Market Scout Agent',
    icon: <Search className="w-6 h-6" />,
    tone: 'from-sky-50 to-white',
    iconBg: 'bg-sky-100',
    iconText: 'text-sky-600',
    body: 'Finds the searches hiring managers make when they need a staffing partner now.',
    details: 'Market Scout monitors the market continuously. It looks beyond generic keywords to find the exact searches that signal real demand, like urgent contract hiring, retained search needs, and role-specific recruiting support across your specialty and geography.',
    practice: 'Identifies strong demand for searches like "manufacturing controller recruiter chicago" and "interim CFO staffing firm" and flags them for fast coverage.'
  },
  {
    num: '03',
    name: 'Story Forge Agent',
    icon: <PenTool className="w-6 h-6" />,
    tone: 'from-violet-50 to-white',
    iconBg: 'bg-violet-100',
    iconText: 'text-violet-600',
    body: 'Builds staffing pages that match the way prospects evaluate recruiting firms.',
    details: 'Story Forge creates high-quality pages designed to win staffing searches. These are not filler blog posts. They are service, niche, city, and hiring-problem pages that establish your firm as the obvious choice for that specific search.',
    practice: 'Builds a page like "Interim CFO Recruiters for Manufacturing Companies" that explains the search process, candidate profile, timeline, and why your firm is qualified.'
  },
  {
    num: '04',
    name: 'Launchpad Agent',
    icon: <Globe className="w-6 h-6" />,
    tone: 'from-cyan-50 to-white',
    iconBg: 'bg-cyan-100',
    iconText: 'text-cyan-600',
    body: 'Makes every staffing page easy to crawl, index, and surface in search.',
    details: 'Launchpad handles the technical structure, internal linking, page hierarchy, and publishing workflow that help AI search platforms understand your site quickly. Your new pages do not just exist. They are built to be discovered.',
    practice: 'Publishes the new manufacturing staffing page, links it to finance recruiting and Chicago market pages, and pushes it live with clean crawl paths.'
  },
  {
    num: '05',
    name: 'Trust Layer Agent',
    icon: <Shield className="w-6 h-6" />,
    tone: 'from-emerald-50 to-white',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    body: 'Builds the credibility signals staffing buyers look for before they reach out.',
    details: 'Trust Layer works outside your website to strengthen your reputation. It identifies directories, association pages, and authority sources that matter in staffing, helping your firm look more credible to both search engines and real buyers.',
    practice: 'Secures visibility in relevant staffing and industry directories, reinforcing your expertise in finance hiring and improving trust around your core pages.'
  },
  {
    num: '06',
    name: 'Growth Loop Agent',
    icon: <BarChart3 className="w-6 h-6" />,
    tone: 'from-fuchsia-50 to-white',
    iconBg: 'bg-fuchsia-100',
    iconText: 'text-fuchsia-600',
    body: 'Expands what is working and improves what is underperforming.',
    details: 'Growth Loop analyzes which pages bring qualified staffing inquiries, which specialties are gaining traction, and where more coverage is needed. If a niche starts converting, the system expands that cluster automatically.',
    practice: 'Detects strong response on interim CFO pages and expands into adjacent searches like plant controller recruiting, FP&A leadership search, and finance staffing in nearby cities.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="pt-12">
      {/* HERO */}
      <Section className="pb-6 pt-6 md:pb-8 md:pt-8">
        <div className="max-w-[860px] mx-auto text-center relative">
          <div className="pointer-events-none absolute left-1/2 top-2 h-52 w-52 -translate-x-[135%] rounded-full bg-accent/14 blur-3xl" />
          <div className="pointer-events-none absolute right-1/2 top-10 h-56 w-56 translate-x-[132%] rounded-full bg-sky-400/10 blur-3xl" />
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-5 rounded-full">
              <Cpu className="w-3 h-3" />
              <span className="uppercase">How Cognivo Works</span>
            </div>
            <h1 className="text-[46px] md:text-[64px] lg:text-[72px] font-display font-medium text-text-primary leading-[1.05] mb-4 tracking-tight">
              How Cognivo turns <br />
              <span className="italic text-accent">AI visibility into pipeline.</span>
            </h1>
            <p className="text-[20px] md:text-[22px] text-text-secondary max-w-[640px] mx-auto leading-relaxed">
              Our six AI agents run on your website 24x7. They identify what hiring managers are searching for, publish the right pages, build trust, and turn AI visibility into inbound leads.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* AGENTS GRID */}
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-[1200px] mx-auto">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.num} delay={i * 100}>
              <div className={cn('group bento-card p-6 md:p-7 h-full flex flex-col bg-gradient-to-br border-black/5', agent.tone)}>
                <div className="flex items-center justify-between mb-5">
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:scale-110', agent.iconBg, agent.iconText)}>
                    {agent.icon}
                  </div>
                  <span className="text-[32px] font-display font-medium text-accent/10 group-hover:text-accent/20 transition-colors">
                    {agent.num}
                  </span>
                </div>
                <h3 className="text-[24px] font-display font-medium text-text-primary mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {agent.name}
                </h3>
                <p className="text-[16px] font-semibold text-text-primary mb-3 leading-relaxed">
                  {agent.body}
                </p>
                <p className="text-[15px] text-text-secondary leading-relaxed mb-5 flex-grow">
                  {agent.details}
                </p>
                <div className="mt-auto pt-5 border-t border-black/5">
                  <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest block mb-3">IN PRACTICE</span>
                  <div className="text-[14px] text-text-secondary leading-relaxed bg-black/5 p-4 rounded-2xl border-l-2 border-accent italic">
                    "{agent.practice}"
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WORKFLOW VISUAL */}
      <Section className="py-12 md:py-16">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-5 rounded-full">
                <Target className="w-3 h-3" />
                <span className="uppercase">The Operating Loop</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-6 leading-[1.1] tracking-tight">How the six AI agents work together</h2>
              <div className="space-y-6">
                {[
                  { title: '1. Map your staffing offer', desc: 'Signal Core Agent maps your specialties, role types, geographies, proof points, and ideal clients into a shared intelligence layer.' },
                  { title: '2. Publish what hiring managers are searching for', desc: 'Market Scout Agent, Story Forge Agent, and Launchpad Agent identify opportunities and turn them into pages built for both decision-makers and AI crawlers.' },
                  { title: '3. Compound trust and inbound demand', desc: 'Trust Layer Agent and Growth Loop Agent strengthen rankings, improve weak pages, and keep qualified staffing inquiries building over time.' }
                ].map((step, i) => (
                  <div key={i} className="rounded-[28px] border border-black/5 bg-white p-6 md:p-7 shadow-sm">
                    <div className="flex gap-5 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-sky-400/10 border border-accent/10 flex items-center justify-center shrink-0 text-[16px] font-display font-medium text-accent rounded-xl shadow-sm group-hover:border-accent transition-colors">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-[20px] font-display font-medium text-text-primary mb-2 tracking-tight">{step.title}</h4>
                        <p className="text-text-secondary leading-relaxed text-[16px]">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-5">
                <div className="rounded-[32px] border border-accent/10 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-xl shadow-accent/10">
                  <div className="text-[12px] font-bold uppercase tracking-widest text-accent mb-4">What The Agents Are Doing</div>
                  <div className="space-y-4">
                    {[
                      'Identifying the exact searches hiring managers are making',
                      'Publishing pages around specialties, roles, and locations',
                      'Building trust signals that improve AI visibility',
                      'Turning more visibility into qualified inbound leads'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-[17px] text-text-primary font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { value: '24x7', label: 'AI agents continuously working in the background' },
                    { value: '6', label: 'AI agents covering research, content, trust, and optimization' },
                    { value: 'More', label: 'Qualified inbound leads from stronger AI visibility' },
                    { value: 'Less', label: 'Dependence on manual outbound and guesswork' }
                  ].map((stat, i) => (
                    <div key={i} className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                      <div className="text-[30px] font-display font-medium text-accent tracking-tight mb-2">
                        {stat.value}
                      </div>
                      <p className="text-[15px] text-text-secondary leading-relaxed font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* RESPONSIBILITIES */}
      <Section className="py-12 md:py-16 border-t border-black/5">
        <div className="max-w-[800px] mx-auto text-center mb-8 md:mb-10">
          <Reveal>
            <h2 className="text-[40px] md:text-[52px] font-display font-medium text-text-primary mb-6 tracking-tight">Your only responsibilities</h2>
            <p className="text-[18px] text-text-secondary">
              We handle the growth engine. Your team focuses on delivery, approvals, and closing searches.
            </p>
          </Reveal>
        </div>

        <div className="max-w-[720px] mx-auto">
          {[
            'Complete a focused onboarding so we understand your specialties, markets, and ideal placements',
            'Review pages or claims that require recruiting-team sign-off',
            'Respond to the qualified inbound conversations that come in'
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="py-5 border-b border-black/5 flex items-center justify-between group hover:bg-black/5 px-4 -mx-4 transition-all rounded-3xl">
                <span className="text-[20px] font-display font-medium text-text-primary group-hover:text-accent transition-colors tracking-tight">{item}</span>
                <ArrowRight className="w-6 h-6 text-black/10 group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Reveal delay={400}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-5 rounded-full">
              <Zap className="w-3 h-3" />
              <span className="uppercase">Get Started</span>
            </div>
            <h3 className="text-[32px] md:text-[48px] font-display font-medium text-text-primary mb-5 tracking-tight">Ready to help more hiring managers find your firm?</h3>
            <Link to="/book-demo" className="btn-primary px-12 py-5 text-[16px]">
              Join the Waitlist
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

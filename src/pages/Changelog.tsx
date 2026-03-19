import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Rocket, Zap, Shield, Sparkles, Code } from 'lucide-react';

const LOGS = [
  {
    version: 'v2.4.0',
    date: 'March 18, 2026',
    type: 'Major',
    title: 'The Intelligence Update',
    description: 'A complete overhaul of our agent reasoning engine, enabling more nuanced content creation and faster market adaptation.',
    changes: [
      'New: Memory Agent v2.0 with deep industry context mapping.',
      'Improved: Content Agent now supports multi-format output (Video scripts, LinkedIn posts).',
      'Fixed: Latency issues in the Lead Dashboard real-time sync.',
      'Security: Enhanced encryption for client data repositories.'
    ]
  },
  {
    version: 'v2.3.5',
    date: 'March 5, 2026',
    type: 'Minor',
    title: 'Performance & Scale',
    description: 'Optimizations for agencies managing multiple locations and high-volume search clusters.',
    changes: [
      'New: Multi-city dashboard view for Growth and Dominate plans.',
      'Improved: Research Agent speed increased by 40% for deep-web scans.',
      'New: Integration with 5 additional staffing industry directories.'
    ]
  },
  {
    version: 'v2.3.0',
    date: 'February 15, 2026',
    type: 'Feature',
    title: 'Authority Agent Launch',
    description: 'Introducing our sixth agent dedicated to building your agency\'s credibility footprint across the web.',
    changes: [
      'New: Automated directory submission and verification.',
      'New: Trust signal monitoring and reporting.',
      'Improved: Optimization Agent now factors in external authority scores.'
    ]
  }
];

export const Changelog: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="pb-12">
        <div className="max-w-[800px]">
          <Reveal>
            <span className="eyebrow mb-6 block">CHANGELOG</span>
            <h1 className="h1-text mb-6 italic uppercase tracking-tighter">Product updates & improvements.</h1>
            <p className="body-large text-text-secondary">
              We're shipping new features and optimizations every week to keep your agency ahead of the curve.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="py-16">
        <div className="max-w-[900px] space-y-24">
          {LOGS.map((log, i) => (
            <div key={log.version} className="relative pl-12 md:pl-24">
              {/* TIMELINE LINE */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle" />
              
              {/* DOT */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 bg-accent shadow-[0_0_10px_rgba(255,79,0,0.5)]" />

              <Reveal delay={i * 100}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <span className="text-[14px] font-mono text-accent bg-accent/10 px-3 py-1 border border-accent/20">
                    {log.version}
                  </span>
                  <span className="text-[14px] text-text-secondary font-medium">
                    {log.date}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 ${
                    log.type === 'Major' ? 'bg-purple-500/20 text-purple-400' :
                    log.type === 'Feature' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-zinc-500/20 text-zinc-400'
                  }`}>
                    {log.type}
                  </span>
                </div>

                <h2 className="text-[28px] md:text-[36px] font-bold text-text-primary mb-4 italic uppercase tracking-tighter">
                  {log.title}
                </h2>
                
                <p className="text-[18px] text-text-secondary mb-8 leading-relaxed">
                  {log.description}
                </p>

                <div className="bg-bg-surface border border-border-subtle p-8">
                  <h3 className="text-[14px] font-bold text-text-primary uppercase tracking-widest mb-6 flex items-center gap-2 italic">
                    <Code className="w-4 h-4 text-accent" /> Changes in this version
                  </h3>
                  <ul className="space-y-4">
                    {log.changes.map((change, j) => (
                      <li key={j} className="flex items-start gap-3 text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-accent/50 mt-2 shrink-0" />
                        <span className="text-[15px] leading-relaxed">{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <div className="bg-bg-elevated border border-border-subtle p-12 text-center">
          <Reveal>
            <h2 className="text-[28px] font-bold text-text-primary mb-4 italic uppercase tracking-tighter">Want to see these features in action?</h2>
            <p className="text-text-secondary mb-8 max-w-[500px] mx-auto">
              Join our next product walkthrough and see how the latest updates can drive more leads for your agency.
            </p>
            <button className="btn-primary">
              Book a Product Demo
            </button>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

import React, { useState } from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Search, Globe, BarChart3, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const FreeAudit: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-16">
      <Section className="pb-16 md:pb-20">
        <div className="max-w-[800px] mx-auto text-center mb-20">
          <Reveal>
            <span className="eyebrow mb-6 block">FREE ANALYSIS</span>
            <h1 className="h1-text mb-8 leading-[1.1] italic uppercase tracking-tighter">
              Is your staffing firm <br />
              <span className="text-accent">AI-Search ready?</span>
            </h1>
            <p className="body-large text-text-secondary max-w-[640px] mx-auto">
              We will run a deep diagnostic on your current digital footprint and show you exactly where your staffing firm is losing inbound demand to competitors.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Search Intent Audit', desc: 'We analyze the top searches in your specialty and compare your visibility against the top competitors in your market.', icon: <Search className="w-6 h-6" /> },
            { title: 'Authority Score', desc: 'A proprietary metric showing how AI search platforms perceive your staffing firm\'s credibility.', icon: <Globe className="w-6 h-6" /> },
            { title: 'Inbound Gap Analysis', desc: 'Identify the content and technical gaps preventing your firm from winning more niche and geo searches.', icon: <BarChart3 className="w-6 h-6" /> }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-bg-surface border border-border-subtle p-10 hover:border-accent transition-colors group h-full rounded-[32px]">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-[20px] font-bold text-text-primary mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="max-w-[700px] mx-auto">
            <div className="bg-bg-elevated border border-border-strong p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-[32px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px]" />
              
              <div className="space-y-8 relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-[24px] font-bold text-text-primary mb-2 uppercase tracking-tighter italic">Request Your Audit</h2>
                  <p className="text-text-secondary text-sm">No credit card required. 48-hour turnaround.</p>
                </div>

                <form 
                  action="https://formspree.io/f/mqakpjne" 
                  method="POST"
                  className="space-y-6"
                >
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />
                  <input type="hidden" name="_next" value="https://ais-dev-utpyfs52wwdoajbxdu2y6o-201252030366.asia-southeast1.run.app/thank-you" />

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase font-bold text-text-secondary tracking-widest">Staffing Website URL</label>
                    <input type="url" name="websiteUrl" required className="w-full bg-bg-base border border-border-subtle rounded-2xl px-4 py-3 text-text-primary focus:border-accent outline-none transition-colors" placeholder="https://yourfirm.com" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase font-bold text-text-secondary tracking-widest">Full Name</label>
                      <input type="text" name="fullName" required className="w-full bg-bg-base border border-border-subtle rounded-2xl px-4 py-3 text-text-primary focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase font-bold text-text-secondary tracking-widest">Work Email</label>
                      <input type="email" name="email" required className="w-full bg-bg-base border border-border-subtle rounded-2xl px-4 py-3 text-text-primary focus:border-accent outline-none transition-colors" placeholder="john@agency.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase font-bold text-text-secondary tracking-widest">Primary Competitor</label>
                    <input type="text" name="competitor" required className="w-full bg-bg-base border border-border-subtle rounded-2xl px-4 py-3 text-text-primary focus:border-accent outline-none transition-colors" placeholder="Who are you competing with?" />
                  </div>
                  <button 
                    type="submit"
                    className="btn-primary w-full py-4 flex items-center justify-center gap-2 uppercase tracking-widest font-bold"
                  >
                    Generate My Free Audit <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 text-[12px] text-text-secondary">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Your data is 100% private and secure.</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Users, Target, Zap, Shield, Globe, BarChart3, Heart, Sparkles, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* HERO */}
      <Section className="pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
              <Heart className="w-3 h-3" />
              <span className="uppercase">Our Mission</span>
            </div>
            <h1 className="text-[56px] md:text-[80px] font-display font-medium text-text-primary leading-[1.05] mb-8 tracking-tight">
              We help staffing firms turn their sites <br /><span className="italic text-accent">into inbound growth systems.</span>
            </h1>
            <p className="text-[20px] md:text-[22px] text-text-secondary max-w-[600px] mx-auto leading-relaxed">
              Cognivo exists to help staffing agencies stop relying only on outbound, referrals, and paid traffic, and start building a site that consistently brings in qualified hiring conversations.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* STORY */}
      <Section className="py-0">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="bg-white border border-black/5 p-12 md:p-20 rounded-[40px] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] -mr-48 -mt-48 rounded-full" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-display font-medium text-text-primary mb-8 leading-tight tracking-tight">
                    Why we built <br /><span className="italic text-accent">Cognivo.</span>
                  </h2>
                  <div className="space-y-6 text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
                    <p>
                      Most staffing agencies still grow through referrals, recruiter hustle, and paid demand capture. It works, but it rarely compounds, and it weakens the moment the team stops pushing.
                    </p>
                    <p>
                      We saw a better model: build the website itself into the engine. That means understanding what hiring managers ask AI platforms, publishing staffing pages around those needs, strengthening trust signals, and making the firm easier to discover across AI search.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/5 p-8 rounded-[32px] border border-transparent">
                    <div className="text-[32px] font-display font-medium text-accent mb-2">40%</div>
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest leading-tight">Avg. Outbound Spend</div>
                  </div>
                  <div className="bg-black/5 p-8 rounded-[32px] border border-transparent">
                    <div className="text-[32px] font-display font-medium text-accent mb-2">24/7</div>
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest leading-tight">Autonomous Operation</div>
                  </div>
                  <div className="bg-black/5 p-8 rounded-[32px] border border-transparent col-span-2">
                    <div className="text-[32px] font-display font-medium text-accent mb-2">10x</div>
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest leading-tight">Efficiency Increase vs. Manual</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* VALUES */}
      <Section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-center mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
                <Sparkles className="w-3 h-3" />
                <span className="uppercase">Our Values</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-6 tracking-tight">How we think about staffing growth</h2>
              <p className="text-[18px] md:text-[20px] text-text-secondary max-w-[600px] mx-auto leading-relaxed">
                The principles behind every growth system we build for staffing firms.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Inbound First", desc: "We believe the best staffing clients are the ones already searching for your help. We build assets that attract demand instead of interrupting it.", icon: Target },
              { title: "Staffing-Specific Execution", desc: "We do not publish generic SEO content. We build pages around specialties, roles, markets, and hiring problems real staffing buyers care about.", icon: Zap },
              { title: "Radical Transparency", desc: "No black-box mystery. You see what is being published, which searches are growing, and where the pipeline is coming from.", icon: BarChart3 }
            ].map((value, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bento-card p-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-accent/5 rounded-xl flex items-center justify-center mb-8">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-[24px] font-display font-medium text-text-primary mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-[16px] text-text-secondary leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-24 border-t border-black/5">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
              <Rocket className="w-3 h-3" />
              <span className="uppercase">Join Us</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-8 tracking-tight">Built for the next generation of staffing firms</h2>
            <p className="text-[20px] text-text-secondary mb-12 leading-relaxed">
              We are a distributed team of engineers, designers, and staffing operators obsessed with one goal: helping great recruiting firms become easier to find and easier to trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary px-10 py-4 text-[15px]">View Open Positions</button>
              <button className="px-10 py-4 bg-black/5 text-text-primary border border-transparent font-bold text-[15px] rounded-2xl hover:border-accent/30 transition-all shadow-sm">Contact Our Team</button>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

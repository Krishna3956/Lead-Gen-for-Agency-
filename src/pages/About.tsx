import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Users, Target, Zap, Shield, Globe, BarChart3, Heart, Sparkles, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* HERO */}
      <Section className="pb-24 pt-20">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
              <Heart className="w-3 h-3" />
              <span className="uppercase">Our Mission</span>
            </div>
            <h1 className="text-[56px] md:text-[80px] font-display font-medium text-text-primary leading-[1.05] mb-8 tracking-tight">
              The future of <br /><span className="italic text-accent">agency authority.</span>
            </h1>
            <p className="text-[20px] md:text-[22px] text-text-secondary max-w-[600px] mx-auto leading-relaxed">
              We're building the autonomous infrastructure that allows staffing agencies to scale through authority, not interruption.
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
                    Why we started <br /><span className="italic text-accent">Cited.</span>
                  </h2>
                  <div className="space-y-6 text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
                    <p>
                      Staffing is a $600B industry still running on 1990s technology. Agencies spend 40% of their revenue on "outbound" — cold calls, emails, and manual research that prospects hate.
                    </p>
                    <p>
                      We saw a different way. By leveraging autonomous AI agents, we could build an inbound engine that works 24/7, identifying high-intent searches and building authority automatically.
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
      <Section className="py-32">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
                <Sparkles className="w-3 h-3" />
                <span className="uppercase">Our Values</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-6 tracking-tight">Our Core Principles</h2>
              <p className="text-[18px] md:text-[20px] text-text-secondary max-w-[600px] mx-auto leading-relaxed">
                The values that guide every line of code we write.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Inbound First", desc: "We believe the best clients are the ones who find you. We build assets that attract, not tools that interrupt.", icon: Target },
              { title: "Technical Excellence", desc: "We don't just generate content. We build technically perfect pages that satisfy the most rigorous AI search standards.", icon: Zap },
              { title: "Radical Transparency", desc: "No \"black box\" algorithms. You see exactly what our agents are doing and the ROI they are generating.", icon: BarChart3 }
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

      <Section className="py-32 border-t border-black/5">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
              <Rocket className="w-3 h-3" />
              <span className="uppercase">Join Us</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-8 tracking-tight">Join the Inbound Revolution</h2>
            <p className="text-[20px] text-text-secondary mb-12 leading-relaxed">
              We're a distributed team of engineers, designers, and staffing experts obsessed with one goal: making your agency the undisputed authority in your market.
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

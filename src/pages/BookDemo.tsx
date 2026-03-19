import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { ArrowRight, Shield, Target, Zap } from 'lucide-react';

export const BookDemo: React.FC = () => {
  return (
    <div className="pt-16 bg-bg-base min-h-screen">
      <Section className="pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-display text-text-primary mb-8 leading-[1.1] tracking-tight">
                Join the waitlist for <span className="text-accent">early access.</span>
              </h1>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Join the Cognivo waitlist and see how your staffing agency can get shown on AI platforms, attract more inbound leads, and build visibility before your competitors do.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: <Target className="w-5 h-5 text-accent" />,
                    title: 'Search Opportunity Map',
                    desc: 'See what hiring managers are asking AI platforms in your specialty.'
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-accent" />,
                    title: 'Visibility Audit',
                    desc: 'Understand where your staffing agency is missing trust and discoverability today.'
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-accent" />,
                    title: 'Priority Access',
                    desc: 'Secure your spot before the next waitlist batch fills up.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-text-primary font-bold uppercase tracking-tight text-sm mb-1">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[14px] font-medium text-text-muted">
                800+ staffing agencies have already registered for early access.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="bg-white rounded-3xl border border-border-subtle shadow-2xl shadow-accent/5 overflow-hidden">
                <div className="bg-bg-surface border-b border-border-subtle p-8">
                  <h2 className="text-2xl font-display text-text-primary">Join the waitlist</h2>
                  <p className="text-text-secondary text-sm mt-2">Fill out the form and we&apos;ll reach out when your spot opens.</p>
                </div>

                <div className="p-8 md:p-12">
                  <form
                    action="https://formspree.io/f/mqakpjne"
                    method="POST"
                    className="space-y-6"
                  >
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          className="w-full bg-bg-surface border border-border-subtle rounded-xl px-5 py-4 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          className="w-full bg-bg-surface border border-border-subtle rounded-xl px-5 py-4 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-bg-surface border border-border-subtle rounded-xl px-5 py-4 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                        placeholder="john@agency.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">Agency Niche</label>
                      <select
                        name="niche"
                        className="w-full bg-bg-surface border border-border-subtle rounded-xl px-5 py-4 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all appearance-none"
                      >
                        <option>IT & Technology</option>
                        <option>Healthcare</option>
                        <option>Finance & Accounting</option>
                        <option>Engineering</option>
                        <option>Legal & Compliance</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">Website</label>
                      <input
                        type="url"
                        name="website"
                        className="w-full bg-bg-surface border border-border-subtle rounded-xl px-5 py-4 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all"
                        placeholder="https://youragency.com"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white rounded-xl py-5 flex items-center justify-center gap-3 font-bold transition-all shadow-lg shadow-accent/20 group"
                    >
                      Join the Waitlist <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>

                <div className="bg-bg-surface border-t border-border-subtle p-6 text-center">
                  <p className="text-text-secondary text-xs flex items-center justify-center gap-2">
                    <Shield className="w-3 h-3" /> Your details stay private and secure.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
};

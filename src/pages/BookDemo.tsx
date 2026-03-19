import React, { useState } from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Calendar, Clock, Video, CheckCircle2, ArrowRight, Shield, Zap, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BookDemo: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    niche: 'IT & Technology',
    date: '',
    time: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-16 bg-bg-base min-h-screen">
      <Section className="pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-bold tracking-widest uppercase mb-8">
                <Zap className="w-3 h-3" />
                Inbound Audit
              </div>
              <h1 className="text-5xl md:text-6xl font-display text-text-primary mb-8 leading-[1.1] tracking-tight">
                See how your staffing firm wins <br />
                <span className="text-accent">qualified inbound.</span>
              </h1>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Book a 30-minute working session with our team. We will map the searches hiring managers are making in your specialty, show where your firm is missing visibility, and walk through how <span className="text-text-primary font-semibold italic">Cognivo</span> would turn that into a repeatable inbound channel.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: <Target className="w-5 h-5 text-accent" />,
                    title: "Search Opportunity Map",
                    desc: "See what hiring managers are asking ChatGPT, Claude, Perplexity, Gemini, and Grok in your specialty."
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-accent" />,
                    title: "Website Authority Audit",
                    desc: "Get a direct assessment of how credible and discoverable your current staffing site looks to AI search platforms."
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-accent" />,
                    title: "Custom Rollout Plan",
                    desc: "Leave with a clear plan for which staffing pages to publish, where to build trust, and how to generate more inbound reqs."
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

              <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-text-primary font-bold text-sm uppercase tracking-tight">Virtual Inbound Audit</div>
                  <div className="text-text-secondary text-xs">Conducted via Zoom</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="bg-white rounded-3xl border border-border-subtle shadow-2xl shadow-accent/5 overflow-hidden">
                <div className="bg-bg-surface border-b border-border-subtle p-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-display text-text-primary">Schedule your session</h2>
                    <p className="text-text-secondary text-sm">Step {step} of 2</p>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2].map((s) => (
                      <div 
                        key={s} 
                        className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= s ? 'bg-accent' : 'bg-border-subtle'}`} 
                      />
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <form 
                    action="https://formspree.io/f/mqakpjne" 
                    method="POST"
                    className="space-y-8"
                  >
                    {/* Honeypot */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

                    <AnimatePresence mode="wait">
                      {step === 1 ? (
                        <motion.div 
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">First Name</label>
                              <input 
                                type="text" 
                                name="firstName" 
                                required 
                                value={formData.firstName}
                                onChange={handleInputChange}
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
                                value={formData.lastName}
                                onChange={handleInputChange}
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
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full bg-bg-surface border border-border-subtle rounded-xl px-5 py-4 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all" 
                              placeholder="john@agency.com" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">Agency Niche</label>
                            <div className="relative">
                              <select 
                                name="niche" 
                                value={formData.niche}
                                onChange={handleInputChange}
                                className="w-full bg-bg-surface border border-border-subtle rounded-xl px-5 py-4 text-text-primary focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all appearance-none"
                              >
                                <option>IT & Technology</option>
                                <option>Healthcare</option>
                                <option>Finance & Accounting</option>
                                <option>Engineering</option>
                                <option>Legal & Compliance</option>
                                <option>Other</option>
                              </select>
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary">
                                <ArrowRight className="w-4 h-4 rotate-90" />
                              </div>
                            </div>
                          </div>
                          <button 
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full bg-accent hover:bg-accent-dark text-white rounded-xl py-5 flex items-center justify-center gap-3 font-bold transition-all shadow-lg shadow-accent/20 group"
                          >
                            Choose your time <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-8"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">Select Date</label>
                              <span className="text-xs text-accent font-medium">March 2026</span>
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                <div key={i} className="text-center text-[10px] font-bold text-text-secondary py-2">{d}</div>
                              ))}
                              {Array.from({ length: 31 }).map((_, i) => {
                                const day = i + 1;
                                const isSelected = day === 24;
                                const isPast = day < 19;
                                return (
                                  <button 
                                    key={i} 
                                    type="button"
                                    disabled={isPast}
                                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                                      isSelected 
                                        ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                                        : isPast 
                                          ? 'text-text-muted cursor-not-allowed opacity-30' 
                                          : 'hover:bg-accent/10 text-text-primary'
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold text-text-secondary tracking-widest ml-1">Available Times (EDT)</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'].map((t) => (
                                <button 
                                  key={t} 
                                  type="button" 
                                  className={`py-3 rounded-xl border text-xs font-bold transition-all ${
                                    t === '11:30 AM' 
                                      ? 'border-accent bg-accent/5 text-accent' 
                                      : 'border-border-subtle text-text-primary hover:border-accent'
                                  }`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4 pt-4">
                            <button 
                              type="button" 
                              onClick={() => setStep(1)} 
                              className="flex-1 bg-bg-surface border border-border-subtle hover:border-text-primary text-text-primary rounded-xl py-5 font-bold transition-all"
                            >
                              Back
                            </button>
                            <button 
                              type="submit" 
                              className="flex-[2] bg-accent hover:bg-accent-dark text-white rounded-xl py-5 font-bold transition-all shadow-lg shadow-accent/20"
                            >
                              Confirm Strategy Session
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
                
                <div className="bg-bg-surface border-t border-border-subtle p-6 text-center">
                  <p className="text-text-secondary text-xs flex items-center justify-center gap-2">
                    <Shield className="w-3 h-3" /> Your data is secure and encrypted.
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

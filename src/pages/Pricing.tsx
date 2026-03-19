import React, { useState } from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { cn } from '@/src/lib/utils';
import { Check, ArrowRight, Info, Shield, Zap, TrendingUp, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: 'Foundation',
    desc: 'Validate your inbound channel',
    inc: [
      '30 specialized pages',
      '1 target city',
      'Lead dashboard',
      'Monthly performance report',
      'Standard AI agent reasoning'
    ],
    monthly: 500,
    btn: 'Start Foundation',
    type: 'secondary'
  },
  {
    name: 'Growth',
    desc: 'Build a consistent inbound pipeline',
    inc: [
      '60 specialized pages',
      '2 target cities',
      'AI Visibility tracking',
      'Authority building agent',
      'Weekly performance report',
      'Priority agent reasoning'
    ],
    monthly: 900,
    btn: 'Start Growth',
    type: 'primary',
    popular: true
  },
  {
    name: 'Dominate',
    desc: 'Own your market completely',
    inc: [
      '100+ specialized pages',
      '4 target cities',
      'Full authority program',
      'Dedicated account manager',
      'Real-time lead alerts',
      'Custom agent workflows'
    ],
    monthly: 1500,
    btn: 'Start Dominate',
    type: 'secondary'
  }
];

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="pt-20">
      {/* HERO */}
      <Section className="pb-24 pt-20">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
              <TrendingUp className="w-3 h-3" />
              <span className="uppercase">Pricing & ROI</span>
            </div>
            <h1 className="text-[56px] md:text-[80px] font-display font-medium text-text-primary leading-[1.05] mb-8 tracking-tight">
              Clear pricing. <br /><span className="italic text-accent">No surprises.</span>
            </h1>
            <p className="text-[20px] md:text-[22px] text-text-secondary max-w-[600px] mx-auto leading-relaxed mb-12">
              Month to month after your first term. Cancel any time.
              Full refund if no results in six months.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center justify-center gap-2 bg-black/5 p-1.5 w-fit mx-auto rounded-2xl shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-8 py-2.5 text-[14px] font-semibold transition-all rounded-xl",
                  !isAnnual ? "bg-white text-accent shadow-md" : "text-text-secondary hover:text-text-primary"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-8 py-2.5 text-[14px] font-semibold transition-all flex items-center gap-2 rounded-xl",
                  isAnnual ? "bg-white text-accent shadow-md" : "text-text-secondary hover:text-text-primary"
                )}
              >
                Annual <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Save 20%</span>
              </button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CARDS */}
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {PLANS.map((plan, i) => {
            const price = isAnnual ? Math.round(plan.monthly * 0.8) : plan.monthly;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className={cn(
                  "relative h-full flex flex-col p-10 border rounded-[40px] transition-all duration-500",
                  plan.popular 
                    ? "bg-white border-accent shadow-[0_20px_50px_rgba(79,70,229,0.1)] scale-105 z-10" 
                    : "bg-white border-black/5 hover:border-accent/30 hover:shadow-xl"
                )}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-[24px] font-display font-medium text-text-primary mb-2 tracking-tight">{plan.name}</h3>
                    <p className="text-[15px] text-text-secondary leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="mb-8 flex items-baseline gap-2">
                    <span className="text-[48px] font-display font-medium text-text-primary tracking-tight">${price}</span>
                    <span className="text-text-secondary text-[16px] font-medium">/mo</span>
                  </div>

                  <Link to="/book-demo" className={cn(
                    "w-full py-4 font-bold text-[15px] mb-10 transition-all flex items-center justify-center gap-2 rounded-2xl",
                    plan.type === 'primary' 
                      ? "btn-primary" 
                      : "bg-black/5 text-text-primary border border-transparent hover:border-accent/30 shadow-sm"
                  )}>
                    {plan.btn} <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="space-y-4 mt-auto">
                    <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest block mb-4">What's included</span>
                    {plan.inc.map((item, j) => (
                      <div key={j} className="flex items-start gap-3 text-[15px] text-text-primary">
                        <div className="w-5 h-5 rounded-full bg-accent/5 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ROI CALCULATOR */}
      <ROICalculator />

      {/* GUARANTEE */}
      <Section className="py-24">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="bg-white border border-black/5 p-12 md:p-20 rounded-[40px] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] -mr-48 -mt-48 rounded-full" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
                    <Shield className="w-3 h-3" />
                    <span className="uppercase">Guarantee</span>
                  </div>
                  <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-8 leading-[1.1] tracking-tight">
                    The six-month <br /><span className="italic text-accent">inquiry guarantee.</span>
                  </h2>
                  <p className="text-[18px] md:text-[20px] text-text-secondary mb-10 leading-relaxed max-w-[440px]">
                    If you do not receive a single qualified client inquiry in six months,
                    you get every dollar back. No questions asked.
                  </p>
                  <div className="flex items-center gap-3 text-accent font-bold tracking-wide text-[14px] uppercase">
                    <Check className="w-5 h-5" />
                    <span>Contractually Guaranteed</span>
                  </div>
                </div>
                <div className="bg-black/5 border border-transparent p-10 rounded-[32px]">
                  <div className="flex items-center gap-3 mb-6">
                    <Info className="w-5 h-5 text-accent" />
                    <h4 className="font-bold text-text-primary uppercase text-[11px] tracking-widest">EXACT DEFINITION</h4>
                  </div>
                  <p className="text-[16px] text-text-secondary leading-relaxed font-medium">
                    A qualified inquiry is a contact form submission from a company (not a job seeker) expressing interest in using your agency's services. This definition is written into your contract before you pay anything. There is no ambiguity at month six.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

const ROICalculator = () => {
  const [clientValue, setClientValue] = useState(50000);
  const [newClients, setNewClients] = useState(5);
  const [convRate, setConvRate] = useState(20);

  const annualRevenue = clientValue * newClients;
  const investment = 900 * 12; // Growth plan
  const roi = (annualRevenue / investment).toFixed(1);

  return (
    <Section className="py-24 bg-black/5 border-y border-black/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/10 text-accent text-[12px] font-semibold tracking-wide mb-8 rounded-full">
                <Calculator className="w-3 h-3" />
                <span className="uppercase">ROI Calculator</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-display font-medium text-text-primary mb-8 leading-[1.1] tracking-tight">
                What is one new client <br />worth to your agency?
              </h2>
              <p className="text-[18px] md:text-[20px] text-text-secondary mb-16 leading-relaxed max-w-[500px]">
                Adjust the numbers to match your agency's economics and see the potential impact of an inbound engine.
              </p>

              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-[12px] font-bold text-text-primary uppercase tracking-widest">Average Annual Client Value</label>
                    <span className="text-accent font-display font-medium text-[28px] tracking-tight">${clientValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={clientValue}
                    onChange={(e) => setClientValue(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-[12px] font-bold text-text-primary uppercase tracking-widest">New Clients Per Year</label>
                    <span className="text-accent font-display font-medium text-[28px] tracking-tight">{newClients}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    value={newClients}
                    onChange={(e) => setNewClients(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-[12px] font-bold text-text-primary uppercase tracking-widest">Conversion Rate</label>
                    <span className="text-accent font-display font-medium text-[28px] tracking-tight">{convRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={convRate}
                    onChange={(e) => setConvRate(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="bg-white border border-black/5 p-12 md:p-16 rounded-[40px] shadow-2xl shadow-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32" />
              <div className="relative z-10 space-y-12">
                <div>
                  <span className="text-[11px] font-bold text-text-muted tracking-widest uppercase mb-4 block">Expected New Annual Revenue</span>
                  <div className="text-[64px] md:text-[80px] font-display font-medium text-text-primary tracking-tighter leading-none">${annualRevenue.toLocaleString()}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-10 pt-10 border-t border-black/5">
                  <div>
                    <span className="text-[11px] font-bold text-text-muted tracking-widest uppercase mb-3 block">Annual Investment</span>
                    <div className="text-[24px] font-display font-medium text-text-secondary tracking-tight">${investment.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-text-muted tracking-widest uppercase mb-3 block">Client LTV</span>
                    <div className="text-[24px] font-display font-medium text-text-secondary tracking-tight">${clientValue.toLocaleString()}</div>
                  </div>
                </div>

                <div className="pt-12 border-t border-black/5">
                  <div className="flex items-baseline gap-4 mb-6">
                    <div className="text-[80px] font-display font-medium text-accent leading-none tracking-tighter">{roi}x</div>
                    <div className="text-[24px] font-display font-medium text-accent tracking-widest">ROI</div>
                  </div>
                  <p className="text-[18px] text-text-primary font-medium leading-relaxed">
                    For every $1 invested in the Growth plan, your agency could generate <span className="text-accent font-bold">${roi}</span> in new revenue.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

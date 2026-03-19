import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Reveal } from '@/src/components/Section';
import { comparisons } from '@/src/data/comparisons';
import { Check, X, ArrowRight, Zap, Shield, Target } from 'lucide-react';

export const ComparisonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const comparison = comparisons.find(c => c.id === id);

  if (!comparison) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-16">
      {/* HERO */}
      <Section background="grid" className="pt-20 pb-32">
        <div className="max-w-[800px]">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[11px] font-bold tracking-widest uppercase mb-8">
              <span>COMPETITIVE ANALYSIS</span>
            </div>
            <h1 className="text-[48px] md:text-[72px] font-black text-text-primary leading-[1.1] mb-8 italic uppercase tracking-tighter">
              {comparison.title}
            </h1>
            <p className="text-[20px] text-text-secondary leading-relaxed mb-12">
              {comparison.description} We build the digital infrastructure that 
              staffing agencies need to own their market without the high costs 
              and slow results of traditional methods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-demo" className="btn-primary">
                Book a Demo
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* COMPARISON TABLE */}
      <Section className="py-24 border-y border-border-subtle bg-bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal delay={100} className="glass-card p-10 border-red-500/20">
            <h3 className="text-[24px] font-bold text-text-primary mb-8 flex items-center gap-3 italic uppercase tracking-tighter">
              <X className="text-red-500 w-6 h-6" />
              {comparison.competitor}
            </h3>
            <ul className="space-y-6">
              {comparison.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-4 text-text-secondary">
                  <div className="w-1.5 h-1.5 bg-red-500/50 mt-2 shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="glass-card p-10 border-accent/20 bg-accent/5">
            <h3 className="text-[24px] font-bold text-text-primary mb-8 flex items-center gap-3 italic uppercase tracking-tighter">
              <Check className="text-accent w-6 h-6" />
              Staff Found
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-text-primary font-medium">
                <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                <span>Exclusive, high-intent inbound leads</span>
              </li>
              <li className="flex items-start gap-4 text-text-primary font-medium">
                <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                <span>Permanent digital asset you own</span>
              </li>
              <li className="flex items-start gap-4 text-text-primary font-medium">
                <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                <span>AI-powered swarm for 24/7 optimization</span>
              </li>
              <li className="flex items-start gap-4 text-text-primary font-medium">
                <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                <span>100% result guarantee or full refund</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* WHY WE WIN */}
      <Section className="py-32">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <h2 className="text-[40px] md:text-[56px] font-black text-text-primary mb-8 italic uppercase tracking-tighter">
              The Staff Found <span className="text-accent">Advantage.</span>
            </h2>
            <p className="text-[22px] text-text-secondary leading-relaxed mb-12 italic">
              "{comparison.whyStaffFoundWins}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-8 bg-bg-surface border border-border-subtle">
                <Zap className="text-accent w-8 h-8 mb-6" />
                <h4 className="font-bold text-text-primary mb-2 italic uppercase tracking-tighter">Speed to Market</h4>
                <p className="text-[14px] text-text-secondary">We deploy in weeks, not months. You see results faster.</p>
              </div>
              <div className="p-8 bg-bg-surface border border-border-subtle">
                <Shield className="text-accent w-8 h-8 mb-6" />
                <h4 className="font-bold text-text-primary mb-2 italic uppercase tracking-tighter">Built for Trust</h4>
                <p className="text-[14px] text-text-secondary">We build authority signals that hiring managers actually value.</p>
              </div>
              <div className="p-8 bg-bg-surface border border-border-subtle">
                <Target className="text-accent w-8 h-8 mb-6" />
                <h4 className="font-bold text-text-primary mb-2 italic uppercase tracking-tighter">Intent-Based</h4>
                <p className="text-[14px] text-text-secondary">We capture clients when they are actively looking to hire.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CALL TO ACTION */}
      <Section background="grid" className="py-32 border-t border-border-subtle">
        <div className="text-center">
          <Reveal>
            <h3 className="text-[32px] md:text-[48px] font-black text-text-primary mb-8 italic uppercase tracking-tighter">
              Stop settling for <span className="text-accent">{comparison.competitor}.</span>
            </h3>
            <p className="text-[18px] text-text-secondary mb-12 max-w-[600px] mx-auto">
              Get a free market audit and see why Staff Found is the superior 
              choice for modern staffing agencies.
            </p>
            <Link to="/free-audit" className="btn-primary px-12 h-14 text-[16px]">
              Get My Free Audit
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

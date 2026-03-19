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
    <div className="pt-14">
      {/* HERO */}
      <Section background="grid" className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-[800px]">
          <Reveal>
            <div className="page-chip mb-8">
              <span className="uppercase">Competitive analysis</span>
            </div>
            <h1 className="page-title mb-8">
              {comparison.title}
            </h1>
            <p className="text-[20px] text-text-secondary leading-relaxed mb-12">
              {comparison.description} We build the digital infrastructure that 
              staffing agencies need to own their market without the high costs 
              and slow results of traditional methods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-demo" className="btn-primary">
                Join the Waitlist
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* COMPARISON TABLE */}
      <Section className="py-16 md:py-20 border-y border-border-subtle bg-bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal delay={100} className="glass-card p-10 border-red-500/20">
            <h3 className="card-heading text-[24px] mb-8 flex items-center gap-3">
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
            <h3 className="card-heading text-[24px] mb-8 flex items-center gap-3">
              <Check className="text-accent w-6 h-6" />
              Cognivo
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
      <Section className="py-20 md:py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <h2 className="section-heading md:text-[56px] mb-8">
              The Cognivo <span className="text-accent">Advantage.</span>
            </h2>
            <p className="text-[22px] text-text-secondary leading-relaxed mb-12 italic">
              "{comparison.whyStaffFoundWins}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-8 bg-bg-surface border border-border-subtle rounded-[32px]">
                <Zap className="text-accent w-8 h-8 mb-6" />
                <h4 className="card-heading text-[18px] mb-2">Speed to Market</h4>
                <p className="text-[14px] text-text-secondary">We deploy in weeks, not months. You see results faster.</p>
              </div>
              <div className="p-8 bg-bg-surface border border-border-subtle rounded-[32px]">
                <Shield className="text-accent w-8 h-8 mb-6" />
                <h4 className="card-heading text-[18px] mb-2">Built for Trust</h4>
                <p className="text-[14px] text-text-secondary">We build authority signals that hiring managers actually value.</p>
              </div>
              <div className="p-8 bg-bg-surface border border-border-subtle rounded-[32px]">
                <Target className="text-accent w-8 h-8 mb-6" />
                <h4 className="card-heading text-[18px] mb-2">Intent-Based</h4>
                <p className="text-[14px] text-text-secondary">We capture clients when they are actively looking to hire.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CALL TO ACTION */}
      <Section background="grid" className="py-20 md:py-24 border-t border-border-subtle">
        <div className="text-center">
          <Reveal>
            <h3 className="section-heading mb-8">
              Stop settling for <span className="text-accent">{comparison.competitor}.</span>
            </h3>
            <p className="text-[18px] text-text-secondary mb-12 max-w-[600px] mx-auto">
              Get a free market audit and see why Cognivo is the superior 
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

import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Reveal } from '@/src/components/Section';
import { useCases } from '@/src/data/useCases';
import { ArrowRight, Zap, Shield, Target, TrendingUp } from 'lucide-react';

export const UseCaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const useCase = useCases.find(u => u.id === id);

  if (!useCase) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-14">
      {/* HERO */}
      <Section background="grid" className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-[800px]">
          <Reveal>
            <div className="page-chip mb-8">
              <span className="uppercase">Use case analysis</span>
            </div>
            <h1 className="page-title mb-8">
              {useCase.title}
            </h1>
            <p className="text-[20px] text-text-secondary leading-relaxed mb-12">
              {useCase.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-demo" className="btn-primary">
                Join the Waitlist
              </Link>
              <Link to="/free-audit" className="btn-secondary">
                Get Free Audit
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PROBLEM / SOLUTION / OUTCOME */}
      <Section className="py-16 md:py-20 border-y border-border-subtle bg-bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={100} className="glass-card p-10">
            <div className="text-red-500 text-[12px] font-bold uppercase tracking-widest mb-6">The Problem</div>
            <h3 className="card-heading text-[24px] mb-4">The Grind</h3>
            <p className="text-text-secondary leading-relaxed">{useCase.problem}</p>
          </Reveal>
          <Reveal delay={200} className="glass-card p-10 border-accent/20 bg-accent/5">
            <div className="text-accent text-[12px] font-bold uppercase tracking-widest mb-6">The Solution</div>
            <h3 className="card-heading text-[24px] mb-4">The Engine</h3>
            <p className="text-text-secondary leading-relaxed">{useCase.solution}</p>
          </Reveal>
          <Reveal delay={300} className="glass-card p-10">
            <div className="text-accent text-[12px] font-bold uppercase tracking-widest mb-6">The Outcome</div>
            <h3 className="card-heading text-[24px] mb-4">The Result</h3>
            <p className="text-text-secondary leading-relaxed">{useCase.outcome}</p>
          </Reveal>
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section className="py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="section-heading md:text-[56px] mb-8">
              Why this works <br />
              <span className="text-accent">for your firm.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg-elevated flex items-center justify-center text-accent shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="card-heading text-[18px] mb-2">Intent-Based Capture</h4>
                  <p className="text-text-secondary">
                    We do not just broadcast; we capture. We put you in front of clients 
                    at the exact moment they are asking AI platforms who to hire.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg-elevated flex items-center justify-center text-accent shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="card-heading text-[18px] mb-2">Built-In Trust</h4>
                  <p className="text-text-secondary">
                    Our system builds the authority signals that convince 
                    hiring managers that you are the established expert.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg-elevated flex items-center justify-center text-accent shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="card-heading text-[18px] mb-2">Compounding Growth</h4>
                  <p className="text-text-secondary">
                    Unlike paid ads, our inbound engine builds a permanent asset 
                    that continues to grow and perform over time.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="glass-card p-12 bg-accent text-white border-none">
            <h3 className="section-heading text-white text-[32px] mb-6">
              Stop settling for <br />
              unpredictable growth.
            </h3>
            <p className="text-white/80 mb-10 text-[18px] leading-relaxed">
              Our system provides the predictable, scalable source of 
              new business that modern staffing agencies need to thrive.
            </p>
            <Link to="/book-demo" className="btn-primary bg-white text-accent hover:bg-white/90 w-full">
              Join the Waitlist
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* OTHER USE CASES */}
      <Section background="surface" className="py-16 md:py-20 border-t border-border-subtle">
        <div className="mb-12">
          <h3 className="card-heading text-[24px]">Other Use Cases</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.filter(u => u.id !== id).map(u => (
            <Link 
              key={u.id} 
              to={`/use-cases/${u.id}`}
              className="glass-card p-8 group hover:border-accent transition-all"
            >
              <h4 className="card-heading text-[18px] mb-4 group-hover:text-accent transition-colors">{u.title}</h4>
              <p className="text-[14px] text-text-secondary line-clamp-2 mb-6">{u.description}</p>
              <div className="flex items-center gap-2 text-accent text-[12px] font-bold uppercase tracking-widest">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

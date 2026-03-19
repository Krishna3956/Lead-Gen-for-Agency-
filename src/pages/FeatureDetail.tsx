import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Reveal } from '@/src/components/Section';
import { features } from '@/src/data/features';
import { Check, ArrowRight, Zap, Shield, Target } from 'lucide-react';

export const FeatureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const feature = features.find(f => f.id === id);

  if (!feature) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-16">
      {/* HERO */}
      <Section background="grid" className="pt-20 pb-32">
        <div className="max-w-[800px]">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[11px] font-bold tracking-widest uppercase mb-8">
              <span>FEATURE DEEP DIVE</span>
            </div>
            <h1 className="text-[48px] md:text-[72px] font-black text-text-primary leading-[1.1] mb-8 italic uppercase tracking-tighter">
              {feature.title}
            </h1>
            <p className="text-[20px] text-text-secondary leading-relaxed mb-12">
              {feature.description}
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

      {/* BENEFITS */}
      <Section className="py-24 border-y border-border-subtle bg-bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal delay={100}>
            <h3 className="text-[32px] font-black text-text-primary mb-8 italic uppercase tracking-tighter">Key Benefits</h3>
            <ul className="space-y-6">
              {feature.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 text-text-secondary">
                  <div className="w-6 h-6 bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-[18px]">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="glass-card p-10 bg-bg-elevated border-border-strong">
            <h3 className="text-[24px] font-bold text-text-primary mb-6 italic uppercase tracking-tighter">How It Works</h3>
            <p className="text-text-secondary text-[18px] leading-relaxed mb-8">
              {feature.howItWorks}
            </p>
            <div className="p-6 bg-bg-base border border-border-subtle">
              <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-[12px] mb-4">
                <Zap className="w-4 h-4" />
                <span>AI AGENT INVOLVED</span>
              </div>
              <p className="text-[14px] text-text-muted">
                Our specialized agents work in a swarm to ensure this feature 
                is always performing at its peak for your agency.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* OTHER FEATURES */}
      <Section className="py-32">
        <div className="mb-12">
          <h3 className="text-[24px] font-bold text-text-primary italic uppercase tracking-tighter">Explore Other Features</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.filter(f => f.id !== id).map(f => (
            <Link 
              key={f.id} 
              to={`/features/${f.id}`}
              className="glass-card p-8 group hover:border-accent transition-all"
            >
              <h4 className="text-[18px] font-bold text-text-primary mb-4 group-hover:text-accent transition-colors italic uppercase tracking-tighter">{f.title}</h4>
              <p className="text-[14px] text-text-secondary line-clamp-2 mb-6">{f.description}</p>
              <div className="flex items-center gap-2 text-accent text-[12px] font-bold uppercase tracking-widest">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CALL TO ACTION */}
      <Section background="grid" className="py-32 border-t border-border-subtle">
        <div className="text-center">
          <Reveal>
            <h3 className="text-[32px] md:text-[48px] font-black text-text-primary mb-8 italic uppercase tracking-tighter">
              Ready to stop <span className="text-accent">cold calling?</span>
            </h3>
            <p className="text-[18px] text-text-secondary mb-12 max-w-[600px] mx-auto">
              Get a free market audit and see exactly how many hiring managers 
              are searching for your agency right now.
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

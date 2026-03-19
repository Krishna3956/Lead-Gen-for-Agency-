import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Reveal } from '@/src/components/Section';
import { cities } from '@/src/data/cities';
import { MapPin, Target, TrendingUp, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';

export const CityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const city = cities.find(c => c.id === id);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-14">
      {/* HERO */}
      <Section background="grid" className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-[800px]">
          <Reveal>
            <div className="page-chip mb-8">
              <MapPin className="w-3 h-3" />
              <span className="uppercase">Market analysis: {city.name}, {city.state}</span>
            </div>
            <h1 className="page-title mb-8">
              Inbound client leads in <span className="text-accent">{city.name}.</span>
            </h1>
            <p className="text-[20px] text-text-secondary leading-relaxed mb-12">
              {city.marketDescription} We help {city.name} staffing agencies capture this demand 
              by appearing exactly where hiring managers are searching.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/free-audit" className="btn-primary">
                Get {city.name} Market Audit
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* MARKET STATS */}
      <Section className="py-16 md:py-20 border-y border-border-subtle bg-bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={100} className="glass-card p-10">
            <div className="text-text-muted text-[12px] font-bold uppercase tracking-widest mb-4">Hiring Managers</div>
            <div className="text-[48px] font-display font-medium text-text-primary tracking-tight mb-2">{city.stats.hiringManagers}</div>
            <p className="text-text-secondary text-[14px]">Active decision makers in the {city.name} metro area.</p>
          </Reveal>
          <Reveal delay={200} className="glass-card p-10">
            <div className="text-text-muted text-[12px] font-bold uppercase tracking-widest mb-4">Search Volume</div>
            <div className="text-[48px] font-display font-medium text-text-primary tracking-tight mb-2">{city.stats.avgSearchVolume}</div>
            <p className="text-text-secondary text-[14px]">Monthly searches for "staffing agency {city.name.toLowerCase()}".</p>
          </Reveal>
          <Reveal delay={300} className="glass-card p-10">
            <div className="text-text-muted text-[12px] font-bold uppercase tracking-widest mb-4">Competition</div>
            <div className="text-[48px] font-display font-medium text-accent tracking-tight mb-2">{city.stats.competitionLevel}</div>
            <p className="text-text-secondary text-[14px]">Relative difficulty to rank organically in this market.</p>
          </Reveal>
        </div>
      </Section>

      {/* WHY IT WORKS IN THIS CITY */}
      <Section className="py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="section-heading md:text-[56px] mb-8">
              How we dominate the <br />
              <span className="text-accent">{city.name} market.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg-elevated flex items-center justify-center text-accent shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="card-heading text-[18px] mb-2">Hyper-Local Targeting</h4>
                  <p className="text-text-secondary">
                    We don't just target "{city.name}". We target specific neighborhoods, 
                    business districts, and niche industries unique to {city.name}.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg-elevated flex items-center justify-center text-accent shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="card-heading text-[18px] mb-2">AI Visibility Swarm</h4>
                  <p className="text-text-secondary">
                    Our agents ensure your agency is the top recommendation when 
                    {city.name} companies ask AI tools for recruiting help.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg-elevated flex items-center justify-center text-accent shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="card-heading text-[18px] mb-2">Verified Authority</h4>
                  <p className="text-text-secondary">
                    We build the local trust signals that convince {city.name} 
                    hiring managers that you are the established expert.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="glass-card p-12 bg-accent text-white border-none">
            <h3 className="section-heading text-white text-[32px] mb-6">
              Stop chasing {city.name} clients. <br />
              Let them find you.
            </h3>
            <p className="text-white/80 mb-10 text-[18px] leading-relaxed">
              The {city.name} market is too competitive for cold calls. 
              Our system puts you in front of clients at the exact moment 
              they are ready to hire.
            </p>
            <Link to="/book-demo" className="btn-primary bg-white text-accent hover:bg-white/90 w-full">
              Book a {city.name} Strategy Call
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* OTHER CITIES */}
      <Section background="surface" className="py-16 md:py-20 border-t border-border-subtle">
        <div className="mb-12">
          <h3 className="card-heading text-[24px]">Other Markets We Serve</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.filter(c => c.id !== id).slice(0, 10).map(c => (
            <Link 
              key={c.id} 
              to={`/city/${c.id}`}
              className="p-4 bg-bg-base border border-border-subtle hover:border-accent transition-colors text-[14px] font-bold text-text-secondary hover:text-accent"
            >
              {c.name}, {c.state}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

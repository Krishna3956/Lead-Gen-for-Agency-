import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-base text-text-secondary pt-24 pb-14 border-t border-border-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <Link to="/" className="group inline-flex items-baseline gap-2">
              <span className="brand-wordmark text-[30px] transition-colors">
                Cognivo<span className="text-accent">.ai</span>
              </span>
            </Link>
            <p className="text-text-secondary text-[15px] leading-relaxed max-w-[300px]">
              Cognivo turns your website into a qualified inbound engine for AI search platforms.
            </p>
            <div className="flex gap-4">
              <Link to="/book-demo" className="btn-primary h-10 px-6 text-[12px]">
                Join the Waitlist
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-8 text-[12px] uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><FooterLink to="/how-it-works">How It Works</FooterLink></li>
              <li><FooterLink to="/features/lead-engine">Lead Engine</FooterLink></li>
              <li><FooterLink to="/features/ai-visibility">AI Visibility</FooterLink></li>
              <li><FooterLink to="/pricing">Pricing</FooterLink></li>
              <li><FooterLink to="/changelog">Changelog</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-8 text-[12px] uppercase tracking-widest">Use Cases</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><FooterLink to="/use-cases/first-inbound-clients">First Inbound Clients</FooterLink></li>
              <li><FooterLink to="/use-cases/replace-google-ads">Replace Paid Ads</FooterLink></li>
              <li><FooterLink to="/use-cases/beyond-referrals">Beyond Referrals</FooterLink></li>
              <li><FooterLink to="/use-cases/new-market-expansion">Market Expansion</FooterLink></li>
              <li><FooterLink to="/use-cases/outrank-competitors">Outrank Competitors</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-8 text-[12px] uppercase tracking-widest">Compare</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><FooterLink to="/compare/vs-seo-agencies">vs SEO Agencies</FooterLink></li>
              <li><FooterLink to="/compare/vs-google-ads">vs Paid Ads</FooterLink></li>
              <li><FooterLink to="/compare/vs-lead-gen-services">vs Lead Gen</FooterLink></li>
              <li><FooterLink to="/compare/vs-in-house">vs In-House</FooterLink></li>
              <li><FooterLink to="/compare/vs-linkedin-ads">vs LinkedIn Ads</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-8 text-[12px] uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/careers">Careers</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/free-audit">Free Audit</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* CITIES ROW */}
        <div className="py-10 border-t border-border-subtle">
          <h4 className="text-text-muted font-bold mb-8 text-[11px] uppercase tracking-[0.2em]">Top Markets</h4>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-bold text-text-muted">
            {['Austin', 'Dallas', 'Nashville', 'Atlanta', 'Charlotte', 'Denver', 'Phoenix', 'Miami', 'Houston', 'Seattle'].map(city => (
              <Link key={city} to={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent transition-colors">
                {city}
              </Link>
            ))}
            <Link to="/contact" className="text-accent hover:underline">View All Cities</Link>
          </div>
        </div>

        <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] font-bold text-text-muted uppercase tracking-widest">
          <div>© 2026 Cognivo. All rights reserved.</div>
          <div className="flex items-center gap-8">
            <FooterLink to="/terms">Terms</FooterLink>
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/security">Security</FooterLink>
            <FooterLink to="/cookies">Cookies</FooterLink>
            <FooterLink to="/refund-policy">Refund Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="hover:text-accent transition-colors">
    {children}
  </Link>
);

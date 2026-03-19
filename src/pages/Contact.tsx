import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Mail, MessageSquare, MapPin, Phone, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* HERO */}
      <Section className="pb-10 md:pb-12">
        <div className="max-w-[800px]">
          <Reveal>
            <span className="text-[12px] font-semibold text-accent tracking-wide mb-6 block">CONTACT US</span>
            <h1 className="text-[48px] md:text-[64px] font-bold text-text-primary mb-6 tracking-tight">Let's talk about growing your staffing firm.</h1>
            <p className="text-[20px] text-text-secondary leading-relaxed">
              Whether you want to win more searches for your niche, improve your staffing site, or see what inbound could look like for your firm, we are here to help.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14">
          {/* CONTACT FORM */}
          <Reveal>
            <div className="bg-bg-surface border border-border-subtle p-8 md:p-12 rounded-[32px]">
              <form 
                action="https://formspree.io/f/mqakpjne" 
                method="POST"
                className="space-y-6"
              >
                {/* Honeypot */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <input type="hidden" name="_next" value="https://ais-dev-utpyfs52wwdoajbxdu2y6o-201252030366.asia-southeast1.run.app/thank-you" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-text-secondary tracking-wide">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full bg-bg-surface border border-border-subtle px-4 py-3 text-text-primary rounded-lg focus:outline-none focus:border-accent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-text-secondary tracking-wide">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full bg-bg-surface border border-border-subtle px-4 py-3 text-text-primary rounded-lg focus:outline-none focus:border-accent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-text-secondary tracking-wide">Work Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-bg-surface border border-border-subtle px-4 py-3 text-text-primary rounded-lg focus:outline-none focus:border-accent transition-all"
                    placeholder="john@agency.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-text-secondary tracking-wide">Agency Name</label>
                  <input 
                    type="text" 
                    name="agencyName"
                    required
                    className="w-full bg-bg-surface border border-border-subtle px-4 py-3 text-text-primary rounded-lg focus:outline-none focus:border-accent transition-all"
                    placeholder="Meridian Search"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-text-secondary tracking-wide">How can we help?</label>
                  <select 
                    name="inquiryType"
                    className="w-full bg-bg-surface border border-border-subtle px-4 py-3 text-text-primary rounded-lg focus:outline-none focus:border-accent transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Request a Demo</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-text-secondary tracking-wide">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-bg-surface border border-border-subtle px-4 py-3 text-text-primary rounded-lg focus:outline-none focus:border-accent transition-all resize-none"
                    placeholder="Tell us about your specialty, geography, and growth goals..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full h-12 flex items-center justify-center gap-2 font-bold">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </Reveal>

          {/* CONTACT INFO */}
          <div className="space-y-8 md:space-y-10">
            <Reveal delay={100}>
              <div className="space-y-8">
                <h2 className="text-[28px] font-bold text-text-primary tracking-tight">Other ways to connect</h2>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-surface border border-border-subtle rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-text-primary mb-1 tracking-tight">Email Us</h3>
                    <p className="text-text-secondary mb-2">For general inquiries and support.</p>
                    <a href="mailto:hello@cognivo.com" className="text-accent font-medium hover:underline">hello@cognivo.com</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-surface border border-border-subtle rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-text-primary mb-1 uppercase tracking-tight">Live Chat</h3>
                    <p className="text-text-secondary mb-2">Available Mon-Fri, 9am - 6pm EST.</p>
                    <button className="text-accent font-medium hover:underline">Start a conversation</button>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-surface border border-border-subtle rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-text-primary mb-1 uppercase tracking-tight">Office</h3>
                    <p className="text-text-secondary mb-2">Our headquarters in the heart of the tech district.</p>
                    <p className="text-text-primary">123 Innovation Way, Suite 400<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-bg-elevated border border-border-subtle p-8 rounded-[32px]">
                <h3 className="text-[18px] font-bold text-text-primary mb-4 uppercase tracking-tight">Looking for a demo?</h3>
                    <p className="text-text-secondary mb-6">
                  Skip the form and book a direct walkthrough focused on your staffing niche, current visibility, and growth goals.
                </p>
                <Link to="/book-demo" className="flex items-center gap-2 text-accent font-bold group uppercase tracking-widest text-sm">
                  Book Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
};

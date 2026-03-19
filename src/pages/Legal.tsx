import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { useLocation } from 'react-router-dom';

export const Legal: React.FC = () => {
  const { pathname } = useLocation();
  
  const getTitle = () => {
    if (pathname.includes('privacy')) return 'Privacy Policy';
    if (pathname.includes('terms')) return 'Terms of Service';
    if (pathname.includes('security')) return 'Security';
    return 'Legal';
  };

  const title = getTitle();

  return (
    <div className="pt-20">
      <Section className="pb-12">
        <div className="max-w-[800px]">
          <Reveal>
            <span className="eyebrow mb-6 block">LEGAL</span>
            <h1 className="h1-text mb-6 italic uppercase tracking-tighter">{title}</h1>
            <p className="body-large text-text-secondary">
              Last updated: March 1, 2026
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="py-16">
        <Reveal>
          <div className="max-w-[800px] prose prose-invert prose-accent">
            <p className="body-large text-text-primary mb-8">
              At Staff Found, we take your data and trust seriously. This document outlines our practices and your rights.
            </p>

            <h2 className="text-[24px] font-bold text-text-primary mt-12 mb-6 uppercase tracking-tighter italic">1. Introduction</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Welcome to Staff Found. These terms and conditions outline the rules and regulations for the use of Staff Found's Website, located at stafffound.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Staff Found if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-[24px] font-bold text-text-primary mt-12 mb-6 uppercase tracking-tighter italic">2. Data Collection</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We collect information that you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.
            </p>

            <h2 className="text-[24px] font-bold text-text-primary mt-12 mb-6 uppercase tracking-tighter italic">3. Use of Information</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, and send administrative messages.
            </p>

            <h2 className="text-[24px] font-bold text-text-primary mt-12 mb-6 uppercase tracking-tighter italic">4. AI and Automation</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our service utilizes advanced AI agents to perform research, content creation, and optimization. While we strive for the highest accuracy, AI-generated content should be reviewed for industry-specific nuances. Staff Found is not liable for outcomes resulting from unreviewed automated actions.
            </p>

            <h2 className="text-[24px] font-bold text-text-primary mt-12 mb-6 uppercase tracking-tighter italic">5. Security Measures</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems.
            </p>

            <div className="mt-20 p-8 bg-bg-surface border border-border-subtle">
              <h3 className="text-[18px] font-bold text-text-primary mb-4 uppercase tracking-tight">Questions about our legal terms?</h3>
              <p className="text-text-secondary mb-0">
                Contact our legal team at <a href="mailto:legal@stafffound.com" className="text-accent underline">legal@stafffound.com</a>
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

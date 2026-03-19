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
    <div className="pt-16">
      <Section className="pb-10 md:pb-12">
        <div className="max-w-[800px]">
          <Reveal>
            <span className="eyebrow mb-6 block">LEGAL</span>
            <h1 className="h1-text mb-6">{title}</h1>
            <p className="body-large text-text-secondary">
              Last updated: March 1, 2026
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="py-12 md:py-14">
        <Reveal>
          <div className="max-w-[800px] prose prose-invert prose-accent">
            <p className="body-large text-text-primary mb-8">
              At Cognivo, we take your data and trust seriously. This document outlines our practices and your rights.
            </p>

            <h2 className="card-heading text-[24px] mt-12 mb-6">1. Introduction</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Welcome to Cognivo. These terms and conditions outline the rules and regulations for the use of Cognivo's Website, located at cognivo.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Cognivo if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="card-heading text-[24px] mt-12 mb-6">2. Data Collection</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We collect information that you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.
            </p>

            <h2 className="card-heading text-[24px] mt-12 mb-6">3. Use of Information</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, and send administrative messages.
            </p>

            <h2 className="card-heading text-[24px] mt-12 mb-6">4. AI and Automation</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our service utilizes advanced AI agents to perform research, content creation, and optimization. While we strive for the highest accuracy, AI-generated content should be reviewed for industry-specific nuances. Cognivo is not liable for outcomes resulting from unreviewed automated actions.
            </p>

            <h2 className="card-heading text-[24px] mt-12 mb-6">5. Security Measures</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems.
            </p>

            <div className="mt-14 p-8 bg-bg-surface border border-border-subtle rounded-[32px]">
              <h3 className="card-heading text-[18px] mb-4">Questions about our legal terms?</h3>
              <p className="text-text-secondary mb-0">
                Contact our legal team at <a href="mailto:legal@cognivo.com" className="text-accent underline">legal@cognivo.com</a>
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

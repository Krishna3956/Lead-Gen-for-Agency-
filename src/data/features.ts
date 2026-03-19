import { Globe, Target, BarChart3, Shield, Zap } from 'lucide-react';
import React from 'react';

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  howItWorks: string;
}

export const features: FeatureData[] = [
  {
    id: 'lead-engine',
    title: 'Staffing Demand Engine',
    description: 'We build dedicated pages for the role, specialty, and location searches your ideal staffing buyers are already making. Not filler blog posts, but conversion-ready staffing pages.',
    icon: React.createElement(Globe),
    benefits: [
      '100+ specialty, city, and service pages generated automatically',
      'Targets specific hiring-manager intent',
      'Minimal lift required from your recruiting team',
      'Built-in conversion paths for staffing inquiries'
    ],
    howItWorks: 'Market Scout identifies the exact searches hiring managers use. Story Forge then builds staffing-specific pages that answer those queries and drive qualified inbound conversations.'
  },
  {
    id: 'ai-visibility',
    title: 'AI Search Visibility',
    description: 'Show up when companies ask ChatGPT, Perplexity, Claude, or Gemini which staffing firm they should talk to.',
    icon: React.createElement(Target),
    benefits: [
      'Win more "best staffing firm" answer surfaces',
      'Verified presence across all major LLMs',
      'Continuous optimization for evolving AI models',
      'Future-proof your agency\'s discoverability'
    ],
    howItWorks: 'Our systems build the trust signals and supporting pages AI models use to recommend staffing firms. We make sure your agency is positioned as the one they suggest.'
  },
  {
    id: 'leads-dashboard',
    title: 'Inbound Pipeline Dashboard',
    description: 'A clear, real-time view of your inbound staffing pipeline. No vanity metrics, just qualified conversations and placements in motion.',
    icon: React.createElement(Zap),
    benefits: [
      'Real-time staffing lead notifications',
      'Detailed lead source tracking',
      'CRM integration ready',
      'Placement funnel analytics'
    ],
    howItWorks: 'Every inquiry is captured and analyzed. You see exactly which search led to which conversation, so you can measure true ROI from inbound staffing demand.'
  },
  {
    id: 'authority-builder',
    title: 'Trust Signal Builder',
    description: 'The trust signals that make hiring managers choose your staffing firm over competitors. We strengthen your reputation automatically.',
    icon: React.createElement(Shield),
    benefits: [
      'Automated staffing directory management',
      'Verified trust signal generation',
      'Consistent positioning across platforms',
      'Stronger authority in local and niche recruiting searches'
    ],
    howItWorks: 'Trust Layer identifies and manages your presence on industry-specific directories and platforms, building a wall of trust around your staffing firm.'
  },
  {
    id: 'analytics',
    title: 'Market Performance Analytics',
    description: 'Deep insights into your staffing market and your performance. Know exactly which specialties, cities, and searches are driving growth.',
    icon: React.createElement(BarChart3),
    benefits: [
      'Search-share tracking by specialty',
      'Competitor visibility analysis',
      'Page and keyword performance reporting',
      'More predictable growth forecasting'
    ],
    howItWorks: 'Growth Loop monitors every page and every search cluster. It gives you actionable data on where to expand next in your staffing market.'
  }
];

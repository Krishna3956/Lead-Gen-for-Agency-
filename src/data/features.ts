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
    title: 'Inbound Lead Engine',
    description: 'We build a dedicated page on your website for every high-value search your ideal clients make. Not blog posts, but purpose-built landing zones.',
    icon: React.createElement(Globe),
    benefits: [
      '100+ high-converting pages generated automatically',
      'Targets specific hiring manager intent',
      'Zero maintenance required from your team',
      'Built-in conversion optimization'
    ],
    howItWorks: 'Our Research Agent identifies the exact keywords hiring managers use. The Content Agent then builds authoritative pages that answer those queries and drive inquiries.'
  },
  {
    id: 'ai-visibility',
    title: 'AI Visibility System',
    description: 'Show up when companies ask ChatGPT, Perplexity, or Claude who to call for their staffing needs.',
    icon: React.createElement(Target),
    benefits: [
      'Dominate the "AI Answer" results',
      'Verified presence across all major LLMs',
      'Continuous optimization for evolving AI models',
      'Future-proof your agency\'s discoverability'
    ],
    howItWorks: 'Our agents build a network of trust signals and verified data that AI models use to recommend businesses. We make sure your agency is the one they suggest.'
  },
  {
    id: 'leads-dashboard',
    title: 'Leads Dashboard',
    description: 'A clear, real-time view of your inbound pipeline. No vanity metrics, just qualified inquiries.',
    icon: React.createElement(Zap),
    benefits: [
      'Real-time lead notifications',
      'Detailed lead source tracking',
      'CRM integration ready',
      'Conversion rate analytics'
    ],
    howItWorks: 'Every inquiry is captured and analyzed. You see exactly which search led to which client, allowing you to measure true ROI.'
  },
  {
    id: 'authority-builder',
    title: 'Authority Builder',
    description: 'The trust signals that make hiring managers choose you over competitors. We build your reputation automatically.',
    icon: React.createElement(Shield),
    benefits: [
      'Automated directory management',
      'Verified trust signal generation',
      'Consistent brand voice across platforms',
      'Enhanced local SEO authority'
    ],
    howItWorks: 'The Authority Agent identifies and manages your presence on industry-specific directories and platforms, building a wall of trust around your brand.'
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    description: 'Deep insights into your market and your performance. Know exactly where your growth is coming from.',
    icon: React.createElement(BarChart3),
    benefits: [
      'Market share tracking',
      'Competitor visibility analysis',
      'Keyword performance reports',
      'Predictable growth forecasting'
    ],
    howItWorks: 'The Optimization Agent monitors every page and every search. It provides you with actionable data on how to further dominate your market.'
  }
];

export interface ComparisonData {
  id: string;
  title: string;
  competitor: string;
  description: string;
  pros: string[];
  cons: string[];
  whyStaffFoundWins: string;
}

export const comparisons: ComparisonData[] = [
  {
    id: 'vs-seo-agencies',
    title: 'Cognivo vs. Traditional SEO Agencies',
    competitor: 'SEO Agencies',
    description: 'Traditional SEO agencies focus on rankings and traffic. We focus on qualified inbound demand for staffing agencies.',
    pros: [
      'Focus on "vanity" rankings',
      'Long-term strategy (6-12 months)',
      'High monthly retainers ($3k+)'
    ],
    cons: [
      'No focus on lead quality',
      'Manual content creation',
      'Slow to adapt to AI search'
    ],
    whyStaffFoundWins: 'We use a staffing-specific publishing system to build 100+ high-converting pages in weeks, not months. We target hiring managers, not just traffic.'
  },
  {
    id: 'vs-google-ads',
    title: 'Cognivo vs. Paid Ads (PPC)',
    competitor: 'Paid Ads',
    description: 'Paid ads are a pay-to-play model. Cognivo builds a permanent inbound asset your staffing firm owns.',
    pros: [
      'Immediate traffic',
      'Precise keyword targeting',
      'Scalable with budget'
    ],
    cons: [
      'High cost per click ($20+)',
      'Traffic stops when budget stops',
      'Low trust from hiring managers'
    ],
    whyStaffFoundWins: 'We build organic authority that hiring managers trust more than ads. Our cost per lead is significantly lower over time.'
  },
  {
    id: 'vs-lead-gen-services',
    title: 'Cognivo vs. Lead Gen Services',
    competitor: 'Lead Gen Services',
    description: 'Lead gen services often sell the same leads to multiple agencies. We build your own exclusive inbound channel.',
    pros: [
      'Pre-qualified leads',
      'Pay per lead models',
      'Immediate volume'
    ],
    cons: [
      'Shared leads (low close rate)',
      'No brand building',
      'High long-term costs'
    ],
    whyStaffFoundWins: 'Our leads are exclusive to you because they come directly to your website. You own the relationship from the first click.'
  },
  {
    id: 'vs-in-house',
    title: 'Cognivo vs. In-House Marketing',
    competitor: 'In-House Marketing',
    description: 'Hiring a full-time marketer is expensive and risky. Cognivo gives staffing firms a specialized growth system for a fraction of the cost.',
    pros: [
      'Full control',
      'Deep brand knowledge',
      'Direct communication'
    ],
    cons: [
      'High salary + benefits ($80k+)',
      'Single point of failure',
      'Limited specialized tools'
    ],
    whyStaffFoundWins: 'You get the output of a specialized growth team built for staffing firms, without the cost and management overhead of hiring in-house.'
  },
  {
    id: 'vs-linkedin-ads',
    title: 'Cognivo vs. LinkedIn Ads',
    competitor: 'LinkedIn Ads',
    description: 'LinkedIn is great for targeting, but it\'s interruptive. Cognivo targets hiring managers when they are actively searching.',
    pros: [
      'Precise job title targeting',
      'High-quality professional network',
      'Good for brand awareness'
    ],
    cons: [
      'Extremely high CPC ($15+)',
      'Interruptive (not intent-based)',
      'Low conversion for staffing'
    ],
    whyStaffFoundWins: 'We capture intent. When a hiring manager searches for a recruiter, they are ready to buy. LinkedIn ads are just noise in their feed.'
  },
  {
    id: 'vs-referral-only',
    title: 'Cognivo vs. Referral-Only Growth',
    competitor: 'Referral-Only Growth',
    description: 'Referrals are great, but they are not predictable. Cognivo helps staffing firms build a steadier pipeline of new clients.',
    pros: [
      'Highest trust level',
      'Zero cost per lead',
      'High close rates'
    ],
    cons: [
      'Not scalable',
      'Unpredictable timing',
      'Limits growth to existing network'
    ],
    whyStaffFoundWins: 'We complement your referrals by adding a predictable, scalable source of new business. You don\'t have to wait for the phone to ring.'
  }
];

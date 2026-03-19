export interface UseCaseData {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const useCases: UseCaseData[] = [
  {
    id: 'first-inbound-clients',
    title: 'Getting Your First Inbound Clients',
    description: 'For boutique staffing firms that have relied mostly on outbound outreach and referrals.',
    problem: 'You are tired of the constant grind of cold outreach and the unpredictability of referrals.',
    solution: 'We build a digital growth system that attracts hiring managers already looking for your specialty.',
    outcome: 'A consistent stream of high-intent inbound inquiries that close faster and support stronger fees.'
  },
  {
    id: 'replace-google-ads',
    title: 'Replacing Expensive Paid Ads',
    description: 'For staffing firms that are tired of high CPCs and low-quality leads from PPC.',
    problem: 'You are spending thousands on paid ads but the leads are low-quality and the costs are becoming unsustainable.',
    solution: 'We build lasting organic visibility that outperforms ads over time and builds trust with decision-makers.',
    outcome: 'A significantly lower cost per lead and a permanent asset that continues to perform without a daily ad budget.'
  },
  {
    id: 'beyond-referrals',
    title: 'Moving Beyond Referrals',
    description: 'For established staffing firms that want to scale beyond their existing network.',
    problem: 'Your growth is limited by the size of your network and the unpredictable timing of referrals.',
    solution: 'We expand your reach beyond your existing relationships, capturing new clients who need your help but do not know your firm yet.',
    outcome: 'Predictable, scalable growth that isn\'t dependent on who you know, but on who is searching for you.'
  },
  {
    id: 'new-market-expansion',
    title: 'Expanding into New Markets',
    description: 'For staffing firms that want to enter a new city or specialty quickly.',
    problem: 'Entering a new market is slow and expensive. You have no reputation and no network in the new area.',
    solution: 'We build targeted visibility in the new market, helping your firm look credible faster.',
    outcome: 'A faster foothold in new territories or specialties with inbound demand starting in weeks, not months.'
  },
  {
    id: 'outrank-competitors',
    title: 'Outranking National Competitors',
    description: 'For boutique staffing firms that want to beat the big national players in their local market.',
    problem: 'National firms have massive budgets and dominate broad search results.',
    solution: 'We build hyper-local, specialized pages that outrank the generic pages of national competitors.',
    outcome: 'Stronger visibility in your specific market, capturing the most valuable clients before they choose a larger firm.'
  },
  {
    id: 'predictable-pipeline',
    title: 'Building a Predictable Pipeline',
    description: 'For staffing founders who want to stop the feast-or-famine cycle.',
    problem: 'Your revenue is inconsistent. Some months are great, others are a struggle to find new business.',
    solution: 'We build a compounding inbound channel that provides a steadier flow of new client inquiries.',
    outcome: 'More peace of mind and the ability to plan long-term growth around a more reliable pipeline.'
  }
];

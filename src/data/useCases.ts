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
    description: 'For boutique agencies that have relied solely on outbound outreach and referrals.',
    problem: 'You are tired of the constant grind of cold calling and the unpredictability of referrals.',
    solution: 'We build a digital infrastructure that attracts hiring managers who are actively looking for your specific expertise.',
    outcome: 'A consistent stream of high-intent inbound inquiries that close faster and pay higher fees.'
  },
  {
    id: 'replace-google-ads',
    title: 'Replacing Expensive Google Ads',
    description: 'For agencies that are tired of high CPCs and low-quality leads from PPC.',
    problem: 'You are spending thousands on Google Ads but the leads are low-quality and the costs are unsustainable.',
    solution: 'We build permanent organic authority that outranks ads and builds long-term trust with decision makers.',
    outcome: 'A significantly lower cost per lead and a permanent asset that continues to perform without a daily ad budget.'
  },
  {
    id: 'beyond-referrals',
    title: 'Moving Beyond Referrals',
    description: 'For established agencies that want to scale beyond their existing network.',
    problem: 'Your growth is limited by the size of your network and the unpredictable timing of referrals.',
    solution: 'We expand your reach to the entire market, capturing new clients who have never heard of you but need your help.',
    outcome: 'Predictable, scalable growth that isn\'t dependent on who you know, but on who is searching for you.'
  },
  {
    id: 'new-market-expansion',
    title: 'Expanding into New Markets',
    description: 'For agencies that want to enter a new city or industry niche quickly.',
    problem: 'Entering a new market is slow and expensive. You have no reputation and no network in the new area.',
    solution: 'We build instant digital authority in the new market, making you appear as the established local expert.',
    outcome: 'A rapid foothold in new territories or niches with inbound leads starting in weeks, not months.'
  },
  {
    id: 'outrank-competitors',
    title: 'Outranking National Competitors',
    description: 'For boutique agencies that want to beat the "big guys" in their local market.',
    problem: 'National agencies have massive budgets and dominate the generic search results.',
    solution: 'We build hyper-local, specialized content that outranks the generic pages of national competitors.',
    outcome: 'Dominance in your specific local market, capturing the most valuable clients before they even see the big agencies.'
  },
  {
    id: 'predictable-pipeline',
    title: 'Building a Predictable Pipeline',
    description: 'For agency founders who want to stop the "feast or famine" cycle.',
    problem: 'Your revenue is inconsistent. Some months are great, others are a struggle to find new business.',
    solution: 'We build a compounding inbound engine that provides a steady, predictable flow of new client inquiries.',
    outcome: 'Peace of mind and the ability to plan for long-term growth with a reliable pipeline of new business.'
  }
];

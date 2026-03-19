export interface CityData {
  id: string;
  name: string;
  state: string;
  marketDescription: string;
  stats: {
    hiringManagers: string;
    avgSearchVolume: string;
    competitionLevel: 'Low' | 'Medium' | 'High';
  };
}

export const cities: CityData[] = [
  {
    id: 'austin',
    name: 'Austin',
    state: 'TX',
    marketDescription: 'The tech capital of Texas is seeing unprecedented demand for specialized talent. With major tech headquarters and a booming startup ecosystem, hiring managers are constantly searching for reliable recruiting partners.',
    stats: {
      hiringManagers: '12,400+',
      avgSearchVolume: '8,200/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'dallas',
    name: 'Dallas',
    state: 'TX',
    marketDescription: 'A diverse economic powerhouse with strong sectors in finance, telecommunications, and logistics. The Dallas-Fort Worth metroplex is one of the most competitive staffing markets in the country.',
    stats: {
      hiringManagers: '24,000+',
      avgSearchVolume: '15,500/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'nashville',
    name: 'Nashville',
    state: 'TN',
    marketDescription: 'The healthcare capital of the world. Beyond music, Nashville is a massive hub for healthcare administration, tech, and manufacturing, creating a unique landscape for specialized recruiters.',
    stats: {
      hiringManagers: '8,500+',
      avgSearchVolume: '5,400/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'atlanta',
    name: 'Atlanta',
    state: 'GA',
    marketDescription: 'The "Silicon Peach" is a top-tier market for fintech, logistics, and media. Atlanta\'s rapid growth has created a massive gap between talent supply and demand.',
    stats: {
      hiringManagers: '18,200+',
      avgSearchVolume: '12,100/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'charlotte',
    name: 'Charlotte',
    state: 'NC',
    marketDescription: 'As the second-largest banking center in the US, Charlotte is a prime market for finance and fintech staffing. The city\'s growth is driving demand across all professional services.',
    stats: {
      hiringManagers: '9,800+',
      avgSearchVolume: '6,200/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'denver',
    name: 'Denver',
    state: 'CO',
    marketDescription: 'A major hub for aerospace, renewable energy, and tech. Denver\'s high quality of life attracts top talent, but hiring managers still struggle to find the right specialized fits.',
    stats: {
      hiringManagers: '11,500+',
      avgSearchVolume: '7,800/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    state: 'AZ',
    marketDescription: 'One of the fastest-growing metros in the US. Phoenix is becoming a major center for semiconductor manufacturing and financial services.',
    stats: {
      hiringManagers: '15,600+',
      avgSearchVolume: '9,400/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'miami',
    name: 'Miami',
    state: 'FL',
    marketDescription: 'The gateway to Latin America and a rising tech hub. Miami\'s market is fast-paced and requires recruiters who can navigate its unique cultural and economic landscape.',
    stats: {
      hiringManagers: '10,200+',
      avgSearchVolume: '8,900/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'houston',
    name: 'Houston',
    state: 'TX',
    marketDescription: 'The energy capital of the world. Houston\'s massive industrial and medical sectors create constant demand for specialized technical and professional staffing.',
    stats: {
      hiringManagers: '22,000+',
      avgSearchVolume: '14,200/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'seattle',
    name: 'Seattle',
    state: 'WA',
    marketDescription: 'Dominated by tech giants and aerospace. Seattle is a high-stakes market where hiring managers are looking for recruiters who truly understand technical nuances.',
    stats: {
      hiringManagers: '14,800+',
      avgSearchVolume: '11,500/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'chicago',
    name: 'Chicago',
    state: 'IL',
    marketDescription: 'A massive, diverse economy with strengths in manufacturing, finance, and logistics. Chicago is a "must-win" market for any national staffing agency.',
    stats: {
      hiringManagers: '32,000+',
      avgSearchVolume: '22,000/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'boston',
    name: 'Boston',
    state: 'MA',
    marketDescription: 'The global leader in biotech and life sciences. Boston\'s academic and research ecosystem creates a highly specialized and competitive staffing environment.',
    stats: {
      hiringManagers: '16,500+',
      avgSearchVolume: '13,200/mo',
      competitionLevel: 'High'
    }
  },
  {
    id: 'raleigh',
    name: 'Raleigh',
    state: 'NC',
    marketDescription: 'The heart of the Research Triangle. Raleigh-Durham is a top market for life sciences, tech, and higher education staffing.',
    stats: {
      hiringManagers: '7,400+',
      avgSearchVolume: '4,800/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'tampa',
    name: 'Tampa',
    state: 'FL',
    marketDescription: 'A major hub for financial services and healthcare. Tampa\'s growth is attracting both companies and talent at a record pace.',
    stats: {
      hiringManagers: '8,900+',
      avgSearchVolume: '5,600/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'columbus',
    name: 'Columbus',
    state: 'OH',
    marketDescription: 'A fast-growing tech and logistics hub in the Midwest. Columbus is home to several Fortune 500 companies and a massive university system.',
    stats: {
      hiringManagers: '9,200+',
      avgSearchVolume: '5,100/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'indianapolis',
    name: 'Indianapolis',
    state: 'IN',
    marketDescription: 'A leader in life sciences and logistics. Indianapolis offers a stable and growing market for professional and technical staffing.',
    stats: {
      hiringManagers: '7,800+',
      avgSearchVolume: '4,200/mo',
      competitionLevel: 'Low'
    }
  },
  {
    id: 'salt-lake-city',
    name: 'Salt Lake City',
    state: 'UT',
    marketDescription: 'The "Silicon Slopes" is a top destination for tech companies. SLC\'s market is characterized by high growth and a young, talented workforce.',
    stats: {
      hiringManagers: '6,500+',
      avgSearchVolume: '3,900/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'orlando',
    name: 'Orlando',
    state: 'FL',
    marketDescription: 'Beyond tourism, Orlando is a major center for aerospace, defense, and digital media. The city\'s economy is rapidly diversifying.',
    stats: {
      hiringManagers: '8,200+',
      avgSearchVolume: '5,300/mo',
      competitionLevel: 'Medium'
    }
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas',
    state: 'NV',
    marketDescription: 'A market in transition, with growing sectors in tech, logistics, and professional services. Las Vegas offers unique opportunities for agencies that can move fast.',
    stats: {
      hiringManagers: '7,100+',
      avgSearchVolume: '4,500/mo',
      competitionLevel: 'Low'
    }
  },
  {
    id: 'portland',
    name: 'Portland',
    state: 'OR',
    marketDescription: 'A hub for apparel, tech, and manufacturing. Portland\'s market values authenticity and specialized expertise.',
    stats: {
      hiringManagers: '8,400+',
      avgSearchVolume: '5,800/mo',
      competitionLevel: 'Medium'
    }
  }
];

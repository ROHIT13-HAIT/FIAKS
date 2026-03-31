import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Globe, BarChart3 } from 'lucide-react';

const globalInfographics = [
  {
    id: 1,
    title: 'Global Fintech Investment Growth (2020–2025)',
    image: '/global1.png',
    category: 'Investment',
  },
  {
    id: 2,
    title: 'Digital Banking Adoption Across Continents',
    image: '/global2.png',
    category: 'Banking',
  },
  {
    id: 3,
    title: 'Cross-Border Payments Volume & Trends',
    image: '/global3.png',
    category: 'Payments',
  },
  {
    id: 4,
    title: 'Global RegTech Market Expansion',
    image: '/global4.png',
    category: 'RegTech',
  },
  {
    id: 5,
    title: 'AI in Financial Services Worldwide',
    image: '/global5.png',
    category: 'AI & Tech',
  },
  {
    id: 6,
    title: 'Cryptocurrency Adoption by Region',
    image: '/global6.png',
    category: 'Crypto',
  },
  {
    id: 7,
    title: 'Global Lending Market Overview',
    image: '/global7.png',
    category: 'Lending',
  },
  {
    id: 8,
    title: 'Insurance Technology Growth Trends',
    image: '/global8.png',
    category: 'Insurance',
  },
  {
    id: 9,
    title: 'Open Banking Ecosystem Worldwide',
    image: '/global9.png',
    category: 'Open Banking',
  },
  {
    id: 10,
    title: 'Global Digital Wallet Usage Statistics',
    image: '/global10.png',
    category: 'Payments',
  },
  {
    id: 11,
    title: 'Fintech Startups Growth by Region',
    image: '/global11.png',
    category: 'Startups',
  },
];

const domesticInfographics = [
  {
    id: 1,
    title: 'UPI Transaction Growth in India',
    image: '/domestic1.png',
    category: 'Payments',
  },
  {
    id: 2,
    title: 'Digital Lending Trends in India',
    image: '/domestic2.png',
    category: 'Lending',
  },
  {
    id: 3,
    title: 'InsurTech Adoption in Indian Market',
    image: '/domestic3.png',
    category: 'Insurance',
  },
  {
    id: 4,
    title: 'Neo-Banking Growth in India',
    image: '/domestic4.png',
    category: 'Banking',
  },
  {
    id: 5,
    title: 'Rural Fintech Penetration in India',
    image: '/domestic5.png',
    category: 'Financial Inclusion',
  },
  {
    id: 6,
    title: 'Growth of Digital Payments in Tier 2/3 Cities',
    image: '/domestic6.png',
    category: 'Payments',
  },
  {
    id: 7,
    title: 'Indian Fintech Startup Ecosystem',
    image: '/domestic7.png',
    category: 'Startups',
  },
  {
    id: 8,
    title: 'Government Initiatives Driving Fintech',
    image: '/domestic8.png',
    category: 'Policy',
  },
];

const Infographics = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50" data-testid="infographics-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Research & Insights
          </p>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Infographics
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto" />
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="flex justify-center mb-10 bg-transparent gap-4">
            <TabsTrigger
              value="global"
              className="px-8 py-3 rounded-lg font-semibold data-[state=active]:bg-[#07549c] data-[state=active]:text-white bg-white text-slate-700 shadow-sm"
              data-testid="global-tab"
            >
              <Globe className="w-5 h-5 mr-2" />
              Global Infographics
            </TabsTrigger>
            <TabsTrigger
              value="domestic"
              className="px-8 py-3 rounded-lg font-semibold data-[state=active]:bg-[#07549c] data-[state=active]:text-white bg-white text-slate-700 shadow-sm"
              data-testid="domestic-tab"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Domestic Infographics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalInfographics.map((item) => (
                <div
                  key={item.id}
                  className="infographic-card group cursor-pointer"
                  data-testid={`global-infographic-${item.id}`}
                  onClick={() => window.open(item.image, "_blank")}
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-[#07549c] text-white text-xs font-medium rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="domestic">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domesticInfographics.map((item) => (
                <div
                  key={item.id}
                  className="infographic-card group cursor-pointer"
                  data-testid={`domestic-infographic-${item.id}`}
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-[#07549c] text-white text-xs font-medium rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Infographics;

import React from 'react';
import { MessageSquare, Calendar, Users, BookOpen, Heart } from 'lucide-react';

const offerings = [
  {
    icon: MessageSquare,
    title: 'Forums',
    items: [
      { label: 'FIAKS Focused Activity Program of Knowledge Sharing', link: '#' },
      { label: 'FIAKS Policy Advocacy Bespoke Discussion Forum', link: '#' },
    ],
  },
  {
    icon: Calendar,
    title: 'Events',
    items: [
      { label: 'FLC', link: '#' },
      { label: 'FPL', link: '#' },
      { label: 'FIAKS MOTES', link: '#' },
      { label: 'FIAKS Zero Hour', link: '#' },
      { label: 'Workshops', link: '#' },
    ],
  },
  {
    icon: Users,
    title: 'Networking',
    items: [
      { label: 'FIAKS TORAN', link: '#' },
      { label: 'FIAKS Executive Search', link: '#' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Knowledge Center',
    items: [
      { label: 'FIAKS e-Bulletin', link: '#' },
      { label: 'FIAKS Writ', link: '#' },
      { label: 'FIAKS Daily', link: '#' },
      { label: 'FIAKS Bespoke', link: '#' },
      { label: 'FIAKS Compendium', link: '#' },
    ],
  },
  {
    icon: Heart,
    title: 'Social Impact Programmes',
    items: [
      { label: 'FIAKS Digital शिक्षासार अभियान', link: '#' },
      { label: 'FIAKS Global meets Local', link: '#' },
      { label: 'Corporate Social Responsibility', link: '#' },
    ],
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 md:py-28 bg-white" id="what-we-offer" data-testid="what-we-offer-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What We Offer
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your presence in the financial services ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl"
              data-testid={`offering-card-${index}`}
            >
              <div className="w-16 h-16 rounded-xl bg-[#07549c]/10 flex items-center justify-center mb-6">
                <offering.icon className="w-8 h-8 text-[#07549c]" />
              </div>
              <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                {offering.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {offering.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">

                    {/* Bullet */}
                    <span className="text-[#07549c] mt-1">▪</span>

                    {/* Link */}
                    <a
                      href={item.link}
                      className="hover:text-[#07549c] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

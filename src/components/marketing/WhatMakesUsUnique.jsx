import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useEffect } from "react";

const WhatMakesUsUnique = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // 👈 THIS ENABLES HIDE ON SCROLL BACK
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);


  return (
    <section className="py-20 md:py-28 bg-slate-50" data-testid="unique-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
           <p className="animate slide-left delay-1 text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Difference
          </p>
         <h2 className="animate slide-right delay-2 text-4xl md:text-5xl font-bold mb-6"> 
            What Makes Us Unique
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative" data-testid="unique-image">
            <div className="aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/fiaks/recognition7.png"  
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#07549c]/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F59E0B]/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6" data-testid="unique-content">
             <p className="animate slide-left delay-3 text-slate-700 text-lg leading-relaxed">
              FIAKS is a disruptive learning & development initiative based on the concept of sharing economy. Because of the high content quality, it has created a broad consensus amongst top leaders on several matters concerning the industry whereby it has also become a disruptive Policy Advocacy platform. The content on our platform is posted by C-suite executives around the globe hence it’s unparalleled content. It’s not something that is browsed or downloaded from the free world of the internet.
            </p>

             <p className="animate slide-right delay-4 text-slate-700 text-lg leading-relaxed">
            In the disruptive world, leaders are required to constantly remain updated with what’s happening in the industry and chalk out the growth strategy for the organization. Also, leaders have limited time to consume the content. Hence right knowledge at the right time in a capsule that can be consumed in less than half an hour is critical. With FIAKS, there is no lagging behind on what’s latest happening internationally, domestically, on the regulatory front, what’s brewing in tech, industry reports, important audio, trending BFSI-related videos and much more.
            </p>

           

            <div className="flex flex-wrap gap-4 pt-4">
              {['Exclusive Access', 'Curated Network', 'Actionable Insights', 'Strategic Growth'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-[#07549c]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsUnique;

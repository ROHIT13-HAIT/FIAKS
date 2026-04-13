import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { useEffect } from "react";

const recognitionImages = [
  {
    id: 1,
    image: '/fiaks/recognition1.png',
    title: 'Annual Summit 2024',
  },
  {
    id: 2,
    image: '/fiaks/recognition2.png',
    title: 'Excellence Award Ceremony',
  },
  {
    id: 3,
    image: '/fiaks/recognition7.png',
    title: 'Industry Leadership Forum',
  },
  {
    id: 4,
    image: '/fiaks/recognition4.png',
    title: 'Global Partnership Meet',
  },
  {
    id: 5,
    image: '/fiaks/recognition8.png',
    title: 'Innovation Showcase',
  },
  {
    id: 6,
    image: '/fiaks/recognition6.png',
    title: 'Digital Banking Conference',
  },
];

const Recognition = () => {

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
    <section className="py-20 md:py-28 bg-slate-50" data-testid="recognition-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="animate slide-left delay-1 text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Achievements
          </p>
          <h2 className="animate slide-right delay-2 text-4xl md:text-5xl font-bold mb-6">
            Recognition
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-testid="recognition-gallery">
            {recognitionImages.map((item) => (
              <div
                key={item.id}
                className="gallery-item aspect-square relative group"
                data-testid={`recognition-image-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#07549c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center font-medium text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div> */}
           <img src="/fiaks/recognition7.png" alt="" className="w-full h-full object-cover" />

          {/* Content */}
          <div className="space-y-6" data-testid="recognition-content">
            <p className="animate slide-left delay-3 text-slate-700 text-lg leading-relaxed">
              FIAKS has been recognized and rewarded by the World Trade Centre Mumbai and All India Industry Association for its groundbreaking contribution in the field of Knowledge Sharing and Skill Development.
            </p>

            <p className="animate slide-right delay-4 text-slate-700 text-lg leading-relaxed">
              The award was given by Mr. Ganesh Natarajan, Member – Chairmen’s Council, NASSCOM and Former Vice Chairman & CEO at Zensar Technologies.
            </p> 

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Award className="w-8 h-8 text-[#07549c] mx-auto mb-2" />
                <div className="font-['Outfit'] text-2xl font-bold text-slate-900">50+</div>
                <p className="text-sm text-slate-600">Awards</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Trophy className="w-8 h-8 text-[#07549c] mx-auto mb-2" />
                <div className="font-['Outfit'] text-2xl font-bold text-slate-900">100+</div>
                <p className="text-sm text-slate-600">Events</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Star className="w-8 h-8 text-[#07549c] mx-auto mb-2" />
                <div className="font-['Outfit'] text-2xl font-bold text-slate-900">15+</div>
                <p className="text-sm text-slate-600">Years</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;

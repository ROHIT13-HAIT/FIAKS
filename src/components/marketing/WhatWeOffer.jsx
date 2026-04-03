// import React from 'react';
// import { MessageSquare, Calendar, Users, BookOpen, Heart } from 'lucide-react';

// const offerings = [
//   {
//     icon: MessageSquare,
//     title: 'Forums',
//     items: [
//       { label: 'FIAKS Focused Activity Program of Knowledge Sharing', link: '#' },
//       { label: 'FIAKS Policy Advocacy Bespoke Discussion Forum', link: '#' },
//     ],
//   },
//   {
//     icon: Calendar,
//     title: 'Events',
//     items: [
//       { label: 'FLC', link: '#' },
//       { label: 'FPL', link: '#' },
//       { label: 'FIAKS MOTES', link: '#' },
//       { label: 'FIAKS Zero Hour', link: '#' },
//       { label: 'Workshops', link: '#' },
//     ],
//   },
//   {
//     icon: Users,
//     title: 'Networking',
//     items: [
//       { label: 'FIAKS TORAN', link: '#' },
//       { label: 'FIAKS Executive Search', link: '#' },
//     ],
//   },
//   {
//     icon: BookOpen,
//     title: 'Knowledge Center',
//     items: [
//       { label: 'FIAKS e-Bulletin', link: '#' },
//       { label: 'FIAKS Writ', link: '#' },
//       { label: 'FIAKS Daily', link: '#' },
//       { label: 'FIAKS Bespoke', link: '#' },
//       { label: 'FIAKS Compendium', link: '#' },
//     ],
//   },
//   {
//     icon: Heart,
//     title: 'Social Impact Programmes',
//     items: [
//       { label: 'FIAKS Digital शिक्षासार अभियान', link: '#' },
//       { label: 'FIAKS Global meets Local', link: '#' },
//       { label: 'Corporate Social Responsibility', link: '#' },
//     ],
//   },
// ];

// const WhatWeOffer = () => {
//   return (
//     <section className="py-20 md:py-28 bg-white" id="what-we-offer" data-testid="what-we-offer-section">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//         <div className="text-center mb-16">
//           <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
//             Our Services
//           </p>
//           <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//             What We Offer
//           </h2>
//           <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
//           <p className="text-slate-600 text-lg max-w-2xl mx-auto">
//             Comprehensive solutions designed to elevate your presence in the financial services ecosystem
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {offerings.map((offering, index) => (
//             <div
//               key={offering.title}
//               className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl"
//               data-testid={`offering-card-${index}`}
//             >
//               <div className="w-16 h-16 rounded-xl bg-[#07549c]/10 flex items-center justify-center mb-6">
//                 <offering.icon className="w-8 h-8 text-[#07549c]" />
//               </div>
//               <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
//                 {offering.title}
//               </h3>
//               <ul className="space-y-2 text-slate-600">
//                 {offering.items.map((item, i) => (
//                   <li key={i} className="flex items-start gap-2">

//                     {/* Bullet */}
//                     <span className="text-[#07549c] mt-1">▪</span>

//                     {/* Link */}
//                     <a
//                       href={item.link}
//                       className="hover:text-[#07549c] transition-colors"
//                     >
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeOffer;


import React from "react";
import {
  MessageSquare,
  Calendar,
  Users,
  BookOpen,
  Heart,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CheckCircle } from 'lucide-react';
import { useEffect } from "react";



import "swiper/css";

const pills = [
  { title: "FIAKS Focused Activity Program of Knowledge Sharing", link: "#", img: "/fiaks/Bespoke.png" },
  { title: "FIAKS Policy Advocacy Bespoke Discussion Forum", link: "#", img: "/fiaks/compendium.png" },
  { title: "FLC & Awards", link: "#", img: "/fiaks/CorporateSocialResponsibility.png" },
  { title: "FIAKS Premier League (FPL)", link: "#", img: "/fiaks/daily.png" },
  { title: "FIAKS MOTES", link: "#", img: "/fiaks/FIAKSDigital.png" },
  { title: "FIAKS ZERO HOUR", link: "#", img: "/fiaks/FIAKSe-Bulletin.png" },
  { title: "Workshops", link: "#", img: "/fiaks/FIAKSExecutiveSearch.png" },
  { title: "FIAKS TORAN", link: "#", img: "/fiaks/FIAKSFocused.png" },
  { title: "FIAKS Executive Search", link: "#", img: "/fiaks/FIAKSMOTES.png" },
  { title: "FIAKS Digital शिक्षासार अभियान", link: "#", img: "/fiaks/FIAKSPolicy.png" },
  { title: "FIAKS Global Meets Local", link: "#", img: "/fiaks/FIAKSPremierLeague.png" },
  { title: "Corporate Social Responsibility", link: "#", img: "/fiaks/FIAKSTORAN.png" },
  { title: "FIAKS e-Bulletin", link: "#", img: "/fiaks/FIAKSWrit.png" },
  { title: "FIAKS Writ", link: "#", img: "/fiaks/FIAKSZEROHOUR.png" },
  { title: "FIAKS Bespoke", link: "#", img: "/fiaks/FLC-Awards.png" },
  { title: "FIAKS Daily", link: "#", img: "/fiaks/GlobalMeetsLocal.png" },
  { title: "FIAKS Compendium", link: "#", img: "/fiaks/Workshops.png" },
];

const WhatWeOffer = () => {
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
    <section className="py-20 bg-[#f5f7fa] overflow-visible">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="animate slide-left delay-1 text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Our Services
            </p>

           <h2 className="animate slide-right delay-2 text-4xl md:text-5xl font-bold mb-6"> 
              What We Offer
            </h2>

              <p className="animate slide-left delay-3 text-slate-700 text-lg leading-relaxed">
              FIAKS is a disruptive learning & development initiative based on the concept of sharing economy. Because of the high content quality, it has created a broad consensus amongst top leaders on several matters concerning the industry whereby it has also become a disruptive Policy Advocacy platform. The content on our platform is posted by C-suite executives around the globe hence it’s unparalleled content. It’s not something that is browsed or downloaded from the free world of the internet.
            </p>

            <p className="animate slide-right delay-4 text-slate-700 text-lg leading-relaxed">
              In the disruptive world, leaders are required to constantly remain updated with what’s happening in the industry and chalk out the growth strategy for the organization. Also, leaders have limited time to consume the content. Hence right knowledge at the right time in a capsule that can be consumed in less than half an hour is critical. With FIAKS, there is no lagging behind on what’s latest happening internationally, domestically, on the regulatory front, what’s brewing in tech, industry reports, important audio, trending BFSI-related videos and much more.
            </p>

            {/* <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-[#07549c]" /> Forums
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-[#07549c]" /> Events
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-[#07549c]" /> Networking Platforms
              </div>

              <div className="flex items-center gap-3">
                <Heart className="text-[#07549c]" /> Social Impact
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="text-[#07549c]" /> Knowledge Center
              </div>
            </div> */}

            <div className="flex flex-wrap gap-4 pt-4">

  {[
    'Exclusive Access',
    'Curated Network',
    'Actionable Insights',
    'Strategic Growth'
  ].map((item, index) => (
    
    <div
      key={item}
      className={`animate flex items-center gap-2 text-slate-700 
        ${index % 2 === 0 ? 'slide-left' : 'slide-right'} 
        delay-${index + 1}`}
    >
      <CheckCircle className="w-5 h-5 text-[#07549c]" />
      <span className="font-medium">{item}</span>
    </div>

  ))}

</div>
            <br></br>
            <button className="animate slide-up delay-5 bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition">
              Learn More
            </button>
          </div>

          {/* RIGHT SIDE SWIPER */}
        <div className="relative h-[500px] overflow-hidden">

           <Swiper
  direction="vertical"
  slidesPerView={5}
  centeredSlides={true}   // ✅ THIS FIXES YOUR ISSUE
  spaceBetween={30}
  loop={true}
  speed={3000}
  autoplay={{
    delay: 1,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
  className="h-full"
>
              {pills.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="pill-wrapper">
                    <div
                      className="pill cursor-pointer"
                      onClick={() => window.location.href = item.link}
                    >
                      <img
  src={item.img}
  alt=""
  className="w-18 h-18 rounded-full object-cover flex-shrink-0"
/>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
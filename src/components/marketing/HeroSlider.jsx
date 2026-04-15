// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '../ui/button';


// const slides = [
//   "/fibanner1.png",
//   "/fibanner2.png",
//   "/fibanner3.png",
//   "/fibanner4.png",
//   "/fibanner5.png",
//   "/fibanner6.png",
//   "/fibanner7.png",
//   "/fibanner8.png",
//   "/fibanner9.png",
//   "/fibanner10.png",
//   "/fibanner11.png",
//   "/fibanner12.png",
//   "/fibanner13.png",
//   "/fibanner14.png",
//   "/fibanner15.png",

// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="hero-container relative h-screen min-h-[600px]" data-testid="hero-slider">
//       {slides.map((image, index) => (
//   <div
//     key={index}
//     className={`absolute inset-0 transition-opacity duration-1000 ${
//       index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//     }`}
//   >
//     {/* Background */}
//     <div
//       className="absolute inset-0 bg-cover bg-center"
//       style={{ backgroundImage: `url(${image})` }}
//     />

//     {/* Overlay */}
//     <div className="absolute inset-0 bg-black/50" />

//     {/* Content */}
//     <div className="relative z-20 h-full flex items-center">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="max-w-4xl">

//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             India's Most Trusted & Inclusive Knowledge Sharing Community of BFSI Industry Experts
//           </h1>

//           <Button className="bg-[#07549c] hover:bg-[#054178] text-white px-8 py-6 text-lg">
//             BECOME A MEMBER
//           </Button>

//         </div>
//       </div>
//     </div>
//   </div>
// ))}
//     </section>
//   );
// };

// export default HeroSlider;

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   "/fiaks/fibanner1.png",
//   "/fiaks/fibanner2.png",
//   "/fiaks/fibanner3.png",
//   "/fiaks/fibanner4.png",
//   "/fiaks/fibanner5.png",
//   "/fiaks/fibanner6.png",
//   "/fiaks/fibanner7.png",
//   "/fiaks/fibanner8.png",
//   "/fiaks/fibanner9.png",
//   "/fiaks/fibanner10.png",
//   "/fiaks/fibanner11.png",
//   "/fiaks/fibanner12.png",
//   "/fiaks/fibanner13.png",
//   "/fiaks/fibanner14.png",
//   "/fiaks/fibanner15.png",
// ];

const taglines = [
  "India’s Most Trusted & Inclusive Social Impact Knowledge Platform",
  "Network of 10,000+ C-suite Banking & Fintech Experts",
  "Global Reach Across 30+ Countries",
  "Community-Led Disruptive Learning & Development",
  "Community-Led Policy Advocacy Platform",
  "Focus on Learning, Connecting, Disrupting",
  "Expertise-Driven, Hierarchy Free Environment",
];

const HeroSlider = () => {
  //   const [currentSlide, setCurrentSlide] = useState(0);
  const [tagIndex, setTagIndex] = useState(0);

  // Background slider
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length);
  //     }, 6000);
  //     return () => clearInterval(timer);
  //   }, []);

  // Tagline rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // return (
  //   <section className="hero-container relative h-screen min-h-[600px] overflow-hidden">

  //     {slides.map((image, index) => (
  //       <div
  //         key={index}
  //         className={`absolute inset-0 transition-opacity duration-1000 ${
  //           index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
  //         }`}
  //       >
  //         {/* Background */}
  //         <div
  //           className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[6000ms]"
  //           style={{ backgroundImage: `url(${image})` }}
  //         />

  //         {/* Overlay */}
  //         <div className="absolute inset-0 bg-black/50" />

  //         {/* Content */}
  //         <div className="relative z-20 h-full flex items-center">
  //           <div className="container mx-auto px-4 max-w-7xl">
  //             <div className="max-w-4xl">

  //               {/* 🔥 PREMIUM ANIMATED TEXT */}
  //               <div className="h-[250px] flex items-center overflow-hidden">
  //                 <AnimatePresence mode="wait">
  //                   <motion.h1
  //                     key={tagIndex}
  //                     initial={{ opacity: 0 }}
  //                     animate={{ opacity: 1 }}
  //                     exit={{ opacity: 0 }}
  //                     transition={{ duration: 0.4 }}
  //                     className="text-5xl md:text-7xl font-bold text-white leading-tight"
  //                   >
  //                     {taglines[tagIndex].split(" ").map((word, i) => (
  //                       <motion.span
  //                         key={i}
  //                         initial={{ opacity: 0, x: -30 }}
  //                         animate={{ opacity: 1, x: 0 }}
  //                         transition={{
  //                           delay: i * 0.06,
  //                           duration: 0.5,
  //                           ease: "easeOut",
  //                         }}
  //                         className="inline-block mr-2"
  //                       >
  //                         {word}
  //                       </motion.span>
  //                     ))}
  //                   </motion.h1>
  //                 </AnimatePresence>
  //               </div>

  //               {/* CTA */}
  //               <motion.div
  //                 initial={{ opacity: 0, y: 10 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ delay: 0.4 }}
  //               >
  //                 <Button className="mt-6 bg-[#07549c] hover:bg-[#054178] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:scale-105 transition-all">
  //                   BECOME A MEMBER
  //                 </Button>
  //               </motion.div>

  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}

  //   </section>
  // );
  return (
    <section className="hero-container relative h-screen min-h-[600px] overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        // muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fiaks/testimonial_final.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">

            {/* 🔥 ANIMATED TEXT */}
            <div className="h-[250px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={tagIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-5xl md:text-7xl font-bold text-white leading-tight"
                >
                  {taglines[tagIndex].split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button className="mt-6 bg-[#07549c] hover:bg-[#054178] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:scale-105 transition-all">
                BECOME A MEMBER
              </Button>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSlider;





// import React, { useState, useEffect } from "react";
// import { Button } from "../ui/button";
// import { motion, AnimatePresence } from "framer-motion";

// const taglines = [
//   "India’s Most Trusted & Inclusive Social Impact Knowledge Platform",
//   "Network of 10,000+ C-suite Banking & Fintech Experts",
//   "Global Reach Across 30+ Countries",
//   "Community-Led Disruptive Learning & Development",
//   "Community-Led Policy Advocacy Platform",
//   "Focus on Learning, Connecting, Disrupting",
//   "Expertise-Driven, Hierarchy Free Environment",
// ];

// const HeroSlider = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % taglines.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-white overflow-hidden flex items-center">

//       {/* 🔥 STRIPE-LIKE RIBBON */}
//       <motion.div
//         className="absolute right-0 top-0 h-full w-[55%]"
//         animate={{
//           x: [0, -20, 20, 0],
//           rotate: [0, 2, -2, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 600 1200"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <defs>
//             {/* Gradient */}
//             <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#ff7a18" />
//               <stop offset="30%" stopColor="#ff3d77" />
//               <stop offset="60%" stopColor="#7b61ff" />
//               <stop offset="100%" stopColor="#18a0fb" />
//             </linearGradient>

//             {/* 🔥 Wave Distortion */}
//             <filter id="wave">
//               <feTurbulence
//                 type="turbulence"
//                 baseFrequency="0.006"
//                 numOctaves="2"
//                 result="turbulence"
//               >
//                 <animate
//                   attributeName="baseFrequency"
//                   dur="12s"
//                   values="0.006;0.01;0.006"
//                   repeatCount="indefinite"
//                 />
//               </feTurbulence>

//               <feDisplacementMap
//                 in="SourceGraphic"
//                 scale="50"
//               />
//             </filter>
//           </defs>

//           {/* Ribbon Shape */}
//           <path
//             d="M300,-200 C450,200 450,800 300,1200 C150,800 150,200 300,-200 Z"
//             fill="url(#gradient)"
//             filter="url(#wave)"
//             opacity="0.95"
//           />
//         </svg>
//       </motion.div>

//       {/* 🔥 SECOND LAYER (DEPTH) */}
//       <motion.div
//         className="absolute right-[-50px] top-0 h-full w-[50%] opacity-60 blur-[2px]"
//         animate={{
//           x: [0, 15, -15, 0],
//           rotate: [0, -2, 2, 0],
//         }}
//         transition={{
//           duration: 14,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 600 1200"
//         >
//           <use href="#gradientShape" />
//         </svg>
//       </motion.div>

//       {/* LEFT CONTENT */}
//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         <div className="max-w-2xl">

//           <p className="text-sm text-gray-500 mb-4">
//             Global BFSI Community
//           </p>

//           {/* Animated Heading */}
//           <div className="h-[140px] flex items-center">
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl md:text-6xl font-bold text-[#0a2540] leading-tight"
//               >
//                 {taglines[index]}
//               </motion.h1>
//             </AnimatePresence>
//           </div>

//           <p className="text-lg text-gray-600 mt-6 mb-8">
//             Join a powerful network of BFSI professionals shaping the future through collaboration, innovation, and shared knowledge.
//           </p>

//           <Button className="bg-[#635bff] hover:bg-[#4f46e5] text-white px-8 py-6 text-lg rounded-lg shadow-md">
//             Request an invite →
//           </Button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

// import React, { useState, useEffect } from "react";
// import { Button } from "../ui/button";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
// "/fiaks/fibanner1.png",
// "/fiaks/fibanner2.png",
// "/fiaks/fibanner3.png",
// "/fiaks/fibanner4.png",
// "/fiaks/fibanner5.png",
// "/fiaks/fibanner6.png",
// "/fiaks/fibanner7.png",
// "/fiaks/fibanner8.png",
// "/fiaks/fibanner9.png",
// "/fiaks/fibanner10.png",
// "/fiaks/fibanner11.png",
// "/fiaks/fibanner12.png",
// "/fiaks/fibanner13.png",
// "/fiaks/fibanner14.png",
// "/fiaks/fibanner15.png",
// ];

// const taglines = [
// "India’s Most Trusted & Inclusive Social Impact Knowledge Platform",
// "Network of 10,000+ C-suite Banking & Fintech Experts",
// "Global Reach Across 30+ Countries",
// "Community-Led Disruptive Learning & Development",
// "Community-Led Policy Advocacy Platform",
// "Focus on Learning, Connecting, Disrupting",
// "Expertise-Driven, Hierarchy Free Environment",
// ];

// const HeroSlider = () => {
// const [currentSlide, setCurrentSlide] = useState(0);
// const [tagIndex, setTagIndex] = useState(0);

// // Background slider
// useEffect(() => {
//     const timer = setInterval(() => {
//      setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
// }, []);

// // Tagline rotation
// useEffect(() => {
//     const timer = setInterval(() => {
//      setTagIndex((prev) => (prev + 1) % taglines.length);
//     }, 4000);
//     return () => clearInterval(timer);
// }, []);

// console.log(motion);

// return (
//     <section className="hero-container relative h-screen min-h-[600px] overflow-hidden">

//      {slides.map((image, index) => (
//         <div
//          key={index}
//          className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//          }`}
//         >
//          {/* Background */}
//          <div
//             className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[6000ms]"
//             style={{ backgroundImage: `url(${image})` }}
//          />

//          {/* Overlay */}
//          <div className="absolute inset-0 bg-black/50" />

//          {/* Content */}
//          <div className="relative z-20 h-full flex items-center">
//             <div className="container mx-auto px-4 max-w-7xl">
//              <div className="max-w-4xl">

//                 {/* 🔥 PREMIUM ANIMATED TEXT */}
//                 <div className="h-[250px] flex items-center overflow-hidden">
//                  <AnimatePresence mode="wait">
//                     <motion.h1
//                      key={tagIndex}
//                      initial={{ opacity: 0 }}
//                      animate={{ opacity: 1 }}
//                      exit={{ opacity: 0 }}
//                      transition={{ duration: 0.4 }}
//                      className="text-5xl md:text-7xl font-bold text-white leading-tight"
//                     >
//                      {taglines[tagIndex].split(" ").map((word, i) => (
//                         <motion.span
//                          key={i}
//                          initial={{ opacity: 0, x: -30 }}
//                          animate={{ opacity: 1, x: 0 }}
//                          transition={{
//                             delay: i * 0.06,
//                             duration: 0.5,
//                             ease: "easeOut",
//                          }}
//                          className="inline-block mr-2"
//                         >
//                          {word}
//                         </motion.span>
//                      ))}
//                     </motion.h1>
//                  </AnimatePresence>
//                 </div>

//                 {/* CTA */}
//                 <motion.div
//                  initial={{ opacity: 0, y: 10 }}
//                  animate={{ opacity: 1, y: 0 }}
//                  transition={{ delay: 0.4 }}
//                 >
//                  <Button className="mt-6 bg-[#07549c] hover:bg-[#054178] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:scale-105 transition-all">
//                     BECOME A MEMBER
//                  </Button>
//                 </motion.div>

//              </div>
//             </div>
//          </div>
//         </div>
//      ))}

//     </section>
// );
// };

// export default HeroSlider;
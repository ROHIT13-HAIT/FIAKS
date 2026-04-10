// import React, { useEffect, useRef, useState } from 'react';

// const stats = [
//   { label: 'CEO/CXO Private & MNC Bankers', value: 1000 },
//   { label: 'CEO/CXO Fintech Professionals', value: 800 },
//   { label: 'Unique Brands', value: 700 },
//   { label: 'CEO/CXO Cooperative Bankers', value: 500 },
//   { label: 'General Managers PSU/RRB Banks', value: 400 },
//   { label: 'CEO/CXO Mutual Funds & Insurance', value: 300 },
//   { label: 'CEO/CXO MFIs', value: 200 },
//   { label: 'Regulatory Authorities', value: 150 },
//   { label: 'Founders/Co-Founders', value: 100 },
//   { label: 'Countries', value: 30 },
// ];

// const Counter = ({ end, isVisible }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     let start = 0;
//     const duration = 3000;
//     const increment = end / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [isVisible, end]);

//   return <span>{count.toLocaleString()}+</span>;
// };

// const StatsCounter = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="stats-section py-20 md:py-28"
//       data-testid="stats-section"
//     >
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//         <div className="text-center mb-16">
//           <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Our Growing Community
//           </h2>
//           <p className="text-white/80 text-lg max-w-2xl mx-auto">
//             Join thousands of industry leaders shaping the future of BFSI
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className="counter-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
//               style={{ animationDelay: `${index * 100}ms` }}
//               data-testid={`stat-card-${index}`}
//             >
//               <div className="text-4xl md:text-5xl font-bold text-white mb-3 font-['Outfit']">
//              <Counter end={stat.value} isVisible={isVisible} />
//               </div>
//               <p className="text-white/90 text-sm md:text-base leading-tight">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsCounter;


import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const stats = [
  { label: 'CEO/CXO Private & MNC Bankers', value: 1000 },
  { label: 'CEO/CXO Fintech Professionals', value: 800 },
  { label: 'Unique Brands', value: 700 },
  { label: 'CEO/CXO Cooperative Bankers', value: 500 },
  { label: 'General Managers PSU/RRB Banks', value: 400 },
  { label: 'CEO/CXO Mutual Funds & Insurance', value: 300 },
  { label: 'CEO/CXO MFIs', value: 200 },
  { label: 'Regulatory Authorities', value: 150 },
  { label: 'Founders/Co-Founders', value: 100 },
  { label: 'Countries', value: 30 },
];

const Counter = ({ end, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 3000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <span>{count.toLocaleString()}+</span>;
};

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-section py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Growing Community
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join thousands of industry leaders shaping the future of BFSI
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="counter-card bg-[#07549c] backdrop-blur-sm rounded-xl p-6 text-center group"
            >
              
              {/* Number + Icon */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="text-4xl md:text-5xl font-bold text-white font-['Outfit']">
                  <Counter end={stat.value} isVisible={isVisible} />
                </div>

                <TrendingUp
                  className="trend-icon w-5 h-5 text-green-400"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>

              {/* Label */}
              <p className="text-white/90 text-sm md:text-base leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
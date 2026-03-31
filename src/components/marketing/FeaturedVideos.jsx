// import React, { useState } from 'react';
// import { Play } from 'lucide-react';

// const videos = [
//   {
//     iframe: 'https://youtu.be/SjBUzkym9uI',
//     title: 'FIAKS Digital शिक्षाप्रसार अभियान Edition 2.0',
//   },
//   {
//     iframe: 'https://youtu.be/w9_-3FvtYok',
//     title: 'Nationwide Digital Product Upgradation Training Sessions...',
//   },
//   {
//     iframe: 'https://youtu.be/SUvjxw_pybs',
//     title: 'FIAKS Community Leaders who’ve shared wonderful messages over the years on International Women’s Day',
//   },
// ];
// const getVideoId = (url) => {
//   if (url.includes("youtu.be")) {
//     return url.split("youtu.be/")[1];
//   }
//   return url.split("v=")[1];
// };

// const FeaturedVideos = () => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="featured-videos-section">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//         <div className="text-center mb-16">
//           <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
//             Featured Content
//           </p>
//           <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//             Featured Videos
//           </h2>
//           <div className="w-16 h-1 bg-[#07549c] mx-auto" />
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {videos.map((video, index) => {
//   const videoId = getVideoId(video.iframe);

//   return (
//     <div
//       key={index}
//       className="video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100"
//     >
//       <div className="relative aspect-video">

//         {activeVideo === video.iframe ? (
//           <iframe
//             src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//             title={video.title}
//             className="w-full h-full"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           />
//         ) : (
//           <>
//             {/* ✅ Thumbnail */}
//             <img
//               src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
//               alt={video.title}
//               className="w-full h-full object-cover"
//             />

//             {/* ▶ Play Button */}
//             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//               <button
//                 onClick={() => setActiveVideo(video.iframe)}
//                 className="w-16 h-16 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
//               >
//                 <Play className="w-7 h-7 text-white ml-1" fill="white" />
//               </button>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="p-6">
//         <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900">
//           {video.title}
//         </h3>
//       </div>
//     </div>
//   );
// })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedVideos;


import React, { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    iframe: "https://youtu.be/bxBbdfJQxao",
    title: "Recognising Employee Knowledge Sharing & Protecting Intellectual Contributions",
  },
  {
    iframe: "https://youtu.be/cxZLNI1z6ls",
    title: "Cost-effective L&D initiatives",
  },
  {
    iframe: "https://youtu.be/uIqMytobdbs",
    title:
      "Building a Knowledge-Sharing Workforce",
  },
  {
    iframe: "https://youtu.be/BbqQUAZBrx4",
    title: "Whenever Wherever Learning For Growth",
  },
  {
    iframe: "https://youtu.be/3lyuNZ7uhaQ",
    title: "Fast-Tracking Talent Growth",
  },
  {
    iframe: "https://youtu.be/zAtrIJwocck",
    title:
      "From Fitful to Focused: Unlocking True Learning",
  },
  {
    iframe: "https://youtu.be/C_7ZYzE71iE",
    title:
      "Continuous Learning Continuous Growth",
  },
  {
    iframe: "https://youtu.be/VxbdqXXX8Mk",
    title:
      "Increase Productivity",
  },
  {
    iframe: "https://youtu.be/MwXdRlBndaU",
    title:
      "Explore New Business Opportunities",
  },
  {
    iframe: "https://youtu.be/hnlyV1v2YQg",
    title:
      "Derisk from Incorrect Decisions",
  },
  {
    iframe: "https://youtu.be/ZHO2GXnTTr8",
    title:
      "Voice your Concerns Anonymously",
  },
  {
    iframe: "https://youtu.be/uLIUp-aYnsg",
    title:
      "Equip your Sales Team with Relevant Knowledge",
  },
 
];

const getVideoId = (url) => {
  if (url.includes("youtu.be")) return url.split("youtu.be/")[1];
  return url.split("v=")[1];
};

const FeaturedVideos = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;

  const nextSlide = () => {
    if (currentIndex < videos.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Featured Content
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Videos
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto" />
        </div>

        {/* Slider */}
        <div className="relative">

          <div className="overflow-hidden py-4 ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {videos.map((video, index) => {
                const videoId = getVideoId(video.iframe);

                return (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 h-full ">

                      <div className="relative aspect-video">
                        {activeVideo === video.iframe ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title={video.title}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <img
                              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <button
                                onClick={() =>
                                  setActiveVideo(video.iframe)
                                }
                                className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                              >
                                <Play
                                  className="w-6 h-6 text-white ml-1"
                                  fill="white"
                                />
                              </button>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
            disabled={currentIndex === 0}
          >
           <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
            disabled={currentIndex >= videos.length - itemsPerView}
          >
          <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
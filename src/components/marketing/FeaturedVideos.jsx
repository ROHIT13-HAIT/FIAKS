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
    iframe: "https://youtu.be/0koXRO-rkCk",
    title: "UPI at Galleries Lafayette",
  },
  {
    iframe: "https://youtu.be/WPPzSBOiwno",
    title: "UPI at Eifel towers",
  },
  {
    iframe: "https://youtu.be/SUvjxw_pybs",
    title:
      "Women international Day",
  },
  {
    iframe: "https://youtu.be/Z78ff1eZRYE",
    title: "FIAKS Awards",
  },
  {
    iframe: "https://youtu.be/SjBUzkym9uI",
    title: "FIAKS Digital शिक्षाप्रसार अभियान",
  },
  {
    iframe: "https://youtu.be/w9_-3FvtYok",
    title:
      "Nationwide Training",
  },
  {
    iframe: "https://youtu.be/i_9Imt3tj2Q",
    title:
      "FIAKS Maven",
  },
  {
    iframe: "https://youtu.be/nbiy8yPQHug",
    title:
      "AIFPF",
  },
  {
    iframe: "https://youtu.be/gf7QeRPDijQ",
    title:
      "FLC2025",
  },

];

const getVideoId = (url) => {
  if (url.includes("youtu.be")) return url.split("youtu.be/")[1];
  return url.split("v=")[1];
};

const FeaturedVideos = () => {
  // const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [modalVideo, setModalVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);



  const itemsPerView = 4;

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
        <div className="text-center mb-12">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Featured Content
          </p>
          <div className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#07549c]">Featured</span>{' '}
            <span className="text-black">Videos</span>
          </div>
          <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
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
              {videos.map((video) => {
                const videoId = getVideoId(video.iframe);

                return (
                  <div className="w-full md:w-1/2 lg:w-1/4 px-3 flex-shrink-0">
                    <div
                      className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 h-full transition-transform duration-300 hover:scale-105"
                      onMouseEnter={() => setHoveredVideo(video.iframe)}
                      onMouseLeave={() => setHoveredVideo(null)}
                    >

                      <div className="relative aspect-video">
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <button className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110">
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </button>
                        </div>
                        {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <button
                            onClick={() => setModalVideo(video.iframe)}
                            className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                          >
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </button>
                        </div> */}
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  // </div>
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

      {hoveredVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <div
            className="relative w-[80%] max-w-2xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl animate-[zoomIn_0.25s_ease]"
            onMouseEnter={() => setHoveredVideo(hoveredVideo)}
            onMouseLeave={() => setHoveredVideo(null)}
            style={{ pointerEvents: "auto" }}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
              onClick={() => setHoveredVideo(null)}
            >
              ✕
            </button>

            {/* Video */}
            <iframe
              src={`https://www.youtube.com/embed/${getVideoId(hoveredVideo)}?autoplay=1&mute=1`}
              title="Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedVideos;

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const videos = [
//   {
//     iframe: "https://youtu.be/0koXRO-rkCk",
//     title: "UPI at Galleries Lafayette",
//   },
//   {
//     iframe: "https://youtu.be/WPPzSBOiwno",
//     title: "UPI at Eifel towers",
//   },
//   {
//     iframe: "https://youtu.be/SUvjxw_pybs",
//     title:
//       "Women international Day",
//   },
//   {
//     iframe: "https://youtu.be/Z78ff1eZRYE",
//     title: "FIAKS Awards",
//   },
//   {
//     iframe: "https://youtu.be/SjBUzkym9uI",
//     title: "FIAKS Digital शिक्षाप्रसार अभियान",
//   },
//   {
//     iframe: "https://youtu.be/w9_-3FvtYok",
//     title:
//       "Nationwide Training",
//   },
//   {
//     iframe: "https://youtu.be/i_9Imt3tj2Q",
//     title:
//       "FIAKS Maven",
//   },
//   {
//     iframe: "https://youtu.be/nbiy8yPQHug",
//     title:
//       "AIFPF",
//   },
//   {
//     iframe: "https://youtu.be/gf7QeRPDijQ",
//     title:
//       "FLC2025",
//   },

// ];
// const getVideoId = (url) => {
//   if (url.includes("youtu.be")) return url.split("youtu.be/")[1];
//   return url.split("v=")[1];
// };

// const FeaturedVideos = () => {
//   const [activeVideo, setActiveVideo] = useState(videos[0].iframe);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const itemsPerView = 4;

//   const nextSlide = () => {
//     if (currentIndex < videos.length - itemsPerView) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <section className="py-20 md:py-28 bg-white">
//       <div className="container mx-auto px-4 max-w-7xl">

//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
//             Featured Content
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//             Featured Videos
//           </h2>
//           <div className="w-16 h-1 bg-[#07549c] mx-auto" />
//         </div>

//         {/* MAIN VIDEO */}
//         <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
//           <iframe
//             src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
//             className="w-full h-full"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           />
//         </div>

//         {/* OPTIONAL TITLE */}
//         <h3 className="text-center text-lg font-semibold mb-6 text-slate-800">
//           {videos.find((v) => v.iframe === activeVideo)?.title}
//         </h3>

//         {/* THUMBNAIL NAVIGATION */}
//         <div className="relative">

//           <div className="overflow-hidden">
//             <div
//               className="flex gap-4 transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
//               }}
//             >
//               {videos.map((video, index) => {
//                 const videoId = getVideoId(video.iframe);

//                 return (
//                   <div
//                     key={index}
//                     onClick={() => setActiveVideo(video.iframe)}
//                     className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300
//                       ${
//                         activeVideo === video.iframe
//                           ? "border-[#07549c] scale-105"
//                           : "border-transparent hover:scale-105"
//                       }`}
//                   >
//                     <img
//                       src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
//                       alt={video.title}
//                       className="w-full h-[110px] object-cover"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* LEFT BUTTON */}
//           <button
//             onClick={prevSlide}
//             className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
//             disabled={currentIndex === 0}
//           >
//             <ChevronLeft className="w-6 h-6 text-slate-700" />
//           </button>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={nextSlide}
//             className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
//             disabled={currentIndex >= videos.length - itemsPerView}
//           >
//             <ChevronRight className="w-6 h-6 text-slate-700" />
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedVideos;
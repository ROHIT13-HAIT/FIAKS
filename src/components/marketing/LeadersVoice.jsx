import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';

const leaderVideos = [
  {
    url: 'https://youtu.be/cQU7GFwASaU',
    name: 'Rajiv Anand',
    title: 'Deputy Managing Director, Axis Bank',
    quote: 'FIAKS Focused Acclivity Program of Knowledge Sharing',
  },
  {
    url: 'https://youtu.be/W-VcwTLJQ5Q',
    name: 'Vijay Shekhar Sharma',
    title: 'Founder & CEO, Paytm',
    quote: 'FIAKS Focused Acclivity Program of Knowledge Sharing',
  },
  {
    url: 'https://youtu.be/938Esg2mm-Q',
    name: 'Abhishek Dalmiya',
    title: 'Head Developer Ecosystem & Integrations , Tally Solutions',
    quote: 'FIAKS Focused Acclivity Program of Knowledge Sharing',
  },
  {
    url: 'https://youtu.be/BThYX3O2NjA',
    name: 'Abhishek Dalmiya',
    title: 'Head Developer Ecosystem & Integrations , Tally Solutions',
    quote: 'FIAKS Focused Acclivity Program of Knowledge Sharing',
  },
];

const getVideoId = (url) => {
  if (url.includes("youtu.be")) {
    return url.split("youtu.be/")[1];
  }
  if (url.includes("v=")) {
    return url.split("v=")[1].split("&")[0];
  }
  return "";
};

const LeadersVoice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [playingVideo, setPlayingVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);


  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= leaderVideos.length - itemsPerView + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? leaderVideos.length - itemsPerView : prev - 1
    );
  };

  return (
    <section className="py-20 md:py-28 bg-white" id="leaders-voice" data-testid="leaders-voice-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Leaders Voice
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Hear what industry leaders have to say about us
          </p>
          <div className="w-16 h-1 bg-[#07549c] mx-auto mt-4" />
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
            data-testid="leaders-prev-btn"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
            data-testid="leaders-next-btn"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
            >
              {leaderVideos.map((leader, index) => {
                const videoId = getVideoId(leader.url);

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <div className="leader-video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100">

                      {/* Video/Image */}
                      {/* <div className="relative aspect-video"> */}

                      <div
                        className="relative aspect-video cursor-pointer"
                        onMouseEnter={() => setHoveredVideo(leader.url)}
                        onMouseLeave={() => setHoveredVideo(null)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                          alt={leader.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                  <button
                                                    // onClick={() => setModalVideo(video.iframe)}
                                                    className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                                                  >
                                                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                                  </button>
                                                </div>
                      </div>
                      {/* </div> */}

                      {/* Content */}
                      <div className="p-6">
                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                        <p className="text-slate-600 italic mb-4">{leader.quote}</p>
                        {/* <div className="border-t pt-4">
                          <h4 className="font-['Outfit'] font-semibold text-slate-900">
                            {leader.name}
                          </h4>
                          <p className="text-sm text-slate-500">{leader.title}</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {hoveredVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">

          <div
            className="relative w-[80%] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl animate-[zoomIn_0.25s_ease]"
            onMouseEnter={() => setHoveredVideo(hoveredVideo)}
            onMouseLeave={() => setHoveredVideo(null)}
            style={{ pointerEvents: "auto" }}
          >
            {/* Close */}
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

export default LeadersVoice;


// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const leaderVideos = [
//   {
//     url: 'https://youtu.be/cQU7GFwASaU',
//     name: 'Rajiv Anand',
//     title: 'Deputy Managing Director, Axis Bank',
//     quote: 'FIAKS Focused Activity Program of Knowledge Sharing',
//   },
//   {
//     url: 'https://youtu.be/W-VcwTLJQ5Q',
//     name: 'Vijay Shekhar Sharma',
//     title: 'Founder & CEO, Paytm',
//     quote: 'FIAKS Focused Activity Program of Knowledge Sharing',
//   },
//   {
//     url: 'https://youtu.be/938Esg2mm-Q',
//     name: 'Abhishek Dalmiya',
//     title: 'Head Developer Ecosystem & Integrations, Tally Solutions',
//     quote: 'FIAKS Focused Activity Program of Knowledge Sharing',
//   },
//   {
//     url: 'https://youtu.be/BThYX3O2NjA',
//     name: 'Abhishek Dalmiya',
//     title: 'Head Developer Ecosystem & Integrations, Tally Solutions',
//     quote: 'FIAKS Focused Activity Program of Knowledge Sharing',
//   },
// ];

// const getVideoId = (url) => {
//   if (url.includes("youtu.be")) return url.split("youtu.be/")[1];
//   if (url.includes("v=")) return url.split("v=")[1].split("&")[0];
//   return "";
// };

// const LeadersVoice = () => {
//   const [activeVideo, setActiveVideo] = useState(leaderVideos[0].url);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const itemsPerView = Math.min(4, leaderVideos.length);
//   const isScrollable = leaderVideos.length > itemsPerView;

//   const nextSlide = () => {
//     if (!isScrollable) return;
//     setCurrentIndex((prev) =>
//       prev + 1 >= leaderVideos.length - itemsPerView + 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     if (!isScrollable) return;
//     setCurrentIndex((prev) =>
//       prev - 1 < 0 ? leaderVideos.length - itemsPerView : prev - 1
//     );
//   };

//   const activeData = leaderVideos.find(v => v.url === activeVideo);

//   return (
//     <section className="py-20 md:py-28 bg-white">

//       <div className="container mx-auto px-4 max-w-7xl">

//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
//             Testimonials
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//             Leaders Voice
//           </h2>
//           <div className="w-16 h-1 bg-[#07549c] mx-auto" />
//         </div>

//         {/* 🎥 MAIN VIDEO */}
//         <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
//           <iframe
//             src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
//             className="w-full h-full"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//             title="Leader Video"
//           />
//         </div>

//         {/* TEXT */}
//         <div className="text-center mb-8">
//           <Quote className="w-8 h-8 text-[#07549c]/30 mx-auto mb-2" />
//           <p className="text-slate-600 italic">{activeData?.quote}</p>
//           <h4 className="font-semibold mt-2">{activeData?.name}</h4>
//           <p className="text-sm text-slate-500">{activeData?.title}</p>
//         </div>

//         {/* 🎞️ THUMBNAILS */}
//         <div className="relative">

//           <div className="overflow-hidden">
//             <div
//               className={`flex gap-4 transition-transform duration-500 
//                 ${!isScrollable ? "justify-center" : ""}`}
//               style={{
//                 transform: isScrollable
//                   ? `translateX(-${(currentIndex * 100) / itemsPerView}%)`
//                   : "none",
//               }}
//             >
//               {leaderVideos.map((video, index) => {
//                 const videoId = getVideoId(video.url);

//                 return (
//                   <div
//                     key={index}
//                     onClick={() => setActiveVideo(video.url)}
//                     className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300
//                       ${
//                         activeVideo === video.url
//                           ? "border-[#07549c] scale-105"
//                           : "border-transparent hover:scale-105"
//                       }`}
//                   >
//                     <img
//                       src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
//                       alt={video.name}
//                       className="w-full h-[110px] object-cover"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* NAV BUTTONS (ONLY IF NEEDED) */}
//           {isScrollable && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute -left-4 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-slate-50"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-slate-50"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </>
//           )}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default LeadersVoice;
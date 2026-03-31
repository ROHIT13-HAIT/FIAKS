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
  const [playingVideo, setPlayingVideo] = useState(null);
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
                      <div className="relative aspect-video">

                        {playingVideo === index ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title={leader.name}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            {/* ✅ Thumbnail */}
                            <img
                              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />

                            {/* ▶ Play */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <button
                                onClick={() => setPlayingVideo(index)}
                                className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                              >
                                <Play className="w-6 h-6 text-white ml-1" fill="white" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>

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
    </section>
  );
};

export default LeadersVoice;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';

import banner from '../../src/images/banners/testimonials.jpg' 

import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';



const videos1 = [
  {
    iframe: "https://youtu.be/hFI_91J_Mfk",
    title: "",
  },
  {
    iframe: "https://youtu.be/o91VgBErdGU",
    title: "",
  },
  {
    iframe: "https://youtu.be/51CogScadLw",
    title: "Mr. Jaspal Bindra",
  },
  {
    iframe: "https://youtu.be/4lphoUhvTEE",
    title: "Mr. Dilip Asbe",
  },
  {
    iframe: "https://youtu.be/mdU9FkewLdQ",
    title: "Mr. Vijay Shekhar Sharma",
  },
  {
    iframe: "https://youtu.be/DL21Sq7XmMI",
    title: "Mr. Rohit Wahi",
  },
  {
    iframe: "https://youtu.be/bcqp8Xrhy-s",
    title: "Mr. Manish Khera",
  },
  {
    iframe: "https://youtu.be/n-RZ-IpLcgQ",
    title: "Mr. Vishwas Patel",
  },
  {
    iframe: "https://youtu.be/02upxuNVTNM",
    title: "Mr. Dewang Neralla",
  },
  {
    iframe: "https://youtu.be/q9dDtRysPTA",
    title: "Mr. Parag Mehta",
  },
  {
    iframe: "https://youtu.be/gC9VqbWJbJQ",
    title: "Mr. Sony A",
  },
  {
    iframe: "https://youtu.be/qe9s9NifOsw",
    title: "Mr. Arvind Narayanan",
  },
  {
    iframe: "https://youtu.be/LobkGQLo4MQ",
    title: "Mr. Narayan Rao",
  },
  {
    iframe: "https://youtu.be/UjA2y8famUM",
    title: "Mr. Roopesh Chandran",
  },
  {
    iframe: "https://youtu.be/2P8ZKLkJuxM",
    title: "Mr. Rakesh Bhanushali",
  },
  {
    iframe: "https://youtu.be/l4ApxxkOxYI",
    title: "Mr. Pratyush Halen",
  },
  {
    iframe: "https://youtu.be/gD_qsL81uOM",
    title: "Mr. Saurabh Soni",
  },
  {
    iframe: "https://youtu.be/FrYaL-z1FdQ",
    title: "Mr. Muthu Krishnan",
  },
  {
    iframe: "https://youtu.be/xmhOT1ejBmI",
    title: "Mr. Ruchit Jangid",
  },
  {
    iframe: "https://youtu.be/DXBAf48unrg",
    title: "Mr. K Aayush Mazumdar",
  },
  {
    iframe: "https://youtu.be/hOvoQyRPZd4",
    title: "Mr. Nagaraj Mylandla",
  },
  {
    iframe: "https://youtu.be/gIBtLlz7JMw",
    title: "Mr. Sunil Dalal",
  },
  {
    iframe: "https://youtu.be/3WpcA8_bDGw",
    title: "Mr. Arun Tanksali",
  },
  {
    iframe: "https://youtu.be/nDwlg78oSLY",
    title: "Mr. Ram Rastogi",
  },
  {
    iframe: "https://youtu.be/3RceTcnjK8c",
    title: "Mr. Rajesh Prasad",
  }
];

const Testimonials = () => {
  // Separate state for videos1 (first row)
  const [activeVideo1, setActiveVideo1] = useState(videos1[0]?.iframe || '');
  const [currentIndex1, setCurrentIndex1] = useState(0);


  const itemsPerView = 4;

  // Navigation for first row
  const nextSlide1 = () => {
    if (currentIndex1 < videos1.length - itemsPerView) {
      setCurrentIndex1((prev) => prev + 1);
    }
  };

  const prevSlide1 = () => {
    if (currentIndex1 > 0) {
      setCurrentIndex1((prev) => prev - 1);
    }
  };

  const getVideoId = (url) => {
    if (!url) return '';
    if (url.includes("youtu.be")) return url.split("youtu.be/")[1];
    if (url.includes("v=")) return url.split("v=")[1];
    return url;
  };



  return (
    <div className="min-h-screen bg-white" data-testid="events-page">
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="relative" style={{ marginTop: '80px' }}>
        <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
        <div className="">
          <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
              Testimonials
            </h1>
            <p className="text-white text-lg max-w-2xl">
              Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
            </p>
            <button class="animate slide-up delay-5 bg-white text-black px-8 py-3 mt-6 rounded-full hover:scale-105 transition show">Learn More</button>
          </div>
        </div>
      </section>
      <section className="pt-16 md:pt-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Testimonials
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
            <p className="text-slate-700 text-lg leading-relaxed">Hear What Industry Leaders Have to Say About Us!</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className=" ">

            {/* 1st row - videos1 */}
            <div className="container mx-auto max-w-7xl mb-20">
              {/* MAIN VIDEO */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(activeVideo1)}`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              {/* VIDEO DESCRIPTION - Below main video */}
              {activeVideo1 && (
                <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200 flex justify-center items-center">
                  <Quote className="mw-8 h-8 text-[#07549c]/30 mr-3" style={{ minWidth: '30px' }} />
                  <p className="text-lg font-medium text-slate-800">
                    {videos1.find(video => video.iframe === activeVideo1)?.title}
                  </p>
                </div>
              )}
              {/* THUMBNAIL NAVIGATION */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${(currentIndex1 * 100) / itemsPerView}%)`,
                    }}
                  >
                    {videos1.map((video, index) => {
                      const videoId = getVideoId(video.iframe);
                      return (
                        <div
                          key={index}
                          onClick={() => setActiveVideo1(video.iframe)}
                          className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                    ${activeVideo1 === video.iframe
                              ? "border-[#07549c] scale-105"
                              : "border-transparent hover:scale-105"
                            }`}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-[110px] object-cover"
                          />
                          {/* <div className="p-2 bg-white">
                                                        <p className="text-xs font-medium">{video.title}</p>
                                                    </div> */}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* LEFT BUTTON - Row 1 */}
                <button
                  onClick={prevSlide1}
                  className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                  disabled={currentIndex1 === 0}
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700" />
                </button>

                {/* RIGHT BUTTON - Row 1 */}
                <button
                  onClick={nextSlide1}
                  className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                  disabled={currentIndex1 >= videos1.length - itemsPerView}
                >
                  <ChevronRight className="w-6 h-6 text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-[#07549c]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Partner with Fintech Forum to organize industry-leading events and reach thousands of BFSI professionals.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-[#07549c] rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;

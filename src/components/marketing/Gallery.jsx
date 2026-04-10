import React from 'react'

const gridImg = [
  "/fiaks/1.jpg",
  "/fiaks/2.jpg",
  "/fiaks/3.jpg",
  "/fiaks/4.jpg",
  "/fiaks/5.jpg",
  "/fiaks/6.jpg",
  "/fiaks/7.jpg",
  "/fiaks/8.jpg",
  "/fiaks/9.jpg",
  "/fiaks/10.jpg",
  "/fiaks/11.jpg",
  "/fiaks/12.jpg",
  "/fiaks/13.jpg",
  "/fiaks/14.jpg",
  "/fiaks/15.jpg",
];

const GalleryImg = ({ src }) => (
  <div className="flex items-center justify-center">
    <img
      src={src}
      alt="partner"
      className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
    />
  </div>
);

const Gallery = () => {
  return (
    <div>
      <div className="mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
            Worldwide Presence
          </p>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Gallery
          </h2>
          <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Connecting fintech professionals across major financial hubs worldwide
          </p>
        </div>
        <div className="gallery">
          {gridImg.map((src, index) => (
            <GalleryImg key={index} src={src} />
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Gallery
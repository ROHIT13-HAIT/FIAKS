import React, { useState } from "react"
import Header from "../../components/marketing/Header"
import Footer from "../../components/marketing/Footer"
import { ChevronLeft, ChevronRight } from "lucide-react"

/* ================= VIDEO COMPONENT ================= */

const VideoGallery = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(videos[0].iframe)
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 3

  const getVideoId = (url) => {
    if (url.includes("youtu.be")) return url.split("youtu.be/")[1]
    return url.split("v=")[1]
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, videos.length - itemsPerView)
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div>

      {/* MAIN VIDEO */}
      <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      <p className="text-center text-sm text-slate-600 mb-4">
        {videos.find((v) => v.iframe === activeVideo)?.title}
      </p>

      {/* THUMBNAILS */}
      <div className="relative">

        <div className="overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {videos.map((video, index) => {
              const id = getVideoId(video.iframe)

              return (
                <div
                  key={index}
                  onClick={() => setActiveVideo(video.iframe)}
                  className={`min-w-[160px] cursor-pointer rounded-lg overflow-hidden border-2 ${
                    activeVideo === video.iframe
                      ? "border-[#07549c]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    className="w-full h-[90px] object-cover"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

/* ================= PAGE ================= */

export default function DigitalPage() {
  return (
    <div className="bg-white text-slate-800">

      <Header />

      {/* ================= HERO ================= */}
      <section className="py-28 text-center bg-gradient-to-r from-[#07549c] to-[#0a192f] text-white">
        <h1 className="text-4xl font-bold mb-4">
          FIAKS Global Meets Local
        </h1>

        <button className="px-6 py-2 bg-white text-[#07549c] rounded-lg">
          Partner With Us
        </button>
      </section>

      {/* ================= SNAPSHOT (FIXED) ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">

          <div>
            <VideoGallery videos={[
              { iframe: "https://youtu.be/0koXRO-rkCk", title: "Edition 3 Snapshot" }
            ]} />
            <p className="text-center mt-3 text-xl text-[#07549c] font-medium">
              Snapshot - Edition 3.0 - FY2024-25
            </p>
            <p className="text-center max-w-2xl mx-auto text-slate-600 mb-10">
          Digital Product Upgradation Training Sessions for Cooperative & Regional Rural Banks
        </p>
          </div>

          <div>
            <VideoGallery videos={[
              { iframe: "https://youtu.be/WPPzSBOiwno", title: "Edition 2 Snapshot" }
            ]} />
            <p className="text-center mt-3 text-xl text-[#07549c] font-medium">
              Snapshot - Edition 2.0 - FY2023-24
            </p>
             <p className="text-center max-w-2xl mx-auto text-slate-600 mb-10">
          Digital Product Upgradation Training Sessions for Cooperative & Regional Rural Banks
        </p>
          </div>

        </div>
      </section>

      {/* ================= EDITION 3 ================= */}
      <section className="py-24 bg-gray-50">

        <h2 className="text-center text-2xl font-bold text-[#07549c] mb-3">
          Edition 3.0 [FY 2024-25]
        </h2>

        <p className="text-center max-w-3xl mx-auto text-slate-600 mb-10 px-4">
          In FY 2024-25, this edition saw an exceptional nationwide response! Over 1,700 progressive bankers from more than 700 unique cooperative banks and RRBs participated in this specialized training, fostering a strong culture of innovation, collaboration, and digital excellence.
        </p>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 items-start">

  {/* VIDEO SIDE (REFERENCE HEIGHT) */}
  <div>
    <VideoGallery videos={[
      { iframe: "https://youtu.be/i_9Imt3tj2Q", title: "Pune" },
      { iframe: "https://youtu.be/nbiy8yPQHug", title: "Ahmedabad" },
      { iframe: "https://youtu.be/gf7QeRPDijQ", title: "Kolkata" },
    ]} />
  </div>

  {/* MAP SIDE (MATCH HEIGHT CLEANLY) */}
  <div className="flex items-center justify-center ">
    <img
      src="/fiaks/map3.png"
      className="w-full max-h-[520px] object-contain rounded-xl shadow-md"
    />
  </div>

</div>
      </section>

      {/* ================= EDITION 2 ================= */}
      <section className="py-24 bg-white">

        <h2 className="text-center text-2xl font-bold text-[#07549c] mb-3">
          Edition 2.0 [FY 2023-24]
        </h2>

        <p className="text-center max-w-3xl mx-auto text-slate-600 mb-10 px-4">
         In association with NPCI we introduced landmark nationwide Digital Product Upgradation Training Sessions in FY 2023-24, aimed at empowering Cooperative Banks and Regional Rural Banks (RRBs) across multiple states. This initiative marked a significant leap in the digital transformation journey of the cooperative banking sector.
        </p>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 items-start">

  {/* VIDEO SIDE (REFERENCE HEIGHT) */}
  <div>
    <VideoGallery videos={[
      { iframe: "https://youtu.be/i_9Imt3tj2Q", title: "Pune" },
      { iframe: "https://youtu.be/nbiy8yPQHug", title: "Ahmedabad" },
      { iframe: "https://youtu.be/gf7QeRPDijQ", title: "Kolkata" },
    ]} />
  </div>

  {/* MAP SIDE (MATCH HEIGHT CLEANLY) */}
  <div className="flex items-center justify-center">
    <img
      src="/fiaks/map2.png"
      className="w-full max-h-[520px] object-contain rounded-xl shadow-md"
    />
  </div>

</div>
      </section>

      {/* ================= EDITION 1 ================= */}
      <section className="py-24 bg-gray-50">

        <h2 className="text-center text-2xl font-bold text-[#07549c] mb-3">
          Edition 1.0
        </h2>

        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-10">
          Coffee with Treasury: For the launch edition of FIAKS Global meet Local, we organised Knowledge Sharing sessions exclusively for the CEO / CXO / Treasury professionals from cooperative banks to bridge the knowledge divide in association with SBM Bank India
        </p>

        <div className="max-w-4xl mx-auto px-4">
          <VideoGallery videos={[
            { iframe: "https://youtu.be/0koXRO-rkCk", title: "Session 1" },
            { iframe: "https://youtu.be/WPPzSBOiwno", title: "Session 2" },
          ]} />
        </div>

      </section>

      <Footer />

    </div>
  )
}
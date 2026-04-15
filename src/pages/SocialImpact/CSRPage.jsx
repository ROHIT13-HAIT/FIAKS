// "use client"

// import React, { useState, useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import Header from "../../components/marketing/Header"
// import Footer from "../../components/marketing/Footer"

// /* ================= FRAME ================= */

// function FrameComponent({ video, isHovered }) {
//   const videoRef = useRef(null)

//   useEffect(() => {
//     if (isHovered) videoRef.current?.play()
//     else videoRef.current?.pause()
//   }, [isHovered])

//   return (
//     <div className="relative w-full h-full overflow-hidden rounded-xl">
//       <video
//         ref={videoRef}
//         src={video}
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />
//     </div>
//   )
// }

// /* ================= DYNAMIC GRID ================= */

// function DynamicFrameLayout({ frames }) {
//   const [hovered, setHovered] = useState(null)

//   /* ✅ AUTO GRID SIZE (NEW CHANGE) */
//   const size = Math.ceil(Math.sqrt(frames.length))

//   /* 🔥 ROW EXPANSION (UPDATED FOR DYNAMIC SIZE) */
//   const getRowSizes = () => {
//     if (!hovered) return `repeat(${size}, 1fr)`

//     return Array(size)
//       .fill(1)
//       .map((_, i) => (i === hovered.row ? "2fr" : "1fr"))
//       .join(" ")
//   }

//   /* 🔥 COL EXPANSION (UPDATED FOR DYNAMIC SIZE) */
//   const getColSizes = () => {
//     if (!hovered) return `repeat(${size}, 1fr)`

//     return Array(size)
//       .fill(1)
//       .map((_, i) => (i === hovered.col ? "2fr" : "1fr"))
//       .join(" ")
//   }

//   return (
//     <div
//       className="w-full h-full grid"
//       style={{
//         gridTemplateRows: getRowSizes(),
//         gridTemplateColumns: getColSizes(),
//         gap: "8px",
//         transition: "all 0.4s ease",
//       }}
//     >
//       {frames.map((frame, index) => {
//         const row = Math.floor(index / size)
//         const col = index % size

//         const isActive =
//           hovered?.row === row && hovered?.col === col

//         return (
//           <motion.div
//             key={frame.id}
//             onMouseEnter={() => setHovered({ row, col })}
//             onMouseLeave={() => setHovered(null)}
//             className="relative"
//           >
//             <FrameComponent video={frame.video} isHovered={isActive} />
//           </motion.div>
//         )
//       })}
//     </div>
//   )
// }

// /* ================= PAGE ================= */

// const CSRPage = () => {

//   const frames = [
//     {
//       id: 1,
//       video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
//     },
//     {
//       id: 2,
//       video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
//     },
//     {
//       id: 3,
//       video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
//     },
//     {
//       id: 4,
//       video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
//     },
//   ]

//   return (
//     <div className="bg-white">

//       <Header />

//       {/* HERO */}
//       <section className="bg-gradient-to-r from-[#07549c] to-[#0a192f] text-white py-24 text-center">
//         <h1 className="text-4xl font-bold mb-4">
//           Corporate Social Responsibility
//         </h1>
//         <p className="text-white/70">
//           Driving meaningful change through impactful initiatives
//         </p>
//       </section>

//       {/* 🔥 VIDEO GRID SECTION */}
//       <section className="py-24 bg-[#0a192f]">

//         <div className="max-w-7xl mx-auto px-4">

//           <div className="text-center mb-10 text-white">
//             <h2 className="text-3xl font-semibold mb-2">
//               Social Initiatives
//             </h2>
//             <p className="text-white/60">
//               Hover any section to explore
//             </p>
//           </div>

//           {/* ✅ HEIGHT REDUCED (YOUR REQUEST) */}
//           <div className="h-[200px] md:h-[250px] rounded-2xl  shadow-2xl">
//             <DynamicFrameLayout frames={frames} />
//           </div>

//         </div>

//       </section>

     

//       <Footer />

//     </div>
//   )
// }

// export default CSRPage



// import React, { useState } from "react"
// import { motion } from "framer-motion"
// import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"

// import Header from "../../components/marketing/Header"
// import Footer from "../../components/marketing/Footer"

// /* ================= VIDEO DATA ================= */

// const videos = [
//   { iframe: "https://youtu.be/0koXRO-rkCk", title: "UPI at Galleries Lafayette" },
//   { iframe: "https://youtu.be/WPPzSBOiwno", title: "UPI at Eiffel Towers" },
//   { iframe: "https://youtu.be/SUvjxw_pybs", title: "Women International Day" },
//   { iframe: "https://youtu.be/Z78ff1eZRYE", title: "FIAKS Awards" },
//   { iframe: "https://youtu.be/SjBUzkym9uI", title: "Digital Campaign" },
//   { iframe: "https://youtu.be/w9_-3FvtYok", title: "Nationwide Training" },
//   { iframe: "https://youtu.be/i_9Imt3tj2Q", title: "FIAKS Maven" },
//   { iframe: "https://youtu.be/nbiy8yPQHug", title: "AIFPF" },
//   { iframe: "https://youtu.be/gf7QeRPDijQ", title: "FLC2025" },
// ]

// const getVideoId = (url) => {
//   if (url.includes("youtu.be")) return url.split("youtu.be/")[1]
//   return url.split("v=")[1]
// }

// /* ================= PAGE ================= */

// export default function CSRPage() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [hoveredVideo, setHoveredVideo] = useState(null)
//   const [modalVideo, setModalVideo] = useState(null)

//   const itemsPerView = 3

//   const nextSlide = () => {
//     if (currentIndex < videos.length - itemsPerView) {
//       setCurrentIndex((prev) => prev + 1)
//     }
//   }

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1)
//     }
//   }

//   return (
//     <div className="bg-white min-h-screen">

//       {/* ================= HEADER ================= */}
//       <Header />

//       {/* ================= HERO ================= */}
//       <section className="relative py-28 bg-gradient-to-br from-[#07549c] via-[#0a192f] to-black text-white overflow-hidden">

//         {/* glow */}
//         <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px]" />

//         <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Corporate Social Responsibility
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-white/70 max-w-xl mx-auto"
//           >
//             Driving meaningful change through impactful initiatives.
//           </motion.p>
//         </div>
//       </section>

//       {/* ================= VIDEO SECTION ================= */}
//       <section className="py-20 md:py-28 bg-white">
//         <div className="container mx-auto px-4 max-w-7xl">

//           {/* HEADER */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
//               CSR Initiatives
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               Social Impact Videos
//             </h2>
//             <div className="w-16 h-1 bg-[#07549c] mx-auto" />
//           </motion.div>

//           {/* SLIDER */}
//           <div className="relative">

//             <div className="overflow-hidden py-4">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{
//                   transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
//                 }}
//               >
//                 {videos.map((video, index) => {
//                   const videoId = getVideoId(video.iframe)

//                   return (
//                     <div
//                       key={index}
//                       className="w-full md:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
//                     >
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 h-full hover:scale-105 transition-all duration-300"
//                         onMouseEnter={() => setHoveredVideo(video.iframe)}
//                         onMouseLeave={() => setHoveredVideo(null)}
//                       >

//                         {/* THUMBNAIL */}
//                         <div className="relative aspect-video">
//                           <img
//                             src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
//                             alt={video.title}
//                             className="w-full h-full object-cover"
//                           />

//                           {/* PLAY BUTTON */}
//                           <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                             <button
//                               onClick={() => setModalVideo(video.iframe)}
//                               className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:scale-110 transition"
//                             >
//                               <Play className="text-white ml-1" fill="white" />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="p-5">
//                           <h3 className="text-lg font-semibold text-slate-900">
//                             {video.title}
//                           </h3>
//                         </div>

//                       </motion.div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* CONTROLS */}
//             <button
//               onClick={prevSlide}
//               className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50"
//             >
//               <ChevronLeft />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50"
//             >
//               <ChevronRight />
//             </button>

//           </div>
//         </div>

//         {/* ================= HOVER VIDEO ================= */}
//         {hoveredVideo && !modalVideo && (
//           <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
//             <div
//               className="relative w-[80%] max-w-xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
//               style={{ pointerEvents: "auto" }}
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${getVideoId(hoveredVideo)}?autoplay=1&mute=1`}
//                 className="w-full h-full"
//                 allow="autoplay"
//               />
//             </div>
//           </div>
//         )}

//         {/* ================= MODAL VIDEO ================= */}
//         {modalVideo && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">

//             <div className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">

//               <button
//                 onClick={() => setModalVideo(null)}
//                 className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
//               >
//                 <X />
//               </button>

//               <iframe
//                 src={`https://www.youtube.com/embed/${getVideoId(modalVideo)}?autoplay=1`}
//                 className="w-full h-full"
//                 allow="autoplay"
//                 allowFullScreen
//               />
//             </div>

//           </div>
//         )}
//       </section>

//       {/* ================= FOOTER ================= */}
//       <Footer />

//     </div>
//   )
// }

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

import Header from "../../components/marketing/Header"
import Footer from "../../components/marketing/Footer"

/* ================= VIDEO DATA ================= */

const videos = [
  { iframe: "https://youtu.be/0koXRO-rkCk", title: "UPI at Galleries Lafayette" },
  { iframe: "https://youtu.be/WPPzSBOiwno", title: "UPI at Eiffel Towers" },
  { iframe: "https://youtu.be/SUvjxw_pybs", title: "Women International Day" },
  { iframe: "https://youtu.be/Z78ff1eZRYE", title: "FIAKS Awards" },
  { iframe: "https://youtu.be/SjBUzkym9uI", title: "Digital Campaign" },
  { iframe: "https://youtu.be/w9_-3FvtYok", title: "Nationwide Training" },
  { iframe: "https://youtu.be/i_9Imt3tj2Q", title: "FIAKS Maven" },
  { iframe: "https://youtu.be/nbiy8yPQHug", title: "AIFPF" },
  { iframe: "https://youtu.be/gf7QeRPDijQ", title: "FLC2025" },
]

const getVideoId = (url) => {
  if (url.includes("youtu.be")) return url.split("youtu.be/")[1]
  return url.split("v=")[1]
}

/* ================= PAGE ================= */

export default function CSRPage() {

  const [activeVideo, setActiveVideo] = useState(videos[0].iframe)
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 4

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, videos.length - itemsPerView)
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-br from-[#07549c] via-[#0a192f] to-black text-white overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px]" />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Corporate Social Responsibility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            Driving meaningful change through impactful initiatives.
          </motion.p>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="py-20 md:py-28 bg-white">

        <div className="container mx-auto px-4 max-w-7xl">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              CSR Initiatives
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Social Impact Videos
            </h2>

            <div className="w-16 h-1 bg-[#07549c] mx-auto" />
          </motion.div>

          {/* 🔥 MAIN VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6"
          >
            <iframe
              src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
              className="w-full h-full"
              allow=" encrypted-media"
              allowFullScreen
            />
          </motion.div>

          {/* TITLE */}
          <h3 className="text-center text-sm md:text-base font-semibold mb-8 text-slate-800">
            {videos.find((v) => v.iframe === activeVideo)?.title}
          </h3>

          {/* 🔥 THUMBNAILS */}
          <div className="relative">

            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                }}
              >

                {videos.map((video, index) => {
                  const videoId = getVideoId(video.iframe)

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveVideo(video.iframe)}
                      className={`min-w-[200px] cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 
                      ${
                        activeVideo === video.iframe
                          ? "border-[#07549c] scale-105 shadow-lg"
                          : "border-transparent hover:scale-105"
                      }`}
                    >

                      <img
                        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-[110px] object-cover"
                      />

                    </div>
                  )
                })}

              </div>
            </div>

            {/* LEFT */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft />
            </button>

            {/* RIGHT */}
            <button
              onClick={nextSlide}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50"
              disabled={currentIndex >= videos.length - itemsPerView}
            >
              <ChevronRight />
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  )
}
import React, { useEffect, useState } from "react";
import Header from "../components/marketing/Header";
import Footer from "../components/marketing/Footer";
import { motion, AnimatePresence } from "framer-motion";
import StatsCounter from "../components/marketing/StatsCounter";
import GlobalCommunities from "../components/marketing/GlobalCommunities";
import DottedMap from "dotted-map";

const WhoWeArePage = () => {

  const data = [
    {
      title: "What is FIAKS?",
      img: "/fiaks/whoweare1.jpg",
      desc: `Forum of Industry and Academic Knowledge Sharing (FIAKS) by Anuradha Panditrao is a community of CEOs, CXOs, and Founders in Banking, Payments, Fintech, E-commerce, Insurance, Mutual Funds, and several other sectors created to share knowledge among industry leaders and build priceless relations.`,
    },
    {
      title: "Why FIAKS?",
      img: "/fiaks/whoweare2.jpg",
      desc: `FIAKS is a community of intellectual minds that helps experts to share their knowledge and leaders polish theirs. With FIAKS, there is no lagging behind on what’s latest happening internationally, domestically, on the regulatory front, what’s brewing in tech, industry reports, important audio, trending BFSI-related videos, and much more.`,
    },
    {
      title: "Who is FIAKS for?",
      img: "/fiaks/whoweare3.png",
      desc: `FIAKS is for c-suite executives and forward-thinking professionals. FIAKS is a community driven by experts and leaders from the BFSI, Fintech, Payments, Mutual Funds, E-Commerce, and several other industries.`,
    },
  ];

  const roles = [
  "Chief Executive Officers",
  "Managing Directors",
  "Chief Technology Officers",
  "Founders / Co Founders",
  "Chief Digital Officers",
  "Chief Innovation Officers",
  "Chief Finance Officers",
  "Chief Product Officers",
  "General Managers",
  "Chief Information Officers",
  "Chief Risk Officers",
  "Chief Operating Officers",
];

const industries = [
  { name: "BANKING", img: "/fiaks/banking.jpg" },
  { name: "FINTECH", img: "/fiaks/fintech.jpg" },
  { name: "PAYMENTS", img: "/fiaks/payments.jpg" },
  { name: "MUTUAL FUNDS", img: "/fiaks/mutual-funds.jpg" },
  { name: "INSURANCE", img: "/fiaks/insurance.jpg" },
  { name: "E-COMMERCE", img: "/fiaks/e-commerce.jpg" },
  { name: "REGULATORS", img: "/fiaks/regulators.jpg" },
  { name: "MFI's", img: "/fiaks/MFIs.jpg" },
  { name: "STRATEGY & CONSULTING", img: "/fiaks/consulting.jpg" },
  { name: "VC/PE", img: "/fiaks/VCPE.jpg" },
  { name: "MEDIA", img: "/fiaks/media.jpg" },
  { name: "ASSOCIATION", img: "/fiaks/association.jpg" },
];

// const fintechCountries = [
//   { name: 'Canada', coordinates: [-106.3468, 56.1304] },
//   { name: 'USA', coordinates: [-95.7129, 37.0902] },
//   { name: 'UK', coordinates: [-3.4359, 55.3781] },
//   { name: 'Germany', coordinates: [10.4515, 51.1657] },
//   { name: 'Ghana', coordinates: [-1.0232, 7.9465] },
//   { name: 'Nigeria', coordinates: [8.6753, 9.0820] },
//   { name: 'Egypt', coordinates: [30.8025, 26.8206] },
//   { name: 'Kenya', coordinates: [37.9062, -0.0236] },
//   { name: 'South Africa', coordinates: [22.9375, -30.5595] },
//   { name: 'Israel', coordinates: [34.8516, 31.0461] },
//   { name: 'Ethiopia', coordinates: [40.4897, 9.1450] },
//   { name: 'Bahrain', coordinates: [50.6378, 25.9304] },
//   { name: 'UAE', coordinates: [53.8478, 23.4241] },
//   { name: 'Maldives', coordinates: [73.2207, 3.2028] },
//   { name: 'Sri Lanka', coordinates: [80.7718, 7.8731] },
//   { name: 'Nepal', coordinates: [84.1240, 28.3949] },
//   { name: 'India', coordinates: [78.9629, 20.5937] },
//   { name: 'Bangladesh', coordinates: [90.3563, 23.6850] },
//   { name: 'Myanmar', coordinates: [95.9560, 21.9162] },
//   { name: 'Malaysia', coordinates: [101.9758, 4.2105] },
//   { name: 'Singapore', coordinates: [103.8198, 1.3521] },
//   { name: 'Vietnam', coordinates: [108.2772, 14.0583] },
//   { name: 'Hong Kong', coordinates: [114.1694, 22.3193] },
//   { name: 'Philippines', coordinates: [121.7740, 12.8797] },
//   { name: 'Indonesia', coordinates: [113.9213, -0.7893] },
//   { name: 'Australia', coordinates: [133.7751, -25.2744] },
// ];

  const [active, setActive] = useState(0);

  /* 🔁 AUTO SWITCH */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


console.log(motion)


  return (
    <div className="bg-white">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#07549c] to-[#054178] text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Who We Are
        </h1>
      </section>

      {/* SUBTITLE */}
      <div className="bg-slate-100 py-6 text-center">
        <p className="text-lg md:text-xl text-slate-700 font-medium px-4 max-w-4xl mx-auto">
          "Building A World Of Knowledge Is Building Value For Times To Come"
        </p>
      </div>

      {/* 🔥 INTERACTIVE SECTION */}
      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[280px_1fr] gap-12 items-center">

          {/* LEFT SIDE (SMALL CARDS) */}
          <div className="space-y-4">

            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 
                  ${
                    active === i
                      ? "bg-[#07549c] text-white shadow-lg scale-[1.02]"
                      : "bg-white text-slate-700 hover:shadow-md"
                  }`}
              >
                {item.title}
              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
              >

                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl shadow-xl mb-6 group">
                  <img
                    src={data[active].img}
                    className="w-full h-[360px] object-cover transform transition duration-700 group-hover:scale-110 group-hover:-translate-y-3"
                  />
                </div>

                {/* CONTENT */}
                <p className="text-slate-600 leading-relaxed text-lg">
                  {data[active].desc}
                </p>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </section>

      <StatsCounter />
      <GlobalCommunities />

      {/* PROFILE SECTION */}
<section className="relative py-28 overflow-hidden text-white">

  {/* 🌌 BASE GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#07549c] via-[#064a8a] to-[#032c55]"></div>

  {/* ✨ RADIAL GLOW (LEFT) */}
  <div className="absolute w-[500px] h-[500px] bg-[#0a6cc9] opacity-30 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>

  {/* ✨ RADIAL GLOW (RIGHT) */}
  <div className="absolute w-[400px] h-[400px] bg-[#0a6cc9] opacity-20 blur-[100px] rounded-full bottom-[-80px] right-[-80px]"></div>

  {/* 🔲 GRID OVERLAY */}
  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]"></div>

  {/* CONTENT */}
  <div className="relative z-10">
    
    {/* TITLE */}
    <div className="text-center mb-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Profile of FIAKS Global Community Members
      </h2>
    </div>

    {/* FLOATING PILLS (your existing code) */}
    <div className="relative h-[400px]">
      {roles.map((role, i) => (
        <div key={i} className={`floating-pill pill-${i}`}>
          {role}
        </div>
      ))}
    </div>

  </div>

</section>

    <section className="py-28 bg-[#f8fafc]">

      {/* TITLE */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">
          FIAKS Global Community has Leaders from the following Industries
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {industries.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="industry-card group"
          >

            {/* CARD */}
           <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300">

  {/* IMAGE (FULL WIDTH) */}
  <div className="overflow-hidden">
    <img
      src={item.img}
      className="w-full h-[140px] object-cover transition duration-500 group-hover:scale-110"
    />
  </div>

  {/* TEXT */}
  <div className="pt-3 pb-5 text-center">
    <p className="font-semibold tracking-wide text-sm">
      {item.name}
    </p>
  </div>

</div>

          </motion.div>
        ))}

      </div>

    </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default WhoWeArePage;
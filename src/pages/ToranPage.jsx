// import React from "react";
// import { motion } from "framer-motion";
// import { Briefcase, ShieldCheck, FileText, Scale, Users } from "lucide-react";

// const servicesLeft = [
//   {
//     title: "Identifying Right Companies for Investment",
//     desc: "Carefully curating right organization from BFSI sector",
//   },
//   {
//     title: "Introduction Meeting",
//     desc: "Setting up Introduction meeting",
//   },
//   {
//     title: "FIAKS Due diligence by Big 4",
//     desc: "Legal, Financial & Regulatory Due Diligence",
//   },
// ];

// const servicesCenter = [
//   "Company Incorporation",
//   "Local Municipal Registration",
//   "Obtaining PAN Registration",
//   "Obtaining TAN",
//   "Labour Law Registration",
//   "GST Registration",
//   "Local office setup",
//   "Bank account opening",
//   "Accounting SOPs & MIS",
//   "Statutory & Compliance Audits",
// ];

// const servicesRight = [
//   "Regulatory Advisory",
//   "Contract Management",
//   "Compliance Services",
//   "Product Counseling",
//   "Introductions",
// ];

// const ToranPage = () => {
//   return (
//     <div className="bg-white">

//       {/* 🔥 HERO */}
//       <section className="relative py-24 bg-gradient-to-br from-[#07549c] to-[#054178] text-white text-center overflow-hidden">

//         {/* Glow */}
//         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]" />

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold mb-4"
//         >
//           FIAKS TORAN
//         </motion.h1>

//         <p className="text-lg opacity-90 mb-6">
//           Your Gateway to Investing in Indian Ventures
//         </p>

//         <button className="bg-white text-[#07549c] px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
//           CONTACT US
//         </button>

//       </section>

//       {/* 🔥 INTRO */}
//       <section className="py-20 text-center max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           One-Stop Solution to Strategic Investor planning to Invest in India
//         </h2>

//         <p className="text-slate-600 leading-relaxed">
//           A one-stop solution for the eager foreign investor, looking to capitalise on India’s growing BFSI industry...
//         </p>
//       </section>

//       {/* 🔥 SERVICES GRID */}
//       <section className="py-20 bg-[#f8fafc]">
//         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

//           {/* LEFT */}
//           <div className="space-y-6">
//             {servicesLeft.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white p-6 rounded-2xl shadow-md border"
//               >
//                 <h3 className="font-semibold text-[#07549c] mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-slate-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* CENTER BIG CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="bg-white p-8 rounded-3xl shadow-xl border"
//           >
//             <h3 className="text-xl font-bold mb-4 text-[#07549c]">
//               FIAKS Corporate Setup Services
//             </h3>

//             <ul className="space-y-2 text-sm text-slate-600">
//               {servicesCenter.map((item, i) => (
//                 <li key={i}>• {item}</li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* RIGHT */}
//           <div className="space-y-6">
//             {servicesRight.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white p-6 rounded-2xl shadow-md border"
//               >
//                 <h3 className="font-semibold text-[#07549c]">
//                   {item}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* 🔥 CTA */}
//       <section className="py-20 bg-gradient-to-r from-[#07549c] to-[#054178] text-white text-center">

//         <h2 className="text-3xl font-bold mb-4">
//           JOIN THE MOST TRUSTED BFSI COMMUNITY
//         </h2>

//         <button className="bg-white text-[#07549c] px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
//           BECOME A MEMBER
//         </button>

//       </section>

//     </div>
//   );
// };

// export default ToranPage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/marketing/Header";
import Footer from "../components/marketing/Footer";

const servicesLeft = [
  {
    title: "Identifying Right Companies for Investment",
    desc: "Carefully curating right organization from BFSI sector",
  },
  {
    title: "Introduction Meeting",
    desc: "Setting up Introduction meeting",
  },
  {
    title: "FIAKS Due diligence by Big 4",
    points: [
      "Legal Due Diligence",
      "Financial Due Diligence",
      "Regulatory Due Diligence",
    ],
  },
];

const servicesCenter = [
  "Company Incorporation",
  "Local Municipal Registration",
  "Obtaining PAN",
  "Obtaining TAN",
  "Labour Law Registration (PF, ESI)",
  "GST Registration",
  "Local office setup",
  "Bank account opening",
  "Accounting SOPs, MIS",
  "Statutory & Compliance Audits",
];

const servicesRight = [
  {
    title: "FIAKS Regulatory Advisory",
    points: [
      "Liaison with regulators",
      "Assistance in license applications",
      "Filing and reporting",
    ],
  },
  {
    title: "FIAKS Contract Management",
    points: [
      "Drafting & Structuring",
      "Reviews & Negotiations",
      "Execution",
    ],
  },
  {
    title: "FIAKS Compliance Services",
    points: [
      "Legal & secretarial compliance",
      "Labour Law compliance",
      "Regulatory compliance",
    ],
  },
  {
    title: "FIAKS Product Counseling",
    points: [
      "Legal review of product",
      "Market research",
      "Privacy & IT law compliance",
    ],
  },
  {
    title: "Introductions",
    points: ["Sponsor Bank Introductions"],
  },
];

console.log(motion)

const ToranPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="bg-white">

      {/* 🔝 HEADER */}
      <Header />

      {/* 🔥 HERO */}
      <section className="relative py-28 bg-gradient-to-br from-[#07549c] to-[#054178] text-white text-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent)] opacity-20" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          FIAKS TORAN
        </motion.h1>

        <p className="text-lg opacity-90 mb-6">
          Your Gateway to Investing in Indian Ventures
        </p>

        <button className="bg-white text-[#07549c] px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          CONTACT US
        </button>

      </section>

      {/* 🔥 INTRO */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          One-Stop Solution to Strategic Investor planning to Invest in India
        </h2>

        <p className="text-slate-600 leading-relaxed">
          A one-stop solution for the eager foreign investor, looking to capitalise on India’s growing BFSI industry.
          Through FIAKS TORAN, we offer a smooth journey covering all regulatory, advisory, and setup needs.
        </p>
      </section>

      {/* 🔥 SERVICES */}
      <section className="py-20 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="space-y-6">
            {servicesLeft.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow-md border"
              >
                <h3 className="font-semibold text-[#07549c] mb-2">
                  {item.title}
                </h3>

                {item.desc && (
                  <p className="text-sm text-slate-600">{item.desc}</p>
                )}

                {item.points && (
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    {item.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl shadow-xl border"
          >
            <h3 className="text-xl font-bold mb-4 text-[#07549c]">
              FIAKS Corporate Setup Services
            </h3>

            <ul className="space-y-2 text-sm text-slate-600">
              {servicesCenter.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT (ACCORDION) */}
          <div className="space-y-4">

            {servicesRight.map((item, i) => {
              const isOpen = activeAccordion === i;

              return (
                <div key={i} className="bg-white rounded-2xl shadow-md border overflow-hidden">

                  <div
                    onClick={() => setActiveAccordion(isOpen ? null : i)}
                    className="p-5 cursor-pointer flex justify-between items-center hover:bg-[#07549c]/5"
                  >
                    <h3 className="font-semibold text-[#07549c]">
                      {item.title}
                    </h3>
                    <span>{isOpen ? "−" : "+"}</span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-4"
                      >
                        <ul className="text-sm text-slate-600 space-y-1">
                          {item.points.map((p, idx) => (
                            <li key={idx}>• {p}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* 🔥 CTA */}
      <section className="py-20 bg-gradient-to-r from-[#07549c] to-[#054178] text-white text-center">

        <h2 className="text-3xl font-bold mb-4">
          JOIN THE MOST TRUSTED BFSI COMMUNITY
        </h2>

        <button className="bg-white text-[#07549c] px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          BECOME A MEMBER
        </button>

      </section>

      {/* 🔻 FOOTER */}
      <Footer />

    </div>
  );
};

export default ToranPage;
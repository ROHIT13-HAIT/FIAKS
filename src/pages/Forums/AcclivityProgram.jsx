import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/marketing/Header";
import Footer from "../../components/marketing/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AcclivityProgram = () => {
  return (
    <div className="bg-white">

      <Header />

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-r from-[#0a192f] to-[#07549c] text-white py-28 text-center">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold"
        >
          What We Offer
        </motion.h1>
      </section>

      {/* 🔥 FORUMS - DARK HERO STYLE */}
      <section className="relative py-24 bg-black text-white overflow-hidden">

        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl font-semibold mb-4">
            Forums
          </motion.h2>

          <p className="text-white/70 mb-6">
            Exclusive forums enabling leaders to stay ahead in BFSI, fintech, and financial innovation.
          </p>

          <button className="bg-[#07549c] px-6 py-2 rounded-md hover:scale-105 transition">
            Apply for Membership
          </button>
        </div>
      </section>

      {/* 🔥 KNOWLEDGE PROGRAMS - CARD STYLE */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

          {["Focused Acceleration", "Policy Advocacy"].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item}</h3>
              <p className="text-sm text-slate-600">
                High-quality curated knowledge and discussion platforms for BFSI leaders.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🔥 EVENTS - CARD GRID (LIKE REFERENCE) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show"
            className="text-3xl font-semibold mb-8 text-center">
            Events
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[1,2,3,4,5,6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-sm font-medium">FIAKS Event</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 NETWORKING - SPLIT + DARK CARD */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-gradient-to-br from-[#07549c] to-[#0a192f] text-white p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Networking</h2>
            <p className="text-white/70 mb-4">
              Premium networking for BFSI leaders across global markets.
            </p>

            <button className="bg-white text-[#07549c] px-5 py-2 rounded-md">
              Learn More
            </button>
          </motion.div>

        </div>
      </section>

      {/* 🔥 SOCIAL IMPACT */}
      <section className="py-24 bg-white text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Social Impact Programmes
        </h2>

        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Driving meaningful change through community-led initiatives.
        </p>

        <div className="flex justify-center gap-6">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c" className="h-20 rounded-lg" />
          <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" className="h-20 rounded-lg" />
        </div>

      </section>

      {/* 🔥 KNOWLEDGE CENTER - DARK FEATURE BLOCK */}
      <section className="py-24 bg-black text-white">

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div className="grid grid-cols-2 gap-4">
            {["e-Bulletin","FIAKS Writ","FIAKS Daily","Bespoke"].map((item,i)=>(
              <div key={i} className="bg-white/10 p-4 rounded-md text-center">
                {item}
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Knowledge Center</h2>
            <p className="text-white/70 mb-4">
              Explore latest research, insights, and innovations.
            </p>

            <button className="bg-[#07549c] px-5 py-2 rounded-md">
              Learn More
            </button>
          </div>

        </div>

      </section>

      {/* 🔥 CTA */}
      <section className="py-16 bg-[#07549c] text-white text-center">
        <h2 className="mb-4 text-lg">
          Join the most trusted BFSI community
        </h2>
        <button className="bg-white text-[#07549c] px-6 py-2 rounded-md">
          Become a Member
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default AcclivityProgram;
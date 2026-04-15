import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Header from "../../components/marketing/Header"
import Footer from "../../components/marketing/Footer"

/* ================= DATA ================= */

const bulletins = [
  { img: "/fiaks/b1.png", title: "Cross Border Remittances" },
  { img: "/fiaks/b2.png", title: "Cheques Become Obsolete" },
  { img: "/fiaks/b3.png", title: "FIAKS Leadership" },
  { img: "/fiaks/b4.png", title: "Africa Payments" },
  { img: "/fiaks/b5.png", title: "Asia Payments" },
]

/* ================= PAGE ================= */

export default function EBulletinPage() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-white">

      <Header />

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center bg-gradient-to-br from-[#07549c] to-[#0a192f] text-white overflow-hidden">

        {/* gradient blobs */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[100px] bottom-[-100px] right-[-100px]"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FIAKS e-Bulletins
          </h1>

          <p className="max-w-2xl mx-auto text-white/80">
            Insight-driven reports curated for BFSI leaders. Access curated intelligence across payments, fintech, and banking.
          </p>
        </div>
      </section>

      {/* ================= FEATURED SECTION ================= */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-4 items-center">

          {/* TEXT SIDE */}
          <div>
            <h2 className="text-3xl font-bold text-[#07549c] mb-4">
              Download Industry Reports
            </h2>

            <p className="text-slate-600 mb-6">
              FIAKS e-Bulletins transform complex BFSI data into meaningful insights.
              Designed for decision-makers, these reports deliver clarity, trends,
              and actionable intelligence.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 bg-[#07549c] text-white rounded-lg hover:bg-[#054178]"
            >
              Get Latest Report
            </button>
          </div>

          {/* FEATURED CARD */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/fiaks/e-bulletin1.png"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= HORIZONTAL SCROLL ================= */}
      <section className="py-20 bg-[#f5f9ff]">

        <div className="max-w-7xl mx-auto px-4">

          <h3 className="text-2xl font-bold text-[#07549c] mb-10">
            Explore Reports
          </h3>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

            {bulletins.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="min-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
                onClick={() => {
                  setSelected(item)
                  setOpen(true)
                }}
              >

                <img
                  src={item.img}
                  className="w-full h-60 object-fill"
                />

                <div className="p-4">
                  <h4 className="font-semibold mb-3">
                    {item.title}
                  </h4>

                  <button className="text-sm text-[#07549c] font-medium">
                    Download →
                  </button>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              className="bg-white rounded-2xl p-8 w-full max-w-lg relative"
            >

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <h3 className="text-xl font-semibold mb-6">
                Download e-Bulletin
              </h3>

              <form className="space-y-4">

                <Input label="Name *" />
                <Input label="Email Address *" />
                <Input label="Phone *" />

                <select className="w-full border rounded-lg p-3">
                  <option>Are you a FIAKS member?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>

                <div className="border p-4 text-sm text-slate-500 rounded-lg">
                  CAPTCHA placeholder
                </div>

                <button className="w-full bg-[#07549c] text-white py-3 rounded-lg">
                  Send Message
                </button>

              </form>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

    </div>
  )
}

/* ================= FLOAT INPUT ================= */

const Input = ({ label }) => (
  <div className="relative">
    <input
      placeholder=" "
      className="w-full border rounded-lg p-3 peer focus:border-[#07549c]"
    />
    <label className="absolute left-3 top-2 text-sm text-slate-500 transition-all 
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
      peer-focus:top-2 peer-focus:text-sm">
      {label}
    </label>
  </div>
)
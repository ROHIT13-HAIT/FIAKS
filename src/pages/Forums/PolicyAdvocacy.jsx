import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "../../components/marketing/Header"
import Footer from "../../components/marketing/Footer"

/* ================= DATA ================= */

const categories = [
    "All",
    "Banking",
    "Fintech",
    "Insurance",
    "Payments",
    "E-commerce",
    "Mutual Funds",
]

const blogs = [
    {
        id: 1,
        slug: "shutting-down-atms",
        title: "Shutting Down Own ATMs: Will This Be A New Trend In Banking?",
        date: "Dec 29, 2023",
        img: "/fiaks/blog1.png",
        category: "Banking",
        desc: "Several Founders, CXO Bankers participated...",
    },
    {
        id: 2,
        slug: "aadhaar-otp-merchant-name",
        title: "Why Can't Aadhaar OTP Mention Merchant Name In SMS?",
        date: "Nov 18, 2022",
        img: "/fiaks/blog2.png",
        category: "Payments",
        desc: "Several Founders, CXO Bankers participated...",
    },
    {
        id: 3,
        slug: "ipos-fintech-vs-banks",
        title: "IPO's Of Fintechs vs Banks",
        date: "Nov 18, 2022",
        img: "/fiaks/blog3.png",
        category: "Fintech",
        desc: "Several Founders, CXO Bankers participated...",
    },
    {
        id: 4,
        slug: "frauds-phishing-messages",
        title: "Frauds Due To Phishing Messages",
        date: "Jan 3, 2022",
        img: "/fiaks/blog4.png",
        category: "Insurance",
        desc: "Several Founders, CXO Bankers participated...",
    },
    {
        id: 5,
        slug: "soft-skills-startup-growth",
        title: "Soft Skills in Startup Growth",
        date: "Jan 2, 2022",
        img: "/fiaks/blog5.png",
        category: "Mutual Funds",
        desc: "Several Founders, CXO Bankers participated...",
    },
    {
        id: 6,
        slug: "future-digital-payments",
        title: "Future of Digital Payments",
        date: "Jan 10, 2022",
        img: "/fiaks/blog6.png",
        category: "E-commerce",
        desc: "Several Founders, CXO Bankers participated...",
    },
]



/* ================= ANIMATION ================= */

const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const slideRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

/* ================= PAGE ================= */

export default function PolicyAdvocacyPage() {
    const navigate = useNavigate()
    const [active, setActive] = useState("All")

    const filtered =
        active === "All"
            ? blogs
            : blogs.filter((b) => b.category === active)

    return (
        <div className="bg-[#f8fbff]">

            <Header />

            {/* ================= HERO ================= */}
            <section className="py-20 text-center bg-gradient-to-br from-[#07549c] to-[#0a2c52] text-white">
                <h1 className="text-4xl font-bold mb-4">
                    Policy Advocacy
                </h1>
                <p className="text-white/90 max-w-2xl mx-auto">
                    A platform bringing BFSI leaders together to share insights and drive industry transformation.
                </p>
            </section>

            {/* ================= TABS ================= */}
            <section className="sticky top-[80px] z-20 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 justify-center">

                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm transition-all
              ${active === cat
                                    ? "bg-[#07549c] text-white shadow-md"
                                    : "bg-slate-100 text-slate-600 hover:bg-[#07549c]/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}

                </div>
            </section>

            {/* ================= BLOG LIST ================= */}
            <section className="py-16 bg-gradient-to-b from-[#f3f8ff] to-white">

                <div className="max-w-6xl mx-auto px-4 space-y-12">

                    {filtered.map((blog, i) => {
                        const isLeft = i % 2 === 0

                        return (
                            <motion.div
                                key={blog.id}
                                variants={isLeft ? slideLeft : slideRight}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ amount: 0.3 }} // <-- IMPORTANT (for reverse)
                                onClick={() =>navigate(`/forums/policy-advocacy/${blog.slug}`)}
                                className="cursor-pointer grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition"
                            >

                                {/* IMAGE */}
                                <div className={`${!isLeft ? "md:order-2" : ""}`}>
                                    <img
                                        src={blog.img}
                                        className="rounded-xl w-full h-[240px] "
                                    />
                                </div>

                                {/* CONTENT */}
                                <div>

                                    <p className="text-xs text-[#07549c] font-semibold mb-2">
                                        FIAKS BESPOKE
                                    </p>

                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                        {blog.title}
                                    </h3>

                                    <p className="text-xs text-slate-500 mb-2">
                                        {blog.date}
                                    </p>

                                    <p className="text-sm text-slate-600 mb-4">
                                        {blog.desc}
                                    </p>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // ✅ THIS FIXES IT
                                            navigate(`/forums/policy-advocacy/${blog.slug}`);
                                        }}
                                        className="px-5 py-2 bg-[#07549c] text-white rounded-md text-sm hover:bg-[#054178] transition"
                                    >
                                        Read Brief
                                    </button>

                                </div>

                            </motion.div>
                            
                        )
                    })}

                </div>

            </section>

            {/* ================= PAGINATION ================= */}
            <div className="flex justify-center gap-2 pb-16">

                {[1, 2, 3].map((p) => (
                    <button
                        key={p}
                        className={`w-9 h-9 rounded-full 
            ${p === 1
                                ? "bg-[#07549c] text-white"
                                : "bg-white border hover:bg-[#07549c]/10"
                            }`}
                    >
                        {p}
                    </button>
                ))}

            </div>

            <Footer />

        </div>
    )
}
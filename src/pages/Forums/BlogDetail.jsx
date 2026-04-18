import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "../../components/marketing/Header"
import Footer from "../../components/marketing/Footer"

const blogs = [
    {
        id: 1,
        slug: "shutting-down-atms",
        title: "Shutting Down Own ATMs...",
        date: "Dec 29, 2023",
        img: "/fiaks/blog1.png",
        category: "Banking",
    },
    {
        id: 2,
        slug: "aadhaar-otp-merchant-name",
        title: "Why Can't Aadhaar OTP...",
        date: "Nov 18, 2022",
        img: "/fiaks/blog2.png",
        category: "Payments",
    },
    {
        id: 3,
        slug: "ipos-fintech-vs-banks",
        title: "IPO's Of Fintechs vs Banks",
        date: "Nov 18, 2022",
        img: "/fiaks/blog3.png",
        category: "Fintech",
    },
    {
        id: 4,
        slug: "frauds-phishing-messages",
        title: "Frauds Due To Phishing Messages",
        date: "Jan 3, 2022",
        img: "/fiaks/blog4.png",
        category: "Insurance",
    },
    {
        id: 5,
        slug: "soft-skills-startup-growth",
        title: "Soft Skills in Startup Growth",
        date: "Jan 2, 2022",
        img: "/fiaks/blog5.png",
        category: "Mutual Funds",
    },
    {
        id: 6,
        slug: "future-digital-payments",
        title: "Future of Digital Payments",
        date: "Jan 10, 2022",
        img: "/fiaks/blog6.png",
        category: "E-commerce",
    },
]

export default function BlogDetail() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [locked, setLocked] = useState(true)

    const relatedBlogs = blogs
        .filter((b) => b.slug !== slug)   // ❌ remove current blog
        .slice(0, 4)                      // ✅ show 4 blogs

    const blog = blogs.find((b) => b.slug === slug)
    if (!blog) return <div className="p-20 text-center">Blog not found</div>

    return (
        <div className="bg-[#f6f9fc]">

            <Header />

            {/* HERO */}
            <section className="relative h-[360px] flex items-center justify-center text-center">
                <img src={blog.img} className="absolute w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 text-white max-w-3xl px-4">
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        {blog.title}
                    </h1>
                    <p className="text-sm mt-2 opacity-80">
                        {blog.date} • {blog.category}
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-[1fr_300px] gap-12">

                {/* ================= LEFT CONTENT ================= */}
                <div>

                    {/* QUOTE */}
                    <div className="bg-[#fff8e6] border-l-4 border-yellow-500 p-6 rounded-xl mb-8">
                        <p className="font-semibold text-slate-700">
                            Several Founders, Co-Founders, CXO Bankers, CXO Fintech professionals &
                            people who participated in the ePanel discussions
                        </p>
                    </div>

                    {/* CONTRIBUTORS */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-lg mb-5">Expert Contributors</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["VS", "RC", "HH", "HS", "VP", "PG", "BR", "HR", "SF", "RD"].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                                    <div className="w-12 h-12 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold mb-2">
                                        {item}
                                    </div>
                                    <p className="text-xs font-medium">Name Here</p>
                                    <p className="text-[11px] text-slate-400">Company</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LONG CONTENT */}
                    <div className="space-y-6 text-sm text-slate-600 leading-relaxed">

                        <p>
                            Several Founders, Co-Founders, CXO Bankers, CXO Fintech professionals &
                            people who participated in the ePanel discussions...
                        </p>

                        <ul className="list-disc pl-5 space-y-1 text-[13px]">
                            <li>Mr. Vijay Sharma, Founder & CEO</li>
                            <li>Mr. Rajat Chai, Director</li>
                            <li>Mr. N. Mehta, Former Director</li>
                            <li>Mr. Shailesh Sharma, Banking Head</li>
                            <li>Mr. Rohan Gupta, VP Strategy</li>
                            <li>Mr. Anurag Singh, Founder</li>
                            <li>Mr. Amit Mishra, Payments Expert</li>
                        </ul>

                        <p>Here’s discussion on the news articles...</p>

                        <img src="/fiaks/news.jpeg" className="rounded-lg max-w-[500px]" />

                        <h4 className="font-semibold text-slate-800 mt-6">
                            Seems here’s the root cause:
                        </h4>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>High maintenance cost of ATM machines</li>
                            <li>Shift to digital payments</li>
                            <li>Reduced ATM usage</li>
                        </ul>

                        <p>
                            Managing ATM networks involves high operational costs while digital
                            banking adoption is increasing rapidly.
                        </p>

                        <h4 className="font-semibold text-slate-800 mt-6">
                            Was it a wise decision?
                        </h4>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>ATM usage declining</li>
                            <li>Digital payments rising</li>
                            <li>Better ROI in digital infra</li>
                        </ul>

                        <h4 className="font-semibold text-slate-800 mt-6">
                            Let’s see a different perspective:
                        </h4>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Rural dependency on ATMs</li>
                            <li>Financial inclusion impact</li>
                            <li>Small banks reliance</li>
                        </ul>

                        <h4 className="font-semibold text-slate-800 mt-6">
                            Thought Leadership Forecast:
                        </h4>

                        <p>
                            ATMs may evolve into service hubs instead of disappearing completely.
                        </p>

                        <h4 className="font-semibold text-slate-800 mt-6">
                            Question:
                        </h4>

                        <p className="font-medium">
                            Are ATMs still relevant in a digital-first banking world?
                        </p>

                    </div>

                    {/* LOCKED CONTENT */}
                    <div className="relative mt-12">

                        <div className={`${locked ? "blur-sm" : ""} bg-white p-8 rounded-2xl shadow-sm`}>
                            <h3 className="font-semibold mb-3">Deep Insights</h3>
                            <p className="text-sm">
                                Banks are restructuring infrastructure and shifting focus toward
                                digital-first ecosystems.
                            </p>
                        </div>

                        {locked && (
                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-6 w-[320px]">

                                    <h4 className="font-semibold mb-4 text-center">
                                        Unlock Full Insight
                                    </h4>

                                    <input
                                        placeholder="Email"
                                        className="w-full mb-3 px-3 py-2 border rounded-md text-sm"
                                    />

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
                                    />

                                    <button
                                        onClick={() => setLocked(false)}
                                        className="w-full bg-[#07549c] text-white py-2 rounded-md"
                                    >
                                        Login
                                    </button>

                                </div>

                            </div>
                        )}

                    </div>

                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="space-y-6 sticky top-24 h-fit">

                    {/* SHARE */}
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-3">Share</h4>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded">
                                LinkedIn
                            </button>
                            <button className="px-3 py-1 bg-black text-white text-xs rounded">
                                X
                            </button>
                        </div>
                    </div>

                    {/* EXPLORE */}
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-3">Explore More</h4>

                        <div className="space-y-3">
                            {relatedBlogs.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => navigate(`/forums/policy-advocacy/${item.slug}`)}
                                    className="flex gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded"
                                >
                                    <img src={item.img} className="w-12 h-12 object-cover rounded" />
                                    <p className="text-xs">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </section>

            <Footer />
        </div>
    )
}
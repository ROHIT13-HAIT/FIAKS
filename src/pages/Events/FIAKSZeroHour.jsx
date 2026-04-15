
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';

import banner from '../../../src/images/banners/zero-hour.jpg'
import bannerLogo from '../../../src/images/zero-hour.png'

import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';


const events = [
    {
        id: 1,
        slug: 'global-fintech-summit-2025',
        title: 'Season 1',
        description: 'The premier gathering of BFSI leaders, innovators, and regulators shaping the future of financial services.',
        date: 'April 15-17, 2025',
        location: 'Taj Palace, New Delhi',
        attendees: '1200+',
        type: '1st Edition',
        image: '../fiaks/src/images/ffllcc.png',
        featured: true,
        status: 'upcoming',
    },
    {
        id: 2,
        slug: 'regtech-innovation-workshop',
        title: 'Season 2',
        description: 'Hands-on workshop exploring cutting-edge regulatory technology solutions for compliance challenges.',
        date: 'March 28, 2023',
        location: 'Mumbai Marriott',
        attendees: '150',
        type: '2nd Edition',
        image: '../fiaks/src/images/ffllcc.png',
        featured: true,
        status: 'upcoming',
    },

];

const eventTypes = [
    { id: 'conference', name: '2026' },
    { id: '6th Edition', name: '2025' },
    { id: '5th Edition', name: '2024' },
    { id: '4th Edition', name: '2023' },
];

const videos1 = [
    {
        iframe: "https://youtu.be/vPOB6_aqAqo",
        title: "Will the NUE initiative create digital products addressing the needs of people who are at the bottom of the pyramid? Or if RTGS goes down or the NPCI system goes down then will the transactions be routed through the new NUE?",
    },
    {
        iframe: "https://youtu.be/zAqp2UmayVo",
        title: "Can digital services by Fintechs to the bottom of the pyramid ever be Profitable?",
    },
    {
        iframe: "https://youtu.be/8ZfoqL9f83Y",
        title: "ZERO MDR doesn’t benefit customer, doesn’t benefit merchant, doesn’t help in pushing Digitalisation",
    },
    {
        iframe: "https://youtu.be/tIL0SmxLp0I",
        title: "Marketing spends by B2B",
    },
    {
        iframe: "https://youtu.be/PS44WH5UGnw",
        title: "Will the NUE initiative create digital products addressing the needs of people who are at the bottom of the pyramid? Or if RTGS goes down or the NPCI system goes down then will the transactions be routed through the new NUE?",
    },
    {
        iframe: "https://youtu.be/Gt2mndhxuP4",
        title: "Role of BBPS - Bharat Bill Payment System",
    },
    {
        iframe: "https://youtu.be/qGjF-54Os7M",
        title: "Mr. MN Srinivasu, co-founder, Bill Desk speaks on why it took him 20 years to be Unicorn",
    },
    {
        iframe: "https://youtu.be/3QaeYzX3FCE",
        title: "Key Employee Retention strategy without ESOP",
    }
];

// const videos2 = [
//     {
//         iframe: "https://youtu.be/vPOB6_aqAqo",
//         title: "UPI at Galleries Lafayette",
//     },
//     {
//         iframe: "https://youtu.be/zAqp2UmayVo",
//         title: "UPI at Eifel towers",
//     },
//     {
//         iframe: "https://youtu.be/8ZfoqL9f83Y",
//         title:
//             "Women international Day",
//     },
//     {
//         iframe: "https://youtu.be/tIL0SmxLp0I",
//         title: "FIAKS Awards",
//     },
//     {
//         iframe: "https://youtu.be/PS44WH5UGnw",
//         title: "FIAKS Digital शिक्षाप्रसार अभियान",
//     },
//     {
//         iframe: "https://youtu.be/Gt2mndhxuP4",
//         title:
//             "Nationwide Training",
//     },
//     {
//         iframe: "https://youtu.be/qGjF-54Os7M",
//         title:
//             "FIAKS Maven",
//     },
//     {
//         iframe: "https://youtu.be/3QaeYzX3FCE",
//         title:
//             "AIFPF",
//     } 
// ];

const guestSpeakerVideos2 = [
    {
        id: 'vPOB6_aqAqo',
        title: 'Curated Lending Startups',
        description: 'Will the NUE initiative create digital products addressing the needs of people who are at the bottom of the pyramid? Or if RTGS goes down or the NPCI system goes down then will the transactions be routed through the new NUE?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'zAqp2UmayVo',
        title: 'Curated Payments & Fintech Enablers',
        description: 'Can digital services by Fintechs to the bottom of the pyramid ever be Profitable?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: '8ZfoqL9f83Y',
        title: 'Curated WealthTech & InsureTech Startups',
        description: 'ZERO MDR doesn’t benefit customer, doesn’t benefit merchant, doesn’t help in pushing Digitalisation',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'tIL0SmxLp0I',
        title: 'Curated WealthTech & InsureTech Startups',
        description: 'Marketing spends by B2B',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'PS44WH5UGnw',
        title: 'Curated Lending Startups',
        description: 'Will the NUE initiative create digital products addressing the needs of people who are at the bottom of the pyramid? Or if RTGS goes down or the NPCI system goes down then will the transactions be routed through the new NUE?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'Gt2mndhxuP4',
        title: 'Curated Payments & Fintech Enablers',
        description: 'Role of BBPS - Bharat Bill Payment System',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'qGjF-54Os7M',
        title: 'Curated WealthTech & InsureTech Startups',
        description: 'Mr. MN Srinivasu, co-founder, Bill Desk speaks on why it took him 20 years to be Unicorn',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: '3QaeYzX3FCE',
        title: 'Curated WealthTech & InsureTech Startups',
        description: 'Key Employee Retention strategy without ESOP',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
];

const videos2 = [

    {
        iframe: 'DR2cJdDYcco',
        title: "In Bank & Fintech Collaboration, Customer Service is pushed on to the banks. Isn’t this putting banks at disadvantage as they land up doing the heavy lifting?",
    },
    {
        iframe: 'q1aYIF0YRMM',
        title: "Should Banks and Fintechs share data breach information with the public?",
    },
    {
        iframe: 'AwnHLUSF4u4',
        title: "Does India need National Umbrella Entity?",
    },
    {
        iframe: 'xYBGCjzJJyE',
        title: "No 1st mover advantage for Central Bank in launching Digital Currency. Your Country can still be a leader even if you delay this decision",
    },
];

const leaderVideos = [
    {
        id: 'rmKIZ2TlMUE',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'nrVhSz_OcD4',
        thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        quote: 'The networking opportunities here are unmatched in the industry.',
    },
];

const FIAKSZeroHour = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [playingVideo, setPlayingVideo] = useState(null);
    // const itemsPerView = 3;

    // Separate state for videos1 (first row)
    const [activeVideo1, setActiveVideo1] = useState(videos1[0]?.iframe || '');
    const [currentIndex1, setCurrentIndex1] = useState(0);

    // Separate state for videos2 (second row)
    const [activeVideo2, setActiveVideo2] = useState(videos2[0]?.id || '');
    const [currentIndex2, setCurrentIndex2] = useState(0);

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

    // Navigation for second row
    const nextSlide2 = () => {
        if (currentIndex2 < videos2.length - itemsPerView) {
            setCurrentIndex2((prev) => prev + 1);
        }
    };

    const prevSlide2 = () => {
        if (currentIndex2 > 0) {
            setCurrentIndex2((prev) => prev - 1);
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
                            FIAKS Motes
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
                        </p>
                        <button class="animate slide-up delay-5 bg-white text-black px-8 py-3 mt-6 rounded-full hover:scale-105 transition show">Learn More</button>
                    </div>
                </div>
            </section>
            <div className='py-4'>
                <img src={bannerLogo} className='img-fluid mx-auto bg-white p-2 rounded-md ' alt='' style={{ width: '300px' }} />
            </div>
            <section className="py-16 md:py-16" style={{ background: 'rgba(7, 84, 156, 0.03)' }}>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Edition 2.0
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Our Guest Speaker
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                        <p className="text-slate-700 text-lg leading-relaxed">MicroSave Consulting (MSC) is a global consulting firm working in over 65 developing countries. They partnered with us to organise a knowledge sharing session with 40+ start-ups who presented their innovative solutions to revolutionise the financial health of the common man and expand financial inclusion.</p>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className=" ">

                        {/* 1st row - videos1 */}
                        <div className="container mx-auto max-w-7xl mb-20">
                            <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-5">Mr. MN Srinivasu, Co-founder, Bill Desk - <span className='text-[#07549c]'>Edition 2.0</span></h2>
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
                            <div className="bg-slate-50 rounded-lg  p-4 mb-6 border border-slate-200 flex justify-center">
                                <Quote className="mw-8 h-8 text-[#07549c]/30 mr-3" style={{ minWidth: '30px' }} />
                                <p className="text-md font-medium text-slate-800">
                                    {videos1.find(video => video.iframe === activeVideo1)?.title || 'Select a video to see description'}
                                </p>
                            </div>
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

                        {/* 2nd row - videos2 */}

                        <div className="container mx-auto max-w-7xl mb-20">
                            <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-5">Mr. A P Hota, Former MD & CEO - NPCI - <span className='text-[#07549c]'>Edition 1.0</span></h2>
                            {/* MAIN VIDEO */}
                            <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
                                <iframe
                                    src={`https://www.youtube.com/embed/${getVideoId(activeVideo2)}`}
                                    className="w-full h-full"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            </div>
                            {/* VIDEO DESCRIPTION - Below main video */}
                            <div className="bg-slate-50 rounded-lg  p-4 mb-6 border border-slate-200 flex justify-center">
                                <Quote className="mw-8 h-8 text-[#07549c]/30 mr-3" style={{ minWidth: '30px' }} />
                                <p className="text-md font-medium text-slate-800">
                                    {videos2.find(video => video.iframe === activeVideo2)?.title || 'Select a video to see description'}
                                </p>
                            </div>
                            {/* THUMBNAIL NAVIGATION */}
                            <div className="relative">
                                <div className="overflow-hidden">
                                    <div
                                        className="flex gap-4 transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(-${(currentIndex1 * 100) / itemsPerView}%)`,
                                        }}
                                    >
                                        {videos2.map((video, index) => {
                                            const videoId = getVideoId(video.iframe);
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => setActiveVideo2(video.iframe)}
                                                    className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                    ${activeVideo2 === video.iframe
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

                                {/* LEFT BUTTON - Row 2 */}
                                <button
                                    onClick={prevSlide2}
                                    className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    disabled={currentIndex2 === 0}
                                >
                                    <ChevronLeft className="w-6 h-6 text-slate-700" />
                                </button>

                                {/* RIGHT BUTTON - Row 2 */}
                                <button
                                    onClick={nextSlide2}
                                    className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    disabled={currentIndex2 >= videos1.length - itemsPerView}
                                >
                                    <ChevronRight className="w-6 h-6 text-slate-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bonus Segment - Celebrating Bootstrap Startups */}
            <section className="py-16 md:py-16" style={{ background: 'rgba(7, 84, 156, 0.03)' }}>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Bonus Segment
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Celebrating Bootstrap Startups
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                        <p className="text-slate-700 text-lg leading-relaxed">Under this Bonus Segment, we make an attempt to celebrate Bootstrap Startups - An initiative for entrepreneurs to present their venture to our FIAKS community of 5000+ C-suite execs spread across 30+ countries</p>
                    </div>
                </div>
            </section> 
            <section className="pb-16 md:pb-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl"> 
                    <div className="gap-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                            {leaderVideos.map((video) => (
                                <div
                                    key={video.id}
                                    className="video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100"
                                    data-testid={`video-card-${video.id}`}
                                >
                                    <div className="relative aspect-video">
                                        {/* {playingVideo === video.id ? ( */}
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        {/* ) : ( */}
                                        <>
                                            {/* <img
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                    <button
                                                        onClick={() => setActiveVideo(video.id)}
                                                        className="w-16 h-16 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                                                        data-testid={`play-btn-${video.id}`}
                                                    >
                                                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                                                    </button>
                                                </div> */}
                                        </>
                                        {/* )} */}
                                    </div>
                                    <div >
                                        {/* <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-2">
                                        {video.title}
                                    </h3> */}
                                        <p className="text-slate-600">{video.description}</p>
                                    </div>
                                </div>
                            ))}
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

export default FIAKSZeroHour;

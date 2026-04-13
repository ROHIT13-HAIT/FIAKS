
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import banner from '../../../src/images/banners/fiaks-motes.jpg'
import bannerLogo from '../../../src/images/motes-logo.png'
import Startup from '../../../src/images/StartupShowcasing.png'
import Roundtable from '../../../src/images/RoundtableDiscussions.png'
import RoundtableImg1 from '../../../src/images/1-1.png'
import RoundtableImg2 from '../../../src/images/2-1.png'
import RoundtableImg3 from '../../../src/images/3-1.png'
import RoundtableImg4 from '../../../src/images/4-1.png'

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

const startupVideos = [
    {
        id: 'WhZZK8nNDBU',
        title: 'Curated Lending Startups',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: '3IPyt6NJTa0',
        title: 'Curated Payments & Fintech Enablers',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: '6gOrL_6L-Vk',
        title: 'Curated WealthTech & InsureTech Startups',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    }
];

const roundTableVideos1 = [
    {
        id: 'Z3RWmAgD94Y',
        name: 'Rajesh Sharma',
        title: 'CEO, National Banking Corp',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: '3aZcCNHGqEE',
        name: 'Priya Mehta',
        title: 'MD, Global Fintech Solutions',
        thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        quote: 'The networking opportunities here are unmatched in the industry.',
    },
    {
        id: 'jYoboOwLbnc',
        name: 'Amit Verma',
        title: 'CTO, DigiPay Technologies',
        thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        quote: 'A platform that truly understands the pulse of financial innovation.',
    },
    {
        id: '9rKXwaqT-bY',
        name: 'Dr. Sunita Rao',
        title: 'Chairperson, Banking Regulatory Authority',
        thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
        quote: 'Excellent forum for policy discussions and industry alignment.',
    },
];
const roundTableVideos2 = [
    {
        id: 'TY072euui9s',
        name: 'Rajesh Sharma',
        title: 'CEO, National Banking Corp',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: '8tCsihW2nS4',
        name: 'Priya Mehta',
        title: 'MD, Global Fintech Solutions',
        thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        quote: 'The networking opportunities here are unmatched in the industry.',
    },
    {
        id: 'u_TN2Z0Fk2Y',
        name: 'Amit Verma',
        title: 'CTO, DigiPay Technologies',
        thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        quote: 'A platform that truly understands the pulse of financial innovation.',
    },
    {
        id: 'U7gTCuVn1OM',
        name: 'Dr. Sunita Rao',
        title: 'Chairperson, Banking Regulatory Authority',
        thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
        quote: 'Excellent forum for policy discussions and industry alignment.',
    }
];
const roundTableVideos3 = [
    {
        id: '341B8HPnzb4',
        name: 'Rajesh Sharma',
        title: 'CEO, National Banking Corp',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'GETOLmR6sd8',
        name: 'Priya Mehta',
        title: 'MD, Global Fintech Solutions',
        thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        quote: 'The networking opportunities here are unmatched in the industry.',
    },
    {
        id: 'msTpRfRlvII',
        name: 'Amit Verma',
        title: 'CTO, DigiPay Technologies',
        thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        quote: 'A platform that truly understands the pulse of financial innovation.',
    },
    {
        id: 'b4OLY75rpfA',
        name: 'Dr. Sunita Rao',
        title: 'Chairperson, Banking Regulatory Authority',
        thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
        quote: 'Excellent forum for policy discussions and industry alignment.',
    },
];
const roundTableVideos4 = [
    {
        id: 'K_YRJbS3mvA',
        name: 'Rajesh Sharma',
        title: 'CEO, National Banking Corp',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    }
];
const videos = [
    {
        iframe: "https://youtu.be/0koXRO-rkCk",
        title: "UPI at Galleries Lafayette",
    },
    {
        iframe: "https://youtu.be/WPPzSBOiwno",
        title: "UPI at Eifel towers",
    },
    {
        iframe: "https://youtu.be/SUvjxw_pybs",
        title:
            "Women international Day",
    },
    {
        iframe: "https://youtu.be/Z78ff1eZRYE",
        title: "FIAKS Awards",
    },
    {
        iframe: "https://youtu.be/SjBUzkym9uI",
        title: "FIAKS Digital शिक्षाप्रसार अभियान",
    },
    {
        iframe: "https://youtu.be/w9_-3FvtYok",
        title:
            "Nationwide Training",
    },
    {
        iframe: "https://youtu.be/i_9Imt3tj2Q",
        title:
            "FIAKS Maven",
    },
    {
        iframe: "https://youtu.be/nbiy8yPQHug",
        title:
            "AIFPF",
    },
    {
        iframe: "https://youtu.be/gf7QeRPDijQ",
        title:
            "FLC2025",
    },

];

const FIAKSMotes = () => {


    const [activeVideo, setActiveVideo] = useState(videos[0].iframe);
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerView = 4;

    const nextSlide = () => {
        if (currentIndex < videos.length - itemsPerView) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };



    const getVideoId = (url) => {
        if (url.includes("youtu.be")) return url.split("youtu.be/")[1];
        return url.split("v=")[1];
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
            {/* <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <img src={bannerLogo} alt='' className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '25%' }} />
            </section> */}
             <div className='py-4'>
                <img src={bannerLogo} className='img-fluid mx-auto bg-white p-2 rounded-md ' alt='' style={{width:'300px'}}/>
             </div>
            <section className="py-16 md:py-16" style={{ background:'#f5f5f5'}}>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid gap-12 items-center">
                        {/* Content */}
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className=' '>
                                <div className="sm:flex justify-between items-center" style={{ height: '100%' }}>
                                    <div className='w-1/2'>
                                        <div className='px-5'>
                                            <h3 className="font-['Outfit'] text-3xl font-semibold mb-4">
                                                Startup Showcasing
                                            </h3>
                                            <p className='text-md leading-relaxed'>Under this Knowledge Sharing initiative we curate & invite various start-ups to showcase and pitch their products and services to the FIAKS community members.</p>
                                            <button class="animate slide-up delay-5 bg-black text-white px-8 py-3 mt-6 rounded-full hover:scale-105 transition show">Learn More</button>
                                        </div>
                                    </div>
                                    <div className='w-2/5 relative text-center'>
                                        <img src={Startup} className='rounded-xl text-center' alt='' style={{ width: '100%' }} />
                                        <div className='rounded-xl shadow-lg absolute p-5' style={{ background: '#fefefeba', width: '150px', left: '-20%', top: '50%', transform: 'translateY(-50%)' }}>
                                            <h3 className="text-3xl font-semibold">
                                                50+
                                            </h3>
                                            <p className='text-md leading-relaxed font-medium'>Startups Showcase</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 md:py-16 bg-[#07549c]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid gap-12 items-center">
                        {/* Content */}
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className=' '>
                                <div className="sm:flex justify-between items-center" style={{ height: '100%' }}>
                                    <div className='w-2/5 relative text-center'>
                                        <img src={Roundtable} className=' rounded-xl text-center' alt='' style={{ width: '100%' }} />
                                        <div className='rounded-xl shadow-lg absolute p-5' style={{ background: '#fefefeba', width: '150px', right: '-20%', top: '50%', transform: 'translateY(-50%)' }}>
                                            <h3 className="text-3xl font-semibold">
                                                20+
                                            </h3>
                                            <p className='text-md leading-relaxed font-medium'>Monthly Roundtables</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className='px-5'>
                                            <h3 className="font-['Outfit'] text-3xl font-semibold text-white mb-4">
                                                Roundtable Discussions
                                            </h3>
                                            <p className='text-white text-md leading-relaxed'>Under the product FIAKS MOTES, we organize a series of round tables on various fintech and financial inclusion topics with industry experts and start-up founders. We envision that these roundtables will enable collaboration, and understanding of challenges and innovations for Bharat.</p>
                                            <button class="animate slide-up delay-5 bg-white text-black px-8 py-3 mt-6 rounded-full hover:scale-105 transition show">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Edition 1.0
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            In Association with MSC
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                        <p className="text-slate-700 text-lg leading-relaxed">MicroSave Consulting (MSC) is a global consulting firm working in over 65 developing countries. They partnered with us to organise a knowledge sharing session with 40+ start-ups who presented their innovative solutions to revolutionise the financial health of the common man and expand financial inclusion.</p>
                    </div>



                </div>
            </section>

            {/* STARTUP SHOWCASING - EDITION 1.0 */}
            <section className="pb-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    {/* HEADER */}
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Edition 1.0
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Startup Showcasing
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {startupVideos.map((video) => (
                            <div
                                key={video.id}
                                className="video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100"
                                data-testid={`video-card-${video.id}`}
                            >
                                <div className="relative aspect-video">
                                    {/* {playingVideo === video.id ? ( */}
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={video.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    {/* ) : ( */}
                                    {/* <>
                                            <img
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
                                            </div>
                                        </> */}
                                    {/* )} */}
                                </div>
                                <div className="p-5">
                                    <p className="text-slate-700 text-md leading-relaxed">
                                        {video.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roundtable Discussions - Edition 1.0 */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    {/* HEADER */}
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Edition 1.0
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Roundtable Discussions
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto" />
                    </div>

                    {/* 1st row */}
                    <div className="container mx-auto px-4 max-w-7xl my-10">
                        {/* MAIN VIDEO */}
                        <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
                            <iframe
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        {/* THUMBNAIL NAVIGATION */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                                    }}
                                >
                                    {videos.map((video, index) => {
                                        const videoId = getVideoId(video.iframe);

                                        return (
                                            <div
                                                key={index}
                                                onClick={() => setActiveVideo(video.iframe)}
                                                className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                          ${activeVideo === video.iframe
                                                        ? "border-[#07549c] scale-105"
                                                        : "border-transparent hover:scale-105"
                                                    }`}
                                            >
                                                <img
                                                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-[110px] object-cover"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* LEFT BUTTON */}
                            <button
                                onClick={prevSlide}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex >= videos.length - itemsPerView}
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700" />
                            </button>

                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="container mx-auto px-4 max-w-7xl my-10">
                        {/* MAIN VIDEO */}
                        <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
                            <iframe
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        {/* THUMBNAIL NAVIGATION */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                                    }}
                                >
                                    {videos.map((video, index) => {
                                        const videoId = getVideoId(video.iframe);

                                        return (
                                            <div
                                                key={index}
                                                onClick={() => setActiveVideo(video.iframe)}
                                                className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                          ${activeVideo === video.iframe
                                                        ? "border-[#07549c] scale-105"
                                                        : "border-transparent hover:scale-105"
                                                    }`}
                                            >
                                                <img
                                                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-[110px] object-cover"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* LEFT BUTTON */}
                            <button
                                onClick={prevSlide}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex >= videos.length - itemsPerView}
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700" />
                            </button>

                        </div>
                    </div>

                    {/* 3rd row */}
                    <div className="container mx-auto px-4 max-w-7xl my-10">
                        {/* MAIN VIDEO */}
                        <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
                            <iframe
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        {/* THUMBNAIL NAVIGATION */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                                    }}
                                >
                                    {videos.map((video, index) => {
                                        const videoId = getVideoId(video.iframe);

                                        return (
                                            <div
                                                key={index}
                                                onClick={() => setActiveVideo(video.iframe)}
                                                className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                          ${activeVideo === video.iframe
                                                        ? "border-[#07549c] scale-105"
                                                        : "border-transparent hover:scale-105"
                                                    }`}
                                            >
                                                <img
                                                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-[110px] object-cover"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* LEFT BUTTON */}
                            <button
                                onClick={prevSlide}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex >= videos.length - itemsPerView}
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700" />
                            </button>

                        </div>
                    </div>

                    {/* 4th row */}
                    <div className="container mx-auto px-4 max-w-7xl my-10">
                        {/* MAIN VIDEO */}
                        <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
                            <iframe
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo)}?autoplay=1`}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        {/* THUMBNAIL NAVIGATION */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                                    }}
                                >
                                    {videos.map((video, index) => {
                                        const videoId = getVideoId(video.iframe);

                                        return (
                                            <div
                                                key={index}
                                                onClick={() => setActiveVideo(video.iframe)}
                                                className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                          ${activeVideo === video.iframe
                                                        ? "border-[#07549c] scale-105"
                                                        : "border-transparent hover:scale-105"
                                                    }`}
                                            >
                                                <img
                                                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-[110px] object-cover"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* LEFT BUTTON */}
                            <button
                                onClick={prevSlide}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex >= videos.length - itemsPerView}
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700" />
                            </button>

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

export default FIAKSMotes;

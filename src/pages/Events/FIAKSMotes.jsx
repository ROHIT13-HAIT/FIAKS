
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

const videos1 = [
    {
        iframe: 'Z3RWmAgD94Y', 
        title: '', 
    },
    {
        iframe: '3aZcCNHGqEE', 
        title: '', 
    },
    {
        iframe: 'jYoboOwLbnc',
        title: '',
    },
    {
        iframe: '9rKXwaqT-bY',
        title: '',
    },
];
const videos2 = [
    {
        iframe: 'TY072euui9s', 
        title: '', 
    },
    {
        iframe: '8tCsihW2nS4',
        title: '',
    },
    {
        iframe: 'u_TN2Z0Fk2Y',
        title: '',
    },
    {
        iframe: 'U7gTCuVn1OM',
        title: '',
    }
];
const videos3 = [
    {
        iframe: '341B8HPnzb4', 
        title: '', 
    },
    {
        iframe: 'GETOLmR6sd8',
        title: '', 
    },
    {
        iframe: 'msTpRfRlvII',
        title: '', 
    },
    {
        iframe: 'b4OLY75rpfA',
        title: '', 
    },
];
const videos4 = [
    {
        id: 'K_YRJbS3mvA',
        title: '', 
    }
]; 

const FIAKSMotes = () => {
    // Separate state for videos1 (first row)
    const [activeVideo1, setActiveVideo1] = useState(videos1[0]?.iframe || '');
    const [currentIndex1, setCurrentIndex1] = useState(0);

    // Separate state for videos2 (second row)
    const [activeVideo2, setActiveVideo2] = useState(videos2[0]?.id || '');
    const [currentIndex2, setCurrentIndex2] = useState(0);

    // Separate state for videos2 (third row)
    const [activeVideo3, setActiveVideo3] = useState(videos3[0]?.id || '');
    const [currentIndex3, setCurrentIndex3] = useState(0);

    // Separate state for videos2 (fourth row)
    const [activeVideo4, setActiveVideo4] = useState(videos4[0]?.id || '');
    const [currentIndex4, setCurrentIndex4] = useState(0);

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

    // Navigation for third row
    const nextSlide3 = () => {
        if (currentIndex3 < videos3.length - itemsPerView) {
            setCurrentIndex3((prev) => prev + 1);
        }
    };
    const prevSlide3 = () => {
        if (currentIndex3 > 0) {
            setCurrentIndex3((prev) => prev - 1);
        }
    };

    // Navigation for fourth row
    const nextSlide4 = () => {
        if (currentIndex4 < videos4.length - itemsPerView) {
            setCurrentIndex4((prev) => prev + 1);
        }
    };
    const prevSlide4 = () => {
        if (currentIndex4 > 0) {
            setCurrentIndex4((prev) => prev - 1);
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
            {/* <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <img src={bannerLogo} alt='' className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '25%' }} />
            </section> */}
             <div className='py-4'>
                <img src={bannerLogo} className='img-fluid mx-auto bg-white p-2 rounded-md ' alt='' style={{width:'300px'}}/>
             </div>
            <section className="py-16 md:py-16" style={{ background:'#07549c08'}}>
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
            <section className="py-12 bg-slate-50">
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
                                        src={`https://www.youtube.com/embed/${video.id}`}
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
                                    <p className="text-slate-700 font-semibold text-md leading-relaxed">
                                        {video.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roundtable Discussions - Edition 1.0 */}
            <section className="py-12">
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
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo1)}`}
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
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* LEFT BUTTON */}
                            <button
                                onClick={prevSlide1}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex1 === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide1}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex1 >= videos1.length - itemsPerView}
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
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo2)}`}
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
                                        transform: `translateX(-${(currentIndex2 * 100) / itemsPerView}%)`,
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
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* LEFT BUTTON */}
                            <button
                                onClick={prevSlide2}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex2 === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide2}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex2 >= videos2.length - itemsPerView}
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
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo3)}`}
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
                                        transform: `translateX(-${(currentIndex3 * 100) / itemsPerView}%)`,
                                    }}
                                >
                                    {videos3.map((video, index) => {
                                        const videoId = getVideoId(video.iframe);

                                        return (
                                            <div
                                                key={index}
                                                onClick={() => setActiveVideo3(video.iframe)}
                                                className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                          ${activeVideo3 === video.iframe
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
                                onClick={prevSlide3}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex3 === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide3}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex3 >= videos3.length - itemsPerView}
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
                                src={`https://www.youtube.com/embed/${getVideoId(activeVideo4)}`}
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
                                        transform: `translateX(-${(currentIndex4 * 100) / itemsPerView}%)`,
                                    }}
                                >
                                    {videos4.map((video, index) => {
                                        const videoId = getVideoId(video.iframe);

                                        return (
                                            <div
                                                key={index}
                                                onClick={() => setActiveVideo4(video.iframe)}
                                                className={`min-w-[200px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
                                          ${activeVideo4 === video.iframe
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
                                onClick={prevSlide4}
                                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex4 === 0}
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* RIGHT BUTTON */}
                            <button
                                onClick={nextSlide4}
                                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                disabled={currentIndex4 >= videos4.length - itemsPerView}
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

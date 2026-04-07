
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import banner from '../../../src/images/banner-bg.jpg'
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

const videos = [
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
    },
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

const FIAKSMotes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    const itemsPerView = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 >= leaderVideos.length - itemsPerView + 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? leaderVideos.length - itemsPerView : prev - 1
        );
    };

    return (
        <div className="min-h-screen bg-white" data-testid="events-page">
            <Header forceDark={true} />

            {/* Hero Section */}

            <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <img src={bannerLogo} alt='' className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '25%' }} />
            </section>

            <section className="py-16 md:py-16 bg-[#07549c]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid gap-12 items-center">
                        {/* Content */}
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className=' '>
                                <div className="sm:flex justify-between items-center" style={{ height: '100%' }}>
                                    <div className='w-1/2'>
                                        <div className='px-5'>
                                            <h3 className="font-['Outfit'] text-3xl font-semibold text-white mb-4">
                                                Startup Showcasing
                                            </h3>
                                            <p className='text-white text-md leading-relaxed'>Under this Knowledge Sharing initiative we curate & invite various start-ups to showcase and pitch their products and services to the FIAKS community members.</p>
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


            <section className="py-16 md:py-16 bg-slate-50">
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
                                            <h3 className="font-['Outfit'] text-3xl font-semibold text-slate-900 mb-4">
                                                Roundtable Discussions
                                            </h3>
                                            <p className='text-slate-700 text-md leading-relaxed'>Under the product FIAKS MOTES, we organize a series of round tables on various fintech and financial inclusion topics with industry experts and start-up founders. We envision that these roundtables will enable collaboration, and understanding of challenges and innovations for Bharat.</p>
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
                    <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Startup Showcasing - <span className='text-[#07549c]'>Edition 1.0</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
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
            <section className="pb-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Roundtable Discussions - <span className='text-[#07549c]'>Edition 1.0</span></h2>

                    {/* 1st row */}
                    <div className="flex items-center gap-8 w-4/4">
                        <div className='w-1/4'>
                            <img src={RoundtableImg1} />
                        </div>
                        <div className="w-3/4">
                            <div className="relative">
                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-prev-btn"
                                >
                                    <ChevronLeft className="w-6 h-6 text-slate-700" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-next-btn"
                                >
                                    <ChevronRight className="w-6 h-6 text-slate-700" />
                                </button>

                                {/* Slider */}
                                <div className="overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out gap-6"
                                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
                                    >
                                        {roundTableVideos1.map((leader, index) => (
                                            <div
                                                key={`${leader.id}-${index}`}
                                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                                data-testid={`leader-card-${index}`}
                                            >
                                                <div className="leader-video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100">
                                                    {/* Video/Image */}
                                                    <div className="relative aspect-video">
                                                        {/* {playingVideo === `${leader.id}-${index}` ? ( */}
                                                            <iframe
                                                                src={`https://www.youtube.com/embed/${leader.id}?autoplay=1`}
                                                                title={leader.name}
                                                                className="w-full h-full"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                        {/* ) : ( */}
                                                            <>
                                                                {/* <img
                                                                    src={leader.thumbnail}
                                                                    alt={leader.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                                    <button
                                                                        onClick={() => setPlayingVideo(`${leader.id}-${index}`)}
                                                                        className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                                                                    >
                                                                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                                                    </button>
                                                                </div> */}
                                                            </>
                                                        {/* )} */}
                                                    </div>

                                                    {/* Content */}
                                                    {/* <div className="p-6">
                                                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                                                        <p className="text-slate-600 italic mb-4">{leader.quote}</p>
                                                        <div className="border-t pt-4">
                                                            <h4 className="font-['Outfit'] font-semibold text-slate-900">{leader.name}</h4>
                                                            <p className="text-sm text-slate-500">{leader.title}</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="flex items-center gap-8 w-4/4 mt-5">
                        <div className='w-1/4'>
                            <img src={RoundtableImg2} />
                        </div>
                        <div className="w-3/4">
                            <div className="relative">
                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-prev-btn"
                                >
                                    <ChevronLeft className="w-6 h-6 text-slate-700" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-next-btn"
                                >
                                    <ChevronRight className="w-6 h-6 text-slate-700" />
                                </button>

                                {/* Slider */}
                                <div className="overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out gap-6"
                                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
                                    >
                                        {roundTableVideos2.map((leader, index) => (
                                            <div
                                                key={`${leader.id}-${index}`}
                                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                                data-testid={`leader-card-${index}`}
                                            >
                                                <div className="leader-video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100">
                                                    {/* Video/Image */}
                                                    <div className="relative aspect-video">
                                                        {/* {playingVideo === `${leader.id}-${index}` ? ( */}
                                                            <iframe
                                                                src={`https://www.youtube.com/embed/${leader.id}?autoplay=1`}
                                                                title={leader.name}
                                                                className="w-full h-full"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                        {/* ) : ( */}
                                                            <>
                                                                {/* <img
                                                                    src={leader.thumbnail}
                                                                    alt={leader.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                                    <button
                                                                        onClick={() => setPlayingVideo(`${leader.id}-${index}`)}
                                                                        className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                                                                    >
                                                                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                                                    </button>
                                                                </div> */}
                                                            </>
                                                        {/* )} */}
                                                    </div>

                                                    {/* Content */}
                                                    {/* <div className="p-6">
                                                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                                                        <p className="text-slate-600 italic mb-4">{leader.quote}</p>
                                                        <div className="border-t pt-4">
                                                            <h4 className="font-['Outfit'] font-semibold text-slate-900">{leader.name}</h4>
                                                            <p className="text-sm text-slate-500">{leader.title}</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3rd row */}
                    <div className="flex items-center gap-8 w-4/4 mt-5">
                        <div className='w-1/4'>
                            <img src={RoundtableImg3} />
                        </div>
                        <div className="w-3/4">
                            <div className="relative">
                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-prev-btn"
                                >
                                    <ChevronLeft className="w-6 h-6 text-slate-700" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-next-btn"
                                >
                                    <ChevronRight className="w-6 h-6 text-slate-700" />
                                </button>

                                {/* Slider */}
                                <div className="overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out gap-6"
                                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
                                    >
                                        {roundTableVideos3.map((leader, index) => (
                                            <div
                                                key={`${leader.id}-${index}`}
                                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                                data-testid={`leader-card-${index}`}
                                            >
                                                <div className="leader-video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100">
                                                    {/* Video/Image */}
                                                    <div className="relative aspect-video">
                                                        {/* {playingVideo === `${leader.id}-${index}` ? ( */}
                                                            <iframe
                                                                src={`https://www.youtube.com/embed/${leader.id}?autoplay=1`}
                                                                title={leader.name}
                                                                className="w-full h-full"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                          {/* ) : ( */}
                                                            <>
                                                                {/* <img
                                                                    src={leader.thumbnail}
                                                                    alt={leader.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                                    <button
                                                                        onClick={() => setPlayingVideo(`${leader.id}-${index}`)}
                                                                        className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                                                                    >
                                                                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                                                    </button>
                                                                </div> */}
                                                            </>
                                                        {/* )} */}
                                                    </div>

                                                    {/* Content */}
                                                    {/* <div className="p-6">
                                                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                                                        <p className="text-slate-600 italic mb-4">{leader.quote}</p>
                                                        <div className="border-t pt-4">
                                                            <h4 className="font-['Outfit'] font-semibold text-slate-900">{leader.name}</h4>
                                                            <p className="text-sm text-slate-500">{leader.title}</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4th row */}
                    <div className="flex items-center gap-8 w-4/4 mt-5">
                        <div className='w-1/4'>
                            <img src={RoundtableImg4} />
                        </div>
                        <div className="w-3/4">
                            <div className="relative">
                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-prev-btn"
                                >
                                    <ChevronLeft className="w-6 h-6 text-slate-700" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all"
                                    data-testid="leaders-next-btn"
                                >
                                    <ChevronRight className="w-6 h-6 text-slate-700" />
                                </button>

                                {/* Slider */}
                                <div className="overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out gap-6"
                                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
                                    >
                                        {roundTableVideos4.map((leader, index) => (
                                            <div
                                                key={`${leader.id}-${index}`}
                                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                                data-testid={`leader-card-${index}`}
                                            >
                                                <div className="leader-video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100">
                                                    {/* Video/Image */}
                                                    <div className="relative aspect-video">
                                                        {/* {playingVideo === `${leader.id}-${index}` ? ( */}
                                                            <iframe
                                                                src={`https://www.youtube.com/embed/${leader.id}?autoplay=1`}
                                                                title={leader.name}
                                                                className="w-full h-full"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                         {/* ) : ( */}
                                                            <>
                                                                {/* <img
                                                                    src={leader.thumbnail}
                                                                    alt={leader.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                                    <button
                                                                        onClick={() => setPlayingVideo(`${leader.id}-${index}`)}
                                                                        className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
                                                                    >
                                                                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                                                    </button>
                                                                </div> */}
                                                            </>
                                                        {/* )} */}
                                                    </div>

                                                    {/* Content */}
                                                    {/* <div className="p-6">
                                                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                                                        <p className="text-slate-600 italic mb-4">{leader.quote}</p>
                                                        <div className="border-t pt-4">
                                                            <h4 className="font-['Outfit'] font-semibold text-slate-900">{leader.name}</h4>
                                                            <p className="text-sm text-slate-500">{leader.title}</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
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

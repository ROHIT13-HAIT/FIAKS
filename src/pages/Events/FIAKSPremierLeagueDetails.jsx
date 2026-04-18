
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '../../components/ui/button';

import banner from '../../../src/images/banners/flc-award.jpg'
import IgnitedMinds from '../../../src/images/IgnitedMinds.png'
import Pathfinder from '../../../src/images/Pathfinder.png'
import Intellectual from '../../../src/images/Intellectual.png'
import icon1 from '../../../src/images/business_leader.png'
import icon2 from '../../../src/images/decision_makers.png'
import icon3 from '../../../src/images/decision-making.png'
import { MessageSquare, BookOpen, Heart, Quote, CheckCircle } from 'lucide-react';
import { ChevronLeft, ChevronRight, Play, Trophy } from 'lucide-react';
import team1Icon from '../../../src/images/team1-icon.png'
import team2Icon from '../../../src/images/team2-icon.png'
import team3Icon from '../../../src/images/team3-icon.png'
import team4Icon from '../../../src/images/team4-icon.png'
import APIAvengers from '../../../src/images/APIAvengers.jpeg'

import chiefGuest from '../../../src/images/chief-guest.png'
import teamAdvisors from '../../../src/images/team-advisors.png'
import teamCaptains from '../../../src/images/team-captains.png'
import teamViceCaptains from '../../../src/images/team-vicecaptains.png'


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const events = [
    {
        id: 1,
        slug: '',
        title: 'FIAKS Leadership Conclave (FLC) Inauguration',
        description: 'FIAKS Leadership Conclave Launch edition inauguration by Ms Zarin Daruwala, CEO Standard Chartered Bank, India and Mr Jaspal Bindra Chairman Centrum Group along with FIAKS founders Anuradha Panditrao and Vikas Panditrao on 21st June 2019',
        date: 'June 21st, 2019',
        location: 'Taj Palace, New Delhi',
        attendees: '1200+',
        type: '1st Edition',
        image: '../fiaks/public/edition1.png',
        featured: true,
        status: 'upcoming',
    },
    {
        id: 2,
        slug: '',
        title: 'FIAKS Leadership Conclave (FLC)',
        description: 'Hands-on workshop exploring cutting-edge regulatory technology solutions for compliance challenges.',
        date: 'June 23rd, 2020',
        location: 'Mumbai Marriott',
        attendees: '150',
        type: '2nd Edition',
        image: '../fiaks/public/edition2.png',
        featured: true,
        status: 'upcoming',
    },
    {
        id: 3,
        slug: '',
        title: 'FIAKS Leadership Conclave',
        description: 'Exclusive gathering of C-suite executives discussing strategic priorities and industry transformation.',
        date: 'May 5, 2021',
        location: 'ITC Grand Chola, Chennai',
        attendees: '200',
        type: '3rd Edition',
        image: '../fiaks/public/edition3.png',
        featured: false,
        status: 'upcoming',
    },
    {
        id: 4,
        slug: '',
        title: 'Digital Payments Roundtable',
        description: 'Industry roundtable on the evolution of digital payments and UPI\'s global expansion.',
        date: 'April 5, 2023',
        location: 'Hyatt Regency, Bangalore',
        attendees: '80',
        type: '4th Edition',
        image: '../fiaks/public/edition4.png',
        featured: false,
        status: 'upcoming',
    },
    {
        id: 5,
        slug: '',
        title: 'AI in Banking Summit',
        description: 'Deep dive into artificial intelligence applications transforming banking operations.',
        date: 'May 20, 2024',
        location: 'The Oberoi, Mumbai',
        attendees: '300',
        type: '5th Edition',
        image: '../fiaks/public/edition5.jpg',
        featured: false,
        status: 'upcoming',
    },
    {
        id: 6,
        slug: '',
        title: 'Fintech Startup Showcase',
        description: 'Platform for emerging fintech startups to present innovations to investors and industry leaders.',
        date: 'June 10, 2025',
        location: 'HICC, Hyderabad',
        attendees: '500',
        type: '6th Edition',
        image: '../fiaks/public/edition6.jpg',
        featured: false,
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
        id: 'OJqJ4eFIHL8',
        name: 'Mr. P N Vasudevan',
        designation: 'MD& CEO- Equitas Small Finance Bank​​',
        description: 'Question 1: We see everything today is Digital & Algorithm based. Is Banking domain expertise becoming a back-office function? Is Banking synonymous with Technology, or is it More than Technology? Question 2: Do frequent outages impact people’s trust in Banking?',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'Ivv7zBBtWNw',
        name: 'Mr. Anubrata Biswas',
        designation: 'MD & CEO Airtel Payments Bank​​',
        description: 'Question: Today there is a glut of OTP demand – Aadhaar, Banks, Digital Signature even Pizza delivery boys. It is very difficult to identify the purpose of these OTPs. What are your views on the safety & usefulness of OTP?',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'M4so7NvqnPE',
        name: 'Mr. KVS Manian​',
        designation: 'Wholetime Director & Member of Group Management Council, Kotak Mahindra Bankk​​​',
        description: 'Question: Central to digital strategy and Innovation is Bank – Fintech collaboration. Fintech is all about start-ups. Why are banks not seen as supporting the bootstrap venture? The majority of collaboration/ partnership is about private equity or VC funded companies. Isn’t start-up also a responsibility of banks.',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'Wir0bOsnk9E',
        name: 'Mr.Ram Gopal',
        designation: ' ​',
        description: 'Question1: Common perception is that banks are in a race to be 1st to launch the products. Today branch staff nor end customers are aware of many of the tech-based products that are offered. Are product launches more to do with PR story?Question 2: Do banks perceive Digital Literacy as an obligation, CSR activity, or do they see it as a valuable customer acquisition tool? AI-based solutions or chatbots have been a frustrating experience? What are your views on the human aspect of digital literacy?',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: '4wXzu-57gWw',
        name: 'Ms. Sujatha Mohan',
        designation: ' ​​',
        description: 'Question: In Bank & Fintech collaboration, what are your thoughts on Multi-Vendor Vs Single Partner strategy for Banks?',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
];
 

const videos1 = [
    {
        iframe: "https://youtu.be/-clcqCE-Z28",
        title: "",
    },
    {
        iframe: "https://youtu.be/I5AeE-qvOWw",
        title: "",
    },
    {
        iframe: "https://youtu.be/_vpnq4m3JH8",
        title: "Mr. Jaspal Bindra",
    },
    {
        iframe: "https://youtu.be/WcqEX2hWngg",
        title: "Mr. Dilip Asbe",
    },
    {
        iframe: "https://youtu.be/-clcqCE-Z28",
        title: "Mr. Vijay Shekhar Sharma",
    },
    {
        iframe: "https://youtu.be/BTWMGRlzptc",
        title: "Mr. Rohit Wahi",
    },
    {
        iframe: "https://youtu.be/c4ivOc-LYq8",
        title: "Mr. Manish Khera",
    },
    {
        iframe: "https://youtu.be/xgy2qvhLjN8",
        title: "Mr. Vishwas Patel",
    },
    {
        iframe: "https://youtu.be/CImRy6RV4Ik",
        title: "Mr. Dewang Neralla",
    },
    {
        iframe: "https://youtu.be/jcPlqSaRt9o",
        title: "Mr. Parag Mehta",
    },
];



const slides = [
    {
        id: 11,
        src: APIAvengers,
        title: 'Shaping the Future of Finance',
        subtitle: 'Join the premier BFSI community driving innovation and transformation',
        cta: 'Explore Now',
    },
    {
        id: 12,
        src: APIAvengers,
        title: 'Global Fintech Summit 2025',
        subtitle: 'Connect with 1000+ industry leaders at our flagship annual event',
        cta: 'Register Today',
    },
    {
        id: 13,
        src: APIAvengers,
        title: 'Knowledge Exchange Platform',
        subtitle: 'Access exclusive insights, research papers, and industry reports',
        cta: 'Learn More',
    },
    {
        id: 14,
        src: APIAvengers,
        title: 'Strategic Partnerships',
        subtitle: 'Forge meaningful connections with global financial institutions',
        cta: 'Partner With Us',
    },
    {
        id: 15,
        src: APIAvengers,
        title: 'Digital Banking Revolution',
        subtitle: 'Stay ahead with cutting-edge fintech trends and innovations',
        cta: 'Join the Movement',
    },
    {
        id: 16,
        src: APIAvengers,
        title: 'Strategic Partnerships',
        subtitle: 'Forge meaningful connections with global financial institutions',
        cta: 'Partner With Us',
    },
    {
        id: 17,
        src: APIAvengers,
        title: 'Digital Banking Revolution',
        subtitle: 'Stay ahead with cutting-edge fintech trends and innovations',
        cta: 'Join the Movement',
    },
];

const recognitionImages = [
    {
        id: 1,
        image: chiefGuest,
        title: 'Chief Guest',
    },
    {
        id: 2,
        image: teamAdvisors,
        title: 'Team Advisors',
    },
    {
        id: 3,
        image: teamCaptains,
        title: 'Team Captains',
    },
    {
        id: 4,
        image: teamViceCaptains,
        title: 'Team Vice Captains',
    }, 
];

const flcVideos = [
    {
        id: 'WJjQGCEyUJ0',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
];

const FLCAndAwardsDetails = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredEvents = activeFilter === 'all'
        ? events
        : events.filter((event) => event.type === activeFilter);

    const featuredEvents = events.filter((event) => event.featured);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    // const itemsPerView = 3;

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

    const [active, setActive] = useState(0);




    // Separate state for videos1 (first row)
    const [activeVideo1, setActiveVideo1] = useState(videos1[0]?.iframe || '');
    const [currentIndex1, setCurrentIndex1] = useState(0);
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
    const getVideoId = (url) => {
        if (!url) return '';
        if (url.includes("youtu.be")) return url.split("youtu.be/")[1];
        if (url.includes("v=")) return url.split("v=")[1];
        return url;
    };




    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };




    return (
        <div className="min-h-screen bg-white" data-testid="events-page">
            <Header forceDark={true} />

            {/* Hero Section */}
            {/* <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'top' }} />
                <div className='absolute top-0 bottom-0 left-0 right-0' style={{ background: '#07549ce8' }}>
                    <div style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%)', textAlign: 'center' }}>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            FLC 2024
                        </h1>
                        <p className="text-white text-xl mb-3">
                            FIAKS Leadership Conclave - Shaping the Future of Banking, Fintech & Payments
                        </p>
                        <span className="inline-flex flex-wrap justify-center gap-4 text-md text-slate-900 font-semibold rounded-md bg-white px-4 py-2 mt-4">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-[#07549c]" />
                                June 10, 2025
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-[#07549c]" />
                                HICC, Hyderabad
                            </span>
                            <span className="flex items-center gap-1">
                                <Users className="w-4 h-4 text-[#07549c]" />
                                500
                            </span>
                        </span>
                    </div>
                </div>
            </section> */}

            {/* Hero Section */}
            <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                <div className="">
                    <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                            FLC & Awards
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
                        </p>
                        <button className="animate slide-up delay-5 bg-white text-black px-8 py-3 mt-6 rounded-full hover:scale-105 transition show">Learn More</button>
                    </div>
                </div>
            </section>

            {/* Leadership Conclave */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    {/* Filters */}
                    <div className="flex items-center justify-between flex-wrap gap-4">

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event) => (
                                <Link
                                    key={event.id}

                                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                                    data-testid={`event-card-${event.id}`}
                                >
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 shadow-xl">
                                            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-bold capitalize text-slate-700">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#07549c] transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                                        <div className="space-y-2 text-sm text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-[#07549c]" />
                                                {event.date}
                                            </div>
                                            {/* <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-[#07549c]" />
                                        {event.location}
                                      </div> */}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <section className="pt-16 pb-16 pt-16 pb-16 bg-[#07549c]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-14">
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            FIAKS Premier League (FPL) - Season 1
                        </h2>
                    </div>
                    <div>
                        <div className="w-3/5 mx-auto">
                            {flcVideos.map((video) => (
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
                                    <div className=" ">
                                        <p className="text-slate-700 font-semibold text-md leading-relaxed">
                                            {video.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Dignified Luminary */}
            <section className="pt-16 pb-16 pt-16 pb-16 ">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16"> 
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Dignified Luminary
                        </h2> 
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-testid="recognition-gallery">
                        {recognitionImages.map((item) => (
                            <div
                                key={item.id}
                                className="gallery-item relative group"
                                data-testid={`recognition-image-${item.id}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className=" object-cover"
                                />
                                <div className="absolute inset-0 bg-[#07549c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                    <p className="text-white text-center text-lg">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-16 md:py-20 bg-slate-50" id="what-we-offer" data-testid="what-we-offer-section">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid gap-12 items-center mt-5">
                        {/* Content */}
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className="offering-card bg-white rounded-xl shadow-lg hover:shadow-xl p-5" style={{ height: '100%' }}>
                                <div className='flex items-center pb-5'>
                                    <img src={team1Icon} className='rounded-xl shadow-lg hover:shadow-xl p-4' alt='' style={{ width: '180px', border: '1px solid #ededed' }} />
                                    <div className='ms-9'>
                                        <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                                            API Avengers
                                        </h3>
                                        <p className='text-slate-700 text-md leading-relaxed'>This team will be sending balls to the boundaries, like requests to servers, All they ask of you is to not be astonished by their brilliance!</p>
                                    </div>
                                </div>
                                <div className="w-5/5 p-5 rounded-lg" style={{ overflow: 'hidden', background: '#9ddbf4' }}>
                                    <Swiper className='p-0'
                                        direction="horizontal"
                                        spaceBetween={20}
                                        slidesPerView={4}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        loop
                                    >
                                        {slides.map((slide) => (
                                            <SwiperSlide key={slide.id}>
                                                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                                                    <img
                                                        src={slide.src}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="offering-card bg-white rounded-xl shadow-lg hover:shadow-xl p-5" style={{ height: '100%' }}>
                                <div className='flex items-center pb-5'>
                                    <img src={team2Icon} className='rounded-xl shadow-lg hover:shadow-xl p-4' alt='' style={{ width: '180px', border: '1px solid #ededed' }} />
                                    <div className='ms-9'>
                                        <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                                            Blockchain Blasters
                                        </h3>
                                        <p className='text-slate-700 text-md leading-relaxed'>With tremendous capacity that propelling their momentum, They are here to blast off the score boards!</p>
                                    </div>
                                </div>
                                <div className="w-5/5 p-5 rounded-lg" style={{ overflow: 'hidden', background: '#F4C37D' }}>
                                    <Swiper className='p-0'
                                        direction="horizontal"
                                        spaceBetween={20}
                                        slidesPerView={4}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        loop
                                    >
                                        {slides.map((slide) => (
                                            <SwiperSlide key={slide.id}>
                                                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                                                    <img
                                                        src={slide.src}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="offering-card bg-white rounded-xl shadow-lg hover:shadow-xl p-5" style={{ height: '100%' }}>
                                <div className='flex items-center pb-5'>
                                    <img src={team3Icon} className='rounded-xl shadow-lg hover:shadow-xl p-4' alt='' style={{ width: '180px', border: '1px solid #ededed' }} />
                                    <div className='ms-9'>
                                        <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                                            DEFI Daredevils
                                        </h3>
                                        <p className='text-slate-700 text-md leading-relaxed'>Secure, stable and widely in demand</p>
                                    </div>
                                </div>
                                <div className="w-5/5 p-5 rounded-lg" style={{ overflow: 'hidden', background: '#EAD18E' }}>
                                    <Swiper className='p-0'
                                        direction="horizontal"
                                        spaceBetween={20}
                                        slidesPerView={4}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        loop
                                    >
                                        {slides.map((slide) => (
                                            <SwiperSlide key={slide.id}>
                                                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                                                    <img
                                                        src={slide.src}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="offering-card bg-white rounded-xl shadow-lg hover:shadow-xl p-5" style={{ height: '100%' }}>
                                <div className='flex items-center pb-5'>
                                    <img src={team4Icon} className='rounded-xl shadow-lg hover:shadow-xl p-4' alt='' style={{ width: '180px', border: '1px solid #ededed' }} />
                                    <div className='ms-9'>
                                        <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                                            Crypto Super Kings
                                        </h3>
                                        <p className='text-slate-700 text-md leading-relaxed'>This team has it all Decentralized talent, volatility and popularity!</p>
                                    </div>
                                </div>
                                <div className="w-5/5 p-5 rounded-lg" style={{ overflow: 'hidden', background: '#6CB2AA' }}>
                                    <Swiper className='p-0'
                                        direction="horizontal"
                                        spaceBetween={20}
                                        slidesPerView={4}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        loop
                                    >
                                        {slides.map((slide) => (
                                            <SwiperSlide key={slide.id}>
                                                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                                                    <img
                                                        src={slide.src}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Mega Panel Discussion */}
            <section className="py-16 md:py-16 ">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Season 1
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Highlights of FIAKS Premier League (FPL)
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Redefining Networking in BFSI Industry</p>
                    </div>
                    <div className=" ">
                        {/* 1st row - videos1 */}
                        <div className="container mx-auto max-w-7xl mb-20">
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
                            {/* {activeVideo1 && (
                                <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200 flex justify-center items-center">
                                    <Quote className="mw-8 h-8 text-[#07549c]/30 mr-3" style={{ minWidth: '30px' }} />
                                    <p className="text-lg font-medium text-slate-800">
                                        {videos1.find(video => video.iframe === activeVideo1)?.title}
                                    </p>
                                </div>
                            )} */}
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

export default FLCAndAwardsDetails;

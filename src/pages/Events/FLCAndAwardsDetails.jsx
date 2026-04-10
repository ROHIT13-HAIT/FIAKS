
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import banner from '../../../src/images/awards-banner.jpg'
import IgnitedMinds from '../../../src/images/IgnitedMinds.png'
import Pathfinder from '../../../src/images/Pathfinder.png'
import Intellectual from '../../../src/images/Intellectual.png'
import icon1 from '../../../src/images/business_leader.png'
import icon2 from '../../../src/images/decision_makers.png'
import icon3 from '../../../src/images/decision-making.png'
import { MessageSquare, BookOpen, Heart, Quote, CheckCircle } from 'lucide-react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';


const events = [
    {
        id: 1,
        slug: 'global-fintech-summit-2025',
        title: 'Global Fintech Summit 2025',
        description: 'The premier gathering of BFSI leaders, innovators, and regulators shaping the future of financial services.',
        date: 'April 15-17, 2025',
        location: 'Taj Palace, New Delhi',
        attendees: '1200+',
        type: '1st Edition',
        image: '../fiaks/src/images/slider1.png',
        featured: true,
        status: 'upcoming',
    },
    {
        id: 2,
        slug: 'regtech-innovation-workshop',
        title: 'RegTech Innovation Workshop',
        description: 'Hands-on workshop exploring cutting-edge regulatory technology solutions for compliance challenges.',
        date: 'March 28, 2023',
        location: 'Mumbai Marriott',
        attendees: '150',
        type: '2nd Edition',
        image: '../fiaks/src/images/slider2.png',
        featured: true,
        status: 'upcoming',
    },
    {
        id: 3,
        slug: 'bfsi-leadership-conclave',
        title: 'BFSI Leadership Conclave',
        description: 'Exclusive gathering of C-suite executives discussing strategic priorities and industry transformation.',
        date: 'May 5, 2023',
        location: 'ITC Grand Chola, Chennai',
        attendees: '200',
        type: '3rd Edition',
        image: '../fiaks/src/images/slider3.png',
        featured: false,
        status: 'upcoming',
    },
    {
        id: 4,
        slug: 'digital-payments-roundtable',
        title: 'Digital Payments Roundtable',
        description: 'Industry roundtable on the evolution of digital payments and UPI\'s global expansion.',
        date: 'April 5, 2023',
        location: 'Hyatt Regency, Bangalore',
        attendees: '80',
        type: '4th Edition',
        image: '../fiaks/src/images/slider4.png',
        featured: false,
        status: 'upcoming',
    },
    {
        id: 5,
        slug: 'ai-in-banking-summit',
        title: 'AI in Banking Summit',
        description: 'Deep dive into artificial intelligence applications transforming banking operations.',
        date: 'May 20, 2024',
        location: 'The Oberoi, Mumbai',
        attendees: '300',
        type: '5th Edition',
        image: '../fiaks/src/images/slider5.jpg',
        featured: false,
        status: 'upcoming',
    },
    {
        id: 6,
        slug: 'fintech-startup-showcase',
        title: 'Fintech Startup Showcase',
        description: 'Platform for emerging fintech startups to present innovations to investors and industry leaders.',
        date: 'June 10, 2025',
        location: 'HICC, Hyderabad',
        attendees: '500',
        type: '6th Edition',
        image: '../fiaks/src/images/slider6.jpg',
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
const leaderVideos = [
    {
        id: 'dQw4w9WgXcQ',
        name: 'Rajesh Sharma',
        type: '1th Edition',
        year: '2025',
        title: 'CEO, National Banking Corp',
        image: '../fiaks/src/images/slider1.png',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'LXb3EKWsInQ',
        name: 'Priya Mehta',
        type: '2th Edition',
        year: '2025',
        title: 'MD, Global Fintech Solutions',
        image: '../fiaks/src/images/slider2.png',
        quote: 'The networking opportunities here are unmatched in the industry.',
    },
    {
        id: 'jfKfPfyJRdk',
        name: 'Amit Verma',
        type: '3th Edition',
        year: '2025',
        title: 'CTO, DigiPay Technologies',
        image: '../fiaks/src/images/slider3.png',
        quote: 'A platform that truly understands the pulse of financial innovation.',
    },
    {
        id: 'dQw4w9WgXcQ',
        name: 'Dr. Sunita Rao',
        type: '4th Edition',
        year: '2023',
        title: 'Chairperson, Banking Regulatory Authority',
        image: '../fiaks/src/images/slider4.png',
        quote: 'Excellent forum for policy discussions and industry alignment.',
    },
    {
        id: 'LXb3EKWsInQ',
        name: 'Michael Chen',
        type: '5th Edition',
        year: '2024',
        title: 'Partner, Venture Capital Firm',
        image: '../fiaks/src/images/slider5.jpg',
        quote: 'Found my best investment opportunities through this community.',
    },
    {
        id: 'LXb3EKWsInQ',
        name: 'Michael Chen',
        type: '5th Edition',
        year: '2025',
        title: 'Partner, Venture Capital Firm',
        image: '../fiaks/src/images/slider6.jpg',
        quote: 'Found my best investment opportunities through this community.',
    },
];

const flcVideos = [
    {
        id: 'rmKIZ2TlMUE',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'rmKIZ2TlMUE',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'The networking opportunities here are unmatched in the industry.',
    },
];

const megaPanelVideos = [
    {
        id: 'DR2cJdDYcco',
        description: 'Role of Fintech Infra and Co-brand Distribution Partners in Transforming The Banking Landscape',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'q1aYIF0YRMM',
        description: 'Technology Innovations For Scalable Payment Processing',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'AwnHLUSF4u4',
        description: 'Modernizing B2B Payments & Collections',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'xYBGCjzJJyE',
        description: 'Need of Centralized KYC Platform for Businesses',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'DR2cJdDYcco',
        description: 'Future of branch banking in the era of self-service digital banking products',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'q1aYIF0YRMM',
        description: 'Issue of knowledge gap among front-end staff at bank branches',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'AwnHLUSF4u4',
        description: 'Aren’t the skill sets different to deliver pizzas & to deliver banking products?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'xYBGCjzJJyE',
        description: 'Do you envision bank branches as nodal points for conducting digital literacy programs?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'xYBGCjzJJyE',
        description: 'Do banks empower their branch heads to close the accounts of rude customers?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
];
const globalInfographics = [
    {
        id: 1,
        title: 'Global Fintech Investment Trends',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        category: 'Investment',
    },
    {
        id: 2,
        title: 'Digital Banking Adoption Worldwide',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        category: 'Banking',
    },
    {
        id: 3,
        title: 'Cross-Border Payment Statistics',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
        category: 'Payments',
    },
    {
        id: 4,
        title: 'RegTech Market Analysis',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80',
        category: 'RegTech',
    },
];

const domesticInfographics = [
    {
        id: 1,
        title: 'UPI Transaction Growth',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
        category: 'Payments',
    },
    {
        id: 2,
        title: 'Digital Lending Landscape',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80',
        category: 'Lending',
    },
    {
        id: 3,
        title: 'InsurTech Adoption Rates',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
        category: 'Insurance',
    },
    {
        id: 4,
        title: 'Neo-Banking Revolution',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        category: 'Banking',
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
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover', objectPosition: 'top' }} />
                <div className='absolute top-0 bottom-0 left-0 right-0' style={{ background: '#07549ce8' }}>
                    <div style={{ position: 'absolute', top: '42%',left: '50%', transform: 'translate(-50%)', textAlign: 'center'}}>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            FLC 2024
                        </h1>
                        <p className="text-white text-xl mb-3">
                            FIAKS Leadership Conclave - Shaping the Future of Banking, Fintech & Payments
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Conclave */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between flex-wrap gap-4">
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
                                    className="flex transition-transform duration-500 ease-in-out "
                                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
                                >
                                    {leaderVideos.map((leader, index) => (
                                        <div
                                            key={`${leader.id}-${index}`}
                                            className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                            data-testid={`leader-card-${index}`}
                                        >
                                            <div className="leader-video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 mx-3 my-4">
                                                {/* Video/Image */}
                                                <div className="relative aspect-video p-4">
                                                    <>
                                                        <img
                                                            src={leader.image}
                                                            alt={leader.name}
                                                            className="w-full h-full object-cover rounded-xl"
                                                        />
                                                        <div className="absolute top-4 left-4">
                                                            <span className="px-3 py-1 bg-[#07549c] text-white rounded-full text-sm font-medium capitalize">
                                                                {leader.type}
                                                            </span>
                                                        </div>
                                                    </>
                                                </div>

                                                {/* Content */}
                                                <div className="px-5 pb-5">
                                                    {/* <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                      <p className="text-slate-600 italic mb-4">{leader.quote}</p> */}
                                                    <div className=" ">
                                                        <h4 className="font-['Outfit'] font-semibold text-slate-900">{leader.year}</h4>
                                                        {/* <p className="text-sm text-slate-500">{leader.title}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <section className="pt-16 pb-16 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            FLC & Awards
                        </p>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                            FLC 2024
                        </h1>
                        <p className="text-slate-600 text-lg">
                            Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
                        </p>
                    </div>
                    <Tabs defaultValue="Sponsors" className="w-full mt-10">
                        <TabsList className="flex justify-center mb-10 bg-transparent gap-4">
                            <TabsTrigger
                                value="Sponsors"
                                className="px-8 py-3 rounded-lg font-semibold data-[state=active]:bg-[#07549c] data-[state=active]:text-white bg-white text-slate-700 shadow-sm"
                                data-testid="Sponsors-tab"
                            >
                                Our Sponsors
                            </TabsTrigger>
                            <TabsTrigger
                                value="Panelist"
                                className="px-8 py-3 rounded-lg font-semibold data-[state=active]:bg-[#07549c] data-[state=active]:text-white bg-white text-slate-700 shadow-sm"
                                data-testid="Panelist-tab"
                            >
                                Our Panelist
                            </TabsTrigger>
                            <TabsTrigger
                                value="Award"
                                className="px-8 py-3 rounded-lg font-semibold data-[state=active]:bg-[#07549c] data-[state=active]:text-white bg-white text-slate-700 shadow-sm"
                                data-testid="Award-tab"
                            >
                                Award Presenter
                            </TabsTrigger>
                            <TabsTrigger
                                value="Speech"
                                className="px-8 py-3 rounded-lg font-semibold data-[state=active]:bg-[#07549c] data-[state=active]:text-white bg-white text-slate-700 shadow-sm"
                                data-testid="Speech-tab"
                            >
                                Founder's Speech
                            </TabsTrigger>
                            <TabsTrigger
                                value="Review"
                                className="px-8 py-3 rounded-lg font-semibold data-[state=active]:bg-[#07549c] data-[state=active]:text-white bg-white text-slate-700 shadow-sm"
                                data-testid="Review-tab"
                            >
                                Review
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="Sponsors">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                                {flcVideos.map((video) => (
                                    <div
                                        key={video.id}
                                        className="video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 gap-8 m-4"
                                        data-testid={`video-card-${video.id}`}
                                    >
                                        <img
                                            src={video.image}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />

                                        <div >
                                            <p className="text-slate-600">{video.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="domestic">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {domesticInfographics.map((item) => (
                                    <div
                                        key={item.id}
                                        className="infographic-card group cursor-pointer"
                                        data-testid={`domestic-infographic-${item.id}`}
                                    >
                                        <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <span className="inline-block px-3 py-1 bg-[#07549c] text-white text-xs font-medium rounded-full mb-2">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-white font-semibold">{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>


                </div>
            </section>


            {/* FIAKS AWARDS */}
            <section className="py-16 md:py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Our Sponsors</h2>
                    <section className=" ">
                        <div className="container mx-auto max-w-7xl">
                            <div className="grid md:grid-cols-3 gap-8">
                                {featuredEvents.map((event) => (
                                    <Link
                                        key={event.id}
                                        to={`/events/${event.slug}`}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all"
                                        data-testid={`featured-event-${event.id}`}
                                    >
                                        <div className="aspect-[16/9] overflow-hidden relative">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <p className=' text-slate-700 text-lg leading-relaxed'>
                                                {event.title}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>


            {/* Mega Panel Discussion */}
            <section className="pt-16 md:pt-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            FLC & Awards
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Mega Panel Discussion
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                    </div>
                </div>
            </section>
            <section className="pb-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {megaPanelVideos.map((video) => (
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
                                <div className="p-5">
                                    <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-slate-700 text-md leading-relaxed">{video.description}</p>
                                </div>
                            </div>
                        ))}
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

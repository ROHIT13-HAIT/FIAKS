
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import banner from '../../../src/images/banner-bg.jpg'
import bannerLogo from '../../../src/images/zero-hour.png'
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

const guestSpeakerVideos = [
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

const guestSpeakerVideos2 = [
    {
        id: 'DR2cJdDYcco', 
        description: 'In Bank & Fintech Collaboration, Customer Service is pushed on to the banks. Isn’t this putting banks at disadvantage as they land up doing the heavy lifting?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'q1aYIF0YRMM', 
        description: 'Should Banks and Fintechs share data breach information with the public?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'AwnHLUSF4u4', 
        description: 'Does India need National Umbrella Entity?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'xYBGCjzJJyE', 
        description: '“No 1st mover advantage for Central Bank in launching Digital Currency. Your Country can still be a leader even if you delay this decision”',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    const itemsPerView = 3;
 

    return (
        <div className="min-h-screen bg-white" data-testid="events-page">
            <Header forceDark={true} />

            {/* Hero Section */}

            <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <img src={bannerLogo} alt='' className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20%' }} />
            </section>


            <section className="pt-16 md:pt-16">
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
                    <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Mr. MN Srinivasu, Co-founder, Bill Desk - <span className='text-[#07549c]'>Edition 2.0</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {guestSpeakerVideos.map((video) => (
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
                                    {/* <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-2">
                                        {video.title}
                                    </h3> */}
                                    <p className="text-slate-600">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STARTUP SHOWCASING - EDITION 1.0 */}
            <section className="pb-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Mr. A P Hota, Former MD & CEO - NPCI - <span className='text-[#07549c]'>Edition 1.0</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {guestSpeakerVideos2.map((video) => (
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
                                    <p className="text-slate-600">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-16 md:py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-4">Bonus Segment - Celebrating Bootstrap Startups</h2>
                   <p className=' text-slate-700 text-lg leading-relaxed mb-8'>Under this Bonus Segment, we make an attempt to celebrate Bootstrap Startups - An initiative for entrepreneurs to present their venture to our FIAKS community of 5000+ C-suite execs spread across 30+ countries</p>
                    <div className="flex gap-8 w-3/3 mt-5">  
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

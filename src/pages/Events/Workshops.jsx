
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import fingerprint from '../../../src/images/fingerprint.jpg'

import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';


const events = [
    {
        id: 1,
        slug: 'global-fintech-summit-2025',
        title: 'Bharat Bill Payment System – An Interactive Session With The Experts',
        description: 'The premier gathering of BFSI leaders, innovators, and regulators shaping the future of financial services.',
        date: 'April 15-17, 2025',
        location: 'Taj Palace, New Delhi',
        attendees: '1200+',
        type: '1st Edition',
        image: '../../../src/images/workshop1.jpeg',
        featured: true,
        status: 'upcoming',
    },
    {
        id: 2,
        slug: 'regtech-innovation-workshop',
        title: 'Interactive Session On UPI And BHIM',
        description: 'Hands-on workshop exploring cutting-edge regulatory technology solutions for compliance challenges.',
        date: 'March 28, 2023',
        location: 'Mumbai Marriott',
        attendees: '150',
        type: '2nd Edition',
        image: '../../../src/images/workshop2.jpeg',
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
        id: 'F3x535Y4lOLnqHNM',
        title: 'Curated Lending Startups',
        description: 'Will the NUE initiative create digital products addressing the needs of people who are at the bottom of the pyramid? Or if RTGS goes down or the NPCI system goes down then will the transactions be routed through the new NUE?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'F3x535Y4lOLnqHNM',
        title: 'Curated Payments & Fintech Enablers',
        description: 'Can digital services by Fintechs to the bottom of the pyramid ever be Profitable?',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'F3x535Y4lOLnqHNM',
        title: 'Curated WealthTech & InsureTech Startups',
        description: 'ZERO MDR doesn’t benefit customer, doesn’t benefit merchant, doesn’t help in pushing Digitalisation',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
    {
        id: 'F3x535Y4lOLnqHNM',
        title: 'Curated WealthTech & InsureTech Startups',
        description: 'Marketing spends by B2B',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
];

const leaderVideos = [
    {
        id: 'dQw4w9WgXcQ',
        name: 'Rajesh Sharma',
        title: 'CEO, National Banking Corp',
        thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
    {
        id: 'LXb3EKWsInQ',
        name: 'Priya Mehta',
        title: 'MD, Global Fintech Solutions',
        thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        quote: 'The networking opportunities here are unmatched in the industry.',
    },
];

const Workshops = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    const itemsPerView = 3;

    const featuredEvents = events.filter((event) => event.featured);
    return (
        <div className="min-h-screen bg-white" data-testid="events-page">
            <Header forceDark={true} />

            <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Workshops
                        </p>
                        <h1 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Current Events
                        </h1>
                    </div>
                </div>
            </section>


            <section className="py-16 md:py-20 bg-[#07549c]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid gap-12 justify-center items-center">
                        {/* Content */}
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                            <div className=''>
                                <div className="sm:flex justify-center items-center rounded-xl shadow-lg hover:shadow-xl bg-white offering-card">
                                    <img src={fingerprint} className='rounded-xl' alt='' />
                                    <div className='p-8'>
                                        <p className='text-slate-700 text-2xl text-md leading-relaxed '>How to secure Payment with Fingerprint</p>
                                        <button class="animate slide-up delay-5 bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition show mt-5">View Event</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Past Events */}
            <section className="py-16 md:py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Past Events</h2> 
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

export default Workshops;

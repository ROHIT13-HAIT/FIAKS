
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import fingerprint from '../../../src/images/fingerprint.jpg'
import banner from '../../../src/images/banners/workshops.jpg'

import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';


const currentEvents = [
    {
        id: 1,
        title: 'How to secure Payment with Fingerprint',
        image: '../fiaks/fingerprint.jpg',
    },

];

const pastEvents = [
    {
        id: 1,
        title: 'Bharat Bill Payment System – An Interactive Session With The Experts',
        image: '../fiaks/pastEvent1.jpeg',
    },
    {
        id: 2,
        title: 'Interactive Session On UPI And BHIM',
        image: '../fiaks/pastEvent2.jpeg',
    },

];



// const videos = [
//     {
//         id: 'F3x535Y4lOLnqHNM',
//         title: 'Curated Lending Startups',
//         description: 'Will the NUE initiative create digital products addressing the needs of people who are at the bottom of the pyramid? Or if RTGS goes down or the NPCI system goes down then will the transactions be routed through the new NUE?',
//         thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
//     },
//     {
//         id: 'F3x535Y4lOLnqHNM',
//         title: 'Curated Payments & Fintech Enablers',
//         description: 'Can digital services by Fintechs to the bottom of the pyramid ever be Profitable?',
//         thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
//     },
//     {
//         id: 'F3x535Y4lOLnqHNM',
//         title: 'Curated WealthTech & InsureTech Startups',
//         description: 'ZERO MDR doesn’t benefit customer, doesn’t benefit merchant, doesn’t help in pushing Digitalisation',
//         thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
//     },
//     {
//         id: 'F3x535Y4lOLnqHNM',
//         title: 'Curated WealthTech & InsureTech Startups',
//         description: 'Marketing spends by B2B',
//         thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
//     },
// ];


const Workshops = () => {

    return (
        <div className="min-h-screen bg-white" >
            <Header forceDark={true} />
            {/* Hero Section */}
            <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                <div className="">
                    <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                            Workshops
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
                        </p>
                        <button class="animate slide-up delay-5 bg-white text-black px-8 py-3 mt-6 rounded-full hover:scale-105 transition show">Learn More</button>
                    </div></div>
            </section>


            {/* Current Events */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Workshops
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Current Events
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {currentEvents.map((event, index) => (
                            <>
                                 <div key={index} className='offering-card  rounded-xl md:shadow-lg hover:shadow-xl'>
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
                                    <button class="animate slide-up delay-5 bg-black text-white px-6 py-2 mt-3 rounded-full hover:scale-105 transition show">Learn More</button>
                                </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>


            {/* Past Events */}
            <section className="py-16 md:py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            Workshops
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Past Events
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                    </div>
                    <section className=" ">
                        <div className="container mx-auto max-w-7xl">
                            <div className="grid md:grid-cols-3 gap-8">
                                {pastEvents.map((event, index) => (

                                    <>
                                        <div key={index} className='offering-card rounded-xl md:shadow-lg hover:shadow-xl'>
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
                                                <button class="animate slide-up delay-5 bg-black text-white  px-6 py-2 mt-3 rounded-full hover:scale-105 transition show">Learn More</button>
                                            </div>
                                        </div>
                                    </>

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

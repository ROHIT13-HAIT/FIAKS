
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';

import banner from '../../src/images/banners/fiaks-motes.jpg'
import CommitteeImg1 from '../../src/images/Committee1.png';
import CommitteeImg2 from '../../src/images/Committee2.png'
import { Quote } from 'lucide-react';
import { Linkedin, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';


const HonoraryAdvisoryCommittee = () => {

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/company/fiaks4knowledge/', label: 'LinkedIn' },
    ];

    return (
        <div className="min-h-screen" data-testid="events-page">
            <Header forceDark={true} />

            {/* Hero Section */}
            <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                <div className="">
                    <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                            Honorary Advisory Committee
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16 md:py-20 bg-slate-50" id="what-we-offer" data-testid="what-we-offer-section">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            FLC & Awards Home
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Honorary Advisory Committee
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                    </div>
                    <div className="grid gap-12 items-center mt-5">
                        {/* Content */}
                        <div className="grid md:grid-cols-1 lg:grid-cols-1  gap-8">
                            <div className=' '>
                                <div className="sm:flex items-center offering-card bg-white rounded-xl shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                                    <img src={CommitteeImg1} className='rounded-xl' alt='' />
                                    <div className='p-8'>
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 float-right rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#07549c] transition-colors"
                                                aria-label={social.label}
                                                data-testid={`social-${social.label.toLowerCase()}`}
                                            >
                                                <social.icon className="w-5 h-5 text-white" />
                                            </a>
                                        ))}
                                        <h3 className="font-['Outfit'] text-[#07549c] text-2xl mb-1">
                                            Mr Jaspal Bindra
                                        </h3>
                                        <h4 className="font-['Outfit'] italic text-1xl text-slate-900 mb-2">Chairman of Centrum Group</h4>
                                        <p className='text-slate-800 text-md my-3'>Mr. Jaspal Bindra is a veteran Banker with over 30 years of experience in MNC organizations such as Standard Chartered Bank, UBS, and Bank of America. Currently, he is the Chairman of Centrum group since April  2016. Prior to that, he was Group Executive Director & Chief Executive Officer, Asia Standard Chartered Bank for 17+ years.</p>
                                        <p className='text-slate-800 text-md my-3'>Mr. Bindra, alumni of St Xavier’s College, Kolkata, is among a handful of Indian-born executives who have reached the highest level of success in the global financial industry. His peers include Anshu Jain, co-chief executive of Deutsche Bank, Ajit Jain, a key lieutenant of legendary investor Warren Buffett at Berkshire Hathaway; and Ajay Banga, president, and chief executive officer of MasterCard, besides Pandit.</p>  
                                    </div>
                                </div>
                            </div>
                            <div className=' '>
                                <div className="sm:flex items-center offering-card bg-white rounded-xl shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                                    <img src={CommitteeImg2} className='rounded-xl' alt='' />
                                    <div className='p-8'>
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 float-right rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#07549c] transition-colors"
                                                aria-label={social.label}
                                                data-testid={`social-${social.label.toLowerCase()}`}
                                            >
                                                <social.icon className="w-5 h-5 text-white" />
                                            </a>
                                        ))}
                                        <h3 className="font-['Outfit'] text-[#07549c] text-2xl mb-1">
                                            Mr AP Hota
                                        </h3>
                                        <h4 className="font-['Outfit'] italic text-1xl text-slate-900 mb-2">Former Managing Director & CEO of NPCI</h4>
                                        <p className='text-slate-800 text-md my-3'>He had a long tenure of 35 years – 27 years in Reserve Bank of India (RBI) and 8 years at NPCI in the area of design, development, and implementation of electronic payment systems. He combines the experience of a central banker and a service provider in payments systems.</p>
                                        <p className='text-slate-800 text-md my-3'>Mr. Hota has received the Aadhar Excellence Award, Skoch Business Leadership Award, Karmabeera Gowrishankar Samman, M R Pai Memorial Award and FFIFS Life Time Achievement Award for contribution to digital payment revolution in the country. He had also been honored with Best CEO Award in public sector Category by Forbes Leadership Award for 2017 and Pathbreaker Award from Dataquest. Mr. Hota currently provides consulting services to World Bank and SWIFT India Ltd and serves as an independent member on the Boards of Federal Bank, Motilal Oswal Asset Management Company and IDBI Intech.</p>
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

export default HonoraryAdvisoryCommittee;

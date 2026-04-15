
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';

import banner from '../../src/images/banners/fiaks-motes.jpg'
import bannerLogo from '../../src/images/motes-logo.png'



const Disclaimer = () => {



    return (
        <div className="min-h-screen bg-white" data-testid="events-page">
            <Header forceDark={true} />

            {/* Hero Section */}
            <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                <div className="">
                    <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                            Disclaimer - FIAKS Daily
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid gap-12 items-center">
                        {/* Content */}
                        <div className='offering-card bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl'>
                            <p className='text-md leading-relaxed'>This section is a compilation of news, articles, updates and information (“Updates”) related to payments,fintech, banking and other industry. All Updates belong to the source provided after every such Update. FIAKS does not have and in no manner claims to have any intellectual property rights in the content, images, pdf, videos etc. in any of the Updates. This section has been created for knowledge sharing/education purposes for our smart FIAKS communities across the globe. We understand that the fair use of a copyrighted work or work protected under any intellectual property law, including such use by reproduction in copies or by any other means specified under applicable laws, for purposes such as criticism, comment, news reporting, teaching (including multiple copies for classroom use), scholarship, or research, is not an infringement of copyright. This section and our website may contain certain copyrighted or the work otherwise protected under any law that were not specifically authorised to be used by the copyright holder(s) or right holder(s) but which we believe in good faith are protected by the applicable laws and the fair use doctrine for one or more reasons noted above. If you have any specific concerns about this section or our website or our position on the fair use defence</p>
                            <p className='text-md leading-relaxed mt-5 font-semibold'>Please contact us at <a href='mailto:contactus@fiaks.com'>contactus@fiaks.com</a> so we can discuss amicably.
                            </p>
                            <p className='text-md leading-relaxed mt-3 font-semibold'>
                                Thank you.
                            </p>
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

export default Disclaimer;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';

import banner from '../../src/images/banners/privacy-policy.jpg'
import policyImage from '../../src/images/policy.jpg';
import bannerLogo from '../../src/images/motes-logo.png'
import { CheckCircle } from 'lucide-react';



const PrivacyPolicy = () => {



    return (
        <div className="min-h-screen" data-testid="events-page" style={{ backgroundImage: `url(${policyImage})`, backgroundPosition:'center', backgroundSize:'cover', backgroundAttachment:'fixed' }}>
            <Header forceDark={true} />

            {/* Hero Section */}
            <section className="relative" style={{ marginTop: '80px' }}>
                <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                <div className="">
                    <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
                        </p>
                    </div>
                </div>
            </section>

          
            <section className="py-16 md:py-16" >
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="grid gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className='animate slide-up delay-1'>
                                <p className='text-md leading-relaxed'>We, at Forum of Industry Academic Knowledge Sharing (“FIAKS”) and its legal entity Hrishanu Business Solutions LLP (“HBSL”) value data and privacy of each person and hence present this Privacy Policy in relation to the website [www.fiaks.com] (“Website”). FIAKS is a knowledge sharing platform for professionals, which provides services of keeping members updated on the banking, fintech and e-comm industry by sending updates, news flash, journal, organizing workshops/ events, helping members to connect and network for business/ professional purposes, helps find jobs, etc. (together known as “Services”). If you access the Website, use our Services and/ or are a member, you will be deemed to be a “User” for this policy. By accessing our Website or using our Services, you signify your assent to this Privacy Policy and consent to the processing of your information. If you do not agree with this Privacy Policy, please do not access our Website or use any of our Services.</p>
                            </div>

                            <div className='mt-8 animate slide-up delay-2'>
                                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Collection of Information</h4>
                                <p className='text-md leading-relaxed my-2'>We only collect the Information that   </p> 
                                <p className='text-md leading-relaxed my-2'><strong>(i)</strong> you provide us such as your name, email address, phone no., designation, etc.; and <br></br>
                                    <strong>(ii)</strong> the information which is publically available such as in news, social media platforms, etc.</p>
                                <p className='text-md leading-relaxed my-2'>We only collect data and information that is necessary</p>
                                <p className='text-md leading-relaxed my-4'>While paying for membership, taking subscription, participating in an event and such other circumstances, you may be required to make payments. However, we would like to clarify that credit card, debit card, net banking or any such payment details are not collected, received, processed or handled by us, but instead by the third party payment gateway aggregator engaged.</p>
                                <p className='text-md leading-relaxed my-4'>Our endeavour is to not collect any sensitive personal data or any critical information.</p>
                            </div>

                            <div className='mt-8'>
                                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Purpose of Collection and Usage of Information</h4>
                                <p className='text-md leading-relaxed'>Our purpose of collection of data may be one or more of the following:</p><br></br>
                                <div>
                                    <div className="flex items-center gap-2 rounded-xl py-1">
                                        <CheckCircle className="w-5 h-5 text-[#07549c]" />
                                        <span className="text-md leading-relaxed">for enrolment as a member;</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-xl py-1">
                                        <CheckCircle className="w-5 h-5 text-[#07549c]" />
                                        <span className="text-md leading-relaxed">to provide you Services;</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-xl py-1">
                                        <CheckCircle className="w-5 h-5 text-[#07549c]" />
                                        <span className="text-md leading-relaxed">for publishing some of your details such as name, designation, etc. in journals, news updates, articles and other content;</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-xl py-1">
                                        <CheckCircle className="w-5 h-5 text-[#07549c]" />
                                        <span className="text-md leading-relaxed">for suggesting new Services;</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-xl py-1">
                                        <CheckCircle className="w-5 h-5 text-[#07549c]" />
                                        <span className="text-md leading-relaxed">for establishing your association with FIAKS; or</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-xl py-1">
                                        <CheckCircle className="w-5 h-5 text-[#07549c]" />
                                        <span className="text-md leading-relaxed">to communicate with you</span>
                                    </div>
                                </div>
                                <p className='text-md leading-relaxed mt-2'>We may use your data for the above listed purposes and for analytics in order to serve you better.</p>
                            </div>

                            <div className='mt-8'>
                                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Disclosure of Information</h4>
                                <p className='text-md leading-relaxed'>We understand the importance of your information and do not share or disclose it to any third party until essential for providing you Services, or for the purpose and usages mentioned above. In case, disclosure is required for any other purpose, we would obtain your consent. However, if required to share or disclose your information due to an order of court, judicial or regulatory authority or in accordance with the law, we may do so without intimation or consent. Lastly, we would like to clarify that we do not use your information for marketing purposes.</p>
                            </div>

                            <div className='mt-8'>
                                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Security Practises</h4>
                                <p className='text-md leading-relaxed'>Your information is safely kept in our systems/ server. We have ensured that persons who have access to your information are limited and only grant access if necessary. We have security measures in place and are constantly working to keep your information safe.</p>
                            </div>

                            <div className='mt-8'>
                                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>General</h4>
                                <p className='text-md leading-relaxed my-4'>You can review and revise the information provided by you by contacting us at <a className='font-semibold' href='mailto:contactus@fiaks.com'>[contactus@fiaks.com]</a>. However, in order to verify your identity we may ask some questions or request certain documents.</p>

                                <p className='text-md leading-relaxed my-4'>We have the right to amend in full or in part, this Privacy Policy at any time for any reason. In case, any changes are made, the same will be updated on the website and you are therefore requested to periodically review this page for the latest information on our privacy practices. Once posted, those changes are effective immediately, unless stated otherwise.</p>

                                <p className='text-md leading-relaxed my-4'>We clarify that any data or info available in public domain is not under the ambit of this policy.</p>

                                <p className='text-md leading-relaxed my-4'>If you have any questions, queries, concerns or feedbacks about this privacy policy or our privacy related practices, please feel free to contact us at on the ‘contact us’ page on <a className='font-semibold' href='mailto:contactus@fiaks.com'>[contactus@fiaks.com]</a>.</p>

                                <p className='text-md leading-relaxed my-4'>In case you have any grievance relating to the collecting, receiving, possessing, storing, dealing or handling of Personal Information provided by you, you may contact our Grievance Officer at Anuradha Panditrao at <a className='font-semibold' href='mailto:contactus@fiaks.com'>contactus@fiaks.com</a>.</p>

                                <p className='text-md leading-relaxed my-4'>Continued access or use of the Services constitutes your acceptance of the changes and the amended Privacy Policy. However, if you do not agree with the changes, please do not continue to use the Services or submit Personal Information to us.</p>
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

export default PrivacyPolicy;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { motion, AnimatePresence } from "framer-motion";

import banner from '../../../src/images/banners/flc-award.jpg'
import IgnitedMinds from '../../../src/images/IgnitedMinds.png'
import Pathfinder from '../../../src/images/Pathfinder.png'
import Intellectual from '../../../src/images/Intellectual.png'
import icon1 from '../../../src/images/business_leader.png'
import icon2 from '../../../src/images/decision_makers.png'
import icon3 from '../../../src/images/decision-making.png'
import { MessageSquare, BookOpen, Heart, Quote, CheckCircle } from 'lucide-react';
import { ChevronLeft, ChevronRight, Play, Trophy } from 'lucide-react';


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
        id: 'WJjQGCEyUJ0',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
];

const flcVideos2 = [
    {
        id: 'T4xUS9LJsjQ',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
];

const awardTab = [
    {
        id: 'fLsgPNmlPUo',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
];

const speechTab = [
    {
        id: '17bTl80NKi0',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
];

const reviewTab = [
    {
        id: 'fLsgPNmlPUo',
        image: '../fiaks/src/images/Sponsors.jpg',
        quote: 'Fintech Forum has been instrumental in shaping our digital transformation journey.',
    },
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


const data = [
    {
        title: "FIAKS Ignited Mind Award",
        id: 'OJqJ4eFIHL8',
        AwardeeName: "FLC2020 award was presented by FIAKS Community Thought Leader Mr.. Sanjeev Mittal – Managing Director and Chief Executive Officer The Bank of Nova Scotia and Mr. Kalidas Ghose – Vice Chairman & CEO, VP Bank Finance Ltd.",
        designation: 'Enterprising Professional',
        awards: 'Ms AISHWARYA JAISHANKAR',
        desc: `Forum of Industry and Academic Knowledge Sharing (FIAKS) by Anuradha Panditrao is a community of CEOs, CXOs, and Founders in Banking, Payments, Fintech, E-commerce, Insurance, Mutual Funds, and several other sectors created to share knowledge among industry leaders and build priceless relations.`,
    },
    {
        title: "FIAKS Pathfinder Award",
        img: "/fiaks/whoweare2.jpg",
        desc: `FIAKS is a community of intellectual minds that helps experts to share their knowledge and leaders polish theirs. With FIAKS, there is no lagging behind on what’s latest happening internationally, domestically, on the regulatory front, what’s brewing in tech, industry reports, important audio, trending BFSI-related videos, and much more.`,
    },
    {
        title: "FIAKS Intellectual Explorer Award",
        img: "/fiaks/whoweare3.png",
        desc: `FIAKS is for c-suite executives and forward-thinking professionals. FIAKS is a community driven by experts and leaders from the BFSI, Fintech, Payments, Mutual Funds, E-Commerce, and several other industries.`,
    },
    {
        title: "FIAKS Sharpshooter Award",
        img: "/fiaks/whoweare3.png",
        desc: `FIAKS is for c-suite executives and forward-thinking professionals. FIAKS is a community driven by experts and leaders from the BFSI, Fintech, Payments, Mutual Funds, E-Commerce, and several other industries.`,
    },
];

const data2 = [
    {
        title: "Our Sponsors",
        id: 'OJqJ4eFIHL8',
        AwardeeName: "FLC2020 award was presented by FIAKS Community Thought Leader Mr.. Sanjeev Mittal – Managing Director and Chief Executive Officer The Bank of Nova Scotia and Mr. Kalidas Ghose – Vice Chairman & CEO, VP Bank Finance Ltd.",
        designation: 'Enterprising Professional',
        awards: 'Ms AISHWARYA JAISHANKAR',
        desc: `Forum of Industry and Academic Knowledge Sharing (FIAKS) by Anuradha Panditrao is a community of CEOs, CXOs, and Founders in Banking, Payments, Fintech, E-commerce, Insurance, Mutual Funds, and several other sectors created to share knowledge among industry leaders and build priceless relations.`,
    },
    {
        title: "Our Panelist",
        img: "/fiaks/whoweare2.jpg",
        desc: `FIAKS is a community of intellectual minds that helps experts to share their knowledge and leaders polish theirs. With FIAKS, there is no lagging behind on what’s latest happening internationally, domestically, on the regulatory front, what’s brewing in tech, industry reports, important audio, trending BFSI-related videos, and much more.`,
    },
    {
        title: "Award Presenter",
        img: "/fiaks/whoweare3.png",
        desc: `FIAKS is for c-suite executives and forward-thinking professionals. FIAKS is a community driven by experts and leaders from the BFSI, Fintech, Payments, Mutual Funds, E-Commerce, and several other industries.`,
    },
    {
        title: "Founder's Speech",
        img: "/fiaks/whoweare3.png",
        desc: `FIAKS is for c-suite executives and forward-thinking professionals. FIAKS is a community driven by experts and leaders from the BFSI, Fintech, Payments, Mutual Funds, E-Commerce, and several other industries.`,
    },
];

const videos1 = [
    {
        iframe: "https://youtu.be/hFI_91J_Mfk",
        title: "",
    },
    {
        iframe: "https://youtu.be/o91VgBErdGU",
        title: "",
    },
    {
        iframe: "https://youtu.be/51CogScadLw",
        title: "Mr. Jaspal Bindra",
    },
    {
        iframe: "https://youtu.be/4lphoUhvTEE",
        title: "Mr. Dilip Asbe",
    },
    {
        iframe: "https://youtu.be/mdU9FkewLdQ",
        title: "Mr. Vijay Shekhar Sharma",
    },
    {
        iframe: "https://youtu.be/DL21Sq7XmMI",
        title: "Mr. Rohit Wahi",
    },
    {
        iframe: "https://youtu.be/bcqp8Xrhy-s",
        title: "Mr. Manish Khera",
    },
    {
        iframe: "https://youtu.be/n-RZ-IpLcgQ",
        title: "Mr. Vishwas Patel",
    },
    {
        iframe: "https://youtu.be/02upxuNVTNM",
        title: "Mr. Dewang Neralla",
    },
    {
        iframe: "https://youtu.be/q9dDtRysPTA",
        title: "Mr. Parag Mehta",
    },
    {
        iframe: "https://youtu.be/gC9VqbWJbJQ",
        title: "Mr. Sony A",
    },
    {
        iframe: "https://youtu.be/qe9s9NifOsw",
        title: "Mr. Arvind Narayanan",
    },
    {
        iframe: "https://youtu.be/LobkGQLo4MQ",
        title: "Mr. Narayan Rao",
    },
    {
        iframe: "https://youtu.be/UjA2y8famUM",
        title: "Mr. Roopesh Chandran",
    },
    {
        iframe: "https://youtu.be/2P8ZKLkJuxM",
        title: "Mr. Rakesh Bhanushali",
    },
    {
        iframe: "https://youtu.be/l4ApxxkOxYI",
        title: "Mr. Pratyush Halen",
    },
    {
        iframe: "https://youtu.be/gD_qsL81uOM",
        title: "Mr. Saurabh Soni",
    },
    {
        iframe: "https://youtu.be/FrYaL-z1FdQ",
        title: "Mr. Muthu Krishnan",
    },
    {
        iframe: "https://youtu.be/xmhOT1ejBmI",
        title: "Mr. Ruchit Jangid",
    },
    {
        iframe: "https://youtu.be/DXBAf48unrg",
        title: "Mr. K Aayush Mazumdar",
    },
    {
        iframe: "https://youtu.be/hOvoQyRPZd4",
        title: "Mr. Nagaraj Mylandla",
    },
    {
        iframe: "https://youtu.be/gIBtLlz7JMw",
        title: "Mr. Sunil Dalal",
    },
    {
        iframe: "https://youtu.be/3WpcA8_bDGw",
        title: "Mr. Arun Tanksali",
    },
    {
        iframe: "https://youtu.be/nDwlg78oSLY",
        title: "Mr. Ram Rastogi",
    },
    {
        iframe: "https://youtu.be/3RceTcnjK8c",
        title: "Mr. Rajesh Prasad",
    }
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


const awardPerson = [
    "Ms Aishwarya Jaishankar",
    "Mr Ramasubramanan S",
    "Mr Kamonasish Ayush Mazumdar",
];

const awardPersonName = ({ awardPerson }) => (

    <p>({awardPerson})</p>

);
console.log(awardPersonName);


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
                    <div className="text-center mb-10"> 
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                           FLC 2020
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

            <section className="pt-16 pb-16 pt-16 pb-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <Tabs defaultValue="Sponsors" className="w-full mt-10 d-none">
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
                        <TabsContent value="Award">
                            <div className="w-1/2 mx-auto">
                                {awardTab.map((video) => (
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
                        </TabsContent>

                        <TabsContent value="Speech">
                            <div className="w-1/2 mx-auto">
                                {speechTab.map((video) => (
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
                        </TabsContent>

                        <TabsContent value="Review">
                            <div className="w-1/2 mx-auto">
                                {reviewTab.map((video) => (
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
                        </TabsContent>
                    </Tabs>

                    {/* <section className="py-24 bg-[#f8fafc]">
                    
                            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[280px_1fr] gap-12 items-center">
                    
                               
                              <div className="space-y-4">
                    
                                {data2.map((item, i) => (
                                  <div
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 
                                      ${
                                        active === i
                                          ? "bg-[#07549c] text-white shadow-lg scale-[1.02]"
                                          : "bg-white text-slate-700 hover:shadow-md"
                                      }`}
                                  >
                                    {item.title}
                                  </div>
                                ))}
                    
                              </div>
                    
                               
                              <div className="relative">
                    
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={active}
                                    initial={{ opacity: 0, x: 80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -80 }}
                                    transition={{ duration: 0.5 }}
                                  >
                    
                                     
                                    <div className="overflow-hidden rounded-2xl shadow-xl mb-6 group">
                                      <img
                                        src={data[active].img}
                                        className="w-full h-[360px] object-cover transform transition duration-700 group-hover:scale-110 group-hover:-translate-y-3"
                                      />
                                    </div>
                    
                                     
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                      {data[active].desc}
                                    </p>
                    
                                  </motion.div>
                                </AnimatePresence>
                    
                              </div>
                    
                            </div>
                    
                          </section> */}

                </div>
            </section>


            <section className="pt-16 pb-16 ">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            FLC & Awards
                        </p>
                        <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                            Our Panelist
                        </h1>
                        <p className="text-slate-600 text-lg">
                            FIAKS Community Through Leaders Participated In the Mega Panel Discussion
                        </p>
                    </div>
                    <div className="container mx-auto max-w-7xl mt-10">
                        <div className="grid md:grid-cols-1 gap-8">
                            {videos.map((video) => (
                                <div className="flex offering-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100" style={{ background: '#eaeef3', position:'sticky', top:'120px' }}>

                                    <div
                                        key={video.id}
                                        className="video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 w-2/3"
                                        data-testid={`video-card-${video.id}`}
                                    >
                                        <div className="relative aspect-video">
                                            {/* {activeVideo === video.id ? ( */}
                                            <iframe
                                                src={`https://www.youtube.com/embed/${video.id}`}
                                                title={video.title}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>


                                    <div className='w-2/3 p-10'>
                                        <h3 className="font-['Outfit'] text-[#07549c] text-3xl md:text-3xl lg:text-3xl font-semibold mb-4">
                                            {video.name}
                                        </h3>
                                        <p className="italic font-semibold text-md mb-4">
                                            {video.designation}
                                        </p>
                                        <p className="text-slate-600 text-md">
                                            {video.description}
                                        </p>
                                    </div>

                                </div>))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FIAKS Fun time - Quest to fastest finger */}
            <section className="pt-16 pb-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

                    <div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className=" mb-16">
                                <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                                    FLC & Awards
                                </p>
                                <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                                    FIAKS Fun time - Quest to fastest finger
                                </h2>
                                <div className="w-16 h-1 bg-[#07549c] mb-6" />
                                <p className='mt-4'>During the FLC 2020, we organized FIAKS Quest with a Twist! And an enthralling Mind Cooling Brain Cooling musical Finale celebration to close the curtain for the night!</p>
                            </div>
                            <div>
                                {flcVideos2.map((video) => (
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
                </div>
            </section>


            {/*  Award goes to */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            FLC & Awards
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Award goes to
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
                        <p>Talent and raw originality come in all shapes and sizes and do not discriminate by age, gender or organizations worked for!.
                            FIAKS identifies these brilliant minds in the community and aims to recognize them as FIAKS Mavens. From the community of 5000+ CXO, we identified 69 FIAKS Mavens.</p>
                    </div>

                    <div className="flex flex-wrap justify-center w-5/5 gap-8">
                        {/* LEFT SIDE (SMALL CARDS) */}
                        <div className="flex">
                            {data.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActive(i)} style={{ border: '1px solid #ddd' }}
                                    className={`cursor-pointer px-5 py-3 m-2 rounded-lg  
                                    ${active === i
                                            ? "bg-[#07549c] text-white shadow-lg scale-[1.02]"
                                            : "bg-white text-slate-700 hover:shadow-md"
                                        }`}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>

                        {/* RIGHT SIDE */}
                        <div></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 relative" style={{ width: '100%' }}>

                            {/* <AnimatePresence mode="wait"> */}

                            {/* IMAGE */}
                            <div
                                key={data.id}
                                className="video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 mb-4"

                            >
                                <div className="relative aspect-video">
                                    {/* {playingVideo === video.id ? ( */}
                                    <iframe
                                        src={`https://www.youtube.com/embed/${data.id}`}
                                        title={data.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="">
                                    <p className="text-slate-700 font-semibold text-md leading-relaxed">
                                        {data.title}
                                    </p>
                                </div>
                                <div className='p-5'>
                                    <h4 className='font-md my-3'>Awardee Name</h4>
                                    <p className="text-slate-600 leading-relaxed text-md">
                                        {data[active]?.AwardeeName || "No awardee selected"}
                                    </p>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="grid items-center">
                                {/* Content */}
                                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                                    <div className='offering-card rounded-xl p-6 md:shadow-lg hover:shadow-xl my-5'>
                                        <h4 className='font-md text-[#07549c] border-bottom'>FIAKS Ignited Mind</h4>
                                        <p className="text-slate-600 italic leading-relaxed text-md">
                                            {data[active]?.designation}
                                        </p>

                                        {/* Display all awardees */}
                                        <div className="py-4 mt-3" style={{ borderTop: '1px solid #ddd' }}>
                                            {awardPerson.map((person, index) => (
                                                <p key={index} className="text-slate-800 leading-relaxed text-md flex items-center">
                                                    <Trophy className="w-5 h-5 text-yellow-500 mr-2" /> {person}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='offering-card rounded-xl p-6 md:shadow-lg hover:shadow-xl my-5'>
                                        <h4 className='font-md text-[#07549c] border-bottom'>FIAKS Ignited Mind</h4>
                                        <p className="text-slate-600 italic leading-relaxed text-md">
                                            {data[active]?.designation}
                                        </p>

                                        {/* Display all awardees */}
                                        <div className="py-4 mt-3" style={{ borderTop: '1px solid #ddd' }}>
                                            {awardPerson.map((person, index) => (
                                                <p key={index} className="text-slate-800 leading-relaxed text-md flex items-center">
                                                    <Trophy className="w-5 h-5 text-yellow-500 mr-2" /> {person}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </AnimatePresence> */}

                        </div>
                    </div>
                </div>

            </section>


            {/* Mega Panel Discussion */}
            <section className="py-16 md:py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
                            FLC & Awards
                        </p>
                        <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Mega Panel Discussion
                        </h2>
                        <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
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
                            {activeVideo1 && (
                                <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200 flex justify-center items-center">
                                    <Quote className="mw-8 h-8 text-[#07549c]/30 mr-3" style={{ minWidth: '30px' }} />
                                    <p className="text-lg font-medium text-slate-800">
                                        {videos1.find(video => video.iframe === activeVideo1)?.title}
                                    </p>
                                </div>
                            )}
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

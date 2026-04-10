
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import banner from '../../../src/images/flc-award-banner.jpeg'
import IgnitedMinds from '../../../src/images/IgnitedMinds.png'
import Pathfinder from '../../../src/images/Pathfinder.png'
import Intellectual from '../../../src/images/Intellectual.png'
import icon1 from '../../../src/images/business_leader.png'
import icon2 from '../../../src/images/decision_makers.png'
import icon3 from '../../../src/images/decision-making.png'
import { Award, Trophy, Star, Quote, CheckCircle } from 'lucide-react';


const events = [
  {
    id: 1,
    slug: 'global-fintech-summit-2025',
    title: 'FIAKS Leadership Conclave (FLC) Inauguration',
    description: 'FIAKS Leadership Conclave Launch edition inauguration by Ms Zarin Daruwala, CEO Standard Chartered Bank, India and Mr Jaspal Bindra Chairman Centrum Group along with FIAKS founders Anuradha Panditrao and Vikas Panditrao on 21st June 2019',
    date: 'June 21st, 2019',
    location: 'Taj Palace, New Delhi',
    attendees: '1200+',
    type: '1st Edition',
    image: '../../fiaks/src/images/slider1.png',
    featured: true,
    status: 'upcoming',
  },
  {
    id: 2,
    slug: 'regtech-innovation-workshop',
    title: 'FIAKS Leadership Conclave (FLC)',
    description: 'Hands-on workshop exploring cutting-edge regulatory technology solutions for compliance challenges.',
    date: 'June 23rd, 2020',
    location: 'Mumbai Marriott',
    attendees: '150',
    type: '2nd Edition',
    image: '../../fiaks/src/images/slider2.png',
    featured: true,
    status: 'upcoming',
  },
  {
    id: 3,
    slug: 'bfsi-leadership-conclave',
    title: 'FIAKS Leadership Conclave',
    description: 'Exclusive gathering of C-suite executives discussing strategic priorities and industry transformation.',
    date: 'May 5, 2021',
    location: 'ITC Grand Chola, Chennai',
    attendees: '200',
    type: '3rd Edition',
    image: '../../fiaks/src/images/slider3.png',
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
    image: '../../fiaks/src/images/slider4.png',
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
    image: '../../fiaks/src/images/slider5.jpg',
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
    image: '../../fiaks/src/images/slider6.jpg',
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



const FLCAndAwards = () => {
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

      <section className="" style={{ marginTop: '80px' }}>
        <img src={banner} className='img-fluid' alt='' style={{ width: '100%' }} />
      </section>
      {/* <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              Events & Conferences
            </p>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Upcoming Events
            </h1>
            <p className="text-slate-600 text-lg">
              Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
            </p>
          </div>
        </div>
      </section> */}





      {/* Leadership Conclave */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Filters */}
          <div className="flex items-center justify-between flex-wrap gap-4">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.slug}`}
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

            {/* <div className="flex items-center gap-2">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveFilter(type.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === type.id
                      ? 'bg-[#07549c] text-white '
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    data-testid={`filter-${type.id}`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div> */}


            {/* <Tabs defaultValue="2026" className="w-full">
              <TabsContent value="2026"> 
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.map((event) => (
                    <Link
                      key={event.id}
                      to={`/events/${event.slug}`}
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
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#07549c]" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs> */}


            {/* <div className="relative"> 
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
                  
                  
                    <div className="px-5 pb-5">
                       <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                      <p className="text-slate-600 italic mb-4">{leader.quote}</p> }
                      <div className=" ">
                        <h4 className="font-['Outfit'] font-semibold text-slate-900">{leader.year}</h4>
                         <p className="text-sm text-slate-500">{leader.title}</p>  }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}


          </div>
        </div>
      </section>


      {/* Fiaks Leadership Conclave */}
      {/* <section className="py-16 md:py-20 bg-slate-50" id="what-we-offer" data-testid="what-we-offer-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              FLC & Awards Home
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Fiaks Leadership Conclave
            </h2>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
          </div>
          <div className="grid  gap-12 items-center"> 
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className=' '>
                <div className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <div className='w-16 h-16 rounded-xl bg-[#07549c]/10 flex items-center justify-center mb-6'>
                    
                    <img src={IgnitedMinds} className='p-2' alt='FIAKS Ignited Minds Awards' />
                  </div>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    FIAKS Ignited Minds Awards
                  </h3>
                  <div style={{ display: 'flex' }}>
                    <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                    <p className="italic font-bold text-slate-900 text-md mb-4">An idea that kindled in your mind and a story that awakened a dialogue… we call an ignited mind!</p>
                  </div>
                  <p className='border-t pt-4 text-slate-700 text-md leading-relaxed'>This award is presented to individuals who have been relentless in their endeavour to share the latest news, interesting articles and knowledgeable updates in the community. The awards are being presented after a quantitative and qualitative analysis of the posts shared in the last year</p>
                </div>
              </div>
              <div className=' '>
                <div className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <div className='w-16 h-16 rounded-xl bg-[#07549c]/10 flex items-center justify-center mb-6'>
       
                    <img src={Pathfinder} className='p-2' alt='FIAKS Pathfinder Awards' />
                  </div>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    FIAKS Pathfinder Awards
                  </h3>
                  <div style={{ display: 'flex' }}>
                    <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                    <p className="italic font-bold text-slate-900 text-md mb-4">An innovator in thought and a forerunner with ideas to forge your own path… we call a pathfinder!</p>

                  </div>
                  <p className='border-t pt-4 text-slate-700 text-md leading-relaxed'>This award is presented to individuals who have been sharing their opinions backed by intelligent thought. These intellectuals have pushed the boundaries of original thinking while driving relevant discussion and directions to policies.</p>
                </div>
              </div>
              <div className=' '>
                <div className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <div className='w-16 h-16 rounded-xl bg-[#07549c]/10 flex items-center justify-center mb-6'>
              
                    <img src={Intellectual} className='p-2' alt='FIAKS Pathfinder Awards' />
                  </div>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    FIAKS Intellectual Explorer Award
                  </h3>
                  <div style={{ display: 'flex' }}>
                    <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                    <p className="italic font-bold text-slate-900 text-md mb-4">An academic voyager that discovers unique ideas and solutions… we call Intellectual Explorer!</p>
                  </div>
                  <p className='border-t pt-4 text-slate-700 text-md leading-relaxed'>This award is presented to leaders of the industry who have pushed the traditional way of thinking to discover inventive concepts. These individuals have been sharing fundamentally exceptional thoughts that guide the community to think in a very different manner, to discover novel solutions and ways of working in the industry.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6" data-testid="unique-content">
              <p className="text-slate-700 text-lg leading-relaxed">
                The FIAKS Leadership Conclave is our next level initiative to applaud and recognise exemplary intellectual and academic
                contributions in Banking, Fin-Tech, Payment, Technology and E- commerce sector on the platform. With the Leadership
                Conclave, FIAKS aims at initiating a forward thinking and growth mindset among the future leaders of the industry.
                The leadership conclave will facilitate a unique platform for business leaders, Banking, Payments, Fintech and
                E-Commerce industry experts to connect.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                Talent and raw originality come in all shapes and sizes and does not discriminate by age, gender or organizations
                worked for!. FIAKS identifies these brilliant minds in the community and aims to recognise them as IGNITED MINDS,
                PATH FINDERS, INTELLECTUAL EXPLORERS!
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                The FIAKS Award is a true testament to the continuous efforts and thoughts in the community; that have driven insights,
                conversations, and discussions. With the sharing of articles, posts and news from across the globe to raising
                crucial questions and offering solutions, FIAKS community is creating an enlightened ecosystem of talent and
                innovation.
              </p>
            </div>
          </div>

        </div>
      </section> */}


      <section className="py-16 md:py-20 bg-slate-50" id="what-we-offer" data-testid="what-we-offer-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              FLC & Awards Home
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Fiaks Leadership Conclave
            </h2>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
          </div>
          <div className="grid  gap-12 items-center">
            <div className=" ">
              <div className='my-4'>
                <div className="md:flex gap-5" style={{ height: '100%' }}>
                  <div className='md:w-3/5 relative'>
                    <div className='offering-card bg-[#07549c] rounded-xl p-8 md:shadow-lg hover:shadow-xl' style={{ height: '100%' }}>
                      <div className='w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6'>
                        <img src={IgnitedMinds} className='p-2 rounded-xl md:shadow-lg hover:shadow-xl' alt='FIAKS Ignited Minds Awards' />
                      </div>
                      <h3 className="font-['Outfit'] text-2xl font-semibold text-white mb-4">
                        FIAKS Ignited Minds Awards
                      </h3>
                      <div className="w-16 h-1 bg-white/20 backdrop-blur-sm mb-6" />
                    </div>
                    <span className='absolute top-5 right-6 font-bold text-8xl' style={{color: '#ffffff29'}}>01</span>
                  </div>
                  <div className='md:w-4/5'>
                    <div className='offering-card bg-white rounded-xl p-8 shadow-lg md:hover:shadow-xl' style={{ height: '100%' }}>
                      <div style={{ display: 'flex' }}>
                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                        <p className="italic font-bold text-slate-900 text-md mb-4">An idea that kindled in your mind and a story that awakened a dialogue… we call an ignited mind!</p>
                      </div>
                      <p className='border-t pt-4 text-slate-700 text-md leading-relaxed'>This award is presented to individuals who have been relentless in their endeavour to share the latest news, interesting articles and knowledgeable updates in the community. The awards are being presented after a quantitative and qualitative analysis of the posts shared in the last year</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='my-4'>
                <div className="md:flex gap-5" style={{ height: '100%' }}> 
                  <div className='md:w-4/5'>
                    <div className='offering-card bg-white rounded-xl p-8 shadow-lg md:hover:shadow-xl' style={{ height: '100%' }}>
                      <div style={{ display: 'flex' }}>
                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                        <p className="italic font-bold text-slate-900 text-md mb-4">An innovator in thought and a forerunner with ideas to forge your own path… we call a pathfinder!</p>
                      </div>
                      <p className='border-t pt-4 text-slate-700 text-md leading-relaxed'>This award is presented to individuals who have been sharing their opinions backed by intelligent thought. These intellectuals have pushed the boundaries of original thinking while driving relevant discussion and directions to policies.</p>
                    </div>
                  </div>
                  <div className='md:w-3/5 relative'>
                    <div className='offering-card bg-[#07549c] rounded-xl p-8 md:shadow-lg md:hover:shadow-xl' style={{ height: '100%' }}>
                      <div className='w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6'>
                        <img src={Pathfinder} className='p-2 rounded-xl md:shadow-lg hover:shadow-xl' alt='FIAKS Pathfinder Awards' />
                      </div>
                      <h3 className="font-['Outfit'] text-2xl font-semibold text-white mb-4">
                       FIAKS Pathfinder Awards
                      </h3>
                      <div className="w-16 h-1 bg-white/20 backdrop-blur-sm mb-6" />
                    </div>
                    <span className='absolute top-5 right-6 font-bold text-8xl' style={{color: '#ffffff29'}}>02</span>
                  </div>
                </div>
              </div>

              <div className='my-4'>
                <div className="md:flex gap-5" style={{ height: '100%' }}>
                  <div className='md:w-3/5 relative'>
                    <div className='offering-card bg-[#07549c] rounded-xl p-8 md:shadow-lg hover:shadow-xl' style={{ height: '100%' }}>
                      <div className='w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6'>
                         <img src={Intellectual} className='p-2 rounded-xl md:shadow-lg hover:shadow-xl' alt='FIAKS Pathfinder Awards' />
                      </div>
                      <h3 className="font-['Outfit'] text-2xl font-semibold text-white mb-4">
                        FIAKS Intellectual Explorer Award
                      </h3>
                      <div className="w-16 h-1 bg-white/20 backdrop-blur-sm mb-6" />
                    </div>
                    <span className='absolute top-5 right-6 font-bold text-8xl' style={{color: '#ffffff29'}}>03</span>
                  </div>
                  <div className='md:w-4/5'>
                    <div className='offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl' style={{ height: '100%' }}>
                      <div style={{ display: 'flex' }}>
                        <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                        <p className="italic font-bold text-slate-900 text-md mb-4">An academic voyager that discovers unique ideas and solutions… we call Intellectual Explorer!</p>
                      </div>
                      <p className='border-t pt-4 text-slate-700 text-md leading-relaxed'>This award is presented to leaders of the industry who have pushed the traditional way of thinking to discover inventive concepts. These individuals have been sharing fundamentally exceptional thoughts that guide the community to think in a very different manner, to discover novel solutions and ways of working in the industry.</p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div className="space-y-6" data-testid="unique-content">
              <p className="text-slate-700 text-lg leading-relaxed">
                The FIAKS Leadership Conclave is our next level initiative to applaud and recognise exemplary intellectual and academic
                contributions in Banking, Fin-Tech, Payment, Technology and E- commerce sector on the platform. With the Leadership
                Conclave, FIAKS aims at initiating a forward thinking and growth mindset among the future leaders of the industry.
                The leadership conclave will facilitate a unique platform for business leaders, Banking, Payments, Fintech and
                E-Commerce industry experts to connect.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                Talent and raw originality come in all shapes and sizes and does not discriminate by age, gender or organizations
                worked for!. FIAKS identifies these brilliant minds in the community and aims to recognise them as <strong>IGNITED MINDS,
                PATH FINDERS, INTELLECTUAL EXPLORERS!</strong>
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                The FIAKS Award is a true testament to the continuous efforts and thoughts in the community; that have driven insights,
                conversations, and discussions. With the sharing of articles, posts and news from across the globe to raising
                crucial questions and offering solutions, FIAKS community is creating an enlightened ecosystem of talent and
                innovation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* How Do You Get Nominated ? */}
      <section className="py-16 md:py-20 bg-white" id="what-we-offer" data-testid="what-we-offer-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              FLC & Awards Home
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              How Do You Get Nominated ?
            </h2>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
            <p className="text-slate-700 text-lg leading-relaxed">FIAKS community is an ever-growing world of intellectuals in the domain of  Banking,Payments, Fintech,Finance and Technology. And every day we see multiple posts shared, various dialogues and discussions that are encouraged by these posts as well as news that creates an awareness of every on-going across our world. Thus, each individual who has participated across the last 1 year from January 2019 – December 2019, is eligible to qualify. The nominees are selected on two major criteria’s:</p>
          </div>
          <div className="grid  gap-12 items-center">
            {/* Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className=' '>
                <div className="offering-card bg-[#07549c]/5 rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    Knowledge Posts
                  </h3>
                  <div style={{ display: 'flex' }}>
                    <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                  </div>
                  <p className='italic font-semibold text-slate-800 text-md'>The frequency, quantity and quality of posts, articles and news shared</p>
                </div>
              </div>
              <div className=' '>
                <div className="offering-card bg-[#07549c]/5 rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    Intellectual Pull
                  </h3>
                  <div style={{ display: 'flex' }}>
                    <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" style={{ minWidth: '2rem', marginRight: '6px' }} />
                  </div>
                  <p className='italic font-semibold text-slate-800 text-md'>The discussions, conclusions, insights and analysis driven through the articles, news and posts shared.</p>
                </div>
              </div>

            </div>
            <div className="space-y-6" data-testid="unique-content">
              <p className="text-slate-700 text-lg leading-relaxed">
                The FIAKS Leadership Conclave is our next level initiative to applaud and recognise exemplary intellectual and academic
                contributions in Banking, Fin-Tech, Payment, Technology and E- commerce sector on the platform. With the Leadership
                Conclave, FIAKS aims at initiating a forward thinking and growth mindset among the future leaders of the industry.
                The leadership conclave will facilitate a unique platform for business leaders, Banking, Payments, Fintech and
                E-Commerce industry experts to connect.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Partner With Fiaks Leadership Awards */}
      <section className="py-16 md:py-20  bg-slate-50" id="what-we-offer" data-testid="what-we-offer-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              FLC & Awards Home
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Partner With Fiaks Leadership Awards
            </h2>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />

          </div>
          <div className="grid gap-12 items-center">
            <div className="grid md:grid-cols-6 lg:grid-cols-2 items-center gap-8">
              <div className=''>
                <p className="text-slate-700 text-lg leading-relaxed"><strong>FIAKS invites brands, institutions and organisations</strong> to partner with the Leadership Conclave and leverage this rewarding opportunity to connect with a high-level community of leaders via branding sponsorships through the event.</p><br></br>
                <p className="text-slate-700 text-lg leading-relaxed">The FIAKS Leadership Conclave will host CxO level professionals from the Banking, Payments, Fintech, E-Commerce industry in India. The FIAKS Community Members attending the event are:</p>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm" style={{ background: 'rgb(7 84 156 / 2%)', border: '1px solid rgb(7 84 156 / 16%)' }}>
                    <div className="font-['Outfit'] text-[#07549c] text-2xl font-bold">50+</div>
                    <p className="text-sm text-slate-600">Awards</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm" style={{ background: 'rgb(7 84 156 / 2%)', border: '1px solid rgb(7 84 156 / 16%)' }}>
                    <div className="font-['Outfit'] text-[#07549c] text-2xl font-bold">100+</div>
                    <p className="text-sm text-slate-600">Events</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm" style={{ background: 'rgb(7 84 156 / 2%)', border: '1px solid rgb(7 84 156 / 16%)' }}>
                    <div className="font-['Outfit'] text-[#07549c] text-2xl font-bold">15+</div>
                    <p className="text-sm text-slate-600">Years</p>
                  </div>
                </div>
              </div>

              <div className='rounded-xl p-8' style={{ background: 'rgb(7 84 156 / 2%)', border: '1px solid rgb(7 84 156 / 16%)' }}>
                <h4 className='text-lg mb-4'>Event Attendees</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Managing Directors</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Chief Technology Officers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Chief Information Officers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Chief Digital Officers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">General Managers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Chief Finance Officers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Chief Executive Officers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Chief Innovation Officers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Founders / Co-Founders</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 shadow-md rounded-xl px-3 py-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" />
                    <span className="text-slate-700 text-md leading-relaxed">Senior Management</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-12 items-center mt-5">
              {/* Content */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className=''>
                  <div className="offering-card bg-[#07549c] rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                    <div className='shadow-xl' style={{ border: '1px solid #ddd', width: '100px', margin: '0 auto', borderRadius: '50%'}}>
                      <img src={icon1} className='p-5' style={{ width: '130px',filter: 'brightness(40)' }} />
                    </div>
                    <p className="text-white text-xl leading-relaxed mt-4">Speak and showcase to the right business leader.</p>
                  </div>
                </div>
                <div className=' '>
                  <div className="offering-card bg-[#07549c] rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                    <div className='shadow-xl' style={{ border: '1px solid #ddd', width: '100px', margin: '0 auto', borderRadius: '50%'}}>
                      <img src={icon2} className='p-5' style={{ width: '130px',filter: 'brightness(40)' }} />
                    </div>
                    <p className="text-white text-xl leading-relaxed mt-4">With the top-level decision makers of the Banking, Fintech, Tech, Payments world!</p>
                  </div>
                </div>
                <div className=' '>
                  <div className="offering-card bg-[#07549c] rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                    <div className='shadow-xl' style={{ border: '1px solid #ddd', width: '100px', margin: '0 auto', borderRadius: '50%'}}>
                      <img src={icon3} className='p-5' style={{ width: '130px',filter: 'brightness(40)' }} />
                    </div>
                    <p className="text-white text-xl leading-relaxed mt-4">With CxO’s who are on top of the decision-making pyramid.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" id="what-we-offer" data-testid="what-we-offer-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-12 items-center mt-5">
            {/* Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className=' '>
                <div className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    Network
                  </h3>
                  <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                  <p className='text-slate-700 text-md leading-relaxed'>CxO’s are on top of the decision-making pyramid, and FIAKS enables your brand and products to connect with this audience. With a space to exhibit and multiple networking opportunities, the conclave ensures that you reach the correct target group.</p>
                </div>
              </div>
              <div className=' '>
                <div className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    Launch
                  </h3>
                  <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                  <p className='text-slate-700 text-md leading-relaxed'>With the top-level decision makers of the BFSI world at the conclave, your new products get a focused platform to launch at and an engrossed audience to showcase to.</p>
                </div>
              </div>
              <div className=' '>
                <div className="offering-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                    Acquire Leads
                  </h3>
                  <Quote className="w-8 h-8 text-[#07549c]/30 mb-3" />
                  <p className='text-slate-700 text-md leading-relaxed'>As a partner to the FIAKS Leadership Conclave, there are many opportunities for brands to generate sales leads for products and services.</p>
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

export default FLCAndAwards;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/marketing/Header';
import Footer from '../../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';
import { Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

import banner from '../../../src/images/banners/fiaks-premier-league.jpg'
import team1 from '../../../src/images/team1.png'
import team2 from '../../../src/images/team2.png'
import team3 from '../../../src/images/team3.png'
import team4 from '../../../src/images/team4.png'
import { MessageSquare, BookOpen, Heart, Quote, CheckCircle } from 'lucide-react';
import { Play } from 'lucide-react';


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
    image: '../fiaks/ffllcc.png',
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
    id: 'O6rYV8ZNtOQ',
    title: 'Season 1',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
  },
];

const FIAKSPremierLeague = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter((event) => event.type === activeFilter);

  const featuredEvents = events.filter((event) => event.featured);

  return (
    <div className="min-h-screen bg-white" data-testid="events-page">
      <Header forceDark={true} />

      {/* Hero Section */} 
      <section className="relative" style={{ marginTop: '80px' }}>
        <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
        <div className="">
          <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
              FIAKS Premier League (FPL)
            </h1>
            <p className="text-white text-lg max-w-2xl">
              Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
            </p>
            <button class="animate slide-up delay-5 bg-white text-black px-8 py-3 mt-6 rounded-full hover:scale-105 transition show">Learn More</button>
          </div></div>
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

      {/* Featured Events */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                // to={`/events/${event.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all"
                data-testid={`featured-event-${event.id}`}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#07549c] text-white rounded-full text-sm font-medium capitalize">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  {/* <p className="text-slate-600 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#07549c]" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#07549c]" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#07549c]" />
                      {event.attendees} Attendees
                    </span>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 md:py-20 bg-slate-50" id="what-we-offer" data-testid="what-we-offer-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#07549c] font-semibold tracking-widest uppercase text-sm mb-3">
              About FIAKS Premier League (FPL)
            </p>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Competing Teams
            </h2>
            <div className="w-16 h-1 bg-[#07549c] mx-auto mb-6" />
            <p className="text-slate-700 text-lg leading-relaxed">FIAKS Premier League (FPL) is an attempt by FIAKS – Forum of Industry and Academic Knowledge Sharing to foster collaboration amongst competing brands/individuals to bring about meaningful growth for all. We hope FIAKS Premier League (FPL) will be a step that will loosen silk ties & strengthen your social ties.</p>
          </div>
          <div className="grid gap-12 items-center mt-5">
            {/* Content */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2  gap-8">
              <div className=' '>
                <div className="sm:flex items-center offering-card bg-white rounded-xl shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <img src={team1} className='rounded-xl' alt='' style={{ width: '200px' }} />
                  <div className='p-5'>
                    <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                      API Avengers
                    </h3>
                    <p className='text-slate-700 text-md leading-relaxed'>This team will be sending balls to the boundaries, like requests to servers, All they ask of you is to not be astonished by their brilliance!</p>
                  </div>
                </div>
              </div>
              <div className=' '>
                <div className="sm:flex items-center offering-card bg-white rounded-xl shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <img src={team2} className='rounded-xl' alt='' style={{ width: '200px' }} />
                  <div className='p-5'>
                    <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                      Blockchain Blasters
                    </h3>
                    <p className='text-slate-700 text-md leading-relaxed'>With tremendous capacity that propelling their momentum, They are here to blast off the score boards!</p>
                  </div>
                </div>
              </div>
              <div className=' '>
                <div className="sm:flex items-center offering-card bg-white rounded-xl shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <img src={team3} className='rounded-xl' alt='' style={{ width: '200px' }} />
                  <div className='p-5'>
                    <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                      DEFI Daredevils
                    </h3>
                    <p className='text-slate-700 text-md leading-relaxed'>Secure, stable and widely in demand</p>
                  </div>
                </div>
              </div>
              <div className=' '>
                <div className="sm:flex items-center offering-card bg-white rounded-xl shadow-lg hover:shadow-xl" style={{ height: '100%' }}>
                  <img src={team4} className='rounded-xl' alt='' style={{ width: '200px' }} />
                  <div className=' p-5'>
                    <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-4">
                      Crypto Super Kings
                    </h3>
                    <p className='text-slate-700 text-md leading-relaxed'>This team has it all Decentralized talent, volatility and popularity!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights of FPL Seasons */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Highlights Of FPL Seasons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="video-card bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100"
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

export default FIAKSPremierLeague;

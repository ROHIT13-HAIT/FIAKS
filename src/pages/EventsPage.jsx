import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { Calendar, MapPin, Users, ArrowRight, Clock, Filter } from 'lucide-react';

const events = [
  {
    id: 1,
    slug: 'global-fintech-summit-2025',
    title: 'Global Fintech Summit 2025',
    description: 'The premier gathering of BFSI leaders, innovators, and regulators shaping the future of financial services.',
    date: 'April 15-17, 2025',
    location: 'Taj Palace, New Delhi',
    attendees: '1200+',
    type: 'conference',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    featured: true,
    status: 'upcoming',
  },
  {
    id: 2,
    slug: 'regtech-innovation-workshop',
    title: 'RegTech Innovation Workshop',
    description: 'Hands-on workshop exploring cutting-edge regulatory technology solutions for compliance challenges.',
    date: 'March 28, 2025',
    location: 'Mumbai Marriott',
    attendees: '150',
    type: 'workshop',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    featured: true,
    status: 'upcoming',
  },
  {
    id: 3,
    slug: 'bfsi-leadership-conclave',
    title: 'BFSI Leadership Conclave',
    description: 'Exclusive gathering of C-suite executives discussing strategic priorities and industry transformation.',
    date: 'May 5, 2025',
    location: 'ITC Grand Chola, Chennai',
    attendees: '200',
    type: 'conference',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    featured: false,
    status: 'upcoming',
  },
  {
    id: 4,
    slug: 'digital-payments-roundtable',
    title: 'Digital Payments Roundtable',
    description: 'Industry roundtable on the evolution of digital payments and UPI\'s global expansion.',
    date: 'April 5, 2025',
    location: 'Hyatt Regency, Bangalore',
    attendees: '80',
    type: 'roundtable',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
    status: 'upcoming',
  },
  {
    id: 5,
    slug: 'ai-in-banking-summit',
    title: 'AI in Banking Summit',
    description: 'Deep dive into artificial intelligence applications transforming banking operations.',
    date: 'May 20, 2025',
    location: 'The Oberoi, Mumbai',
    attendees: '300',
    type: 'conference',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
    type: 'showcase',
    image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80',
    featured: false,
    status: 'upcoming',
  },
];

const eventTypes = [
  { id: 'all', name: 'All Events' },
  { id: 'conference', name: 'Conferences' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'roundtable', name: 'Roundtables' },
  { id: 'showcase', name: 'Showcases' },
];

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter((event) => event.type === activeFilter);

  const featuredEvents = events.filter((event) => event.featured);

  return (
    <div className="min-h-screen bg-white" data-testid="events-page">
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white">
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
      </section>

      {/* Featured Events */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-8">Featured Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#07549c] text-white rounded-full text-sm font-medium capitalize">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Outfit'] text-2xl font-semibold text-slate-900 mb-3 group-hover:text-[#07549c] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{event.description}</p>
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Filters */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900">All Events</h2>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-400" />
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === type.id
                      ? 'bg-[#07549c] text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                  data-testid={`filter-${type.id}`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
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
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium capitalize text-slate-700">
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

export default EventsPage;

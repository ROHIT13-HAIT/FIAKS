import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2, Download, CheckCircle, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const eventsData = {
  'global-fintech-summit-2025': {
    id: 1,
    title: 'Global Fintech Summit 2025',
    tagline: 'Shaping the Future of Finance',
    description: 'The premier gathering of BFSI leaders, innovators, and regulators shaping the future of financial services. Join over 1200 industry professionals for three days of insights, networking, and innovation.',
    date: '2025-04-15',
    endDate: '2025-04-17',
    displayDate: 'April 15-17, 2025',
    time: '9:00 AM - 6:00 PM IST',
    location: 'Taj Palace, New Delhi',
    address: '2 Sardar Patel Marg, Diplomatic Enclave, New Delhi - 110021',
    attendees: '1200+',
    type: 'conference',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    agenda: [
      {
        day: 'Day 1 - April 15',
        sessions: [
          { time: '09:00 - 10:00', title: 'Registration & Networking Breakfast', type: 'networking' },
          { time: '10:00 - 10:30', title: 'Opening Keynote: The State of Fintech in 2025', speaker: 'Shaktikanta Das, RBI Governor', type: 'keynote' },
          { time: '10:45 - 12:00', title: 'Panel: Digital Banking Transformation', type: 'panel' },
          { time: '12:00 - 13:00', title: 'Networking Lunch', type: 'networking' },
          { time: '13:00 - 14:30', title: 'Track Sessions: AI in Banking / RegTech / Payments', type: 'track' },
          { time: '14:45 - 16:00', title: 'Fireside Chat: Future of Open Banking', type: 'fireside' },
          { time: '16:15 - 17:30', title: 'Innovation Showcase: Startup Pitches', type: 'showcase' },
          { time: '18:00 - 21:00', title: 'Gala Dinner & Awards Ceremony', type: 'networking' },
        ],
      },
      {
        day: 'Day 2 - April 16',
        sessions: [
          { time: '09:00 - 10:00', title: 'Networking Breakfast', type: 'networking' },
          { time: '10:00 - 11:00', title: 'Keynote: Global Fintech Trends', speaker: 'Christine Lagarde, ECB President (Virtual)', type: 'keynote' },
          { time: '11:15 - 12:30', title: 'Panel: Cross-Border Payments Revolution', type: 'panel' },
          { time: '12:30 - 13:30', title: 'Lunch & Exhibition Tour', type: 'networking' },
          { time: '13:30 - 15:00', title: 'Workshop: Building Compliant Fintech Products', type: 'workshop' },
          { time: '15:15 - 16:30', title: 'Panel: Cybersecurity in Financial Services', type: 'panel' },
          { time: '16:45 - 17:30', title: 'Closing Keynote Day 2', type: 'keynote' },
        ],
      },
      {
        day: 'Day 3 - April 17',
        sessions: [
          { time: '09:00 - 10:00', title: 'Networking Breakfast', type: 'networking' },
          { time: '10:00 - 11:30', title: 'Masterclass: AI Implementation Strategies', type: 'workshop' },
          { time: '11:45 - 13:00', title: 'Regulatory Roundtable', type: 'roundtable' },
          { time: '13:00 - 14:00', title: 'Farewell Lunch', type: 'networking' },
          { time: '14:00 - 15:30', title: 'B2B Matchmaking Sessions', type: 'networking' },
          { time: '15:30 - 16:00', title: 'Closing Ceremony & Announcements', type: 'keynote' },
        ],
      },
    ],
    speakers: [
      { name: 'Shaktikanta Das', role: 'Governor, Reserve Bank of India', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
      { name: 'Nandan Nilekani', role: 'Chairman, Infosys', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
      { name: 'Uday Kotak', role: 'Founder, Kotak Mahindra Bank', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
      { name: 'Chanda Kochhar', role: 'Former CEO, ICICI Bank', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
      { name: 'Vijay Shekhar Sharma', role: 'CEO, Paytm', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80' },
      { name: 'Nithin Kamath', role: 'Founder, Zerodha', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
    ],
    sponsors: [
      { name: 'HDFC Bank', tier: 'platinum', logo: 'https://via.placeholder.com/150x60/07549c/ffffff?text=HDFC' },
      { name: 'ICICI Bank', tier: 'platinum', logo: 'https://via.placeholder.com/150x60/07549c/ffffff?text=ICICI' },
      { name: 'SBI', tier: 'gold', logo: 'https://via.placeholder.com/150x60/000000/ffffff?text=SBI' },
      { name: 'Axis Bank', tier: 'gold', logo: 'https://via.placeholder.com/150x60/000000/ffffff?text=Axis' },
      { name: 'PayTM', tier: 'silver', logo: 'https://via.placeholder.com/120x50/07549c/ffffff?text=PayTM' },
      { name: 'PhonePe', tier: 'silver', logo: 'https://via.placeholder.com/120x50/07549c/ffffff?text=PhonePe' },
    ],
    pricing: [
      { name: 'Early Bird', price: '₹15,000', originalPrice: '₹25,000', features: ['3-Day Access', 'All Sessions', 'Networking Events', 'Gala Dinner', 'Certificate'], available: true },
      { name: 'Standard', price: '₹25,000', originalPrice: null, features: ['3-Day Access', 'All Sessions', 'Networking Events', 'Gala Dinner', 'Certificate'], available: true },
      { name: 'VIP', price: '₹50,000', originalPrice: null, features: ['3-Day Access', 'All Sessions', 'VIP Lounge Access', 'Speaker Meet & Greet', 'Gala Dinner', 'Certificate', 'Priority Seating'], available: true },
    ],
  },
};

const EventDetailsPage = () => {
  const { slug } = useParams();
  const event = eventsData[slug] || eventsData['global-fintech-summit-2025'];

  // Countdown Timer
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(event.date).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  const [selectedPricing, setSelectedPricing] = useState(0);

  return (
    <div className="min-h-screen bg-white" data-testid="event-details-page">
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 h-[500px]">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pt-20 pb-32">
          <Link to="/events" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#07549c] text-white rounded-full text-sm font-medium mb-4 capitalize">
              {event.type}
            </span>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <p className="text-xl text-white/80 mb-6">{event.tagline}</p>

            <div className="flex flex-wrap gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {event.displayDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {event.location}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {event.attendees} Attendees
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="bg-[#07549c] py-8 -mt-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="text-center text-white mb-4">
            <p className="text-white/80 mb-2">Event Starts In</p>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="font-['Outfit'] text-4xl md:text-5xl font-bold text-white">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-4">About the Event</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{event.description}</p>
              </div>

              {/* Agenda */}
              <div>
                <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-6">Event Agenda</h2>
                <div className="space-y-8">
                  {event.agenda.map((day, dayIndex) => (
                    <div key={dayIndex}>
                      <h3 className="font-['Outfit'] text-xl font-semibold text-[#07549c] mb-4">{day.day}</h3>
                      <div className="space-y-3">
                        {day.sessions.map((session, sessionIndex) => (
                          <div
                            key={sessionIndex}
                            className="flex gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <div className="w-24 flex-shrink-0 text-sm font-medium text-[#07549c]">
                              {session.time}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{session.title}</p>
                              {session.speaker && (
                                <p className="text-sm text-slate-500">{session.speaker}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers */}
              <div>
                <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-6">Featured Speakers</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                      />
                      <h4 className="font-semibold text-slate-900">{speaker.name}</h4>
                      <p className="text-sm text-slate-500">{speaker.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sponsors */}
              <div>
                <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-6">Event Sponsors</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-3">Platinum Sponsors</p>
                    <div className="flex flex-wrap gap-6">
                      {event.sponsors.filter(s => s.tier === 'platinum').map((sponsor, index) => (
                        <img key={index} src={sponsor.logo} alt={sponsor.name} className="h-12 object-contain" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-3">Gold Sponsors</p>
                    <div className="flex flex-wrap gap-6">
                      {event.sponsors.filter(s => s.tier === 'gold').map((sponsor, index) => (
                        <img key={index} src={sponsor.logo} alt={sponsor.name} className="h-10 object-contain" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-3">Silver Sponsors</p>
                    <div className="flex flex-wrap gap-4">
                      {event.sponsors.filter(s => s.tier === 'silver').map((sponsor, index) => (
                        <img key={index} src={sponsor.logo} alt={sponsor.name} className="h-8 object-contain" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div>
                <h2 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-4">Venue</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{event.location}</h3>
                  <p className="text-slate-600 mb-4">{event.address}</p>
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-slate-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5447247977!2d77.17188!3d28.6486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzU1LjAiTiA3N8KwMTAnMTguOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Venue Location"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Registration */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Cards */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-6 bg-[#07549c] text-white">
                    <h3 className="font-['Outfit'] text-xl font-bold mb-2">Register Now</h3>
                    <p className="text-white/80 text-sm">Secure your spot at the summit</p>
                  </div>
                  <div className="p-6 space-y-4">
                    {event.pricing.map((tier, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedPricing(index)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedPricing === index
                            ? 'border-[#07549c] bg-[#07549c]/5'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-900">{tier.name}</span>
                          {selectedPricing === index && (
                            <CheckCircle className="w-5 h-5 text-[#07549c]" />
                          )}
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#07549c]">{tier.price}</span>
                          {tier.originalPrice && (
                            <span className="text-sm text-slate-400 line-through">{tier.originalPrice}</span>
                          )}
                        </div>
                        <ul className="mt-3 space-y-1">
                          {tier.features.slice(0, 3).map((feature, fIndex) => (
                            <li key={fIndex} className="text-sm text-slate-600 flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <Button className="w-full bg-[#07549c] hover:bg-[#054178] h-12 text-base font-semibold" data-testid="register-btn">
                      Register Now - {event.pricing[selectedPricing].price}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      Includes GST. Group discounts available.
                    </p>
                  </div>
                </div>

                {/* Share */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-slate-700 mb-3">Share Event</p>
                  <div className="flex gap-2">
                    <button className="flex-1 p-2 bg-white rounded-lg hover:bg-[#0077b5] hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5 mx-auto" />
                    </button>
                    <button className="flex-1 p-2 bg-white rounded-lg hover:bg-[#1da1f2] hover:text-white transition-colors">
                      <Twitter className="w-5 h-5 mx-auto" />
                    </button>
                    <button className="flex-1 p-2 bg-white rounded-lg hover:bg-slate-200 transition-colors">
                      <Share2 className="w-5 h-5 mx-auto" />
                    </button>
                    <button className="flex-1 p-2 bg-white rounded-lg hover:bg-slate-200 transition-colors">
                      <Download className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-slate-700 mb-2">Questions?</p>
                  <p className="text-sm text-slate-600">
                    Contact us at <a href="mailto:events@fintechforum.com" className="text-[#07549c] hover:underline">events@fintechforum.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetailsPage;

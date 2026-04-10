import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import logo from "../../images/logo.png";

const Header = ({ forceDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);
  const [whatWeOfferOpen, setWhatWeOfferOpen] = useState(false);
  // const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const location = useLocation();

  // Pages that have light/white backgrounds at the top
  const lightBackgroundPages = ['/about', '/contact', '/blog', '/search', '/events', '/jobs'];
  const isLightPage = forceDark || lightBackgroundPages.some(page => location.pathname.startsWith(page));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color: always dark on light pages or when scrolled
  const isDarkText = isScrolled || isLightPage;

  const whatWeOfferItems = [
    { label: 'Forums', href: '/#what-we-offer' },
    { label: 'Events', href: '/events' },
    { label: 'Networking', href: '/#what-we-offer' },
    { label: 'Knowledge Center', href: '/blog' },
    { label: 'Social Impact', href: '/#what-we-offer' },
  ];

  // const whoWeAreItems = [
  //   { label: 'About Us', href: '/about' },
  //   { label: 'Honorary Advisory Committee', href: '/about#committee' },
  //   { label: 'Partners', href: '/#partners' },
  //   { label: 'Testimonials', href: '/#leaders-voice' },
  // ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isLightPage ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      data-testid="main-header"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            {/* <div className="w-12 h-12 bg-[#07549c] rounded-lg flex items-center justify-center"> */}
            <img
              src={logo}
              alt="Fintech Forum Logo"
              className="w-full h-full object-contain"
            />
            {/* </div> */}

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* What We Offer Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWhatWeOfferOpen(true)}
              onMouseLeave={() => setWhatWeOfferOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors ${isDarkText
                  ? 'text-slate-700 hover:text-[#07549c]'
                  : 'text-white hover:text-white/80'
                  }`}
              >
                What We Offer
                <ChevronDown className="w-4 h-4" />
              </button>

              {whatWeOfferOpen && (

                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[95vw]
                 max-w-6xl z-50">

                  {/* invisible hover area */}
                  <div className="h-4 w-full"></div>

                  <div className="bg-[#165a9c] text-white shadow-2xl rounded-xl p-6">
                    <div className="grid grid-cols-5 gap-6">

                      {/* Forums */}
                      <div>
                        <h4 className="font-semibold mb-3">Forums</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Focused Activity Program of Knowledge Sharing</li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Policy Advocacy Bespoke Discussion Forum</li>
                        </ul>
                      </div>

                      {/* Events */}
                      <div>
                        <h4 className="font-semibold mb-3">Events</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <Link to="/events/flc-and-awards"><span className="text-xs mt-1">▶</span>FLC & Awards</Link> </li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <Link to="/events/fiaks-premier-league"><span className="text-xs mt-1">▶</span>FIAKS Premier League (FPL)</Link></li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                             <Link to="/events/fiaks-motes"><span className="text-xs mt-1">▶</span>FIAKS MOTES </Link></li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <Link to="/events/fiaks-zero-hour"><span className="text-xs mt-1">▶</span>FIAKS ZERO HOUR</Link></li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <Link to="/events/workshops"><span className="text-xs mt-1">▶</span>Workshops</Link></li>
                        </ul>
                      </div>

                      {/* Networking */}
                      <div>
                        <h4 className="font-semibold mb-3">Networking Platforms</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
    <Link to="/toran"><span className="text-xs mt-1">▶</span>FIAKS TORAN</Link> </li>
                        
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Executive Search</li>
                        </ul>
                      </div>

                      {/* Social Impact */}
                      <div>
                        <h4 className="font-semibold mb-3">Social Impact Programmes</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Digital शिक्षासार अभियान</li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Global Meets Local</li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>Corporate Social Responsibility</li>
                        </ul>
                      </div>

                      {/* Knowledge Center */}
                      <div>
                        <h4 className="font-semibold mb-3">Knowledge Center</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS e-Bulletin</li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Writ</li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Bespoke</li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Daily</li>
                          <li className="flex items-start gap-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200
  hover:bg-white/10 hover:translate-x-1 hover:text-white">
                            <span className="text-xs mt-1">▶</span>FIAKS Compendium</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Who We Are Dropdown */}
            <Link
              to="/who-we-are"
              className={`font-medium transition-colors ${isDarkText
                  ? "text-slate-700 hover:text-[#07549c]"
                  : "text-white hover:text-white/80"
                }`}
            >
              Who We Are
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${isDarkText ? 'text-slate-700 hover:text-[#07549c]' : 'text-white hover:text-white/80'
                }`}
              data-testid="contact-link"
            >
              Get In Touch
            </Link>

            <Link to="/" data-testid="login-link">
              <Button
                variant={isDarkText ? 'default' : 'outline'}
                className={
                  isDarkText
                    ? 'bg-[#07549c] hover:bg-[#054178] text-white'
                    : 'border-white text-white hover:bg-white hover:text-[#07549c]'
                }
              >
                Login
              </Button>
            </Link>

            {/* Search Button */}
            <Link
              to="/"
              className={`p-2 rounded-full transition-colors ${isDarkText ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
              data-testid="search-button"
            >
              <Search className="w-5 h-5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isDarkText ? 'text-slate-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isDarkText ? 'text-slate-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4 gap-2">
              <div className="py-2 border-b">
                <p className="font-semibold text-[#07549c] mb-2">What We Offer</p>
                {whatWeOfferItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-2 px-4 text-slate-600 hover:text-[#07549c]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-2 border-b">
                <p className="font-semibold text-[#07549c] mb-2">Who We Are</p>
                
                {/* {whoWeAreItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-2 px-4 text-slate-600 hover:text-[#07549c]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))} */}
              </div>
              <Link
                to="/contact"
                className="py-3 px-4 text-slate-700 hover:text-[#07549c] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
              <Link
                to="/"
                className="py-3 px-4 text-slate-700 hover:text-[#07549c] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Search
              </Link>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#07549c] hover:bg-[#054178]">Login</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

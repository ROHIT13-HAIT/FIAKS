import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useRef } from 'react';
import { Play } from "lucide-react";
// import logo from "../../images/logo.png";

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/' },
    { label: 'Honorary Advisory Committee', href: '/' },
    { label: 'Partners', href: '/' },
    { label: 'Testimonials', href: '/' },
    { label: 'Contact Us', href: '/' },
    { label: 'Login', href: '/' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/fiaks4knowledge/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/fiaks4knowledge', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.facebook.com/fiaks4knowledge/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.instagram.com/fiaks4knowledge/', label: 'YouTube' },
  ];


  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

// const getVideoId = (url) => {
//   if (url.includes("youtu.be")) {
//     return url.split("youtu.be/")[1];
//   }
//   if (url.includes("v=")) {
//     return url.split("v=")[1].split("&")[0];
//   }
//   return "";
// };

// const [playVideo, setPlayVideo] = useState(false);



  return (
    <footer className="footer bg-slate-900 text-white" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="max-w-sm">
      
      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-4">
        How To Pronounce FIAKS?
      </h3>

      {/* Video Card */}
      <div className="video-card bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800">

        <div className="relative aspect-video">

          {/* Video */}
          <video
            ref={videoRef}
            src="/fiaks/How-To-Pronounce-Fiaks.mp4"
            className="w-full h-full object-cover"
            controls={isPlaying}
          />

          {/* Overlay Play Button */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-14 h-14 rounded-full bg-[#07549c] flex items-center justify-center hover:bg-[#054178] transition-all hover:scale-110"
              >
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </button>
            </div>
          )}

        </div>

       

      </div>

    </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Outfit'] text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-[#07549c] transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-['Outfit'] text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#07549c] mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  Knowledge Centre, Aba Karmarkar Road, Yashodham, Goregaon East, Mumbai, Maharashtra 400063
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#07549c] flex-shrink-0" />
                <span className="text-slate-400">+91 7700987644</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#07549c] flex-shrink-0" />
                <span className="text-slate-400">contactus@fiaks.com</span>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-['Outfit'] text-lg font-semibold mb-6">Stay Connected</h4>
            <div>
            {/* <Link to="/" className="flex items-center gap-3 mb-6">
                 <img
              src={logo}
              alt="Fintech Forum Logo"
              className="w-full h-full object-contain"
            />
              
             
            </Link> */}
            <p className="text-slate-400 mb-6">
              Empowering BFSI professionals with knowledge, networking, and innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#07549c] transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} FIAKS. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-[#07549c] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-[#07549c] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

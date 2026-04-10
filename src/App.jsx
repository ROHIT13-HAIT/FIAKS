import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SearchPage from './pages/SearchPage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';

import './App.css';
import FLCAndAwards from './pages/Events/FLCAndAwards';
import FIAKSPremierLeague from './pages/Events/FIAKSPremierLeague';
import FIAKSMotes from './pages/Events/FIAKSMotes';
import FIAKSZeroHour from './pages/Events/FIAKSZeroHour';
import Workshops from './pages/Events/Workshops';
import FLCAndAwardsDetails from './pages/Events/FLCAndAwardsDetails';
import WhoWeAre from './pages/WhoWeAre';
import ToranPage from './pages/ToranPage';
import AcclivityProgram from './pages/Forums/AcclivityProgram';
import CSRPage from './pages/SocialImpact/CSRPage';


const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:slug" element={<JobDetailsPage />} />

          <Route path="/events/flc-and-awards" element={<FLCAndAwards />} />
          <Route path="/events/flc-and-awards/details" element={<FLCAndAwardsDetails />} />
          <Route path="/events/fiaks-premier-league" element={<FIAKSPremierLeague />} />
          <Route path="/events/fiaks-motes" element={<FIAKSMotes />} />
          <Route path="/events/fiaks-zero-hour" element={<FIAKSZeroHour />} />
          <Route path="/events/workshops" element={<Workshops />} />


          <Route path="/toran" element={<ToranPage />} />

        
          <Route path="/forums/acclivity-program" element={<AcclivityProgram />} />


          <Route path="/socialimpact/csr" element={<CSRPage />} />
          

          
          
        </Routes>
      </HashRouter>
      <Toaster position="top-right" />


    </div>
  );
};

export default App;

import React from 'react';
import Header from '../components/marketing/Header';
import HeroSlider from '../components/marketing/HeroSlider';
import StatsCounter from '../components/marketing/StatsCounter';
import FeaturedVideos from '../components/marketing/FeaturedVideos';
import Infographics from '../components/marketing/Infographics';
import WhatWeOffer from '../components/marketing/WhatWeOffer';
import WhatMakesUsUnique from '../components/marketing/WhatMakesUsUnique';
import LeadersVoice from '../components/marketing/LeadersVoice';
import Recognition from '../components/marketing/Recognition';
import GlobalCommunities from '../components/marketing/GlobalCommunities';
import PartnersSlider from '../components/marketing/PartnersSlider';

import Gallery from '../components/marketing/Gallery';
import Footer from '../components/marketing/Footer'; 


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white" data-testid="home-page">
      <Header />
      <main>
        <HeroSlider />
        <StatsCounter />
        <FeaturedVideos />
        {/* <Infographics /> */}
        <WhatWeOffer />
        {/* <WhatMakesUsUnique /> */}
        <LeadersVoice />
        <Recognition />
        <GlobalCommunities />
        <Gallery/>
        <PartnersSlider />
        {/* <JoinCommunity /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

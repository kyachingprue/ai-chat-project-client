import React from 'react';
import Banner from '../components/Home/Banner';
import ManagementCard from '../components/Home/ManagementCard';
import SocialMediaBanner from '../components/Home/SocialMediaBanner';
import SocialMediaVideo from '../components/Home/SocialMediaVideo';
import SmartSocialSection from '../components/Home/SmartSocialSection';
import SocialPlatformsSection from '../components/Home/SocialPlatformsSection';
import DigitalWorldSection from '../components/Home/DigitalWorldSection';

const Home = () => {
  return (
   <section>
      <Banner />
      <SmartSocialSection/>
      <ManagementCard />
      <SocialMediaBanner />
      <SocialMediaVideo />
      <SocialPlatformsSection />
      <DigitalWorldSection/>
   </section>
  );
};

export default Home;

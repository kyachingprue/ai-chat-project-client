import React from 'react';
import Banner from '../components/Home/Banner';
import ManagementCard from '../components/Home/ManagementCard';
import SocialMediaBanner from '../components/Home/SocialMediaBanner';
import SocialMediaVideo from '../components/Home/SocialMediaVideo';

const Home = () => {
  return (
   <section>
      <Banner />
      <ManagementCard />
      <SocialMediaBanner />
      <SocialMediaVideo/>
   </section>
  );
};

export default Home;

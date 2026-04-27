import React from 'react';
import AboutBanner from '../components/About/AboutBanner';
import AboutSection from '../components/About/AboutSection';
import AboutSmartSection from '../components/About/AboutSmartSection';
import AboutNewSection from '../components/About/AboutNewSection';

const About = () => {
  return (
    <div>
      <AboutBanner />
      {/* About Section */}
      <AboutSection />
      <AboutSmartSection />
      <AboutNewSection/>
    </div>
  );
};

export default About;

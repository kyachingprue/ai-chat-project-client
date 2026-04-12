import React from 'react';
import AboutBanner from '../components/About/AboutBanner';
import AboutSection from '../components/About/AboutSection';
import AboutSmartSection from '../components/About/AboutSmartSection';

const About = () => {
  return (
    <div>
      <AboutBanner />
      {/* About Section */}
      <AboutSection />
      <AboutSmartSection/>
    </div>
  );
};

export default About;

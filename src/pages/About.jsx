import React from 'react';
import AboutBanner from '../components/About/AboutBanner';
import AboutSection from '../components/About/AboutSection';
import AboutSmartSection from '../components/About/AboutSmartSection';
import AboutNewSection from '../components/About/AboutNewSection';
import AboutLogicSection from '../components/About/AboutLogicSection';

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutSection />
      <AboutSmartSection />
      <AboutNewSection />
      <AboutLogicSection/>
    </div>
  );
};

export default About;

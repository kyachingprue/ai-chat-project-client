import React from 'react';
import ContactBanner from '../components/Contact/ContactBanner';
import ContactSection from '../components/Contact/ContactSection';
import ContactFeatureSection from '../components/Contact/ContactFeatureSection';

const Contact = () => {
  return (
    <div className='w-full h-full md:min-h-screen mx-auto'>
      <ContactBanner />
      {/* Contact Section */}
      <ContactSection />
      <ContactFeatureSection/>
    </div>
  );
};

export default Contact;

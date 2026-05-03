import React from 'react';
import ContactBanner from '../components/Contact/ContactBanner';
import ContactFeatureSection from '../components/Contact/ContactFeatureSection';
import ContactNewSection from '../components/Contact/ContactNewSection';
import ContactModern from '../components/Contact/ContactModern';
import ContactModernSection from '../components/Contact/ContactModernSection';

const Contact = () => {
  return (
    <div className='w-full h-full md:min-h-screen mx-auto'>
      <ContactBanner />
      <ContactModern/>
      <ContactFeatureSection />
      <ContactNewSection />
      <ContactModernSection/>
    </div>
  );
};

export default Contact;

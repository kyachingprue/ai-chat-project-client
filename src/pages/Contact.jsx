import React from 'react';
import ContactBanner from '../components/Contact/ContactBanner';
import ContactFeatureSection from '../components/Contact/ContactFeatureSection';
import ContactNewSection from '../components/Contact/ContactNewSection';
import ContactModern from '../components/Contact/ContactModern';

const Contact = () => {
  return (
    <div className='w-full h-full md:min-h-screen mx-auto'>
      <ContactBanner />
      {/* Contact Section */}
      <ContactModern/>
      <ContactFeatureSection />
      <ContactNewSection/>
    </div>
  );
};

export default Contact;

import React from 'react';
import ContactBanner from '../components/Contact/ContactBanner';
import ContactSection from '../components/Contact/ContactSection';

const Contact = () => {
  return (
    <div className='w-full h-full md:min-h-screen mx-auto'>
      <ContactBanner />
      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
};

export default Contact;

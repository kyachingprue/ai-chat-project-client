import React from 'react';
import ServiceBanner from '../components/Services/ServiceBanner';
import ServicePricingCard from '../components/Services/ServicePricingCard';
import ServicesSection from '../components/Services/ServicesSection';
import ServiceNewSection from '../components/Services/ServiceNewSection';
import ServicesModernSection from '../components/Services/ServicesModernSection';

export default function Services() {
  return (
    <section>
      <ServiceBanner />
      <ServicePricingCard />
      <ServicesSection />
      <ServiceNewSection />
      <ServicesModernSection/>
    </section>
  );
}


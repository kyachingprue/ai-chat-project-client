import React from 'react';
import ServiceBanner from '../components/Services/ServiceBanner';
import ServicePricingCard from '../components/Services/ServicePricingCard';
import ServicesSection from '../components/Services/ServicesSection';

export default function Services() {
  return (
    <section>
      <ServiceBanner />
      <ServicePricingCard />
      <ServicesSection/>
    </section>
  );
}


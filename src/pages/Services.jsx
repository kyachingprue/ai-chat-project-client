import React from 'react';
import ServiceBanner from '../components/Services/ServiceBanner';
import ServicePricingCard from '../components/Services/ServicePricingCard';

export default function Services() {
  return (
    <section>
      <ServiceBanner />
      <ServicePricingCard/>
    </section>
  );
}


import React from 'react';
import ServiceBanner from '../components/Services/ServiceBanner';
import ServicePricingCard from '../components/Services/ServicePricingCard';
import ServicesSection from '../components/Services/ServicesSection';
import ServiceNewSection from '../components/Services/ServiceNewSection';
import ServicesModernSection from '../components/Services/ServicesModernSection';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  return (
    <section>
      <Helmet>
        <title>AetherAI | Services</title>
      </Helmet>
      <ServiceBanner />
      <ServicePricingCard />
      <ServicesSection />
      <ServiceNewSection />
      <ServicesModernSection/>
    </section>
  );
}


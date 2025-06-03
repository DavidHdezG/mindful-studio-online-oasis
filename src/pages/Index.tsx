
import React from 'react';
import Hero from '@/components/Hero';
import ClassesSection from '@/components/ClassesSection';
import ContactForm from '@/components/ContactForm';
import MapSection from '@/components/MapSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ClassesSection />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold gradient-text">
            Serenity Yoga
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sage-700 hover:text-sage-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('classes')}
              className="text-sage-700 hover:text-sage-600 transition-colors font-medium"
            >
              Clases
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sage-700 hover:text-sage-600 transition-colors font-medium"
            >
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-sage-700 hover:text-sage-600 transition-colors font-medium"
            >
              Ubicación
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-sage-600 to-sage-500 hover:from-sage-700 hover:to-sage-600 text-white font-medium px-6"
          >
            Reservar Clase
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

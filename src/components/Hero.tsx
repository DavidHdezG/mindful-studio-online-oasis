
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/40 to-sage-600/30"></div>
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Serenity Yoga
          </h1>
          <p className="text-xl md:text-2xl text-cream-100 mb-8 font-light leading-relaxed">
            Encuentra tu equilibrio interior y transforma tu bienestar en un espacio de paz y armonía
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-sage-600 to-sage-500 hover:from-sage-700 hover:to-sage-600 text-white font-medium px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar mi Práctica
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-sage-700 font-medium px-8 py-3 text-lg backdrop-blur-sm bg-white/10 transition-all duration-300"
              onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conocer Clases
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements with Parallax */}
      <div 
        className="absolute bottom-10 left-10 animate-float hidden lg:block"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sage-400/30 to-sage-600/30 backdrop-blur-sm"></div>
      </div>
      <div 
        className="absolute top-20 right-20 animate-float hidden lg:block" 
        style={{ 
          animationDelay: '1s',
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cream-300/30 to-cream-500/30 backdrop-blur-sm"></div>
      </div>

      {/* Additional Parallax Elements */}
      <div 
        className="absolute top-1/3 left-1/4 hidden lg:block opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.6}px) rotate(${scrollY * 0.1}deg)`,
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sage-300/20 to-sage-500/20"></div>
      </div>
      <div 
        className="absolute bottom-1/3 right-1/4 hidden lg:block opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.7}px) rotate(${-scrollY * 0.1}deg)`,
        }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cream-400/20 to-cream-600/20"></div>
      </div>
    </section>
  );
};

export default Hero;

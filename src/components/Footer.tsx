
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sage-800 to-sage-700 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4 text-cream-100">
              Serenity Yoga
            </h3>
            <p className="text-sage-200 leading-relaxed mb-6 max-w-md">
              Un espacio sagrado donde el cuerpo, mente y espíritu se encuentran en perfecta armonía. 
              Descubre el poder transformador del yoga en nuestra comunidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center hover:bg-sage-500 transition-colors">
                <span className="text-white">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center hover:bg-sage-500 transition-colors">
                <span className="text-white">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center hover:bg-sage-500 transition-colors">
                <span className="text-white">🌐</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cream-100">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#home" className="hover:text-cream-100 transition-colors">Inicio</a></li>
              <li><a href="#classes" className="hover:text-cream-100 transition-colors">Clases</a></li>
              <li><a href="#contact" className="hover:text-cream-100 transition-colors">Contacto</a></li>
              <li><a href="#location" className="hover:text-cream-100 transition-colors">Ubicación</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cream-100">Nuestras Clases</h4>
            <ul className="space-y-2 text-sage-200">
              <li>Hatha Yoga</li>
              <li>Vinyasa Flow</li>
              <li>Yin Yoga</li>
              <li>Meditación</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-600 mt-12 pt-8 text-center">
          <p className="text-sage-300">
            © 2024 Serenity Yoga. Todos los derechos reservados. | Roma Norte, Ciudad de México
          </p>
          <p className="text-sage-400 text-sm mt-2">
            "El yoga es un viaje hacia ti mismo, a través de ti mismo, hacia ti mismo" - The Bhagavad Gita
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

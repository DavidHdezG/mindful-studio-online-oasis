
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallax(0.2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto. Namaste 🙏",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-sage-50 to-cream-50 relative overflow-hidden">
      {/* Background Parallax Element */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: "url('https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            Conectemos
          </h2>
          <p className="text-sage-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ¿Listo para comenzar tu viaje hacia el bienestar? Contáctanos y descubre cómo el yoga puede transformar tu vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Card className="glass-effect border-sage-200/50">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl gradient-text">
                  Información de Contacto
                </CardTitle>
                <CardDescription className="text-sage-600">
                  Estamos aquí para ayudarte en tu práctica de yoga
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800">Ubicación</h4>
                    <p className="text-sage-600">Roma Norte, Ciudad de México</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800">Teléfono</h4>
                    <p className="text-sage-600">+52 55 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800">Email</h4>
                    <p className="text-sage-600">hola@serenityyoga.mx</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800">Horarios</h4>
                    <p className="text-sage-600">Lun - Dom: 6:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <Card className="glass-effect border-sage-200/50">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl gradient-text">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription className="text-sage-600">
                  Completa el formulario y te responderemos pronto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                      placeholder="Cuéntanos sobre tus objetivos de yoga, experiencia previa o cualquier pregunta que tengas..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sage-600 to-sage-500 hover:from-sage-700 hover:to-sage-600 text-white font-medium py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

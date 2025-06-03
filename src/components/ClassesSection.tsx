
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ClassesSection = () => {
  const classes = [
    {
      name: 'Hatha Yoga',
      description: 'Una práctica suave y meditativa perfecta para principiantes. Enfocada en posturas básicas y respiración consciente.',
      benefits: ['Flexibilidad', 'Relajación', 'Postura'],
      schedule: 'Lun, Mié, Vie - 8:00 AM',
      duration: '60 min',
      level: 'Principiante',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Vinyasa Flow',
      description: 'Secuencias dinámicas que conectan movimiento y respiración en un flujo continuo y energizante.',
      benefits: ['Fuerza', 'Coordinación', 'Energía'],
      schedule: 'Mar, Jue, Sáb - 7:00 PM',
      duration: '75 min',
      level: 'Intermedio',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Yin Yoga',
      description: 'Práctica restaurativa con posturas sostenidas que trabajan tejidos profundos y promueven la introspección.',
      benefits: ['Calma mental', 'Flexibilidad profunda', 'Sanación'],
      schedule: 'Mié, Dom - 6:00 PM',
      duration: '90 min',
      level: 'Todos los niveles',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="classes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nuestras Clases
          </h2>
          <p className="text-sage-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Descubre el estilo de yoga que mejor se adapte a tu cuerpo, mente y espíritu. 
            Cada clase está diseñada para nutrir tu bienestar integral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((yogaClass, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 glass-effect border-sage-200/50 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={yogaClass.image} 
                  alt={yogaClass.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-sage-600 text-white">
                  {yogaClass.level}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-sage-800 group-hover:gradient-text transition-all duration-300">
                  {yogaClass.name}
                </CardTitle>
                <CardDescription className="text-sage-600 leading-relaxed">
                  {yogaClass.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {yogaClass.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-sage-100 text-sage-700 hover:bg-sage-200 transition-colors">
                      {benefit}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm text-sage-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Horario:</span>
                    <span>{yogaClass.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duración:</span>
                    <span>{yogaClass.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-sage-200/50">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold gradient-text mb-4">
              Beneficios del Yoga
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sage-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧘</span>
                </div>
                <h4 className="font-semibold mb-2">Bienestar Mental</h4>
                <p className="text-sm">Reduce el estrés y la ansiedad, mejora la concentración y promueve la paz interior.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💪</span>
                </div>
                <h4 className="font-semibold mb-2">Fortaleza Física</h4>
                <p className="text-sm">Aumenta la flexibilidad, fuerza y equilibrio mientras mejora la postura corporal.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h4 className="font-semibold mb-2">Salud Integral</h4>
                <p className="text-sm">Mejora la circulación, fortalece el sistema inmune y promueve un sueño reparador.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;

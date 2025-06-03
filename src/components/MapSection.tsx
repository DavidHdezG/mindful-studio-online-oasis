
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Map from '@/components/Map';

const MapSection = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setShowMap(true);
    }
  };

  return (
    <section id="location" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nuestra Ubicación
          </h2>
          <p className="text-sage-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Nos encontramos en el corazón de Roma Norte, Ciudad de México, en un espacio diseñado para la tranquilidad y el bienestar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="glass-effect border-sage-200/50 overflow-hidden">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl gradient-text">
                  Encuéntranos
                </CardTitle>
                <CardDescription className="text-sage-600">
                  Roma Norte, Ciudad de México
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {!showMap ? (
                  <div className="h-96 bg-gradient-to-br from-sage-100 to-cream-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="font-semibold text-sage-800 mb-4">Mapa Interactivo</h3>
                      <p className="text-sage-600 mb-6 text-sm">
                        Para mostrar el mapa, necesitas un token de Mapbox. 
                        <br />
                        Puedes obtenerlo gratis en <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-sage-600 underline hover:text-sage-500">mapbox.com</a>
                      </p>
                      <form onSubmit={handleTokenSubmit} className="space-y-4">
                        <Input
                          type="text"
                          placeholder="Ingresa tu token de Mapbox"
                          value={mapboxToken}
                          onChange={(e) => setMapboxToken(e.target.value)}
                          className="border-sage-200 focus:border-sage-500"
                        />
                        <Button 
                          type="submit"
                          className="bg-sage-600 hover:bg-sage-700 text-white"
                        >
                          Mostrar Mapa
                        </Button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="h-96">
                    <Map mapboxToken={mapboxToken} />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-8">
            <Card className="glass-effect border-sage-200/50">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl gradient-text">
                  Cómo Llegar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2">🚇 Metro</h4>
                  <p className="text-sage-600">Estación Insurgentes (Línea 1) - 5 minutos caminando</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2">🚌 Metrobús</h4>
                  <p className="text-sage-600">Álvaro Obregón (Línea 1) - 3 minutos caminando</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sage-800 mb-2">🚗 Automóvil</h4>
                  <p className="text-sage-600">Estacionamiento disponible en la zona</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sage-800 mb-2">🚴 Ecobici</h4>
                  <p className="text-sage-600">Estación a 2 cuadras del estudio</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-sage-200/50">
              <CardHeader>
                <CardTitle className="font-playfair text-xl gradient-text">
                  Nuestro Espacio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sage-600 leading-relaxed">
                  Un santuario urbano diseñado con materiales naturales, luz natural y plantas que crean 
                  el ambiente perfecto para tu práctica. Nuestras salas están equipadas con todo lo necesario 
                  para una experiencia de yoga completa y transformadora.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

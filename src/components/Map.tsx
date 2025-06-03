
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  mapboxToken: string;
}

const Map = ({ mapboxToken }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-99.1627, 19.4189], // Roma Norte, Mexico City coordinates
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for the yoga studio
    const marker = new mapboxgl.Marker({
      color: '#627753',
      scale: 1.2
    })
    .setLngLat([-99.1627, 19.4189])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(
          '<div style="padding: 10px; font-family: Inter, sans-serif;">' +
          '<h3 style="margin: 0 0 8px 0; color: #374151; font-weight: 600;">Serenity Yoga</h3>' +
          '<p style="margin: 0; color: #6B7280; font-size: 14px;">Roma Norte, Ciudad de México</p>' +
          '</div>'
        )
    )
    .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default Map;

'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface Place {
  name: string;
  lat: number;
  lng: number;
  review: string;
}

interface Props {
  places: Place[];
  selected: Place | null;
}

export default function FoodMap({ places, selected }: Props) {
  useEffect(() => {
    // Needed to ensure Leaflet CSS loads in Next.js correctly
    import('leaflet/dist/leaflet.css');
  }, []);

  const center = selected
    ? [selected.lat, selected.lng]
    : [22.9734, 78.6569]; // Center of India

  return (
    <MapContainer
      center={center as [number, number]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place, i) => (
        <Marker key={i} position={[place.lat, place.lng]}>
          <Popup>
            <strong>{place.name}</strong>
            <br />
            {place.review}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

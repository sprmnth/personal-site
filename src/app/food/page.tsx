'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const FoodMap = dynamic(() => import('@/components/FoodMap'), { ssr: false });

// Grouped by category
const placesByCity = {
  Delhi: [
    {
      name: 'Sehri Kitchen, Delhi',
      lat: 28.6448,
      lng: 77.216721,
      review: 'Incredible kathi rolls and soul-warming daal. A must after a late-night walk.'
    },
    {
      name: 'Sita Ram Diwan Chand, Delhi',
      lat: 28.6449,
      lng: 77.216822,
      review: 'Their chole bhature might be the best in the city.'
    }
  ],
  Mumbai: [
    {
      name: 'Shree Thaker Bhojanalay, Mumbai',
      lat: 18.9388,
      lng: 72.8331,
      review: 'The thali here is a festival. Go hungry, leave fulfilled.'
    }
  ],
  Kolkata: [
    {
      name: 'Indian Coffee House, Kolkata',
      lat: 22.5645,
      lng: 88.3433,
      review: 'Old-school charm, filter coffee, and adda. Not about the food, about the feeling.'
    }
  ]
};

// Flatten all places for the map
const allPlaces = Object.values(placesByCity).flat();

type Place = {
  name: string;
  lat: number;
  lng: number;
  review: string;
};

export default function FoodPage() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold mb-2">Food I Like</h1>
          <p className="text-[#555]">A growing map of where I’ve eaten and loved it.</p>

          {Object.entries(placesByCity).map(([city, places]) => (
            <div key={city}>
              <h2 className="text-xl font-medium mt-6 mb-2">{city}</h2>
              <ul className="space-y-2">
                {places.map((place, i) => (
                  <li
                    key={i}
                    onClick={() => setSelectedPlace(place)}
                    className="cursor-pointer text-blue-700 hover:underline"
                  >
                    {place.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {selectedPlace && (
            <div className="mt-6 p-4 border rounded shadow-sm bg-[#f9f9f9]">
              <h2 className="text-lg font-semibold">{selectedPlace.name}</h2>
              <p className="text-sm text-[#444] mt-2">{selectedPlace.review}</p>
              <button
                onClick={() => setSelectedPlace(null)}
                className="text-xs text-gray-500 mt-2 hover:underline"
              >
                Back to map
              </button>
            </div>
          )}
        </div>

        <div className="h-[500px] rounded-xl overflow-hidden">
          <FoodMap places={allPlaces} selected={selectedPlace} />
        </div>
      </div>
    </main>
  );
}

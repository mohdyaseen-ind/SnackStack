import React from 'react';
import { MapPin } from 'lucide-react';

const Map = ({ restaurant }) => {
  const { location } = restaurant;
  
  // Using Google Maps embed API (you can replace with your preferred map service)
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.lat},${location.lng}&zoom=15`;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-orange-600 mr-2" />
          <div>
            <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
            <p className="text-sm text-gray-600">{location.address}</p>
          </div>
        </div>
      </div>
      
      <div className="h-64 bg-gray-100 flex items-center justify-center">
        {/* Placeholder for map - replace with actual map implementation */}
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500 mb-2">Interactive Map</p>
          <p className="text-sm text-gray-400">Lat: {location.lat}, Lng: {location.lng}</p>
          <button
            onClick={() => window.open(`https://maps.google.com/?q=${location.lat},${location.lng}`, '_blank')}
            className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
          >
            Open in Google Maps
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
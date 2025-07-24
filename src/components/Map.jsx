import React from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const Map = ({ restaurant }) => {
  const { location } = restaurant;

  // Leaflet map center
  const position = [location.lat, location.lng];

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

      <div className="h-64 bg-gray-100"> {/* Removed flexbox props */}
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {restaurant.name} <br /> {location.address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* The "Open in Google Maps" button can still be useful */}
      <div className="p-4 text-center">
        <button
          onClick={() => window.open(`https://developers.google.com/maps/api-security-best-practices${location.lat},${location.lng}`, '_blank')}
          className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
        >
          Open in Google Maps
        </button>
      </div>
    </div>
  );
};

export default Map;
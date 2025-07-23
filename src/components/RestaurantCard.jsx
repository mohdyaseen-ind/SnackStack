import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, DollarSign } from 'lucide-react';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-md">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
            <span className="text-sm font-semibold">{restaurant.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
        <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>${restaurant.deliveryFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
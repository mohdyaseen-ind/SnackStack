import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, DollarSign, MapPin, ShoppingCart } from 'lucide-react'; // Added ShoppingCart icon
import { restaurantsData, generateMoreRestaurants } from '../data/restaurants';
import { addToRecentlyViewed } from '../utils/localStorage';
import Reviews from './Reviews';
import Map from './Map';
import { useCart } from '../context/CartContext'; // NEW: Import useCart hook

const RestaurantDetail = ({ onView }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const { addItem } = useCart(); // NEW: Get addItem from cart context

  useEffect(() => {
    let foundRestaurant = restaurantsData.find(r => r.id === id);
    
    if (!foundRestaurant) {
      const moreRestaurants = generateMoreRestaurants(6, 100);
      foundRestaurant = moreRestaurants.find(r => r.id === id);
    }

    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      addToRecentlyViewed(foundRestaurant);
      onView && onView();
    }
  }, [id, onView]); // Added onView to dependency array for correctness

  const handleAddToCart = (menuItem) => {
    // When adding to cart, include restaurant name for display in cart
    addItem({ ...menuItem, restaurantName: restaurant.name });
  };

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-orange-600 transition duration-200 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to restaurants
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
              <p className="text-gray-600 mb-2">{restaurant.description}</p>
              <p className="text-orange-600 font-semibold">{restaurant.cuisine} Cuisine</p>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                <span className="text-xl font-bold">{restaurant.rating}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="w-5 h-5 mr-2" />
              <span>${restaurant.deliveryFee} delivery</span>
            </div>
            <button
              onClick={() => setShowMap(!showMap)}
              className="flex items-center text-orange-600 hover:text-orange-700 transition duration-200"
            >
              <MapPin className="w-5 h-5 mr-2" />
              <span>View Location</span>
            </button>
          </div>

          {showMap && (
            <div className="mb-6">
              <Map restaurant={restaurant} />
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurant.menu?.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200 flex flex-col justify-between"> {/* Added flex-col & justify-between */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
              )}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-orange-600 font-bold text-lg mb-3">${item.price}</p> {/* Added mb-3 */}
                <button
                  onClick={() => handleAddToCart(item)} // NEW: Add to cart button
                  className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center hover:bg-orange-700 transition duration-200"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Reviews restaurantId={restaurant.id} />
    </div>
  );
};

export default RestaurantDetail;
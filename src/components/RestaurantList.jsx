import React, { useState, useEffect, useCallback } from 'react';
import { Search } from 'lucide-react';
import RestaurantCard from './RestaurantCard';
import { restaurantsData, generateMoreRestaurants } from '../data/restaurants';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreRestaurants = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newRestaurants = generateMoreRestaurants(restaurants.length + 1, 10);
      const updatedRestaurants = [...restaurants, ...newRestaurants];
      
      setRestaurants(updatedRestaurants);
      
      // Filter new restaurants based on current search
      if (searchTerm) {
        const filtered = updatedRestaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
      } else {
        setFilteredRestaurants(updatedRestaurants);
      }
      
      setLoading(false);
      
      // Stop loading more after 100 restaurants
      if (updatedRestaurants.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  }, [restaurants, loading, hasMore, searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        !== document.documentElement.offsetHeight ||
        loading
      ) {
        return;
      }
      loadMoreRestaurants();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreRestaurants, loading]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(restaurants);
    }
  }, [searchTerm, restaurants]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Great Food</h2>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search restaurants or cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <span className="ml-3 text-gray-600">Loading more restaurants...</span>
        </div>
      )}

      {!hasMore && (
        <div className="text-center py-8">
          <p className="text-gray-600">You've seen all our restaurants!</p>
        </div>
      )}

      {filteredRestaurants.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No restaurants found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
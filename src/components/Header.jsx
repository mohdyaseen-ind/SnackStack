import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { ChefHat, LogOut, Clock, User, ShoppingCart } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 

const Header = ({ user, recentlyViewed }) => {
  const [showRecent, setShowRecent] = useState(false);
  const { totalItemsInCart } = useCart(); 

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <ChefHat className="w-8 h-8 text-orange-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900"><Link to="/">FoodieApp</Link></h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-orange-600 transition duration-200">
              <ShoppingCart className="w-5 h-5" />
              <span className="ml-1 hidden sm:inline">Cart</span>
              {totalItemsInCart > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
              )}
            </Link>

            {/* Recently Viewed */}
            <div className="relative">
              <button
                onClick={() => setShowRecent(!showRecent)}
                className="flex items-center text-gray-700 hover:text-orange-600 transition duration-200"
              >
                <Clock className="w-5 h-5 mr-1" />
                <span className="hidden sm:inline">Recent</span>
              </button>

              {showRecent && recentlyViewed.length > 0 && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Recently Viewed</h3>
                    <div className="space-y-2">
                      {recentlyViewed.slice(0, 5).map((restaurant) => (
                        <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} onClick={() => setShowRecent(false)} className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-12 h-12 rounded-lg object-cover mr-3"
                          />
                          <div>
                            <p className="font-medium text-sm">{restaurant.name}</p>
                            <p className="text-xs text-gray-500">{restaurant.cuisine}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Info & Sign Out */}
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-700 mr-2" />
              <span className="text-gray-700 mr-4 hidden sm:inline">
                {user?.email?.split('@')[0]}
              </span>
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-700 hover:text-red-600 transition duration-200"
              >
                <LogOut className="w-5 h-5" />
                <span className="ml-1 hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
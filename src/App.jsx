import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Cart from './components/Cart';         // NEW
import Checkout from './components/Checkout'; // NEW
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getRecentlyViewed } from './utils/localStorage';
import { CartProvider } from './context/CartContext'; // NEW

const App = () => {
  const [user, setUser] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setRecentlyViewed(getRecentlyViewed());
  }, []);

  // Function to refresh recently viewed when a restaurant is viewed
  const handleRestaurantView = () => {
    setRecentlyViewed(getRecentlyViewed());
  };

  return (
    <Router>
      {/* Wrap your entire application with CartProvider */}
      <CartProvider> {/* NEW */}
        {user ? (
          <>
            <Header user={user} recentlyViewed={recentlyViewed} />
            <main className="min-h-screen bg-gray-50 pb-16">
              <Routes>
                <Route path="/" element={<RestaurantList />} />
                <Route path="/restaurant/:id" element={<RestaurantDetail onView={handleRestaurantView} />} />
                <Route path="/cart" element={<Cart />} />         {/* NEW ROUTE */}
                <Route path="/checkout" element={<Checkout />} /> {/* NEW ROUTE */}
              </Routes>
            </main>
          </>
        ) : (
          <Auth />
        )}
      </CartProvider> {/* NEW */}
    </Router>
  );
};

export default App;
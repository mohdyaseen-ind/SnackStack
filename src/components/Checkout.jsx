import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();

  // Optionally clear cart after a "successful" checkout
  // For a real app, this would happen after payment confirmation
  useEffect(() => {
    // This is a simple example; in a real app, clearCart would be called
    // after a successful order submission and API confirmation.
    // For now, let's simulate it upon landing on this page
    // if cart is not empty, implying a "successful" checkout attempt.
    if (cartItems.length > 0) {
        // clearCart(); // Uncomment this line if you want to clear the cart immediately upon reaching checkout
    }
  }, []); // Only runs once on mount

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <Link to="/cart" className="flex items-center text-gray-600 hover:text-orange-600 transition duration-200 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Cart
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Checkout Complete!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your order! Your delicious food is on its way.
        </p>

        {cartItems.length > 0 && (
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Order Summary:</h2>
                <ul className="text-left space-y-2 mb-4">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center text-gray-700">
                            <span>{item.name} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center border-t pt-3 font-bold text-gray-900">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>
            </div>
        )}

        <Link
          to="/"
          onClick={clearCart} // Clear cart when user goes back to home from checkout
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-200 text-lg font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
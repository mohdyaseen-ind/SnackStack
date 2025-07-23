import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeItem, incrementQuantity, decrementQuantity, clearCart, cartTotal } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="flex items-center text-gray-600 hover:text-orange-600 transition duration-200 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Restaurants
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <ShoppingCart className="w-8 h-8 text-orange-600 mr-3" />
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty!</p>
            <Link to="/" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-200">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center flex-grow">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg mr-4"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-lg text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.restaurantName}</p> {/* Display restaurant name */}
                      <p className="text-orange-600 font-bold mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="p-2 text-gray-600 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 font-semibold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="p-2 text-gray-600 hover:text-orange-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Total:</h2>
              <span className="text-2xl font-bold text-orange-600">${cartTotal.toFixed(2)}</span>
            </div>

            <div className="mt-6 flex justify-between space-x-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-200 font-semibold"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-200 text-center font-semibold"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
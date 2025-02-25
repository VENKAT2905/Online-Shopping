import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: 'Classic Cotton Dress',
      price: 89.99,
      quantity: 1,
      size: 'M',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">Size: {item.size}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center">
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center">
                      +
                    </button>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-lg font-bold">${item.price}</div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-6 inline-flex items-center justify-center hover:bg-indigo-700"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  // Dummy product data
  const product = {
    id,
    name: 'Classic Cotton Dress',
    price: 89.99,
    description: 'A timeless piece perfect for any occasion. Made from premium cotton fabric that ensures comfort and style.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-gray-600 mb-8">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Shopping
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-lg"
          />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-bold text-gray-900 mt-2">${product.price}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select Size</h3>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border ${
                    selectedSize === size
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <Truck className="h-6 w-6 text-gray-400" />
              <div>
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-gray-500">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldCheck className="h-6 w-6 text-gray-400" />
              <div>
                <h4 className="font-medium">Secure Payment</h4>
                <p className="text-sm text-gray-500">100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-gray-600">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button className="text-sm text-indigo-600 hover:text-indigo-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
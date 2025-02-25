import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">LUXE</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/category/women" className="text-gray-600 hover:text-indigo-600">Women</Link>
            <Link to="/category/men" className="text-gray-600 hover:text-indigo-600">Men</Link>
            <Link to="/category/accessories" className="text-gray-600 hover:text-indigo-600">Accessories</Link>
            <Link to="/category/sale" className="text-red-500 hover:text-red-600">Sale</Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
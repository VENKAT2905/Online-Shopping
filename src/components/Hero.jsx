import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gray-100">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">New Season Arrivals</h1>
          <p className="text-xl mb-8">Discover the latest trends in fashion</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium flex items-center hover:bg-gray-100 transition-colors">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
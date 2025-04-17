// src/components/FeaturedCollection.jsx
import React, { useState } from 'react';
import { watches } from '../../data/FeaturedWatches';
import { Link } from 'react-router-dom';

const FeaturedCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Loop to the previous watch
  const prevWatch = () => {
    setCurrentIndex(currentIndex === 0 ? watches.length - 1 : currentIndex - 1);
  };

  // Loop to the next watch
  const nextWatch = () => {
    setCurrentIndex(currentIndex === watches.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-4 md:pt-60 relative overflow-hidden">
      <div className="text-center md:pb-10">
        <h2 className="text-4xl font-serif mb-2">Featured Watches</h2>
        <p className="text-gray-600">Crafted to inspire. Designed to last.</p>
      </div>

      {/* Carousel Container */}
      <div className="relative h-[550px] md:h-[600px] flex items-center justify-center md:mt-20">
        {watches.map((watch, index) => (
          <div
            key={watch.id}
            className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={watch.image}
              alt={watch.name}
              className="w-64 h-64 md:w-2/5 md:h-full object-cover rounded-lg shadow-lg"
            />
            <div className="mt-6 md:mt-0 md:ml-40 text-center md:items-center max-w-md">
              <h3 className="text-3xl font-semibold md:mb-10">{watch.name}</h3>
              <p className="mt-4 text-lg text-gray-700">{watch.description}</p>
              {/* Buy Now Link */}
              <Link
                to={`/product/${watch.id}`}
                className="mt-6 inline-block px-8 py-3 md:mt-40 bg-gray-700 text-white border border-white rounded-full shadow-lg hover:bg-white hover:text-black hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevWatch}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-200 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextWatch}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-200 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default FeaturedCollection;

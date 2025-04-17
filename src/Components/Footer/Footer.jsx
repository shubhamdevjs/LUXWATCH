// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm md:text-base">
      {/* Top Section: Newsletter & Info */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Newsletter and short brand text */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Get exclusive updates
          </h2>
          <p className="max-w-md text-gray-300 mb-4">
            on our latest collections, personalized offers, and the House’s
            latest news.
          </p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-black w-full sm:w-auto sm:flex-grow rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 px-5 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-10" />

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3 uppercase tracking-wide">
              Customer Service
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#help" className="hover:underline">
                  Help & FAQs
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:underline">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#repair" className="hover:underline">
                  Repairs & Warranty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 uppercase tracking-wide">
              About
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#ourstory" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:underline">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 uppercase tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#collections" className="hover:underline">
                  Collections
                </a>
              </li>
              <li>
                <a href="#newarrivals" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#stores" className="hover:underline">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 uppercase tracking-wide">
              Connect
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#instagram" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#facebook" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Big Brand Name + Legal */}
      <div className="border-t border-gray-700 py-8 flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-serif tracking-widest">LUXWATCH</h1>
        <p className="text-gray-400 text-xs tracking-wide">
          © 2025 Luxwatch. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

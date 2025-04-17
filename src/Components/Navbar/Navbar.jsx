// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { RiHome3Line } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // when you've scrolled past about 80vh, slide in the button
      setShowButton(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto flex items-center px-6 md:px-12 ">
        {/* LEFT: logo */}
        <div className="flex-none">
          {/* your logo file in /public or /src/assets */}
        {/* logo + brand name */}
      <Link to="/" className="flex items-center space-x-2">
        {/* your logo file in /public or /src/assets */}
        <img
          src="/assets/images/logo.jpg"
          alt="LuxWatch Logo"
          className="h-[60px] w-auto"
        />
        <span className="text-2xl font-serif md:text-4xl font-playfair font-bold tracking-wide text-gray-700">
          LuxWatch
        </span>
      </Link>
          
        </div>

        {/* CENTER: placeholder + sliding button */}
        <div className="flex-1 flex justify-center">
          <div
            className={`
              transform transition-all duration-300
              ${showButton
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"}
            `}
            style={{ animation: showButton ? "slide-in 0.3s forwards ease-out" : "none" }}
          >
            <Link
              to="/catalog"
              className="
                px-6 py-2 border border-gray-800 text-gray-800
                hover:bg-gray-800 hover:text-white
                rounded
              "
            >
              View Collection
            </Link>
          </div>
        </div>

        {/* RIGHT: icons */}
        <div className="flex-none flex items-center gap-6 md:gap-10">
          <Link to="/" className="text-gray-500 hover:text-gray-900">
            <RiHome3Line className="text-2xl md:text-3xl" />
          </Link>
          <Link to="/about" className="text-gray-500 hover:text-gray-900">
            <BiShoppingBag className="text-2xl md:text-3xl" />
          </Link>
          <Link to="/contact" className="text-gray-500 hover:text-gray-900">
            <CgProfile className="text-2xl md:text-3xl" />
          </Link>
        </div>
      </div>

      {/* slide-in keyframes (you can move this into your global CSS) */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

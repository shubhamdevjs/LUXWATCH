// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { RiHome3Line } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // slide-in View Collection
  useEffect(() => {
    const onScroll = () => {
      setShowButton(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close profile dropdown if clicking outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto flex items-center py-3 px-6 md:px-12">
        {/* LEFT: logo + brand */}
        <div className="flex-none">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/images/logo.jpg"
              alt="LuxWatch Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl md:text-4xl font-playfair font-bold tracking-wide text-gray-700">
              LuxWatch
            </span>
          </Link>
        </div>

        {/* CENTER: View Collection slides in */}
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

        {/* RIGHT: icons + profile dropdown */}
        <div className="flex-none flex items-center gap-6 md:gap-10">
          <Link to="/" className="text-gray-500 hover:text-gray-900">
            <RiHome3Line className="text-2xl md:text-3xl" />
          </Link>
          <Link to="/favourites" className="text-gray-500 hover:text-gray-900">
            <BiShoppingBag className="text-2xl md:text-3xl" />
          </Link>
          {/* PROFILE */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(o => !o)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <CgProfile className="text-2xl md:text-3xl" />
            </button>
            {profileOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg py-1 z-20">
                <li>
                  <button
                    onClick={() => alert('You are Logged In !!!!!')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert('You are signed In!!!!')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                  >
                    Signup
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

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

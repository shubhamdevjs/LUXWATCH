import React from "react";
import { Link } from "react-router-dom";
import './HeroSection.css';

const HeroSection = () => {
    return (
       <div className="relative h-screen w-full overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      >
        <source src="/assets\Videos\start3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-wide">
          Timeless Elegance
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Discover our handcrafted luxury watches that blend tradition with innovation.
        </p>
        <Link
          to="/catalog"
          className="mt-8 px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300"
        >
          View Collection
        </Link>
      </div>
    </div>
    );
}

export default HeroSection;

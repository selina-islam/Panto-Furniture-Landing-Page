import React from 'react'
import { FaSearch } from 'react-icons/fa';

function Hero() {
  return (
    <section className="h-screen relative bg-cover bg-center bg-[url('/hero-cover.png')]">
      <div className="pt-32 text-center text-white md:w-1/2 mx-auto px-4 space-y-2">
        <h1 className="text-4xl lg:text-6xl lg:leading-tight leading-snug font-medium">
          Make your interior more minimalistic & modern
        </h1>
        <p className="py-2 lg:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/* Search field with input and icon */}
        <div className="relative inline-block z-30">
          <input
            type="search"
            placeholder="Search furniture"
            className="w-full md:w-80 bg-white/20 mx-auto rounded-full border border-gray-300 focus:outline-none placeholder:text-white p-2"
          />
          <div className="absolute right-5 top-2 bg-amber-300 p-1 rounded-full">
            <FaSearch className="" />
          </div>
        </div>
      </div>
      {/* Overlay with small bottom blur effect */}
      <div className="absolute inset-0 -mb-2 bottom-0   bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>

      {/* hover button for displaying box  */}
    </section>
  );
}

export default Hero
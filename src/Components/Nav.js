import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-[100px] px-6 py-6 flex justify-between items-center gap-4 relative">
      <h1 className="text-xl sm:text-3xl my-auto whitespace-nowrap">
        Hotel Triveni Darshan
      </h1>

      {/* Hamburger Icon for Mobile */}
      <button
        className="block md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-8 w-8" />
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-white shadow-md md:flex md:static md:w-auto md:bg-transparent md:shadow-none gap-6 z-40`}
      >
        <li className="p-2 md:p-0">
          <a
            href="#home"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li className="p-2 md:p-0">
          <a
            href="#about"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
          >
            About Us
          </a>
        </li>
        <li className="p-2 md:p-0">
          <a
            href="#bookRoom"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
          >
            Book Room
          </a>
        </li>
        <li className="p-2 md:p-0">
          <a
            href="#hotelFacility"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
          >
            Hotel Facility
          </a>
        </li>
        <li className="p-2 md:p-0">
          <a
            href="#reachUs"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
          >
            Reach Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

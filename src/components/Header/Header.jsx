import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Packages", path: "/PackageTour" },
    { name: "Services", path: "/Service" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Contact Us", path: "/Contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-around items-center px- py-4 ">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-gray-900">
            <h1 className="text-2xl font-bold text-green-600">
              Al Haram Journeys
            </h1>
            <p className="text-sm text-gray-500 -mt-1">Hajj & Umrah</p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-800 hover:text-green-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex gap-3 md:gap-1 items-center">
          <Link to ='/Contact'>
          <button className="bg-green-500 cursor-pointer hover:shadow-sm hover:bg-green-600 px-5 py-2 rounded text-white transition">
            Contact Us
          </button>
          </Link>
          <Link to ='/PackageTour'>
          <button className="bg-green-700 cursor-pointer  hover:shadow-sm hover:bg-green-800 px-5 py-2 rounded text-white transition-all duration-300">
            Book Now
          </button>
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 absolute w-full left-0 transition-all duration-300 ease-in-out ${
          menuOpen ? "top-[64px] opacity-100" : "top-[-500px] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 mt-4 w-3/4">
          
            <button className="bg-green-500 hover:bg-green-600  py-2 rounded text-white transition">
              <Link to ='/Contact'>
              Contact Us
              </Link>
            </button>
            <button className="bg-green-700 hover:bg-green-800  py-2 rounded text-white transition">
            <Link to ='/PackageTour'>
              Book Now
            </Link>
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;

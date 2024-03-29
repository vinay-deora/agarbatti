import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src="https://th.bing.com/th/id/OIP.tYk_MXhcg8OSGE9tmGSHUAAAAA?pid=ImgDet&w=192&h=192&c=7"
            alt="Logo"
            className="w-12 h-12 mr-2"
          />
          <span className="text-white text-xl font-bold">Your Logo</span>
        </div>
        <div className="md:hidden">
          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isMenuOpen ? "flex" : "hidden"} space-x-4`}
        >
          {/* Nav Links */}
          <Link to="/" className="text-gray-600 hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-200">
            About
          </Link>
          <a href="#career" className="text-gray-600 hover:text-gray-200">
            Career
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    
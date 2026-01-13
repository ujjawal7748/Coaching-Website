import React, { useState } from "react";
import SiteLogo from "../assets/sitelogo.png";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hamToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full sticky top-0 z-50">
  <div className="bg-gray-800 h-1 w-full"></div>

  <div className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

      {/* LOGO */}
      <div className="flex items-center">
        <img
          src={SiteLogo}
          alt="Momentum Coaching"
          className="h-full max-h-[150px] w-auto object-contain"
        />
      </div>

      {/* MENU */}
      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-10 text-sm font-semibold text-gray-700">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><a href="/about-us/" className="hover:text-blue-600">About Us</a></li>
          <li><a href="/course-and-fee/" className="hover:text-blue-600">Courses & Fees</a></li>
          <li><a href="/blogs/" className="hover:text-blue-600">Blogs</a></li>
          <li><a href="/contact-us/" className="hover:text-blue-600">Contact Us</a></li>
        </ul>
      </nav>

    </div>
  </div>
</header>

  );
};

export default Navigation;

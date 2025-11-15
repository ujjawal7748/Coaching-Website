import React, { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hamToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full sticky top-0">
      <div className="bg-gray-800 h-2 w-full"></div>

      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center nav-menu nav-container">
          <div className="flex items-center space-x-2 w-1/5 flex-shrink-0">
            <div className="text-blue-700 font-bold text-3xl">
              <p className="uppercase">Momemtum</p>
              <p className="text-gray-600 text-xs text-center font-normal mt-1">
                Patna, Bihar
              </p>
            </div>
          </div>

          <div className={`flex w-4/5 ${showMenu ? "mob-menu" : "menu-web"} `}>
            <nav className="flex-grow flex justify-end">
              <ul className="flex space-x-6 text-sm font-semibold text-gray-700">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-700 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="hover:text-blue-700 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/course-and-fee"
                    className="hover:text-blue-700 transition-colors duration-300"
                  >
                    Courses & Fees
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/achievements"
                    className="hover:text-blue-700 transition-colors duration-300"
                  >
                    Achievements
                  </a>
                </li> */}
                <li>
                  <a
                    href="/blogs"
                    className="hover:text-blue-700 transition-colors duration-300"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="hover:text-blue-700 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="ham-menu ">
            <button onClick={hamToggle}>{showMenu ? "x" : "≡"}</button>
            {/* × */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

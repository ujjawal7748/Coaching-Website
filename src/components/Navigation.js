import React from 'react'

const Navigation = () => {
  return (

<header className="w-full">
      <div className="bg-gray-800 h-2 w-full"></div>

      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center"> 

          <div className="flex items-center space-x-2 w-1/5 flex-shrink-0"> 
            <div className="text-blue-700 font-bold text-3xl">
              ALLEN
              <p className="text-gray-600 text-xs font-normal mt-1">Kota, Rajasthan</p>
            </div>
          </div>

          <div className="flex w-4/5"> 
            <nav className="flex-grow flex justify-end">
              <ul className="flex space-x-6 text-sm font-semibold text-gray-700">
                <li><a href="/homepage" className="hover:text-blue-700 transition-colors duration-300">Home</a></li>
                <li><a href="/about-us" className="hover:text-blue-700 transition-colors duration-300">About Us</a></li>
                <li><a href="/courses-and-fees" className="hover:text-blue-700 transition-colors duration-300">Courses & Fees</a></li>
                <li><a href="/achievements" className="hover:text-blue-700 transition-colors duration-300">Achievements</a></li>
                <li><a href="/blogs" className="hover:text-blue-700 transition-colors duration-300">Blogs</a></li>
                <li><a href="/contact-us" className="hover:text-blue-700 transition-colors duration-300">Contact Us</a></li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>

  )
}

export default Navigation
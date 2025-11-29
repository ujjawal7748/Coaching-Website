import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-gray-300"> 

      <div className="container mx-auto px-4 py-12 footer-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="/about-us/" className="hover:text-white transition-colors duration-300">About Momentum</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Inspiration</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Directors Message</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Courses & Programmes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-300">JEE (Main + Adv.) IIT-JEE</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">JEE Main</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pre-Medical (NEET-UG)</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">PMCF (Class 6<sup>th</sup> to 10<sup>th</sup>)</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Disclosure, Policies & Documents</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Results</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-300">JEE (Advanced) - IIT-JEE</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">NEET (UG) AI PMT</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">AIIMS</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">JEE (Main) - AIEEE</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Exam Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-300">JEE Main</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">JEE Advanced</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">NEET UG</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Boards</a></li>
            </ul>
          </div>
        </div>

        
        <hr className="border-gray-700 my-8" />

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left items-start">
         
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-2">Visit Our Location</h4>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-indigo-500" />
              <p className="text-sm">DIG More Purnea</p>
            </div>
          </div>

          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-2">Give Us a Call</h4>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-green-500" />
              <p className="text-sm">+91-XXXXXXXXXX, +91-7549954080<br />(08:00 AM to 08:00 PM)</p>
            </div>
          </div>

          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-2">Get Support</h4>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCircleInfo} className="text-blue-500" />
              <a href="#" className="text-sm hover:text-white transition-colors duration-300">Click Here</a>
            </div>
          </div>

          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-2">Send us a Message</h4>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-red-500" />
              <a href="mailto:info@Momentum.in" className="text-sm hover:text-white transition-colors duration-300">info@Momentum.in</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full inline-flex items-center justify-center transition-colors duration-300"
                aria-label="Scroll to top"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
        </div>
      </div>

      <div className="bg-[#1a1a1a] text-gray-400 py-4 border-t border-gray-700"> 
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 text-sm space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a> |
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a> |
            <a href="#" className="hover:text-white transition-colors duration-300">Payment Terms</a> |
            <a href="#" className="hover:text-white transition-colors duration-300">Refund & Cancellation</a> |
            <a href="#" className="hover:text-white transition-colors duration-300">Disclaimer</a> |
            <a href="#" className="hover:text-white transition-colors duration-300">Public Notice</a>
          </div>

          <div className="text-sm mb-4">
            <p>Momentum Institute </p>
            <p>Near Dig More, Purnea</p>
          </div>

          
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors duration-300"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors duration-300"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors duration-300"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition-colors duration-300"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>

          <p className="text-xs">&copy; {currentYear} Momentum Purnea</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
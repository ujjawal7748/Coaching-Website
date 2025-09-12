import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

// You would define these link objects in a separate file or at the top of your component.
const footerLinks = {
  about: [
    { name: 'About MOMENTUM', href: '/about-us' },
    { name: 'Our Inspiration', href: '#' },
    { name: "Director's Message", href: '#' },
    { name: 'MOMENTUM System', href: '#' },
    { name: 'Lead With MOMENTUM', href: '#' },
  ],
  courses: [
    { name: 'JEE (Main + Adv.) IIT-JEE', href: '#' },
    { name: 'JEE Main', href: '#' },
    { name: 'Pre-Medical (NEET-UG)', href: '#' },
    { name: 'PMCF (Class 6th to 10th)', href: '#' },
    { name: 'Online Programs', href: '#' },
    { name: 'Sanskar Mahotsav', href: '#' },
    { name: 'Toppers Talk', href: '#' },
    { name: 'MOMENTUM World Records', href: '#' },
    { name: 'Disclosure, Policies & Documents', href: '#' },
  ],
  results: [
    { name: 'JEE (Advanced) - IIT-JEE', href: '#' },
    { name: 'NEET (UG) AI PMT', href: '#' },
    { name: 'AIIMS', href: '#' },
    { name: 'JEE (Main) - AIEEE', href: '#' },
    { name: 'Olympiads', href: '#' },
  ],
  examInfo: [
    { name: 'JEE Main', href: '#' },
    { name: 'JEE Advanced', href: '#' },
    { name: 'NEET UG', href: '#' },
    { name: 'Boards', href: '#' },
    { name: 'Distance Learning', href: '#' },
    { name: 'Online Test Series', href: '#' },
    { name: 'Workshops', href: '#' },
    { name: 'Study Abroad', href: '#' },
  ],
  legal: [
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Payment Terms', href: '#' },
    { name: 'Refund & Cancellation', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'Public Notice', href: '#' },
  ],
  socials: [
    { icon: faWhatsapp, href: '#', color: 'text-green-500', ariaLabel: 'WhatsApp' },
    { icon: faFacebookF, href: '#', color: 'text-blue-500', ariaLabel: 'Facebook' },
    { icon: faTwitter, href: '#', color: 'text-sky-400', ariaLabel: 'Twitter' },
    { icon: faInstagram, href: '#', color: 'text-purple-500', ariaLabel: 'Instagram' },
    { icon: faYoutube, href: '#', color: 'text-red-500', ariaLabel: 'YouTube' },
    { icon: faLinkedinIn, href: '#', color: 'text-blue-700', ariaLabel: 'LinkedIn' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses & Programmes */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Courses & Programmes</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Results</h3>
            <ul className="space-y-3">
              {footerLinks.results.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Exam Information</h3>
            <ul className="space-y-3">
              {footerLinks.examInfo.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-12" />

        {/* Contact and Socials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left items-start">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white mb-2">Visit Us</h4>
            <div className="flex items-start space-x-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 mt-1" />
              <p className="text-sm">"SANKALP" CP-6, Indra Vihar Kota (Rajasthan), India 324005</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white mb-2">Call Us</h4>
            <div className="flex items-start space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-green-500 mt-1" />
              <p className="text-sm">+91-744-3556677, +91-744-2757675 <br />(08:00 AM to 08:00 PM)</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white mb-2">Email</h4>
            <div className="flex items-start space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-red-500 mt-1" />
              <a href="mailto:info@allen.in" className="text-sm hover:text-blue-400 transition-colors duration-300">info@allen.in</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white mb-2">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {footerLinks.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 hover:text-white text-2xl ${social.color} transition-colors duration-300`}
                  aria-label={social.ariaLabel}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full inline-flex items-center justify-center transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="bg-gray-950 text-gray-400 py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm space-x-4 mb-2">
            {footerLinks.legal.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
                {index < footerLinks.legal.length - 1 && <span className="text-gray-600">|</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs">&copy; {currentYear}  MOMENTUM Institute Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
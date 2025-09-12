import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// 1. Define your slide images here
const slideImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
];

const HomeBanner = () => {
  // 2. State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Effect to handle the automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % slideImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh]">
      {/* Image Slides */}
      {slideImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      ))}

      {/* Centered Content with semi-transparent background */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl rounded-lg bg-white/80 p-8 text-center backdrop-blur-sm">
          {/* Text is now black (text-gray-900) */}
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Momentum
          </h1>
          <h2 className="mt-2 text-3xl font-semibold text-gray-800 sm:text-5xl">
            Coaching Classes
          </h2>
          <p className="mt-6 leading-relaxed text-gray-700">
            At our institute, we build a strong foundation in core subjects, guiding students step-by-step from basic concepts to advanced problem-solving. Our structured approach, experienced faculty, and focused mentoring help students excel in Board exams, and achieve top ranks in JEE Main and JEE Advanced with confidence.
          </p>
          {/* Social icons are now dark and hover to blue */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Button 1: Contact Us */}
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto"
            >
              {/* Contact Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Contact Us</span>
            </Link>

            {/* Button 2: Email Us */}
            <a
              href="mailto:info@momentum.com"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto"
            >
              {/* Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
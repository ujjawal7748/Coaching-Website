import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BannerSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&w=2000",
      title: "Personalized Coaching Plans",
      subtitle: "Achieve your academic goals with expert guidance",
      button: "Get Started",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=2000",
      title: "Expert Mentorship",
      subtitle: "Learn from top industry professionals",
      button: "Join Now",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&w=2000",
      title: "Build Your Future",
      subtitle: "Customized learning paths just for you",
      button: "Explore",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const auto = setInterval(nextSlide, 5000);
    return () => clearInterval(auto);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[50vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt="banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content with 50px top & bottom padding */}
          <div className="absolute inset-0 flex items-center px-10 md:px-20 py-[50px] text-white">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                {slide.subtitle}
              </p>

              <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-500 transition">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <FiChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

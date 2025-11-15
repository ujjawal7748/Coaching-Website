import React from "react";
import Slider from "react-slick";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2620&q=80",
      title: "Make your practice for JEE & NEET",
      subtitle: "10X stronger with our Online Test Series!",
      btnText: "Buy Now",
      bgColor: "bg-[#004AAD]/90", // blue overlay color
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
      title: "Smart Learning Programs",
      subtitle: "Interactive sessions designed by top educators",
      btnText: "Explore Courses",
      bgColor: "bg-[#1D3557]/90",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2671&q=80",
      title: "Personalized Coaching Plans",
      subtitle: "Achieve your academic goals with expert guidance",
      btnText: "Get Started",
      bgColor: "bg-[#2C5282]/90",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    prevArrow: (
      <div className="">
        {/* absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer shadow-md */}
        <BsChevronCompactLeft size={28} className="text-gray-700" />
      </div>
    ),
    nextArrow: (
      <div className="">
        {/* absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full cursor-pointer shadow-md */}
        <BsChevronCompactRight size={28} className="text-gray-700" />
      </div>
    ),
    appendDots: (dots) => (
      <div style={{ bottom: "15px" }}>
        <ul className="m-0 flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-500 transition-all duration-300"></div>
    ),
  };

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex justify-center items-center"
          >
            {/* Banner Image */}
            <div className="w-full h-[250px] md:h-[420px] overflow-hidden shadow-lg relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full object-cover"
              />
              {/* Dark Overlay */}
              <div
                className={`absolute inset-0 ${slide.bgColor} flex flex-col justify-center px-6 md:px-16 text-white`}
              >
                <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-3">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg mb-4 opacity-90">
                  {slide.subtitle}
                </p>
                <button className="bg-yellow-400 text-black font-semibold px-5 py-2 md:px-6 md:py-2.5 rounded-md hover:bg-yellow-500 transition-all w-fit">
                  {slide.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;

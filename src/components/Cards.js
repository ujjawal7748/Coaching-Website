import React from "react";
import img from "../assets/compress_background.webp";
const Cards = () => {
  const card_data = [
    {
      image: img,
      cardTitle: "IIT-JEE Coaching",
      cardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkText: "Click Here",
      linkUrl: "#",
    },
    {
      image: img,
      cardTitle: "NEET Preparation",
      cardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkText: "Click Here",
      linkUrl: "#",
    },
    {
      image: img,
      cardTitle: "Scholarship & Talent Tests",
      cardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkText: "Click Here",
      linkUrl: "#",
    },

    {
      image: img,
      cardTitle: "Foundation Courses (Class 8–10)",
      cardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkText: "Click Here",
      linkUrl: "#",
    },
  ];

  return (
    <>
      {card_data.map(
        ({ image, cardTitle, cardDescription, linkText, linkUrl }, index) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={image} alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {cardTitle}
                </h5>

                <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">
                  {cardDescription}
                </p>
                <a
                  href={linkUrl}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {linkText}
                </a>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default Cards;

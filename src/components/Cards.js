import React from "react";
import img from "../assets/compress_background.webp";
const Cards = () => {
  const card_data = [
    {
      image: img,
      cardTitle: "IIT-JEE Coaching",
      cardDescription:
        "Our IIT-JEE coaching program is designed for students who dream big. We focus on concept clarity, problem-solving skills and exam strategies to help you achieve top ranks.",
      linkText: "Click Here",
      linkUrl: "#",
    },
    {
      image: img,
      cardTitle: "NEET Preparation",
      cardDescription:
        "Get ready for NEET with our scientifically designed program that strengthens Biology, Physics and Chemistry fundamentals through result-oriented teaching.",
      linkText: "Click Here",
      linkUrl: "#",
    },
    {
      image: img,
      cardTitle: "Scholarship & Talent Tests",
      cardDescription:
        "We conduct talent evaluation and scholarship tests for students who want to test their abilities, challenge themselves and get rewarded.",
      linkText: "Click Here",
      linkUrl: "#",
    },

    {
      image: img,
      cardTitle: "Foundation Courses (Class 8–10)",
      cardDescription:
        "Our foundation program prepares students early for boards, Olympiads, NTSE, KVPY and future competitive exams like IIT-JEE and NEET.",
      linkText: "Click Here",
      linkUrl: "#",
    },
  ];

  return (
    <>
      {card_data.map(
        ({ image, cardTitle, cardDescription, linkText, linkUrl }, index) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" key={index}>
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

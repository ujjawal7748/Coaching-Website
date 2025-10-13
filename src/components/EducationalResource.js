import React from "react";
import liveIcon from "../assets/books.jpg";
import offlineClass from "../assets/offline-classroom.webp";
import notes from "../assets/note.webp";
import mockTest from "../assets/test.webp";
import eLearninig from "../assets/e-learning.png";

const EducationalResource = () => {
  const features = [
    {
      icon: offlineClass,
      title: "Offline Classes",
      description: "Interactive classes",
    },
    {
      icon: notes,
      title: "Free study materials",
      description: "Tests, sample papers & notes",
    },
    {
      icon: mockTest,
      title: "Mock Tests",
      description: "Mock Tests",
    },
    {
      icon: eLearninig,
      title: "E-Learning Modules",
      description: "E-Learning Modules",
    },
  ];
  return (
    <div className="bg-white py-10 px-4 educational-res rounded-[100px] shadow-md">
      <div className="mx-auto grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center educational-res-cards">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={feature.icon} alt={feature.title} className="h-12 mb-4" />
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResource;

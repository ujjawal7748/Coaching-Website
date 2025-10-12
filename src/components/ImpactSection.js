import React from "react";

// Data structure for the section
const mainStats = [
  {
    value: "40 Lakh+",
    label: "Students Mentored",
    subLabel: "Since 1988",
  },
  {
    value: "4 Lakh+",
    label: "Students Studying in",
    subLabel: "Session 2025-26",
  },
];

const highlights = [
  "72 Presence in Cities Across India",
  "300+ Classroom Campuses",
  "400+ Test Centers Across India",
];

const ImpactSection = () => {
  return (
    // Outer container for padding and background
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area - Uses flex on medium screens and up, 
            and stacks vertically on smaller screens */}
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
          {/* Left Side: Transforming Lives & Main Stats */}
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Transforming Lives
            </h2>

            {/* Stats Block - Uses flex to align the two columns with a separator */}
            <div className="flex items-start space-x-4 sm:space-x-8">
              {mainStats.map((stat, index) => (
                <React.Fragment key={index}>
                  {/* Individual Stat */}
                  <div className="flex flex-col min-w-0">
                    <p className="text-4xl sm:text-5xl font-extrabold text-[#2a4d92] leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-base text-gray-700 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500">{stat.subLabel}</p>
                  </div>

                  {/* Vertical Separator - Hidden on the last item */}
                  {index < mainStats.length - 1 && (
                    <div className="hidden sm:block h-20 w-px bg-gray-300 mx-4"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Fine Print / Bottom Text */}
            <p className="text-xs text-gray-600 mt-6 sm:mt-8 pt-4 border-t border-gray-100 max-w-lg">
              Students from Classroom, Distance and Digital Courses (Till
              31.08.2025)
            </p>
          </div>

          {/* Right Side: Highlights Block (Orange/Yellow Box) */}
          <div className="w-full md:w-80 lg:w-96 bg-[#FFCA63] p-6 sm:p-8 rounded-lg shadow-lg impct-card">
            <ul className="space-y-6">
              {highlights.map((item, index) => {
                const parts = item.split(" ");
                // Assuming the first part is the bold number/value
                const value = parts[0];
                const description = parts.slice(1).join(" ");

                return (
                  <li key={index} className="flex items-start space-x-3">
                    {/* Checkmark Icon */}

                    {/* Highlight Text */}
                    <p className="text-3xl text-gray-900">
                      <span className="text-3xl font-extrabold leading-none block">
                        {value}
                      </span>
                      <span className="text-base leading-tight block">
                        {description}
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;

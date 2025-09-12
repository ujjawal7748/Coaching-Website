import React from 'react';

// A simple checkmark icon component
const CheckIcon = () => (
  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800">
    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

// Data for the stats in the yellow box
const sideStatsData = [
  { count: '5+', description: 'Test Centers Across City' },
  { count: '1+', description: 'Classroom Campuses' },
  { count: '4-6 PM', description: 'Doubt Session Everyday' },
];

const AchievementNumber = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transforming lives since 2018
            </h2>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <h3 className="text-5xl font-bold text-blue-600">1.5 Lac+</h3>
                <p className="mt-2 text-base text-gray-600">Students Mentored since 2010</p>
              </div>
              
              {/* Stat 2 with vertical divider */}
              <div className="flex flex-col border-l-2 border-gray-200 pl-8">
                <h3 className="text-5xl font-bold text-blue-600">3000 +</h3>
                <p className="mt-2 text-base text-gray-600">Students in OFFLINE Classroom Courses (2024-25)</p>
              </div>
            </div>
          </div>

          {/* Right Column (Yellow Box) */}
          <div className="rounded-lg bg-amber-400 p-8">
            <div className="flex flex-col gap-8">
              {sideStatsData.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <div>
                    <p className="text-4xl font-bold text-gray-900">{stat.count}</p>
                    <p className="mt-1 text-base font-medium text-gray-800">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementNumber;
import React from 'react';

// Data for the list on the right side. This makes it easy to update.
const achievementsData = [
  { count: 135, name: 'INPhO' },
  { count: 143, name: 'INChO' },
  { count: 124, name: 'INAO' },
  { count: 68, name: 'INBO' },
  { count: 152, name: 'INJSO' },
  { count: 291, name: 'INMO' },
  { count: 26, name: 'INOI' },
];

const AchievementsSection = () => {
  return (
    <section className="bg-[#FFFBF5] py-12 sm:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
          
          {/* Left Column: Main Achievement Text */}
          <div className="flex flex-col items-center justify-center text-center lg:col-span-3">
            <div className="rounded-md bg-[#D99D5A] px-4 py-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                MOMENTUM ACHIEVES ITS BEST-EVER
              </h3>
            </div>
            <p className="mt-4 text-xl text-gray-600">with</p>
            <div
              className="my-2 text-9xl font-extrabold text-amber-500"
              style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}
            >
              939
            </div>
            <p className="text-xl font-medium text-gray-700">
              selections out of 3704 for
            </p>
            <h2 className="mt-2 text-2xl font-bold uppercase text-gray-800">
              Indian National Olympiads (INO 2025)
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              (Stage 2 of Official International Science & Informatics Olympiad & Stage 3 of International Mathematical Olympiad)
            </p>
            <p className="mt-6 text-lg font-semibold uppercase text-gray-800">
              Every 4ᵗʰ Selection is Powered by Momentum
            </p>
          </div>

          {/* Right Column: List of Selections */}
          <div className="flex flex-col justify-center gap-3 rounded-lg bg-[#F9EFE2] p-6 lg:col-span-2">
            {achievementsData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-full bg-white px-5 py-2 shadow-sm"
              >
                <p className="font-bold text-amber-600">{item.count} selections</p>
                <p className="font-semibold text-gray-700">for {item.name}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Optional: Navigation Arrows */}
        {/* These are positioned relative to the main container */}
        <button className="absolute top-1/2 left-0 -translate-y-1/2 transform rounded-full bg-white/50 p-2 text-gray-600 shadow-md transition hover:bg-white lg:-left-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="absolute top-1/2 right-0 -translate-y-1/2 transform rounded-full bg-white/50 p-2 text-gray-600 shadow-md transition hover:bg-white lg:-right-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default AchievementsSection;
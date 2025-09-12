import React from 'react';
// 1. Import the Link component
import { Link } from 'react-router-dom';

const courseData = [
  {
    id: 1,
    image: 'https://i.ibb.co/zZ3jR7M/nurture.png',
    title: 'Pre-Nurture & Career Foundation',
    description: 'PNCF Courses for class 6th to 10th nurtures students, establishing a robust groundwork for excelling in competitive exams and Olympiads.',
    // 2. I've made the paths unique for each course
    path: '/pre-nurture', 
  },
  {
    id: 2,
    image: 'https://i.ibb.co/WcZZFb2/jee-main.png',
    title: 'JEE (Main)',
    description: 'JEE (Main) courses are designed to provide students with a significant competitive edge for achieving success for their path to NITs, IIITs and equivalent colleges.',
    path: '/jee-main',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/hK7b5B2/neet.png',
    title: 'Pre-Medical/NEET UG',
    description: 'NEET-UG Courses sharpen skills essential for medical entrance exams, ensuring students are well-prepared for success in the competitive medical field.',
    path: '/neet',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/h7gJj4n/online.png',
    title: 'JEE (Main+Advanced)/IIT-JEE',
    description: 'JEE (Main+Advanced) Courses builds strong subject knowledge and problem-solving skills to help aspirants ace the exams to get enrolled into IITs.',
    path: '/jee-advanced',
  },
];

// 3. The CourseCard now accepts `path` as a prop
const CourseCard = ({ image, title, description, path }) => (
  <div className="flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
    <img src={image} alt={`${title} Icon`} className="mb-5 h-24 w-24" />
    <div className="flex flex-grow flex-col">
      <h3 className="mb-2 text-lg font-bold text-gray-800">{title}</h3>
      <p className="flex-grow text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
    {/* 4. The <a> tag is replaced with <Link> which uses the path prop */}
    <Link
      to={path}
      className="mt-6 rounded-md bg-blue-800 px-8 py-2 font-bold text-white transition-colors duration-300 hover:bg-yellow-500"
    >
      Click Here
    </Link>
  </div>
);

const CoursesSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Courses & Fee
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courseData.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
              // 5. You must pass the path prop down to the card
              path={course.path} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
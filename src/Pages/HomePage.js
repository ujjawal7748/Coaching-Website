import React from "react";
import MainLayout from "../components/MainLayout";
import BannerSlider from "../components/BannerSlider";
import Cards from "../components/Cards";
import heroImg from "../assets/students.png";
import EducationalResource from "../components/EducationalResource";
import offlineClass_ from "../assets/students-in-classroom.webp";
import ImpactSection from "../components/ImpactSection";
import eduRes from "../assets/note.webp";
import StarsSection from "../components/StarsSection";
const HomePage = () => {
  return (
    <MainLayout>
      <section className="bnr-slider-home h-[250px] md:h-[300px] lg:h-[420px]">
        <BannerSlider />
      </section>

      <section className="home-hero pt-12 lg:pt-24">
        <div className="container">
          <div className="row flex justify-between items-center px-10 ">
            <div className="col hero-col-1">
              <h1 className="font-bold text-center  sm:text-left text-[#1B2124] text-4xl lg:text-5xl md:leading-[48px] xl:leading-[50px] leading-[1.3] mb-[6px]">
                Shaping Careers, Building Futures
              </h1>
              <p className="text-xl">
                Leading coaching institute in Purnea for IIT-JEE, NEET &
                Competitive Exams.
              </p>
              <div className="py-5 flex gap-5 hero-btns">

                <a href="course-and-fee">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Courses
                </button>
                </a>
                <a href="/contact-us">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Join Now
                </button>
                </a>

                
              </div>
            </div>
            <div className="col hero-image">
              <img src={heroImg} alt="hero-image" />
            </div>
          </div>
        </div>

        <div className="educational-res-card">
          <EducationalResource />
        </div>
      </section>

      <section className="home-cards">
        <div className="container">
          <div className="row px-10">
            <h2 className="text-4xl sm:text-left text-center">
              Courses & Programs Offered
            </h2>
            <div className="col grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center py-12  home-card ">
              <Cards />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col pt-12 md:pt-20 lg:pt-24 bg-white">
              <ImpactSection />
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission-sec py-12">
        <div className="container">
          <div className="row px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="col">
              <h2 className="text-4xl sm:text-left text-center text-white">
                Our Mission & Vision
              </h2>
              <p className="text-xl pt-6 text-white">
                Unlock your potential with expert coaching and proven learning methods. Our programs are designed to 
                strengthen concepts, boost confidence, and prepare students for competitive success. From strong 
                fundamentals to exam-ready practice, we ensure complete growth.
              </p>
              <p className="text-xl text-white mt-6">
                Whether it’s IIT-JEE, NEET, Scholarship Tests or Foundation Courses, students receive guidance, mentorship,
                 and continuous support to achieve top results. Join today.
              </p>
            </div>

            <div className="col grid gap-6 our-mission-img-col">
              <div className="row img-row grid justify-center">
                <img
                  src={offlineClass_}
                  className="our-mission-img-1"
                  alt="student-in-classroom"
                />
              </div>
              <div className="row img-row grid sm:grid-cols-2 gap-6">
                <div className="col-img-1">
                  <img
                    src={offlineClass_}
                    className="our-mission-img-2"
                    alt="student_in_class"
                  />
                </div>
                <div className="col-img-2">
                  <img
                    src={offlineClass_}
                    className="our-mission-img-3"
                    alt="student_in_classroom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="row px-10">
            <div className="col">
              <h2 className="text-4xl sm:text-left text-center">
                Educational Resources
              </h2>
              <p className="text-xl pt-6">
                A wide range of learning resources designed to enrich your
                educational experience.
              </p>
            </div>
          </div>
          <div className="row py-12 px-10">
            <div className="col">
              <div className="education-res-cards grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="/reference-books"
                  className="group relative bg-blue-50 rounded-xl p-6 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl block"
                >
                  <h3 className="text-2xl font-semibold mb-3">
                    Reference Books
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Carefully selected reference books that simplify difficult topics with examples, explanations, and practice questions, 
                    helping students build strong understanding and score better.
                  </p>

                  <img
                    src={eduRes}
                    alt="Reference Books"
                    className="w-full max-w-[220px] mx-auto transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover arrow (top right) */}
                  <div className="absolute top-6 right-6 transform translate-x-[-10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="text-2xl text-gray-700">→</span>
                  </div>

                  {/* Hover button (optional — can keep it or remove it) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-4 py-2 rounded-md mt-4 inline-block">
                    Explore
                  </div>
                </a>
                <a
                  href="#"
                  className="group relative bg-blue-50 rounded-xl p-6 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl block"
                >
                  <h3 className="text-2xl font-semibold mb-3">
                    NCERT Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Easy-to-understand NCERT solutions with step-by-step answers, clear concepts, and exam-focused explanations designed to 
                    support school learning and competitive preparation.
                  </p>

                  <img
                    src={eduRes}
                    alt="Reference Books"
                    className="w-full max-w-[220px] mx-auto transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover arrow (top right) */}
                  <div className="absolute top-6 right-6 transform translate-x-[-10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="text-2xl text-gray-700">→</span>
                  </div>

                  {/* Hover button (optional — can keep it or remove it) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-4 py-2 rounded-md mt-4 inline-block">
                    Explore
                  </div>
                </a>
                <a
                  href="#"
                  className="group relative bg-blue-50 rounded-xl p-6 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl block"
                >
                  <h3 className="text-2xl font-semibold mb-3">Notes</h3>
                  <p className="text-gray-600 mb-6">
                    Crisp, organized notes for quick revision, covering key points, formulas, and concepts, making study easier and last-minute
                     preparation highly effective.
                  </p>

                  <img
                    src={eduRes}
                    alt="Reference Books"
                    className="w-full max-w-[220px] mx-auto transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover arrow (top right) */}
                  <div className="absolute top-6 right-6 transform translate-x-[-10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="text-2xl text-gray-700">→</span>
                  </div>

                  {/* Hover button (optional — can keep it or remove it) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-4 py-2 rounded-md mt-4 inline-block">
                    Explore
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="home-star-sec">
        <div className="container">
          <div className="row ">
            <div>
              <StarsSection />
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 home-abt-us">
        <div className="container">
          <div className="row px-10 ">
            <div className="col ">
              <h2 className="text-4xl text-[#1B2124]  sm:text-left text-center font-bold">
                About Us
              </h2>
              <p className="text-xl pt-6">
                Momentum was established with the dream of making world-class education accessible to every deserving student in Bihar.
                We envision a future where every aspirant from our region can compete confidently at the national level, whether it’s the Joint Entrance Examination (JEE) for engineering or the National Eligibility cum Entrance Test (NEET) for medical careers.
                Our vision goes beyond just classroom teaching—we aim to build thinkers, innovators, and achievers who can shape the future of our nation.
              </p>
            </div>
            <div className="py-5 flex gap-5 hero-btns justify-center">

              <a href="/about-us">

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  About Us
                </button>
              </a>

            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;

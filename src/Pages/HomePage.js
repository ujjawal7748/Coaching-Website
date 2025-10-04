import React from "react";

import MainLayout from "../components/MainLayout";
import BannerSlider from "../components/BannerSlider";

const HomePage = () => {
  return (
    <MainLayout>
      {/* <section>
        <BannerSlider />
      </section> */}
      <section className="home-hero">
        <div className="container">
          <div className="row flex align-center py-12">
            <div className="col hero-col-1">
              <h1 class="font-bold text-2xl px-[50px] md:px-0 text-[#1B2124]  xl:text-[40px] md:text-[32px] md:leading-[48px] xl:leading-[50px] mb-[6px]">
                Shaping Careers, Building Futures
              </h1>
              <p>
                Leading coaching institute in Purnea for IIT-JEE, NEET &
                Competitive Exams.
              </p>
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Courses
                </button>{" "}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Join Now
                </button>
              </div>
            </div>
            <div className="col">Image</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Courses & Programs Offered</h2>
              <div className="row">
                <div className="col">
                  <div className="cards">
                    <div className="card-item">
                      <div>{/* img */}</div>
                      <div>
                        <h3>IIT-JEE Coaching</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <button className="card-btn"> Click Here</button>
                      </div>
                    </div>
                    <div className="card-item">
                      <div>{/* img */}</div>
                      <div>
                        <h3>NEET Preparation</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <button className="card-btn"> Click Here</button>
                      </div>
                    </div>
                    <div className="card-item">
                      <div>{/* img */}</div>
                      <div>
                        <h3>Foundation Courses (Class 8–10)</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <button className="card-btn"> Click Here</button>
                      </div>
                    </div>
                    <div className="card-item">
                      <div>{/* img */}</div>
                      <div>
                        <h3>Scholarship & Talent Tests</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <button className="card-btn"> Click Here</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Our Mission & Vision</h2>
              <p>
                Short introduction about the institute’s purpose: “We aim to
                provide quality coaching, experienced faculty, and a supportive
                learning environment to help students achieve their career
                goals.”
              </p>
              <p>
                Supporting statements: Focus on academic excellence, discipline,
                innovation, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;

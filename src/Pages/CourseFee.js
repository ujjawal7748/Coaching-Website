import React from "react";
import MainLayout from "../components/MainLayout";
import eduRes from "../assets/note.webp";
import Cards from "../components/Cards";
import BnrImgCrseFee from '../assets/little-girl-glasses-blue-backpack-with-oranges-created-with-generative-ai-technology.webp'
const CourseFee = () => {
  return (
    <MainLayout>
     <section className="abt-page-bnr ">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={BnrImgCrseFee} alt='course-and-fee-img' />
              </div>
            </div>
          </div>
        </section>
          <section className="py-12">
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

    </MainLayout>
  );
};

export default CourseFee;

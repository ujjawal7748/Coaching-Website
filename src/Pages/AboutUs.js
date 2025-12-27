import React from 'react'
import { Helmet } from "react-helmet-async";
import MainLayout from '../components/MainLayout'
import AboutUsImg from '../assets/little-girl-glasses-blue-backpack-with-oranges-created-with-generative-ai-technology.webp'
import heroImg from '../assets/students.png'

const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <Helmet>
  <title>About Momentum Coaching | Trusted IIT-JEE & NEET Institute in Purnea</title>

  <meta
    name="description"
    content="Learn about Momentum Coaching, a trusted IIT-JEE and NEET coaching institute in Purnea. Our mission is to empower students in Bihar with quality education, expert guidance, and disciplined learning."
    key="description"
  />
  <meta
    name="robots"
    content="index, follow"
    key="robots"
  />

  <link
    rel="canonical"
    href="https://www.momentumcoaching.com/about-us/"
  />
</Helmet>
        <section className="abt-page-bnr ">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={AboutUsImg} alt='about-us-img' />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-24">
          <div className="container">
            <div className="row px-10">
              <h1 className="font-bold text-center  sm:text-left text-[#1B2124] text-4xl lg:text-5xl md:leading-[48px] xl:leading-[50px] leading-[1.3] mb-[6px]">
                About Momentum
              </h1>
              <h2>– Shaping the Future of Aspirants in Bihar</h2>
              <p className="font-normal">
                At Momentum, we believe that success in competitive exams like JEE and NEET is not just about hard work—it’s about the right guidance, strategy, and environment.
                Founded with the vision of delivering quality education in Bihar, Momentum has emerged as one of the most trusted names in offline coaching for JEE and NEET aspirants. Our mission is simple: to empower students with the knowledge, confidence, and discipline they need to achieve their dreams.
              </p>
            </div>
          </div>
        </section>

        <section className="abt-us-2 py-12 lg:py-24">
          <div className="container">
            <div className="row grid grid-cols-1 gap-10 lg:grid-cols-2 px-10">

              <div className="col hero-image">
                <img src={heroImg} alt="hero-image" className='md:w-[100%]'/>
              </div>

              <div className="col hero-col-1 ">
                <h2 className="text-4xl text-[#1B2124]  sm:text-left text-center font-bold">
                  Join Momentum – Begin Your Journey to Success
                </h2>
                <p className="text-xl  md:leading-[1.5] xl:leading-[1.5] leading-[1.3] py-5">
                  Whether you dream of becoming an engineer, a doctor, or a researcher, Momentum is here to guide you every step of the way.
                  With the right mix of dedication, expert mentorship, and proven strategies, your dream career is within reach.

                  Join the best JEE and NEET coaching institute in Bihar today and take the first step toward your success story.
                </p>
                <div className="py-5 flex gap-5 abt-us-btns grid grid-cols-1 md:grid-cols-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Explore Courses
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Join Now
                  </button>
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
                  Our Vision
                </h2>
                <p className="text-xl pt-6">
                  Momentum was established with the dream of making world-class education accessible to every deserving student in Bihar.
                  We envision a future where every aspirant from our region can compete confidently at the national level, whether it’s the Joint Entrance Examination (JEE) for engineering or the National Eligibility cum Entrance Test (NEET) for medical careers.

                  Our vision goes beyond just classroom teaching—we aim to build thinkers, innovators, and achievers who can shape the future of our nation.
                </p>
              </div>
            </div>
            {/* <div className="row py-12  lg:px-5 md:px-5 xs:px-5 px-5">
              <div className="col  lg:px-5 md:px-5 xs:px-5 px-5">

              </div>
            </div> */}
          </div>
        </section>

      </MainLayout>
    </>
  )
}

export default AboutUs
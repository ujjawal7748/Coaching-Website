import React from "react";
import MainLayout from "../components/MainLayout";
import eduRes from "../assets/note.webp";
const ContactUs = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Contact Us
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 conact-us-teams">
        <div className="container">
          <div className="row px-10 conact-us-teams-row1">
            <div className="col">
              <h2 className="text-4xl sm:text-left text-center font-semibold text-center">
                Our Team
              </h2>
              <p className="text-xl pt-6 text-gray-700 text-center sm:text-left">
                Meet the dedicated educators and mentors behind Momentum — guiding
                JEE & NEET aspirants with experience, passion, and personal attention.
              </p>
            </div>
          </div>

          <div className="row py-12 px-10">
            <div className="col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* Team Member 1 */}
                <div className="group relative bg-blue-50 rounded-xl p-6 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl">
                  <img
                    src={eduRes}
                    alt="Team Member"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-2xl font-semibold text-center mb-1">
                    Rajesh Kumar
                  </h3>
                  <p className="text-center text-blue-600 font-medium mb-2">
                    Physics Faculty
                  </p>
                  <p className="text-gray-600 text-center">
                    10+ years of experience teaching Physics for JEE & NEET aspirants.
                  </p>
                </div>

                {/* Team Member 2 */}
                <div className="group relative bg-blue-50 rounded-xl p-6 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl">
                  <img
                    src={eduRes}
                    alt="Team Member"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-2xl font-semibold text-center mb-1">
                    Sneha Verma
                  </h3>
                  <p className="text-center text-blue-600 font-medium mb-2">
                    Chemistry Faculty
                  </p>
                  <p className="text-gray-600 text-center">
                    Expert in Organic Chemistry with a passion for simplifying concepts.
                  </p>
                </div>

                {/* Team Member 3 */}
                <div className="group relative bg-blue-50 rounded-xl p-6 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl">
                  <img
                    src={eduRes}
                    alt="Team Member"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-2xl font-semibold text-center mb-1">
                    Arjun Singh
                  </h3>
                  <p className="text-center text-blue-600 font-medium mb-2">
                    Mathematics Faculty
                  </p>
                  <p className="text-gray-600 text-center">
                    Known for conceptual clarity and strong problem-solving approach.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </MainLayout>
  );
};

export default ContactUs;

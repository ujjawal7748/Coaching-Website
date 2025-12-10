import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import eduRes from "../assets/note.webp";

const ContactUs = () => {
  const [currentTime] = useState(new Date().toLocaleString());
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "d59bc541-0d68-4a35-ab7e-29ab9a4c9615");

    try {
      // 1️⃣ Send to Web3Forms
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // 2️⃣ Send to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbxwF3-Jj4UrrtHUWDNrdo_whPi7BjcnK-e1u2BOsVGrVSlwq7NM_uFxtiRZKYZ437Dv/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      e.target.reset();
      navigate("/thank-you"); // ⬅️ Redirect after success

    } catch (error) {
      alert("Error submitting form. Try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <MainLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

              <h1 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                Contact Us
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

                <input type="hidden" name="time" value={currentTime} />

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUs;

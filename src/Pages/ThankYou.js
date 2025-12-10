import React from "react";
import MainLayout from "../components/MainLayout";

const ThankYou = () => {
  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-[70vh] bg-blue-600">
        <div className="bg-blue-500/80 p-10 rounded-2xl shadow-lg text-center max-w-md">
          <h1 className="text-5xl font-extrabold mb-4 text-white">Thank You!</h1>
          <p className="text-lg text-white mb-6">
            Your submission has been successfully received.
          </p>
          <p className="text-white/90">
            We will get back to you shortly.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default ThankYou;

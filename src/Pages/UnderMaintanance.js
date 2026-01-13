import React from "react";
import MainLayout from "../components/MainLayout";

const UnderMaintanance = () => {
  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 px-4">
  <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl text-center max-w-md w-full">
    
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
      Thank You!
    </h1>

    <p className="text-lg text-white/90 mb-4">
      Our website is currently under maintenance.
    </p>

    <p className="text-sm text-white/80">
      Please check back later for updates.
    </p>

    <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-white/40" />
  </div>
</section>

    </MainLayout>
  );
};

export default UnderMaintanance;
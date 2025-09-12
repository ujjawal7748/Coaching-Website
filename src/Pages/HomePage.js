import React from "react";
import MainLayout from "../components/MainLayout";
import CoursesSection from "../components/CoursesSection";
import HomeBanner from "../components/HomeBanner";
import AchievementsSection from "../components/AchievementSection";
import StarsSection from "../components/StarsSection";
import AchievementNumber from "../components/AchievementNumber";
import BlogArchive from "../components/BlogArchive";


const HomePage = () => {
  return (
    <MainLayout>
      <HomeBanner />
      <CoursesSection />
      <AchievementsSection />
      <StarsSection />
      <AchievementNumber />
      <BlogArchive />
    </MainLayout>
  );
};

export default HomePage;

import AboutSection from "@/components/ui/HomePage/AboutSection";
import HeroSection from "@/components/ui/HomePage/HeroSection";
import RecentLostItemPosts from "@/components/ui/HomePage/RecentLostItems";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RecentLostItemPosts />
    </>
  );
};

export default page;

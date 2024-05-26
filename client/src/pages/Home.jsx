import React from "react";
import HomeNav from "../components/HomeNav";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HousesSection from "../components/HousesSection";
export default function Home() {
  return (
    <>
      <HomeNav />
      <HeroSection />
      <AboutSection />
      <HousesSection />
    </>
  );
}

import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import SecondSection from "../components/HomePage/SecondSection";
import ThirdSection from "../components/HomePage/ThirdSection";
import FourSection from "../components/HomePage/FourSection";
import FiveSection from "../components/HomePage/FiveSection";
import SixSection from "../components/HomePage/SixSection";
import SevenSection from "../components/HomePage/SevenSection";
import EightSection from "../components/HomePage/EeightSection";
import NineSec from "../components/HomePage/NineSec";

const Home = () => {
  return (
    <div className="mt-3">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <SixSection />
      <SevenSection />
      <EightSection />
      <NineSec />
    </div>
  );
};

export default Home;

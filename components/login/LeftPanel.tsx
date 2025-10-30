import React from "react";
import AnimatedFeatures from "./AnimatedFeatures";
import Testimonials from "./Testimonials";

const LeftLoginPanel: React.FC = () => {
  return (
    <div
      className="hidden lg:flex lg:w-1/2 py-10 flex-col justify-between 
                 bg-[#0073F2] text-white
                 bg-[url('/wave-background.png')] bg-no-repeat bg-center bg-cover"
    >
      <AnimatedFeatures />
      <Testimonials />
    </div>
  );
};

export default LeftLoginPanel;

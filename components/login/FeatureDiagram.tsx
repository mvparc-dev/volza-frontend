import React from "react";

// --- Type Definition ---
interface FeatureItemProps {
  text: string;
}

// --- Feature Item Component (Branch + Button) ---
// This component now only manages its own horizontal branch, dot, and the button.
const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="relative pl-12">
    {/* 1. Horizontal Dashed Branch Line */}
    <div className="absolute left-0 top-1/2 w-12 h-px border-t border-dashed border-white/50"></div>

    {/* 3. The Feature Button */}
    <div className="bg-white text-[#0073F2] font-semibold px-5 py-3 rounded-xl shadow-lg w-80 h-12 flex flex-col justify-center items-center">
      <span className="leading-tight">{text}</span>
    </div>
  </div>
);

const FeatureDiagram: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-20">
      {/* LEFT NODE: Glassmorphism Card */}
      <div className="w-60 bg-[#E8E8E8] h-46 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col justify-between">
        {/* Placeholder content mimicking the image */}
        <div className="w-full h-8 mb-3 bg-white rounded-lg"></div>
        <div className="w-full h-8 mb-10 bg-white rounded-lg"></div>
      </div>

      {/* RIGHT STACK: Vertical Spine & Buttons */}
      <div className="relative">
        {/* Central Horizontal "Trunk" Line */}

        <div className="absolute top-1/2 right-full w-20 h-px border-t border-dashed border-white/50"></div>

        {/* The Vertical Spine */}

        <div className="absolute left-0 top-8 bottom-8 w-px border-l border-dashed border-white/50"></div>

        {/* Feature Items List */}
        <div className="flex flex-col space-y-5">
          <FeatureItem text={"Discover New Buyers Instantly"} />
          <FeatureItem text={"Source Reliable Suppliers"} />
          <FeatureItem text={"Explore Insights By Product"} />
          <FeatureItem text={"Analyze Companies"} />
        </div>
      </div>
    </div>
  );
};

export default FeatureDiagram;

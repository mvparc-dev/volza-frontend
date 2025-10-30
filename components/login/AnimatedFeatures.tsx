import React from "react";
import FeatureDiagram from "./FeatureDiagram";

const AnimatedFeatures: React.FC = () => {
  return (
    <>
      {/* Top Section: Headline */}
      <h3 className="mt-16 text-2xl flex items-center w-full justify-center font-bold leading-tight text-white tracking-wide text-center">
        Choose the Largest & Most Trusted <br /> Export-Import Trade Data
        Platform - <br /> No Risks, No Regrets.
      </h3>

      <FeatureDiagram />
    </>
  );
};

export default AnimatedFeatures;

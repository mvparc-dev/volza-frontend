// /components/dashboard/WelcomeBanner.tsx

import React from "react";

// A simple crown SVG for the upgrade button
const CrownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00014 2.92188C6.92466 2.92182 6.85046 2.94129 6.78473 2.97839C6.71901 3.0155 6.664 3.06897 6.62505 3.13363L4.75139 6.24687L1.98814 4.45079C1.91747 4.40494 1.83507 4.38046 1.75083 4.3803C1.66659 4.38014 1.5841 4.40431 1.51326 4.44989C1.44242 4.49548 1.38624 4.56054 1.35148 4.63727C1.31672 4.71401 1.30485 4.79914 1.3173 4.88246L2.1923 10.7158C2.20782 10.8195 2.26005 10.9141 2.33949 10.9826C2.41893 11.051 2.5203 11.0886 2.62514 11.0885H11.3751C11.48 11.0886 11.5813 11.051 11.6608 10.9826C11.7402 10.9141 11.7925 10.8195 11.808 10.7158L12.683 4.88246C12.6954 4.79914 12.6836 4.71401 12.6488 4.63727C12.614 4.56054 12.5579 4.49548 12.487 4.44989C12.4162 4.40431 12.3337 4.38014 12.2494 4.3803C12.1652 4.38046 12.0828 4.40494 12.0121 4.45079L9.24889 6.24687L7.37522 3.13421C7.33635 3.06945 7.28137 3.01586 7.21564 2.97865C7.14991 2.94144 7.07567 2.92188 7.00014 2.92188Z"
      fill="#FFB700"
    />
  </svg>
);

interface WelcomeBannerProps {
  userName: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName }) => {
  return (
    <div className="rounded-xl flex justify-between items-center">
      {/* Welcome Message */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome back, {userName}!
      </h1>

      {/* Upgrade Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-blue-600">7 Days left</span>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
          <CrownIcon />
          Upgrade now
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;

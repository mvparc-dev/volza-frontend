// /components/dashboard/CtaCard.tsx

import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline"; // Using the outline version

// Data structures (can be moved to a types file if needed)
type Stat = {
  value: string;
  label: string;
};

type Feature = {
  id: number;
  name: string;
};

// --- DUMMY DATA ---
const stats: Stat[] = [
  { value: "100M+", label: "Shipment Records" },
  { value: "150+", label: "Countries Covered" },
  { value: "50K+", label: "Active Users" },
  { value: "209+", label: "Databases" },
];

const upgradeFeatures: Feature[] = [
  { id: 1, name: "Databases Feature" },
  { id: 2, name: "Databases Feature" },
  { id: 3, name: "Databases Feature" },
  { id: 4, name: "Databases Feature" },
  { id: 5, name: "Databases Feature" },
  { id: 6, name: "Databases Feature" },
];

const CtaCard: React.FC = () => {
  return (
    // FIX 1: Using the correct subtle gradient background
    <div className="bg-gradient-to-r from-[#E8F3FF] to-[#FFF5EA] rounded-2xl p-8 grid lg:grid-cols-3 gap-12 items-center">
      {/* Left Section (2/3 width) */}
      {/* FIX 2: Ensured all content here is center-aligned */}
      <div className="lg:col-span-2 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to unlock global trade opportunities?
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Join thousands of businesses using Volza to discover new markets, find
          reliable partners, and make data-driven trade decisions with our
          comprehensive intelligence platform.
        </p>

        {/* Stats Section - Increased top margin for better spacing */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (1/3 width) */}
      {/* FIX 3: Increased rounding and shadow for a softer, more elevated look */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl h-full flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          Upgrade Now
        </h3>

        <ul className="my-8 grid grid-cols-2 gap-x-6 gap-y-4 flex-grow">
          {upgradeFeatures.map((feature) => (
            <li key={feature.id} className="flex items-center gap-2 text-sm">
              <CheckCircleIcon className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">{feature.name}</span>
            </li>
          ))}
        </ul>

        {/* FIX 4: Adjusted button color and style to be more vibrant */}
        <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-blue-500/30 shadow-lg">
          View Plans
        </button>
      </div>
    </div>
  );
};

export default CtaCard;

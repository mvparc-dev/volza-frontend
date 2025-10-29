// /components/dashboard/SearchSection.tsx

"use client";

import React, { useState } from "react";
import ActionCard from "./ActionCard";

// Define the type for the card data
type CardDataItem = {
  type: "buyers" | "suppliers" | "product" | "company" | "contacts";
  title: string;
  description: string;
  anchorUrl: string;
};

// Data for the action cards is now managed within this component
const cardData: CardDataItem[] = [
  {
    type: "buyers",
    title: "Find Buyers",
    description: "Connect with verified buyers to grow your export business.",
    anchorUrl: "/find-buyers",
  },
  {
    type: "suppliers",
    title: "Find Suppliers",
    description: "Discover trusted suppliers to strengthen your supply chain.",
    anchorUrl: "/find-suppliers",
  },
  {
    type: "product",
    title: "Product Search",
    description: "Uncover global trends and demand for your products.",
    anchorUrl: "/product-search",
  },
  {
    type: "company",
    title: "Company Search",
    description: "Analyze any company's trade activity and shipments.",
    anchorUrl: "/company-search",
  },
  {
    type: "contacts",
    title: "Find Key Contacts",
    description: "Reach decision-makers faster for meaningful opportunities.",
    anchorUrl: "/find-contacts",
  },
];

const SearchSection: React.FC = () => {
  const [searchType, setSearchType] = useState<"guided" | "advanced">("guided");

  return (
    // --- FIX IS HERE ---
    // The main container now uses the 'style' prop to apply multiple backgrounds.
    // The image URL is listed first, so it renders on top of the gradient.
    <div
      className="relative px-6 py-6 rounded-xl overflow-hidden"
      style={{
        backgroundImage:
          "url(/wave-background.png), linear-gradient(180deg, #FFFFFF 0%, #CFE5FF 100%)",
        backgroundSize: "cover, auto",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, repeat",
      }}
    >
      {/* Content for the search section */}
      <div className="relative z-10">
        <div className=" mx-auto">
          <div className="relative w-full mb-6">
            <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center w-full">
              What would you like to do today?
            </h1>
            <div className="absolute right-0 top-[26%] -translate-y-1/2 text-right text-sm text-gray-600">
              <span>Data Updated: July 20, 2025</span>
            </div>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="bg-white p-1 rounded-lg shadow-sm flex items-center space-x-2">
              <button
                onClick={() => setSearchType("guided")}
                className={`px-6 py-2 font-semibold text-sm transition-all duration-200 rounded-md ${
                  searchType === "guided"
                    ? "bg-white text-blue-600 border-2 border-blue-500"
                    : "text-gray-500 border-2 border-transparent hover:text-gray-800"
                }`}
              >
                Guided Search
              </button>
              <button
                onClick={() => setSearchType("advanced")}
                className={`px-6 py-2 font-semibold text-sm transition-all duration-200 rounded-md ${
                  searchType === "advanced"
                    ? "bg-white text-blue-600 border-2 border-blue-500"
                    : "text-gray-500 border-2 border-transparent hover:text-gray-800"
                }`}
              >
                Advanced Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cardData.map((card) => (
            <ActionCard
              key={card.type}
              type={card.type}
              title={card.title}
              description={card.description}
              anchorUrl={card.anchorUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

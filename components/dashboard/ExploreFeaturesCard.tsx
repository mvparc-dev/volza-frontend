// /components/dashboard/ExploreFeaturesCard.tsx

import React from "react";
import DashboardCard from "../../app/(auth)/dashboard/shared/DashboardCard";
import { Feature } from "../../types/dashboard/types";
import { ArrowRight2 } from "iconsax-reactjs";

interface ExploreFeaturesCardProps {
  features: Feature[];
  autoHeight?: boolean;
}

const ExploreFeaturesCard: React.FC<ExploreFeaturesCardProps> = ({
  features,
  autoHeight,
}) => {
  return (
    <DashboardCard
      title="Explore more of our features"
      subtitle="Discover powerful tools designed to unlock new opportunities."
      autoHeight={autoHeight}
    >
      {/* --- RESPONSIVE FIX FOR 1024px STARTS HERE --- */}
      {/*
        - `grid-cols-1`: Default single column for mobile.
        - `lg:grid-cols-2`: Switches to two columns ONLY on large screens (1024px and up).
          This gives tablets and smaller laptops the safer single-column layout, preventing overflow.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        {features.slice(0, 4).map((feature) => (
          <a
            href={feature.url}
            key={feature.id}
            className="flex items-start justify-between p-4 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            {/*
              - Added `min-w-0` as a robust fix to ensure the text container can shrink and
                wrap its content correctly without pushing the icon out.
            */}
            <div className="flex-1 pr-4 min-w-0">
              <h3 className="font-bold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {feature.description}
              </p>
            </div>
            <ArrowRight2
              size="20"
              className="text-gray-400 shrink-0 group-hover:text-gray-600 transition-colors"
            />
          </a>
        ))}
      </div>
    </DashboardCard>
  );
};

export default ExploreFeaturesCard;

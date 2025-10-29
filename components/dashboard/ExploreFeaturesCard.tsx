// /components/dashboard/ExploreFeaturesCard.tsx

import React from "react";
import DashboardCard from "../../app/(auth)/dashboard/shared/DashboardCard";
import { Feature } from "../../types/dashboard/types";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

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
      <div className="grid grid-cols-2 gap-4 h-full">
        {features.slice(0, 4).map((feature) => (
          <a
            href={feature.url}
            key={feature.id}
            className="flex items-start justify-between p-4 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex-1 pr-4">
              <h3 className="font-bold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {feature.description}
              </p>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400 shrink-0" />
          </a>
        ))}
      </div>
    </DashboardCard>
  );
};

export default ExploreFeaturesCard;

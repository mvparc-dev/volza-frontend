// /components/dashboard/ActivitiesCard.tsx

import React from "react";
import Image from "next/image"; // 1. Import the Next.js Image component

import workspaceIllustration from "../../public/PCNotFound.png";

// Define a type for a single activity item for future implementation
export type ActivityItem = {
  id: number;
  description: string;
  timestamp: string;
};

interface ActivitiesCardProps {
  activities: ActivityItem[];
}

const ActivitiesCard: React.FC<ActivitiesCardProps> = ({ activities }) => {
  const hasActivities = activities.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col min-h-[300px]">
      {/* Card Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800">Activities</h2>
        <p className="text-sm text-gray-500 mt-1">
          Track recent actions, changes, and updates across saved items.
        </p>
      </div>

      {/* Card Body */}
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {hasActivities ? (
          <div>
            <p>Your activities will appear here.</p>
          </div>
        ) : (
          // Empty State Content
          <div>
            <Image
              src={workspaceIllustration}
              alt="Empty workspace illustration"
              width={140} // Set a fixed width that matches the design
              height={140} // Set a fixed height that matches the design
              className="mx-auto" // Center horizontally and add margin-bottom
              priority // Add priority if it's an above-the-fold image
            />
            <p className="text-sm text-gray-600 mt-2 max-w-xs mx-auto">
              No activity yet - start a search or save an item to see updates
              here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesCard;

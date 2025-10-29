// /components/dashboard/ProfileCompletionCard.tsx

import React from "react";
import DashboardCard from "../../app/(auth)/dashboard/shared/DashboardCard";
import { ProfileTask } from "../../types/dashboard/types";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";

interface ProfileCompletionCardProps {
  tasks: ProfileTask[];
  completionPercentage: number;
  autoHeight?: boolean;
}

const ProfileCompletionCard: React.FC<ProfileCompletionCardProps> = ({
  tasks,
  completionPercentage,
  autoHeight,
}) => {
  const badge = (
    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
      {completionPercentage}% Completed
    </span>
  );

  return (
    <DashboardCard
      title="Complete your profile"
      subtitle="Get personalized market insights by updating your profile."
      headerContent={badge}
      autoHeight={autoHeight}
    >
      {/* This parent div organizes the content vertically */}
      <div className="flex flex-col h-full">
        {/* Progress Bar section remains at the top */}
        <div className="mb-4">
          <div className="flex items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600 shrink-0">
              1/8
            </span>
          </div>
        </div>

        {/* 
          - flex-grow: The list takes up all available vertical space.
          - flex-col: Stacks items vertically.
          - space-y-3: Adds a consistent margin between items.
        */}
        <ul className="flex-grow flex flex-col space-y-3">
          {tasks.slice(0, 3).map((task) => (
            // KEY CHANGE: flex-grow on the LI makes each item expand equally.
            <li key={task.id} className="flex-grow flex">
              <a
                href="#"
                className="w-full h-full flex items-center justify-between p-4 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      task.isCompleted
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {task.step}
                  </div>
                  <span className="font-medium text-gray-700">
                    {task.description}
                  </span>
                  <div className="flex items-center gap-1 text-blue-500">
                    <SparklesIcon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{task.points}</span>
                  </div>
                </div>
                {task.isCompleted ? (
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
};

export default ProfileCompletionCard;

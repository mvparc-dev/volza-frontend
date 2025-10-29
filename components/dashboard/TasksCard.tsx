// /components/dashboard/TasksCard.tsx

import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // 1. Import the Next.js Image component
import workspaceIllustration from "../../public/PCNotFound.png";

// Define a type for a single task item for future implementation
export type TaskItem = {
  id: number;
  description: string;
};

interface TasksCardProps {
  tasks: TaskItem[];
}

const TasksCard: React.FC<TasksCardProps> = ({ tasks }) => {
  const hasTasks = tasks.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col min-h-[300px]">
      {/* Card Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800">Tasks</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage your and your team's task items to stay coordinated and on
          track.
        </p>
      </div>

      {/* Card Body */}
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {hasTasks ? (
          <div>
            <p>Your tasks will appear here.</p>
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
            <p className="text-sm text-gray-600 mb-6 max-w-xs mx-auto">
              Easily add team members to collaborate and share trade insights
              seamlessly.
            </p>
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-100 text-blue-600 hover:bg-blue-200 font-semibold text-sm rounded-lg transition-colors">
              <PlusIcon className="w-5 h-5" />
              Create Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksCard;

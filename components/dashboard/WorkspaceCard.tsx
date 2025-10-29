// /components/dashboard/WorkspaceCard.tsx

import React from "react";
import Image from "next/image"; // 1. Import the Next.js Image component
import { PlusIcon } from "@heroicons/react/24/solid";

// 2. Import your image file. Make sure the path is correct relative to this component.
// For this example, we assume it's in a public folder.
import workspaceIllustration from "../../public/folderNotFound.png";

// Define the shape of a single workspace item for future use
export type WorkspaceItem = {
  id: number;
  name: string;
  lastEdited: string;
};

interface WorkspaceCardProps {
  workspaces: WorkspaceItem[];
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspaces }) => {
  const hasWorkspaces = workspaces.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col min-h-[300px]">
      {/* Card Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800">Workspace</h2>
        <p className="text-sm text-gray-500 mt-1">
          Quickly access and continue your recent workspaces
        </p>
      </div>

      {/* Card Body: Grows to fill space, centers content perfectly */}
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {hasWorkspaces ? (
          <div>
            <p>Your workspaces will appear here.</p>
          </div>
        ) : (
          // Empty State Content
          <div>
            {/* 3. Replace <img> with the Next.js <Image> component */}
            <Image
              src={workspaceIllustration}
              alt="Empty workspace illustration"
              width={140} // Set a fixed width that matches the design
              height={140} // Set a fixed height that matches the design
              className="mx-auto" // Center horizontally and add margin-bottom
              priority // Add priority if it's an above-the-fold image
            />
            <p className="text-sm text-gray-600 mb-6  mx-auto">
              Create your first workspace to organize searches, save insights
              and track progress.
            </p>
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-100 text-blue-600 hover:bg-blue-200 font-semibold text-sm rounded-lg transition-colors">
              <PlusIcon className="w-5 h-5" />
              Create Workspace
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspaceCard;

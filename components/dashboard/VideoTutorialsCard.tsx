// /components/dashboard/VideoTutorialsCard.tsx

import React, { useState } from "react";
import { VideoTutorial } from "../../types/dashboard/types";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import DashboardCard from "../../app/(auth)/dashboard/shared/DashboardCard";
import TabSelector, { Tab } from "../../app/(auth)/shared/TabSelector";

interface VideoTutorialsCardProps {
  tutorials: VideoTutorial[];
  autoHeight?: boolean;
}

const videoTabs: Tab[] = [
  { label: "Title 1", value: "Title 1" },
  { label: "Title 2", value: "Title 2" },
  { label: "Title 3", value: "Title 3" },
];

const VideoTutorialsCard: React.FC<VideoTutorialsCardProps> = ({
  tutorials,
  autoHeight,
}) => {
  const [activeCategory, setActiveCategory] = useState("Title 1");

  const filteredTutorials = tutorials.filter(
    (t) => t.category === activeCategory
  );

  return (
    <DashboardCard
      title="Video Tutorials"
      subtitle="Learn key features quickly with easy-to-follow, step-by-step videos."
      viewAllUrl="#"
      autoHeight={autoHeight}
    >
      <div className="flex flex-col h-full">
        <TabSelector
          tabs={videoTabs}
          activeTab={activeCategory}
          onTabChange={setActiveCategory}
          fullWidth={true}
        />

        <ul className="space-y-6 mt-2">
          {filteredTutorials.slice(0, 3).map((tutorial) => (
            <li key={tutorial.id}>
              <a
                href={tutorial.videoUrl}
                className="flex items-start gap-4 group"
              >
                {/* --- FIX IS HERE --- */}
                {/* Removed background colors, now uses only a border */}
                <div className="w-28 h-20 border border-gray-200 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gray-50 transition-colors">
                  <PlayCircleIcon className="w-10 h-10 text-gray-300 group-hover:text-gray-400 transition-colors" />
                </div>
                <div className="flex-1 pt-1 min-w-0">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                    {tutorial.heading}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed break-words">
                    {tutorial.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
};

export default VideoTutorialsCard;

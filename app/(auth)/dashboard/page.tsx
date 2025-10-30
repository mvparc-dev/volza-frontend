// /components/dashboard/DashboardPage.tsx

"use client";

import React from "react";
import SearchSection from "../../../components/dashboard/SearchSection"; // <-- Import the new component
import ProfileCompletionCard from "../../../components/dashboard/ProfileCompletionCard";
import ExploreFeaturesCard from "../../../components/dashboard/ExploreFeaturesCard";
import WorkspaceCard, {
  WorkspaceItem,
} from "../../../components/dashboard/WorkspaceCard";
import TasksCard, { TaskItem } from "../../../components/dashboard/TasksCard";
import ActivitiesCard, {
  ActivityItem,
} from "../../../components/dashboard/ActivitiesCard";
import {
  VideoTutorial,
  NotificationItem,
} from "../../../types/dashboard/types";
import VideoTutorialsCard from "../../../components/dashboard/VideoTutorialsCard";
import NotificationsCard from "../../../components/dashboard/NotificationsCard";
import CtaCard from "../../../components/dashboard/CtaCard";
import WelcomeBanner from "../../../components/dashboard/WelcomeBanner";

// --- TYPE DEFINITIONS ---
// CardDataItem is no longer needed here as it's moved to SearchSection.tsx

// For the "Complete your profile" card
export type ProfileTask = {
  id: number;
  step: number;
  description: string;
  points: number;
  isCompleted: boolean;
};

// For the "Explore more of our features" card
export type Feature = {
  id: number;
  title: string;
  description: string;
  url: string;
};

// --- DUMMY DATA ---
// cardData has been moved to SearchSection.tsx

const videoTutorialsData: VideoTutorial[] = [
  {
    id: 1,
    category: "Title 1",
    heading: "Heading",
    description:
      "Lorem ipsum dolor sit amet consectetur. A ultrices morbi a id non justo tempus dui vitae.",
    videoUrl: "#",
  },
  {
    id: 2,
    category: "Title 1",
    heading: "Heading",
    description:
      "Morbi vitae amet at aliquam magnis magna dapibus sodales odio.",
    videoUrl: "#",
  },
  {
    id: 3,
    category: "Title 1",
    heading: "Heading",
    description: "A ultrices morbi a id non justo tempus dui vitae.",
    videoUrl: "#",
  },
  {
    id: 4,
    category: "Title 2",
    heading: "Another Topic",
    description: "This video is for Title 2.",
    videoUrl: "#",
  },
];

const notificationsData: NotificationItem[] = [
  {
    id: 1,
    type: "database",
    title: "Mahindra Industries",
    description:
      "Our trade data has just been refreshed with the latest import-export records.",
    date: "Assigned on - 22 July '25",
  },
  {
    id: 2,
    type: "database",
    title: "Global Exports LLC",
    description: "Their latest shipment data is now available for review.",
    date: "Assigned on - 21 July '25",
  },
  {
    id: 3,
    type: "release",
    title: "Version 2.5 Released",
    description: "New features include advanced filtering and persona views.",
    date: "Released on - 20 July '25",
  },
];

const profileTasksData: ProfileTask[] = [
  {
    id: 1,
    step: 1,
    description: "Add your company name",
    points: 10,
    isCompleted: true,
  },
  {
    id: 2,
    step: 2,
    description: "Add your phone number",
    points: 10,
    isCompleted: false,
  },
  {
    id: 3,
    step: 3,
    description: "Verify your email address",
    points: 10,
    isCompleted: false,
  },
];

const exploreFeaturesData: Feature[] = [
  {
    id: 1,
    title: "Compare & Persona View",
    description:
      "Spot opportunities — compare companies and unlock persona-based views to understand buyers, competitors, and suppliers better.",
    url: "#",
  },
  {
    id: 2,
    title: "Create Watch List",
    description:
      "Stay updated — get instant alerts when shipments, buyers, or products matching your interests appear in the market.",
    url: "#",
  },
  {
    id: 3,
    title: "Trending Product/Companies",
    description:
      "Track market buzz — discover trending products and companies to identify growth opportunities faster.",
    url: "#",
  },
];
const workspaceData: WorkspaceItem[] = [];
const tasksData: TaskItem[] = [];
const activitiesData: ActivityItem[] = [];

// --- COMPONENT ---
const DashboardPage: React.FC = () => {
  // The searchType state has been moved to SearchSection.tsx

  return (
    // Restored the exact wrapper divs as requested
    <div className="flex-1 p-2 sm:p-4 mb-[120px] bg-[#F8FAFA] min-h-screen font-figtree">
      <div className="p-2 sm:p-4 space-y-4 sm:space-y-6">
        <WelcomeBanner userName="Aniket" />

        {/* Section 1: "What would you like to do today?" - NOW A SEPARATE COMPONENT */}
        <SearchSection />

        {/* Section 2: Profile Completion and Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          <ProfileCompletionCard
            tasks={profileTasksData}
            completionPercentage={33}
            autoHeight={true}
          />
          <ExploreFeaturesCard
            features={exploreFeaturesData}
            autoHeight={true}
          />
        </div>

        {/* Section 3: Workspace Card (Full Width) */}
        <div>
          <WorkspaceCard workspaces={workspaceData} />
        </div>

        {/* Section 4: Tasks and Activities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          <TasksCard tasks={tasksData} />
          <ActivitiesCard activities={activitiesData} />
        </div>

        {/* Section 5: Video Tutorials and Notifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          <VideoTutorialsCard
            tutorials={videoTutorialsData}
            autoHeight={true}
          />
          <NotificationsCard
            notifications={notificationsData}
            autoHeight={true}
          />
        </div>

        {/* Section 6: CTA Card */}
        <div>
          <CtaCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

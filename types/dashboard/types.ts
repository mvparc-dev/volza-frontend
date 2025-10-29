// /components/dashboard/types.ts (or inside DashboardPage.tsx)

export type ProfileTask = {
  id: number;
  step: number;
  description: string;
  points: number;
  isCompleted: boolean;
};

export type Feature = {
  id: number;
  title: string;
  description: string;
  url: string;
};

// Add these to your types definitions (e.g., in DashboardPage.tsx or a types file)

export type VideoTutorial = {
  id: number;
  category: string; // "Title 1", "Title 2", etc.
  heading: string;
  description: string;
  videoUrl: string;
};

export type NotificationItem = {
  id: number;
  type: "database" | "release";
  title: string;
  description: string;
  date: string;
};

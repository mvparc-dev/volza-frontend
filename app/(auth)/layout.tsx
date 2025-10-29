// /app/(auth)/layout.tsx (or wherever your AuthLayout file is)

"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import SideNavBar from "../../components/common/navbar/SideNavBar"; // Adjust path if needed
import TopNavBar from "../../components/common/navbar/TopNavBar"; // Adjust path if needed

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100 font-figtree">
        {/* 1. Static Side Navigation Bar */}
        <SideNavBar />

        {/* 2. Main Content Area */}
        <main className="flex-1 ml-20 flex flex-col overflow-y-hidden">
          {/* Top Navigation Bar (Sticks to the top of the main area) */}
          <TopNavBar />

          {/* 
            Page Content (your DashboardPage, etc.) 
            - Rendered inside a padded container.
          */}
          <div className="">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

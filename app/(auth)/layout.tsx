// /app/(auth)/layout.tsx (or wherever your AuthLayout file is)

"use client";

import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import SideNavBar from "../../components/common/navbar/SideNavBar"; // Adjust path if needed
import TopNavBar from "../../components/common/navbar/TopNavBar"; // Adjust path if needed

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close drawer on resize to md+
  useEffect(() => {
    const handler = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100 font-figtree">
        {/* Sidebar - mobile drawer + desktop static */}
        <SideNavBar mobileOpen={mobileOpen} />

        {/* 2. Main Content Area */}
        <main className="flex-1 ml-0  flex flex-col overflow-y-hidden">
          {/* Top Navigation Bar */}
          <TopNavBar onMenuClick={() => setMobileOpen(true)} />

          {/* 
            Page Content (your DashboardPage, etc.) 
            - Rendered inside a padded container.
          */}
          <div className="">{children}</div>
        </main>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-30"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}

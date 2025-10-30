"use client";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

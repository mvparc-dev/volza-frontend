"use client";

import PublicRoute from "@/components/auth/PublicRoute";

export default function PublicLayout({ children }) {
  return (
    <PublicRoute>
      {children}
    </PublicRoute>
  );
}

"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function AuthLayout({ children }) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}

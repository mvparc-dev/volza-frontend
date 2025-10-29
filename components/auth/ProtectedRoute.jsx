'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      return;
    }

    const checkAuth = () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log('ProtectedRoute: Checking token:', token);
        console.log('ProtectedRoute: Current URL:', window.location.pathname);
        console.log('ProtectedRoute: All localStorage keys:', Object.keys(localStorage));
        
        // For now, let's be more permissive and check if ANY token exists
        if (token && token.length > 0) {
          setIsAuthenticated(true);
          console.log('ProtectedRoute: User authenticated with token:', token);
        } else {
          setIsAuthenticated(false);
          console.log('ProtectedRoute: No token found');
        }
      } catch (error) {
        console.error('ProtectedRoute: Auth check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Check immediately and also after a delay
    checkAuth();
    const timer = setTimeout(checkAuth, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      console.log('ProtectedRoute: Not authenticated, redirecting to login');
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-lg bg-[#2563eb] flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">V</span>
          </div>
          <div className="mt-6">
            <div className="h-1 bg-[#2563eb] rounded-full w-24 animate-pulse"></div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  console.log('ProtectedRoute: Rendering protected content');
  return children;
}
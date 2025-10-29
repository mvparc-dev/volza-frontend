'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth';

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function PublicRoute({ 
  children, 
  redirectTo = '/dashboard' 
}: PublicRouteProps) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, loading, router, redirectTo]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white text-2xl font-bold">V</span>
          </div>
          <div className="mt-6">
            <div className="h-1 bg-blue-600 rounded-full w-24 animate-pulse"></div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Don't render anything while redirecting authenticated users
  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">V</span>
          </div>
          <p className="mt-4 text-gray-600 font-medium">
            Redirecting...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

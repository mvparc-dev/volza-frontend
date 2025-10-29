'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  requiredRole?: string;
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({ 
  children, 
  requiredPermissions = [], 
  requiredRole,
  fallback 
}: ProtectedRouteProps) {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
      return;
    }

    if (!loading && isAuthenticated && user) {
      // Check role requirement
      if (requiredRole && user.role !== requiredRole) {
        router.push('/unauthorized');
        return;
      }

      // Check permission requirements
      if (requiredPermissions.length > 0) {
        const hasRequiredPermissions = requiredPermissions.every(permission =>
          user.permissions.includes(permission)
        );
        
        if (!hasRequiredPermissions) {
          router.push('/unauthorized');
          return;
        }
      }
    }
  }, [isAuthenticated, loading, user, router, requiredPermissions, requiredRole]);

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
            Verifying authentication...
          </p>
        </div>
      </div>
    );
  }

  // Don't render anything while redirecting unauthenticated users
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">V</span>
          </div>
          <p className="mt-4 text-gray-600 font-medium">
            Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  // Show fallback if user doesn't have required permissions/role
  if (requiredRole && user?.role !== requiredRole) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have the required role to access this page.</p>
        </div>
      </div>
    );
  }

  if (requiredPermissions.length > 0 && user) {
    const hasRequiredPermissions = requiredPermissions.every(permission =>
      user.permissions.includes(permission)
    );
    
    if (!hasRequiredPermissions) {
      return fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-gray-600">You don't have the required permissions to access this page.</p>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
}

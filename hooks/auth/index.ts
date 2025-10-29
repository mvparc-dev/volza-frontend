import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import authService, { getAuthData, clearAuthData } from '@/services/auth';
import { 
  LoginCredentials, 
  SignupData, 
  OnboardingData, 
  AuthData,
  User 
} from '@/types/auth';

// Auth Status Hook
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const authData = getAuthData();
        if (authData && authData.token) {
          setIsAuthenticated(true);
          setUser(authData.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const logout = useCallback(() => {
    clearAuthData();
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  return {
    isAuthenticated,
    user,
    loading,
    logout,
  };
};

// Login Hook
export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Login successful!');
        queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
        router.push('/dashboard');
      } else {
        toast.error(data?.message || 'Login failed');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Signup Hook
export const useSignup = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (signupData: SignupData) => authService.signup(signupData),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Account created successfully! Please verify your email.');
        router.push('/login');
      } else {
        toast.error(data?.message || 'Signup failed');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Onboarding Hook
export const useOnboarding = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (onboardingData: OnboardingData) => 
      authService.completeOnboarding(onboardingData),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Onboarding completed successfully!');
        queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
        router.push('/dashboard');
      } else {
        toast.error(data?.message || 'Onboarding failed');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Logout Hook
export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      queryClient.clear();
      router.push('/login');
      toast.success('Logged out successfully');
    },
    onError: (error: Error) => {
      console.error('Logout error:', error);
      // Still redirect even if API call fails
      queryClient.clear();
      router.push('/login');
    },
  });
};

// Profile Hook
export const useProfile = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ['auth', 'profile'],
    queryFn: () => authService.getProfile(),
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Update Profile Hook
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profileData: Partial<User>) => 
      authService.updateProfile(profileData),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Profile updated successfully!');
        queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
      } else {
        toast.error(data?.message || 'Profile update failed');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Change Password Hook
export const useChangePassword = () => {
  return useMutation({
    mutationFn: ({ currentPassword, newPassword }: { 
      currentPassword: string; 
      newPassword: string; 
    }) => authService.changePassword(currentPassword, newPassword),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Password changed successfully!');
      } else {
        toast.error(data?.message || 'Password change failed');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Forgot Password Hook
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email: string) => authService.forgotPassword(email),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Password reset email sent!');
      } else {
        toast.error(data?.message || 'Failed to send reset email');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Reset Password Hook
export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ token, newPassword, confirmPassword }: {
      token: string;
      newPassword: string;
      confirmPassword: string;
    }) => authService.resetPassword(token, newPassword, confirmPassword),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Password reset successfully!');
        router.push('/login');
      } else {
        toast.error(data?.message || 'Password reset failed');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Email Verification Hook
export const useEmailVerification = () => {
  return useMutation({
    mutationFn: (token: string) => authService.verifyEmail(token),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Email verified successfully!');
      } else {
        toast.error(data?.message || 'Email verification failed');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Resend Verification Hook
export const useResendVerification = () => {
  return useMutation({
    mutationFn: () => authService.resendVerification(),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Verification email sent!');
      } else {
        toast.error(data?.message || 'Failed to resend verification');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

import apiClient from '@/lib/api-client';
import { 
  AuthData, 
  LoginCredentials, 
  SignupData, 
  OnboardingData,
  User,
  Organization 
} from '@/types/auth';

const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  PROFILE: '/auth/profile',
  UPDATE_PROFILE: '/auth/profile',
  CHANGE_PASSWORD: '/auth/change-password',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_EMAIL: '/auth/verify-email',
  SIGNUP: '/auth/signup',
  ONBOARDING: '/auth/onboarding',
  RESEND_VERIFICATION: '/auth/resend-verification',
};

export const authService = {
  // Authentication Methods
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.LOGIN, credentials);
      
      if (response.data.success) {
        saveAuthData(response.data.data);
        return {
          success: true,
          data: response.data.data,
          message: response.data.message,
        };
      }
      
      return {
        success: false,
        message: response.data.message || 'Login failed',
      };
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  signup: async (signupData: SignupData) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.SIGNUP, signupData);
      
      return {
        success: response.data.success,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Signup error:', error);
      throw new Error(error.response?.data?.message || 'Signup failed');
    }
  },

  completeOnboarding: async (onboardingData: OnboardingData) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.ONBOARDING, onboardingData);
      
      if (response.data.success) {
        // Update stored user data
        const currentData = getAuthData();
        if (currentData) {
          saveAuthData({
            ...currentData,
            user: {
              ...currentData.user,
              ...response.data.data.user,
            },
            organization: {
              ...currentData.organization,
              ...response.data.data.organization,
            },
          });
        }
      }
      
      return {
        success: response.data.success,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Onboarding error:', error);
      throw new Error(error.response?.data?.message || 'Onboarding failed');
    }
  },

  logout: async () => {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
      clearAuthData();
      return {
        success: true,
        message: 'Logged out successfully',
      };
    } catch (error: any) {
      console.error('Logout error:', error);
      // Clear local data even if API fails
      clearAuthData();
      return {
        success: true,
        message: 'Logged out successfully',
      };
    }
  },

  refreshToken: async () => {
    try {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await apiClient.post(API_ENDPOINTS.REFRESH, {
        refreshToken,
      });

      if (response.data.success) {
        setAuthToken(response.data.data.token);
        return {
          success: true,
          token: response.data.data.token,
        };
      }
    } catch (error: any) {
      console.error('Token refresh error:', error);
      clearAuthData();
      throw new Error(error.response?.data?.message || 'Token refresh failed');
    }
  },

  // Profile Management
  getProfile: async () => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.PROFILE);

      if (response.data.success) {
        // Update stored user data
        const currentData = getAuthData();
        if (currentData) {
          saveAuthData({
            ...currentData,
            user: response.data.data.user,
            organization: response.data.data.organization,
          });
        }

        return {
          success: true,
          data: response.data.data,
        };
      }
    } catch (error: any) {
      console.error('Get profile error:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
  },

  updateProfile: async (profileData: Partial<User>) => {
    try {
      const response = await apiClient.put(API_ENDPOINTS.UPDATE_PROFILE, profileData);

      if (response.data.success) {
        // Update stored user data
        const currentData = getAuthData();
        if (currentData) {
          saveAuthData({
            ...currentData,
            user: {
              ...currentData.user,
              ...response.data.data.user,
            },
          });
        }

        return {
          success: true,
          data: response.data.data,
          message: response.data.message,
        };
      }
    } catch (error: any) {
      console.error('Update profile error:', error);
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
  },

  // Password Management
  changePassword: async (currentPassword: string, newPassword: string) => {
    try {
      const response = await apiClient.put(API_ENDPOINTS.CHANGE_PASSWORD, {
        currentPassword,
        newPassword,
      });

      return {
        success: response.data.success,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Change password error:', error);
      throw new Error(error.response?.data?.message || 'Failed to change password');
    }
  },

  forgotPassword: async (email: string) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.FORGOT_PASSWORD, { email });
      return {
        success: response.data.success,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Forgot password error:', error);
      throw new Error(error.response?.data?.message || 'Failed to send reset email');
    }
  },

  resetPassword: async (token: string, newPassword: string, confirmPassword: string) => {
    try {
      const response = await apiClient.post(`${API_ENDPOINTS.RESET_PASSWORD}/${token}`, {
        newPassword,
        confirmPassword,
      });

      return {
        success: response.data.success,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Reset password error:', error);
      throw new Error(error.response?.data?.message || 'Failed to reset password');
    }
  },

  // Email Verification
  verifyEmail: async (token: string) => {
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.VERIFY_EMAIL}/${token}`);
      return {
        success: response.data.success,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Email verification error:', error);
      throw new Error(error.response?.data?.message || 'Email verification failed');
    }
  },

  resendVerification: async () => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.RESEND_VERIFICATION);
      return {
        success: response.data.success,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Resend verification error:', error);
      throw new Error(error.response?.data?.message || 'Failed to resend verification');
    }
  },

  // Utility Methods
  isAuthenticated: () => {
    return getAuthToken() !== null;
  },

  hasPermission: (permission: string) => {
    const authData = getAuthData();
    return authData?.user?.permissions?.includes(permission) || false;
  },

  hasRole: (role: string) => {
    const authData = getAuthData();
    return authData?.user?.role === role;
  },
};

// Helper functions for localStorage management
export const saveAuthData = (data: AuthData) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', data.token);
    localStorage.setItem('refresh_token', data.refreshToken);
    localStorage.setItem('user_data', JSON.stringify(data.user));
    localStorage.setItem('organization_data', JSON.stringify(data.organization));
  }
};

export const clearAuthData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
    localStorage.removeItem('organization_data');
  }
};

export const getAuthData = (): AuthData | null => {
  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem('auth_token');
  const userData = localStorage.getItem('user_data');
  const organizationData = localStorage.getItem('organization_data');

  if (!token || !userData) return null;

  return {
    token,
    refreshToken: localStorage.getItem('refresh_token') || '',
    user: JSON.parse(userData),
    organization: organizationData ? JSON.parse(organizationData) : null,
  };
};

export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
};

export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('refresh_token');
};

export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

export default authService;

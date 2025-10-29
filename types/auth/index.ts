// Auth Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'manager';
  permissions: string[];
  avatar?: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Organization {
  id: string;
  name: string;
  type: 'buyer' | 'supplier' | 'both';
  industry: string;
  country: string;
  city: string;
  website?: string;
  description?: string;
  logo?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthData {
  token: string;
  refreshToken: string;
  user: User;
  organization: Organization;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  organizationType: 'buyer' | 'supplier' | 'both';
  industry: string;
  country: string;
  city: string;
  website?: string;
}

export interface OnboardingData {
  companySize: string;
  businessType: string;
  targetMarkets: string[];
  productCategories: string[];
  annualRevenue: string;
  experience: string;
}

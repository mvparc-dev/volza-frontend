// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Search Types
export interface SearchFilters {
  query?: string;
  country?: string;
  industry?: string;
  companySize?: string;
  verified?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface Buyer {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  industry: string;
  companySize: string;
  website?: string;
  description?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface Supplier {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  industry: string;
  companySize: string;
  website?: string;
  description?: string;
  certifications: string[];
  isVerified: boolean;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  specifications: Record<string, any>;
  images: string[];
  supplier: {
    id: string;
    companyName: string;
    country: string;
  };
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  moq: number;
  unit: string;
  isVerified: boolean;
  createdAt: string;
}

export interface Company {
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
  employeeCount: string;
  annualRevenue: string;
  certifications: string[];
  createdAt: string;
}

export interface Contact {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  company: {
    id: string;
    name: string;
    country: string;
  };
  department: string;
  isVerified: boolean;
  createdAt: string;
}

// Task Management Types
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee?: {
    id: string;
    name: string;
    email: string;
  };
  createdBy: {
    id: string;
    name: string;
    email: string;
  };
  dueDate?: string;
  tags: string[];
  attachments: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'technical' | 'billing' | 'general' | 'feature_request';
  assignee?: {
    id: string;
    name: string;
    email: string;
  };
  createdBy: {
    id: string;
    name: string;
    email: string;
  };
  attachments: string[];
  createdAt: string;
  updatedAt: string;
}

// Workspace Types
export interface SavedSearch {
  id: string;
  name: string;
  type: 'buyers' | 'suppliers' | 'products' | 'companies' | 'contacts';
  filters: SearchFilters;
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  type: 'buyers' | 'suppliers' | 'products' | 'companies' | 'contacts';
  items: string[]; // Array of IDs
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 30000,
};

// App Configuration
export const APP_CONFIG = {
  NAME: 'Volza',
  DESCRIPTION: 'Global Import Export Platform',
  VERSION: '1.0.0',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

// Search Configuration
export const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  DEBOUNCE_DELAY: 300,
  MAX_SUGGESTIONS: 10,
};

// Task Configuration
export const TASK_CONFIG = {
  PRIORITIES: ['low', 'medium', 'high', 'urgent'] as const,
  STATUSES: ['pending', 'in_progress', 'completed', 'cancelled'] as const,
};

// Ticket Configuration
export const TICKET_CONFIG = {
  PRIORITIES: ['low', 'medium', 'high', 'urgent'] as const,
  STATUSES: ['open', 'in_progress', 'resolved', 'closed'] as const,
  CATEGORIES: ['technical', 'billing', 'general', 'feature_request'] as const,
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MANAGER: 'manager',
} as const;

// Organization Types
export const ORG_TYPES = {
  BUYER: 'buyer',
  SUPPLIER: 'supplier',
  BOTH: 'both',
} as const;

// Search Types
export const SEARCH_TYPES = {
  BUYERS: 'buyers',
  SUPPLIERS: 'suppliers',
  PRODUCTS: 'products',
  COMPANIES: 'companies',
  CONTACTS: 'contacts',
} as const;

// File Upload Configuration
export const FILE_CONFIG = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  DISPLAY_WITH_TIME: 'MMM dd, yyyy HH:mm',
  API: 'yyyy-MM-dd',
  API_WITH_TIME: 'yyyy-MM-dd HH:mm:ss',
};

// Currency Configuration
export const CURRENCY_CONFIG = {
  DEFAULT: 'USD',
  SUPPORTED: ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'INR'],
};

// Countries Configuration
export const COUNTRIES_CONFIG = {
  POPULAR: [
    'United States',
    'China',
    'Germany',
    'Japan',
    'United Kingdom',
    'India',
    'France',
    'Italy',
    'Brazil',
    'Canada',
  ],
};

// Industries Configuration
export const INDUSTRIES_CONFIG = [
  'Electronics',
  'Textiles & Apparel',
  'Food & Beverages',
  'Automotive',
  'Machinery & Equipment',
  'Chemicals',
  'Construction Materials',
  'Healthcare & Medical',
  'Agriculture',
  'Energy & Power',
  'Telecommunications',
  'Aerospace & Defense',
  'Marine & Shipping',
  'Mining & Metals',
  'Other',
];

// Company Sizes
export const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees',
];

// Revenue Ranges
export const REVENUE_RANGES = [
  'Under $100K',
  '$100K - $500K',
  '$500K - $1M',
  '$1M - $5M',
  '$5M - $10M',
  '$10M - $50M',
  '$50M+',
];

// Experience Levels
export const EXPERIENCE_LEVELS = [
  'New to international trade',
  '1-3 years experience',
  '4-10 years experience',
  '10+ years experience',
];

// Business Types
export const BUSINESS_TYPES = [
  'Manufacturer',
  'Trading Company',
  'Distributor',
  'Retailer',
  'Service Provider',
  'Consultant',
  'Agent',
  'Other',
];

// Target Markets
export const TARGET_MARKETS = [
  'North America',
  'Europe',
  'Asia Pacific',
  'Middle East & Africa',
  'Latin America',
  'Global',
];

// Product Categories
export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Textiles & Apparel',
  'Food & Beverages',
  'Automotive',
  'Machinery & Equipment',
  'Chemicals',
  'Construction Materials',
  'Healthcare & Medical',
  'Agriculture',
  'Energy & Power',
  'Telecommunications',
  'Aerospace & Defense',
  'Marine & Shipping',
  'Mining & Metals',
  'Other',
];

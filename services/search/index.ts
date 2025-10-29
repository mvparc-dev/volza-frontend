import apiClient from '@/lib/api-client';
import { 
  SearchFilters, 
  Buyer, 
  Supplier, 
  Product, 
  Company, 
  Contact,
  PaginatedResponse 
} from '@/types/api';

const API_ENDPOINTS = {
  BUYERS: '/search/buyers',
  SUPPLIERS: '/search/suppliers',
  PRODUCTS: '/search/products',
  COMPANIES: '/search/companies',
  CONTACTS: '/search/contacts',
};

export const searchService = {
  // Search Buyers
  searchBuyers: async (filters: SearchFilters, page: number = 1, limit: number = 20) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.BUYERS, {
        params: {
          ...filters,
          page,
          limit,
        },
      });

      return {
        success: true,
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error: any) {
      console.error('Search buyers error:', error);
      throw new Error(error.response?.data?.message || 'Failed to search buyers');
    }
  },

  // Search Suppliers
  searchSuppliers: async (filters: SearchFilters, page: number = 1, limit: number = 20) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.SUPPLIERS, {
        params: {
          ...filters,
          page,
          limit,
        },
      });

      return {
        success: true,
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error: any) {
      console.error('Search suppliers error:', error);
      throw new Error(error.response?.data?.message || 'Failed to search suppliers');
    }
  },

  // Search Products
  searchProducts: async (filters: SearchFilters, page: number = 1, limit: number = 20) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS, {
        params: {
          ...filters,
          page,
          limit,
        },
      });

      return {
        success: true,
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error: any) {
      console.error('Search products error:', error);
      throw new Error(error.response?.data?.message || 'Failed to search products');
    }
  },

  // Search Companies
  searchCompanies: async (filters: SearchFilters, page: number = 1, limit: number = 20) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.COMPANIES, {
        params: {
          ...filters,
          page,
          limit,
        },
      });

      return {
        success: true,
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error: any) {
      console.error('Search companies error:', error);
      throw new Error(error.response?.data?.message || 'Failed to search companies');
    }
  },

  // Search Contacts
  searchContacts: async (filters: SearchFilters, page: number = 1, limit: number = 20) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.CONTACTS, {
        params: {
          ...filters,
          page,
          limit,
        },
      });

      return {
        success: true,
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error: any) {
      console.error('Search contacts error:', error);
      throw new Error(error.response?.data?.message || 'Failed to search contacts');
    }
  },

  // Get search suggestions
  getSuggestions: async (query: string, type: 'buyers' | 'suppliers' | 'products' | 'companies' | 'contacts') => {
    try {
      const response = await apiClient.get(`/search/suggestions/${type}`, {
        params: { query },
      });

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      console.error('Get suggestions error:', error);
      throw new Error(error.response?.data?.message || 'Failed to get suggestions');
    }
  },

  // Get filter options
  getFilterOptions: async (type: 'buyers' | 'suppliers' | 'products' | 'companies' | 'contacts') => {
    try {
      const response = await apiClient.get(`/search/filters/${type}`);

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      console.error('Get filter options error:', error);
      throw new Error(error.response?.data?.message || 'Failed to get filter options');
    }
  },
};

export default searchService;

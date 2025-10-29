import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import searchService from '@/services/search';
import { SearchFilters } from '@/types/api';

// Search Buyers Hook
export const useSearchBuyers = (filters: SearchFilters, page: number = 1, limit: number = 20) => {
  return useQuery({
    queryKey: ['search', 'buyers', filters, page, limit],
    queryFn: () => searchService.searchBuyers(filters, page, limit),
    enabled: !!filters.query || Object.keys(filters).length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Search Suppliers Hook
export const useSearchSuppliers = (filters: SearchFilters, page: number = 1, limit: number = 20) => {
  return useQuery({
    queryKey: ['search', 'suppliers', filters, page, limit],
    queryFn: () => searchService.searchSuppliers(filters, page, limit),
    enabled: !!filters.query || Object.keys(filters).length > 0,
    staleTime: 5 * 60 * 1000,
  });
};

// Search Products Hook
export const useSearchProducts = (filters: SearchFilters, page: number = 1, limit: number = 20) => {
  return useQuery({
    queryKey: ['search', 'products', filters, page, limit],
    queryFn: () => searchService.searchProducts(filters, page, limit),
    enabled: !!filters.query || Object.keys(filters).length > 0,
    staleTime: 5 * 60 * 1000,
  });
};

// Search Companies Hook
export const useSearchCompanies = (filters: SearchFilters, page: number = 1, limit: number = 20) => {
  return useQuery({
    queryKey: ['search', 'companies', filters, page, limit],
    queryFn: () => searchService.searchCompanies(filters, page, limit),
    enabled: !!filters.query || Object.keys(filters).length > 0,
    staleTime: 5 * 60 * 1000,
  });
};

// Search Contacts Hook
export const useSearchContacts = (filters: SearchFilters, page: number = 1, limit: number = 20) => {
  return useQuery({
    queryKey: ['search', 'contacts', filters, page, limit],
    queryFn: () => searchService.searchContacts(filters, page, limit),
    enabled: !!filters.query || Object.keys(filters).length > 0,
    staleTime: 5 * 60 * 1000,
  });
};

// Search Suggestions Hook
export const useSearchSuggestions = (query: string, type: 'buyers' | 'suppliers' | 'products' | 'companies' | 'contacts') => {
  return useQuery({
    queryKey: ['search', 'suggestions', type, query],
    queryFn: () => searchService.getSuggestions(query, type),
    enabled: query.length > 2,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Filter Options Hook
export const useFilterOptions = (type: 'buyers' | 'suppliers' | 'products' | 'companies' | 'contacts') => {
  return useQuery({
    queryKey: ['search', 'filters', type],
    queryFn: () => searchService.getFilterOptions(type),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};

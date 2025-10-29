'use client';

import { useState } from 'react';
import { useSearchSuppliers, useFilterOptions } from '@/hooks/api/search';
import { SearchFilters } from '@/types/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function SuppliersSearchPage() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    country: '',
    industry: '',
    companySize: '',
    verified: undefined,
  });
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const { data: searchResults, isLoading, error } = useSearchSuppliers(filters, page, 20);
  const { data: filterOptions } = useFilterOptions('suppliers');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      country: '',
      industry: '',
      companySize: '',
      verified: undefined,
    });
    setPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <BuildingStorefrontIcon className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Find Suppliers</h1>
              <p className="text-gray-600">Connect with reliable suppliers worldwide</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center"
          >
            <FunnelIcon className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search for suppliers, products, or industries..."
              value={filters.query || ''}
              onChange={(e) => handleFilterChange('query', e.target.value)}
              leftIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <Button type="submit" loading={isLoading}>
            Search
          </Button>
        </form>

        {/* Filters */}
        {showFilters && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  value={filters.country || ''}
                  onChange={(e) => handleFilterChange('country', e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">All Countries</option>
                  {filterOptions?.data?.countries?.map((country: any) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <select
                  value={filters.industry || ''}
                  onChange={(e) => handleFilterChange('industry', e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">All Industries</option>
                  {filterOptions?.data?.industries?.map((industry: any) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Size
                </label>
                <select
                  value={filters.companySize || ''}
                  onChange={(e) => handleFilterChange('companySize', e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">All Sizes</option>
                  {filterOptions?.data?.companySizes?.map((size: any) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="verified-only"
                  type="checkbox"
                  checked={filters.verified === true}
                  onChange={(e) => handleFilterChange('verified', e.target.checked ? true : undefined)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="verified-only" className="ml-2 block text-sm text-gray-900">
                  Verified suppliers only
                </label>
              </div>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="space-y-4">
        {isLoading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Searching suppliers...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">Error: {error.message}</p>
          </div>
        )}

        {searchResults?.data && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Found {searchResults.pagination.total} suppliers
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="text-sm border-gray-300 rounded-md">
                  <option>Relevance</option>
                  <option>Company Name</option>
                  <option>Country</option>
                  <option>Industry</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.data.map((supplier: any) => (
                <Card key={supplier.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                          <BuildingStorefrontIcon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{supplier.companyName}</h3>
                          <p className="text-sm text-gray-600">{supplier.contactPerson}</p>
                        </div>
                      </div>
                      {supplier.isVerified && (
                        <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                      )}
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <GlobeAltIcon className="h-4 w-4 mr-2" />
                        {supplier.country}, {supplier.city}
                      </div>
                      <div className="flex items-center">
                        <BuildingOfficeIcon className="h-4 w-4 mr-2" />
                        {supplier.industry}
                      </div>
                      <div className="flex items-center">
                        <ShieldCheckIcon className="h-4 w-4 mr-2" />
                        {supplier.certifications?.length || 0} certifications
                      </div>
                    </div>

                    {supplier.description && (
                      <p className="mt-3 text-sm text-gray-700 line-clamp-2">
                        {supplier.description}
                      </p>
                    )}

                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" className="flex-1">
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {searchResults.pagination.totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                
                <span className="text-sm text-gray-600">
                  Page {page} of {searchResults.pagination.totalPages}
                </span>
                
                <Button
                  variant="outline"
                  onClick={() => setPage(page + 1)}
                  disabled={page === searchResults.pagination.totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}

        {searchResults?.data?.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <BuildingStorefrontIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No suppliers found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

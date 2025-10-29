'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [searchType, setSearchType] = useState('guided');

  return (
    <div className="flex-1 bg-white min-h-screen font-figtree">
      {/* Top Navigation Bar - Dark Blue */}
      <div className="bg-[#1e3a8a] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-[#1e3a8a] font-bold text-lg">V</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-blue-200 transition-colors font-medium">
                Search
              </button>
              <button className="text-white hover:text-blue-200 transition-colors font-medium">
                Workspaces
              </button>
              <button className="text-blue-200 font-medium">
                Countries
              </button>
              <button className="text-white hover:text-blue-200 transition-colors font-medium">
                Company logs
              </button>
            </div>
          </div>

          {/* Right Side - User Controls */}
          <div className="flex items-center space-x-4">
            {/* Credits */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1e3a8a] text-xs font-bold">10</span>
              </div>
              <span className="text-white text-sm font-medium">My Credits</span>
            </div>

            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-blue-800 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
            </button>

            {/* My Shortcuts */}
            <button className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors">
              <span className="text-sm font-medium">My Shortcuts</span>
              <span className="text-lg font-bold">+</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-white">
              <span className="text-sm font-medium">English (UK)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="bg-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Question */}
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            What would you like to do today?
          </h1>
          
          {/* Search Toggle - Exact Match */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex">
              <button
                onClick={() => setSearchType('guided')}
                className={`px-8 py-4 font-medium transition-all duration-200 ${
                  searchType === 'guided'
                    ? 'bg-white text-blue-500 border border-blue-500 rounded-l-lg'
                    : 'bg-white text-gray-500 rounded-l-lg'
                }`}
              >
                Guided Search
              </button>
              <button
                onClick={() => setSearchType('advanced')}
                className={`px-8 py-4 font-medium transition-all duration-200 ${
                  searchType === 'advanced'
                    ? 'bg-white text-blue-500 border border-blue-500 rounded-r-lg'
                    : 'bg-white text-gray-500 rounded-r-lg'
                }`}
              >
                Advanced Search
              </button>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span>My Shortcuts</span>
              <div className="flex space-x-1">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </span>
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </span>
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span>English (UK)</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span>Data Updated: July 20, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards Section */}
      <div className="bg-white px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Find Buyers */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Find Buyers</h3>
                <p className="text-sm text-gray-600">Connect with verified buyers to grow your export business.</p>
              </div>
            </div>

            {/* Find Suppliers */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Find Suppliers</h3>
                <p className="text-sm text-gray-600">Discover trusted suppliers to strengthen your supply chain.</p>
              </div>
            </div>

            {/* Product Search */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Product Search</h3>
                <p className="text-sm text-gray-600">Uncover global trends and demand for your products.</p>
              </div>
            </div>

            {/* Company Search */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Company Search</h3>
                <p className="text-sm text-gray-600">Analyze any company's trade activity and shipments.</p>
              </div>
            </div>

            {/* Find Key Contacts */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Find Key Contacts</h3>
                <p className="text-sm text-gray-600">Reach decision-makers faster for meaningful opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
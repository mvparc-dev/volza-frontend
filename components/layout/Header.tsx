'use client';

import { useState } from 'react';
import { ChevronDown, Bell, Plus, Globe } from 'lucide-react';
import { cn } from '@/utils/helpers';

interface HeaderProps {
  sidebarCollapsed: boolean;
}

export default function Header({ sidebarCollapsed }: HeaderProps) {
  const [showCreditsDropdown, setShowCreditsDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium">
              Search
            </button>
            <button className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium">
              Workspaces
            </button>
            <button className="text-[#2563eb] font-medium">
              Countries
            </button>
            <button className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium">
              Company logs
            </button>
          </div>
        </div>

        {/* Right side - User controls */}
        <div className="flex items-center space-x-4">
          {/* Credits */}
          <div className="relative">
            <button
              onClick={() => setShowCreditsDropdown(!showCreditsDropdown)}
              className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors"
            >
              <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">10</span>
              </div>
              <span className="text-sm font-medium text-gray-700">My Credits</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            
            {showCreditsDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 text-sm text-gray-700">Credits: 10</div>
                <div className="px-4 py-2 text-sm text-gray-700">Plan: Basic</div>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>

          {/* My Shortcuts */}
          <button className="flex items-center space-x-2 text-gray-700 hover:text-[#2563eb] transition-colors">
            <span className="text-sm font-medium">My Shortcuts</span>
            <Plus className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">English (UK)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  English (US)
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Spanish
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  French
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
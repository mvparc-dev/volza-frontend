'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/helpers';
import {
  Search,
  FolderOpen,
  Globe,
  Building2,
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Workspaces', href: '/workspaces', icon: FolderOpen },
  { name: 'Countries', href: '/countries', icon: Globe },
  { name: 'Company Logs', href: '/company-logs', icon: Building2 },
];

const secondaryItems = [
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help', href: '/help', icon: HelpCircle },
];

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn(
      'bg-white border-r border-gray-200 flex flex-col transition-all duration-300',
      isCollapsed ? 'w-16' : 'w-64'
    )}>
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2563eb] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-gray-900">Volza</span>
            </div>
          )}
          <button
            onClick={onToggle}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[#2563eb] text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                  isCollapsed && 'justify-center'
                )}
              >
                <Icon className={cn('w-5 h-5', !isCollapsed && 'mr-3')} />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>

        {/* Secondary Navigation */}
        <div className="pt-4 border-t border-gray-200">
          <div className="space-y-1">
            {secondaryItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#2563eb] text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                    isCollapsed && 'justify-center'
                  )}
                >
                  <Icon className={cn('w-5 h-5', !isCollapsed && 'mr-3')} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className={cn(
          'flex items-center',
          isCollapsed ? 'justify-center' : 'space-x-3'
        )}>
          {!isCollapsed && (
            <div className="flex-1">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">U</span>
              </div>
            </div>
          )}
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">User Name</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          )}
          <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
            <LogOut className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
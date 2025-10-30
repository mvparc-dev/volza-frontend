// /components/navbar/TopNavBar.tsx

"use client";
import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

// A simple star SVG component for the credit icons
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-white"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

export default function TopNavBar({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  return (
    <header className="bg-white">
      {/* --- TOP ROW --- */}
      <div className="px-2 sm:px-6 py-2 sm:py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-0 min-w-0">
        {/* Left Side - Navigation */}
        <div className="flex items-center flex-shrink-0 space-x-3 sm:space-x-4 md:space-x-8 min-w-0">
          {/* Hamburger on mobile */}
          <button
            aria-label="Open menu"
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <nav className="hidden md:flex items-center space-x-3 sm:space-x-7 text-xs sm:text-sm font-medium min-w-0">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Search
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Workspaces
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Countries
            </a>
            <a href="#" className="text-blue-600 font-semibold">
              Company logs
            </a>
          </nav>
        </div>

        {/* Right Side - User Controls */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 overflow-x-auto pr-2 sm:pr-0">
          <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <StarIcon />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              10
            </span>
          </button>
          <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-100">
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
              <StarIcon />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              My Credits
            </span>
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </button>
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0">
            <BellIcon className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
          </button>
          <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>

      {/* --- BOTTOM ROW --- */}
      <div className="border-t border-gray-100">
        <div className="px-2 sm:px-6 py-2 flex flex-wrap items-center justify-center sm:justify-end gap-2">
          {/* My Shortcuts Button Group */}
          <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg">
            <span className="text-sm font-semibold text-gray-700">
              My Shortcuts
            </span>
            <button className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100">
              <PlusIcon className="w-4 h-4 text-blue-600" />
            </button>
            <button className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100">
              <PlusIcon className="w-4 h-4 text-blue-600" />
            </button>
            <button className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100">
              <PlusIcon className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          {/* Language Selector */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="text-sm font-medium text-gray-600">
              English (UK)
            </span>
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}

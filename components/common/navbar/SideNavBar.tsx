// /components/layout/SideNavBar.tsx

"use client";
import React from "react";
import Image from "next/image"; // 1. Import the Next.js Image component
import {
  HomeIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  UserPlusIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  TicketIcon,
  PlayCircleIcon,
  PresentationChartBarIcon,
  LifebuoyIcon,
  GiftIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

// 2. Import your logo image.
// IMPORTANT: Make sure this path is correct for your project structure.
// If your image is in the `public` folder, you can also use a string path like "/logo.png".
import volzaLogo from "../../../public/logo.png"; // Example path

// Array of main navigation icons for easy mapping
const mainNavIcons = [
  HomeIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  UserPlusIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  TicketIcon,
  PlayCircleIcon,
  PresentationChartBarIcon,
];

const SideNavBar = ({ mobileOpen = false }: { mobileOpen?: boolean }) => {
  return (
    <aside
      className={
        `fixed md:static top-0 left-0 h-screen w-20 bg-white border-r border-gray-200 flex flex-col items-center py-5 shadow-sm z-40 ` +
        `transform transition-transform duration-300 ` +
        `${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`
      }
    >
      {/* Logo (Stays fixed at the top) */}
      <div className="shrink-0">
        <a href="#">
          {/* 3. Replaced the SVG with the Next.js Image component */}
          <Image
            src={volzaLogo}
            alt="Volza Logo"
            width={36}
            height={36}
            priority // Good practice for a logo that's always visible
          />
        </a>
      </div>

      {/* Scrollable Main Navigation Area */}
      <nav className="flex-grow min-h-0 overflow-y-auto w-full flex flex-col items-center mt-8 space-y-3">
        {mainNavIcons.map((Icon, index) => (
          <button
            key={index}
            className="p-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </nav>

      {/* Bottom Icons (Stays fixed at the bottom) */}
      <div className="shrink-0 mt-8 flex flex-col items-center space-y-3">
        <button className="p-3 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors">
          <LifebuoyIcon className="w-6 h-6" />
        </button>
        <button className="p-3 bg-orange-50 rounded-xl text-orange-500 hover:bg-orange-100 transition-colors">
          <GiftIcon className="w-6 h-6" />
        </button>
        <button className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
};

export default SideNavBar;

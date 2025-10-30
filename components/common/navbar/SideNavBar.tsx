// /components/layout/SideNavBar.tsx

"use client";
import React from "react";
import Image from "next/image"; // 1. Import the Next.js Image component

// 2. Import icons from the 'iconsax-react' library
import {
  Home,
  User,
  Task,
  Heart,
  UserCirlceAdd,
  ImportCurve,
  Clock,
  Ticket,
  PlayCircle,
  Teacher,
  Gift,
  LogoutCurve,
  Headphone,
} from "iconsax-reactjs";

// 3. Import your logo image.
// IMPORTANT: Make sure this path is correct for your project structure.
import volzaLogo from "../../../public/logo.png"; // Example path

// Array of main navigation icons for easy mapping
const mainNavIcons = [
  Home,
  User,
  Task,
  Heart,
  UserCirlceAdd,
  ImportCurve,
  Clock,
  Ticket,
  PlayCircle,
  Teacher,
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
          {/* Replaced the SVG with the Next.js Image component */}
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
      <nav className="flex-grow min-h-0 overflow-y-auto w-full flex flex-col items-center mt-8 space-y-3 scrollbar-hide">
        {mainNavIcons.map((Icon, index) => (
          <button
            key={index}
            className="p-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
          >
            {/* 4. Used the 'iconsax-react' Icon component */}
            <Icon size="16" />
          </button>
        ))}
      </nav>

      {/* Bottom Icons (Stays fixed at the bottom) */}
      <div className="shrink-0 mt-8 flex flex-col items-center space-y-3">
        <button className="p-3 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors">
          <Headphone size="16" />
        </button>
        <button className="p-3 bg-orange-50 rounded-xl text-orange-500 hover:bg-orange-100 transition-colors">
          <Gift size="16" />
        </button>
        <button className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
          <LogoutCurve size="16" />
        </button>
      </div>
    </aside>
  );
};

export default SideNavBar;

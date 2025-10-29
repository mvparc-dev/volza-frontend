// /components/dashboard/shared/DashboardCard.tsx

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  viewAllUrl?: string;
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  autoHeight?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  viewAllUrl = "#",
  children,
  headerContent,
  autoHeight = false,
}) => {
  // --- FIX IS HERE ---
  // Reduced the fixed height from 480px to a more compact 420px
  const heightClass = autoHeight ? "" : "h-[420px]";

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col ${heightClass}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            {headerContent}
          </div>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <a
          href={viewAllUrl}
          className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 shrink-0"
        >
          View All
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className={`${!autoHeight ? "flex-grow flex flex-col" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;

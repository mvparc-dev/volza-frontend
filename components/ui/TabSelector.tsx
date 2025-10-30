// /components/dashboard/shared/TabSelector.tsx

import React from "react";

// Define the shape of a single tab object
export type Tab = {
  label: string; // The text displayed on the button
  value: string; // A unique identifier for the tab
};

interface TabSelectorProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  fullWidth?: boolean; // Optional prop to control width
}

const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  activeTab,
  onTabChange,
  fullWidth = false,
}) => {
  const containerClasses = `
    flex items-center border border-gray-200 rounded-lg p-1 mb-4
    ${fullWidth ? "w-full" : "w-max"}
  `;

  return (
    <div className={containerClasses}>
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.value}>
          <button
            onClick={() => onTabChange(tab.value)}
            className={`
              text-center px-4 py-2 text-sm font-semibold rounded-md transition-colors
              ${fullWidth ? "flex-1" : ""}
              ${
                activeTab === tab.value
                  ? "bg-white text-blue-600 border border-blue-500 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }
            `}
          >
            {tab.label}
          </button>
          {index < tabs.length - 1 && <div className="w-px h-6 bg-gray-200" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabSelector;

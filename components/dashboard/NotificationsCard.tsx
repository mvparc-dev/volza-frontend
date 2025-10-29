// /components/dashboard/NotificationsCard.tsx

import React, { useState } from "react";
import { NotificationItem } from "../../types/dashboard/types";
import DashboardCard from "../../app/(auth)/dashboard/shared/DashboardCard";
import TabSelector, { Tab } from "../../app/(auth)/shared/TabSelector";

interface NotificationsCardProps {
  notifications: NotificationItem[];
  autoHeight?: boolean;
}

const notificationTabs: Tab[] = [
  { label: "Database Updates", value: "database" },
  { label: "Release Notes", value: "release" },
];

const NotificationsCard: React.FC<NotificationsCardProps> = ({
  notifications,
  autoHeight,
}) => {
  const [activeTab, setActiveTab] = useState("database");

  const filteredNotifications = notifications.filter(
    (n) => n.type === activeTab
  );

  return (
    <DashboardCard
      title="Notifications"
      subtitle="Stay informed with timely alerts about your trade activities and important updates."
      viewAllUrl="#"
      autoHeight={autoHeight}
    >
      <div className="flex flex-col h-full">
        <TabSelector
          tabs={notificationTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <ul className="space-y-3">
          {filteredNotifications.slice(0, 3).map((item) => (
            <li key={item.id}>
              {/* --- FIX IS HERE --- */}
              {/* Re-added the blue left border and ensured no background color */}
              <div className="flex gap-4 p-4 border rounded-lg border-l-[8px] border-l-blue-500 border-gray-200">
                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 my-1">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
};

export default NotificationsCard;

// components/dashboard/ActionCard.tsx

import React from "react";
import {
  BuyersIcon,
  CompanyIcon,
  KeyContactsIcon,
  ProductIcon,
  SuppliersIcon,
} from "./icons";

// 1. Define the possible card types for strong type-checking
type CardType = "buyers" | "suppliers" | "product" | "company" | "contacts";

// 2. Define the props interface for the component
interface ActionCardProps {
  type: CardType;
  title: string;
  description: string;
  anchorUrl?: string; // anchorUrl is optional
}

// 3. Create a typed map for the icons
const iconMap: Record<CardType, React.ReactNode> = {
  buyers: <BuyersIcon />,
  suppliers: <SuppliersIcon />,
  product: <ProductIcon />,
  company: <CompanyIcon />,
  contacts: <KeyContactsIcon />,
};

// 4. Define the component using React.FC and the props interface
const ActionCard: React.FC<ActionCardProps> = ({
  type,
  title,
  description,
  anchorUrl = "#",
}) => {
  const icon = iconMap[type];

  return (
    <a
      href={anchorUrl}
      className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-xl transition-shadow text-center block"
    >
      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#003F7C] mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
};

export default ActionCard;

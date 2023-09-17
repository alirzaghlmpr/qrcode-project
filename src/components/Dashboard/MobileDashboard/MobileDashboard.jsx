import React from "react";
import MobileHeader from "@/components/MobileHeader";
import MobileNavigation from "@/components/MobileNavigation";
const MobileDashboard = ({ children }) => {
  return (
    <div className="flex flex-col">
      <MobileHeader />
      {children}
      <MobileNavigation />
    </div>
  );
};

export default MobileDashboard;

import React from "react";
import MobileHeader from "@/components/MobileHeader";
import MobileNavigation from "@/components/MobileNavigation";
import QRcodeGenerator from "@/components/QRcodeGenerator";
const MobileDashboard = () => {
  return (
    <div className="flex flex-col">
      <MobileHeader />
      <QRcodeGenerator />
      <MobileNavigation />
    </div>
  );
};

export default MobileDashboard;

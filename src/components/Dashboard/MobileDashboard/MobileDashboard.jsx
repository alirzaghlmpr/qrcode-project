import React from "react";
import MobileHeader from "@/components/MobileHeader";
import MobileNavigation from "@/components/MobileNavigation";
import QRcodeGenerator from "@/components/QRcodeGenerator";
import TableHistory from "@/components/TableHistory";
const MobileDashboard = () => {
  return (
    <div className="flex flex-col">
      <MobileHeader />
      {/* <QRcodeGenerator /> */}
      <TableHistory />
      <MobileNavigation />
    </div>
  );
};

export default MobileDashboard;

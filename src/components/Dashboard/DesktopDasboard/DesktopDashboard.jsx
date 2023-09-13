import React from "react";
import Sidebar from "@/components/Sidebar";
import QRcodeGenerator from "@/components/QRcodeGenerator";
import TableHistory from "@/components/TableHistory";
const DesktopDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <QRcodeGenerator /> */}
      <TableHistory />
    </div>
  );
};

export default DesktopDashboard;

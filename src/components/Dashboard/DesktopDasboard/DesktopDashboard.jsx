import React from "react";
import Sidebar from "@/components/Sidebar";
import QRcodeGenerator from "@/components/QRcodeGenerator";
const DesktopDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <QRcodeGenerator />
    </div>
  );
};

export default DesktopDashboard;

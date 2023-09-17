import React from "react";
import Sidebar from "@/components/Sidebar";
import QRcodeGenerator from "@/components/QRcodeGenerator";
import TableHistory from "@/components/TableHistory";
const DesktopDashboard = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default DesktopDashboard;

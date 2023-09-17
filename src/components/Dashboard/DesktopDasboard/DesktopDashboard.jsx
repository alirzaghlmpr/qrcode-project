import React from "react";
import Sidebar from "@/components/Sidebar";
const DesktopDashboard = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default DesktopDashboard;

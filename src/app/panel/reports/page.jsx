"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import AdminNavbarItems from "@/constants/AdminNavbarItems";
import ReportsAdmin from "@/components/templates/ReportsAdmin";
import DashboardContent from "@/components/layouts/DashboardContent";

const Reports = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <ReportsAdmin />
      </DashboardContent>
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <ReportsAdmin />
      </DashboardContent>
    </DesktopDasboard>
  );
};

export default Reports;

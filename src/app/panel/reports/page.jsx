"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import { AdminNavbarItems } from "@/constants";
import ReportsAdmin from "@/components/ReportsAdmin";
const Reports = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <ReportsAdmin />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <ReportsAdmin />
    </DesktopDasboard>
  );
};

export default Reports;

"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import { AdminNavbarItems } from "@/constants";
import ReportsAdmin from "@/components/templates/ReportsAdmin";
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

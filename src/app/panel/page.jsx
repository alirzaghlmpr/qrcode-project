"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import TableHistoryAdmin from "@/components/templates/TableHistoryAdmin";
import { useWindowSize } from "@uidotdev/usehooks";
import AdminNavbarItems from "@/constants/AdminNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";

const Panel = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <TableHistoryAdmin />
      </DashboardContent>
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <TableHistoryAdmin />
      </DashboardContent>
    </DesktopDasboard>
  );
};

export default Panel;

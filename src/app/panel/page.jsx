"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import TableHistoryAdmin from "@/components/templates/TableHistoryAdmin";
import { useWindowSize } from "@uidotdev/usehooks";
import AdminNavbarItems from "@/constants/AdminNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

const Panel = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={AdminNavbarItems}>
        <DashboardContent>
          <TableHistoryAdmin />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={AdminNavbarItems}>
        <DashboardContent>
          <TableHistoryAdmin />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default Panel;

"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import LeavageFormAdmin from "@/components/templates/LeavageFormAdmin";
import AdminNavbarItems from "@/constants/AdminNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

const Leavage = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={AdminNavbarItems}>
        <DashboardContent>
          <LeavageFormAdmin />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={AdminNavbarItems}>
        <DashboardContent>
          <LeavageFormAdmin />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default Leavage;

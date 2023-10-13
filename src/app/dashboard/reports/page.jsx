"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import Reports from "@/components/templates/Reports";
import { useWindowSize } from "@uidotdev/usehooks";
import UserNavbarItems from "@/constants/UserNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

const Report = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={UserNavbarItems}>
        <DashboardContent>
          <Reports />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={UserNavbarItems}>
        <DashboardContent>
          <Reports />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default Report;

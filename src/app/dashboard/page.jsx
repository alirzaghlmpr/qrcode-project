"use client";

import React, { useEffect } from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import QRcodeGenerator from "@/components/templates/QRcodeGenerator";
import { useWindowSize } from "@uidotdev/usehooks";
import UserNavbarItems from "@/constants/UserNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

const Dashboard = () => {
  const { width } = useWindowSize();

  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={UserNavbarItems}>
        <DashboardContent>
          <QRcodeGenerator />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={UserNavbarItems}>
        <DashboardContent>
          <QRcodeGenerator />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default Dashboard;

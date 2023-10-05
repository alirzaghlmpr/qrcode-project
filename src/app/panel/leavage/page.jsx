"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import LeavageFormAdmin from "@/components/templates/LeavageFormAdmin";
import AdminNavbarItems from "@/constants/AdminNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";

const Leavage = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <LeavageFormAdmin />
      </DashboardContent>
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <LeavageFormAdmin />
      </DashboardContent>
    </DesktopDasboard>
  );
};

export default Leavage;

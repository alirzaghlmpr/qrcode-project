"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import LeavageForm from "@/components/templates/LeavageForm";
import UserNavbarItems from "@/constants/UserNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";

const Leavage = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <DashboardContent>
        <LeavageForm />
      </DashboardContent>
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <DashboardContent>
        <LeavageForm />
      </DashboardContent>
    </DesktopDasboard>
  );
};

export default Leavage;

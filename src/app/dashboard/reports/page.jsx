"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import Reports from "@/components/Reports";
import { useWindowSize } from "@uidotdev/usehooks";
import { UserNavbarItems } from "@/constants";
const Report = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <Reports />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <Reports />
    </DesktopDasboard>
  );
};

export default Report;

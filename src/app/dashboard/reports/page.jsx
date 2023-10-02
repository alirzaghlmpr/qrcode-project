"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import Reports from "@/components/templates/Reports";
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

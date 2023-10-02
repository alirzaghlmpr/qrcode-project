"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import LeavageFormAdmin from "@/components/templates/LeavageFormAdmin";
import { AdminNavbarItems } from "@/constants";
const Leavage = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <LeavageFormAdmin />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <LeavageFormAdmin />
    </DesktopDasboard>
  );
};

export default Leavage;

"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import LeavageFormAdmin from "@/components/LeavageFormAdmin";
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

"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import LeavageForm from "@/components/templates/LeavageForm";
import { UserNavbarItems } from "@/constants";
const Leavage = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <LeavageForm />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <LeavageForm />
    </DesktopDasboard>
  );
};

export default Leavage;

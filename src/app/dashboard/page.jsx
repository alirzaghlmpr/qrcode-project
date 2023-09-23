"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import QRcodeGenerator from "@/components/QRcodeGenerator";
import { useWindowSize } from "@uidotdev/usehooks";
import { UserNavbarItems } from "@/constants";
const Dashboard = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <QRcodeGenerator />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <QRcodeGenerator />
    </DesktopDasboard>
  );
};

export default Dashboard;

"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import QRcodeGenerator from "@/components/QRcodeGenerator";
import { useWindowSize } from "@uidotdev/usehooks";

const Dashboard = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard>
      <QRcodeGenerator />
    </MobileDashboard>
  ) : (
    <DesktopDasboard>
      <QRcodeGenerator />
    </DesktopDasboard>
  );
};

export default Dashboard;

"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import { useScreenSize } from "@/hooks";
const Dashboard = () => {
  const { width } = useScreenSize();
  return width < 768 ? <MobileDashboard /> : <DesktopDasboard />;
};

export default Dashboard;

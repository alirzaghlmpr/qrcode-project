"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import { useScreenSize } from "@/hooks";
const Dashboard = () => {
  const { width } = useScreenSize();
  return width > 768 ? <Sidebar /> : <MobileNavigation />;
};

export default Dashboard;

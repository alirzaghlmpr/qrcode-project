"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import TableHistory from "@/components/TableHistory";
import { useWindowSize } from "@uidotdev/usehooks";
import { UserNavbarItems } from "@/constants";

const History = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <TableHistory />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <TableHistory />
    </DesktopDasboard>
  );
};

export default History;
